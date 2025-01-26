'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import BlogPosts from "@/app/components/blogPosts";
import ProjectCard from "@/app/components/projects-card";
import Skillz from "@/app/components/skills";
import AboutMe from "@/app/components/about-me";
import Footer from "@/app/components/footer";
import { useDarkMode } from '@/app/components/darkMode';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [displayText, setDisplayText] = useState('');
  const { darkMode } = useDarkMode();
  const fullText = 'Welcome to\nMy Page';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Fetch blog posts data
    fetch('/api/blogs')
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

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const postsPerPage = isMobile ? 3 : 6;
  const totalPages = posts && posts.length ? Math.ceil(posts.length / postsPerPage) : 0;

  return (
    <div style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px]">
        <div className={`relative min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200'} font-poppins text-4xl overflow-hidden transition-colors duration-300`}>
          {/* Content Sections */}
          <section id="home" className="pt-16 lg:pt-20">
            <h2 className={`text-5xl sm:text-5xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} pt-16 font-bold text-center mb-16 lg:mb-20 transition-colors duration-300`}>Portfolio</h2>
            <div className={`relative w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg py-8`}>
              <div className={`relative w-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg py-16`}>
                <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[900px]">
                  <Image
                    src="/images/desk2.png"
                    alt="Desk Background"
                    fill
                    className="object-cover shadow-lg w-full"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl lg:text-6xl text-white font-bold font-mono whitespace-pre-line text-center">
                    {displayText}<span className="animate-blink">|</span>
                  </div>
                  {/* Oval image overlaying the background */}
                  <a href="/#about">
                    <div 
                      className="absolute top-5 sm:top-10 lg:top-28 left-1/2 lg:left-[18%] -translate-x-1/2 w-36 h-48 sm:w-56 sm:h-72 lg:w-80 lg:h-96 border-4 bg-white border-white overflow-hidden rounded-[10%] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.2)]"
                    >
                      <Image
                        src="/images/myface.png"
                        alt="Profile Image"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 224px, 320px"
                        priority
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          {/* Blog Section */}
          <section id="blog" className="mt-20 lg:mt-24 px-4 sm:px-12 py-20">
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-20 lg:mb-24`}>My Blog</h2>
            <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-4 sm:px-12 py-12 sm:py-24`}>
              <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-8 sm:p-24 lg:p-28`}>
                <div className="relative w-full h-[200px] sm:h-[400px] mb-20">
                  <Image
                    src="/images/beach4.jpeg"
                    alt="Blog Header"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 1950px) 100vw, 1950px"
                  />
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl ${darkMode ? 'text-gray-200' : 'text-black'} font-medium text-center mb-20 lg:mb-24 mt-16 lg:mt-20`}>
                  Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
                  and my journey transitioning from education to tech. Feel free to explore my posts below.
                </div>

                <BlogPosts posts={posts} darkMode={darkMode} />
                
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-20 lg:mt-24 mb-20 lg:mb-24">
                  {Array.from({length: totalPages}, (_, index) => (
                    <button
                      key={index}
                      onClick={() => window.location.href = `/blog?page=${index + 1}`}
                      className="bg-gray-100 h-[45px] w-[160px] sm:h-[55px] sm:w-[180px] md:h-[65px] md:w-[200px] lg:h-[85px] lg:w-[220px] text-2xl sm:text-3xl font-mulish text-black transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md"
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
            <section id="skills" className="mt-20 lg:mt-24 px-4 sm:px-12 py-12">
              <h2 className={`text-5xl sm:text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-20 lg:mb-24`}>Skills</h2>
              <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-4 sm:px-12 py-12 sm:py-24`}>
                <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} text-white rounded-sm shadow-lg p-8 sm:p-24 lg:p-28`}>
                  <Skillz />
                </div>
              </div>
            </section>

            {/* Project Cards Section */}
            <section id="projects" className="mt-12 mb-0 lg:mt-12 lg:mb-0 px-4 sm:px-12 py-10">
              <h2 className={`text-5xl sm:text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-20 lg:mb-24`}>Projects</h2>
              <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-4 sm:px-12 py-12 sm:py-24`}>
                <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-8 sm:p-24 lg:p-28`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 justify-items-center px-4 sm:px-12">
                    <ProjectCard
                      title="NFT Marketplace Dapp"
                      imageUrl="/images/nftmarketplace2.png"
                      githubUrl="https://github.com/skajosborn/metana-solidity/tree/module-3/module-3/nft-marketplace"
                      liveDemoUrl="https://metana-solidity-twxj.vercel.app/"
                      description="An NFT Marketplace Dapp built with Solidity, React, and Next.js."
                      darkMode={darkMode}
                    />
                    <ProjectCard
                      title="HelloDoctor"
                      imageUrl="/images/hellodoc4.png"
                      githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
                      liveDemoUrl="https://hello-doctor-nu98.vercel.app/"
                      description="A medical platform connecting doctors and patients, featuring appointment scheduling and health record management."
                      darkMode={darkMode}
                    />
                    <ProjectCard
                      title="Five Star Recipes"
                      imageUrl="/images/recipe2.png"
                      githubUrl="https://github.com/yourusername/todo-app"
                      liveDemoUrl="/coming-soon"
                      description="A recipe sharing platform with rating system and ingredient-based search functionality."
                      darkMode={darkMode}
                    />
                    <ProjectCard
                      title="Movie App"
                      imageUrl="/images/movieapp.png"
                      githubUrl="https://github.com/yourusername/movie-app"
                      liveDemoUrl="https://module-3--mymovieappsbo.netlify.app/"
                      description="A clone of a popular movie app with up-to-date movie browsing and search functionality."
                      darkMode={darkMode}
                    />
                    <ProjectCard
                      title="Central Florida Mountain Biking"
                      imageUrl="/images/mtb.jpeg"
                      githubUrl="https://github.com/yourusername/todo-app"
                      liveDemoUrl="/coming-soon"
                      description="An interactive guide to mountain biking trails in Central Florida with difficulty ratings and trail conditions."
                      darkMode={darkMode}
                    />
                  </div>
                  <div className="flex justify-center mt-12">
                    <button
                      className="bg-gray-100 h-[45px] w-[160px] sm:h-[55px] sm:w-[180px] md:h-[65px] md:w-[200px] lg:h-[85px] lg:w-[220px] text-2xl sm:text-3xl font-mulish text-black transition-all duration-300 flex items-center justify-center transform hover:scale-105 rounded-md"
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
          <section id="bitmoji" className="mt-18 lg:mt-10 px-4 sm:px-12 py-12">
            <div className="relative w-full max-w-[450px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-4 py-4">
              <a href="/contact">
                <div className="relative w-full max-w-[430px] h-auto mx-auto bg-white rounded-sm shadow-lg p-8">
                  <div className="relative w-full h-[300px] sm:h-[450px]">
                    <Image
                      src="/images/bitmoji1.png"
                      alt="Bitmoji"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </section>
          <section id="contact" className="mt-12 lg:mt-15 mb-20 px-4 sm:px-12 py-12">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-10 lg:mb-12`}>Let&apos;s Connect!</h2>
            <p className={`text-2xl sm:text-3xl lg:text-4xl ${darkMode ? 'text-white' : 'text-black'} mb-16 text-center`}>
              I&apos;m always open to exciting projects and collaborations. If you&apos;re interested in working together or just want to say hi, feel free to reach out!
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-gray-100 h-[40px] w-[140px] sm:h-[60px] sm:w-[180px] md:h-[70px] md:w-[200px] lg:h-[90px] lg:w-[220px] text-2xl sm:text-3xl font-mulish font-normal transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md mx-6"
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
      </div>
    </div>
  );
}