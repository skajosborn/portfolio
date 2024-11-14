'use client';

import React from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] sm:h-[100px] md:h-[120px] lg:h-[140px] bg-gray-300 z-50 flex items-center justify-between shadow-md px-4 sm:px-5 md:px-6 lg:px-8">
      <div className="flex items-center ml-20">
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-['Rouge Script'] text-black mr-14" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Sara Osborn
        </h1>
      </div>
      <div className="hidden sm:flex text-black gap-3 ml-auto mr-18">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
          <a
            key={label}
            href={`/#${label.toLowerCase()}`}
            className="bg-gray-200 h-[60px] w-[145px] sm:h-[70px] sm:w-[165px] md:h-[80px] md:w-[185px] lg:h-[90px] lg:w-[205px] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md"
            style={{
              transition: 'all 0.3s ease',
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.9), 0 0 35px rgba(255,255,255,0.7), 3px 3px 8px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
            }}
          >
            {label}
          </a>
        ))}

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-5 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-300"
          style={{
            boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.6)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7), 3px 3px 8px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.6)';
          }}
        >
          {darkMode ? (
            <Image src="/sun.png" alt="Light mode" width={50} height={50} className="opacity-80" />
          ) : (
            <Image src="/moon.png" alt="Dark mode" width={50} height={50} className="opacity-80" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;