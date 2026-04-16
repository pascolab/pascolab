"use client";

import { useMemo, useState } from "react";
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
  const [value, setValue] = useState(section.process[1]?.step ?? section.process[0]?.step ?? "");
  const activeStep = useMemo(
    () => section.process.find((item) => item.step === value) ?? section.process[0],
    [section.process, value]
  );

  return (
    <section id="process">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Process
          </p>
          <h2 className="max-w-3xl">How we deliver {section.eyebrow.toLowerCase()}</h2>
        </div>

        <div className="grid gap-10 rounded-2xl border border-border bg-card lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-border p-8 lg:border-b-0 lg:border-r md:p-10">
            <div className="text-h2 font-semibold text-foreground">{activeStep?.step}</div>

            <div className="flex min-h-[14rem] items-center justify-center">
              <div className="relative h-40 w-40">
                <div className="absolute left-1/2 top-2 h-16 w-16 -translate-x-1/2 rotate-45 bg-primary/15" />
                <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rotate-45 bg-primary" />
                <div className="absolute left-1/2 top-24 h-16 w-16 -translate-x-1/2 rotate-45 bg-primary/20" />
                <div className="absolute left-1/2 top-[8.5rem] h-14 w-14 -translate-x-1/2 rotate-45 bg-primary/12" />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <Accordion type="single" collapsible value={value} onValueChange={(next) => setValue(next || value)}>
              {section.process.map((item) => (
                <AccordionItem
                  key={item.step}
                  value={item.step}
                  onMouseEnter={() => setValue(item.step)}
                  className="border-border"
                >
                  <AccordionTrigger className="py-5 text-base hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <span className="mt-1 text-xs font-medium tracking-[0.2em] text-muted-foreground">
                        {item.step}
                      </span>
                      <span
                        className={cn(
                          "text-h3 transition-colors",
                          value === item.step ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 text-muted-foreground">
                    <p>{item.description}</p>
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
