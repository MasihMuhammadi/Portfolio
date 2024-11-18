"use client";

import { useEffect, useState } from "react";

const ScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = Math.min(scrollY, window.innerHeight);

  return (
    <div className="h-[300vh] bg-gray-200 relative overflow-hidden">
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="w-12 h-32 bg-gray-400 rounded-lg shadow-lg shadow-black transition-transform duration-100"
          style={{
            transform: `translateY(-${translateY}px)`,
          }}
        ></div>
      </div>
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-lg text-gray-600">Scroll to see the animation!</p>
      </div>
    </div>
  );
};

export default ScrollEffect;
