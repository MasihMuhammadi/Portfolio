"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import {
  FaArrowDown,
  FaArrowRightArrowLeft,
  FaCalendarCheck,
  FaFileArrowDown,
} from "react-icons/fa6";
import MyBio from "./myBio";
import Iu from "@/public/iu.png";
import craxy from "@/public/craxy.png";
import aseel from "@/public/aseel.png";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Button from "./button";
import TechMarquee from "./techmarque";
// import craxy from "@/public/craxy.png";
// import aseel from '@/public/aseel'

const LandingPage = () => {
  const jobTitles = [
    "Front-end Web Developer",
    "Back-end Web Developer",
    "UI/UX Designer",
  ];
  const vital_stats = [
    { "Years of experience": "3+ " },
    { " Projects": "10+" },
    { "Global Market": "3" },
    // { "Full-stack ": "Front-end -> Backend -> Database" },
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const projectSimple = [
    {
      name: "Industry Umbrella",
      description: "Full-stack e-commerce platform",
      techs: [
        "Next.js",
        "Typescript",
        "TailwindCss",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      live: "https://iu-fast.vercel.app",
      github: "https://github.com/MasihMuhmmadi",
      image: Iu,
    },
    {
      name: "AseelApp Do-good Platform",
      description: "Humanterian Platform",
      techs: ["Next.js", "Typescript", "TailwindCss", "MongoDB", "Cloudinary"],
      live: "https://aseelapp.com/do-good",
      github: "https://github.com/MasihMuhmmadi",
      image: aseel,
    },
    {
      name: "craxy.ai",
      description: "AI-Powered Proposal Writing platform",
      techs: ["Next.js", "Typescript", "TailwindCss", "MongoDB", "Cloudinary"],
      live: "https://craxy.ai",
      github: "https://github.com/MasihMuhmmadi/genius-proposal",
      image: craxy,
    },
  ];

  const experiences = [
    {
      company: "Craxy.ai",
      positon: "Front-end Developer",
      details:
        "Built production-ready features using react, Next.Js, and typescript.Developed a rich-text editor and proposal generation workflow for ai-powered RFP automation.",
      from: "September 2025",
      to: "April 2025",
      techs: ["Next.Js", "Typescript", "TailwindCss", "Zustand", "Notion"],
    },
    {
      company: "Industry Umbrealla",
      positon: "Full-stack Web Developer",
      from: " Februery 2025",
      to: "October 2024",
      details:
        "Implemented JWT authentication, admin dashboard, product management, filtering, APIs, Cloudinary, and Stripe integration.",
      techs: [
        "Next.Js",
        "Typescript",
        "TailwindCss",
        "Node.Js",
        "MongoDB",
        "Express",
        "AWS",
        "Cloudinary",
        "Cloudinary",
        "Cloudinary",
        "Cloudinary",
      ],
    },
    {
      company: "AseelApp",
      details:
        "Developed user-facing features for Aseel V2, a humanitarian platform, using Next.js, TypeScript, and Tailwind CSS. Developed and improved the Ferni Admin Dashboard by building reusable UI components and integrating REST APIs.",
      positon: "Front-end Developer",
      from: "December 2023 ",
      to: "August 2024",
      techs: ["Next.Js", "Typescript", "TailwindCss", "Medusa"],
    },
  ];

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

  // const containerRef = useRef(null);

  // // const containerRef = useRef(null);
  // const isPeopleInView = useInView(peopleRef, { once: false });
  // const isSamuraiInView = useInView(samuraiRef, { once: false });

  return (
    <>
      <div className="flex flex-col-reverse gap-x-4 gap-y-10  md:flex-row justify-center items-start lg:items-center sm:justify-between sm:items-center px-4 md:px-8 py-10 relative">
        <MyBio />

        <div className="relative text-center ">
          <div className="absolute sm:top-8 sm:right-16  w-80 h-80 rounded-full bg-gradient-to-r from-transparent to-primary z-0" />
          <img
            draggable={false}
            className="relative z-10 select-none rounded-lg"
            src="/image.png"
            alt="my photo"
            width={450}
            height={450}
          />
        </div>
      </div>

      <div></div>

      <div className="flex justify-center items-start sm:items-center">
        <motion.div
          className="w-auto h-auto"
          animate={{ translateY: [1, 10, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <FaArrowDown className="opacity-30 font-extralight text-[12px]" />
        </motion.div>
      </div>

      {/* vital stats */}
      <div className="px-5 mt-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-galsod  ">Me at One Word</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-6 mt-4">
          {vital_stats.map((v, i) => {
            return (
              <div
                className="border rounded-lg p-3  w-full bg-gradient-to-r from-[rgba(20,120,100,0.07)] to-transparent "
                key={i}
              >
                {Object.entries(v)?.map((each, idx) => (
                  <div key={idx}>
                    <h1 className="font-galsod text-center text-[60px]">
                      {each[1]}
                    </h1>
                    <span className="">{each[0]}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <TechMarquee />
      </div>

      {/* selectd work */}
      <div className="px-5 my-24">
        <div className="flex justify-between">
          <h1 className="text-4xl font-galsod ">SELECTED WORKS</h1>
          {/* <Link
            href="/projects"
            className="text-primary flex items-center justify-center gap-1 hover:scale-90 transition-all duration-200"
          >
            View All Projects
            <FaArrowRight />
          </Link> */}
        </div>
        <div className="grid grid-rows-3 gap-10 mt-4">
          {projectSimple.map((p, i) => {
            return (
              <div key={i} className="">
                <div
                  className={`${i % 2 === 0 ? "flex flex-row justify-arround gap-x-6" : "flex flex-row-reverse gap-x-6"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`w-3/4 gap-6 ${i % 2 === 0 ? "flex  flex-col sm:flex-row " : "flex flex-col-reverse sm:flex-row"}`}
                  >
                    <Image
                      src={p.image}
                      width={500}
                      height={500}
                      className="sm:w-full w-[300px] h-[450px] sm:h-full rounded-lg object-cover object-center border-[0.25px] border-primary"
                      alt={`${p.name} project`}
                    />
                    <div className="mt-4">
                      <p className="font-galsod text-xl">{p.name}</p>
                      <p>{p.description}</p>
                      {/* <div className="flex flex-wrap gap-1 text-xs">
                        {p.techs.map((t, i) => (
                          <div key={i}>{t}</div>
                        ))}
                      </div> */}
                    </div>
                  </motion.div>

                  {/* <div className="flex  justify-between mt-4">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer "
                      className="flex justify-center items-center gap-0.5"
                    >
                      <FaGithub /> <span className="text-sm">Github</span>
                    </a>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* experiences */}

      {/* experiences */}
      <div className="px-5 mt-24">
        <h1 className="text-3xl font-galsod">EXPERIENCES</h1>

        <div className="mt-6">
          {experiences.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_3fr] gap-6 py-8 border-b border-primary/30"
            >
              {/* DATE */}
              <div className="font-galsod text-sm md:text-base">
                <span className="border-b-primary pb-1.5 border-b-[0.25px]">
                  {e.from}
                </span>
                <span className="mx-2 text-primary">→</span>
                <span>{e.to}</span>
              </div>

              {/* ROLE / COMPANY */}
              <div className="flex flex-col w-full gap-y-2">
                <p className="font-galsod text-lg">{e.positon}</p>
                <p className="text-primary">{e.company}</p>
                <p className="text-sm leading-6 opacity-80 w-2/3">
                  {e.details}
                </p>
                <div className="flex flex-row flex-wrap gap-x-2">
                  {e.techs.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-b from-[rgba(20,120,100,0.2)]  to-transparent p-1 text-primary text-sm rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* DETAILS */}
            </div>
          ))}
        </div>
      </div>

      {/* about me */}
      <div className="px-5  py-2 rounded-xl text-center mt-24 bg-gradient-to-r from-[rgba(20,120,100,0.06)] to-transparent">
        {/* <h1 className="text-3xl font-galsod ">ABOUT ME</h1> */}
        <p className=" text-center sm:px-32 py-24 sm:py-10 text-xl sm:text-3xl first-line:leading-tight capitalize ">
          I build things that have a reason to exist. I enjoy obsessing over
          tiny UI details, diving into backend problems, and turning messy ideas
          into products people can actually use. Sometimes I know exactly why
          something works, other times, I just make sure nobody touches it.
        </p>
        <p className="mt-2 c text-primary text-center   pb-1">
          Masih Muhammadi
        </p>
      </div>

      {/* get in touch */}
      {/* <div className="px-5 py-2 rounded-xl mt-5 bg bg-gradient-to-l from-[rgba(20,120,100,0.03)] to-transparent">
        <h1 className="text-3xl font-galsod ">LET'S WORK TOGETHER</h1>
        <p className="w-2/5">
          I'm currently open to new oppurtunities and interesting projects.
        </p>
        <Button className="rounded-md" type="primary">
          Get in Touch
        </Button>
      </div> */}

      {/* <motion.div
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
      </motion.div> */}
    </>
  );
};

export default LandingPage;
