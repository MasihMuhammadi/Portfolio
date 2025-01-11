"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
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
      root.style.setProperty("--background", "#f0eee9");
      root.style.setProperty("--foreground", "#010125");
      root.style.setProperty("--thirnary", "#000");
      root.style.setProperty("--thirnary", "#000");
      root.style.setProperty("--shadow", "#0f0f0f");
      root.style.setProperty("--blackAndWhiteBtn", "#0f0f0f");
      root.style.setProperty("--border", "#000");
    } else {
      root.style.setProperty("--background", "#0f0f0f");
      root.style.setProperty("--foreground", "#ededed");
      root.style.setProperty("--thirnary", "#f0eee9");
      root.style.setProperty("--shadow", "#f0eee9");
      root.style.setProperty("--blackAndWhiteBtn", "#f0eee9");
      root.style.setProperty("--border", "#000");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="border-t-[0.1px] border-t-white  flex sm:flex-row-reverse flex-col items-center pt-5 justify-around gap-x-20 gap-y-5 ">
        <div>
          {/* <button
            className="relative w-10 h-10 text-center allYellow  rounded-full flex items-center justify-center p-1  transition-colors"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <span className="absolute  text-white">
                <FaSun size={18} />
              </span>
            ) : (
              <span className=" text-white">
                <FaMoon size={18} />
              </span>
            )}
          </button> */}
        </div>
        <div className="flex flex-row gap-x-10 text-sm">
          <Link href="/">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Project</Link>
          <Link href="/experiences">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex gap-x-10">
          <div className="flex gap-x-2">
            <b>&copy;</b>
            <p>Masihullah Muhammadi</p>
          </div>
          <div className="flex gap-x-7">
            <a href="https://github.com/MasihMuhammadi" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+93749102015?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20portfolio."
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
