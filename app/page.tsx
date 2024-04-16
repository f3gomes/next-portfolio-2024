export const revalidate = 0;

import { GraphQLClient } from "graphql-request";
import { HomePageData } from "./types/page-info";
import HeroSection from "./components/sections/home/hero-section";
import { KnownTechs } from "./components/sections/home/known-techs";
import { WorkExperience } from "./components/sections/home/work-experience";
import { HighlightedProjects } from "./components/sections/home/highlighted-projects";

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

export const projects: any = [
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

export default async function Home() {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL!);
  const { page }: HomePageData = await hygraph.request(
    `
      query PageInfoQuery {
        page(where: {slug: "home"}) {
          intro {
            raw
          }
          teches {
            name
          }
          profileImage {
            url
          }
          socials {
            url
            iconSvg
          }
          knowteches {
            iconSvg
            name
            startDate
          }
        }
      }
      `
  );

  return (
    <>
      <HeroSection homeInfo={page} />
      <KnownTechs techs={techs} />
      <HighlightedProjects projects={projects} />
      <WorkExperience experiences={experiences} />
    </>
  );
}
