import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import ServicesHero from "@/components/sections/services-hero";
import ServicesDetails from "@/components/sections/services-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Dinesen Solutions",
  description: "Se vores services: webapplikationer, hjemmesider, AI-integration og mere. Skræddersyede løsninger bygget med Next.js og moderne teknologi.",
  keywords: "webapplikationer, hjemmesider, next.js udvikling, AI-integration, API-udvikling",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesDetails />
      </main>
      <Footer />
    </>
  );
}