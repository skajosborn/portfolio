'use client';

import React from 'react';
// import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function NavList({ menuItems, darkMode, toggleDarkMode, setIsMenuOpen }: { 
  menuItems: string[], 
  darkMode: boolean,
  toggleDarkMode: () => void,
  setIsMenuOpen?: (open: boolean) => void 
}) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-2 lg:flex-row lg:items-center lg:gap-6 w-full justify-between">
      {menuItems.map((item) => (
        <Typography
          as="li"
          key={item}
          variant="small"
          color="blue-gray"
          className="p-1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Link 
            href={`/#${item.toLowerCase()}`}
            className="bg-gray-200 h-[60px] w-[145px] sm:h-[70px] sm:w-[165px] md:h-[80px] md:w-[185px] lg:h-[90px] lg:w-[205px] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-light flex items-center justify-center transform hover:scale-105 rounded-lg text-black"
            style={{
              transition: 'all 0.3s ease',
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.9), 0 0 35px rgba(255,255,255,0.7), 3px 3px 8px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
            }}
            onClick={() => {
              if (setIsMenuOpen) {
                setIsMenuOpen(false);
              }
            }}
          >
            {item}
          </Link>
        </Typography>
      ))}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Button
          onClick={toggleDarkMode}
          className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px] rounded-full bg-gray-200 flex items-center justify-center transform hover:scale-105"
          style={{
            transition: 'all 0.3s ease',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.9), 0 0 35px rgba(255,255,255,0.7), 3px 3px 8px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
          }}
        >
          {darkMode ? <SunIcon className="h-8 w-8" /> : <MoonIcon className="h-8 w-8" />}
        </Button>
      </Typography>
    </ul>
  );
}

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openNav, setOpenNav] = React.useState(false);
  const menuItems = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar 
      className="fixed top-0 left-0 w-full max-w-full pt-4 pb-12 h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] bg-gray-300 z-[9999] !transform-none px-0 rounded-none border-none"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="w-full px-8 sm:px-4 sm:py-12">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="h1"
            variant="h6"
            className="text-4xl sm:text-5xl font-inter font-light text-black mr-4 sm:mr-14 pl-4 sm:pl-8 md:pl-12 lg:pl-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Sara Osborn
          </Typography>
          <div className="hidden lg:block pr-4 sm:pr-8 md:pr-12 lg:pr-16">
            <NavList menuItems={menuItems} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-16 w-16 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {openNav ? (
              <XMarkIcon className="h-14 w-14" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-14 w-14" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList 
            menuItems={menuItems} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            setIsMenuOpen={setOpenNav}
          />
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header;