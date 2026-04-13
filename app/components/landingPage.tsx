"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { FaArrowDown, FaCalendarCheck, FaFileArrowDown } from "react-icons/fa6";
// import myPhoto from "../../public/myImage.png";
import samuraiPhoto from "../../public/samuraiPhoto.png";
// import myNewPhoto from "@/public/laptop wave.png";
import VariableProximity from "./VariableProximity";
import Contra from "./contra";
import { primaryColor } from "@/app/theme";
import SamuraiSword from "./sword";
import Button from "./button";
import Usage from "./myBio";
import MyBio from "./myBio";
// import VariableProximity from './VariableProximity';
// import { useRef } from 'react';

/** Swap for your Calendly or other scheduling URL if you use one. */
const BOOK_DEMO_URL = "/contact";
const RESUME_FILE = "/resume.pdf";

const LandingPage = () => {
  // Typing effect for job titles
  const jobTitles = [
    "Front-end Web Developer",
    "Back-end Web Developer",
    "UI/UX Designer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      const currentText = jobTitles[jobIndex];
      if (!isDeleting && letterIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else if (isDeleting && letterIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setLetterIndex((prev) => prev - 1);
      } else if (!isDeleting && letterIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setJobIndex((prev) => (prev + 1) % jobTitles.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, jobIndex, jobTitles]);

  // Refs for in-view animations
  const peopleRef = useRef(null);
  const samuraiRef = useRef(null);
  const containerRef = useRef(null);


// const containerRef = useRef(null);
  const isPeopleInView = useInView(peopleRef, { once: false });
  const isSamuraiInView = useInView(samuraiRef, { once: false });


  return (
    <>
      {/* Main top section */}

      <div className="flex flex-col-reverse gap-x-4 gap-y-10  md:flex-row justify-center items-start lg:items-center sm:justify-between sm:items-center px-4 md:px-8 py-10 relative">
        {/* VariableProximity Name */}
        <MyBio />

        <div className="relative z-10">
          <Image
            draggable={false}
            className="select-none rounded-lg  shadow-primary -mt-16 items-center content-center text-center"
            src={samuraiPhoto}
            alt="my photo"
            width={550}
            height={550}
          />
        </div>
      </div>

      {/* Down arrow */}
      <div className="flex justify-center items-start sm:items-center">
        <motion.div
          className="w-auto h-auto"
          animate={{ translateY: [1, 10, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <FaArrowDown className="opacity-30 font-extralight text-[12px]" />
        </motion.div>
      </div>

      {/* People Call Me */}
      <motion.div
        ref={peopleRef}
        className="flex flex-col items-center justify-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isPeopleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="select-none text-center text-[90px] text-stroke-[1px] text-stroke-primary/60 text-stroke-fill-transparent">
          People call me
        </h1>
      </motion.div>

      {/* Samurai Coder + Hire Button */}
      <motion.div
        ref={samuraiRef}
        className="flex flex-col items-center justify-center mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isSamuraiInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="select-none text-[70px] text-stroke-[1px] text-stroke-primary/60 text-stroke-fill-transparent font-[650] text-center ">
          Samurai Coder
        </h1>

        {/* <motion.a
          href="http://contra.com/samuraicoder"
          target="_blank"
          className="mt-4 p-2 rounded-lg active:scale-95 flex flex-row blackBtns items-center gap-x-2 h-8 w-40"
          whileHover={{ scale: 1.08 }}
        >
          <Contra />
          Hire Samurai
        </motion.a> */}
      </motion.div>
    </>
  );
};

export default LandingPage;
