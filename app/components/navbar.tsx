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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center p-6 ">
      {/* Logo or Brand */}
      <div className="text-xl font-semibold">
        <Link href="/">
          <Logo />
        </Link>
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
      <div className="md:hidden z-[1000000]  allWhite ">
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
