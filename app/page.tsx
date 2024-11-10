'use client';
import Image from "next/image";
// import ProfileSidebar from "@/app/components/profileSidebar";
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
    <div className="relative min-h-screen mt-0 bg-gray-200 font-poppins text-2xl overflow-hidden">
      <section id="home" className="mt-8 lg:mt-12">
        <h2 className="text-4xl lg:text-5xl text-black pt-12 font-bold text-center mb-10 lg:mb-14">Portfolio</h2>
        <div className="relative w-full bg-gray-100 shadow-lg px-6 py-10">
          <div className="relative w-full bg-white shadow-lg p-6 lg:p-10">
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
              {/* Typing text overlay with margin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-4xl text-white font-bold font-mono whitespace-pre-line text-center">
                {displayText}<span className="animate-blink">|</span>
              </div>
              {/* Oval image overlaying the background */}
              <a href="#about" className="absolute top-12 lg:top-32 left-1/2 lg:left-[18%] -translate-x-1/2 w-56 h-72 lg:w-80 lg:h-96 border-4 bg-white border-white overflow-hidden rounded-[10%] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.2)]">
                <Image
                  src="/images/myface.png"
                  alt="Profile Image"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 224px, 320px"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="mt-8 lg:mt-12 px-6 py-10">
        <h2 className="text-4xl lg:text-5xl text-black font-bold text-center mb-10 lg:mb-14">About me</h2>
        <div className="relative w-full max-w-[1800px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-6 py-10">
          <div className="relative w-full max-w-[1750px] h-auto mx-auto bg-white rounded-sm shadow-lg p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row relative">
              <div className="flex-1 lg:mx-4">
                <div className="h-full p-8 lg:p-10 flex flex-col justify-start">
                  <div className="text-xl lg:text-2xl text-black font-medium text-left">
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
                  <div className="text-2xl lg:text-3xl text-black font-bold text-center mt-10 mb-8">Our Story</div>
                  <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                    <div className="w-[350px] h-[450px] relative">
                      <Image
                        src="/images/mtbgirl.webp"
                        alt="Mountain Biking"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 350px, 350px"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 aspect-video">
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
                    <div className="w-[350px] h-[450px] relative">
                      <Image
                        src="/images/springs2.webp"
                        alt="Florida Springs"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 350px, 350px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="blog" className="mt-8 lg:mt-6 px-6 py-10">
        <h2 className="text-4xl lg:text-5xl text-black font-bold text-center mb-10 lg:mb-14">My Blog</h2>
        <div className="relative w-full max-w-[1800px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-6 py-10">
          <div className="relative w-full max-w-[1750px] h-auto mx-auto bg-white rounded-sm shadow-lg p-6 lg:p-10">
            <div className="relative w-full h-[350px] mb-10">
              <Image
                src="/images/beach4.jpeg"
                alt="Blog Header"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 1750px) 100vw, 1750px"
              />
            </div>
            <div className="text-lg lg:text-2xl text-black font-medium text-center mb-10 lg:mb-14 mt-6 lg:mt-10">
              Welcome to my blog! Here I share my thoughts and experiences about software development, web3 technologies, 
              and my journey transitioning from education to tech. Feel free to explore my posts below.
            </div>

            <BlogPosts posts={posts} />
            {/* Pagination */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mt-10 lg:mt-14 mb-10 lg:mb-14">
              {Array.from({length: totalPages}, (_, index) => (
                <button
                  key={index}
                  onClick={() => window.location.href = `/blog?page=${index + 1}`}
                  className="bg-gray-100 h-[35px] w-[120px] sm:h-[45px] sm:w-[140px] md:h-[55px] md:w-[160px] lg:h-[70px] lg:w-[180px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
        <section id="skills" className="mt-8 lg:mt-12 px-6 py-10">
          <h2 className="text-4xl lg:text-5xl text-black font-bold text-center mb-10 lg:mb-14">Skills</h2>
          <div className="relative w-full max-w-[1800px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-6 py-10">
            <div className="relative w-full max-w-[1750px] h-auto mx-auto bg-white rounded-sm shadow-lg p-6 lg:p-10">
              <AboutMe />
            </div>
          </div>
        </section>

        {/* Project Cards Section */}
        <section id="projects" className="mt-8 lg:mt-6 px-6 py-10">
          <h2 className="text-4xl lg:text-5xl text-black font-bold text-center mb-10 lg:mb-14">Projects</h2>
          <div className="relative w-full max-w-[1800px] h-auto mx-auto bg-gray-100 rounded-lg shadow-lg px-6 py-10">
            <div className="relative w-full max-w-[1750px] h-auto mx-auto bg-white rounded-sm shadow-lg p-6 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center px-8">
                <ProjectCard
                  title="HelloDoctor"
                  imageUrl="/images/hellodoc4.png"
                  githubUrl="https://github.com/skajosborn/metana-fullstack-bootcamp/tree/main/module_3/my-movie-app"
                  liveDemoUrl="https://hello-doctor-nu98.vercel.app/"
                />
                <ProjectCard
                  title="Five Star Recipes"
                  imageUrl="/images/recipe2.png"
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
                  title="Central Florida Mountain Biking"
                  imageUrl="/images/mtb.jpeg"
                  githubUrl="https://github.com/yourusername/todo-app"
                  liveDemoUrl="https://todo-app-demo.com"
                />
              </div>
              <div className="flex justify-center mt-14">
                <button
                  className="bg-gray-100 h-[35px] w-[120px] sm:h-[45px] sm:w-[140px] md:h-[55px] md:w-[160px] lg:h-[70px] lg:w-[180px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
        <h2 className="text-4xl lg:text-5xl text-black font-bold text-center mb-6 lg:mb-8">Let's Connect!</h2>
        <p className="text-xl lg:text-2xl text-black mb-10 text-center">
          I'm always open to exciting projects and collaborations. If you're interested in working together or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-gray-100 h-[40px] w-[120px] sm:h-[50px] sm:w-[140px] md:h-[60px] md:w-[160px] lg:h-[70px] lg:w-[180px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish font-normal transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md mx-4"
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