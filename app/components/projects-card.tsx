// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, liveDemoUrl }) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 sm:p-6 rounded-lg w-full max-w-[700px] mx-auto text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl">
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
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6 text-gray-100 tracking-tight">
        {title}
      </h3>

      {/* Description Section */}
      <p className="text-gray-100 mt-2 sm:mt-4 text-sm sm:text-md leading-relaxed px-2 sm:px-4">
        An engaging project demonstrating modern web development techniques, best practices, and creative design.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-8">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.4),inset_0_0_10px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.2)]"
          style={{
            transition: 'all 0.3s ease',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
          }}
        >
          Github
        </a>
        <a 
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.4),inset_0_0_10px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.2)]"
          style={{
            transition: 'all 0.3s ease',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
          }}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;