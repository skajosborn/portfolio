'use client';

import Image from 'next/image';

interface AboutMeProps {
  darkMode: boolean;
}

const AboutMe = ({ darkMode }: AboutMeProps) => {
  return (
    <section id="about" className="mt-8 lg:mt-12 px-6 py-10">
      <h2 className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-10 lg:mb-14`}>About me</h2>
      <div className={`relative w-full max-w-[1800px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-6 py-10`}>
        <div className={`relative w-full max-w-[1750px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-6 lg:p-10`}>
          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1 lg:mx-4">
              <div className="h-full p-8 lg:p-10 flex flex-col justify-start">
                <div className={`text-xl lg:text-2xl ${darkMode ? 'text-gray-200' : 'text-black'} font-medium text-left`}>
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
                <div className={`text-2xl lg:text-3xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mt-10 mb-8`}>Our Story</div>
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
  );
};

export default AboutMe;