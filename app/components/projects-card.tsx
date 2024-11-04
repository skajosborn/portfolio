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
    <div className="bg-gray-800 text-white p-6 rounded-lg w-112 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={`${title} screenshot`} width={500} height={300} className="w-full h-auto rounded-md shadow-lg transition-transform duration-300 hover:scale-105" />
      </div>

      {/* Title Section */}
      <h3 className="text-3xl font-bold mt-6 text-gray-100 tracking-tight">
        {title}
      </h3>

      {/* Description Section */}
      <p className="text-gray-300 mt-4 text-sm leading-relaxed">
        An engaging project demonstrating modern web development techniques, best practices, and creative design.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-700 text-white w-32 py-3 rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg transition-all duration-200 text-lg font-medium"
        >
          Github
        </a>
        <a 
          href={liveDemoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white w-32 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-lg font-medium relative"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;