import React, { useState, useEffect, useCallback } from 'react';
import { game3Questions } from '../data/game3Questions';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';
import { storageService } from '../services/storageService';
import ProgressBar from '../components/ProgressBar';
import VictoryModal from '../components/VictoryModal';

export default function GameCleverChoice({ onAddStar, onBackToLobby }) {
  // Khôi phục tiến trình câu hỏi từ LocalStorage
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = storageService.getGameProgress('game3');
    return saved.currentIndex || 0;
  });

  const [sessionStars, setSessionStars] = useState(() => {
    const saved = storageService.getGameProgress('game3');
    return saved.stars || 0;
  });

  const [isWrong, setIsWrong] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedSide, setSelectedSide] = useState(null);

  const currentQ = game3Questions[currentIndex];

  // Lưu tiến trình mỗi khi đổi câu
  useEffect(() => {
    storageService.saveGameProgress('game3', {
      currentIndex,
      stars: sessionStars,
      isCompleted
    });
  }, [currentIndex, sessionStars, isCompleted]);

  const speakCurrentQuestion = useCallback(() => {
    if (!currentQ) return;
    tts.speak(currentQ.question);
  }, [currentQ]);

  useEffect(() => {
    if (!currentQ) return;
    setIsWrong(false);
    setIsSuccess(false);
    setSelectedSide(null);

    let active = true;
    const timeout = setTimeout(() => {
      if (active) {
        speakCurrentQuestion();
      }
    }, 350);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [currentIndex, speakCurrentQuestion]);

  const handleChoose = useCallback(async (side) => {
    if (isSuccess || !currentQ) return;

    setSelectedSide(side);
    sfx.playPop();

    const chosenOption = side === 'left' ? currentQ.left : currentQ.right;

    if (side === currentQ.correctSide) {
      setIsSuccess(true);
      setIsWrong(false);
      sfx.playChime();
      onAddStar();
      setSessionStars(prev => prev + 1);

      // ĐỢI NÓI XONG HOÀN TOÀN TỪ / CHỮ ĐÁP ÁN ĐÚNG
      await tts.speakCorrect(chosenOption.letter);

      // Nghỉ nhẹ 0.4s
      await new Promise(r => setTimeout(r, 400));

      if (currentIndex < game3Questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsCompleted(true);
      }
    } else {
      setIsWrong(true);
      sfx.playBoing();
      await tts.speakWrong();
      setIsWrong(false);
      setSelectedSide(null);
    }
  }, [currentQ, currentIndex, isSuccess, onAddStar]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleChoose('left');
      } else if (e.key === 'ArrowRight') {
        handleChoose('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleChoose]);

  const handleRestart = () => {
    storageService.resetGameProgress('game3');
    setCurrentIndex(0);
    setSessionStars(0);
    setIsCompleted(false);
    setSelectedSide(null);
    sfx.playPop();
    tts.speak('Bắt đầu chơi lại từ câu 1 nhé!');
  };

  if (isCompleted) {
    return (
      <VictoryModal
        gameName="Bé Tài Ba"
        starsWon={sessionStars}
        onRestart={handleRestart}
      />
    );
  }

  const currentStep = String(currentIndex + 1).padStart(2, '0');

  return (
    <div className="game3-wrapper">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
        <button
          className="back-to-lobby-btn"
          onClick={() => {
            tts.stop();
            onBackToLobby();
          }}
        >
          <span>← VỀ SẢNH CHỌN GAME</span>
        </button>

        <button
          className="reset-game-btn"
          onClick={handleRestart}
          title="Chơi lại trò này từ câu 1"
        >
          <span>🔄 CHƠI LẠI TỪ CÂU 1</span>
        </button>
      </div>

      <ProgressBar
        currentIndex={currentIndex}
        totalCount={game3Questions.length}
        stars={sessionStars}
      />

      <div className={`game3-stage ${isWrong ? 'shake-anim' : ''}`}>
        {/* Banner câu hỏi */}
        <div className="game3-question-banner">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span className="game3-counter-tag">CÂU {currentStep}/30</span>
            <button
              onClick={() => {
                sfx.playPop();
                speakCurrentQuestion();
              }}
              title="Nghe lại câu hỏi"
              style={{
                border: 'none',
                background: '#fff0f3',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                fontSize: '1.15rem'
              }}
            >
              🔊
            </button>
          </div>

          <h2 className="game3-big-question">{currentQ.question}</h2>
          <p className="game3-sub-instruction">Nghiêng đầu hoặc bấm mũi tên để chọn</p>
        </div>

        {/* Khung 3 cột: Cánh trái - Mascot giữa - Cánh phải */}
        <div className="clever-center-wrapper">
          {/* Cánh trái CHỮ TO RÕ RÀNG */}
          <div
            className={`choice-wing-card wing-left ${selectedSide === 'left' && isSuccess ? 'wing-selected-ok' : ''}`}
            onClick={() => handleChoose('left')}
            title="Chọn bên trái (Phím Mũi tên Trái)"
          >
            <div className="wing-header-tag">← {currentQ.left.label}</div>
            <div className="wing-huge-letter" style={{ fontSize: '5.5rem' }}>{currentQ.left.letter}</div>
            {currentQ.left.hint && (
              <span className="wing-hint-pill">{currentQ.left.hint}</span>
            )}
          </div>

          {/* Mascot bé thông minh ở giữa */}
          <div className="center-mascot-box">
            <div className="mascot-avatar-circle" style={{ width: '105px', height: '105px', fontSize: '3.6rem' }}>
              <span>👦</span>
            </div>
            <div className="mascot-status-tag">ĐÃ SẴN SÀNG</div>
            <span className="mascot-hint-text">Giữ đầu thẳng để chờ câu hỏi</span>
          </div>

          {/* Cánh phải CHỮ TO RÕ RÀNG */}
          <div
            className={`choice-wing-card wing-right ${selectedSide === 'right' && isSuccess ? 'wing-selected-ok' : ''}`}
            onClick={() => handleChoose('right')}
            title="Chọn bên phải (Phím Mũi tên Phải)"
          >
            <div className="wing-header-tag">{currentQ.right.label} →</div>
            <div className="wing-huge-letter" style={{ fontSize: '5.5rem' }}>{currentQ.right.letter}</div>
            {currentQ.right.hint && (
              <span className="wing-hint-pill">{currentQ.right.hint}</span>
            )}
          </div>
        </div>

        {/* Nút bấm mũi tên to dưới đáy */}
        <div className="bottom-arrow-controls">
          <button
            className="big-arrow-btn btn-left"
            onClick={() => handleChoose('left')}
            title="Bấm chọn bên trái (Mũi tên ←)"
          >
            ←
          </button>
          <button
            className="big-arrow-btn btn-right"
            onClick={() => handleChoose('right')}
            title="Bấm chọn bên phải (Mũi tên →)"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
