"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#events", label: "Events" },
  { href: "#schedule", label: "Schedule" },
  { href: "#tickets", label: "Tickets" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-winter-twilight/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-bold text-white"
        >
          <Snowflake className="h-7 w-7 animate-float text-winter-frost" />
          <span>Winterland</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/90 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-winter-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link href="#tickets">Get Tickets</Link>
          </Button>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-winter-midnight/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-4" asChild>
              <Link href="#tickets">Get Tickets</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
