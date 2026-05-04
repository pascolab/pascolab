import type { ServicePageSection } from "@/types/service";
import { Card } from "@/components/ui/card";

export default function WhatWeDo({ section }: { section: ServicePageSection }) {
  const items = section.whatWeDo ?? [];

  if (!items.length) return null;

  return (
    <section id="what-we-do" className="">
      <div className="container content-space">
        <h2 className="text-foreground">
          What We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
          {items.map((item) => (
            <Card
              key={item.id}
              className="group/card min-h-0 h-full ring-border/90 hover:ring-primary/90 transition-colors duration-300"
            >
              <div className="flex flex-col gap-6 md:gap-4">
                <span className="mt-1 h-3.5 w-3.5 rounded-full bg-primary group-hover/card:bg-primary transition-colors" />
                <p className="text-body-large font-semibold text-foreground/90 group-hover/card:text-foreground transition-colors">
                  {item.title}
                </p>
                <p className="text-small text-muted-foreground group-hover/card:text-foreground/80 transition-colors leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

