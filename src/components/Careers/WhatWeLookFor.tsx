import { careersData } from "@/app/api/data";
import EyeBrew from "../SharedComponent/EyeBrew";


export default function WhatWeLookFor() {
  return (
    <section className="">
      <div className="container mx-auto content-space">

        <EyeBrew text={careersData.whatWeLookFor.eyebrow} />
        <div className="content-space">
          <h2 className="font-semibold text-foreground tracking-normal max-w-xl">
            {careersData.whatWeLookFor.title}
          </h2>
          <div className="flex flex-col gap-1">
          <p className="text-body text-muted-foreground">
            {careersData.whatWeLookFor.description[0]}
          </p>
          <p className="text-body-large text-muted-foreground">
            {careersData.whatWeLookFor.description[1]}
          </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {careersData.whatWeLookFor.points.map((t, i) => (
            <div
              key={i}
              className="group flex gap-4 items-start rounded-lg border border-border
                         bg-background px-4 py-4
                         hover:border-primary/40 hover:-translate-y-0.5
                         transition-all duration-200 cursor-default"
            >
              <span className="text-sm font-medium text-primary bg-primary/10
                               px-2.5 py-1 rounded shrink-0 mt-0.5 h-fit">
                {i + 1}
              </span>
              <p className=" text-body-large font-medium text-foreground">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}