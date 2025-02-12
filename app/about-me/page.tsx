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

  const [darkMode ] = React.useState(false);

  return (
    <div className={`relative min-h-screen p-16 sm:p-20 md:p-24 lg:p-32 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} font-poppins text-xl overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-8 py-20 lg:px-12 lg:py-32">
        <div className="my-24 sm:my-28 md:my-32 lg:my-40">
          <h2 className="text-4xl font-bold mb-20 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <SkillSection title="Frontend" skills={skills.frontend} darkMode={darkMode} />
            <SkillSection title="Backend" skills={skills.backend} darkMode={darkMode} />
            <SkillSection title="Web3" skills={skills.web3} darkMode={darkMode} />
            <SkillSection title="Other" skills={skills.other} darkMode={darkMode} />
          </div>
        </div>
        <div className="text-center my-24 sm:my-28 md:my-32 lg:my-40">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Let&apos;s Connect!</h2>
          <p className="text-lg lg:text-xl mb-12 px-8">
            I&apos;m always open to new challenges and projects. If you&apos;re interested in working together or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-gray-200 px-8 py-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-black"
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
    <div className="flex flex-col items-center p-6 sm:p-8">
      <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
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
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 text-sm sm:text-base md:text-lg lg:text-xl font-medium transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        <div className={`absolute inset-0 flex items-center justify-center rounded-full shadow-lg backface-hidden border-2 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'} p-4 text-center`}>
          {skill.name}
        </div>
        <div className={`absolute inset-0 flex items-center justify-center rounded-full shadow-lg rotate-y-180 backface-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <Image src={skill.logo} alt={skill.name} width={48} height={48} className="w-2/3 h-2/3" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;