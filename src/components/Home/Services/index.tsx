"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { servicesPageData } from "@/app/api/data";

// Colour accent per service id — extend as more sections are added to servicesPageData
const sectionAccents: Record<string, string> = {
  "ai-data-innovation":  "text-primary",
  "cloud-infrastructure": "text-sky-500",
};

const Services = () => (
  <section>
    <div className="container">

      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
        <div className="content-space">
          <p className="text-primary text-body-large font-medium">What We Do</p>
          <h2>Our services</h2>
        </div>
        <Button
          asChild
          variant="outline"
          className="shrink-0 rounded-full h-auto py-2.5 px-5 font-normal"
        >
          <Link href="/services">View all services</Link>
        </Button>
      </div>

      {/* Grid — fixed card height, no reflow on hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {servicesPageData.map((service) => {
          const color = sectionAccents[service.id] ?? "text-primary";

          return (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col h-72 overflow-hidden rounded-2xl
                         border border-border bg-card
                         transition-colors duration-300 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="flex flex-1 items-center justify-center">
                <Icon icon={service.icon} width={76} height={76} className={color} />
              </div>

              {/* Title */}
              <div className="px-5 pb-5">
                <p className="text-lg font-semibold leading-snug text-foreground">
                  {service.title}
                </p>
              </div>

              {/* Categories panel — hidden below card bottom, slides up on hover */}
              <div
                className="absolute inset-x-0 bottom-0 bg-card border-t border-border p-5
                           translate-y-full group-hover:translate-y-0
                           transition-transform duration-300 ease-out"
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {service.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="inline-flex items-center rounded-full border border-border
                                 bg-background px-3 py-1 text-xs text-foreground/80"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  </section>
);

export default Services;
