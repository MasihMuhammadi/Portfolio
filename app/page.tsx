"use client";
import { useEffect, useState } from "react";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";
import ScrollAnimation from "./components/scrollAnimation";
import Footer from "./components/footer";
export default function Home() {
  // const [scrollY, setScrollY] = useState(0);

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const translateY = Math.min(scrollY, window.innerHeight);
  return (
    <div className=" overflow-hidden">
      {/* <div className="bg-gray-200 relative ">
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="w-12 h-32 bg-gray-400 rounded-lg shadow-lg shadow-black transition-transform duration-100"
            style={{
              transform: `translateY(-${translateY}px)`,
            }}
          ></div>
        </div>
      </div> */}
      <LandingPage />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
