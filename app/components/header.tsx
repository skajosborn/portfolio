// app/components/header.js
'use client';

import React from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] sm:h-[100px] md:h-[120px] lg:h-[140px] bg-gray-300 z-50 flex items-center justify-between shadow-md px-4 sm:px-5 md:px-6 lg:px-8">
      <div className="flex items-center">
        <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-['Rouge Script'] text-black mr-4" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Sara Osborn
        </h1>
      </div>
      <div className="hidden sm:flex text-black gap-6 ml-auto mr-18">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
          <a
            key={label}
            href={`/#${label.toLowerCase()}`}
            className="bg-gray-200 h-[50px] w-[120px] sm:h-[60px] sm:w-[140px] md:h-[70px] md:w-[160px] lg:h-[80px] lg:w-[180px] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md"
            style={{
              transition: 'all 0.3s ease',
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
            }}
          >
            {label}
          </a>
        ))}

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-4 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-300"
          style={{
            boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.6)'
          }}
        >
          {darkMode ? (
            <Image src="/sun.png" alt="Light mode" width={45} height={45} className="opacity-80" />
          ) : (
            <Image src="/moon.png" alt="Dark mode" width={45} height={45} className="opacity-80" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;