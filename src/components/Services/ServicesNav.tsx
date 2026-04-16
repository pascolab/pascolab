"use client";

import type { ServicePageSection } from "@/types/service";

type ServicesNavProps = {
  sections: ServicePageSection[];
};

export default function ServicesNav({ sections }: ServicesNavProps) {
  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto">
        <nav
          className="flex gap-4 overflow-x-auto py-3 md:py-4 px-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label="Service navigation"
        >
          {sections.map((s) => (
            <div
            
            tabIndex={0}
              key={s.id}
              className="shrink-0 px-4 py-2.5 cursor-pointer rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground  ring-1 ring-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {s.title}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
