"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

const MyExperience = () => {
  const experiences: any = [
    {
      company: "AseelApp, Kabul, Afghanistan",
      position: "Front-End Web Developer (Dec 2023 - July 2024)",
      link: "https://aseelapp.com/do-good",
      description:
        "Developed and maintained user interfaces using React and Next.js. Implemented responsive designs with Tailwind. Collaborated with cross-functional teams to deliver high-quality web applications. Utilized Typescript for robust and scalable code development.",
    },
    {
      company: "Upwork, Remote",
      position: "Front-End Web Developer (May 2022 - Dec 2023)",
      link: "https://upwork.com/",
      description:
        "Completed various front-end development projects for international clients using React, Next.js, Typescript, and Tailwind CSS. Collaborated with remote teams across different time zones.",
    },
  ];

  const [visibleItems, setVisibleItems] = useState<any>([]);

  useEffect(() => {
    experiences.forEach((_: any, index: any) => {
      setTimeout(() => {
        setVisibleItems((prev: any) => [...prev, index]);
      }, index * 500); // Delay of 500ms for each item
    });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-x-10 px-4 sm:px-20 md:px-10 mt-10 overflow-x-hidden">
        <div className="w-full sm:w-1/2 ">
          <h3 className="text-xl font-bold">Work Experience</h3>
          <ul>
            {experiences.map((experience: any, index: any) => (
              <li
                key={index}
                className={`list-none mt-10 transition-opacity duration-500 transform ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <h2 className="text-lg font-semibold text-yellow-500">
                    {experience.company}
                  </h2>
                  <p className="font-medium">{experience.position}</p>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 underline"
                  >
                    {experience.link}
                  </a>
                  <p className="mt-2">{experience.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="text-xl font-bold">Certificates</h3>
          <ul className="mt-10">
            <li
              // className="mb-4"
              className={`list-none mb-4 mt-10 transition-opacity duration-500 transform ${
                visibleItems.includes(0)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="font-semibold">Meta (Advanced React):</h1>
              <a
                href="https://coursera.org/share/f528d76ef09d929cb2c9ea3d2bf2200a"
                className="text-yellow-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://coursera.org/share/f528d76ef09d929cb2c9ea3d2bf2200a
              </a>
            </li>
            <li
              className={`list-none mt-10 transition-opacity duration-500 transform ${
                visibleItems.includes(0)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="font-semibold">AseelApp Experience Letter</h1>
              <button className="mt-4 bg-white p-2 rounded-lg hover:scale-95">
                <a
                  href="/experience letter.pdf"
                  download
                  className="text-black"
                >
                  Download Experience letter
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-9">
        <Footer />
      </div>
    </>
  );
};

export default MyExperience;
