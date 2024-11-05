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
    <div className="bg-gray-200 text-white p-6 rounded-lg w-112 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl">
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
          className="bg-gray-200 h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.4),inset_0_0_10px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.2)]"
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