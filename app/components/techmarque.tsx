const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Git",
];

export default function TechMarquee() {
  return (
    <div className="flex w-max animate-marquee items-center my-10">
      {[...technologies, ...technologies].map((tech, index) => (
        <div key={`${tech}-${index}`} className="flex items-center">
          <span
            key={tech}
            className={`text-3xl font-medium font-galsod ${
              index % 2 === 0 ? "text-gray-500" : "text-white"
            }`}
          >
            {tech}
          </span>

          {/* <span className="mx-10 text-xl text-primary">•</span> */}
          <span className="mx-10 h-2 w-2 rotate-45 bg-primary" />
        </div>
      ))}
    </div>
  );
}
