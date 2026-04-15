
import Stats from "@/components/SharedComponent/Stats";
import { Metadata } from "next";
import HowItStartedAndTheProcessWeFollow from "@/components/About/HowItStartedAndTheProcessWeFollow";
import WhoWeAre from "@/components/About/WhoWeAre";
import Hero from "@/components/About/Hero";
import HowWeWork from "@/components/About/HowWeWork";

export const metadata: Metadata = {
  title: "About | Pascolab",
};

export default function AboutUsPage() {
  return (
    <section className="overflow-hidden">
      <Hero />
      <Stats />
      <WhoWeAre />
      <HowItStartedAndTheProcessWeFollow />
      <HowWeWork />
    </section>
  );
}
