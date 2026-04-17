"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServicePageSection } from "@/types/service";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type WhatWeOfferProps = {
  section: ServicePageSection;
};

export default function WhatWeOffer({ section }: WhatWeOfferProps) {
  const [activeTab, setActiveTab] = useState(section.offerTabs[0]?.id ?? "");
  const selected = section.offerTabs.find((tab) => tab.id === activeTab) ?? section.offerTabs[0];

  return (
     <section id="what-we-offer" className="bg-linear-to-l from-background/20  via-primary/10  to-background/40  dark:from-background/10  dark:via-primary/5  dark:to-background/40">
      <div className="container">
        <div className="content-space ">

          {/* Section heading */}
          <div className="content-space">
            <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
              What We Offer
            </p>
            <h2 className="max-w-3xl text-foreground">
              Unlock delivery momentum with focused service tracks
            </h2>
          </div>

          {/* Tab buttons — top */}
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {section.offerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  selected?.id === tab.id
                    ? "border-primary bg-primary text-white"
                    : " text-muted-foreground/90 border-primary hover:text-muted-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards grid — bottom */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selected?.items.map((item) => (
              <Card
                key={item.title}
                className=" min-h-70 dark:ring-0  dark:shadow-none flex rounded-lg flex-col justify-between"
              >
                <CardHeader className="px-0">
                  <CardTitle>
                  <h3 className="">
                  {item.title}
                </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                <p className=" text-muted-foreground">
                  {item.description}
                </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
