import { Snowfall } from "@/components/snowfall";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Highlights } from "@/components/highlights";
import { Events } from "@/components/events";
import { Schedule } from "@/components/schedule";
import { Tickets } from "@/components/tickets";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Snowfall />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Events />
        <Schedule />
        <Tickets />
        <Countdown />
      </main>
      <Footer />
    </>
  );
}
