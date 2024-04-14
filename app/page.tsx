import HeroSection from "./components/sections/home/hero-section";
import { KnownTechs } from "./components/sections/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs
        techs={[{ name: "Javascript", iconSvg: "", startDate: "10-10-2021" }]}
      />
    </>
  );
}
