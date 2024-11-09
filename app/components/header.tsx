'use client';

import React from 'react';
import Image from 'next/image';

// Header component
function Header() {
  return (
    <>
      <nav className="fixed top-0 w-[125%] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] bg-gray-300 z-50 flex items-center shadow-md px-4 sm:px-5 md:px-6 lg:px-8 transform scale-[0.8] origin-top-left">
        {/* Brand/Logo Section */}
        <div className="text-black ml-10 text-2xl mr-10 sm:text-3xl md:text-4xl lg:text-5xl font-bold font-rouge-script"></div>
        
        {/* Profile Image */}
        <div className="relative h-[60px] w-[30px] sm:h-[70px] sm:w-[300px] md:h-[80px] md:w-[330px] lg:h-[100px] lg:w-[370px]">
          <Image
            src="/images/black4.png"
            alt="Descriptive alt text"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
            className="object-contain transition-all duration-300 glow-effect"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex text-white gap-2 sm:gap-3 md:gap-4 lg:gap-6 ml-auto mr-4 sm:mr-6 md:mr-10 lg:mr-20">
          {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
            <a
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="bg-gray-200 h-[35px] w-[90px] sm:h-[45px] sm:w-[100px] md:h-[55px] md:w-[110px] lg:h-[70px] lg:w-[140px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
              style={{
                transition: 'all 0.3s ease',
                boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 0 10px rgba(255, 255, 255, 0.6), 
                  0 0 20px rgba(255, 255, 255, 0.5), 
                  0 0 30px rgba(255, 255, 255, 0.4),
                  inset 0 0 10px rgba(255, 255, 255, 0.3),
                  inset 0 0 20px rgba(255, 255, 255, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden ml-auto mr-4 text-white relative transform transition-transform active:scale-95 active:translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Main content container with scrolling enabled */}
      <div className="relative mt-[70px] sm:mt-[80px] md:mt-[90px] lg:mt-[120px] overflow-y-auto">
        {/* Content will scroll under fixed header */}
      </div>
    </>
  );
}

export default Header;