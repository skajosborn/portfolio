import React from 'react';
import Image from 'next/image';
import Header from '@/app/components/header';

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

function AboutMe() {
  const skills: Skills = {
    frontend: [
      { name: 'JavaScript', logo: '/logos/js.svg' },
      { name: 'React', logo: '/logos/reactjs.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'HTML5', logo: '/logos/html.svg' },
      { name: 'CSS3', logo: '/logos/css.svg' },
    ],
    backend: [
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express', logo: '/logos/expressjs.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgres.svg' },
      { name: 'Prisma', logo: '/logos/prisma.svg' },
    ],
    web3: [
      { name: 'Web3', logo: '/logos/web3dotjs.svg' },
      { name: 'Solidity', logo: '/logos/solidity.svg' },
      { name: 'Ethereum', logo: '/logos/ethereum.svg' },
    ],
    other: [
      { name: 'Cloudinary', logo: '/logos/cloudinary.svg' },
      { name: 'AWS EC2', logo: '/logos/aws-ec2.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Nodemon', logo: '/logos/nodemon.svg' },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24">
        
        {/* Header Section */}
      {/* Header Section */}
        <div className="text-center mt-12 mb-20 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-teal-500 mb-4">About Me</h1>
          <p className="text-xl lg:text-2xl font-light text-gray-200 mx-auto text-justify lg:max-w-none">
            My mission is to craft unique and captivating user experiences that are not only seamlessly functional but also maintainable and efficient. I thrive on creativity and love the challenge of thinking outside the box, yet I equally value the elegance of a sleek, minimalist design. Driven by a commitment to excellence, I approach every project with a meticulous eye and don`&#39;`t rest until every detail meets the highest standard. I`&#39;`m passionate about staying on the cutting edge of technology and am a lifelong learner, currently deepening my expertise in Web3 and Smart Contracts. Feel free to reach out with any questions, ideas, or thoughts—and don`&#39;`t forget to visit my blog to learn more about my journey. Thank you for stopping by!
          </p>
        </div>
        {/* Skills Section */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-teal-500 mb-16 text-center">Skills & Expertise</h2>
          <div className="flex justify-between gap-10">
            
            {/* Frontend Skills */}
            <SkillSection title="Frontend" skills={skills.frontend} />

            {/* Backend Skills */}
            <SkillSection title="Backend" skills={skills.backend} />

            {/* Web3 Skills */}
            <SkillSection title="Web3" skills={skills.web3} />

            {/* Other Skills */}
            <SkillSection title="Other" skills={skills.other} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center my-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let`&#39;`s Connect!</h2>
          <p className="text-lg lg:text-xl text-gray-200 mb-8">
            I`&#39;`m always open to exciting projects and collaborations. If you`&#39;`re interested in working together or just want to say hi, feel free to reach out!
          </p>
          <a href="/contact" className="px-8 py-4 bg-teal-500 text-white text-xl font-medium rounded-lg shadow hover:bg-teal-600 transition duration-200">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

// SkillSection component for each section (Frontend, Backend, etc.)
function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-teal-300 mb-6">{title}</h3>
      <div className="flex flex-wrap gap-4 justify-center">
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
    <div className="group perspective-1000">
      <div className="relative w-32 h-32 text-lg font-medium text-teal-700 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-teal-100 rounded-full shadow-lg backface-hidden">
          {skill.name}
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg rotate-y-180 backface-hidden group-hover:rotate-y-0">
          <Image src={skill.logo} alt={`${skill.name} logo`} width={64} height={64} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;