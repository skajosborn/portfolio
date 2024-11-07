'use client'

import React from 'react';
import Image from 'next/image';

const ProfileSidebar = () => {
  return (
    <nav className="w-72 sm:w-80 mt-0 h-[900px] pt-0 md:w-96 bg-white text-gray-500 shadow-[2px_0_10px_-2px_rgba(0,0,0,0.1)]">
      {/* Profile Image and Text */}
      <div className="w-full">
        <div className="relative w-full h-80">
        <div className="relative w-full h-64">
        </div>
        </div>

        <div className="h-full">
        <Image
  src="/images/mtbgirl.webp"
  alt="Mountain Biking Girl"
  fill
  sizes="50vw" // Set based on the space it occupies (e.g., half the viewport width)
/>
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