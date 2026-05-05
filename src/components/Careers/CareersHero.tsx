import CTA from "../Common/CTA";
import { careersData } from "@/app/api/data";


export default function CareersHero() {
  return (
    <section className="relative py-0!">
       <div className="container relative z-10 min-h-[70vh] py-24 md:py-32 content-space">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-small font-medium tracking-widest text-primary uppercase">
          {careersData.hero.eyebrow}
        </span>
      </div>
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