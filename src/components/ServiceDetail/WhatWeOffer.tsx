"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServicePageSection } from "@/types/service";

type WhatWeOfferProps = {
  section: ServicePageSection;
};

export default function WhatWeOffer({ section }: WhatWeOfferProps) {
  const [activeTab, setActiveTab] = useState(section.offerTabs[0]?.id ?? "");
  const selected = section.offerTabs.find((tab) => tab.id === activeTab) ?? section.offerTabs[0];

  return (
    <section id="what-we-offer">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            What We Offer
          </p>
          <h2 className="max-w-3xl">Unlock delivery momentum with focused service tracks</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-16">
          <div className="flex gap-3 overflow-x-auto lg:flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {section.offerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors lg:rounded-2xl lg:px-5 lg:py-4 lg:text-left",
                  selected?.id === tab.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="space-y-6">
              {selected?.items.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(index !== selected.items.length - 1 && "border-b border-border pb-6")}
                >
                  <div className="content-space">
                    <h3>{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
