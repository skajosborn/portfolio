// pages/projects.tsx
import React from 'react';
import ProjectCard from '@/app/components/projects-card';

const Projects: React.FC = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl text-teal-400 font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-100">
          Welcome to my project portfolio! Here you'll find a collection of my work that demonstrates my skills in web development.
          Each project showcases different technologies and approaches I've used to solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 justify-items-center">
        <ProjectCard
          title="Movie App"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
          liveDemoUrl="https://module-3--mymovieappsbo.netlify.app/"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        <ProjectCard
          title="Movie App"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/movie-app"
          liveDemoUrl="https://movie-app-demo.com"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        <ProjectCard
          title="Movie App"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/movie-app"
          liveDemoUrl="https://movie-app-demo.com"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        <ProjectCard
          title="Movie App"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/movie-app"
          liveDemoUrl="https://movie-app-demo.com"
        />
        <ProjectCard
          title="To Do List"
          imageUrl="/images/movieapp.png"
          githubUrl="https://github.com/yourusername/todo-app"
          liveDemoUrl="https://todo-app-demo.com"
        />
        {/* Add more ProjectCard components here */}
      </div>
    </div>
  );
};

export default Projects;