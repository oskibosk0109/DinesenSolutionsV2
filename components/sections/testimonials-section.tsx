"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anders Nielsen",
      company: "TechStart ApS",
      role: "CEO",
      content: "Dinesen Solutions leverede vores webapp på rekordtid. Kvaliteten er i top og prisen var helt fair.",
      rating: 5,
      project: "Webapp",
    },
    {
      name: "Maria Jensen",
      company: "Nordic Design",
      role: "Marketing Chef",
      content: "Professionel service og hurtig levering. Vores nye hjemmeside har øget konverteringen markant.",
      rating: 5,
      project: "Hjemmeside",
    },
    {
      name: "Lars Petersen",
      company: "DataFlow",
      role: "CTO",
      content: "AI-integrationen har revolutioneret vores kundeservice. Fantastisk arbejde!",
      rating: 5,
      project: "AI-integration",
    },
    {
      name: "Sofie Hansen",
      company: "GreenTech",
      role: "Founder",
      content: "Fra idé til færdig løsning på kun 3 uger. Imponerende!",
      rating: 5,
      project: "Dashboard",
    },
  ];

  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Vercel", category: "Hosting" },
    { name: "OpenAI", category: "AI" },
    { name: "Stripe", category: "Payment" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Star className="mr-1 h-3 w-3 fill-current" />
            5.0 gennemsnit
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hvad kunderne{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              siger
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            98% kundetilfredshed på tværs af over 500 projekter
          </p>
        </motion.div>

        <Tabs defaultValue="testimonials" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="testimonials">Anmeldelser</TabsTrigger>
            <TabsTrigger value="technologies">Teknologier</TabsTrigger>
          </TabsList>

          <TabsContent value="testimonials" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Quote className="h-8 w-8 text-primary/20" />
                        <Badge variant="secondary">{testimonial.project}</Badge>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <CardDescription>
                          {testimonial.role} • {testimonial.company}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technologies" className="mt-8">
            <div className="max-w-5xl mx-auto">
              <Marquee pauseOnHover className="[--duration:20s]">
                {technologies.map((tech, index) => (
                  <Card key={index} className="mx-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground mb-1">
                          {tech.name}
                        </h3>
                        <Badge variant="outline">{tech.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}