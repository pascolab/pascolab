import { aboutHowWeWorkContent, howWeWorkSteps } from "./aboutContent";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function HowWeWork() {
  const { eyebrow, title, intro } = aboutHowWeWorkContent;

  return (
    <section
      className="overflow-hidden relative bg-background"
      aria-label="How we work"
    >
      <div className="container">
        <div className="content-space">
          <p className="text-body-large text-primary font-semibold">{eyebrow}</p>
          <h2 className="max-w-4xl w-full">{title}</h2>
          <p className="text-muted-foreground max-w-3xl">{intro}</p>

          <div className="grid grid-cols-1 py-6 md:py-4 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-5">
            {howWeWorkSteps.map((step, i) => {
              const isLast = i === howWeWorkSteps.length - 1;

              return (
                <Card
                  key={step.step}
                  className={cn(
                    "relative overflow-visible transition-all duration-300 hover:-translate-y-1 shadow-lg md:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:transition-none",
                    "ring-0",
                  )}
                >
                  {/* Step number in corner */}
                  <div
                    className={cn(
                      "absolute -top-4 -left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ring-1 ring-border",
                      isLast
                        ? "bg-orange-500/15 text-orange-500"
                        : "bg-primary/10 text-primary",
                    )}
                    aria-hidden
                  >
                    {step.step}
                  </div>

                  <CardHeader className="items-center text-center gap-3 pt-3.5">
                    <div className="flex flex-col items-center content-space">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        isLast
                          ? "bg-orange-500/15 text-orange-500"
                          : "bg-background text-foreground",
                      )}
                      aria-hidden
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </span>
                    <CardTitle className="text-body-large font-semibold tracking-wide">
                      {step.title}
                    </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <small className="text-small text-muted-foreground">
                      {step.description}
                    </small>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
