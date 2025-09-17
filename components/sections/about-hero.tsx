"use client";

import { motion } from "framer-motion";
import SparklesText from "@/components/magicui/sparkles-text";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-beige via-white to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Om{" "}
            <SparklesText sparklesCount={2}>Dinesen Solutions</SparklesText>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            En enkeltmandsvirksomhed med fokus på at levere moderne webløsninger
            uden det store bureaukrati
          </p>
        </motion.div>
      </div>
    </section>
  );
}