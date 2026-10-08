// Dịch vụ tổng hợp âm thanh hiệu ứng (SFX) bằng Web Audio API thuần
// Hoạt động 100% offline, không độ trễ, không sợ lỗi mạng hay file 404.

class SFXService {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  // Khởi tạo AudioContext sau tương tác của người dùng
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
  }

  // 1. Hiệu ứng Pop bong bóng (khi chạm chữ, nhấc hoa, chuyển câu)
  playPop() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      // Biến thiên tần số tạo tiếng "bốp/pop" kẹo ngọt
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.07);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      console.warn('SFX Pop error:', e);
    }
  }

  // 2. Hiệu ứng Chime leng keng (khi chọn đúng)
  playChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      // Hợp âm thánh thót C6, E6, G6, C7
      const notes = [1046.5, 1318.5, 1568.0, 2093.0];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteStart = now + idx * 0.07;
        const noteDuration = 0.45;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0, noteStart);
        gain.gain.linearRampToValueAtTime(0.25, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDuration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + noteDuration + 0.05);
      });
    } catch (e) {
      console.warn('SFX Chime error:', e);
    }
  }

  // 3. Hiệu ứng Boing lò xo hoạt hình (khi chọn nhầm chữ - vui nhộn, không quở trách bé)
  playBoing() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Hiệu ứng pitch nảy như lò xo phim hoạt hình
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.12);
      osc.frequency.linearRampToValueAtTime(260, now + 0.22);
      osc.frequency.linearRampToValueAtTime(160, now + 0.32);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {
      console.warn('SFX Boing error:', e);
    }
  }

  // 4. Hiệu ứng Fanfare chúc mừng chiến thắng (khi hoàn thành 30 câu)
  playCelebration() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const melody = [
        { note: 523.25, duration: 0.15 }, // C5
        { note: 659.25, duration: 0.15 }, // E5
        { note: 783.99, duration: 0.15 }, // G5
        { note: 1046.5, duration: 0.35 }  // C6
      ];

      const now = this.ctx.currentTime;
      let startOffset = 0;

      melody.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + startOffset;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.note, startTime);

        gain.gain.setValueAtTime(0.28, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + item.duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + item.duration + 0.05);

        startOffset += item.duration * 0.85;
      });
    } catch (e) {
      console.warn('SFX Celebration error:', e);
    }
  }
}

export const sfx = new SFXService();
