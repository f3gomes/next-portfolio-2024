import React from "react";

import { GraphQLClient } from "graphql-request";
import { ProjectPageData } from "@/app/types/page-info";
import { ProjectDetails } from "@/app/components/sections/project/project-details";
import { ProjectSections } from "@/app/components/sections/project/project-sections";

type ProjectProps = {
  params: {
    slug: string;
  };
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL!);
  const { project }: ProjectPageData = await hygraph.request(
    `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        teches {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
      `
  );

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}
