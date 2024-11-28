"use client";

import { useState } from "react";
import LandingPage from "./components/landingPage";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={`overflow-hidden `}>
      <LandingPage />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
