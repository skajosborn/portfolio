'use client';
// pages/projects.tsx
import React from 'react';
import ProjectCard from '@/app/components/projects-card';

const Projects: React.FC = () => {
  return (
    <div className="p-12 bg-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 mt-12 animate-fade-in">
          My Projects
        </h1>
        
        {/* Intro Section */}
        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 animate-fade-in-delay">
          Welcome to my project portfolio! Here you&apos;ll find a collection of my work that showcases my skills in web development.
          Each project demonstrates unique technologies and approaches I&apos;ve used to solve real-world problems and bring creative ideas to life.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 justify-items-center px-6">
        <ProjectCard
          title="HelloDoctor Medical platform"
          imageUrl="/images/HelloDoctor.png"
          githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
          liveDemoUrl="https://module-3--mymovieappsbo.netlify.app/"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/portfolio.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        <ProjectCard
          title="Movie App"
          imageUrl="/images/mybenches.jpg"
          githubUrl="https://github.com/yourusername/movie-app"
          liveDemoUrl="https://movie-app-demo.com"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        {/* Add more ProjectCard components as needed */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-gray-100 h-[30px] w-[80px] sm:h-[40px] sm:w-[90px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
          style={{
            transition: 'all 0.3s ease',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `
              0 0 10px rgba(255, 255, 255, 0.6), 
              0 0 20px rgba(255, 255, 255, 0.5), 
              0 0 30px rgba(255, 255, 255, 0.4),
              inset 0 0 10px rgba(255, 255, 255, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.2)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
        >
          1
        </button>
      </div>
    </div>
  );
};

export default Projects;