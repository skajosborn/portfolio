'use client';

import React from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from '@nextui-org/button';
import Link from 'next/link';

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <Navbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 w-full pt-6 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] pb-6 bg-gray-300 shadow-md z-50"
      style={{
        minHeight: '10px',
        height: 'auto'
      }}
      maxWidth="full"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black"
        />
      </NavbarContent>

      <NavbarContent className="ml-4 sm:ml-20" justify="start">
        <NavbarBrand>
          <h1 className="text-4xl sm:text-5xl font-['Rouge Script'] text-black mr-4 sm:mr-14" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Sara Osborn
          </h1>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-3 ml-auto mr-18" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link 
              href={`/#${item.toLowerCase()}`}
              className="bg-gray-200 h-[60px] w-[145px] sm:h-[70px] sm:w-[165px] md:h-[80px] md:w-[185px] lg:h-[90px] lg:w-[205px] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md text-black"
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
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            onClick={toggleDarkMode}
            className="p-5 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-300"
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
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-gray-300 pt-20 px-4">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item} className="my-2">
            <Link
              href={`/#${item.toLowerCase()}`}
              className="w-full text-2xl text-black font-mulish py-4 px-6 bg-gray-200 hover:bg-gray-100 rounded-md transition-all duration-300 flex items-center justify-center"
              style={{
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.1), inset 1px 1px 3px rgba(255, 255, 255, 0.3)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="my-4">
          <Button
            onClick={() => {
              toggleDarkMode();
              setIsMenuOpen(false);
            }}
            className="w-full p-4 rounded-md bg-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-4"
            style={{
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.1), inset 1px 1px 3px rgba(255, 255, 255, 0.3)'
            }}
          >
            <span className="text-2xl text-black font-mulish">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
            {darkMode ? (
              <Image src="/sun.png" alt="Light mode" width={30} height={30} className="opacity-80" />
            ) : (
              <Image src="/moon.png" alt="Dark mode" width={30} height={30} className="opacity-80" />
            )}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;