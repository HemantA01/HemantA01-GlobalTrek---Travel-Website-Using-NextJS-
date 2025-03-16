"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import LogoLight from "@/assets/gt-logo-light.webp";
import LogoDark from "@/assets/gt-logo-dark.webp";

import { FaHome } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { TbLogs } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FiUser } from "react-icons/fi";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-100 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center">
          {/* Logo (Left) */}
          <Link href="/" className="block">
            <Image 
              src={isScrolled ? LogoLight : LogoDark} 
              alt="Logo" 
              width={80} 
              height={80} 
              className="transition-transform hover:scale-105"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image 
                src={isScrolled ? LogoLight : LogoDark} 
                alt="Logo" 
                width={100} 
                height={100} 
                className="transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation (Center) */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-gray-100/20 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  <FaHome size={18} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-gray-100/20 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  <LuBoxes size={18} />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-gray-100/20 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  <TbLogs size={18} />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-gray-100/20 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  <FiPhoneCall size={18} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login Button (Right) */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
            <Link
              role="button"
              className="group relative inline-flex items-center justify-center text-sm rounded-full bg-gray-900 px-6 py-2 font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:-translate-y-0.5"
              href="/signin"
            >
              Login
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                <path
                  d="M0 5h7"
                  className="transition opacity-0 group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  className="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (full screen when open) */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 z-50 flex flex-col items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="mb-8">
              <Image src={LogoDark} alt="Logo" width={120} height={120} />
            </div>
            
            <nav>
              <ul className="flex flex-col items-center space-y-6">
                <li>
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 text-white text-xl font-medium"
                    onClick={toggleMenu}
                  >
                    <FaHome size={24} />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="flex items-center gap-3 text-white text-xl font-medium"
                    onClick={toggleMenu}
                  >
                    <LuBoxes size={24} />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="flex items-center gap-3 text-white text-xl font-medium"
                    onClick={toggleMenu}
                  >
                    <TbLogs size={24} />
                    <span>Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="flex items-center gap-3 text-white text-xl font-medium"
                    onClick={toggleMenu}
                  >
                    <FiPhoneCall size={24} />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8">
              <Link
                href="/signin"
                className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-medium"
                onClick={toggleMenu}
              >
                <FiUser size={20} />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}