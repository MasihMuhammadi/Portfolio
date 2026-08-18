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
import Button from "./button";
import Image from "next/image";
// import LampPullCord from "./lampanimation";
import chessImage from "@/public/newchess.png";

const Footer = () => {
  return (
    <div className="sm:px-3 px-7 h-14 bottom-0 w-[100%] bg-[#0f0f0f] my-3">
      <div className=" mt-24">
        {/* <div>
          <LampPullCord />
        </div> */}
        {/* <div className="flex flex-row gap-x-6 sm:gap-x-10 text-[10px] sm:text-sm">
          <Link href="/">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Project</Link>
          <Link href="/experiences">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div> */}
        <div className="">
          <div className="flex flex-col  gap-x-2 text-[12px] min-w-[200px] text-center">
            <div className="flex  flex-col gap-6 items-center justify-center">
              <h1 className="font-galsod text-4xl">
                Do You Have something for me?
              </h1>
              <p className="text-xl">
                Got a project in mind? Let’s build something useful, not just
                another website.
              </p>{" "}
              <Image
                src={chessImage}
                width={250}
                height={250}
                alt="new"
                className="text-center rounded-lg"
              />
              <Button type="primary" className="rounded-md">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex flex-row justify-between mt-10">
              <div className="flex flex-row gap-x-1">
                <b>&copy;</b>
                <p className="text-xs sm:text-sm">
                  All Right Reserved. Masihullah Muhammadi{" "}
                  {new Date().getFullYear()}{" "}
                </p>
              </div>
              <div className="flex gap-x-3 sm:gap-x-4">
                <a href="https://github.com/MasihMuhammadi" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/93749102015" target="_blank">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
