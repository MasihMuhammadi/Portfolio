"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reserv from "../../public/reserv.png";
import buildResume from "../../public/buildResume.png";
import checkIn from "../../public/check-in-now.png";
import squadGame from "../../public/squadGame.png";
import Weather from "../../public/Weather.png";
import memory from "../../public/memory.png";
import chatApp from "../../public/chat-app.png";
import Footer from "../components/footer";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 3,
    imageSrc: checkIn,
    title: "Automated attendance",
    description: "School Management system, with automated attendance feature ",
    link: "https://check-in-now.vercel.app",
  },
  {
    id: 1,
    imageSrc: reserv,
    title: "Reserv Best",
    description: "Full Stact Project for reserving Wedding hotels in Kabul",
    link: "https://reserv.vercel.app",
  },
  {
    id: 2,
    imageSrc: buildResume,
    title: "Build Resume",
    description: "Project for creating dynamic Resume use templates",
    link: "https://buildResume.vercel.app",
  },
  {
    id: 4,
    imageSrc: squadGame,
    title: "Squad Game",
    description: "A basic brain game",
    link: "https://squadGame.vercel.app",
  },
  {
    id: 5,
    imageSrc: Weather,
    title: "Weather App",
    description: "Weather App developed with Vue.js",
    link: "https://weather-masih.vercel.app/",
  },
  {
    id: 6,
    imageSrc: memory,
    title: "Memory Card Game",
    description: "Simple Memory Game, find 2 same cards",
    link: "https://memory-game-five-beryl.vercel.app/",
  },
  {
    id: 7,
    imageSrc: chatApp,
    title: "Chat Application",
    description:
      "Real-time chat app Use NextJs, Typescript, Node.js & socket.io",
    link: "https://chattome.vercel.app/",
  },
];

const MyProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const galleryRefs: any = useRef<any>([]);

  useEffect(() => {
    // GSAP animation for scroll-triggered animation on gallery items
    galleryRefs.current.forEach((el: any, index: number) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100, // Start position below
        },
        {
          opacity: 1,
          y: 0, // End position at normal
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Start the animation when the item reaches 80% of the viewport height
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    // Unique hover effect animation (scale and rotate only on hover)
    galleryItems.forEach((item, index) => {
      const imageElement = galleryRefs.current[index]?.querySelector("img");
      if (imageElement) {
        gsap.fromTo(
          imageElement,
          {
            scale: 1,
            rotation: 0,
          },
          {
            scale: 1.1,
            rotation: 15, // Rotate only on hover
            ease: "power1.out",
            paused: true,
            duration: 0.5,
          }
        );

        // Adding hover trigger
        imageElement.addEventListener("mouseenter", () => {
          gsap.to(imageElement, { scale: 1.1, rotation: 15, duration: 0.3 });
        });

        imageElement.addEventListener("mouseleave", () => {
          gsap.to(imageElement, { scale: 1, rotation: 0, duration: 0.3 });
        });
      }
    });
  }, []);

  return (
    <div className="overflow-hidden py-10">
      <a
        href="https://github.com/MasihMuhammadi?tab=repositories"
        target="_blank"
        className="bg-yellow-500 p-2 rounded-md mt-16 px-10 mx-5 sm:mx-10 mb-10 text-black"
      >
        See All Projects
      </a>
      <div className="min-h-screen hidden lg:flex items-start mt-7 justify-start px-4 sm:px-8 md:px-16">
        <div className="relative p-8 flex flex-wrap justify-center gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el: any) => (galleryRefs.current[index] = el)}
              className={`absolute transition-all duration-500 ease-in-out w-full h-auto shadow-md shadow-yellow-500 ${
                activeProject === index ? "scale-110 z-20" : "scale-90 z-10"
              }`}
              style={{
                top: activeProject === index ? "10px" : `${index * 60}px`,
                left: activeProject === index ? "400px" : `${index * 20}px`,
                zIndex: activeProject === index ? 20 : index,
                width: activeProject === index ? "800px" : "300px",
              }}
              onClick={() =>
                setActiveProject((prev) => (prev === index ? null : index))
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
              {activeProject === index && (
                <a
                  href={item.link}
                  className="absolute bottom-5 bg-yellow-500 text-white px-10 py-2 rounded-lg left-[45%]"
                  target="_blank"
                >
                  Visit
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Gallery with GSAP ScrollTrigger Animation */}
      <div className="md:grid-cols-2 lg:hidden gap-10 px-4 sm:px-10 mt-5 my-16">
        {galleryItems.map((item: any, index) => (
          <div
            key={item.id}
            ref={(el: any) => (galleryRefs.current[index] = el)}
            className="bg-black text-white border rounded-xl border-white shadow-sm shadow-yellow-500 p-3 mt-2 text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={item.imageSrc}
              // width={400}
              // height={200}
              className="w-auto h-auto rounded-md"
              alt={item.title}
            />
            <p className="text-yellow-600 mt-3">{item.title}</p>
            <a
              className="bg-yellow-500 p-2 px-4 rounded text-black mt-4 hover:scale-95"
              href={item.link}
              target="_blank"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyProjects;
