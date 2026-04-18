import { Hero } from "./components/Hero";
import { MassSection } from "./components/MassSection";
import { ParishLife } from "./components/ParishLife";
import { GivingBand } from "./components/GivingBand";
import { Sponsors } from "./components/Sponsors";
import { Newsletter } from "./components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MassSection />
      <ParishLife />
      <GivingBand />
      <Sponsors />
      <Newsletter />
    </>
  );
}
