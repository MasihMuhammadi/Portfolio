"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import Logo from "@/public/logo";
import useMenuListAnimation from "./hooks/useNavbarAnimation";
import PillNav from "./PillaNav";
import newLogo from "@/public/Group 32.svg";
import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const currentPath = usePathname(); // Automatically updates on route change

  const menuRef = useRef<HTMLDivElement>(null); // Reference for scope

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      useMenuListAnimation(menuRef, 0.5);
    }
  }, [isOpen]);

  return (
    <div className="flex sticky top-0 w-full bg-gradient-to-tr from-black/95 to-black z-[1000]  justify-between items-center py-2 px-6 border-b border-b-[rgba(20,120,100,0.4]">
      {/* Logo or Brand */}
      <div className="text-xl font-semibold">
        <Link href="/">
          <Logo />
          {/* <Image
            src={newLogo}
            width={50}
            height={50}
            alt="My Photo"
            className="rounded-full text-blue-500"
          /> */}
        </Link>
      </div>

      {/* Desktop Menu */}

      <nav className="hidden md:flex items-center mt-5 ">
        <ul className="flex flex-row gap-x-6">
          <li>
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                currentPath === "/"
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                currentPath === "/about"
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className={`transition-colors duration-200 ${
                currentPath.startsWith("/projects")
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                currentPath === "/contact"
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link target="_blank" href="https://www.github.com/MasihMuhammadi">
        <Button className="rounded-lg" type="secondary">
          Everything
        </Button>
      </Link>
      {/* </nav> */}

      {/* Burger Icon for Mobile Menu */}
      <div className="md:hidden z-[1000000] ">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <FaTimes size={24} color="white" />
          ) : (
            <>
              <div className="bg-primary w-6 h-1 rounded"></div>
              <div className="bg-primary w-4 h-1 rounded mt-1"></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform z-[100000] ${
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
        <nav
          className="flex flex-col items-center mt-10 space-y-6"
          ref={menuRef}
        >
          <Link
            href="/"
            onClick={toggleMenu}
            id="menu-list-item"
            className={
              currentPath === "/" ? "text-primary border-b-yellow-500" : ""
            }
          >
            About Me
          </Link>
          <Link
            href="/skills"
            onClick={toggleMenu}
            id="menu-list-item"
            className={
              currentPath === "/skills"
                ? "text-primary border-b-primary-500"
                : ""
            }
          >
            My Skills
          </Link>
          <Link
            href="/experiences"
            onClick={toggleMenu}
            id="menu-list-item"
            className={
              currentPath === "/experiences"
                ? "text-primary border-b-primary-500"
                : ""
            }
          >
            My Experience
          </Link>
          <Link
            href="/projects"
            onClick={toggleMenu}
            id="menu-list-item"
            className={
              currentPath === "/projects"
                ? "text-primary border-b-primary-500"
                : ""
            }
          >
            My Project
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            id="menu-list-item"
            className={`bg-primary p-3 rounded-md text-black ${
              currentPath === "/contact" ? " border-b-primary" : ""
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
