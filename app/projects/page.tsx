"use client";
import Image from "next/image";
import reserv from "../../public/reserv.png";
import buildResume from "../../public/buildResume.png";
import checkIn from "../../public/check-in-now.png";
import squadGame from "../../public/squadGame.png";
import Weather from "../../public/Weather.png";
import memory from "../../public/memory.png";
import { useState } from "react";
import Footer from "../components/footer";

const MyProjects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Build Resume",
      link: "https://buildResume.vercel.app",
      description:
        "A Project creating for dynamic Resumes with differnt templates ",
      image: buildResume,
    },
    {
      title: "Reserv Best",
      link: "https://reserv.vercel.app",
      description: "A Project for Booking Wedding Hotels located in Kabul City",
      image: reserv,
    },
    {
      title: "Automated Attendance",
      link: "https://check-in-now.vercel.app",
      description:
        "An automated attendace management system for all courses and schooles",
      image: checkIn,
    },
    {
      title: "Squad Game",
      link: "https://squadGame.vercel.app",
      description: "A Basic Information and Quiz Game ",
      image: squadGame,
    },
    {
      title: "Weather",
      link: "https://weather-masih.vercel.app/",
      description: "Weather App, Used APIs   ",
      image: Weather,
    },
    {
      title: "Memory Game",
      link: "https://masih-memorygame.vercel.app",
      description: "Memory Cards Game ",
      image: memory,
    },
  ]);
  return (
    <>
      <a
        href="https://github.com/MasihMuhammadi?tab=repositories"
        target="_blank"
        className="bg-yellow-500 p-2 rounded-md mt-10 px-10 mx-5 sm:mx-10 mb-10 text-black"
      >
        See All Projects
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10 mt-5">
        {projects.map((project: any, index: any) => {
          return (
            <div
              key={index}
              className="bg-black text-white border rounded-xl border-white shadow-sm shadow-yellow-500  p-3 mt-2 text-center flex flex-col items-center justify-center mt-10 scale-1  hover:scale-[1.01] transition-all duration-200"
            >
              <Image
                src={project.image}
                width={400}
                height={200}
                alt="myPhoto"
              />
              <p className="text-yellow-600 mt-3">{project.title}</p>
              <p>{project.description}</p>
              <a
                className="bg-yellow-500 p-2 px-4 rounded text-black mt-4 hover:scale-95"
                href={project.link}
                target="_blank"
              >
                Visit
              </a>
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <Footer />
      </div>
    </>
  );
};
export default MyProjects;
