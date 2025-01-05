"use client";

import { useState } from "react";
import LandingPage from "./components/landingPage";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={`overflow-hidden  py-0 my-0 `}>
      <LandingPage />
      <div className=" overflow-x-hidden py-10">
        <Footer />
      </div>
    </div>
  );
}
