'use client';

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import type { ServicePageSection } from "@/types/service";
import { Card } from "../ui/card";

function stripLeadingArrow(label: string) {
  return label.replace(/^→\s*/, "").trim();
}

function splitOutro(outro: string) {
  const raw = outro.trim();
  // Split on first sentence-like boundary while keeping it simple and safe.
  // Avoid dotAll (`/s`) so this works with older JS targets.
  const match = raw.match(/^(.+?[.?!])\s*([\s\S]*)$/);
  if (!match) return { heading: raw, body: "" };
  return { heading: match[1].trim(), body: match[2].trim() };
}

export default function WhenServiceRightForYou({
  section,
}: {
  section: ServicePageSection;
}) {
  const rightFit = section.whenServiceRightForYou;
  const points = rightFit?.points ?? [];
  const [selectedPointIdxs, setSelectedPointIdxs] = useState<number[]>([]);

  const selectedCount = selectedPointIdxs.length;
  const isSelected = (idx: number) => selectedPointIdxs.includes(idx);

  const togglePoint = (idx: number) => {
    setSelectedPointIdxs((prev) => {
      const exists = prev.includes(idx);
      if (exists) return prev.filter((p) => p !== idx);
      return [...prev, idx];
    });
  };

  if (!rightFit) return null;
  if (!rightFit.ctaHref || !rightFit.ctaLabel) return null;

  const { heading, body } = splitOutro(rightFit.outro ?? "");
  const buttonLabel = stripLeadingArrow(rightFit.ctaLabel);

  const progressText = useMemo(() => {
    if (points.length === 0) return "";
    return `${selectedCount} of ${points.length}`;
    }, [points.length, selectedCount]);

  if(!section.whenServiceRightForYou || !section.whenServiceRightForYou.title) return null;

  return (
      <section id="when-service-right-for-you"  className="bg-accent/30! dark:bg-accent">
      <div className="container mx-auto content-space">
              <h2 className="text-foreground">
                {section.whenServiceRightForYou?.title}
              </h2>
        <Card className="px-4 md:px-6">
          <div className="content-space">

            {points.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
                  {points.map((point, idx) => (
                    <button
                      type="button"
                      // Use index for key safety if point text repeats.
                      key={`${point}-${idx}`}
                      onClick={() => togglePoint(idx)}
                      aria-pressed={isSelected(idx)}
                      className={`group rounded-lg border p-4 text-left transition-colors duration-300 ease-in-out ${
                        isSelected(idx)
                          ? "border-primary/40 bg-primary/5"
                          : "border-border bg-background/40 hover:bg-primary/5 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex md:items-center gap-4">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 md:h-7 md:w-7 items-center shrink-0 justify-center rounded-full transition-colors duration-300 ${
                            isSelected(idx)
                              ? "bg-primary"
                              : "bg-primary/90 group-hover:bg-primary/90"
                          }`}
                        >
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </span>
                        <p
                          className={`text-sm md:text-base font-medium leading-snug transition-colors ${
                            isSelected(idx)
                              ? "text-foreground"
                              : "text-foreground group-hover:text-foreground/90"
                          }`}
                        >
                          {point}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-1.5 w-32 rounded-full bg-primary/20 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width:
                            selectedCount === 0
                              ? "0%"
                              : `${Math.min(
                                  100,
                                  Math.max(
                                    8,
                                    (selectedCount / points.length) * 100
                                  )
                                )}%`,
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      {points.map((_, i) => (
                        <span
                          key={`dot-${i}`}
                          className={
                            isSelected(i)
                              ? "h-2.5 w-2.5 rounded-full bg-primary"
                              : "h-2.5 w-2.5 rounded-full bg-primary/15"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {progressText}
                  </p>
                </div>
              </>
            ) : null}
          </div>

          <div className="bg-primary/10 p-5 md:p-7 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                {heading ? (
                  <p className="text-body-large font-semibold text-primary">{heading}</p>
                ) : null}
                {body ? (
                  <p className="mt-1 text-sm text-foreground/80">{body}</p>
                ) : null}
              </div>

              <Link
                href={rightFit.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/80"
              >
                {buttonLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
      </section>
  );
}

