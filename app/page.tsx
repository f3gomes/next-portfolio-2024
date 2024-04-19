export const revalidate = 0;

import { GraphQLClient } from "graphql-request";
import { HomePageData } from "./types/page-info";
import HeroSection from "./components/sections/home/hero-section";
import { KnownTechs } from "./components/sections/home/known-techs";
import { HighlightedProjects } from "./components/sections/home/highlighted-projects";
import { WorkExperience } from "./components/sections/home/work-experience";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL!);
  const { page, workExperiences }: HomePageData = await hygraph.request(
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
          knownteches {
            iconSvg
            name
            startDate
          }
          highlightProjects {
            slug
            thumbnail {
              url
            }
            title
            shortDescription
            teches {
              name
            }
          }
        }

        workExperiences(orderBy: endDate_DESC) {
          companyLogo {
            url
          }
          role
          companyName
          companyUrl
          startDate
          endDate
          description {
            raw
          }
          teches {
            name
          }
        }
      }
      `
  );

  return (
    <>
      <HeroSection homeInfo={page} />
      <KnownTechs techs={page.knownteches} />
      <HighlightedProjects projects={page.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
