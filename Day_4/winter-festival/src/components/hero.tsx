"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-winter-midnight via-winter-twilight to-[#1e3a5f] px-6 py-20 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(232,197,71,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(186,230,253,0.1)_0%,transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-winter-gold/20 px-4 py-2 text-sm font-medium uppercase tracking-widest text-winter-gold"
        >
          <Calendar className="h-4 w-4" />
          December 14-24, 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 font-display text-5xl font-bold text-white md:text-7xl lg:text-8xl"
        >
          Winterland
          <span className="block text-winter-gold drop-shadow-[0_0_40px_rgba(232,197,71,0.5)]">
            Festival
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Experience the magic of winter with enchanting lights, delicious treats,
          live entertainment, and unforgettable memories for the whole family.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="#tickets">
              <Sparkles className="h-5 w-5" />
              Get Your Tickets
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#highlights">
              <Lightbulb className="h-5 w-5" />
              Explore Highlights
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-12 md:gap-16"
        >
          {[
            { value: "50+", label: "Attractions" },
            { value: "100K", label: "Lights" },
            { value: "11", label: "Days" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-white"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-500 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-winter-gold"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
