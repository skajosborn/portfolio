'use client';
import Image from "next/image";
import ProfileSidebar from "@/app/components/profileSidebar";
import ProfileSidebarRight from '@/app/components/profileSidebarRight';
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
      .then(data => setPosts(data.posts || [])); // Access posts array from response

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
  // Only calculate totalPages if posts array exists and has length
  const totalPages = posts && posts.length ? Math.ceil(posts.length / postsPerPage) : 0;
  return (
    <div className="relative min-h-screen mt-20 bg-gray-200 font-poppins text-xl overflow-hidden">
      <section id="home" className="mt-6 lg:mt-10">
        <h2 className="text-3xl lg:text-4xl text-black pt-10 font-bold text-center mb-8 lg:mb-12">Portfolio</h2>
        <div className="relative w-full bg-gray-100 shadow-lg px-4 py-8">
          <div className="relative w-full bg-white shadow-lg p-4 lg:p-8">
            <div className="relative w-full h-[400px] lg:h-[700px]">
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-3xl text-white font-bold font-mono whitespace-pre-line text-center">
                {displayText}<span className="animate-blink">|</span>
              </div>
              {/* Oval image overlaying the background */}
              <div 
                className="absolute top-10 lg:top-28 left-1/2 lg:left-[18%] -translate-x-1/2 w-48 h-60 lg:w-64 lg:h-80 border-4 bg-white border-white overflow-hidden rounded-[10%] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.2)]"
              >
                <Image
                  src="/images/myface.png"
                  alt="Profile Image"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="mt-6 lg:mt-10 px-4 py-8">
        <h2 className="text-3xl lg:text-4xl text-black font-bold text-center mb-8 lg:mb-12">About me</h2>
        <div className="relative w-full max-w-[1650px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-4 py-8">
          <div className="relative w-full max-w-[1600px] h-auto mx-auto bg-white rounded-sm shadow-lg p-4 lg:p-8">
            <div className="flex flex-col lg:flex-row relative">
              <div className="flex-1 lg:mx-4">
                <div className="h-full p-6 lg:p-8 flex flex-col justify-start">
                  <div className="text-lg lg:text-xl text-black font-medium text-left">
                    I was born and raised on the east coast of Long Island, NY. I received a degree in education/psychology. In 2005 I moved to Florida, the southeastern 
                    tip of the U.S. I spent the next several years as an educator, many of those years focused on math, science and technology. 
                    I spent endless hours incorporating technology into lessons and coming up with creative ways to promote maximum learning.
                    As I veered more towards technology and found myself analyzing programs and learning platforms, brainstorming ways to improve
                    upon them, I fell more and more in love. I began teaching myself coding, starting with Python and moving on to MERN stack. I 
                    finally decided it was time to change my path and pursue this field in its entirety. I became a certified software developer 
                    and am currently in the process of becoming certified in web3 as well. I hold myself to the highest standards and am committed 
                    to providing excellence in whatever I do. 
                    When I'm not coding, I can be found mountain biking ont the trails, kayaking in the springs, or making my family take tacky 
                    Christmas pictures. Please feel free to watch 'Our Story' below or click on my blog to learn more about me.
                  </div>
                  <div className="text-xl lg:text-2xl text-black font-bold text-center mt-8 mb-6">Our Story</div>
                  <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    <div className="w-[300px] h-[400px] relative">
                      <Image
                        src="/images/mtbgirl.webp"
                        alt="Mountain Biking"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 300px, 300px"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 h-[400px]">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/BBuBQuuEiSE?si=zf1hMieahSKd6Dyc" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mb-4"
                      ></iframe>
                    </div>
                    <div className="w-[300px] h-[400px] relative">
                      <Image
                        src="/images/springs2.webp"
                        alt="Florida Springs"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 300px, 300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="blog" className="mt-6 lg:mt-4 px-4 py-8">
        <h2 className="text-3xl lg:text-4xl text-black font-bold text-center mb-8 lg:mb-12">My Blog</h2>
        <div className="relative w-full max-w-[1650px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-4 py-8">
          <div className="relative w-full max-w-[1600px] h-auto mx-auto bg-white rounded-sm shadow-lg p-4 lg:p-8">
            <div className="text-base lg:text-xl text-black font-medium text-center mb-8 lg:mb-12 mt-4 lg:mt-8">
              Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
              and my journey transitioning from education to tech. Feel free to explore my posts below.
            </div>
         

            <BlogPosts posts={posts} />
            {/* Pagination */}
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mt-8 lg:mt-12 mb-8 lg:mb-12">
              {Array.from({length: totalPages}, (_, index) => (
                <button
                  key={index}
                  onClick={() => window.location.href = `/blog?page=${index + 1}`}
                  className="bg-gray-100 h-[30px] w-[100px] sm:h-[40px] sm:w-[120px] md:h-[50px] md:w-[140px] lg:h-[60px] lg:w-[160px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
                  See more
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills section */}
        <section id="skills" className="mt-6 lg:mt-10 px-4 py-8">
          <h2 className="text-3xl lg:text-4xl text-black font-bold text-center mb-8 lg:mb-12">Skills</h2>
          <div className="relative w-full max-w-[1650px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-4 py-8">
            <div className="relative w-full max-w-[1600px] h-auto mx-auto bg-white rounded-sm shadow-lg p-4 lg:p-8">
              <AboutMe />
            </div>
          </div>
        </section>

        {/* Project Cards Section */}
        <section id="projects" className="mt-6 lg:mt-4 px-4 py-8">
          <h2 className="text-3xl lg:text-4xl text-black font-bold text-center mb-8 lg:mb-12">Projects</h2>
          <div className="relative w-full max-w-[1650px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-4 py-8">
            <div className="relative w-full max-w-[1600px] h-auto mx-auto bg-white rounded-sm shadow-lg p-4 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center px-6">
                <ProjectCard
                  title="HelloDoctor"
                  imageUrl="/images/hellodoctor.png"
                  githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
                  liveDemoUrl="https://hello-doctor-nu98.vercel.app/"
                />
                <ProjectCard
                  title="To Do List"
                  imageUrl="/images/comingsoon.jpg"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="https://todo-app-demo.com"
                />
                <ProjectCard
                  title="Movie App"
                  imageUrl="/images/comingsoon.jpg"
                  githubUrl="https://github.com/yourusername/movie-app"
                  liveDemoUrl="https://movie-app-demo.com"
                />
                <ProjectCard
                  title="To Do List"
                  imageUrl="/images/comingsoon.jpg"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="https://todo-app-demo.com"
                />
              </div>
              <div className="flex justify-center mt-12">
                <button
                  className="bg-gray-100 h-[30px] w-[100px] sm:h-[40px] sm:w-[120px] md:h-[50px] md:w-[140px] lg:h-[60px] lg:w-[160px] text-md sm:text-lg md:text-xl lg:text-2xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
                  onClick={() => window.location.href = '/projects'}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="bitmoji" className="mt-6 lg:mt-10 px-4 py-4">
        <div className="relative w-full max-w-[300px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-2 py-2">
          <div className="relative w-full max-w-[280px] h-auto mx-auto bg-white rounded-sm shadow-lg p-2">
            <div className="relative w-full h-[300px]">
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
      <section id="contact" className="mt-4 lg:mt-6 mb-10 px-4 py-4">
        <h2 className="text-3xl lg:text-4xl text-black font-bold text-center mb-4 lg:mb-6">Let's Connect!</h2>
        <p className="text-lg lg:text-xl text-black mb-8 text-center">
          I'm always open to exciting projects and collaborations. If you're interested in working together or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-gray-100 h-[35px] w-[100px] sm:h-[45px] sm:w-[120px] md:h-[55px] md:w-[140px] lg:h-[65px] lg:w-[160px] text-md sm:text-base md:text-xl lg:text-2xl font-mulish font-normal transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md mx-4"
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
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}