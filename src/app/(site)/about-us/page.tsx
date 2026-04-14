
import Stats from "@/components/SharedComponent/Stats";
import { Metadata } from "next";
import MissionVision from "@/components/About/MissionVision";
import Story from "@/components/About/Story";
import WhatWeStandFor from "@/components/About/WhatWeStandFor";
import Hero from "@/components/About/Hero";
import Industries from "@/components/About/Industries";
import AboutCta from "@/components/About/AboutCta";
import RemoteFirst from "@/components/About/RemoteFirst";
import HowWeWork from "@/components/About/HowWeWork";

export const metadata: Metadata = {
  title: "About | Pascolab",
};

export default function AboutUsPage() {
  return (
    <section className="overflow-hidden">
      <Hero />
      <Stats />
      <Story />
      <MissionVision />
      <WhatWeStandFor />
      <HowWeWork />
      <Industries />
      <RemoteFirst />
      <AboutCta />
    </section>
  );
}
