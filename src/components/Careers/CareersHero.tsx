import CTA from "../Common/CTA";
import { careersData } from "@/app/api/data";
import EyeBrew from "../SharedComponent/EyeBrew";


export default function CareersHero() {
  return (
    <section className="relative py-0! mt-15 md:mt-[69px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />
       <div className="container relative z-10 md:min-h-[70vh] py-24 md:py-32 content-space">
      <EyeBrew text={careersData.hero.eyebrow} />
      <h1 className="text-display text-foreground max-w-3xl">
         {careersData.hero.title[0]}{" "}
        <em className="not-italic text-primary">{careersData.hero.title[1]}</em> {careersData.hero.title[2]}
      </h1>
      <p className="text-body-large text-muted-foreground max-w-xl">
        {careersData.hero.subtitle}
      </p>

      <CTA label="Get in touch" href="/contact" size="lg" className="w-fit" />
    </div>
  </section>
  );
};