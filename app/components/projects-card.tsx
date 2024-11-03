// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, liveDemoUrl }) => {
  return (
    <div className="bg-gray-100 text-white p-6 rounded-lg w-112 text-center shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="overflow-hidden rounded-lg">
        <img src={imageUrl} alt={`${title} screenshot`} className="w-full h-auto" />
      </div>
      <h3 className="text-2xl font-semibold mt-6">{title}</h3>
      <div className="flex justify-around mt-6">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-500 text-lg">
          Github
        </a>
        <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 text-lg">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;