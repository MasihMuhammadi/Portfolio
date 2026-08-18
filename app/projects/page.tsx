"use client";

export const dynamic = "force-dynamic";
import { galleryItems } from "./project";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../components/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------
// Skeleton
// ---------------------------------------------

const ImageSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
    <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg" />
  </div>
);

// ---------------------------------------------
// Lazy Image
// ---------------------------------------------

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
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton className="w-full h-full" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

// ---------------------------------------------
// Types
// ---------------------------------------------

const MyProjects: React.FC = () => {
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      galleryRefs.current.forEach((el) => {
        if (!el) return;

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

        const image = el.querySelector("img");

        if (!image) return;

        const handleMouseEnter = () => {
          gsap.to(image, {
            scale: 1.1,
            rotation: 15,
            duration: 0.3,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
          });
        };

        image.addEventListener("mouseenter", handleMouseEnter);
        image.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative py-10">
      {/* <a
        href="https://github.com/MasihMuhammadi?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#147864] p-2 rounded-md mt-16 px-10 mx-5 sm:mx-10 mb-10 text-white inline-block"
      >
        See All Projects
      </a> */}

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-[1fr_2fr] gap-8">
            {/* STICKY */}
            <div className="relative">
              <div className="sticky top-20 h-fit">
                <h1 className="text-5xl font-extrabold mb-4">My Projects</h1>

                <p className="text-gray-400">
                  A curated selection of projects. Click Visit to open each
                  project in a new tab.
                </p>

                <p className="mt-6 text-sm text-gray-400">
                  Click any card on the right to view more details or visit the
                  live project.
                </p>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="min-w-0">
              <div className="flex flex-col gap-6">
                {galleryItems.map((item, index) => (
                  <div
                    className="relative bg-gradient-to-r from-transparent to-rgba(20,120,100,0.7)  rounded-lg h-full "
                    key={index}
                  >
                    <Link
                      href={`projects/${item.slug}`}
                      className="cursor-pointer"
                      // target="blank"
                    >
                      <Image
                        alt={item.title}
                        className="object-contain rounded-lg w-[700px] h-[360px] -mb-2"
                        src={item.imageSrc}
                      />
                    </Link>
                    <p className="text-primary">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-10 px-4 sm:px-10 mt-5 my-16">
        {galleryItems.map((item, index) => (
          <article
            key={item.id}
            ref={(el) => {
              galleryRefs.current[index] = el;
            }}
            className="
          bg-gradient-to-br
          from-[rgba(20,120,100,0.6)]
          to-transparent
          text-white
          border
          rounded-xl
          border-white
          shadow-sm
          shadow-primary
          p-3
          text-center
          flex
          flex-col
          items-center
        "
          >
            <div className="relative w-full h-48 mb-3">
              <LazyImage
                src={item.imageSrc}
                alt={item.title}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <p className="text-[#147864] mt-3 font-semibold">{item.title}</p>

            <p className="text-gray-400 text-sm mb-3">{item.description}</p>

            <Button href={item.link} type="primary">
              Visit
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
