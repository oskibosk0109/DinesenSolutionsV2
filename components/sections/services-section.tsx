"use client";

import { BentoGrid, BentoGridItem } from "@/components/magicui/bento-grid";
import {
  Code2,
  Globe,
  Palette,
  Rocket,
  Shield,
  Cpu,
  Database,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Webapplikationer",
      description: "Komplekse dashboards, kundeportaler og interne værktøjer bygget med Next.js",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      className: "md:col-span-2",
      header: (
        <div className="flex h-32 w-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
      ),
    },
    {
      title: "Hjemmesider",
      description: "Professionelle virksomhedssider der konverterer besøgende til kunder",
      icon: <Globe className="h-8 w-8 text-secondary" />,
      className: "md:col-span-1",
      header: (
        <div className="flex h-32 w-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg" />
      ),
    },
    {
      title: "AI-integration",
      description: "ChatGPT og andre AI-værktøjer integreret direkte i din løsning",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      className: "md:col-span-1",
      header: (
        <div className="flex h-32 w-full bg-gradient-to-br from-primary/30 to-beige rounded-lg" />
      ),
    },
    {
      title: "API & Integrationer",
      description: "Forbind dine systemer og automatiser arbejdsgange",
      icon: <Database className="h-8 w-8 text-secondary" />,
      className: "md:col-span-2",
      header: (
        <div className="flex h-32 w-full bg-gradient-to-br from-beige to-secondary/20 rounded-lg" />
      ),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/30 via-transparent to-white pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mine{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fra simple hjemmesider til komplekse webapplikationer -
            alt bygget med moderne teknologi og fokus på resultater
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="mx-auto max-w-5xl">
            {services.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: <Rocket className="h-6 w-6" />, label: "Hurtig levering" },
            { icon: <Shield className="h-6 w-6" />, label: "Sikker kode" },
            { icon: <Palette className="h-6 w-6" />, label: "Moderne design" },
            { icon: <Cpu className="h-6 w-6" />, label: "AI-optimeret" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex p-3 bg-beige rounded-full text-primary mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <p className="text-sm font-medium text-foreground">
                {feature.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}