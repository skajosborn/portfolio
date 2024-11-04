import React from 'react';

function GlossyButton() {
  return (
    <button
      className="flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(100, 200, 255, 0.2) 40%, rgba(0, 0, 50, 0.9) 70%, rgba(0, 0, 0, 1) 100%)`,
        border: '4px solid rgba(255, 255, 255, 0.3)',
        boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 150, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 0 20px rgba(0, 150, 255, 1), inset 0 0 15px rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          'inset 0 0 10px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 150, 255, 0.7)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Optional Icon/Text */}
    </button>
  );
}

export default GlossyButton;