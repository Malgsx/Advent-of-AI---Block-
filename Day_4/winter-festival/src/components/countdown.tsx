"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const festivalDate = new Date("2024-12-14T16:00:00");
  const now = new Date();
  const diff = festivalDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useQuery({
    queryKey: ["countdown"],
    queryFn: () => calculateTimeLeft(),
    refetchInterval: 1000,
    enabled: mounted,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="bg-winter-twilight py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-display text-2xl font-semibold text-white">
          Festival Opens In
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[80px] rounded-xl bg-white/10 px-6 py-4 backdrop-blur-sm md:min-w-[100px] md:px-8 md:py-6"
            >
              <div className="font-display text-3xl font-bold text-winter-gold md:text-5xl">
                {mounted ? String(unit.value).padStart(2, "0") : "00"}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-300 md:text-sm">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
