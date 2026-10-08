import React from 'react';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';

export default function HomeLobby({ onSelectGame, totalStars }) {
  const gamesList = [
    {
      id: 'game1',
      badge: '🏰 TRÒ CHƠI 1',
      title: 'VƯƠNG QUỐC CHỮ CÁI',
      subtitle: 'Điền chữ vào ô trống',
      icon: '🐄',
      cardClass: 'lobby-card-pink',
      btnClass: 'lobby-btn-pink',
      instruction: 'Bé nhìn hình con vật, kéo hoặc chạm chữ cái O - Ô - Ơ còn thiếu vào ô trống để hoàn thành tên nhé!',
      features: ['30 câu hỏi động vật & đồ vật', 'Kéo thả hoặc chạm trực tiếp', 'Giọng đọc chuẩn Google tiếng Việt']
    },
    {
      id: 'game2',
      badge: '🌸 TRÒ CHƠI 2',
      title: 'BÉ HÁI HOA',
      subtitle: 'Thu hoạch hoa vào giỏ',
      icon: '🧺',
      cardClass: 'lobby-card-purple',
      btnClass: 'lobby-btn-purple',
      instruction: 'Đọc từ gợi ý, chọn và hái đúng bông hoa mặt cười chứa chữ cái O, Ô, Ơ bỏ vào chiếc giỏ mây xinh xắn!',
      features: ['30 bông hoa mặt cười ◕‿◕', 'Kéo hoa hoặc chạm vào giỏ', 'Âm thanh Chime & Pop vui nhộn']
    },
    {
      id: 'game3',
      badge: '👦 TRÒ CHƠI 3',
      title: 'BÉ TÀI BA',
      subtitle: 'Nghiêng đầu / Chọn Trái - Phải',
      icon: '🎯',
      cardClass: 'lobby-card-mint',
      btnClass: 'lobby-btn-mint',
      instruction: 'Luyện đôi mắt tinh anh: Chọn đáp án đúng bên Trái hoặc bên Phải bằng cách chạm thẻ hoặc bấm phím mũi tên!',
      features: ['30 câu đố chữ O, Ô, Ơ', 'Chạm thẻ hoặc phím mũi tên ← →', 'Luyện phản xạ nhanh cho bé']
    }
  ];

  const handleStartGame = (gameId, gameTitle) => {
    sfx.playPop();
    tts.speak(`Chào mừng bé đến với ${gameTitle}!`);
    onSelectGame(gameId);
  };

  return (
    <div className="home-lobby-container">
      {/* Tiêu đề sảnh chính rực rỡ */}
      <div className="lobby-header-banner">
        <div className="rainbow-tag">✨ KHU VƯỜN CHỮ CÁI MẦM NON ✨</div>
        <h1 className="lobby-main-title">BÉ VUI HỌC CHỮ CÁI: O • Ô • Ơ</h1>
        <p className="lobby-sub-title">
          Chọn một trò chơi bên dưới để cùng bé khám phá thế giới chữ cái tiếng Việt thật vui nhé!
        </p>
      </div>

      {/* 3 khối riêng biệt đại diện 3 game */}
      <div className="lobby-cards-grid">
        {gamesList.map((game) => (
          <div key={game.id} className={`lobby-game-card ${game.cardClass}`}>
            <div className="card-top-row">
              <span className="game-badge">{game.badge}</span>
              <span className="card-mascot-icon">{game.icon}</span>
            </div>

            <h2 className="game-card-title">{game.title}</h2>
            <p className="game-card-sub">{game.subtitle}</p>

            <div className="game-instruction-box">
              <div className="instruction-heading">
                <span>📖 CÁCH CHƠI:</span>
              </div>
              <p className="instruction-content">{game.instruction}</p>
            </div>

            <ul className="card-features-list">
              {game.features.map((feat, idx) => (
                <li key={idx}>⭐ {feat}</li>
              ))}
            </ul>

            <button
              className={`start-game-big-btn ${game.btnClass}`}
              onClick={() => handleStartGame(game.id, game.title)}
            >
              <span>▶ BẮT ĐẦU CHƠI</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
