'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useDarkMode } from '@/app/components/darkMode';
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Button } from '@nextui-org/button';

// Ensure dynamic components render correctly in Next.js hydration
const DynamicTypography = dynamic(() => import('@material-tailwind/react').then((mod) => mod.Typography), { ssr: false });

function NavList({ menuItems, darkMode, toggleDarkMode, setIsMenuOpen }: { 
  menuItems: string[], 
  darkMode: boolean,
  toggleDarkMode: () => void,
  setIsMenuOpen?: (open: boolean) => void 
}) {
  return (
    <ul className="my-1 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3 w-full justify-between">
      {menuItems.map((item) => (
        <li key={item} className="p-1">
          <Link 
            href={`/#${item.toLowerCase()}`}
            className="bg-gray-200 h-[60px] w-[145px] sm:h-[70px] sm:w-[165px] md:h-[80px] md:w-[185px] lg:h-[100px] lg:w-[215px] text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-light flex items-center justify-center transform hover:scale-105 rounded-lg text-black transition-all duration-300 ease-in-out shadow-lg"
            onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            style={{
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 0 10px rgba(255, 255, 255, 0.6), 
                0 0 20px rgba(255, 255, 255, 0.5), 
                0 0 30px rgba(255, 255, 255, 0.4),
                inset 0 0 10px rgba(255, 255, 255, 0.3),
                inset 0 0 20px rgba(255, 255, 255, 0.2)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
          >
            {item}
          </Link>
        </li>
      ))}
      <li>
        <Button
          onPress={toggleDarkMode}
          className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[100px] lg:h-[100px] lg:w-90px] rounded-full bg-gray-200 text-black flex items-center justify-center transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
          style={{
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `
              0 0 10px rgba(255, 255, 255, 0.6), 
              0 0 20px rgba(255, 255, 255, 0.5), 
              0 0 30px rgba(255, 255, 255, 0.4),
              inset 0 0 10px rgba(255, 255, 255, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.2)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
          }}
        >
          {darkMode ? <SunIcon className="h-8 w-8" /> : <MoonIcon className="h-8 w-8" />}
        </Button>
      </li>
    </ul>
  );
}

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openNav, setOpenNav] = useState(false);

  // Ensure the menu closes on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      className="fixed top-0 left-0 w-full max-w-full h-[60px] sm:h-[10px] md:h-[60px] lg:h-[160px] bg-gray-300 z-[9999] !transform-none px-0 rounded-none border-none lg:pb-2"
      title="Your Navbar Title"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="w-full flex items-center justify-between px-8 sm:px-4 py-2">
        <DynamicTypography
          as="h1"
          variant="h6"
          className="text-4xl sm:text-5xl font-light text-black mr-4 sm:mr-14"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          color="inherit"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Sara Osborn
        </DynamicTypography>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavList menuItems={['Home', 'About', 'Projects', 'Blog', 'Contact']} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          className="ml-auto h-16 w-16 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {openNav ? <XMarkIcon className="h-14 w-14" strokeWidth={2} /> : <Bars3Icon className="h-14 w-14" strokeWidth={2} />}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={openNav}>
        <NavList menuItems={['Home', 'About', 'Projects', 'Blog', 'Contact']} darkMode={darkMode} toggleDarkMode={toggleDarkMode} setIsMenuOpen={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}

export default Header;