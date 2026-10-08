import React from 'react';

// Bộ hình ảnh minh họa đồ họa Vector sống động cho trẻ mầm non
export default function IllustrationImage({ name, size = 130 }) {
  const normalized = name ? name.toLowerCase() : '';

  if (normalized.includes('bò')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Thân và đầu bò sữa */}
        <circle cx="50" cy="54" r="34" fill="#ffffff" stroke="#2d3436" strokeWidth="3" />
        {/* Đốm đen bò sữa */}
        <path d="M28 36 Q38 32 35 48 Q30 54 24 46 Z" fill="#2d3436" />
        <path d="M68 40 Q76 34 78 48 Q72 56 64 50 Z" fill="#2d3436" />
        <path d="M46 22 Q54 20 52 30 Q45 32 46 22 Z" fill="#2d3436" />
        {/* Tai bò sữa */}
        <ellipse cx="20" cy="38" rx="10" ry="6" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" transform="rotate(-25 20 38)" />
        <ellipse cx="20" cy="38" rx="6" ry="3.5" fill="#ffb1c1" transform="rotate(-25 20 38)" />
        <ellipse cx="80" cy="38" rx="10" ry="6" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" transform="rotate(25 80 38)" />
        <ellipse cx="80" cy="38" rx="6" ry="3.5" fill="#ffb1c1" transform="rotate(25 80 38)" />
        {/* Sừng bò sữa */}
        <path d="M34 26 C32 16 38 12 40 18 C38 22 36 25 34 26 Z" fill="#fdcb6e" stroke="#2d3436" strokeWidth="2" />
        <path d="M66 26 C68 16 62 12 60 18 C62 22 64 25 66 26 Z" fill="#fdcb6e" stroke="#2d3436" strokeWidth="2" />
        {/* Mũi mõm màu hồng */}
        <ellipse cx="50" cy="64" rx="20" ry="14" fill="#ffb8c6" stroke="#2d3436" strokeWidth="2.5" />
        <circle cx="43" cy="64" r="3" fill="#636e72" />
        <circle cx="57" cy="64" r="3" fill="#636e72" />
        <path d="M46 72 Q50 75 54 72" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Mắt to tròn long lanh */}
        <circle cx="36" cy="46" r="5" fill="#2d3436" />
        <circle cx="34.5" cy="44" r="2" fill="#ffffff" />
        <circle cx="64" cy="46" r="5" fill="#2d3436" />
        <circle cx="62.5" cy="44" r="2" fill="#ffffff" />
        {/* Má hồng */}
        <circle cx="26" cy="56" r="4.5" fill="#ff7675" opacity="0.6" />
        <circle cx="74" cy="56" r="4.5" fill="#ff7675" opacity="0.6" />
      </svg>
    );
  }

  if (normalized.includes('cá rô') || normalized.includes('cá voi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Chú cá voi / cá rô xanh biếc */}
        <ellipse cx="48" cy="52" rx="34" ry="24" fill="#48dbfb" stroke="#0abde3" strokeWidth="3" />
        <path d="M78 52 Q94 36 92 52 Q94 68 78 52 Z" fill="#ff9ff3" stroke="#f368e0" strokeWidth="2" />
        <ellipse cx="44" cy="60" rx="22" ry="12" fill="#ffffff" />
        <circle cx="30" cy="46" r="6" fill="#2d3436" />
        <circle cx="28" cy="44" r="2.5" fill="#ffffff" />
        <path d="M22 54 Q28 60 34 54" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="40" cy="52" r="4" fill="#ff7675" opacity="0.6" />
        {/* Bong bóng nước */}
        <circle cx="16" cy="30" r="5" fill="#e0f2fe" stroke="#48dbfb" strokeWidth="1.5" />
        <circle cx="24" cy="18" r="3.5" fill="#e0f2fe" stroke="#48dbfb" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes('cờ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Cột cờ */}
        <line x1="22" y1="12" x2="22" y2="88" stroke="#795548" strokeWidth="5" strokeLinecap="round" />
        <circle cx="22" cy="12" r="5" fill="#fdcb6e" stroke="#e67e22" strokeWidth="2" />
        {/* Lá cờ đỏ */}
        <path d="M25 18 C45 10 55 26 78 16 L78 54 C55 64 45 48 25 56 Z" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" />
        {/* Ngôi sao vàng */}
        <polygon points="50,28 53,35 60,35 54,39 56,46 50,42 44,46 46,39 40,35 47,35" fill="#f1c40f" />
      </svg>
    );
  }

  if (normalized.includes('ô') || normalized.includes('dù')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Cái ô cầu vồng */}
        <path d="M12 56 Q50 8 88 56 Z" fill="#ff7675" stroke="#d63031" strokeWidth="3" />
        <path d="M32 56 Q50 14 68 56 Z" fill="#feca57" />
        <path d="M44 56 Q50 18 56 56 Z" fill="#55efc4" />
        {/* Cán ô */}
        <line x1="50" y1="56" x2="50" y2="80" stroke="#795548" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 80 Q50 88 42 88 Q34 88 34 80" stroke="#795548" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  if (normalized.includes('bơ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Quả bơ xanh tươi */}
        <path d="M50 16 C34 16 30 36 24 56 C18 76 30 88 50 88 C70 88 82 76 76 56 C70 36 66 16 50 16 Z" fill="#2ed573" stroke="#26af5f" strokeWidth="3" />
        <path d="M50 22 C37 22 34 38 30 56 C26 72 36 82 50 82 C64 82 74 72 70 56 C66 38 63 22 50 22 Z" fill="#c8f7c5" />
        {/* Hạt bơ tròn xoe có mắt cười */}
        <circle cx="50" cy="62" r="16" fill="#8d5524" stroke="#5c3818" strokeWidth="2" />
        <circle cx="45" cy="58" r="2.5" fill="#ffffff" />
        <circle cx="55" cy="58" r="2.5" fill="#ffffff" />
        <path d="M47 65 Q50 68 53 65" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  if (normalized.includes('thỏ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Tai thỏ dài */}
        <ellipse cx="36" cy="24" rx="8" ry="20" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" transform="rotate(-10 36 24)" />
        <ellipse cx="36" cy="24" rx="4.5" ry="14" fill="#ffb1c1" transform="rotate(-10 36 24)" />
        <ellipse cx="64" cy="24" rx="8" ry="20" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" transform="rotate(10 64 24)" />
        <ellipse cx="64" cy="24" rx="4.5" ry="14" fill="#ffb1c1" transform="rotate(10 64 24)" />
        {/* Đầu thỏ trắng */}
        <circle cx="50" cy="56" r="30" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" />
        <circle cx="38" cy="52" r="4.5" fill="#2d3436" />
        <circle cx="36.5" cy="50.5" r="1.8" fill="#ffffff" />
        <circle cx="62" cy="52" r="4.5" fill="#2d3436" />
        <circle cx="60.5" cy="50.5" r="1.8" fill="#ffffff" />
        {/* Mũi tim hồng và miệng */}
        <polygon points="50,60 46,57 54,57" fill="#ff7675" />
        <path d="M46 62 Q50 65 54 62" stroke="#2d3436" strokeWidth="2" fill="none" />
        <circle cx="28" cy="58" r="5" fill="#ffb1c1" opacity="0.6" />
        <circle cx="72" cy="58" r="5" fill="#ffb1c1" opacity="0.6" />
      </svg>
    );
  }

  if (normalized.includes('cà rốt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Cuống lá */}
        <path d="M50 26 C44 14 36 12 34 20 C42 22 46 25 50 26 Z" fill="#2ed573" />
        <path d="M50 26 C50 12 56 10 58 18 C55 22 52 25 50 26 Z" fill="#2ed573" />
        <path d="M50 26 C56 16 64 14 66 22 C60 24 54 26 50 26 Z" fill="#2ed573" />
        {/* Củ cà rốt cam */}
        <path d="M34 32 C34 28 66 28 66 32 C66 42 54 84 50 88 C46 84 34 42 34 32 Z" fill="#ff793f" stroke="#cd6133" strokeWidth="2.5" />
        <line x1="40" y1="42" x2="52" y2="42" stroke="#cd6133" strokeWidth="2" strokeLinecap="round" />
        <line x1="46" y1="54" x2="60" y2="54" stroke="#cd6133" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="66" x2="54" y2="66" stroke="#cd6133" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('hổ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Đầu hổ cam */}
        <circle cx="50" cy="52" r="32" fill="#ff9f43" stroke="#2d3436" strokeWidth="2.5" />
        <ellipse cx="22" cy="30" rx="9" ry="7" fill="#ff9f43" stroke="#2d3436" strokeWidth="2" />
        <ellipse cx="22" cy="30" rx="5" ry="4" fill="#fed330" />
        <ellipse cx="78" cy="30" rx="9" ry="7" fill="#ff9f43" stroke="#2d3436" strokeWidth="2" />
        <ellipse cx="78" cy="30" rx="5" ry="4" fill="#fed330" />
        {/* Vằn hổ trên trán */}
        <path d="M46 24 L54 24 M50 24 L50 32 M44 32 L56 32" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" />
        {/* Mắt và má */}
        <circle cx="36" cy="48" r="5" fill="#2d3436" />
        <circle cx="34" cy="46" r="2" fill="#ffffff" />
        <circle cx="64" cy="48" r="5" fill="#2d3436" />
        <circle cx="62" cy="46" r="2" fill="#ffffff" />
        <ellipse cx="50" cy="62" rx="14" ry="9" fill="#ffffff" />
        <polygon points="50,60 46,56 54,56" fill="#eb3b5a" />
        <path d="M45 64 Q50 67 55 64" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  if (normalized.includes('nho')) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Cuống và lá */}
        <path d="M50 24 Q50 12 56 12" stroke="#795548" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="60" cy="22" rx="10" ry="6" fill="#26de81" transform="rotate(-20 60 22)" />
        {/* Chùm quả tròn tím */}
        <circle cx="42" cy="36" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="58" cy="36" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="34" cy="48" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="50" cy="48" r="9" fill="#8854d0" stroke="#4b0082" strokeWidth="2" />
        <circle cx="66" cy="48" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="42" cy="62" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="58" cy="62" r="9" fill="#a55eea" stroke="#8854d0" strokeWidth="2" />
        <circle cx="50" cy="74" r="8" fill="#8854d0" stroke="#4b0082" strokeWidth="2" />
      </svg>
    );
  }

  // Đồ họa mặc định chung dạng thẻ kẹo dẻo ngộ nghĩnh
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="3" />
      <circle cx="35" cy="44" r="5" fill="#2d3436" />
      <circle cx="33.5" cy="42" r="2" fill="#ffffff" />
      <circle cx="65" cy="44" r="5" fill="#2d3436" />
      <circle cx="63.5" cy="42" r="2" fill="#ffffff" />
      <path d="M38 56 Q50 68 62 56" stroke="#2d3436" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="52" r="5" fill="#ff7675" opacity="0.6" />
      <circle cx="74" cy="52" r="5" fill="#ff7675" opacity="0.6" />
    </svg>
  );
}
