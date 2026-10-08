import React from 'react';

export default function ProgressBar({ currentIndex, totalCount = 30, stars = 0 }) {
  const currentDisplay = String(currentIndex + 1).padStart(2, '0');
  const totalDisplay = String(totalCount).padStart(2, '0');

  return (
    <div className="progress-card">
      <div className="progress-info">
        <span>⭐ {stars} SAO</span>
        <span style={{ color: '#a4b0be' }}>|</span>
        <span style={{ color: '#ff7675' }}>CÂU {currentDisplay}/{totalDisplay}</span>
      </div>

      <div className="progress-dots" title={`Tiến độ: ${currentDisplay}/${totalDisplay}`}>
        {Array.from({ length: totalCount }).map((_, idx) => {
          let statusClass = '';
          if (idx < currentIndex) statusClass = 'completed';
          else if (idx === currentIndex) statusClass = 'current';

          return (
            <div
              key={idx}
              className={`dot-step ${statusClass}`}
              title={`Câu ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
