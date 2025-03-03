"use client";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LampPullCord from "./lampanimation";

const Footer = () => {
  return (
    <div className="sm:px-3">
      <div className="border-t-[0.1px] border-t-white w-full   flex sm:flex-row-reverse flex-col items-center pt-5 justify-around gap-x-20 gap-y-5 overflow-x-hidden">
        <div>
          <LampPullCord />
        </div>
        <div className="flex flex-row gap-x-6 sm:gap-x-10 text-[10px] sm:text-sm">
          <Link href="/">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Project</Link>
          <Link href="/experiences">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex  gap-x-7">
          <div className="flex gap-x-2 text-[12px] min-w-[200px]">
            <b>&copy;</b>
            <p>Masihullah Muhammadi</p>
          </div>
          <div className="flex gap-x-6">
            <a href="https://github.com/MasihMuhammadi" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {/* <a
              href="https://wa.me/+93749102015?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20portfolio."
              target="_blank"
            >
              <FaWhatsapp />
            </a> */}
            <a href="https://x.com/MasihMuhammadi" target="_blank">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
