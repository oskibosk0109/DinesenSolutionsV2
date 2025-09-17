"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Code2,
  Sparkles,
  Database,
  ShoppingCart,
  BarChart3,
  Lock,
  Smartphone,
  Cloud,
  GitBranch,
  Layers,
  Settings
} from "lucide-react";

export default function ServicesDetails() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Webapplikationer",
      description: "Skræddersyede løsninger der passer perfekt til dine behov",
      features: [
        "Komplekse dashboards og analyseværktøjer",
        "Kundeportaler med brugerlogin",
        "Interne værktøjer og admin-systemer",
        "Real-time data og live-opdateringer",
        "Skalerbare løsninger der vokser med dig",
      ],
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      price: "Fra 25.000 kr",
      gradient: "from-primary to-secondary",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Hjemmesider",
      description: "Professionelle sider der konverterer besøgende til kunder",
      features: [
        "Responsive design til alle enheder",
        "SEO-optimeret fra bunden",
        "Lynhurtig performance",
        "CMS-integration efter behov",
        "Analytics og tracking setup",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Google Analytics"],
      price: "Fra 8.000 kr",
      gradient: "from-secondary to-primary",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI-Integration",
      description: "Gør din løsning intelligent med moderne AI",
      features: [
        "ChatGPT og OpenAI integration",
        "Automatisk tekstgenerering",
        "Intelligent dataanalyse",
        "Chatbots og kundeservice",
        "Billedgenkendelse og behandling",
      ],
      technologies: ["OpenAI API", "LangChain", "Vector Databases", "Python"],
      price: "Fra 15.000 kr",
      gradient: "from-primary to-beige-dark",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "API & Integrationer",
      description: "Forbind dine systemer og automatiser workflows",
      features: [
        "RESTful API udvikling",
        "Third-party integrationer",
        "Database design og optimering",
        "Webhook implementering",
        "Data migration og synkronisering",
      ],
      technologies: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
      price: "Fra 12.000 kr",
      gradient: "from-beige-dark to-secondary",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce",
      description: "Online butikker der sælger døgnet rundt",
      features: [
        "Produktkatalog og inventory",
        "Sikker checkout og betaling",
        "Ordre- og lagerstyring",
        "Kunde accounts og historik",
        "Rabatkoder og kampagner",
      ],
      technologies: ["Shopify", "Stripe", "Next.js Commerce", "Medusa"],
      price: "Fra 35.000 kr",
      gradient: "from-secondary to-primary",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Migrering & Modernisering",
      description: "Opgradér din eksisterende løsning til moderne teknologi",
      features: [
        "WordPress til Next.js migrering",
        "Legacy system modernisering",
        "Performance optimering",
        "Cloud migration (AWS/Vercel)",
        "Teknisk gæld reduktion",
      ],
      technologies: ["Next.js", "Vercel", "AWS", "Docker"],
      price: "Fra 20.000 kr",
      gradient: "from-primary to-secondary",
    },
  ];

  const additionalServices = [
    { icon: <BarChart3 />, label: "Analytics Setup" },
    { icon: <Lock />, label: "Sikkerhed & GDPR" },
    { icon: <Smartphone />, label: "Mobile Apps" },
    { icon: <GitBranch />, label: "DevOps & CI/CD" },
    { icon: <Layers />, label: "Microservices" },
    { icon: <Settings />, label: "Maintenance" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Inkluderer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Teknologi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-beige rounded-full text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <span className="text-lg font-semibold text-foreground">
                    {service.price}
                  </span>
                  <Button asChild variant="outline">
                    <Link href="/kontakt">Få et tilbud</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
            Andre services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="inline-flex p-2 bg-beige rounded-full text-primary mb-2 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <p className="text-xs font-medium text-foreground">
                    {service.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ikke sikker på hvad du har brug for?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book en gratis konsultation, hvor vi sammen finder den bedste løsning
            til netop dine behov og budget.
          </p>
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/kontakt">Book gratis konsultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}