import Image from "next/image";
import { galleryItems } from "../project";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  params: Promise<{
    title: string;
  }>;
};

const SingleProject = async ({ params }: Props) => {
  const { title } = await params;

  const project = galleryItems.find((project) => project.slug === title);
  const nextProjectId = galleryItems.indexOf(project) + 1;
  const nextProject = galleryItems[nextProjectId];
  console.log(nextProject, "...");

  return (
    <section className="px-10 mt-10">
      <h1 className="text-white/45 text-md">
        Projects (Last Update 8/15/2026)
      </h1>
      <p className=" object-contain text-[50px] sm:text-[90px] font-galsod">
        {project?.title}
      </p>
      <div>
        <Link href={project?.link} target="_blank">
          <Image
            src={project?.imageSrc}
            width={500}
            height={500}
            className="sm:w-full w-[300px] h-[450px] sm:h-full rounded-lg object-cover object-center border-[0.25px] border-primary"
            alt=""
          />
        </Link>
        <div className="mt-4">
          <p className="font-galsod text-xl">{project?.title}</p>
          <p>{project?.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row mt-24">
          <div className="sm:border-r w-3/4 sm:border-r-primary sm:pr-10   ">
            <h1>Overview</h1>
            <p className="text-3xl">AI Based Platform for writing Proposals</p>
            <div className="border-b border-b-primary mt-3 h-2 w-14 bg-primary"></div>
          </div>
          <div className="flex flex-col gap-6 mt-4 sm:pl-10">
            <div>
              <p className="text-primary">OVERVIEW</p>
              {project?.details}
            </div>
            <div>
              <p className="text-primary">CHALLENGES</p>
              {project?.challenges}
            </div>
          </div>
        </div>
        <div className="mt-24  flex flex-col gap-2">
          <h1>Techs</h1>
          <div className="flex sm:flex-row flex-col w-full ">
            {project?.technologies.map((t, i) => (
              <div className="border p-4 w-full" key={i}>
                <p>{i + 1}</p>

                <span className="text-center uppercase text-primary" key={i}>
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-2">
          <p>Next Project</p>
          <div className="flex justify-between">
            <p className="text-[30px] sm:text-[80px] font-galsod">
              {nextProject?.title}
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="bg-primary w-8 h-8 text-center rounded-full p-2 "
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
