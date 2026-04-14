import { aboutCoreValuesContent, coreValues } from "./aboutContent";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function WhatWeStandFor() {
  return (
    <section
      className="relative overflow-hidden bg-accent/30! dark:bg-accent"
      aria-labelledby="about-stand-for-heading"
    >
      <div className="container mx-auto content-space">
        <p
          id="about-stand-for-heading"
          className="text-body-large text-primary font-semibold"
        >
          {aboutCoreValuesContent.title}
        </p>

        <h2 className="max-w-4xl w-full">
          {aboutCoreValuesContent.description}
        </h2>

        <div
          className={cn(
            "flex flex-col gap-8 py-4 md:gap-10",
            "lg:flex-row lg:flex-nowrap lg:items-stretch lg:justify-between lg:gap-3 xl:gap-4",
            "lg:pb-6",
          )}
        >
          {coreValues.map(({ Icon, title: cardTitle, description }) => (
            <div
              key={cardTitle}
              className={cn("w-full min-w-0 shrink-0", "lg:w-0 lg:flex-1")}
            >
              <Card>
                <CardHeader>
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15 lg:size-10 xl:size-11"
                    aria-hidden
                  >
                    <Icon className="size-5 xl:size-6" strokeWidth={1.75} />
                  </div>
                  <CardTitle className="card-title">
                    {cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <small className="text-muted-foreground">{description}</small>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
