"use client";
import Image from "next/image";
import myPhoto from "../../public/myImage.png";
import { useEffect, useState } from "react";
import Contra from "./contra";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import StaggerExample from "./straggerExample";
import gsap from "gsap";

const LandingPage = () => {
  const [toggleIt, setToggleIt] = useState(false);
  const jobTitles = [
    "Front-end Web Developer",
    "Back-end Web Developer",
    "UI/UX Designer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textRef = useRef(null);
  const nameRef = useRef(null);
  const isInView = useInView(textRef, { once: false });
  const isNameView = useInView(nameRef, { once: false });

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between px-6 md:px-16 py-10 relative">
        <div className="mt-24">
          <h1 className="font-bold text-4xl">Hi, My Name is </h1>
          <span className=" ">
            <StaggerExample />
          </span>
          <p className="font-bold text-2xl mt-7">
            a{" "}
            <span className="allyellow inline-block text-xl">
              {displayedText}
              <span className="border-r-4 border-yellow-500 ml-1 animate-blink"></span>
            </span>
          </p>
          <div className="flex gap-x-4">
            <button className="mt-24 allYellow p-2 scale-100 rounded-lg hover:scale-95">
              <a
                href={"/myCv.pdf"}
                download
                className="mt-24 allYellow text-black p-2 rounded-lg active:scale-95"
              >
                Download CV
              </a>
            </button>
            <motion.button
              className="flex flex-col relative z-[100000]"
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
            >
              <a
                draggable="false"
                className="mt-24 mx-2 blackBtns p-2 rounded-lg active:scale-95 w-auto h-auto"
                href="https://calendly.com/masihcode"
                target="_blank"
              >
                Book a Call
              </a>
              <motion.div
                className="w-auto h-auto z-[-1000]"
                animate={{
                  scale: [1, 1.06, 1],
                  translateX: [1, 1.7, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="absolute -bottom-32 -left-10  rotate-90">
                  <svg
                    width="200"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10,50 C50,10, 100,90, 150,50 C200,10, 250,90, 300"
                      stroke="currentColor"
                      fill="transparent"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>

        <div className="relative ">
          <div className="hidden sm:block">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="w-1 h-[400px] right-40  rotate-45 -z-[1000] bg-yellow-500 absolute"
                style={{ top: `calc(70px - ${index * 4}%)` }}
              ></div>
            ))}
          </div>

          <Image
            draggable={false}
            className="select-none -mt-16"
            src={myPhoto}
            alt="my photo"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <motion.div
          className="w-auto h-auto"
          animate={{
            translateY: [1, 10, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FaArrowDown className="opacity-30 font-extralight text-[12px]" />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center justify-between"
        initial={{ opacity: 0, y: 50 }} // Starts invisible and below the viewport
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Triggers animation when in view
        transition={{ duration: 1 }} // Smooth transition
      >
        <h1 className=" select-none text-[90px] text-transparent font-[650] text-center outline-text">
          People call me
        </h1>
      </motion.div>

      <div ref={textRef}></div>
      <motion.div
        className="flex flex-col items-center justify-between"
        initial={{ opacity: 0, y: 50 }} // Starts invisible and below the viewport
        animate={isNameView ? { opacity: 1, y: 0 } : {}} // Triggers animation when in view
        transition={{ duration: 1 }} // Smooth transition
      >
        <h1 className="select-none text-[70px] text-transparent font-[650] text-center outline-text">
          Samurai Coder
        </h1>

        <motion.a
          href="http://contra.com/samuraicoder"
          target="_blank"
          className="mt-4 p-2 rounded-lg active:scale-95 flex flex-row blackBtns items-center gap-x-2 h-8 w-40"
          whileHover={{ scale: 1.08 }}
        >
          <Contra />
          Hire Samurai
        </motion.a>
        <div ref={nameRef}></div>
      </motion.div>
    </>
  );
};

export default LandingPage;
