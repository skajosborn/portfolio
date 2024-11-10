import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  darkMode?: boolean; // Add darkMode as an optional prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, liveDemoUrl, darkMode = false }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'} p-4 sm:p-6 rounded-lg w-full max-w-[700px] mx-auto text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg w-full aspect-[7/4] relative">
        <Image 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title Section */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6 tracking-tight">
        {title}
      </h3>

      {/* Description Section */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-md leading-relaxed px-2 sm:px-4">
        An engaging project demonstrating modern web development techniques, best practices, and creative design.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-8">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-100'} px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md shadow-lg hover:shadow-xl`}
        >
          Github
        </a>
        <a 
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-400 text-black hover:bg-gray-300'} px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md shadow-lg hover:shadow-xl`}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;