"use client";
import React from "react";

const Button = ({
  children,
  href,
  className = "",
  type = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type: "submit" | "primary" | "secondary";
}) => {
  const baseClasses =
    "relative overflow-hidden px-4 py-2 rounded-full border border-white/20 bg-transparent cursor-pointer transition-transform duration-200 active:scale-95 group gap-x-2 border-1 border-[rgb(20,120,100)] w-full text-center flex items-center justify-center ";

  const content = (
    <>
      {/* Background */}
      <span
        className="
          absolute inset-0 w-full
          bg-[rgb(20,120,100)]
          pointer-events-none
          transform -translate-x-full -translate-y-full
          group-hover:translate-x-0 group-hover:translate-y-0
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      />

      {/* Text - Fixed: added whitespace-nowrap to prevent text wrapping */}
      <span className="relative z-10 text-white text-sm transition-colors duration-200 flex flex-row gap-x-2 w-full whitespace-nowrap items-center justify-center text-center">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-center ${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={` text-center ${baseClasses} ${className}`}
      type={type === "submit" ? "submit" : "button"}
    >
      {content}
    </button>
  );
};

export default Button;