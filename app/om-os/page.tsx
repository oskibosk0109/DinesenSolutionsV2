import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import AboutHero from "@/components/sections/about-hero";
import AboutContent from "@/components/sections/about-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om os | Dinesen Solutions",
  description: "Lær mere om Dinesen Solutions - en dansk enkeltmandsvirksomhed der leverer hurtige og intelligente webløsninger med moderne teknologi og AI-integration.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}