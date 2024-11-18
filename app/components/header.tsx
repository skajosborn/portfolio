'use client';

import React from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from '@nextui-org/button';
import Link from 'next/link';

function NavList({ menuItems, darkMode, toggleDarkMode, setIsMenuOpen }: { 
  menuItems: string[], 
  darkMode: boolean,
  toggleDarkMode: () => void,
  setIsMenuOpen?: (open: boolean) => void 
}) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
            className="bg-gray-200 h-[60px] w-[145px] sm:h-[70px] sm:w-[165px] md:h-[80px] md:w-[185px] lg:h-[90px] lg:w-[205px] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-light flex items-center justify-center transform hover:scale-105 rounded-md text-black"
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
          onClick={() => {
            toggleDarkMode();
            if (setIsMenuOpen) {
              setIsMenuOpen(false);
            }
          }}
          className="p-5 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-0"
          style={{
            boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.6)'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7), 3px 3px 8px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3), 3px 3px 8px rgba(0,0,0,0.6)';
          }}
        >
          {darkMode ? (
            <Image src="/sun.png" alt="Light mode" width={50} height={50} className="opacity-80" />
          ) : (
            <Image src="/moon.png" alt="Dark mode" width={50} height={50} className="opacity-80" />
          )}
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
      className="fixed top-0 left-0 w-full pt-4 pb-12 h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] bg-gray-300 shadow-md z-50"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="h1"
          variant="h6"
          className="text-4xl sm:text-5xl font-inter font-light text-black mr-4 sm:mr-14"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Sara Osborn
        </Typography>
        <div className="hidden lg:block">
          <NavList menuItems={menuItems} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
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
    </Navbar>
  );
}

export default Header;