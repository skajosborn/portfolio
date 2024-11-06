'use client';
import Image from "next/image";
// import PortfolioInteractive from "@/app/components/computer";
// import PictureOnWall from "@/app/components/wallPicture";
import ProfileSidebar from "@/app/components/profileSidebar";
// import ProfileSidebarRight from '@/app/components/profileSidebarRight';
import BlogPosts from "@/app/components/blogPost";
import { useEffect, useState } from 'react';
import ProjectCard from "@/app/components/projects-card";
import AboutMe from "@/app/components/skills";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to\nMy Page';

  useEffect(() => {
    // Fetch blog posts data
    fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setPosts(data));

    // Add a delay before starting the animation
    setTimeout(() => {
      // Typing animation effect
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust speed by changing interval time

      return () => clearInterval(typingInterval);
    }, 1000); // 1 second delay before animation starts
  }, []);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="relative min-h-screen bg-gray-200 font-poppins text-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start mt-24 lg:mt-36">
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto lg:mt-0 max-w-full">
          <div className="relative w-full h-[800px]"> {/* Increased height for longer sidebar */}
            <Image
              src="/images/desk2.png"
              alt="Desk Background"
              fill
              className="object-cover shadow-lg w-full"
              quality={100}
              priority
              sizes="100vw"
            />
            {/* Typing text overlay with margin */}
            <div className="absolute top-64 left-1/2 -translate-x-1/2 text-3xl text-gray-100 font-bold font-mono whitespace-pre-line text-center mt-20">
              {displayText}<span className="animate-blink">|</span>
            </div>
            {/* Oval image overlaying the background */}
            <div 
              className="absolute top-28 left-[18%] -translate-x-1/2 w-64 h-80 border-4 border-white overflow-hidden rounded-[4%] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.2)]"
            >
              <Image
                src="/images/myface.png"
                alt="Profile Image"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="256px"
                priority
              />
            </div>
            {/* Sidebar overlaying the background image */}
            <aside className="absolute top-0 left-1/2 -translate-x-1/2 pt-16 lg:w-1/3 w-full h-full">
              {/* <div className="-mt-16">
                <ProfileSidebar />
              </div> */}
            </aside>
          </div>
          {/* Additional Content */}
         
          {/* <div className="mt-8">
            <PortfolioInteractive />
            <PictureOnWall />
          </div> */}
        </main>
      </div>
      <div className="mt-40">
        <h2 className="text-4xl text-black font-bold text-center mb-10">About me</h2>
        <div className="relative w-[1200px] h-[900px] mx-auto">
          <Image
            src="/images/simp2.png"
            alt="Blog Header Image"
            fill
            className="object-cover shadow-lg"
            quality={100}
            priority
            sizes="1200px"
          />
          <div className="absolute top-0 left-0 -translate-x-1/2 h-full">
            <ProfileSidebar />
          </div>
          {/* <div className="absolute top-0 right-0 h-full">
            <ProfileSidebarRight />
          </div> */}
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

          {/* Skills section */}
          <AboutMe />
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