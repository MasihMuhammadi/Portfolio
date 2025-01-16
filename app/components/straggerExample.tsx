"use client"; // Required for client-side rendering in Next.js

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const StaggerExample = () => {
  const lettersRef: any = useRef<any>([]); // Refs for individual letters

  const name = "Masihullah Muhammadi"; // Name to animate

  useEffect(() => {
    // Stagger animation for letters
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.2, // Adds a delay of 0.2s between animations
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="text-3xl font-bold text-yellow-500 translate-y-5 ">
      {name.split("").map((char, index) => (
        <span
          key={index}
          ref={(el: any) => (lettersRef.current[index] = el)}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char} {/* Keeps spaces intact */}
        </span>
      ))}
    </div>
  );
};

export default StaggerExample;
