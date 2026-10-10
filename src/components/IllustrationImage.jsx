import React, { useState } from 'react';

// Từ điển hình ảnh minh họa thực tế sắc nét, sống động chuẩn mầm non
// Nguồn ảnh Unsplash CDN chất lượng cao (w=300, h=300, fit=crop) với cơ chế fallback tự động
const REAL_IMAGE_MAP = {
  // Game 1 & Game 2 keywords
  'bò': {
    url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐄',
    title: 'Con bò sữa'
  },
  'cá voi': {
    url: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐳',
    title: 'Cá voi xanh'
  },
  'cá': {
    url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐟',
    title: 'Cá rô'
  },
  'cờ': {
    url: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🚩',
    title: 'Lá cờ đỏ'
  },
  'ô': {
    url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '☂️',
    title: 'Cái ô che mưa'
  },
  'bơ': {
    url: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🥑',
    title: 'Quả bơ xanh'
  },
  'gà': {
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐓',
    title: 'Gà trống'
  },
  'nho': {
    url: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🍇',
    title: 'Chùm nho tím'
  },
  'nơ': {
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🎀',
    title: 'Cái nơ xinh'
  },
  'tổ': {
    url: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🪺',
    title: 'Tổ chim'
  },
  'hồng': {
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🌹',
    title: 'Hoa hồng đỏ'
  },
  'chợ': {
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🏪',
    title: 'Chợ hoa quả'
  },
  'thỏ': {
    url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐰',
    title: 'Chú thỏ trắng'
  },
  'rốt': {
    url: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🥕',
    title: 'Củ cà rốt'
  },
  'hổ': {
    url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐯',
    title: 'Chú hổ dũng mãnh'
  },
  'thước': {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '📏',
    title: 'Thước đo kẻ gỗ'
  },
  'hồ': {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🌊',
    title: 'Bờ hồ nước xanh'
  },
  'giày': {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '👟',
    title: 'Đôi giày thể thao'
  },
  'lọ': {
    url: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🏺',
    title: 'Lọ hoa gốm'
  },
  'cơm': {
    url: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🍚',
    title: 'Bát cơm trắng'
  },
  'táo': {
    url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🍎',
    title: 'Quả táo đỏ'
  },
  'cốc': {
    url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🥛',
    title: 'Cái cốc thủy tinh'
  },
  'mơ': {
    url: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🍑',
    title: 'Trái mơ chín vàng'
  },
  'nồi': {
    url: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🍲',
    title: 'Cái nồi nấu ăn'
  },
  'bóng': {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🎈',
    title: 'Bóng bay sắc màu'
  },
  'vở': {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '📒',
    title: 'Quyển vở vẽ'
  },
  'xe': {
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🚗',
    title: 'Xe hơi màu đỏ'
  },
  'cột': {
    url: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🏛️',
    title: 'Cột cờ'
  },
  'đồ chơi': {
    url: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🧸',
    title: 'Gấu bông đồ chơi'
  },
  'chó': {
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐶',
    title: 'Chú chó đáng yêu'
  },
  // Game 2 specific items
  'cô': {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '👩‍🏫',
    title: 'Cô giáo mầm non'
  },
  'gỗ': {
    url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🪵',
    title: 'Khúc gỗ mộc'
  },
  'chò': {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🌳',
    title: 'Cây chò xanh'
  },
  'voi': {
    url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐘',
    title: 'Chú voi khổng lồ'
  },
  'rổ': {
    url: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🧺',
    title: 'Chiếc rổ đan mây'
  },
  'sợ': {
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '👻',
    title: 'Bé ngạc nhiên'
  },
  'lợn': {
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐷',
    title: 'Chú lợn con'
  },
  'kho': {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🏠',
    title: 'Nhà kho'
  },
  'số': {
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🔢',
    title: 'Các con số'
  },
  'cởi': {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '👟',
    title: 'Cởi giày'
  },
  'mở': {
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🎁',
    title: 'Mở hộp quà'
  },
  'đò': {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🛶',
    title: 'Con đò trên sông'
  },
  'tơ': {
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🧶',
    title: 'Sợi tơ mềm'
  },
  'con': {
    url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '🐄',
    title: 'Con bò'
  }
};

// Tìm thông tin ảnh phù hợp nhất theo từ khóa
function findImageInfo(name) {
  if (!name) return null;
  const lower = name.toLowerCase().trim();

  // 1. So khớp trực tiếp chuỗi dài trước (vd: cá voi, hoa hồng, cà rốt...)
  const priorityKeys = ['cá voi', 'hoa hồng', 'cà rốt', 'tổ chim', 'đồ chơi', 'chợ quê', 'bóng bay', 'vở vẽ', 'xe hơi', 'cột cờ', 'bát cơm', 'lọ hoa', 'quả táo', 'quả bơ', 'quả nho', 'cái cốc', 'cái nồi', 'cái nơ', 'trái mơ', 'bờ hồ'];
  for (const pk of priorityKeys) {
    if (lower.includes(pk)) {
      // Ánh xạ về key trong map
      if (pk === 'cá voi') return REAL_IMAGE_MAP['cá voi'];
      if (pk === 'hoa hồng') return REAL_IMAGE_MAP['hồng'];
      if (pk === 'cà rốt') return REAL_IMAGE_MAP['rốt'];
      if (pk === 'tổ chim') return REAL_IMAGE_MAP['tổ'];
      if (pk === 'đồ chơi') return REAL_IMAGE_MAP['đồ chơi'];
      if (pk === 'bóng bay') return REAL_IMAGE_MAP['bóng'];
      if (pk === 'vở vẽ') return REAL_IMAGE_MAP['vở'];
      if (pk === 'xe hơi') return REAL_IMAGE_MAP['xe'];
      if (pk === 'bát cơm') return REAL_IMAGE_MAP['cơm'];
      if (pk === 'lọ hoa') return REAL_IMAGE_MAP['lọ'];
      if (pk === 'quả táo') return REAL_IMAGE_MAP['táo'];
      if (pk === 'quả bơ') return REAL_IMAGE_MAP['bơ'];
      if (pk === 'quả nho') return REAL_IMAGE_MAP['nho'];
      if (pk === 'cái cốc') return REAL_IMAGE_MAP['cốc'];
      if (pk === 'cái nồi') return REAL_IMAGE_MAP['nồi'];
      if (pk === 'cái nơ') return REAL_IMAGE_MAP['nơ'];
      if (pk === 'trái mơ') return REAL_IMAGE_MAP['mơ'];
      if (pk === 'bờ hồ') return REAL_IMAGE_MAP['hồ'];
    }
  }

  // 2. So khớp từng từ khóa đơn
  for (const [key, item] of Object.entries(REAL_IMAGE_MAP)) {
    if (lower.includes(key)) {
      return item;
    }
  }

  return {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=300&h=300&q=80',
    emoji: '✨',
    title: name
  };
}

export default function IllustrationImage({ name, size = 135, image }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const info = findImageInfo(name);
  const targetUrl = image || info?.url;

  if (!targetUrl || hasError) {
    // Fallback sang biểu tượng Emoji to tròn sắc nét nếu ảnh chưa kịp tải hoặc offline
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #ffeef2 0%, #fff6e5 100%)',
          border: '4px solid #ffffff',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${size * 0.52}px`,
          userSelect: 'none'
        }}
      >
        <span>{info?.emoji || '🌸'}</span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 8px 22px rgba(0, 0, 0, 0.12)',
        border: '4px solid #ffffff',
        background: '#fff0f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Hiệu ứng loading mượt mà */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #fdf2f8 0%, #f0fdf4 100%)',
            fontSize: `${size * 0.45}px`
          }}
        >
          <span>{info.emoji}</span>
        </div>
      )}

      {/* Ảnh chụp thực tế sắc nét, độ phân giải cao */}
      <img
        src={targetUrl}
        alt={info?.title || name}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.25s ease, transform 0.25s ease'
        }}
      />
    </div>
  );
}
