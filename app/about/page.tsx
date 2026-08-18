"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import SkillCardsDesktop from "./skillShared";
import Image from "next/image";

import primaryImage from "@/public/primaryImage.png";
import Button from "../components/button";

const MySkills = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const skills = [
    {
      title: "HTML & CSS",
      initialHeight: "0px",
      targetHeight: "380px",
      level: 95,
      position: { left: "100px", top: "-380px" },
    },
    {
      title: "TailwindCSS",
      initialHeight: "0px",
      targetHeight: "335px",
      level: 90,
      position: { left: "200px", top: "-335px" },
    },
    {
      title: "JavaScript",
      initialHeight: "0px",
      targetHeight: "345px",
      level: 95,
      position: { left: "300px", top: "-345px" },
    },
    {
      title: "TypeScript",
      initialHeight: "0px",
      targetHeight: "360px",
      level: 95,
      position: { left: "400px", top: "-360px" },
    },
    {
      title: "Next.js",
      initialHeight: "0px",
      targetHeight: "320px",
      level: 85,
      position: { left: "500px", top: "-320px" },
    },
    {
      title: "Node.js",
      initialHeight: "0px",
      targetHeight: "290px",
      level: 80,
      position: { left: "600px", top: "-292px" },
    },
    {
      title: "MongoDB & MySQL",
      initialHeight: "0px",
      targetHeight: "260px",
      level: 70,
      position: { left: "700px", top: "-262px" },
    },
    {
      title: "UI/UX Figma",
      initialHeight: "0px",
      targetHeight: "290px",
      level: 80,
      position: { left: "820px", top: "-292px" },
    },
  ];

  return (
    <>
      <div className=" p-4 ">
        <div className="flex flex-col sm:flex-row gap-12 ">
          <Image
            src={primaryImage}
            width={500}
            height={800}
            alt=""
            className="h-full w-full rounded sm:w-[750px] sm:h-[900px] "
          />
          <div className="sm:w-1/3">
            <p className="text-5xl font-galsod my-4">
              I Build, Break, Fix, Repeat
            </p>
            <p>
              I’m Masihullah, a software developer who enjoys turning ideas,
              messy requirements, and half-formed concepts into web experiences
              that actually work. I work mainly with React, Next.js, TypeScript,
              and Node.js, but I care less about collecting technologies and
              more about understanding the problem behind them. From production
              applications and dashboards to e-commerce platforms and AI-powered
              products, I like being involved beyond just writing the UI.
            </p>
            <p className="my-4">
              I’m the kind of developer who will keep digging when something
              doesn’t make sense. I care about clean interfaces, maintainable
              code, responsive experiences, and the small details that make
              software feel finished. I’m currently looking for opportunities
              where I can take real ownership, work with a good team, and build
              products that are useful—not just another project that looks good
              in a portfolio.
            </p>
            <div>
              <h1 className="text-primary">Tech Skills</h1>
              <div className="flex flex-col sm:flex-row gap-16 mt-4 ">
                <ul className="list-disc list-disc-primary text-white/45">
                  <span className="text-primary font-galsod">Front-end</span>
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Javascript</li>
                </ul>
                <ul className="list-disc list-disc-primary text-white/45">
                  <span className="text-primary font-galsod">Engeering</span>
                  <li>Node.js</li>
                  <li>MongoDB / PostgreSql</li>
                  <li>Express</li>
                </ul>
              </div>
              <a
                href="/resume.pdf"
                download
                className="
    inline-flex items-center justify-center
    mt-4
    gap-2
    rounded-md
    border border-primary
    bg-transparent
    px-5 py-2.5
    text-sm
    text-primary
    transition-all duration-200
    hover:bg-primary/10
    hover:shadow-[0_0_20px_rgba(20,120,100,0.15)]
    active:scale-95
    whitespace-nowrap
  "
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
