"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import reserv from "../../public/reserv.png";
import buildResume from "../../public/buildResume.png";
import checkIn from "../../public/check-in-now.png";
import squadGame from "../../public/squadGame.png";
import Weather from "../../public/Weather.png";
import memory from "../../public/memory.png";

interface GalleryItem {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: reserv,
    title: "Project 1",
    description: "Description for project 1",
    link: "https://reserv.vercel.app",
  },
  {
    id: 2,
    imageSrc: buildResume,
    title: "Project 2",
    description: "Description for project 2",
    link: "https://buildResume.vercel.app",
  },
  {
    id: 3,
    imageSrc: checkIn,
    title: "Project 3",
    description: "Description for project 3",
    link: "https://check-in-now.vercel.app",
  },
  {
    id: 4,
    imageSrc: squadGame,
    title: "Project 4",
    description: "Description for project 4",
    link: "https://squadGame.vercel.app",
  },
  {
    id: 5,
    imageSrc: Weather,
    title: "Project 5",
    description: "Description for project 5",
    link: "https://masihweather.vercel.app",
  },
  {
    id: 6,
    imageSrc: memory,
    title: "Project 6",
    description: "Description for project 6",
    link: "https://masih-memory.vercel.app",
  },
];

const MyProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [screenSize, setScreenSize] = useState<any>();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      // console.log(window.innerWidth, "Screen Width Changed");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <a
        href="https://github.com/MasihMuhammadi?tab=repositories"
        target="_blank"
        className="bg-yellow-500 p-2 rounded-md mt-16 px-10 mx-5 sm:mx-10 mb-10 text-black"
      >
        See All Projects
      </a>
      <div className="min-h-screen flex items-start mt-7 justify-start px-4 sm:px-8 md:px-16">
        <div className="relative p-8 flex flex-wrap justify-center gap-8">
          {galleryItems.map((item, index) => (
            <div key={item.id}>
              {screenSize > 450 ? (
                <div
                  className={`absolute transition-all duration-500 ease-in-out w-full   h-auto shadow-md shadow-yellow-500 ${
                    activeProject === index ? "scale-110 z-20" : "scale-90 z-10"
                  }`}
                  style={{
                    top: activeProject === index ? "10px" : `${index * 60}px`, // Stack or move to the top
                    left: activeProject === index ? "400px" : `${index * 20}px`, // Move to the right when clicked
                    zIndex: activeProject === index ? 20 : index, // Bring clicked project to the front
                    width: activeProject === index ? "800px" : "300px", // Increase width when active
                    // height: activeProject === index ? "00px" : "100px", // Increase width when active
                  }}
                  onClick={
                    () =>
                      setActiveProject((prev) =>
                        prev === index ? null : index
                      ) // Toggle active project
                  }
                >
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <div className="relative">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {activeProject === index ? (
                    <a
                      href={item.link}
                      className="absolute bottom-5 bg-yellow-500 text-white px-10 py-2 rounded-lg left-[45%]"
                      target="_blank"
                    >
                      Visit
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10 mt-5">
                  <div
                    key={index}
                    className="bg-black text-white border rounded-xl border-white shadow-sm shadow-yellow-500  p-3 mt-2 text-center flex flex-col items-center justify-center mt-10 scale-1  hover:scale-[1.01] transition-all duration-200"
                  >
                    <Image
                      src={item.imageSrc}
                      width={400}
                      height={200}
                      alt="myPhoto"
                    />
                    <p className="text-yellow-600 mt-3">{item.title}</p>
                    {/* <p>{project.description}</p> */}
                    <a
                      className="bg-yellow-500 p-2 px-4 rounded text-black mt-4 hover:scale-95"
                      href={item.link}
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProjects;
