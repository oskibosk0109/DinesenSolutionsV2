"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/5 via-beige to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <AnimatedGradientText className="mx-auto mb-6">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>Lad os tale sammen</span>
          </AnimatedGradientText>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Start dit projekt{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              i dag
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Book en gratis og uforpligtende konsultation, eller send mig en besked
            om dit projekt. Jeg svarer typisk inden for 2-4 timer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="secondary" className="p-4 w-full">
                <Clock className="mr-2 h-4 w-4" />
                2-4 timers respons
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="p-4 w-full">
                <Phone className="mr-2 h-4 w-4" />
                Direkte kontakt
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge variant="secondary" className="p-4 w-full">
                <Mail className="mr-2 h-4 w-4" />
                Uforpligtende
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}