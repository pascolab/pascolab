"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { servicesPageData } from "@/app/api/data";


const Services = () => (
  <section>
    <div className="container">

      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
        <div className="content-space">
          <p className="text-primary text-body-large font-medium">What We Do</p>
          <h2>Our services</h2>
        </div>
        <Button
          asChild
          variant="outline"
          className="shrink-0 rounded-full border-primary h-auto py-2.5 px-5 font-normal"
        >
          <Link href="/services">View all services</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {[...servicesPageData].map((service) => {

          return (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col h-96 overflow-hidden rounded-lg
                         border border-border
                         transition-colors duration-300 ease-in-out hover:border-primary/30"
            >
              <div className='absolute bg-linear-to-bl bg-background/50 top-0 left-0 w-full h-full blur-2xl pointer-events-none z-10 lg:-rotate-50 lg:top-20 lg:-left-45 lg:group-hover:left-0 lg:group-hover:top-0 lg:group-hover:rotate-0 transition-all duration-500 ease-out' />
           
              <div className="flex flex-1 items-center justify-center">
                <Icon icon={service.icon} width={150} height={150} className={`text-primary`} />
              </div>

              <div className="hidden lg:block px-5 pb-5 lg:group-hover:opacity-0 transition-opacity duration-300 z-20">
                <h3 className="text-foreground">
                  {service.title}
                </h3>
              </div>

              <div
                className="absolute inset-0 bottom-0 bg-background/50 p-5 z-20
                           translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0
                           transition-all duration-500 ease-in-out"
              >
                <div className="flex flex-col gap-2 h-full justify-end">
                <h3 className="mb-3 text-xl text-muted-foreground">
                  {service.title}
                </h3>
                <div className="flex flex-wrap justify-start gap-2">
                  {service.categories.slice(0,5).map((cat) => (
                    <span
                      key={cat.id}
                      className="inline-flex items-center rounded-full border border-border
                                 bg-background text-body px-3 py-0.5 text-foreground/80"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  </section>
);

export default Services;
