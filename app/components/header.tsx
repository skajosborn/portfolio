'use client';

import React from 'react';
import Image from 'next/image';


// Header component
function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] bg-gray-300 z-50 flex items-center justify-between shadow-md px-4 sm:px-5 md:px-6 lg:px-8">
      {/* Profile Image */}
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Rouge Script'] text-black mr-4" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Sara Osborn
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex text-black gap-3 ml-auto">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
          <a
            key={label}
            href={`/#${label.toLowerCase()}`}
            className="bg-gray-200 h-[35px] w-[90px] sm:h-[45px] sm:w-[100px] md:h-[55px] md:w-[110px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md"
            style={{
              transition: 'all 0.3s ease',
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="sm:hidden ml-auto mr-4 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Header;