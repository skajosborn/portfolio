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
    <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-400 text-gray-100'} p-4 sm:p-6 rounded-lg w-full mx-auto text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl relative min-h-[600px]`}>
      {/* Image Section wrapped in anchor tag that opens in same tab */}
      <a 
        href={liveDemoUrl}
        className="block overflow-hidden rounded-lg w-full aspect-[16/9] relative cursor-pointer"
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
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 sm:mt-8 tracking-tight">
        {title}
      </h3>

      {/* Description Section */}
      {description && (
        <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl leading-relaxed px-4 sm:px-6 mb-24">
          {description}
        </p>
      )}

      {/* Buttons - Absolutely positioned at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-100'} px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl md:text-3xl font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md shadow-lg hover:shadow-xl`}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;