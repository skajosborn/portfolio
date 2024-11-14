'use client'

import React from 'react';
import Image from 'next/image';
// import Header from '@/app/components/header';

interface Skill {
  name: string;
  logo: string;
}

interface Skills {
  frontend: Skill[];
  backend: Skill[];
  web3: Skill[];
  other: Skill[];
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

interface SkillCardProps {
  skill: Skill;
}

function Skillz() {
  const skills: Skills = {
    frontend: [
      { name: 'JavaScript', logo: '/logos/js.svg' },
      { name: 'React', logo: '/logos/reactjs.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'HTML5', logo: '/logos/html.svg' },
      { name: 'CSS', logo: '/logos/css.svg' },
    ],
    backend: [
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express', logo: '/logos/express.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresdark.svg' },
      { name: 'Prisma', logo: '/logos/prisma.png' },
    ],
    web3: [
      { name: 'Web3', logo: '/logos/web3icon.png' },
      { name: 'Solidity', logo: '/logos/solidityicon.png' },
      { name: 'Ethereum', logo: '/logos/ethereum.png' },
      { name: 'Blockchain', logo: '/logos/block.png'},
    ],
    other: [
      { name: 'Cloudinary', logo: '/logos/cloudinary.svg' },
      { name: 'AWS EC2', logo: '/logos/aws-ec2.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Nodemon', logo: '/logos/nodemon.svg' },
    ],
  };

  const [darkMode] = React.useState(false);

  return (
    <div className="relative min-h-fit p-1 font-poppins text-xl lg:text-2xl overflow-hidden">
      {/* <Header /> */}

      <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-10 my-12">
        {/* Header Section */}
        <div className="text-center mt-4 mb-6 px-4 lg:px-0">
          {/* <h1 className="text-5xl lg:text-7xl font-bold text-gray-600 mb-4">About Me</h1>
          <p className="text-2xl lg:text-3xl font-light text-gray-800 mx-auto text-justify lg:max-w-none">
            My mission is to craft unique and captivating user experiences that are not only seamlessly functional but also maintainable and efficient. I thrive on creativity and love the challenge of thinking outside the box, yet I equally value the elegance of a sleek, minimalist design. Driven by a commitment to excellence, I approach every project with a meticulous eye and don&#39;t rest until every detail meets the highest standard. I&#39;m passionate about staying on the cutting edge of technology and am a lifelong learner, currently deepening my expertise in Web3 and Smart Contracts. Feel free to reach out with any questions, ideas, or thoughts—and don&#39;t forget to visit my blog to learn more about my journey. Thank you for stopping by!
          </p> */}
        </div>
        {/* Skills Section */}
        <div className="my-5">
          {/* <h2 className="text-5xl lg:text-6xl font-bold text-gray-700 mb-28 text-center">Skills & Expertise</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Frontend Skills */}
            <SkillSection title="Frontend" skills={skills.frontend} darkMode={darkMode} />

            {/* Backend Skills */}
            <SkillSection title="Backend" skills={skills.backend} darkMode={darkMode} />

            {/* Web3 Skills */}
            <SkillSection title="Web3" skills={skills.web3} darkMode={darkMode} />

            {/* Other Skills */}
            <SkillSection title="Other" skills={skills.other} darkMode={darkMode} />
          </div>
        </div>
        {/* CTA Section */}
        <div className="flex justify-center mt-20">
          <a
            href="/skills"
            className="bg-gray-100 h-[55px] w-[160px] sm:h-[65px] sm:w-[180px] md:h-[75px] md:w-[200px] lg:h-[85px] lg:w-[220px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-mulish transition-all duration-300 text-black flex items-center justify-center transform hover:scale-105 rounded-md"
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
          </a>
        </div>
      </div>
    </div>
  );
}

// SkillSection component for each section (Frontend, Backend, etc.)
function SkillSection({ title, skills, darkMode }: SkillSectionProps & { darkMode: boolean }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h3 className={`text-3xl lg:text-4xl font-semibold mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
// SkillCard component for flip animation
function SkillCard({ skill }: SkillCardProps) {
    return (
      <div className="group perspective-1000 mb-8" style={{position: 'relative'}}>
        <div className="relative w-48 h-48 text-2xl lg:text-3xl font-medium text-black transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
          {/* Front Side - Shows name with glass overlay */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full shadow-lg backface-hidden border-4 border-black outline outline-2 outline-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:border-black bg-[url('/images/clear3.png')] bg-gray-500 bg-cover bg-center p-4 text-center">
            {skill.name}
          </div>
          {/* Back Side - Shows icon */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full shadow-lg rotate-y-180 backface-hidden border-2 border-black outline outline-2 outline-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:border-black bg-black">
            <div style={{position: 'relative', width: '80px', height: '80px'}}>
              <Image 
                src={skill.logo} 
                alt={skill.name} 
                fill
                sizes="80px"
                style={{objectFit: 'contain'}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Skillz;