import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winterland Festival 2024 ❄️",
  description:
    "Experience the magic of winter with enchanting lights, delicious treats, live entertainment, and unforgettable memories. December 14-24, 2024.",
  keywords: ["winter festival", "christmas", "holiday", "family events", "lights"],
  openGraph: {
    title: "Winterland Festival 2024",
    description: "Experience the magic of winter with enchanting lights and unforgettable memories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
