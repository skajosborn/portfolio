'use client'

import React from 'react';
import Image from 'next/image';

const ProfileSidebarRight = () => {
  return (
    <nav className="w-72 sm:w-80 mt-0 h-[900px] pt-10 md:w-96 bg-white text-gray-500 px-6 shadow-[2px_0_10px_-2px_rgba(0,0,0,0.1)]">
      {/* Profile Image and Text */}
      <div className="max-w-xs mx-auto pt-4">
        <div className="relative w-64 h-80 mx-auto mb-4">
          <Image
            src="/images/myface.png" 
            alt="Profile Image"
            className="rounded-lg shadow-lg object-cover"
            fill
            sizes="256px"
            priority
          />
        </div>

        <div className="text-center px-4">
          <h2 className="font-semibold text-gray-500 text-4xl md:text-3xl mb-2">Hi, I'm Sara</h2>
          <p className="text-gray-900 text-xl md:text-2xl mb-4">Full Stack Developer</p>
          <p className="text-gray-900 text-lg leading-relaxed">
            I come with a strong foundation in art and design, years of experience in teaching linguistics, and a drive for perfection in everything I do. I am fully dedicated to creating high-quality, exceptional user experiences.
          </p>
          <p className="text-gray-900 text-lg leading-relaxed mt-4">
            As a full-stack developer, I will build your website from start to finish. Leave me a message so we can bring your ideas to fruition.
          </p>
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

export default ProfileSidebarRight;