"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "submit";
};

const Button = ({
  children,
  className = "",
  type = "primary",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-200 active:scale-95";

  const variants = {
    primary:
      "border border-[rgb(20,120,100)] bg-[rgb(20,120,100)] text-white shadow-[0_0_20px_rgba(20,120,100,0.18)] hover:bg-[rgb(20,120,100)]/90 hover:shadow-[0_0_25px_rgba(20,120,100,0.3)]",

    secondary:
      "border border-[rgb(20,120,100)] bg-transparent text-[rgb(20,120,100)] hover:bg-[rgb(20,120,100)]/10 hover:shadow-[0_0_20px_rgba(20,120,100,0.15)]",

    submit:
      "border border-[rgb(20,120,100)] bg-[rgb(20,120,100)] text-white shadow-[0_0_20px_rgba(20,120,100,0.18)] hover:bg-[rgb(20,120,100)]/90 hover:shadow-[0_0_25px_rgba(20,120,100,0.3)]",
  };

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`${baseClasses} ${variants[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
