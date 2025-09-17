"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Clock, DollarSign, Users, Zap, Code } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI-drevet udvikling",
      description: "Jeg bruger de nyeste AI-værktøjer til at arbejde hurtigere og smartere, hvilket betyder bedre kvalitet på kortere tid.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "30-50% billigere",
      description: "Som enkeltmandsvirksomhed har jeg minimale omkostninger - den besparelse går direkte videre til dig.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "2-4 ugers levering",
      description: "Ingen lange møderækker eller bureaukrati. Vi går direkte til sagen og leverer hurtigt.",
      gradient: "from-primary to-beige-dark",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Personlig service",
      description: "Du arbejder direkte med mig - ingen mellemled, ingen misforståelser, bare klar kommunikation.",
      gradient: "from-beige-dark to-secondary",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Agil tilgang",
      description: "Hurtige iterationer og løbende feedback betyder, at vi altid rammer plet med løsningen.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Moderne teknologi",
      description: "Next.js, React og TypeScript - kun det bedste og mest fremtidssikrede tech stack.",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hvorfor{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dinesen Solutions?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jeg er ikke et stort udviklingshus - og det er faktisk en fordel for dig
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group">
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${benefit.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
            <p className="text-2xl font-semibold text-foreground mb-2">
              &ldquo;Jeg bygger det, som de store bureauer ville sætte 5 mennesker på&rdquo;
            </p>
            <p className="text-muted-foreground">
              - Men hurtigere, billigere og ofte bedre
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}