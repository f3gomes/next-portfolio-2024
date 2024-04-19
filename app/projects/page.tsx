import React from "react";
import { PageIntroduction } from "../components/sections/projects/page-intro";
import { ProjectsList } from "../components/sections/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { GraphQLClient } from "graphql-request";

export const metadata = {
  title: "Projetos",
};

export default async function Projects() {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL!);
  const { projects }: ProjectsPageData = await hygraph.request(
    `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
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
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
}
