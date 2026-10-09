// Dịch vụ phát âm tiếng Việt chuẩn 100% (Vietnamese TTS)
// Đợi nói xong câu cũ mới kết thúc (onended), tránh nói chèn nhau hoặc bị cắt nửa chừng.

class AudioService {
  constructor() {
    this.audioCache = new Map();
    this.currentAudio = null;
    this.isMuted = false;
    this.isUnlocked = false;
    this.vietnameseVoice = null;
    this.isPlaying = false;

    this.initVoices();
  }

  initVoices() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const findViVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const found = voices.find(v => 
        (v.lang && (v.lang.toLowerCase().startsWith('vi') || v.lang.toLowerCase().includes('viet'))) ||
        (v.name && (v.name.toLowerCase().includes('vietnam') || v.name.toLowerCase().includes('tiếng việt')))
      );
      if (found) {
        this.vietnameseVoice = found;
      }
    };

    findViVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findViVoice;
    }
  }

  unlockAudio() {
    if (this.isUnlocked) return;
    this.isUnlocked = true;
    try {
      const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      silentAudio.play().catch(() => {});
    } catch (e) {}
  }

  setMuted(muted) {
    this.isMuted = muted;
    this.stop();
  }

  stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    this.isPlaying = false;
  }

  // Phương thức chính phát âm tiếng Việt: TRẢ VỀ PROMISE CHỈ RESOLVE KHI NÓI XONG!
  speak(text) {
    if (this.isMuted || !text) return Promise.resolve();

    const cleanText = text.trim();
    if (!cleanText) return Promise.resolve();

    // Dừng âm thanh cũ trước khi nói câu mới
    this.stop();

    const encoded = encodeURIComponent(cleanText);
    const audioUrl = `/api/tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;

    return new Promise(async (resolve) => {
      this.isPlaying = true;
      let playedSuccess = false;

      // 1. Thử phát từ Audio proxy (/api/tts do Vercel Serverless Function hoặc Vite Proxy xử lý)
      try {
        let audio;
        if (this.audioCache.has(cleanText)) {
          audio = this.audioCache.get(cleanText).cloneNode();
        } else {
          audio = new Audio(audioUrl);
          audio.preload = 'auto';
          this.audioCache.set(cleanText, audio);
        }

        const playFinished = new Promise((res) => {
          let done = false;
          const finish = (ok) => {
            if (!done) {
              done = true;
              this.isPlaying = false;
              res(ok);
            }
          };

          // Sự kiện nói xong bình thường
          audio.onended = () => finish(true);
          audio.onerror = () => finish(false);

          // Timeout dự phòng 5s
          setTimeout(() => finish(false), 5000);
        });

        this.currentAudio = audio;
        await audio.play();

        // Đợi audio nói xong hoàn toàn!
        playedSuccess = await playFinished;
      } catch (err) {
        playedSuccess = false;
      }

      if (!playedSuccess) {
        // Fallback sang SpeechSynthesis của trình duyệt
        this.speakFallbackStrictVi(cleanText, resolve);
      } else {
        resolve();
      }
    });
  }

  speakFallbackStrictVi(text, onComplete) {
    if (this.isMuted || typeof window === 'undefined' || !window.speechSynthesis) {
      this.isPlaying = false;
      if (onComplete) onComplete();
      return;
    }

    if (!this.vietnameseVoice) {
      const voices = window.speechSynthesis.getVoices();
      this.vietnameseVoice = voices.find(v => 
        (v.lang && (v.lang.toLowerCase().startsWith('vi') || v.lang.toLowerCase().includes('viet'))) ||
        (v.name && (v.name.toLowerCase().includes('vietnam') || v.name.toLowerCase().includes('tiếng việt')))
      );
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.vietnameseVoice) {
        utterance.voice = this.vietnameseVoice;
        utterance.lang = this.vietnameseVoice.lang || 'vi-VN';
      } else {
        utterance.lang = 'vi-VN';
      }
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      utterance.onend = () => {
        this.isPlaying = false;
        if (onComplete) onComplete();
      };
      utterance.onerror = () => {
        this.isPlaying = false;
        if (onComplete) onComplete();
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      this.isPlaying = false;
      if (onComplete) onComplete();
    }
  }

  speakLetter(letter) {
    const letterMap = {
      'O': 'chữ O',
      'o': 'chữ O',
      'Ô': 'chữ Ô',
      'ô': 'chữ Ô',
      'Ơ': 'chữ Ơ',
      'ơ': 'chữ Ơ'
    };
    const text = letterMap[letter] || `chữ ${letter}`;
    return this.speak(text);
  }

  speakCorrect(word) {
    const praiseList = [
      'Đúng rồi! Bé giỏi quá!',
      'Chính xác! Hoan hô bé!',
      'Tuyệt vời! Bé thật là thông minh!'
    ];
    const praise = praiseList[Math.floor(Math.random() * praiseList.length)];
    const text = word ? `${praise}. ${word}` : praise;
    return this.speak(text);
  }

  speakWrong() {
    const encourageList = [
      'Chưa đúng rồi! Bé thử lại nhé!',
      'Cố lên bé ơi! Bé nhìn kỹ lại xem nào!',
      'Gần đúng rồi, bé chọn lại nhé!'
    ];
    const text = encourageList[Math.floor(Math.random() * encourageList.length)];
    return this.speak(text);
  }
}

export const tts = new AudioService();
