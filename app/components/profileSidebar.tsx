'use client'

import React from 'react';
import Image from 'next/image';

const ProfileSidebarRight = () => {
  return (
    <nav className="w-72 sm:w-80 mt-0 h-[900px] md:w-96 bg-white text-gray-500  shadow-[2px_0_10px_-2px_rgba(0,0,0,0.1)]">
      {/* Profile Image and Text */}
      <div className="w-full">
        <div className="relative w-full h-80">
          <Image
            src="/images/springs2.webp" 
            alt="Profile Image"
            className="shadow-lg object-cover"
            fill
            sizes="256px"
            priority
          />
        </div>

        <div className="text-center">
          <h2 className="font-semibold text-gray-500 text-4xl md:text-3xl mt-6 mb-2">Hi, I'm Sara</h2>
          <p className="text-gray-900 text-xl md:text-2xl mb-4">Full Stack Developer</p>
          {/* <p className="text-gray-900 text-lg leading-relaxed">
            I come with a strong foundation in art and design, years of experience in teaching linguistics, and a drive for perfection in everything I do. I am fully dedicated to creating high-quality, exceptional user experiences.
          </p> */}
          <p className="text-center">I have a husband, two daughters, and a very lazy pug named Clover. When I'm not on a mission to create 
            the tackiest Christmas card possible, I am a lover of nature and can usually be found outside (until a snake comes, then you will find me inside the next few days 😬).</p>
          {/* <p className="text-gray-900 text-lg leading-relaxed mt-4">
            As a full-stack developer, I will build your website from start to finish. Leave me a message so we can bring your ideas to fruition. I look forward to the working with you.
          </p> */}
          <div className="relative w-full h-64 mt-4">
            <Image
              src="/images/family.jpg"
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

export default ProfileSidebarRight;