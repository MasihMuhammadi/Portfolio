"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import SkillCardsDesktop from "./skillShared";
// import MagicBento from "./MagicBento";

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

  const [animatedSkills, setAnimatedSkills] = useState(skills);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 2000);
  });
  useEffect(() => {
    const timers = animatedSkills.map(
      (skill, index) =>
        setTimeout(
          () => {
            setAnimatedSkills((prevSkills) =>
              prevSkills.map((s, i) =>
                i === index ? { ...s, initialHeight: s.targetHeight } : s,
              ),
            );
          },
          400 + index * 200,
        ), // Staggered delay
    );

    return () => timers.forEach((timer) => clearTimeout(timer)); // Cleanup timers
  }, []);

  return (
    <>
      <div className=" p-4 md:pr-20 overflow-x-hidden overflow-y-auto hidden-scroll">
        {/* Large screen (modern cards) */}

        <div className="">
          <SkillCardsDesktop />
        </div>
      </div>
    </>
  );
};

export default MySkills;
