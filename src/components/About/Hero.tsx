
import { aboutHeroContent } from "./aboutContent";

import EyeBrew from "../SharedComponent/EyeBrew";

export default function Hero() {

  return (
    <section className="relative py-0! mt-15 md:mt-[69px] overflow-hidden border-b border-border">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />
     <div className="container relative z-10 md:min-h-[40vh] py-24 md:py-32 content-space">
    <EyeBrew text={aboutHeroContent.highlight} />
    <h1 className="text-display text-foreground max-w-3xl">
      {aboutHeroContent.title}
    </h1>
    <p className="text-body-large text-muted-foreground max-w-xl">
      {aboutHeroContent.description}
    </p>
  </div>
</section>
  );
}
