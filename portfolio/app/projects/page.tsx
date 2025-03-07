'use client';
import { useDarkMode } from '@/app/components/darkMode';

const ProjectsPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`text-2xl lg:text-3xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-center max-w-6xl mx-auto mb-16`}>
      Welcome to my portfolio! Below you&apos;ll find a collection of projects that showcase my skills in web development, blockchain technology, and full-stack applications. Each project represents my commitment to creating innovative solutions while continuously learning and growing as a developer.
    </div>
  );
};

export default ProjectsPage; 