"use client";

import CTA from "@/components/Common/CTA";
import type { ServicePageSection } from "@/types/service";
import EyeBrew from "../SharedComponent/EyeBrew";

type DetailHeroProps = {
  section: ServicePageSection;
};

export default function DetailHero({ section }: DetailHeroProps) {
  return (
    <section className="relative py-0! mt-15 md:mt-[69px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />

      <div className="container relative z-10 flex min-h-[70vh] items-center py-24 md:py-32">
        <div className="max-w-4xl content-space">
          <EyeBrew text={section.eyebrow} />
          <h1 className="max-w-4xl text-display text-foreground">{section.heroTitle}</h1>

          <p className="max-w-3xl text-body-large text-muted-foreground/90">
            {section.heroSubtitle}
          </p>

          <div className="pt-2">
            <CTA label={section.ctaLabel} href={section.ctaHref} />
          </div>
        </div>
      </div>
    </section>
  );
}
