"use client";

import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import CTA from "../Common/CTA";
import { careersData } from "@/app/api/data";


export default function CareersCta() {
  return (
    <section id="start" className="">
      <div className="container mx-auto content-space">
        <p className="text-small font-medium tracking-wide text-primary uppercase">
          {careersData.careersCta.eyebrow}
        </p>
        <Card className="dark:ring-0 dark:shadow-none">
         <CardContent className="px-5 py-8 md:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 md:gap-8">
         <div className="max-w-xl flex flex-col gap-2.5 md:gap-1.5">
            <h3 className="text-foreground">
              {careersData.careersCta.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {careersData.careersCta.description[0]}
            </p>
            <p className="text-body-large text-muted-foreground mt-2">
              {careersData.careersCta.description[1]}
            </p>
          </div>

          <div className="flex flex-col items-end md:items-start sm:items-end gap-6 md:gap-4 shrink-0">
            <Link
              href={`mailto:${careersData.careersCta.email}`}
              className="text-sm font-medium transition-colors duration-150 border-b border-border text-muted-foreground/90 tracking-wider"
            >
              {careersData.careersCta.email}
            </Link>
            <CTA label={careersData.careersCta.ctaLabel} href={careersData.careersCta.ctaHref} />
          </div>
         </CardContent>
        </Card>
      </div>
    </section>
  );
}