import React, { useEffect, useState } from "react";

const Magnifier = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    const searchInterval = setInterval(() => {
      setIsZoomed((prev) => !prev);
      setIsSearching(false);
    }, 4000);

    return () => clearInterval(searchInterval);
  }, []);

  return (
    <div
      className={`relative inline-block cursor-pointer overflow-hidden  z-[10000]
        ${isZoomed ? "w-[150px] h-[150px]" : "w-[50px] h-[50px]"} 
        transition-all duration-300 ease-in-out`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 m-auto w-full h-full text-gray-700 ${
          isSearching && !isZoomed ? "animate-search" : ""
        }`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 19l-5.2-5.2c1.1-1.4 1.8-3.1 1.8-5 0-4.4-3.6-8-8-8S2 4.6 2 9s3.6 8 8 8c1.9 0 3.6-0.7 5-1.8L19 21l2-2zm-12 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
      </svg>
      {/* Zoomed content */}
      <div
        className={`absolute inset-0 flex items-center justify-center 
          transition-opacity duration-300 ease-in-out ${
            isZoomed ? "opacity-100 scale-125" : "opacity-0 scale-100"
          }`}
      >
        <p className="text-gray-700 font-semibold text-lg">Zoomed Content</p>
      </div>
    </div>
  );
};

export default Magnifier;
