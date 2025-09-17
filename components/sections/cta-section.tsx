"use client";

import { Button } from "@/components/ui/button";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-beige to-secondary/5 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <AnimatedGradientText className="mx-auto mb-6">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Ledige tider nu</span>
          </AnimatedGradientText>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Klar til at{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              komme i gang?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Book en gratis og uforpligtende konsultation, hvor vi kan tale om
            dine behov og hvordan jeg kan hjælpe dig. Ingen salgsgas - bare en
            ærlig snak om mulighederne.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <Link href="/kontakt">
                Book gratis konsultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 border-2"
            >
              <Link href="mailto:kontakt@dinesensolutions.dk">
                Send en email i stedet
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Typisk svar inden for 2-4 timer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Ledige projekter nu</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}