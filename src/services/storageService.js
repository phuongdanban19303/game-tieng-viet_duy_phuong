// Quản lý trạng thái lưu trữ LocalStorage cho ứng dụng mầm non
const STORAGE_KEY = 'BE_VUI_HOC_CHU_OOO_STATE_V2';

const defaultState = {
  stars: 0,
  gameProgress: {
    game1: { currentIndex: 0, stars: 0, isCompleted: false },
    game2: { currentIndex: 0, stars: 0, isCompleted: false },
    game3: { currentIndex: 0, stars: 0, isCompleted: false }
  },
  soundEnabled: true
};

export const storageService = {
  loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...defaultState,
          ...parsed,
          gameProgress: {
            ...defaultState.gameProgress,
            ...(parsed.gameProgress || {})
          }
        };
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return defaultState;
  },

  saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  },

  addStar() {
    const current = this.loadState();
    current.stars = (current.stars || 0) + 1;
    this.saveState(current);
    return current.stars;
  },

  getGameProgress(gameKey) {
    const state = this.loadState();
    return state.gameProgress[gameKey] || { currentIndex: 0, stars: 0, isCompleted: false };
  },

  saveGameProgress(gameKey, progress) {
    const state = this.loadState();
    state.gameProgress[gameKey] = {
      ...state.gameProgress[gameKey],
      ...progress
    };
    this.saveState(state);
    return state.gameProgress[gameKey];
  },

  resetGameProgress(gameKey) {
    const state = this.loadState();
    state.gameProgress[gameKey] = { currentIndex: 0, stars: 0, isCompleted: false };
    this.saveState(state);
    return state.gameProgress[gameKey];
  },

  resetAllProgress() {
    this.saveState(defaultState);
    return defaultState;
  }
};
