import CTA from "@/components/Common/CTA";
import Image from "next/image";

import {
  aboutPartnersContent,
  partnerGridBrands,
} from "./aboutContent";

export default function AboutPartners() {
  const { title, description, ctaLabel, ctaHref } = aboutPartnersContent;

  return (
    <section
      className="bg-linear-to-br from-[#0e2a35] to-[#07151b] py-16 text-white overflow-hidden"
      aria-labelledby="about-partners-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="about-partners-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>
            <div className="mt-8">
              <CTA
                label={ctaLabel}
                href={ctaHref}
                size="lg"
                className="text-white! hover:bg-primary/90! hover:text-white! dark:hover:bg-primary/90! dark:hover:text-white!"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {partnerGridBrands.map((brand, index) => (
              <div
                key={`${brand.alt}-${index}`}
                className="flex aspect-5/3 items-center justify-center rounded-xl border border-white/10 bg-white p-4 shadow-sm"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                  className="h-auto max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
