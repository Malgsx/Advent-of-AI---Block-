"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";

const events = [
  {
    title: "Grand Light Parade",
    description:
      "A spectacular procession of illuminated floats, dancers, and live music winding through the festival grounds.",
    date: "Dec 20",
    time: "7:00 PM",
    location: "Main Avenue",
    featured: true,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Santa's Workshop Tour",
    description:
      "Go behind the scenes to see where the magic happens! Watch elves craft toys and meet Santa himself.",
    date: "Dec 14-24",
    time: "10 AM - 8 PM",
    location: "North Pole Village",
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "Winter Solstice Concert",
    description:
      "Celebrate the longest night with a magical outdoor symphony under the stars and northern lights show.",
    date: "Dec 21",
    time: "8:00 PM",
    location: "Crystal Amphitheater",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Fireworks Spectacular",
    description:
      "End your evening with a breathtaking display of fireworks choreographed to holiday music.",
    date: "Weekends",
    time: "9:30 PM",
    location: "Festival Lake",
    gradient: "from-purple-500 to-pink-600",
  },
];

export function Events() {
  return (
    <section id="events" className="bg-winter-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-winter-gold">
            Don&apos;t Miss
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-winter-twilight md:text-5xl">
            Featured Events
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Special experiences that make Winterland truly magical
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={event.featured ? "md:col-span-2" : ""}
            >
              <Card className="group overflow-hidden border-none transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`relative flex min-h-[200px] items-center justify-center bg-gradient-to-br ${event.gradient} p-8 md:w-1/3`}
                  >
                    {event.featured && (
                      <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        <Star className="h-3 w-3" />
                        Featured
                      </div>
                    )}
                    <span className="text-2xl font-bold text-white md:text-3xl">
                      {event.date}
                    </span>
                  </div>
                  <CardContent className="flex flex-1 flex-col justify-center bg-white p-8">
                    <h3 className="mb-2 font-display text-2xl font-semibold text-winter-twilight">
                      {event.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-winter-gold" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-winter-gold" />
                        {event.location}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
