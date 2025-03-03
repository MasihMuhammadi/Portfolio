import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Cookies from "js-cookie";

const LampPullCord = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check theme only on client-side after mount
  useEffect(() => {
    // Get saved theme from cookies
    const savedTheme = Cookies.get("isDarkMode") === "true";
    setIsDarkMode(savedTheme); // Set state to saved theme

    // Set CSS variables for initial theme
    const root = document.documentElement;
    if (savedTheme) {
      root.style.setProperty("--background", "#e6e4e4");
      root.style.setProperty("--foreground", "#010125");
      root.style.setProperty("--thirnary", "#000");
      root.style.setProperty("--shadow", "#0f0f0f");
      root.style.setProperty("--blackAndWhiteBtn", "#0f0f0f");
      root.style.setProperty("--border", "#000");
    } else {
      root.style.setProperty("--background", "#0f0f0f");
      root.style.setProperty("--foreground", "#ededed");
      root.style.setProperty("--thirnary", "#f0eee9");
      root.style.setProperty("--shadow", "#f0eee9");
      root.style.setProperty("--blackAndWhiteBtn", "#f0eee9");
      root.style.setProperty("--border", "#000");
    }
  }, []); // Only run once after mount

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme: any = !prev;

      // Save the new theme in cookies
      Cookies.set("isDarkMode", newTheme, { expires: 365 });

      // Set CSS variables when theme changes
      const root = document.documentElement;
      if (newTheme) {
        root.style.setProperty("--background", "#e6e4e4");
        root.style.setProperty("--foreground", "#010125");
        root.style.setProperty("--thirnary", "#000");
        root.style.setProperty("--shadow", "#0f0f0f");
        root.style.setProperty("--blackAndWhiteBtn", "#0f0f0f");
        root.style.setProperty("--border", "#000");
      } else {
        root.style.setProperty("--background", "#0f0f0f");
        root.style.setProperty("--foreground", "#ededed");
        root.style.setProperty("--thirnary", "#f0eee9");
        root.style.setProperty("--shadow", "#f0eee9");
        root.style.setProperty("--blackAndWhiteBtn", "#f0eee9");
        root.style.setProperty("--border", "#000");
      }

      return newTheme; // Return updated theme state
    });
  };

  return (
    <button
      className="relative w-10 h-10 text-center allYellow rounded-full flex items-center justify-center p-1 transition-colors"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <span className="absolute text-white">
          <FaSun size={18} />
        </span>
      ) : (
        <span className="text-white">
          <FaMoon size={18} />
        </span>
      )}
    </button>
  );
};

export default LampPullCord;
