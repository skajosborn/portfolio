// pages/projects.tsx
import React from 'react';
import ProjectCard from '@/app/components/projects-card';

const Projects: React.FC = () => {
  return (
    <div className="p-12 bg-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 mt-24 animate-fade-in">
          My Projects
        </h1>
        
        {/* Intro Section */}
        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 animate-fade-in-delay">
          Welcome to my project portfolio! Here you'll find a collection of my work that showcases my skills in web development.
          Each project demonstrates unique technologies and approaches I've used to solve real-world problems and bring creative ideas to life.
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
    </div>
  );
};

export default Projects;