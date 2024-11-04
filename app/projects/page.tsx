// pages/projects.tsx
import React from 'react';
import ProjectCard from '@/app/components/projects-card';

const Projects: React.FC = () => {
  return (
    <div className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl mt-24 text-gray-800 font-bold mb-10">My Projects</h1>
        <p className="text-lg text-black">
          Welcome to my project portfolio! Here you'll find a collection of my work that demonstrates my skills in web development.
          Each project showcases different technologies and approaches I've used to solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-16 justify-items-center">
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