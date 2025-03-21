'use client';

import Image from 'next/image';

interface AboutMeProps {
  darkMode: boolean;
}

const AboutMe = ({ darkMode }: AboutMeProps) => {
  return (
    <section id="about" className="mt-8 lg:mt-8 px-8 py-8">
      <h2 className={`text-5xl lg:text-6xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-16 lg:mb-24`}>About me</h2>
      <div className={`relative w-full max-w-[2000px] h-auto mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg px-12 py-20`}>
        <div className={`relative w-full max-w-[1950px] h-auto mx-auto ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-sm shadow-lg p-12 lg:p-20`}>
          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1 lg:mx-8">
              <div className="h-full p-12 lg:p-16 flex flex-col justify-start">
                <div className={`text-3xl lg:text-4xl ${darkMode ? 'text-gray-200' : 'text-black'} font-sans font-light text-left leading-relaxed`}>
                  I was born and raised on the east coast of Long Island, NY where I received a degree in education/psychology. In 2005 I moved to Florida, the southeastern 
                  tip of the U.S. I spent the next several years as an educator, many of those years focused on math, science and technology. 
                  I spent endless hours incorporating technology into lessons and coming up with creative ways to promote maximum learning.
                  As I veered more towards technology and found myself analyzing programs and learning platforms, brainstorming ways to improve
                  upon them, I fell more and more in love. I began teaching myself coding, starting with Python and moving on to MERN stack. I 
                  finally decided it was time to change my path and pursue this field in its entirety. I became a certified software developer 
                  and am currently in the process of becoming certified in web3 as well. I hold myself to the highest standards and am committed 
                  to providing excellence in whatever I do. 
                  When I&apos;m not coding, I can be found mountain biking on the trails, kayaking in the springs, or making my family take tacky 
                  Christmas pictures. Please feel free to watch OUR STORY below or click on my blog to learn more about me.
                </div>
                <div className={`text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} font-bold text-center mt-16 mb-12`}>Our Story</div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
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
                      className="mb-8"
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
