import React from "react";
import { SectionTitle } from "../section-title";
import { Button } from "../button";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Solicite meus serviços diretamente"
          className="items-center text-center"
        />

        <form action="" className="mt-12 w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <textarea
            placeholder="Mensagem"
            maxLength={500}
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <Button className="w-max mt-6 mx-auto shadow-button">
            Enviar mensagem <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
