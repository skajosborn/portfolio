'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import BlogPosts from "@/app/components/blogPost";
import ProjectCard from "@/app/components/projects-card";
import Skillz from "@/app/components/skills";
import AboutMe from "@/app/components/about-me";
import Footer from "@/app/components/footer"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [displayText, setDisplayText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const fullText = 'Welcome to\nMy Page';

  // Handle dark mode with a single useEffect
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      const isDarkMode = JSON.parse(savedDarkMode);
      setDarkMode(isDarkMode);
      document.body.style.backgroundColor = isDarkMode ? '#111827' : '#e5e7eb';
    }
  }, []);

  // Save dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.style.backgroundColor = darkMode ? '#111827' : '#e5e7eb';
  }, [darkMode]);

  useEffect(() => {
    // Fetch blog posts data
    fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setPosts(data.posts || []));

    // Typing animation effect
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const postsPerPage = 6;
  const totalPages = posts && posts.length ? Math.ceil(posts.length / postsPerPage) : 0;

  return (
    <div className={`relative min-h-screen mt-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'} font-poppins text-2xl overflow-hidden transition-colors duration-300`}>
      {/* Light/Dark mode button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-5 z-50 p-2 rounded-full w-20 h-20 transition-all duration-300 bg-gray-200 hover:bg-gray-300"
        style={{
          boxShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)'
        }}
      >
        {darkMode ? (
          <Image src="/sun.png" alt="Light mode" width={100} height={100} className="opacity-80" />
        ) : (
          <Image src="/moon.png" alt="Dark mode" width={100} height={100} className="opacity-80" />
        )}
      </button>

      {/* Content Sections */}
      <section id="home" className="mt-8 lg:mt-12">
        <h2 className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} pt-12 font-bold text-center mb-10 lg:mb-14 transition-colors duration-300`}>Portfolio</h2>
        <div className={`relative w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg px-6 py-10 transition-colors duration-300`}>
          <div className={`relative w-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg p-6 lg:p-10 transition-colors duration-300`}>
            <div className="relative w-full h-[450px] lg:h-[800px]">
              <Image
                src="/images/desk2.png"
                alt="Desk Background"
                fill
                className="object-cover shadow-lg w-full"
                quality={100}
                priority
                sizes="100vw"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-4xl text-white font-bold font-mono whitespace-pre-line text-center">
                {displayText}<span className="animate-blink">|</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      
      {/* Blog Section */}
      <section id="blog" className="mt-8 lg:mt-6 px-6 py-10">
        <h2 className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-10 lg:mb-14`}>My Blog</h2>
        <div className={`relative w-full max-w-[1800px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-6 py-10`}>
          <div className={`relative w-full max-w-[1750px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-6 lg:p-10`}>
            <div className="relative w-full h-[350px] mb-10">
              <Image
                src="/images/beach4.jpeg"
                alt="Blog Header"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 1750px) 100vw, 1750px"
              />
            </div>
            <div className={`text-lg lg:text-2xl ${darkMode ? 'text-gray-200' : 'text-black'} font-medium text-center mb-10 lg:mb-14 mt-6 lg:mt-10`}>
              Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
              and my journey transitioning from education to tech. Feel free to explore my posts below.
            </div>

            <BlogPosts posts={posts} darkMode={darkMode} />
            
            <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mt-10 lg:mt-14 mb-10 lg:mb-14">
              {Array.from({length: totalPages}, (_, index) => (
                <button
                  key={index}
                  onClick={() => window.location.href = `/blog?page=${index + 1}`}
                  className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-000 text-black'} h-[35px] w-[120px] sm:h-[45px] sm:w-[140px] md:h-[55px] md:w-[160px] lg:h-[70px] lg:w-[180px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md`}
                  style={{
                    transition: 'all 0.3s ease',
                    boxShadow: darkMode ? 
                      '3px 3px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(0, 0, 0, 0.4), inset 2px 2px 5px rgba(255, 255, 255, 0.1)' :
                      '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = darkMode ?
                      `0 0 10px rgba(255, 255, 255, 0.3), 
                       0 0 20px rgba(255, 255, 255, 0.2), 
                       0 0 30px rgba(255, 255, 255, 0.1),
                       inset 0 0 10px rgba(255, 255, 255, 0.1),
                       inset 0 0 20px rgba(255, 255, 255, 0.05)` :
                      `0 0 10px rgba(255, 255, 255, 0.6), 
                       0 0 20px rgba(255, 255, 255, 0.5), 
                       0 0 30px rgba(255, 255, 255, 0.4),
                       inset 0 0 10px rgba(255, 255, 255, 0.3),
                       inset 0 0 20px rgba(255, 255, 255, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = darkMode ?
                      '3px 3px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(0, 0, 0, 0.4), inset 2px 2px 5px rgba(255, 255, 255, 0.1)' :
                      '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                >
                  See more
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills section */}
        <section id="skills" className="mt-8 lg:mt-12 px-6 py-10">
          <h2 className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-10 lg:mb-14`}>Skills</h2>
          <div className={`relative w-full max-w-[1800px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-6 py-10`}>
            <div className={`relative w-full max-w-[1750px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-6 lg:p-10`}>
              <Skillz />
            </div>
          </div>
        </section>

        {/* Project Cards Section */}
        <section id="projects" className="mt-8 lg:mt-6 px-6 py-10">
          <h2 className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-10 lg:mb-14`}>Projects</h2>
          <div className={`relative w-full max-w-[1800px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-6 py-10`}>
            <div className={`relative w-full max-w-[1750px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-6 lg:p-10`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center px-8">
                <ProjectCard
                  title="HelloDoctor"
                  imageUrl="/images/hellodoc4.png"
                  githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
                  liveDemoUrl="https://hello-doctor-nu98.vercel.app/"
                  darkMode={darkMode}
                />
                <ProjectCard
                  title="Five Star Recipes"
                  imageUrl="/images/recipe2.png"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="https://todo-app-demo.com"
                  darkMode={darkMode}
                />
                <ProjectCard
                  title="Movie App"
                  imageUrl="/images/movieapp.png"
                  githubUrl="https://github.com/yourusername/movie-app"
                  liveDemoUrl="https://movie-app-demo.com"
                  darkMode={darkMode}
                />
                <ProjectCard
                  title="Central Florida Mountain Biking"
                  imageUrl="/images/mtb.jpeg"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="https://todo-app-demo.com"
                  darkMode={darkMode}
                />
              </div>
              <div className="flex justify-center mt-14">
                <button
                  className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'} h-[35px] w-[120px] sm:h-[45px] sm:w-[140px] md:h-[55px] md:w-[160px] lg:h-[70px] lg:w-[180px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md`}
                  style={{
                    transition: 'all 0.3s ease',
                    boxShadow: darkMode ?
                      '3px 3px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(0, 0, 0, 0.4), inset 2px 2px 5px rgba(255, 255, 255, 0.1)' :
                      '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = darkMode ?
                      `0 0 10px rgba(255, 255, 255, 0.3),
                       0 0 20px rgba(255, 255, 255, 0.2),
                       0 0 30px rgba(255, 255, 255, 0.1),
                       inset 0 0 10px rgba(255, 255, 255, 0.1),
                       inset 0 0 20px rgba(255, 255, 255, 0.05)` :
                      `0 0 10px rgba(255, 255, 255, 0.6),
                       0 0 20px rgba(255, 255, 255, 0.5),
                       0 0 30px rgba(255, 255, 255, 0.4),
                       inset 0 0 10px rgba(255, 255, 255, 0.3),
                       inset 0 0 20px rgba(255, 255, 255, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = darkMode ?
                      '3px 3px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(0, 0, 0, 0.4), inset 2px 2px 5px rgba(255, 255, 255, 0.1)' :
                      '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onClick={() => window.location.href = '/projects'}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <AboutMe darkMode={darkMode} />
      </section>
      <Footer/>
    </div>
  );
}