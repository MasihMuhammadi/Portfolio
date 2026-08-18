import { useRef, useState } from "react";
import VariableProximity from "./VariableProximity";
import Button from "./button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const MyBio = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex flex-col  gap-y-4">
      <div className="inline-block w-fit rounded-xl border border-primary p-1 text-sm text-primary shadow-[0_4px_20px_rgba(20,120,100,0.24)] ">
        <VariableProximity
          label="Full-Stack Web Developer"
          containerRef={containerRef}
          className="variable-proximity-demo"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          falloff="linear"
        />
      </div>

      <div className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px]  text-center sm:text-left font-galsod leading-none font-light">
        <p className="">Building Scalable </p>
        <p className="">Web Application</p>
        <p>That Solve Real Problems.</p>
      </div>
      <p className="w-full sm:w-1/2 text-left">
        I build production, ready web applications with Next.js, Typescript,
        Node.js, PostgreSql and MongoDB -- from user interface to backend
        system.
      </p>
      <div
        style={{
          position: "relative",
          fontSize: "31px",
          color: "var(--primary)",
        }}
        ref={containerRef}
      >
        <div className="flex gap-1.5 sm:gap-2 mt-10 ">
          <Button type="primary" className="rounded-lg  ">
            <span className="text-sm ">View My Work</span>
          </Button>
          <a
            href="/resume.pdf"
            download
            className="
    inline-flex items-center justify-center
    gap-2
    rounded-md
    border border-primary
    bg-transparent
    px-5 py-2.5
    text-sm
    text-primary
    transition-all duration-200
    hover:bg-primary/10
    hover:shadow-[0_0_20px_rgba(20,120,100,0.15)]
    active:scale-95
    whitespace-nowrap
  "
          >
            Download Resume
          </a>
        </div>
        <div className="flex flex-row gap-x-4 mt-4 text-white ">
          <a href="https://github.com/MasihMuhammadi" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/masihullah-dev/" target="_blank">
            <FaLinkedin size={24} />
          </a>
          {/* <a href="https://github.com/MasihMuhammadi" target="_blank">
            <FaGithub />
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default MyBio;
