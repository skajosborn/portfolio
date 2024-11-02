// PictureOnWall.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function PictureOnWall() {
  const router = useRouter();
  const handleClick = () => router.push('/blog');

  return (
    <button 
      onClick={handleClick}
      className="
        w-[20%] sm:w-[85%] md:w-[102%] lg:w-[123%] xl:w-[130%]
        h-[260px] sm:h-[102px] md:h-[118px] lg:h-[120px] xl:h-[160px] 1.5xl:h-[160px] 2xl:h-[225px]
        bg-white border-4 border-gray-300 shadow-lg transition-all duration-300 cursor-pointer
      "
      style={{
        transition: 'box-shadow 0.3s, transform 0.3s',
        boxShadow: '0 0 0px rgba(0, 0, 0, 0)', // No shadow by default
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 25px 10px rgba(200, 255, 255, 0.8)'; // Cool white glow
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0)'; // Remove glow on mouse leave
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Image
        src="/images/jobsquote.png"  
        alt="About Me Picture"
        fill
        className="object-cover"
      />
    </button>
  );
}

export default PictureOnWall;