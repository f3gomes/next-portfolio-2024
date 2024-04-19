"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/app/components/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CMSIcon } from "@/app/components/cms-icon";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export default function HeroSection({ homeInfo }: HomeSectionProps) {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Felipe Gomes</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base text-justify">
            <RichText content={homeInfo?.intro?.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo?.teches.map((tech) => (
              <TechBadge name={tech.name} key={tech.name} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo?.socials.map((contact) => (
                <a
                  target="_blank"
                  href={contact.url}
                  key={contact.url}
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-fit">
          <Image
            priority
            width={420}
            height={404}
            alt="Foto de perfil"
            src={homeInfo?.profileImage?.url}
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
