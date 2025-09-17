"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      question: "Hvor lang tid tager det at udvikle en hjemmeside?",
      answer: "En standard hjemmeside tager typisk 2-3 uger fra start til færdig. Mere komplekse webapplikationer kan tage 3-6 uger afhængig af omfanget. Jeg arbejder agilt, så du får løbende opdateringer og kan give feedback undervejs.",
      category: "Tidslinje",
    },
    {
      question: "Hvordan kan du være 30-50% billigere end andre bureauer?",
      answer: "Som enkeltmandsvirksomhed har jeg minimale omkostninger - ingen kontorhusleje, ingen mellemledere, ingen overhead. Samtidig bruger jeg AI-værktøjer til at arbejde hurtigere og mere effektivt. Den besparelse går direkte videre til dig.",
      category: "Pris",
    },
    {
      question: "Hvilke teknologier bruger du?",
      answer: "Jeg specialiserer mig i moderne web-teknologier som Next.js, React, TypeScript og Tailwind CSS. For backend bruger jeg Node.js og PostgreSQL. Alle løsninger hostes på Vercel eller AWS for optimal performance og skalerbarhed.",
      category: "Teknologi",
    },
    {
      question: "Kan du overtage et eksisterende projekt?",
      answer: "Ja, jeg overtager gerne eksisterende projekter. Jeg har erfaring med at migrere fra WordPress, opdatere legacy systemer og modernisere ældre webløsninger. Første skridt er altid en teknisk gennemgang for at vurdere omfanget.",
      category: "Migration",
    },
    {
      question: "Tilbyder du vedligeholdelse efter levering?",
      answer: "Ja, jeg tilbyder fleksible vedligeholdelsesaftaler tilpasset dine behov. Fra ad-hoc opdateringer til faste månedlige pakker. Du får altid hurtig responstid og professionel support.",
      category: "Support",
    },
    {
      question: "Hvordan fungerer AI-integration i praksis?",
      answer: "AI-integration kan være alt fra chatbots og automatisk tekstgenerering til intelligent dataanalyse og billedgenkendelse. Jeg bruger primært OpenAI's API'er og kan skræddersy løsningen til netop dine behov.",
      category: "AI",
    },
    {
      question: "Er mine data sikre hos dig?",
      answer: "Absolut. Jeg følger best practices for datasikkerhed, implementerer HTTPS, sikker authentication og GDPR-compliance. Alle data krypteres, og jeg bruger kun anerkendte, sikre hosting-løsninger.",
      category: "Sikkerhed",
    },
    {
      question: "Kan jeg se eksempler på dit tidligere arbejde?",
      answer: "Jeg har udviklet over 500 projekter gennem årene. Kontakt mig for at se relevante cases inden for dit område. Jeg respekterer altid kunders fortrolighed og viser kun projekter med tilladelse.",
      category: "Portfolio",
    },
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <AnimatedGradientText className="mx-auto mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Ofte stillede spørgsmål</span>
          </AnimatedGradientText>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Har du{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              spørgsmål?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find svar på de mest almindelige spørgsmål herunder
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap gap-2 justify-center"
          >
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="px-3 py-1">
                {category}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start gap-3 pr-4">
                        <Badge variant="outline" className="mt-1 shrink-0">
                          {faq.category}
                        </Badge>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-20">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Separator className="mb-12" />
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
              <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Har du andre spørgsmål?
              </h3>
              <p className="text-muted-foreground mb-6">
                Jeg er her for at hjælpe. Book en gratis konsultation eller send mig en besked.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link href="/kontakt">Start en samtale</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="mailto:kontakt@dinesensolutions.dk">Send email</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}