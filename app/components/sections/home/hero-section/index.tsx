"use client";

import React from "react";

import Image from "next/image";
import { RiGithubFill } from "react-icons/ri";
import { Button } from "@/app/components/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechBadge } from "@/app/components/tech-badge";

export default function HeroSection() {
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

          <p className="text-gray-400 my-6 text-sm sm:text-base text-justify">
            Trabalho com tecnologia há mais de 8 anos e há 3 anos optei por
            migrar da área de QA para Desenvolvedor me interessando pela
            carreira de Full Stack. Experiência com Javascript, Typescript,
            NodeJs, ReactJs baseado nas últimas 3 experiências que tive. Tenho
            experiência também com projetos pessoais e projetos do curso de
            formação Full Stack na Trybe. Tenho boa capacidade de aprendizado e
            bom desempenho no trabalho em equipe. Sempre disposto a aprender e
            aprimorar meus conhecimentos.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.js" key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <a
                  href={"/"}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <RiGithubFill />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Image
            width={420}
            height={404}
            alt="Foto de perfil"
            src={"/images/profile-pic.png"}
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
