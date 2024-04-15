import HeroSection from "./components/sections/home/hero-section";
import { HighlightedProjects } from "./components/sections/home/highlighted-projects";
import { KnownTechs } from "./components/sections/home/known-techs";
import { WorkExperience } from "./components/sections/home/work-experience";

export default async function Home() {
  const techs = [{ name: "Javascript", iconSvg: "", startDate: "10-10-2021" }];
  const experiences: any = [
    {
      companyLogo: {
        url: "/images/hero-bg.png",
      },
      role: "role",
      companyName: "companyName",
      companyUrl: "companyUrl",
      startDate: "10-10-2021",
      endDate: "10-10-2022",
      technologies: [],
      description: {
        raw: "",
      },
    },
  ];
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
  ];

  return (
    <>
      <HeroSection />
      <KnownTechs techs={techs} />
      <HighlightedProjects projects={projects} />
      <WorkExperience experiences={experiences} />
    </>
  );
}
