import React from 'react';
import { sfx } from '../services/sfxService';
import { tts } from '../services/audioService';

export default function Navbar({ activeTab, onSelectTab, totalStars, soundMuted, onToggleSound }) {
  const tabs = [
    { id: 'lobby', title: '🏠 SẢNH TRÒ CHƠI' },
    { id: 'game1', title: '🏰 Vương Quốc Chữ Cái' },
    { id: 'game2', title: '🌸 Bé Hái Hoa' },
    { id: 'game3', title: '👦 Bé Tài Ba' }
  ];

  return (
    <nav className="top-navbar">
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => {
              sfx.playPop();
              tts.stop();
              onSelectTab(tab.id);
            }}
          >
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="stats-bar">
        <div className="star-counter" title="Tổng số sao đạt được">
          <span className="star-icon">⭐</span>
          <span>{totalStars}</span>
        </div>

        <button
          className="sound-toggle-btn"
          onClick={() => {
            sfx.playPop();
            onToggleSound();
          }}
          title={soundMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        >
          {soundMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </nav>
  );
}
