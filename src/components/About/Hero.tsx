import Image from "next/image";

import { aboutHeroContent } from "./aboutContent";

import heroBg from "../../../public/images/hero/hero-3.svg";
import EyeBrew from "../SharedComponent/EyeBrew";
import CTA from "../Common/CTA";

export default function Hero() {
  const { highlight, title, description } = aboutHeroContent;

  return (
    <section className="relative py-0! mt-15 md:mt-[69px] overflow-hidden border-b border-border">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />
     <div className="container relative z-10 md:min-h-[40vh] py-24 md:py-32 content-space">
    <EyeBrew text={highlight} />
    <h1 className="text-display text-foreground max-w-3xl">
      {title}
    </h1>
    <p className="text-body-large text-muted-foreground max-w-xl">
      {description}
    </p>

    {/* <CTA label="View About Us" href="/about-us" size="lg" className="w-fit" /> */}
  </div>
</section>
  );
}
