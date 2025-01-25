'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import { useDarkMode } from '@/app/components/darkMode';
import BackHomeButton from '@/app/components/BackHomeButton';
import Image from 'next/image';

interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${resolvedParams.id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [resolvedParams.id]);

  if (!project) {
    return (
      <div className="text-center mt-40 p-8">
        <p className="text-red-500 text-2xl">Loading project...</p>
      </div>
    );
  }

  return (
    <>
      <div className={`max-w-7xl mb-10 mt-20 mx-auto p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        
        {project.imageUrl && (
          <div className="bg-white rounded-lg mb-8">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">About this Project</h2>
          <p className="text-xl">{project.longDescription || project.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies?.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-200 text-black rounded-full text-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
            >
              View Live Site
            </a>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <BackHomeButton />
      </div>
    </>
  );
} 