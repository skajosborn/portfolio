'use client';

import React from 'react';
import Image from 'next/image';

const SkillsPage = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Java', 'SQL', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Agile/Scrum']
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-[80%] mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[900px]">
                <Image 
                  src="/images/bitmojismaller.png"
                  alt="Skills and Development"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Why Do I Care That You Were a Teacher?</h2>
              <p className="text-2xl sm:text-3xl font-medium text-gray-700 leading-relaxed mb-6">
                Why should you care that I am well-versed in the field of education? 
                You shouldn't, right? Before I embarked on this journey, I deeply questioned
                whether I had anything at all to offer the field of technology. Had I 
                really wasted so many years perfecting my craft to simply abandon it and 
                never use it again? I accepted that fate. I appreciated the time and 
                experiences I gained from my past, but I would be starting over new. I would 
                have to reinvent myself from scratch. And I was willing. Little did I know, 
                I had an entire bank of assets I carried with me. In most technology careers, 
                you are given a problem and must come up with a design to improve upon it. 
                Right? Sometimes you'll be given a solid base to build on, and other times 
                you'll be given a mere idea that must be created and then brought to fruition. 
                In education, you're given at least 22 of these projects, simultaneously. 
                Most often you will be given around 180 days to complete all of these projects, 
                however, you must continuously work on all of them throughout the entire duration 
                of time. Unlike most digital tasks, many of your projects will disappear for days, 
                sometimes weeks at a time. You must compensate for this missed time. Now add in 
                frequent interruptions, meetings, behavioral issues, and separate bosses for each 
                of your 22+ projects. You must find balance. You must manage all of your subjects 
                effectively and efficiently. You must be able to maintain order, deescalate 
                turbulence, and meet demands that are oftentimes unrealistic with insufficient 
                resources to do so. Being an educator is not for the faint of heart. Being an 
                exceptional educator requires complete dedication, focus, selflessness and the 
                willingness to give 110% of yourself to your career with no tangible compensation 
                in return. So what do I bring to the table?
              </p>
              <ul className="list-disc list-inside space-y-2 text-2xl sm:text-3xl font-medium text-gray-700">
                <li>A perseverance for Perfection</li>
                <li>A relentless drive to accomplish the unaccomplishable</li>
                <li>A willingness to sacrifice and give selflessly in order to achieve excellence</li>
                <li>An ability to efficiently multitask and meet deadlines</li>
                <li>Extensive experience communicating with a vast variety of recipients</li>
                <li>The ability to listen to and understand those with language barriers or difficulty conveying their thoughts</li>
                <li>A Creative approach to solving most problems and the ability to think outside the box</li>
                <li>A need to stay ahead of any new technology, programs or strategies to stay current</li>
              </ul>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-4 italic">
                I'll be back to expand on this list as I discover more...
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-800">My Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700">{skillGroup.category}</h2>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xl sm:text-2xl text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            I'm constantly learning and adding new skills to my repertoire.
            These are some of the key technologies I work with regularly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;