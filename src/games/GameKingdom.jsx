import React, { useState, useEffect } from 'react';
import { game1Questions } from '../data/game1Questions';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';
import { storageService } from '../services/storageService';
import ProgressBar from '../components/ProgressBar';
import VictoryModal from '../components/VictoryModal';
import IllustrationImage from '../components/IllustrationImage';

export default function GameKingdom({ onAddStar, onBackToLobby }) {
  // Khôi phục tiến trình câu hỏi từ LocalStorage
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = storageService.getGameProgress('game1');
    return saved.currentIndex || 0;
  });

  const [sessionStars, setSessionStars] = useState(() => {
    const saved = storageService.getGameProgress('game1');
    return saved.stars || 0;
  });

  const [filledLetter, setFilledLetter] = useState(null);
  const [isWrong, setIsWrong] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const currentQ = game1Questions[currentIndex];

  // Lưu tiến trình mỗi khi đổi câu
  useEffect(() => {
    storageService.saveGameProgress('game1', {
      currentIndex,
      stars: sessionStars,
      isCompleted
    });
  }, [currentIndex, sessionStars, isCompleted]);

  useEffect(() => {
    if (!currentQ) return;
    setFilledLetter(null);
    setIsWrong(false);
    setIsSuccess(false);

    let active = true;
    const timeout = setTimeout(() => {
      if (active) {
        tts.speak(`Kéo chữ cái còn thiếu vào ô trống: ${currentQ.name}`);
      }
    }, 350);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const handleSelectLetter = async (letter) => {
    if (isSuccess) return;

    sfx.playPop();

    if (letter === currentQ.correct) {
      setFilledLetter(letter);
      setIsSuccess(true);
      setIsWrong(false);
      sfx.playChime();
      onAddStar();
      setSessionStars(prev => prev + 1);

      // ĐỢI NÓI XONG HOÀN TOÀN KHÔNG BỊ CẮT HOẶC ĐÈ NHAU
      await tts.speakCorrect(currentQ.name);

      // Nghỉ nhẹ cho bé ngắm thành quả
      await new Promise(r => setTimeout(r, 400));

      if (currentIndex < game1Questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsCompleted(true);
      }
    } else {
      setIsWrong(true);
      sfx.playBoing();
      await tts.speakWrong();
      setIsWrong(false);
    }
  };

  const handleDragStart = (e, letter) => {
    sfx.playPop();
    tts.speakLetter(letter);
    e.dataTransfer.setData('text/plain', letter);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const letter = e.dataTransfer.getData('text/plain');
    if (letter) {
      handleSelectLetter(letter);
    }
  };

  const handleRestart = () => {
    storageService.resetGameProgress('game1');
    setCurrentIndex(0);
    setSessionStars(0);
    setIsCompleted(false);
    setFilledLetter(null);
    sfx.playPop();
    tts.speak('Bắt đầu chơi lại từ câu 1 nhé!');
  };

  if (isCompleted) {
    return (
      <VictoryModal
        gameName="Vương Quốc Chữ Cái"
        starsWon={sessionStars}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="game1-wrapper">
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
        totalCount={game1Questions.length}
        stars={sessionStars}
      />

      <div className={`game1-stage ${isWrong ? 'shake-anim' : ''}`}>
        <div className="badge-header">
          <span>⭐ VƯƠNG QUỐC CHỮ CÁI</span>
        </div>

        {/* Khung nhân vật đồ họa Vector sắc nét thay cho icon emoji */}
        <div
          className="hero-avatar-box"
          onClick={() => {
            sfx.playPop();
            tts.speak(currentQ.name);
          }}
          title="Bấm vào để nghe lại tên con vật"
          style={{ width: '150px', height: '150px', padding: '6px' }}
        >
          <IllustrationImage name={currentQ.name} size={135} />
        </div>

        <div
          className="hero-caption"
          onClick={() => {
            sfx.playPop();
            tts.speak(currentQ.name);
          }}
          style={{ cursor: 'pointer', fontSize: '1.45rem' }}
        >
          <span>🏷️ {currentQ.name.toUpperCase()}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <h2 className="game-title-prompt" style={{ marginBottom: 0 }}>Kéo chữ cái còn thiếu vào ô trống</h2>
          <button
            onClick={() => {
              sfx.playPop();
              tts.speak(`Kéo chữ cái còn thiếu vào ô trống: ${currentQ.name}`);
            }}
            title="Bấm để nghe lại đề bài"
            style={{
              border: 'none',
              background: '#fff0f3',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              cursor: 'pointer',
              fontSize: '1.3rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
            }}
          >
            🔊
          </button>
        </div>
        <div style={{ height: '22px' }}></div>

        {/* Vùng từ đố khuyết chữ cái TO RÕ NÉT */}
        <div className="word-puzzle-row" style={{ fontSize: '4.2rem', gap: '18px' }}>
          <span>{currentQ.prefix}</span>

          <div
            className={`drop-target-slot ${isDragOver ? 'hovered' : ''} ${filledLetter ? 'filled' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ width: '96px', height: '96px', fontSize: '3.8rem' }}
          >
            {filledLetter || '?'}
          </div>

          <span>{currentQ.suffix}</span>
        </div>

        {/* Khay lựa chọn 3D: O - Ô - Ơ CHỮ TO RÕ RÀNG */}
        <div className="choice-dock" style={{ gap: '26px' }}>
          {currentQ.options.map((opt) => {
            let colorClass = 'pink';
            if (opt === 'Ô') colorClass = 'purple';
            if (opt === 'Ơ') colorClass = 'green';

            return (
              <button
                key={opt}
                draggable
                onDragStart={(e) => handleDragStart(e, opt)}
                onClick={() => handleSelectLetter(opt)}
                className={`letter-block-btn ${colorClass}`}
                title={`Chọn chữ ${opt}`}
                style={{ width: '105px', height: '105px', fontSize: '3.6rem' }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
