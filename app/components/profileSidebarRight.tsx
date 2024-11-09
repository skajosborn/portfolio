'use client'

import React from 'react';
import Image from 'next/image';

const ProfileSidebar = () => {
  return (
    <nav className="w-72 sm:w-80 mt-0 h-[950px] pt-0 md:w-96 bg-white text-gray-500 shadow-[2px_0_10px_-2px_rgba(0,0,0,0.1)]">
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
        <div className="p-4 mt-2 text-center">
          <p className="text-gray-700 text-2xl">
            When I'm not coding, you can find me mountain biking on the trails, 
            kayaking through the springs, or seeking adventure in new places. what 
            many don't realize about Florida is that beyond the house of Mickey Mouse
            you'll find hundreds of miles of untouched natural forest and crystal clear springs.
          </p>
          <div className="relative w-[calc(100%+2rem)] h-72 mt-4 -mx-4">
            <Image
              src="/images/kayak2.jpg"
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