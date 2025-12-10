"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Ticket } from "lucide-react";

const tickets = [
  {
    name: "Day Pass",
    price: 35,
    period: "/person",
    features: [
      { text: "Full day access", included: true },
      { text: "All attractions included", included: true },
      { text: "Live entertainment", included: true },
      { text: "Free parking", included: true },
      { text: "Ice skating", included: false },
      { text: "Santa photos", included: false },
    ],
    popular: false,
  },
  {
    name: "Magic Pass",
    price: 55,
    period: "/person",
    features: [
      { text: "Full day access", included: true },
      { text: "All attractions included", included: true },
      { text: "Live entertainment", included: true },
      { text: "Free parking", included: true },
      { text: "Ice skating session", included: true },
      { text: "Santa photo package", included: true },
    ],
    popular: true,
  },
  {
    name: "Family Pack",
    price: 175,
    period: "/4 guests",
    features: [
      { text: "4 Magic Passes", included: true },
      { text: "Priority entry", included: true },
      { text: "Reserved seating", included: true },
      { text: "Free parking", included: true },
      { text: "$20 food credit", included: true },
      { text: "Souvenir ornament", included: true },
    ],
    popular: false,
  },
];

export function Tickets() {
  return (
    <section
      id="tickets"
      className="bg-gradient-to-b from-winter-twilight to-winter-midnight py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-winter-gold">
            Get Your
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Festival Tickets
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Choose the perfect experience for you
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={ticket.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`relative h-full border-none bg-white transition-all hover:-translate-y-2 hover:shadow-2xl ${
                  ticket.popular ? "ring-4 ring-winter-gold" : ""
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-winter-gold px-4 py-1 text-xs font-bold text-winter-midnight">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-display text-2xl text-winter-twilight">
                    {ticket.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="align-top text-xl text-gray-500">$</span>
                    <span className="font-display text-5xl font-bold text-winter-twilight">
                      {ticket.price}
                    </span>
                    <span className="text-sm text-gray-500">{ticket.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-8 space-y-3">
                    {ticket.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center gap-2 text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-gray-300" />
                        )}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={ticket.popular ? "default" : "outline"}
                  >
                    <Ticket className="h-4 w-4" />
                    Select Pass
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl bg-winter-gold/20 p-6 text-center"
        >
          <p className="text-white">
            🎁{" "}
            <strong>Early Bird Special:</strong> Book before December 10th and
            save 15% with code{" "}
            <span className="rounded bg-winter-gold px-2 py-1 font-mono font-bold text-winter-midnight">
              WINTER15
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
