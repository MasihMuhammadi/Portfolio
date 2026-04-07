"use client";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(() => import("./components/landingPage"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-gray-100" />,
});

import { useState } from "react";
import LandingPage from "./components/landingPage";
import Footer from "./components/footer";
import LaserFlow from "./components/LaserAnimation";

export default function Home() {
  return (
    <div className={`overflow-hidden  py-0 my-0 `}>
      <LandingPage />
      {/* <LaserFlow /> */}
      {/* <div className=" overflow-x-hidden py-10">
        <Footer />
      </div> */}
    </div>
  );
}
