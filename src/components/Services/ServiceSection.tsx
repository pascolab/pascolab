"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import CategoryItem from "./CategoryItem";
import type { ServicePageSection } from "@/types/service";

type ServiceSectionProps = {
  section: ServicePageSection;
  isLast?: boolean;
};

export default function ServiceSection({ section, isLast }: ServiceSectionProps) {
  return (
    <section
      id={section.id}
      className={`py-0! ${isLast ? "" : "border-b border-border"}`}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row">
          {/* Left panel (desktop) */}
          <div className="hidden md:block md:w-[50%]">
            <div className="flex flex-col justify-between h-full pr-8 lg:pr-12 py-18  border-b md:border-b-0 ">
              {/* Heading / icon — sticks to top while the section scrolls */}
              <div className="md:sticky md:top-25 content-space self-start">
                <Icon
                  icon={section.icon}
                  width={48}
                  height={48}
                  className="text-primary"
                />
                <div className="flex flex-col gap-4">
                  <h2>{section.title}</h2>
                  <p className="text-muted-foreground max-w-md">
                    {section.subtitle}
                  </p>
                </div>
              {/* CTA — sticks near bottom */}
              <div >
                <Link
                  href={`/services/${section.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-200 group"
                >
                  {section.listingCtaLabel}
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
              </div>

            </div>
          </div>

          {/* Right panel */}
          <div className="md:w-[50%] pl-0 md:pl-8 lg:pl-12 py-16 md:py-20 md:pb-64">
            {/* Mobile-only: show left content above the list */}
            <div className="block md:hidden! content-space mb-10">
              <Icon
                icon={section.icon}
                width={48}
                height={48}
                className="text-primary"
              />
              <h2>{section.title}</h2>
              <p className="text-muted-foreground max-w-md">{section.subtitle}</p>
              <Link
                href={`/services/${section.id}`}
                className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-200 group"
              >
                {section.listingCtaLabel}
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {section.whatWeDo.map((cat, idx) => (
              <CategoryItem
                key={cat.id}
                category={cat}
                isFirst={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
