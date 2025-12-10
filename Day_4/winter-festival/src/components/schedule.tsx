"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scheduleData = {
  weekday: [
    { time: "4:00 PM", title: "Gates Open", description: "Begin your winter adventure" },
    { time: "4:30 PM", title: "Tree Lighting Ceremony", description: "Watch our 50-foot tree come alive" },
    { time: "5:00 PM", title: "Carolers Begin", description: "Strolling musicians throughout the grounds" },
    { time: "6:00 PM", title: "Ice Skating Show", description: "Professional skaters perform holiday routines" },
    { time: "7:00 PM", title: "Story Time with Mrs. Claus", description: "Classic holiday tales by the fire" },
    { time: "8:00 PM", title: "Live Music Stage", description: "Local bands playing holiday favorites" },
    { time: "10:00 PM", title: "Festival Closes", description: "See you tomorrow!" },
  ],
  weekend: [
    { time: "2:00 PM", title: "Early Entry Opens", description: "Extra time for families" },
    { time: "3:00 PM", title: "Cookie Decorating Workshop", description: "Create your own holiday treats" },
    { time: "4:30 PM", title: "Tree Lighting Ceremony", description: "Watch our 50-foot tree come alive" },
    { time: "5:30 PM", title: "Children's Parade", description: "Little ones march with lanterns" },
    { time: "7:00 PM", title: "Main Stage Performance", description: "Special guest performers" },
    { time: "9:30 PM", title: "Fireworks Spectacular", description: "End the night with magic in the sky" },
    { time: "11:00 PM", title: "Festival Closes", description: "Sweet dreams!" },
  ],
  christmas: [
    { time: "12:00 PM", title: "Christmas Eve Opening", description: "Special extended hours", special: true },
    { time: "2:00 PM", title: "Santa's Final Visit", description: "Last chance for photos with Santa", special: true },
    { time: "4:00 PM", title: "Community Sing-Along", description: "Everyone joins in holiday classics", special: true },
    { time: "5:30 PM", title: "Candlelight Procession", description: "A beautiful walk through the lights", special: true },
    { time: "7:00 PM", title: "Grand Finale Show", description: "Our biggest spectacle of the season", special: true },
    { time: "8:00 PM", title: "Festival Closes", description: "Merry Christmas to all!", special: true },
  ],
};

export function Schedule() {
  return (
    <section
      id="schedule"
      className="bg-gradient-to-b from-winter-midnight to-winter-twilight py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-winter-gold">
            Plan Your Visit
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Daily Schedule
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Something magical happening every hour
          </p>
        </motion.div>

        <Tabs defaultValue="weekday" className="w-full">
          <TabsList className="mx-auto mb-8 flex w-fit">
            <TabsTrigger value="weekday">Weekdays</TabsTrigger>
            <TabsTrigger value="weekend">Weekends</TabsTrigger>
            <TabsTrigger value="christmas">Christmas Eve</TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex gap-6 rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:translate-x-2 hover:bg-white/15 ${
                      "special" in item && item.special ? "border-l-4 border-winter-gold" : ""
                    }`}
                  >
                    <div className="min-w-[100px] font-display text-lg font-bold text-winter-gold">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
