"use client";

import { motion } from "framer-motion";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Zap } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-beige to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <AnimatedGradientText className="mx-auto mb-6">
            <Zap className="mr-2 h-4 w-4" />
            <span>Moderne teknologi • AI-optimeret</span>
          </AnimatedGradientText>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Services &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Løsninger
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Fra simple hjemmesider til avancerede webapplikationer.
            Alt bygget med fokus på hastighed, kvalitet og brugervenlighed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}