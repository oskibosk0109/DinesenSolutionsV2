"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Home, Search, ArrowLeft, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige via-white to-primary/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="p-8 md:p-12 text-center shadow-2xl">
          <AnimatedGradientText className="mx-auto mb-6">
            <Compass className="mr-2 h-4 w-4" />
            <span>Ups! Siden findes ikke</span>
          </AnimatedGradientText>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-foreground mb-4"
          >
            Vi kan ikke finde siden du leder efter
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            Det ser ud til at siden er blevet flyttet, slettet eller måske har du tastet en forkert URL.
            Ingen panik - lad os få dig tilbage på rette spor!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Gå til forsiden
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kontakt">
                <Search className="mr-2 h-4 w-4" />
                Kontakt os
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Populære sider du måske leder efter:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { href: "/services", label: "Services" },
                { href: "/om-os", label: "Om os" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:underline text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-muted-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Gå tilbage
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}