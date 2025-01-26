import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  description?: string;
  darkMode?: boolean; // Add darkMode as an optional prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, liveDemoUrl, description, darkMode = false }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'} p-4 sm:p-6 mt-16 rounded-lg w-full max-w-[700px] mx-auto text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl mb-16`}>
      {/* Image Section wrapped in anchor tag that opens in same tab */}
      <a 
        href={liveDemoUrl}
        className="block overflow-hidden rounded-lg w-full aspect-[7/4] relative cursor-pointer"
      >
        <Image 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </a>

      {/* Title Section */}
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6 tracking-tight">
        {title}
      </h3>

      {/* Description Section */}
      {description && (
        <p className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl leading-relaxed px-2 sm:px-4">
          {description}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-8">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-100'} px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl md:text-2xl font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md shadow-lg hover:shadow-xl`}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;