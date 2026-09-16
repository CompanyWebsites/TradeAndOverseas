import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FlagshipTech } from "@/components/FlagshipTech";
import { Patent } from "@/components/Patent";
import { Paradigm } from "@/components/Paradigm";
import { HowItWorks } from "@/components/HowItWorks";
import { Platforms } from "@/components/Platforms";
import { Products } from "@/components/Products";
import { Applications } from "@/components/Applications";
import { Environmental } from "@/components/Environmental";
import { Engineering } from "@/components/Engineering";
import { DevApproach } from "@/components/DevApproach";
import { Government } from "@/components/Government";
import { Business } from "@/components/Business";
import { Partner } from "@/components/Partner";
import { WhySummary } from "@/components/WhySummary";
import { Ecosystem } from "@/components/Ecosystem";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <FlagshipTech />
      <Patent />
      <Paradigm />
      <HowItWorks />
      <Platforms />
      <Products />
      <Applications />
      <Environmental />
      <Engineering />
      <DevApproach />
      <Government />
      <Business />
      <Partner />
      <WhySummary />
      <Ecosystem />
      <Contact />
      <Footer />
    </main>
  );
}
