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
    <div className={`relative min-h-screen mt-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200'} font-poppins text-4xl overflow-hidden transition-colors duration-300`}>
      {/* Light/Dark mode button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full w-28 h-28 transition-all duration-300 bg-gray-200 hover:bg-gray-300"
        style={{
          boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3)'
        }}
      >
        {darkMode ? (
          <Image src="/sun.png" alt="Light mode" width={120} height={120} className="opacity-80" />
        ) : (
          <Image src="/moon.png" alt="Dark mode" width={120} height={120} className="opacity-80" />
        )}
      </button>

      {/* Content Sections */}
      <section id="home" className="mt-10 lg:mt-14">
        <h2 className={`text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} pt-14 font-bold text-center mb-12 lg:mb-16 transition-colors duration-300`}>Portfolio</h2>
        <div className={`relative w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg px-8 py-12 transition-colors duration-300`}>
          <div className={`relative w-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg p-8 lg:p-12 transition-colors duration-300`}>
            <div className="relative w-full h-[500px] lg:h-[900px]">
              <Image
                src="/images/desk2.png"
                alt="Desk Background"
                fill
                className="object-cover shadow-lg w-full"
                quality={100}
                priority
                sizes="100vw"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-6xl text-white font-bold font-mono whitespace-pre-line text-center">
                {displayText}<span className="animate-blink">|</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      
      {/* Blog Section */}
      <section id="blog" className="mt-10 lg:mt-8 px-8 py-12">
        <h2 className={`text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-12 lg:mb-16`}>My Blog</h2>
        <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-8 py-12`}>
          <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-8 lg:p-12`}>
            <div className="relative w-full h-[400px] mb-12">
              <Image
                src="/images/beach4.jpeg"
                alt="Blog Header"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 1950px) 100vw, 1950px"
              />
            </div>
            <div className={`text-3xl lg:text-4xl ${darkMode ? 'text-gray-200' : 'text-black'} font-medium text-center mb-12 lg:mb-16 mt-8 lg:mt-12`}>
              Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
              and my journey transitioning from education to tech. Feel free to explore my posts below.
            </div>

            <BlogPosts posts={posts} darkMode={darkMode} />
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-12 lg:mt-16 mb-12 lg:mb-16">
              {Array.from({length: totalPages}, (_, index) => (
                <button
                  key={index}
                  onClick={() => window.location.href = `/blog?page=${index + 1}`}
                  className="bg-gray-100 h-[45px] w-[160px] sm:h-[55px] sm:w-[180px] md:h-[65px] md:w-[200px] lg:h-[85px] lg:w-[220px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish text-black transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md"
                  style={{
                    transition: 'all 0.3s ease',
                    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(255, 255, 255, 0.6), 
                       0 0 25px rgba(255, 255, 255, 0.5), 
                       0 0 35px rgba(255, 255, 255, 0.4),
                       inset 0 0 15px rgba(255, 255, 255, 0.3),
                       inset 0 0 25px rgba(255, 255, 255, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)';
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
        <section id="skills" className="mt-10 lg:mt-14 px-8 py-12">
          <h2 className={`text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-12 lg:mb-16`}>Skills</h2>
          <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-8 py-12`}>
            <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'} rounded-sm shadow-lg p-8 lg:p-12`}>
              <Skillz />
            </div>
          </div>
        </section>

        {/* Project Cards Section */}
        <section id="projects" className="mt-10 lg:mt-8 px-8 py-12">
          <h2 className={`text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-12 lg:mb-16`}>Projects</h2>
          <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-8 py-12`}>
            <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-8 lg:p-12`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center px-10">
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
                  liveDemoUrl="/coming-soon"
                  darkMode={darkMode}
                />
                <ProjectCard
                  title="Movie App"
                  imageUrl="/images/movieapp.png"
                  githubUrl="https://github.com/yourusername/movie-app"
                  liveDemoUrl="https://module-3--mymovieappsbo.netlify.app/"
                  darkMode={darkMode}
                />
                <ProjectCard
                  title="Central Florida Mountain Biking"
                  imageUrl="/images/mtb.jpeg"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="/coming-soon"
                  darkMode={darkMode}
                />
              </div>
              <div className="flex justify-center mt-16">
                <button
                  className="bg-gray-100 h-[45px] w-[160px] sm:h-[55px] sm:w-[180px] md:h-[65px] md:w-[200px] lg:h-[85px] lg:w-[220px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish text-black transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md"
                  style={{
                    transition: 'all 0.3s ease',
                    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(255, 255, 255, 0.6),
                       0 0 25px rgba(255, 255, 255, 0.5),
                       0 0 35px rgba(255, 255, 255, 0.4),
                       inset 0 0 15px rgba(255, 255, 255, 0.3),
                       inset 0 0 25px rgba(255, 255, 255, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)';
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
      <section id="aboutme">
        <AboutMe darkMode={darkMode} />
      </section>
      <section id="bitmoji" className="mt-8 lg:mt-12 px-6 py-6">
        <div className="relative w-full max-w-[350px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-3 py-3">
          <div className="relative w-full max-w-[330px] h-auto mx-auto bg-white rounded-sm shadow-lg p-3">
            <div className="relative w-full h-[350px]">
              <Image
                src="/images/bitmoji1.png"
                alt="Bitmoji"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="mt-6 lg:mt-8 mb-12 px-6 py-6">
        <h2 className={`text-5xl lg:text-6xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-6 lg:mb-8`}>Let's Connect!</h2>
        <p className={`text-3xl lg:text-4xl ${darkMode ? 'text-white' : 'text-black'} mb-10 text-center`}>
          I'm always open to exciting projects and collaborations. If you're interested in working together or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-gray-100 h-[45px] w-[140px] sm:h-[55px] sm:w-[160px] md:h-[65px] md:w-[180px] lg:h-[80px] lg:w-[200px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish font-normal transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md mx-5"
            style={{
              transition: 'all 0.3s ease',
              boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 0 15px rgba(255, 255, 255, 0.6), 
                0 0 25px rgba(255, 255, 255, 0.5), 
                0 0 35px rgba(255, 255, 255, 0.4),
                inset 0 0 15px rgba(255, 255, 255, 0.3),
                inset 0 0 25px rgba(255, 255, 255, 0.2)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.5)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
          >
            Contact Me
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
}