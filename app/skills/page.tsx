"use client";
import React, { useState, useEffect } from "react";

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
        setTimeout(() => {
          setAnimatedSkills((prevSkills) =>
            prevSkills.map((s, i) =>
              i === index ? { ...s, initialHeight: s.targetHeight } : s
            )
          );
        }, 400 + index * 200) // Staggered delay
    );

    return () => timers.forEach((timer) => clearTimeout(timer)); // Cleanup timers
  }, []);

  return (
    <>
      <div className="p-4 md:pr-20">
        {/* Large screen view */}
        <div className="hidden lg:flex justify-between rotate-90 md:rotate-0 mt-[400px] lg:mt-0">
          <div className="px-20 relative">
            <div className="h-[400px] w-1 bg-white"></div>
            <div className="w-[800px] h-1 bg-white"></div>
            <div>
              {[100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40].map(
                (level, index) => (
                  <div
                    key={index}
                    className={`levels absolute text-[10px] w-[${level}%]`}
                    style={{ top: `${5 + index * 25}px`, left: "50px" }}
                  >
                    {level}%
                  </div>
                )
              )}
            </div>
            {animatedSkills.map((skill, index) => (
              <div key={index} className="absolute">
                <div
                  className="absolute -z-[1000] w-5 transition-all duration-300 rounded bg-yellow-500"
                  style={{
                    height: skill.initialHeight,
                    left: skill.position.left,
                    top: skill.position.top,
                  }}
                ></div>
                <span
                  className="text-[12px] absolute w-[120px]"
                  style={{
                    left: `calc(${skill.position.left} - 20px)`,
                    top: `calc(${skill.position.top} + ${skill.targetHeight} + 5px)`,
                  }}
                >
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-col mt-20 mr-20 p-10 shadow-sm shadow-white ">
              <div className="relative p-6 w-64 bg-white text-black my-2 rounded">
                <div
                  className={`absolute top-0 left-0 h-12 transition-all p-3 rounded-sm duration-300 bg-yellow-500 ${
                    showAnimation ? "w-[75%] " : "w-0 "
                  }`}
                >
                  Frontend
                </div>
              </div>
              <div className="relative   p-6 w-64 bg-white text-black rounded">
                <div
                  className={`absolute top-0 left-0 h-12 transition-all p-3 rounded-sm duration-300 bg-yellow-500  ${
                    showAnimation ? "w-[50%]" : "w-0"
                  }`}
                >
                  Backend
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medium screen view */}
        <div className="hidden md:flex lg:hidden flex-wrap gap-4 mt-20">
          {animatedSkills.map((skill, index) => (
            <div key={index} className="flex items-center w-full">
              <span className="w-24 text-sm">{skill.title}</span>
              <div className="w-full bg-gray-300 rounded h-2 mx-2 relative">
                <div
                  className="bg-yellow-500 h-2 rounded transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span className="absolute right-0 top-[-18px] text-xs text-white">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Small screen view */}
        <div className="flex md:hidden flex-col gap-4 mt-10">
          {animatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2 bg-yellow-500 text-black rounded-md shadow-md transition-all duration-700 transform"
              style={{ width: `${skill.level}%` }}
            >
              <span className="text-sm font-semibold">{skill.title}</span>
              <span className="text-sm">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MySkills;
