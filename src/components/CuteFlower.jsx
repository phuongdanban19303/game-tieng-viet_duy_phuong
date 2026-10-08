import React from 'react';

// Bông hoa 6 cánh mềm mại bo tròn như hoa anh đào / hoa cúc mầm non
// Chữ cái to đậm, rõ ràng, bé nhìn thấy ngay lập tức!
export default function CuteFlower({
  letter,
  type = 'pink', // 'pink', 'purple', 'mint'
  size = 126,
  onPick,
  draggable = true,
  onDragStart
}) {
  const configs = {
    pink: {
      petalColor: '#ff85a2',
      petalStroke: '#e0567a',
      centerBg: '#ffffff',
      textColor: '#2d3436'
    },
    purple: {
      petalColor: '#a29bfe',
      petalStroke: '#6c5ce7',
      centerBg: '#ffffff',
      textColor: '#2d3436'
    },
    mint: {
      petalColor: '#55efc4',
      petalStroke: '#00b894',
      centerBg: '#ffffff',
      textColor: '#2d3436'
    }
  };

  const cfg = configs[type] || configs.pink;

  return (
    <div
      className="cute-flower-wrapper"
      draggable={draggable}
      onDragStart={onDragStart}
      onClick={onPick}
      title={`Bông hoa chữ ${letter}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.12))'
        }}
      >
        {/* 6 cánh hoa tròn đều xòe quanh tâm */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
          <circle
            key={idx}
            cx={50 + 26 * Math.cos((angle * Math.PI) / 180)}
            cy={50 + 26 * Math.sin((angle * Math.PI) / 180)}
            r="19"
            fill={cfg.petalColor}
            stroke={cfg.petalStroke}
            strokeWidth="3.5"
          />
        ))}

        {/* Nhụy hoa tròn lớn ở giữa */}
        <circle
          cx="50"
          cy="50"
          r="26"
          fill={cfg.centerBg}
          stroke={cfg.petalStroke}
          strokeWidth="3"
        />

        {/* Đôi mắt cười ngộ nghĩnh dưới chân chữ */}
        <circle cx="44" cy="62" r="2.2" fill="#2d3436" />
        <circle cx="56" cy="62" r="2.2" fill="#2d3436" />
        <path
          d="M47 65 Q50 67.5 53 65"
          stroke="#2d3436"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Má hồng chúm chím */}
        <circle cx="39" cy="63.5" r="2" fill="#ff7675" opacity="0.6" />
        <circle cx="61" cy="63.5" r="2" fill="#ff7675" opacity="0.6" />
      </svg>

      {/* CHỮ CÁI O - Ô - Ơ SIÊU TO RÕ NÉT Ở TRUNG TÂM */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: `${size * 0.44}px`,
          fontWeight: 800,
          color: cfg.textColor,
          lineHeight: 1,
          fontFamily: 'var(--font-main)',
          userSelect: 'none',
          transform: 'translateY(-5px)',
          textShadow: '0 1px 2px rgba(255,255,255,0.8)'
        }}
      >
        {letter}
      </span>
    </div>
  );
}
