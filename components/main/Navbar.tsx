"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* Logo and name */}
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
            onClick={closeMenu}
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin md:w-[70px] md:h-[70px]"
              priority
            />
            <span className="font-bold ml-[10px] hidden sm:block text-gray-300 text-sm md:text-base">
              ANSH SINGH
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <nav className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer hover:text-white transition-colors">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer hover:text-white transition-colors">
                Projects
              </a>
            </nav>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex flex-row gap-3 lg:gap-5">
            {mounted && Socials.map((social) => (
              <a
                href={social.sociallink}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="lg:w-[24px] lg:h-[24px]"
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md border-t border-[#7042f861] z-40 md:hidden transition-transform duration-300 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about-me" 
              className="text-gray-200 hover:text-white transition-colors text-lg font-medium border-b border-[#7042f861] pb-3"
              onClick={closeMenu}
            >
              About me
            </a>
            <a 
              href="#skills" 
              className="text-gray-200 hover:text-white transition-colors text-lg font-medium border-b border-[#7042f861] pb-3"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-200 hover:text-white transition-colors text-lg font-medium border-b border-[#7042f861] pb-3"
              onClick={closeMenu}
            >
              Projects
            </a>
          </nav>

          {/* Mobile Social Links */}
          <div className="flex flex-row gap-6 justify-center pt-4">
            {mounted && Socials.map((social) => (
              <a
                href={social.sociallink}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                onClick={closeMenu}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;