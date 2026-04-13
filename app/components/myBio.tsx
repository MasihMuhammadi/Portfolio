
import { useRef, useState } from 'react';
import VariableProximity from './VariableProximity';
import Button from './button';

const MyBio = () =>{

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


      <div className="flex flex-row gap-y-10 gap-x-3 sm:flex-col lg:flex-row">
        <div
          style={{
            position: "relative",
            fontSize: "31px",
            color: "var(--primary)",
          }}
          // bg-white/10
          className="
            max-w-[75%] min-w-[80%]
             sm:max-w-[60%]  sm:min-w-[59%]
             md:w-full md:max-w-[90%]  md:min-w-[91%]
              lg:max-w-[50%]  lg:min-w-[54%]
              xl:max-w-[43%] xl:min-w-[35%]  "
              ref={containerRef}
              >
                
          {/* sm:bg-blue-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-slate-900 */}
          <VariableProximity
            label={"My Name is masihullah"}
            containerRef={containerRef}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            // containerRef={containerRef}
            radius={100}
            falloff="linear"
            // falloff="linear"
          />{" "}
          <VariableProximity
            label={"Full-Stack Web developer  "}
            containerRef={containerRef}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            // containerRef={containerRef}
            radius={100}
            falloff="linear"
            // falloff="linear"
          />
          <div className="flex gap-1.5 sm:gap-2 mt-6 ">
            <Button className="rounded-lg " type="primary" >
              {/* <FaCalendarCheck size={14} className="shrink-0 text-white" /> */}
              <span className="text-sm ">Book a demo</span>
            </Button>
            <Button type="primary" className="rounded-lg w-full">
              <a
                href="/Masihullah Muhammadi.pdf" // path to your CV file in public folder
                download="Masihullah Muhammadi.pdf"
                className="flex items-center gap-1.5 sm:gap-2"
              >
                {/* <FaFileArrowDown size={18} className="shrink-0 text-white" /> */}
                <span className="text-sm ">Download CV</span>
              </a>
            </Button>
          </div>
        </div>

        <div
          className="spotlight-container h-[200px] hidden md:block"
          onMouseMove={handleMouseMove}
          style={
            {
              "--x": `${mousePos.x}px`,
              "--y": `${mousePos.y}px`,
            } as React.CSSProperties
          }
        >
          
          <p className="spotlight-text text-3xl text-center flex flex-col items-center ">
            {`I build modern web applications
focused on clean UI, performance, and real-world usability.`
              .split("\n")
              .map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line.split(" ").map((word, i) => (
                    <span key={i} className="word">
                      {word}{" "}
                    </span>
                  ))}
                  <br />
                </span>
              ))}
          </p>
        </div>
</div>    
    )
}
export default MyBio;