import React from "react";
import { PageIntroduction } from "../components/sections/projects/page-intro";
import { ProjectsList } from "../components/sections/projects/projects-list";

export default function Projects() {
  const projects: any = [
    {
      slug: "slug",
      thumbnail: {
        url: "/images/hero-bg.png",
      },
      title: "Title",
      shortDescription: "Short Description",
      technologies: [],
      pageThumbnail: { url: "PageThumbnail" },
      sections: [],
      description: { text: "Text Description" },
      liveProjectUrl: "LiveProject",
      githubUrl: "Github URL",
    },
    {
      slug: "slug",
      thumbnail: {
        url: "/images/hero-bg.png",
      },
      title: "Title",
      shortDescription: "Short Description",
      technologies: [],
      pageThumbnail: { url: "PageThumbnail" },
      sections: [],
      description: { text: "Text Description" },
      liveProjectUrl: "LiveProject",
      githubUrl: "Github URL",
    },
    {
      slug: "slug",
      thumbnail: {
        url: "/images/hero-bg.png",
      },
      title: "Title",
      shortDescription: "Short Description",
      technologies: [],
      pageThumbnail: { url: "PageThumbnail" },
      sections: [],
      description: { text: "Text Description" },
      liveProjectUrl: "LiveProject",
      githubUrl: "Github URL",
    },
  ];

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
}
