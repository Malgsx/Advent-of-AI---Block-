"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  TreePine,
  Gift,
  Music,
  Cookie,
  Snowflake,
  ShoppingBag,
} from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Festive Decorations",
    description:
      "Marvel at over 100,000 twinkling lights and breathtaking displays throughout our enchanted grounds.",
  },
  {
    icon: Snowflake,
    title: "Meet Santa",
    description:
      "Visit Santa's cozy cottage for photos, hot cocoa, and a chance to share your Christmas wishes.",
  },
  {
    icon: Gift,
    title: "Ice Skating",
    description:
      "Glide across our outdoor rink surrounded by towering evergreens and sparkling lights.",
  },
  {
    icon: Cookie,
    title: "Holiday Treats",
    description:
      "Indulge in warm cider, fresh-baked cookies, gourmet s'mores, and other seasonal delights.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description:
      "Enjoy carolers, live bands, theatrical performances, and special holiday shows every night.",
  },
  {
    icon: ShoppingBag,
    title: "Artisan Market",
    description:
      "Shop unique handcrafted gifts from local artisans in our charming winter village market.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-winter-snow py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-winter-gold">
            Welcome to
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-winter-twilight md:text-5xl">
            A Winter Wonderland
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Step into a magical world where winter dreams come true
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-none bg-white transition-all hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-winter-twilight/10 text-winter-twilight transition-colors group-hover:bg-winter-gold group-hover:text-winter-midnight">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-winter-twilight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
