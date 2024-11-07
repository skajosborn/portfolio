'use client'

import React from 'react';
import Image from 'next/image';

const ProfileSidebar = () => {
  return (
    <nav className="w-72 sm:w-80 mt-0 h-[900px] pt-0 md:w-96 bg-white text-gray-500 shadow-[2px_0_10px_-2px_rgba(0,0,0,0.1)]">
      {/* Profile Image and Text */}
      <div className="w-full">
        <div className="relative w-full h-80">
          <Image
            src="/images/mtbgirl.webp"
            alt="Mountain Biking Girl"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 80vw, 384px"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-700 text-lg">
            When I'm not coding, you can find me mountain biking on the trails, 
            kayaking through the springs, or seeking adventure in new places. What 
            many don't know about Florida beyond the home of Mickey Mouse, there are
            miles upon miles of untouched nature, crystal clear springs, underground
            caves, prehistoric creeks, and beyond. If you've never made the trip here,
            start planning!
          </p>
          <div className="relative w-[calc(100%+2rem)] h-64 mt-4 -mx-4">
            <Image
              src="/images/kayak.jpeg"
              alt="Florida Springs"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 80vw, 384px"
            />
          </div>
        </div>
      </div>

      {/* Links Section */}
      {/* <ul className="space-y-4 mb-10">
        <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul> */}
    </nav>
  );
};

export default ProfileSidebar;