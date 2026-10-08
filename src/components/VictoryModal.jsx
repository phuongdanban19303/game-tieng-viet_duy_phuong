import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';

export default function VictoryModal({ gameName, starsWon, onRestart }) {
  useEffect(() => {
    // Kích hoạt âm thanh chiến thắng
    sfx.playCelebration();
    tts.speak(`Hoan hô bé đã xuất sắc hoàn thành 30 câu hỏi của ${gameName}! Bé đạt được ${starsWon} ngôi sao vàng!`);

    // Bắn pháo hoa giấy confetti
    try {
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#ff758c', '#8e78ff', '#2ecc71', '#feca57', '#48dbfb'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  }, [gameName, starsWon]);

  return (
    <div className="modal-overlay">
      <div className="victory-card">
        <div className="cup-emoji">🏆</div>
        <h2 className="victory-title">BÉ QUÁ XUẤT SẮC!</h2>
        <p className="victory-desc">
          Bé đã chinh phục toàn bộ 30 câu hỏi của <strong>{gameName}</strong> và tích lũy được <strong>⭐ {starsWon} sao</strong>!
        </p>
        <button className="victory-action-btn" onClick={onRestart}>
          🎉 CHƠI LẠI TỪ ĐẦU
        </button>
      </div>
    </div>
  );
}
