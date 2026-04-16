"use client";

import CTA from "@/components/Common/CTA";
import type { ServicePageSection } from "@/types/service";

type DetailHeroProps = {
  section: ServicePageSection;
};

export default function DetailHero({ section }: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-foreground py-0!">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />

      <div className="container relative z-10 flex min-h-[70vh] items-center py-24 md:py-32">
        <div className="max-w-4xl content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            {section.eyebrow}
          </p>

          <h1 className="max-w-4xl text-white">{section.heroTitle}</h1>

          <p className="max-w-3xl text-body-large text-white/80">
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
