"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import Logo from "@/public/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentPath = usePathname(); // Automatically updates on route change

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const root = document.documentElement;
      if (!prev) {
        root.style.setProperty("--background", "#0f0f0f");
        root.style.setProperty("--foreground", "#ededed");
        root.style.setProperty("--primary", "#ededed");
      } else {
        root.style.setProperty("--background", "#ccc");
        root.style.setProperty("--foreground", "#171717");
        root.style.setProperty("--primary", "#0f0f0f");
      }
      return !prev;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background", "#0f0f0f");
      root.style.setProperty("--foreground", "#ededed");
      root.style.setProperty("--thirnary", "#f0eee9");
      root.style.setProperty("--shadow", "#f0eee9");
      root.style.setProperty("--blackAndWhiteBtn", "#f0eee9");
      root.style.setProperty("--border", "#f0eee9");
    } else {
      root.style.setProperty("--background", "#f0eee9");
      root.style.setProperty("--foreground", "#010125");
      root.style.setProperty("--thirnary", "#000");
      root.style.setProperty("--thirnary", "#000");
      root.style.setProperty("--shadow", "#0f0f0f");
      root.style.setProperty("--blackAndWhiteBtn", "#0f0f0f");
      root.style.setProperty("--border", "#000");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center p-6 ">
      {/* Logo or Brand */}
      <div className="text-xl font-semibold">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <button
          className="relative w-14 h-8 bg-gray-400 rounded-full flex items-center p-1 transition-colors"
          onClick={toggleTheme}
        >
          {/* Sun Icon */}
          <span className="absolute left-2 text-white">
            <FaSun size={18} />
          </span>

          {/* Moon Icon */}
          <span className="absolute right-2 text-white">
            <FaMoon size={18} />
          </span>

          {/* Toggle Ball */}
          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex mt-5">
        <ul className="flex gap-x-8 text-[15px]">
          <li
            className={`hover:border-b hover:border-b-slate-50 transition-all hover:shadow-2xl hover:shadow-white duration-100 ${
              currentPath === "/" ? "text-yellow-500 border-b-yellow-500" : ""
            }`}
          >
            <Link href="/">About Me</Link>
          </li>
          <li
            className={`hover:border-b hover:border-b-slate-50 transition-all hover:shadow-2xl hover:shadow-white duration-100 ${
              currentPath === "/skills"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }`}
          >
            <Link href="/skills">My Skills</Link>
          </li>
          <li
            className={`hover:border-b hover:border-b-slate-50 transition-all hover:shadow-2xl hover:shadow-white duration-100 ${
              currentPath === "/experiences"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }`}
          >
            <Link href="/experiences">My Experience</Link>
          </li>
          <li
            className={`hover:border-b hover:border-b-slate-50 transition-all hover:shadow-2xl hover:shadow-white duration-100 ${
              currentPath === "/projects"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }`}
          >
            <Link href="/projects">My Project</Link>
          </li>
          <li
            className={`list-none text-black bg-white rounded-md ${
              currentPath === "/contact"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }`}
          >
            <Link
              href="/contact"
              className="px-3 text-black blackBtns py-3 rounded-md"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </nav>

      {/* Burger Icon for Mobile Menu */}
      <div className="md:hidden z-[1000000]">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <FaTimes size={24} />
          ) : (
            <>
              <div className="allBlack w-6 h-1  rounded"></div>
              <div className="allBlack w-4 h-1  rounded mt-1"></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-950 text-white transform z-[100000] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-xl font-semibold">
            <Link href="/">
              <Logo />
            </Link>
          </span>
        </div>
        <nav className="flex flex-col items-center mt-10 space-y-6">
          <Link
            href="/"
            onClick={toggleMenu}
            className={
              currentPath === "/" ? "text-yellow-500 border-b-yellow-500" : ""
            }
          >
            About Me
          </Link>
          <Link
            href="/skills"
            onClick={toggleMenu}
            className={
              currentPath === "/skills"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }
          >
            My Skills
          </Link>
          <Link
            href="/experiences"
            onClick={toggleMenu}
            className={
              currentPath === "/experiences"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }
          >
            My Experience
          </Link>
          <Link
            href="/projects"
            onClick={toggleMenu}
            className={
              currentPath === "/projects"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }
          >
            My Project
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className={`bg-yellow-500 p-3 rounded-md text-black ${
              currentPath === "/contact"
                ? "text-yellow-500 border-b-yellow-500"
                : ""
            }`}
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
