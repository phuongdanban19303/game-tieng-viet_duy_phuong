import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeLobby from './components/HomeLobby';
import GameKingdom from './games/GameKingdom';
import GameFlowerBasket from './games/GameFlowerBasket';
import GameCleverChoice from './games/GameCleverChoice';
import { storageService } from './services/storageService';
import { tts } from './services/audioService';
import { sfx } from './services/sfxService';

export default function App() {
  // Mặc định khởi đầu tại Sảnh chờ 3 khối game riêng biệt
  const [activeTab, setActiveTab] = useState('lobby');
  const [totalStars, setTotalStars] = useState(0);
  const [soundMuted, setSoundMuted] = useState(false);

  useEffect(() => {
    const saved = storageService.loadState();
    setTotalStars(saved.stars || 0);

    // Mở khóa âm thanh trình duyệt ngay khi người dùng chạm hoặc click lần đầu tiên
    const handleFirstUserInteraction = () => {
      tts.unlockAudio();
      sfx.initContext();
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction);
    window.addEventListener('touchstart', handleFirstUserInteraction);

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, []);

  const handleAddStar = () => {
    const newCount = storageService.addStar();
    setTotalStars(newCount);
  };

  const handleToggleSound = () => {
    const nextMuted = !soundMuted;
    setSoundMuted(nextMuted);
    tts.setMuted(nextMuted);
    sfx.setMuted(nextMuted);
  };

  const handleBackToLobby = () => {
    sfx.playPop();
    tts.stop();
    setActiveTab('lobby');
  };

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        totalStars={totalStars}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
      />

      <main className="game-stage-wrapper">
        {activeTab === 'lobby' && (
          <HomeLobby
            onSelectGame={setActiveTab}
            totalStars={totalStars}
          />
        )}

        {activeTab === 'game1' && (
          <GameKingdom
            onAddStar={handleAddStar}
            onBackToLobby={handleBackToLobby}
          />
        )}

        {activeTab === 'game2' && (
          <GameFlowerBasket
            onAddStar={handleAddStar}
            onBackToLobby={handleBackToLobby}
          />
        )}

        {activeTab === 'game3' && (
          <GameCleverChoice
            onAddStar={handleAddStar}
            onBackToLobby={handleBackToLobby}
          />
        )}
      </main>
    </div>
  );
}
