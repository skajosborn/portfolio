'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="bg-gray-800 text-white py-8 relative mt-0"
      style={{ 
        width: '150vw',
        marginLeft: '-12.5vw',
        transform: 'scale(1.25)',
        transformOrigin: 'left top'
      }}
    >
      <div className="max-w-[80%] mx-auto px-8 pr-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl">&copy; 2024 Sara Osborn All rights reserved.</p>
          </div>
          
          {/* <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div> */}

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/skajosborn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sarabosborn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;