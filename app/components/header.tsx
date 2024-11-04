'use client';

import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <nav className="fixed top-0 w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] bg-black z-50 flex items-center shadow-lg px-4 sm:px-5 md:px-6 lg:px-8">
      {/* Brand/Logo Section */}
      <div className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-20 font-rouge-script"></div>
      
      {/* Profile Image with Neon Glow */}
      <div className="relative h-[30px] w-[150px] sm:h-[35px] sm:w-[160px] md:h-[50px] md:w-[190px] lg:h-[60px] lg:w-[210px] ml-4">
        <Image
          src="/images/Neonnamenb.png"
          alt="Descriptive alt text"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
          className="object-contain transition-all duration-300 glow-effect"
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(135, 206, 235, 0.9)) drop-shadow(0 0 50px rgba(135, 206, 235, 0.8)) drop-shadow(0 0 75px rgba(135, 206, 235, 0.7))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(135, 206, 235, 0.6)) drop-shadow(0 0 20px rgba(135, 206, 235, 0.4)) drop-shadow(0 0 30px rgba(135, 206, 235, 0.3))';
          }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(135, 206, 235, 0.6)) drop-shadow(0 0 20px rgba(135, 206, 235, 0.4)) drop-shadow(0 0 30px rgba(135, 206, 235, 0.3))',
          }}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 ml-auto mr-4 sm:mr-6 md:mr-10 lg:mr-20">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
          <a
            key={label}
            href={label === 'Home' ? '/' : label === 'Blog' ? '/blog' : label === 'About' ? '/about-me' : `/${label.toLowerCase()}`}
            className="custom-btn h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 bg-[url('/images/.png')] bg-cover bg-center hover:bg-gradient-to-r hover:from-teal-700 hover:via-teal-500 hover:to-teal-300 relative before:absolute before:inset-0 before:bg-black/20 before:top-[3px] active:before:top-0 active:translate-y-[3px] before:transition-all"
            style={{
              transition: 'box-shadow 0.3s, transform 0.3s',
              boxShadow: '0 3px 0 rgba(0, 0, 0, 0.3), 0 0 0px rgba(0, 0, 0, 0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 3px 0 rgba(0, 0, 0, 0.3), 0 0 25px 10px rgba(135, 206, 235, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 3px 0 rgba(0, 0, 0, 0.3), 0 0 0px rgba(0, 0, 0, 0)';
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="sm:hidden ml-auto mr-4 text-white relative before:absolute before:inset-0 before:bg-black/20 before:top-[3px] active:before:top-0 active:translate-y-[3px] before:transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Header;