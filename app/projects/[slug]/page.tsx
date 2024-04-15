import { ProjectDetails } from "@/app/components/sections/project/project-details";
import { ProjectSections } from "@/app/components/sections/project/project-sections";
import { projects } from "@/app/page";
import React from "react";

const sections = [
  {
    title: "Title",
    image: {
      url: "/images/hero-bg.png",
    },
  },
];

export default function Project() {
  return (
    <>
      <ProjectDetails project={projects[0]} />
      <ProjectSections sections={sections} />
    </>
  );
}
