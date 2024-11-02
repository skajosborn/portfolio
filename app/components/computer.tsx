// PortfolioInteractive.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function PortfolioInteractive() {
  const router = useRouter();
  const openPortfolioApp = () => router.push('/portfolio');

  return (
    <div 
      className="
        w-[45%] sm:w-[70%] md:w-[78%] lg:w-[82%] xl:w-[85%] 1.5xl:w-[85%] 2xl:w-[85%] 
        h-[200px] sm:h-[93px] md:h-[106px] lg:h-[110px] xl:h-[140px] 1.5xl:h-[170px] 2xl:h-[205px] 
        bg-gray-800 rounded-lg shadow-lg flex items-center justify-center cursor-pointer 
        transition-all duration-300
      "
      onClick={openPortfolioApp}
      style={{
        transition: 'box-shadow 0.3s, transform 0.3s',
        boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 25px 10px rgba(200, 255, 255, 0.8)';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 1.5xl:text-4xl 2xl:text-5xl font-semibold">My Portfolio</p>
    </div>
  );
}

export default PortfolioInteractive;