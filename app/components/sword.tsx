import React from "react";

const KnightSword: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen rotate-180">
      <div className="sword knight animate-attack w-[5rem] mx-20 relative">
        {/* Blade */}
        <div className="blade h-[20rem] w-[1rem] rounded-tl-[50%] rounded-tr-[50%] bg-[hsl(0,0%,81%)] shadow-inner shadow-[inset_-0.5rem_0_0_0_rgba(110,110,110,0.5)] mx-auto relative z-10"></div>

        {/* Crossguard (extends on both sides of blade) */}
        <div className="absolute top-[20rem/3] left-1/2 -translate-x-1/2 w-[4rem] h-[0.45rem] bg-[hsl(53,7%,41%)] rounded-[33%]"></div>

        {/* Grip */}
        <div className="grip h-[4rem] w-[0.7rem] bg-[hsl(53,7%,41%)] rounded-[150%] rounded-tl-0 rounded-tr-0 mx-auto relative z-20"></div>

        {/* Knob */}
        <div className="knob h-[1rem] w-[1rem] bg-[hsl(0,0%,80%)] relative top-[-0.5rem] rounded-full mx-auto z-30"></div>
      </div>
    </div>
  );
};

export default KnightSword;
