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
    <div className="bg-gray-400 text-white p-6 rounded-lg w-112 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_0_rgb(75,85,99)] hover:shadow-[0_5px_0_rgb(75,85,99)] active:shadow-[0_0_0_rgb(75,85,99)] active:translate-y-3">
      <div className="overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={`${title} screenshot`} width={500} height={300} className="w-full h-auto" />
      </div>
      <h3 className="text-2xl font-semibold mt-6">{title}</h3>
      <div className="flex justify-center gap-4 mt-6">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-600 text-white w-32 py-3 rounded transform hover:-translate-y-1 transition-all duration-200 shadow-[0_5px_0_rgb(55,65,81)] hover:shadow-[0_3px_0_rgb(55,65,81)] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.3)] active:translate-y-1.5 text-lg"
        >
          Github
        </a>
        <a 
          href={liveDemoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white text-black w-32 py-3 rounded transform hover:-translate-y-1 transition-all duration-200 shadow-[0_5px_0_rgb(107,114,128)] hover:shadow-[0_3px_0_rgb(107,114,128)] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.3)] active:translate-y-1.5 text-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:rounded"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;