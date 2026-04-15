import Link from "next/link";

import { closingCtaContent } from "./aboutContent";
import CTA from "@/components/Common/CTA";

export default function AboutCta() {
  const {
    title,
    paragraphs,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
  } = closingCtaContent;

  return (
    <section className="overflow-hidden relative">
      <div className="container mx-auto">
        <div className="rounded-lg bg-foreground px-4 py-8 md:px-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center content-space">
            <h2 className="text-background">
              {title}
            </h2>
            <p className="text-muted">
              {paragraphs.map((p) => (
                <p key={p} className="text-muted-foreground">
                  {p}
                </p>
              ))}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-5 pt-8 md:pt-2">
              <CTA
                label={`${primaryCtaLabel} →`}
                href={primaryCtaHref}
                className="hover:bg-white! dark:hover:bg-transparent"
              />
              <Link
                href={secondaryCtaHref}
                className="text-sm md:text-base font-semibold tracking-wide text-background/90 hover:text-background  transition-colors duration-200"
              >
                {secondaryCtaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

