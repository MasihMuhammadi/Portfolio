"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "motion/react";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillCategory =
  | "all"
  | "frontend"
  | "backend"
  | "design"
  | "cloud"
  | "others";

type BadgeKind = "expert" | "advanced";

export type DesktopSkill = {
  id: string;
  name: string;
  level: number;
  category: Exclude<SkillCategory, "all">;
  badge?: BadgeKind;
  icon: React.ReactNode;
};

const FILTERS: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "design", label: "Design Tools" },
  { id: "cloud", label: "Cloud" },
  { id: "others", label: "Others" },
];

function badgeForLevel(level: number): BadgeKind | undefined {
  if (level >= 92) return "expert";
  if (level >= 78) return "advanced";
  return undefined;
}

const DESKTOP_SKILLS: DesktopSkill[] = [
  {
    id: "html-css",
    name: "HTML & CSS",
    level: 95,
    category: "frontend",
    badge: badgeForLevel(95),
    icon: (
      <div className="flex items-center justify-center sm:gap-1.5">
        <div className="relative  flex sm:hidden flex-row">
          <SiHtml5 className="h-12 w-12 absolute left-3 -z-1 text-[#E34F26]" />
          <SiCss3 className="h-12 w-12 text-[#1572B6] z-10" />
        </div>
        <div className="relative hidden sm:flex flex-row">
          <SiHtml5 className="h-12 w-12  text-[#E34F26]" />
          <SiCss3 className="h-12 w-12 text-[#1572B6] " />
        </div>
      </div>
    ),
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    level: 90,
    category: "frontend",
    badge: badgeForLevel(90),
    icon: <SiTailwindcss className="h-14 w-14 text-[#06B6D4]" />,
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: 95,
    category: "frontend",
    badge: badgeForLevel(95),
    icon: <SiJavascript className="h-14 w-14 text-[#F7DF1E]" />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: 95,
    category: "frontend",
    badge: badgeForLevel(95),
    icon: <SiTypescript className="h-14 w-14 text-[#3178C6]" />,
  },
  {
    id: "next",
    name: "Next.js",
    level: 85,
    category: "frontend",
    badge: badgeForLevel(85),
    icon: <SiNextdotjs className="h-14 w-14 text-white" />,
  },
  {
    id: "node",
    name: "Node.js",
    level: 80,
    category: "backend",
    badge: badgeForLevel(80),
    icon: <SiNodedotjs className="h-14 w-14 text-[#339933]" />,
  },
  {
    id: "data",
    name: "MongoDB & MySQL",
    level: 70,
    category: "backend",
    icon: (
      <div className="flex items-center justify-center gap-1.5">
        <SiMongodb className="h-12 w-12 text-[#47A248]" />
        <SiMysql className="h-12 w-12 text-[#4479A1]" />
      </div>
    ),
  },
  {
    id: "figma",
    name: "UI/UX Figma",
    level: 80,
    category: "design",
    badge: badgeForLevel(80),
    icon: <SiFigma className="h-14 w-14 text-[#F24E1E]" />,
  },
];

const R = 34;
const C = 2 * Math.PI * R;

function AnimatedDonut({
  percent,
  active,
}: {
  percent: number;
  active: boolean;
}) {
  const gradId = React.useId().replace(/:/g, "");
  const [offset, setOffset] = useState(C);
  const [label, setLabel] = useState(0);

  useEffect(() => {
    if (!active) {
      setOffset(C);
      setLabel(0);
      return;
    }
    const target = C * (1 - percent / 100);
    let frame: number;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) * (1 - t);
      setOffset(C - (C - target) * eased);
      setLabel(Math.round(percent * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, percent]);
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      className="shrink-0 bg-none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(72, 200, 170)" />
          <stop offset="100%" stopColor="rgb(20, 120, 100)" />
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </linearGradient>
      </defs>
      <circle
        cx="44"
        cy="44"
        r={R}
        fill="transparent"
        className="bg-none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="7"
      />
      <circle
        cx="44"
        cy="44"
        r={R}
        fill="transparent"
        stroke={`url(#${gradId})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90 44 44)"
        filter="url(#glow)" // 🔥 THIS LINE
      />
      <text
        x="44"
        y="48"
        textAnchor="middle"
        className="fill-white text-[13px] font-semibold"
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        {label}%
      </text>
    </svg>
  );
}

function SkillShieldCard({ skill }: { skill: DesktopSkill }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="skill-shield-card group relative flex min-h-[280px] flex-col items-center px-4 pb-6 pt-10"
    >
      {skill.badge && (
        <span className="absolute right-2  top-4 z-10 rounded-md border border-white/15 bg-zinc-600/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {skill.badge === "expert" ? "Expert" : "Advanced"}
        </span>
      )}

      <div className="mb-4 flex min-h-[3.5rem] items-center justify-center [&_svg]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
        {skill.icon}
      </div>

      <h3 className="mb-auto text-center text-[15px] font-medium tracking-tight text-white">
        {skill.name}
      </h3>

      <div className="mt-6">
        <AnimatedDonut percent={skill.level} active={inView} />
      </div>
    </div>
  );
}

export default function SkillCardsDesktop() {
  const [visible, setVisible] = useState<SkillCategory>("all");

  return (
    <div className="relative z-[1] mx-auto max-w-6xl">
      <h1
        className="mb-8 text-center text-3xl font-bold tracking-tight text-white md:text-4xl"
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          textShadow: "0 0 40px rgb(20 120 100 / 0.2)",
        }}
      >
        Skills &amp; Expertise
      </h1>
      <div className="flex flex-col gap-3 md:hidden">
        {DESKTOP_SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="flex sm:hidden  items-center gap-4 p-3 rounded-xl bg-neutral-900"
          >
            {/* Icon */}
            <div className="text-2xl">{skill.icon}</div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex justify-between text-sm text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/10 rounded mt-1 overflow-hidden">
                <div
                  className="h-full bg-primary animate-grow"
                  style={{ "--w": `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 items-center justify-around gap-4 lg:grid-cols-4 ">
        {DESKTOP_SKILLS?.map((skill: any) => (
          <li key={skill.id} className="">
            <div className=" skill-card-missile snake-border hidden sm:flex flex-col items-center py-8 hover:scale-[1.03]">
              <SkillShieldCard skill={skill} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
