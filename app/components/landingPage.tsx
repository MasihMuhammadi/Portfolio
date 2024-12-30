"use client";
import Image from "next/image";
import myPhoto from "../../public/myPhoto.png";
import { useEffect, useState } from "react";
import Magnifier from "./magnifier";
import clsx from "clsx";

const LandingPage = () => {
  const jobTitles = [
    "Front-end Web Developer",
    "Back-end Web Developer",
    "UI/UX Designer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nickName, setNickname] = useState("Masihullah Muhammadi");
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Faster speed when deleting

    const handleTyping = () => {
      const currentText = jobTitles[jobIndex];

      if (!isDeleting && letterIndex < currentText.length) {
        // Typing forward
        setDisplayedText((prev) => prev + currentText[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else if (isDeleting && letterIndex > 0) {
        // Deleting backward
        setDisplayedText((prev) => prev.slice(0, -1));
        setLetterIndex((prev) => prev - 1);
      } else if (!isDeleting && letterIndex === currentText.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && letterIndex === 0) {
        // Move to next title
        setIsDeleting(false);
        setJobIndex((prev) => (prev + 1) % jobTitles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [letterIndex, isDeleting, jobIndex]);

  useEffect(() => {
    const nick = setTimeout(() => {
      setNickname("Samurai Coder");
    }, 5000);
    return () => clearTimeout(nick);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between px-6 md:px-16 py-10 ">
        <div className="mt-24">
          <h1 className="font-bold text-4xl">
            Hi, My Name is{" "}
            <span className="text-yellow-500 translate-y-5 ">{nickName}</span>
          </h1>
          <p className="font-bold text-2xl mt-5">
            a{" "}
            <span className="allyellow inline-block">
              {displayedText}
              <span className="border-r-4 border-yellow-500 ml-1 animate-blink"></span>
            </span>
          </p>
          <button className="mt-24 allYellow p-2 scale-100 rounded-lg hover:scale-95">
            <a
              href={"/myCv.pdf"}
              download
              className="mt-24 allYellow text-black p-2 rounded-lg active:scale-95"
            >
              Download CV
            </a>
          </button>
        </div>

        <div className="relative ">
          <div className="hidden sm:block">
            <div className="w-1 h-[400px] top-20 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute "></div>
            <div className="w-1 h-[400px] top-16 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] top-12 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] top-8 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] top-4 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] top-0 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] -top-4 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
            <div className="w-1 h-[400px] -top-8 right-40 rotate-45 -z-[1000] bg-yellow-500 absolute"></div>
          </div>

          <Image src={myPhoto} alt="my photo" width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
