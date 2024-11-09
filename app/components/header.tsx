'use client';

import React from 'react';
import Image from 'next/image';

// Header component
function Header() {
  return (
    <nav className="fixed top-0 w-[125%] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] bg-gray-300 z-50 flex items-center shadow-md px-4 sm:px-5 md:px-6 lg:px-8 transform scale-[0.8] origin-top-left">
      {/* Brand/Logo Section */}
      <div className="text-black ml-10 text-2xl mr-10 sm:text-2xl md:text-3xl lg:text-4xl font-bold font-rouge-script"></div>
      
      {/* Profile Image */}
      <div className="relative h-[50px] w-[25px] sm:h-[60px] sm:w-[280px] md:h-[70px] md:w-[310px] lg:h-[90px] lg:w-[350px]">
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
            href={`/#${label.toLowerCase()}`} // Updated to scroll to section IDs
            className="bg-gray-200 h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Header;