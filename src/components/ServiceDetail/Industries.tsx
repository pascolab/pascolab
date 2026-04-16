"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServicePageSection } from "@/types/service";

type IndustriesProps = {
  section: ServicePageSection;
};

export default function Industries({ section }: IndustriesProps) {
  const [activeTab, setActiveTab] = useState(section.industries[0]?.id ?? "");
  const selected =
    section.industries.find((industry) => industry.id === activeTab) ?? section.industries[0];

  return (
    <section id="industries">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Industries
          </p>
          <h2 className="max-w-3xl">Find use cases and delivery patterns relevant to your industry</h2>
        </div>

        <div className="content-space">
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {section.industries.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveTab(industry.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  selected?.id === industry.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {industry.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <p className="text-muted-foreground">{selected?.description}</p>

              <ul className="space-y-3">
                {selected?.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-[2px] bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
