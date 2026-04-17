"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServicePageSection } from "@/types/service";

type ProcessAccordionProps = {
  section: ServicePageSection;
};

export default function ProcessAccordion({ section }: ProcessAccordionProps) {
  const [value, setValue] = useState(section.process[0]?.step ?? "");

  const activeIndex = section.process.findIndex((item) => item.step === value);

  return (
    <section id="process">
      <div className="container content-space">

        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Process
          </p>
          <h2 className="max-w-3xl">How we deliver {section.eyebrow.toLowerCase()}</h2>
        </div>

        <div className="grid border border-border rounded-lg overflow-hidden lg:grid-cols-[1fr_1.8fr]">

          {/* ── Left panel: step number + animated diamond stack ── */}
          <div className="hidden lg:flex flex-col gap-10 justify-between border-r border-border bg-card p-10">

            {/* Active step number */}
            <p className="text-h1 font-bold leading-none text-foreground select-none">
              {section.process[activeIndex]?.step ?? section.process[0]?.step}
            </p>

            {/* Diamond stack — flat plan-view tiles, active one highlights */}
            <div className="flex flex-col items-center py-4">
              {section.process.map((item, idx) => (
                <div
                  key={item.step}
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    zIndex: idx === activeIndex ? 10 : section.process.length - idx,
                  }}
                  className={cn(
                    "h-17 w-50 shrink-0 transition-colors duration-300",
                    idx > 0 && "-mt-5",
                    idx === activeIndex ? "bg-primary" : "bg-primary/15"
                  )}
                />
              ))}
            </div>
          </div>

          {/* ── Right panel: accordion ── */}
          <div className="p-6 md:p-8 lg:p-10">

            {/* Mobile-only: show active step number above accordion */}
            <p className="lg:hidden text-h2 font-bold mb-6 text-foreground">
              {section.process[activeIndex]?.step ?? section.process[0]?.step}
            </p>

            <Accordion
              type="single"
              collapsible
              value={value}
              onValueChange={(next) => setValue(next || value)}
            >
              {section.process.map((item) => (
                <AccordionItem
                  key={item.step}
                  value={item.step}
                  onMouseEnter={() => setValue(item.step)}
                  className="border-border"
                >
                  <AccordionTrigger className="py-5 hover:no-underline [&>svg]:hidden">
                    <div className="flex items-baseline gap-4 text-left">
                      <p className="shrink-0 text-sm font-medium tracking-[0.2em] text-muted-foreground/50 transition-colors duration-300 ease-in-out">
                        {item.step}
                      </p>
                      <h3
                        className={cn(
                          "text-h3 font-semibold transition-colors duration-300 ease-in-out",
                          value === item.step ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-[2.1rem] text-muted-foreground">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
