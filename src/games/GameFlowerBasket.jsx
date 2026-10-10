import React, { useState, useEffect } from 'react';
import { game2Questions } from '../data/game2Questions';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';
import { storageService } from '../services/storageService';
import ProgressBar from '../components/ProgressBar';
import VictoryModal from '../components/VictoryModal';
import CuteFlower from '../components/CuteFlower';
import IllustrationImage from '../components/IllustrationImage';

export default function GameFlowerBasket({ onAddStar, onBackToLobby }) {
  // Khôi phục tiến trình câu hỏi đã lưu từ LocalStorage
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = storageService.getGameProgress('game2');
    return saved.currentIndex || 0;
  });

  const [sessionStars, setSessionStars] = useState(() => {
    const saved = storageService.getGameProgress('game2');
    return saved.stars || 0;
  });

  const [isWrong, setIsWrong] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBasketHovered, setIsBasketHovered] = useState(false);
  const [pickedFlower, setPickedFlower] = useState(null);

  const currentQ = game2Questions[currentIndex];
  const flowerOptions = ['o', 'ô', 'ơ'];

  // Lưu tiến trình mỗi khi đổi câu
  useEffect(() => {
    storageService.saveGameProgress('game2', {
      currentIndex,
      stars: sessionStars,
      isCompleted
    });
  }, [currentIndex, sessionStars, isCompleted]);

  useEffect(() => {
    if (!currentQ) return;
    setIsWrong(false);
    setIsSuccess(false);
    setPickedFlower(null);

    let active = true;
    const timeout = setTimeout(() => {
      if (active) {
        tts.speak(`${currentQ.speechHint}. Hãy hái bông hoa có chữ cái đúng nhé!`);
      }
    }, 350);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const handlePickFlower = async (letter) => {
    if (isSuccess) return;

    sfx.playPop();

    if (letter === currentQ.correct) {
      setPickedFlower(letter);
      setIsSuccess(true);
      setIsWrong(false);
      sfx.playChime();
      onAddStar();
      setSessionStars(prev => prev + 1);

      // ĐỢI NÓI XONG HOÀN TOÀN TỪ VỰNG VÀ LỜI KHEN
      await tts.speakCorrect(currentQ.wordHint);

      // Nghỉ nhẹ 0.4s
      await new Promise(r => setTimeout(r, 400));

      if (currentIndex < game2Questions.length - 1) {
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
    setIsBasketHovered(true);
  };

  const handleDragLeave = () => {
    setIsBasketHovered(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsBasketHovered(false);
    const letter = e.dataTransfer.getData('text/plain');
    if (letter) {
      handlePickFlower(letter);
    }
  };

  const handleRestart = () => {
    storageService.resetGameProgress('game2');
    setCurrentIndex(0);
    setSessionStars(0);
    setIsCompleted(false);
    setPickedFlower(null);
    sfx.playPop();
    tts.speak('Bắt đầu chơi lại từ câu 1 nhé!');
  };

  if (isCompleted) {
    return (
      <VictoryModal
        gameName="Bé Hái Hoa"
        starsWon={sessionStars}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="game2-wrapper">
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
        totalCount={game2Questions.length}
        stars={sessionStars}
      />

      <div className={`game2-stage ${isWrong ? 'shake-anim' : ''}`}>
        <div className="rainbow-bg-decor" />

        <div className="badge-header" style={{ background: '#fff0f3', borderColor: '#ffccd5', color: '#e84393' }}>
          <span>🌸 BÉ HÁI HOA - Chinh phục o • ô • ơ</span>
        </div>

        <div className="game2-layout">
          {/* Cột bên trái: Thẻ gợi ý từ và ảnh minh họa thực tế */}
          <div className="hint-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <div className="hint-chip">
                <span>✨ Từ gợi ý: {currentQ.wordHint}</span>
              </div>
              <button
                onClick={() => {
                  sfx.playPop();
                  tts.speak(`${currentQ.speechHint}. Hãy hái bông hoa có chữ cái đúng nhé!`);
                }}
                title="Nghe lại gợi ý"
                style={{
                  border: 'none',
                  background: '#fff0f3',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                }}
              >
                🔊
              </button>
            </div>

            {/* Ảnh minh họa thực tế sắc nét, sống động cho câu hỏi */}
            <div
              className="hint-illustration-box"
              onClick={() => {
                sfx.playPop();
                tts.speak(`${currentQ.speechHint}. Hãy hái bông hoa có chữ cái đúng nhé!`);
              }}
              title="Bấm vào ảnh để nghe gợi ý"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                cursor: 'pointer'
              }}
            >
              <IllustrationImage image={currentQ.image} name={currentQ.wordHint} size={140} />
            </div>

            <div className="hint-word-display" style={{ fontSize: '4.2rem' }}>
              {currentQ.wordPattern.split('?').map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  <span>{part}</span>
                  {idx < arr.length - 1 && (
                    <span className="hint-slot-question" style={{ fontSize: '3.8rem', padding: '2px 22px' }}>
                      {pickedFlower ? pickedFlower : '?'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="hint-instruction">
              Hãy hái bông hoa có chữ cái đúng nhé!
            </p>
          </div>

          {/* Cột bên phải: Chiếc giỏ và 3 bông hoa thật sự xòe cánh tròn xinh xắn */}
          <div className="basket-area">
            {/* Chiếc giỏ đựng hoa */}
            <div
              className={`woven-basket ${isBasketHovered ? 'basket-hovered' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              title="Kéo bông hoa vào đây"
            >
              <h3 className="basket-title">BÔNG HOA CHỮ CÁI</h3>
            </div>

            {/* Hàng 3 bông hoa 6 cánh to rõ nét */}
            <div className="flowers-row" style={{ gap: '22px', flexWrap: 'wrap' }}>
              {flowerOptions.map((letter) => {
                let flowerType = 'pink';
                if (letter === 'ô' || letter === 'Ô') flowerType = 'purple';
                if (letter === 'ơ' || letter === 'Ơ') flowerType = 'mint';

                return (
                  <CuteFlower
                    key={letter}
                    letter={letter}
                    type={flowerType}
                    size={128}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, letter)}
                    onPick={() => handlePickFlower(letter)}
                  />
                );
              })}
            </div>

            <div className="cheer-banner">
              <span>Giỏi lắm! Kéo bông hoa vào giỏ nhé!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
