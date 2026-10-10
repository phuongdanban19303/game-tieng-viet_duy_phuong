import React from 'react';

// Bông hoa 6 cánh mềm mại bo tròn
// Nhụy hoa tròn lớn, chữ cái o - ô - ơ to rõ nét, không còn mắt miệng cười
export default function CuteFlower({
  letter,
  type = 'pink', // 'pink', 'purple', 'mint'
  size = 136,
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
          filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.14))'
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

        {/* Nhụy hoa tròn lớn màu trắng ở giữa (đã mở rộng để chữ to nổi bật) */}
        <circle
          cx="50"
          cy="50"
          r="29"
          fill={cfg.centerBg}
          stroke={cfg.petalStroke}
          strokeWidth="3.5"
        />
      </svg>

      {/* CHỮ CÁI o - ô - ơ SIÊU TO RÕ NÉT Ở TRUNG TÂM NHỤY HOA */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: `${size * 0.58}px`,
          fontWeight: 800,
          color: cfg.textColor,
          lineHeight: 1,
          fontFamily: 'var(--font-letter)',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-2px)'
        }}
      >
        {letter}
      </span>
    </div>
  );
}
