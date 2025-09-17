import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Dinesen Solutions",
  description: "Kontakt Dinesen Solutions for en gratis konsultation om dit næste webprojekt. Hurtig respons og professionel rådgivning.",
  keywords: "kontakt, webudvikling københavn, gratis konsultation",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}