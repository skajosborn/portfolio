'use client';
import Image from "next/image";
// import PortfolioInteractive from "@/app/components/computer";
// import PictureOnWall from "@/app/components/wallPicture";
import ProfileSidebar from "@/app/components/profileSidebar";
import BlogPosts from "@/app/components/blogPost";
import { useEffect, useState } from 'react';
import ProjectCard from "./components/projects-card";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts data
    fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="relative min-h-screen bg-gray-200 font-poppins text-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start mt-24 lg:mt-36">
        
        {/* Sidebar */}
        <aside className="lg:w-1/3 w-full lg:sticky lg:top-0">
          <ProfileSidebar />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto lg:mt-0 lg:-ml-20 mr-10 max-w-6xl">
          <h1 className="text-3xl text-gray-800 font-bold text-center mb-8">Welcome to My Page</h1>
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/hero.png"
              alt="Desk Background"
              fill
              className="object-cover shadow-lg"
              quality={100}
              priority
              sizes="(max-width: 640px) 140vw, (max-width: 768px) 120vw, (max-width: 1024px) 100vw, 90vw"
            />
          </div>
          {/* Additional Content */}
         
          {/* <div className="mt-8">
            <PortfolioInteractive />
            <PictureOnWall />
          </div> */}
        </main>
      </div>
      <div className="mt-40">
        <h2 className="text-4xl text-black font-bold text-center mb-10">Blog</h2>
        <div className="relative w-full h-[600px]">
          <Image
            src="/images/desk2.png"
            alt="Blog Header Image"
            fill
            className="object-cover shadow-lg"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
        <div className="mt-10">
          <BlogPosts posts={posts} />
          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-8 mb-12">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
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
                {index + 1}
              </button>
            ))}
          </div>
          {/* Project Cards Section */}
          <h2 className="text-4xl text-black font-bold text-center mt-40 mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 justify-items-center px-6">
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
          </div>
          <div className="flex justify-center mt-12 mb-20">
            <button
              className="bg-gray-100 mt-20 h-[30px] w-[120px] sm:h-[40px] sm:w-[140px] md:h-[50px] md:w-[160px] lg:h-[60px] lg:w-[180px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}