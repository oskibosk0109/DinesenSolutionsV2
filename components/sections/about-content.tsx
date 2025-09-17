"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Heart,
  Rocket,
  Code,
  Users,
  Brain,
  Trophy
} from "lucide-react";

export default function AboutContent() {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Altid på udkig efter bedre måder at løse problemer på",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Fokus",
      description: "Koncentreret indsats på det der virkelig betyder noget",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Brænder for at skabe løsninger der gør en forskel",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Hastighed",
      description: "Hurtig levering uden at gå på kompromis med kvalitet",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "AI-integration",
      description: "Begyndte at integrere AI-værktøjer i udviklingsprocessen",
    },
    {
      year: "2023",
      title: "Specialisering",
      description: "Fokuserede på Next.js og moderne web-teknologier",
    },
    {
      year: "2022",
      title: "Opstart",
      description: "Startede Dinesen Solutions med vision om bedre webløsninger",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              En{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                anderledes tilgang
              </span>{" "}
              til webudvikling
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dinesen Solutions er født ud af en frustration over de traditionelle
                udviklingshuses langsomme processer og høje priser. Som enkeltmandsvirksomhed
                kan jeg tilbyde en helt anderledes oplevelse.
              </p>
              <p>
                Ved at kombinere solid erfaring med de nyeste AI-værktøjer, kan jeg
                levere løsninger der tidligere krævede hele udviklingsteams - men til
                en brøkdel af prisen og tiden.
              </p>
              <p>
                Mit fokus er simpelt: At bygge webløsninger der faktisk virker,
                leveret hurtigt og til en fair pris. Ingen unødvendig kompleksitet,
                ingen skjulte omkostninger, bare resultater.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: <Code />, label: "500+", desc: "Projekter leveret" },
              { icon: <Users />, label: "98%", desc: "Tilfredse kunder" },
              { icon: <Brain />, label: "100%", desc: "AI-optimeret" },
              { icon: <Trophy />, label: "2-4 uger", desc: "Gennemsnit levering" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 bg-beige rounded-full text-primary mb-3">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Mine værdier
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full text-primary mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
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
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Rejsen indtil nu
          </h3>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 mb-8"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-primary font-bold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-16 bg-primary/20" />
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}