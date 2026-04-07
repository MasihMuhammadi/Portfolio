"use client";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";

const MyExperience = () => {
  const experiences: any = [
    {
      company: "Craxy.ai",
      position: "Front-End Web Developer ",
      duration: "July - November 2025",
      link: "https://craxy.ai/",
      technologies: ["React.Js", "Next.Js", "TailwindCSS", "Zustand"],
      description:
        "Developed and maintained user interfaces using React and Next.js. Implemented responsive designs with Tailwind. Collaborated with cross-functional teams to deliver high-quality web applications. Utilized Typescript for robust and scalable code development.",
    },

    {
      company: "Industry Umbrella",
      position: "Front-End Web Developer ",
      duration: "Fab - July 2024",
      technologies: [
        "React.Js",
        "Next.Js",
        "TailwindCSs",
        "Redux",
        "Node.js",
        "Express.js",
        "MongodDB",
        "JWT",
      ],
      link: "https://industryumbrella.store/",
      description:
        "Developed and maintained user interfaces using React and Next.js. Implemented responsive designs with Tailwind. Collaborated with cross-functional teams to deliver high-quality web applications. Utilized Typescript for robust and scalable code development.",
    },
    {
      company: "AseelApp",
      position: "Front-End Web Developer ",
      duration: "Dec 2023 - July 2024",
      link: "https://aseelapp.com/do-good",
      technologies: ["React.Js", "Next.Js", "TailwindCSs", "Medusa.js"],
      description:
        "Developed and maintained user interfaces using React and Next.js. Implemented responsive designs with Tailwind. Collaborated with cross-functional teams to deliver high-quality web applications. Utilized Typescript for robust and scalable code development.",
    },
  ];

  const certificates = [
    {
      company: "Meta",
      position: "Advanced React",
      link: "https://coursera.org/share/MasihMuhammadi",
    },
    {
      company: "AseelApp",
      position: "Front-end React",
      link: "/experience letter.pdf",
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
      <div className="flex flex-col md:flex-row justify-between gap-10 px-4 sm:px-20 md:px-10 mt-10 overflow-x-hidden">
        <div className="w-full">
          <h3 className="text-3xl font-bold">Work Experience</h3>
          <ul>
            {experiences.map((experience: any, index: any) => (
              <li
                key={index}
                className={`list-none mt-10 w-full  border border-primary/80 rounded-md  p-2 hover:text-primary hover:bg-white transition-all duration-500 transform`}
              >
                <div className="flex flex-col sm:flex-row  w-full gap-x-10 justify-center items-start p-6 px-2.5">
                  <div className="w-2/4">
                    <p className="">{experience.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 ">
                      <h2 className="text-lg hover:text-primary flex items-center gap-x-2 font-semibold hover:font-bold">
                        <p className="font-bold">
                          {experience.position}{" "}
                          <b className="font-bold text-xl">.</b>
                          {"  "}
                          {experience.company}
                        </p>
                      </h2>

                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        <TbExternalLink className="opacity-30 font-extralight text-primary" />
                      </a>
                    </div>
                    <p className="mt-2 text-sm">{experience.description}</p>
                    <div className="flex flex-row  flex-wrap my-4 items-start gap-2">
                      {experience?.technologies?.map(
                        (tech: string, idx: number) => {
                          return (
                            <div
                              className="p-1.5 bg-none border text-center border-primary text-xs rounded-xl text-primary"
                              key={idx}
                            >
                              {tech}
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="text-3xl font-bold">Certificates</h3>
          {certificates.map((myCertificate: any, index: any) => {
            return (
              <div
                className={`list-none mt-10 w-full  border border-primary/80 rounded-md  p-2 hover:text-primary hover:bg-white transition-all duration-500 transform`}
                key={index}
              >
                <div className="flex items-center gap-2 ">
                  <h2 className="text-lg  hover:text-primary flex items-center gap-x-2 font-semibold hover:font-bold">
                    <p className="font-medium">
                      {myCertificate.position}{" "}
                      <b className="font-bold text-xl">.</b>
                      {"  "}
                      {myCertificate.company}
                    </p>
                  </h2>

                  <a
                    href={myCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    <TbExternalLink className="opacity-30 font-extralight text-primary" />
                  </a>
                </div>
                {/* <p className="mt-2 text-sm">{myCertificate.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="mt-9">
        <Footer />
      </div> */}
    </>
  );
};

export default MyExperience;
