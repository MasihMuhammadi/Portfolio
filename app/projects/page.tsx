"use client";
export const dynamic = "force-dynamic";
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
import iu from "../../public/iu.png";
import craxy from "../../public/craxy.png";
import Button from "../components/button";
gsap.registerPlugin(ScrollTrigger);

// Skeleton Component
const ImageSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
    <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg" />
  </div>
);

// Image Component with Skeleton
const LazyImage = ({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
}: {
  src: any;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0">
          <ImageSkeleton className="w-full h-full" />
        </div>
      )}

      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

interface GalleryItem {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 9,
    imageSrc: craxy,
    title: "Craxy AI",
    description: "AI Proposal Tracker",
    link: "https://craxy.ai",
  },
  {
    id: 8,
    imageSrc: iu,
    title: "Industry Umbrella",
    description: "E-commerce website",
    link: "https://iu-fast.vercel.app",
  },
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
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    galleryRefs.current.forEach((el: any, index: number) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    });

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
            rotation: 15,
            ease: "power1.out",
            paused: true,
            duration: 0.5,
          },
        );

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
        className="bg-[#147864] p-2 rounded-md mt-16 px-10 mx-5 sm:mx-10 mb-10 text-white inline-block"
        rel="noopener noreferrer"
      >
        See All Projects
      </a>
      
      {/* Desktop View */}
      <div className="min-h-screen hidden lg:flex items-start mt-7 justify-start px-4 sm:px-8 md:px-16">
        <div className="relative p-8 flex flex-wrap justify-center gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el: any) => (galleryRefs.current[index] = el)}
              className={`bg-black -z-10 opacity-90 absolute transition-all duration-500 ease-in-out hover:scale-105 w-full h-full shadow-md shadow-primary ${
                activeProject === index ? "scale-110 z-20" : "scale-90 z-10"
              }`}
              style={{
                top: activeProject === index ? "10px" : `${index * 60}px`,
                left: activeProject === index ? "400px" : `${index * 20}px`,
                zIndex: activeProject === index ? 20 : index,
                width: activeProject === index ? "900px" : "400px",
                height: activeProject === index ? "500px" : "200px",
              }}
              onClick={() =>
                setActiveProject((prev) => (prev === index ? null : index))
              }
            >
              <div className="relative group overflow-hidden rounded-lg w-full h-full">
                <LazyImage
                  src={item.imageSrc}
                  alt={item.title}
                  fill={true}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {activeProject === index && (
                <a
                  href={item.link}
                  className="absolute bottom-5 bg-[#147864] text-white px-10 py-2 rounded-lg left-[45%] hover:bg-[#0f5a4a] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-10 px-4 sm:px-10 mt-5 my-16">
        {galleryItems.map((item: any, index) => (
          <div
            key={item.id}
            ref={(el: any) => (galleryRefs.current[index] = el)}
            className="bg-black text-white border rounded-xl border-white shadow-sm shadow-primary p-3 mt-2 text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-48 mb-3">
              <LazyImage
                src={item.imageSrc}
                alt={item.title}
                fill={true}
                className="rounded-md"
              />
            </div>
            <p className="text-[#147864] mt-3 font-semibold">{item.title}</p>
            <p className="text-gray-400 text-sm mb-3">{item.description}</p>
            <Button href={item.link} type="primary">
              Visit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;