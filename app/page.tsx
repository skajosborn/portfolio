import Image from "next/image";
// import PortfolioInteractive from "@/app/components/computer";
// import PictureOnWall from "@/app/components/wallPicture";
import ProfileSidebar from "@/app/components/profileSidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 font-poppins text-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start mt-24 lg:mt-36">
        
        {/* Sidebar */}
        <aside className="lg:w-1/3 w-full lg:sticky lg:top-0">
          <ProfileSidebar />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto lg:mt-0 lg:-ml-20 mr-10 max-w-6xl">
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/hero.png"
              alt="Desk Background"
              fill
              className="object-cover shadow-lg"
              quality={100}
              priority
              sizes="(max-width: 640px) 140vw, (max-width: 768px) 120vw, (max-width: 1024px) 100vw, 90vw"
            />
          </div>
          {/* Additional Content */}
          {/* <div className="mt-8">
            <PortfolioInteractive />
            <PictureOnWall />
          </div> */}
        </main>
      </div>
    </div>
  );
}