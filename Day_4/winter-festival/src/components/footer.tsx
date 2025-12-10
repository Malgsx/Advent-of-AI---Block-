import Link from "next/link";
import { Snowflake, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#events", label: "Events" },
  { href: "#schedule", label: "Schedule" },
  { href: "#tickets", label: "Tickets" },
];

const infoLinks = [
  { href: "#", label: "FAQ" },
  { href: "#", label: "Directions" },
  { href: "#", label: "Accessibility" },
  { href: "#", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-winter-midnight py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="#home"
              className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white"
            >
              <Snowflake className="h-6 w-6 text-winter-frost" />
              Winterland Festival
            </Link>
            <p className="mb-6 text-sm">
              Creating magical winter memories since 2010. Join us for an
              unforgettable holiday experience.
            </p>
            <div className="flex gap-4">
              {["📘", "📷", "🐦", "📺"].map((emoji, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-2xl transition-transform hover:scale-125"
                >
                  {emoji}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-winter-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">
              Information
            </h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-winter-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-winter-gold" />
                123 Snowflake Lane
                <br />
                Winter Valley, WV 12345
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-winter-gold" />
                (555) 123-SNOW
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-winter-gold" />
                hello@winterlandfest.com
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>&copy; 2024 Winterland Festival. All rights reserved.</p>
          <p>Made with ❄️ and holiday cheer</p>
        </div>
      </div>
    </footer>
  );
}
