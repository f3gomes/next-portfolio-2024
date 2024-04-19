import React from "react";

import { GraphQLClient } from "graphql-request";
import { ProjectPageData } from "@/app/types/page-info";
import { ProjectDetails } from "@/app/components/sections/project/project-details";
import { ProjectSections } from "@/app/components/sections/project/project-sections";
import { Metadata } from "next";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string) => {
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

  return project;
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const project = await getProjectDetails(slug);

  if (!project?.title) return <h1>Page Not Found</h1>;

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectDetails(slug);

  return {
    title: project?.title,
    description: project?.description.text,
    openGraph: {
      images: [
        {
          url: project?.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
