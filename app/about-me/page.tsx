'use client';

import React from 'react';
import Image from 'next/image';

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
  darkMode: boolean;
}

interface SkillCardProps {
  skill: Skill;
  darkMode: boolean;
}

const AboutMe = () => {
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
      { name: 'Blockchain', logo: '/logos/block.png' },
    ],
    other: [
      { name: 'Cloudinary', logo: '/logos/cloudinary.svg' },
      { name: 'AWS EC2', logo: '/logos/aws-ec2.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Nodemon', logo: '/logos/nodemon.svg' },
    ],
  };

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={`relative min-h-screen p-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} font-poppins text-xl overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="my-20">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillSection title="Frontend" skills={skills.frontend} darkMode={darkMode} />
            <SkillSection title="Backend" skills={skills.backend} darkMode={darkMode} />
            <SkillSection title="Web3" skills={skills.web3} darkMode={darkMode} />
            <SkillSection title="Other" skills={skills.other} darkMode={darkMode} />
          </div>
        </div>
        <div className="text-center my-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let&#39;s Connect!</h2>
          <p className="text-lg lg:text-xl mb-8">
            I&#39;m always open to exciting projects and collaborations. If you&#39;re interested in working together or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-gray-200 px-6 py-3 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, darkMode }: SkillSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill, darkMode }: SkillCardProps) {
  return (
    <div className="group perspective-1000">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-sm sm:text-base md:text-lg lg:text-xl font-medium transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        <div className={`absolute inset-0 flex items-center justify-center rounded-full shadow-lg backface-hidden border-2 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'} p-2 text-center`}>
          {skill.name}
        </div>
        <div className={`absolute inset-0 flex items-center justify-center rounded-full shadow-lg rotate-y-180 backface-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <Image src={skill.logo} alt={skill.name} width={36} height={36} className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;