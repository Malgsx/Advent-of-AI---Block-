"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BookOpen, Coffee, MapPin, Clock } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    emoji: "🔮",
    title: "Mystical Fortune Telling",
    description:
      "Step into Madame Aurora's enchanted tent and discover what the winter stars have in store for you. Our gifted fortune tellers use crystal balls, tarot cards, and tea leaf readings to reveal glimpses of your future.",
    location: "Mystic Grove",
    time: "5PM - 9PM Daily",
  },
  {
    icon: BookOpen,
    emoji: "📖",
    title: "Fireside Storytelling",
    description:
      "Gather around crackling firepits as master storytellers weave tales of winter magic, ancient legends, and heartwarming holiday stories. Perfect for all ages, with special sessions for little ones.",
    location: "Ember Circle",
    time: "6PM & 8PM Shows",
  },
  {
    icon: Coffee,
    emoji: "☕",
    title: "Artisan Hot Cocoa Bar",
    description:
      "Warm your soul at our gourmet cocoa station featuring house-made Belgian chocolate, fresh whipped cream, and over 20 toppings including marshmallows, caramel drizzle, and peppermint dust.",
    location: "Cocoa Corner",
    time: "All Day",
  },
];

export function Highlights() {
  return (
    <section
      id="highlights"
      className="bg-gradient-to-b from-winter-twilight to-winter-midnight py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-winter-gold">
            This Year&apos;s
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Special Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Three enchanting experiences you won&apos;t want to miss
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="group h-full border-none bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6 text-6xl">{highlight.emoji}</div>
                  <h3 className="mb-4 font-display text-2xl font-semibold text-white">
                    {highlight.title}
                  </h3>
                  <p className="mb-6 text-gray-300">{highlight.description}</p>
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 text-winter-gold" />
                      {highlight.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-winter-gold" />
                      {highlight.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
