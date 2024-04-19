"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";
import { HiArrowNarrowRight } from "react-icons/hi";
import { fadeUpAnimation } from "@/app/lib/animations";
import { TechBadge } from "@/app/components/tech-badge";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[300px] sm:h-[400px] lg:w-[420px] lg:h-[300px]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          onClick={() => router.push(`/projects/${project.slug}`)}
          className="w-full h-full rounded-lg lg:object-cover cursor-pointer hover:opacity-70 transition duration-300"
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </motion.h3>

        <motion.p
          {...fadeUpAnimation}
          className="text-gray-400 my-6 text-justify"
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {project.teches.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="w-fit">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
