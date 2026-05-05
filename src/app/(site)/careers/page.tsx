import { Metadata } from "next";
import CareersHero from "@/components/Careers/CareersHero";
import OurCulture from "@/components/Careers/OurCulture";
import HowWeWork from "@/components/Careers/HowWeWork";
import WhatWeLookFor from "@/components/Careers/WhatWeLookFor";
import OpenRoles from "@/components/Careers/OpenRoles";
import CareersQoute from "@/components/Careers/CareersQoute";
import CareersCta from "@/components/Careers/CareersCta";

export const metadata: Metadata = {
  title: "Careers | Pascolab",
  description: "Join us at Pascolab and build the kind of work you'd be proud to put your name on.",
};

export default function CareersPage() {
  return (
    <article>
      <CareersHero />
      <OurCulture />
      <HowWeWork />
      <WhatWeLookFor />
      <OpenRoles />
      {/* <CareersQoute /> */}
      <CareersCta />
    </article>
  );
}
