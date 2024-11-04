import Image from "next/image";
import Header from "@/app/components/header";
import PortfolioInteractive from "@/app/components/computer";
import PictureOnWall from "@/app/components/wallPicture";

export default function Home() {
  return (
    <div className="relative min-h-screen p-12 bg-gradient-to-b from-white to-gray-800 font-poppins text-xl overflow-hidden">
      <Header />

      {/* Main container with flex layout */}
      <div className="flex flex-col  lg:flex-row mt-24 lg:mt-36">

        {/* Left side profile section */}
        <div className="flex-shrink-0 w-full lg:w-1/3 px-4 md:px-10 lg:px-14 lg:sticky lg:top-36">
          <div className="w-full max-w-[256px] mx-auto">
            <div className="relative w-[256px] h-[320px]">
              <Image
                src="/images/myface3.jpeg" 
                alt="Left side image"
                className="rounded-lg shadow-lg object-cover"
                fill
                sizes="256px"
                priority
              />
            </div>

            <div className="mt-4 text-center lg:text-left">
              <h2 className="font-semibold text-white text-xl md:text-2xl mb-2">Hi, I'm Sara</h2>
              <p className="text-gray-300 text-xl md:text-2xl mb-4">Full Stack Developer</p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                I come with a strong foundation in art and design, years of experience in teaching linguistics, and a drive for perfection in everything I do. I am fully dedicated to creating high-quality, exceptional user experiences. <br /><br />
                As a full-stack developer, I will build your website from start to finish. Leave me a message so we can bring your ideas to fruition.
              </p>
            </div>
          </div>
        </div>

        {/* Right side background section */}
        <div className="
          relative w-full mx-auto mt-10
          sm:w-5/6
          md:w-3/4  
          lg:w-2/3 lg:mt-0
          max-w-screen-2xl mr-20
        ">
          
          {/* Background Image with responsive layout */}
          <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/hero.png"
                alt="Desk Background"
                fill
                className="object-cover"
                quality={100}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
              />
            </div>

          {/* Picture on Wall with responsive positioning */}
          <div className="
            absolute
            top-[10%] left-[10%] w-[20%]
            sm:top-[13%] sm:left-[24.5%] sm:w-[15%]
            md:top-[13%] md:left-[25%] md:w-[12%]
            lg:top-[6%] lg:left-[25%] lg:w-[10%]
            xl:top-[7.3%] xl:left-[25%] xl:w-[9.5%]
            1.5xl:top-[8%] 1.5xl:left-[25%] 1.5xl:w-[9.5%]
            2xl:top-[12%] 2xl:left-[25%] 2xl:w-[9.5%]
          ">
            <PictureOnWall />
          </div>

          {/* Interactive Monitor with responsive positioning */}
          <div className="
            absolute
            top-[20%] left-[25%] w-[40%]
            sm:top-[23%] sm:left-[39.4%] sm:w-[35%]
            md:top-[23.5%] md:left-[39%] md:w-[32%]
            lg:top-[11%] lg:left-[39.3%] lg:w-[30%]
            xl:top-[14.3%] xl:left-[39%] xl:w-[29.5%]
            1.5xl:top-[18%] 1.5xl:left-[39%] 1.5xl:w-[29.5%]
            2xl:top-[21.5%] 2xl:left-[39%] 2xl:w-[29.5%]
          ">
            <PortfolioInteractive />
          </div>
        </div>
      </div>
    </div>
  );
}