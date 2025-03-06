'use client';
import React from 'react';
import ProjectCard from '@/app/components/projects-card';
import { useDarkMode } from '@/app/components/darkMode';

const Projects: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className={`relative min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200'} font-poppins text-4xl overflow-hidden transition-colors duration-300 mt-0`}>
        <section id="projects" className="mt-8 lg:mt-8 px-8 py-8">
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-16 lg:mb-24`}>Projects</h2>
          
          <div className={`text-2xl lg:text-3xl ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-center max-w-6xl mx-auto mb-16`}>
            Welcome to my portfolio! Below you'll find a collection of projects that showcase my skills in web development, blockchain technology, and full-stack applications. Each project represents my commitment to creating innovative solutions while continuously learning and growing as a developer.
          </div>

          <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-12 py-20`}>
            <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-12 lg:p-20`}>
              <div className="flex flex-col lg:flex-row relative">
                <div className="flex-1 lg:mx-8">
                  <div className="h-full p-12 lg:p-16 flex flex-col justify-start">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    <ProjectCard
                        title="DEFi Real Estate App"
                        imageUrl="/images/DEFi.png"
                        githubUrl="https://defirealestate.vercel.app/"
                        liveDemoUrl="https://metana-solidity-twxj.vercel.app/"
                        description="A Real Estate Platform for buying and selling properties, built with React, Express,and Node.js."
                        darkMode={darkMode}
                      />
                      <ProjectCard
                        title="NFT Marketplace Dapp"
                        imageUrl="/images/nftmarketplace2.png"
                        githubUrl="https://github.com/skajosborn/metana-solidity/tree/module-3/module-3/nft-marketplace"
                        liveDemoUrl="https://metana-solidity-twxj.vercel.app/"
                        description="An NFT Marketplace Dapp built with Solidity, React, and Next.js."
                        darkMode={darkMode}
                      />
                      <ProjectCard
                        title="ERC20 Data Analytics Dashboard"
                        imageUrl="/images/dataAnalyticsDash.png"
                        githubUrl="https://github.com/skajosborn/metana-solidity/tree/module-5.5/module-5/blockchain-dashboard"
                        liveDemoUrl="https://metana-solidity-sara-osborns-projects.vercel.app/"
                        description="A dashboard for analyzing ERC20 token data, featuring the USDC token."
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;