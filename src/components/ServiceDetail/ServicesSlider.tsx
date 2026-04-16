"use client";

import { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import type { ServicePageSection } from "@/types/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ServicesSliderProps = {
  section: ServicePageSection;
};

export default function ServicesSlider({ section }: ServicesSliderProps) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="services">
      <div className="container content-space">
        <div className="flex items-start justify-between gap-6">
          <div className="content-space">
            <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
              Services
            </p>
            <h2 className="max-w-3xl">End-to-end solutions that transform strategy into impact</h2>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-primary"
              aria-label="Previous services"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-primary"
              aria-label="Next services"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="services-slider">
          <Slider ref={sliderRef} {...settings}>
            {section.services.map((item) => (
              <div key={item.id} className="h-full px-3">
                <Link
                  href={item.href}
                  className="group flex h-full min-h-[18rem] flex-col justify-between rounded-none border border-border bg-background p-6 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <div className="content-space">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/75">
                      {item.category}
                    </p>

                    <div className="content-space">
                      <h3 className="max-w-xs text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                        {item.title}
                      </h3>

                      <ul className="space-y-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {item.bullets?.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-small text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/85"
                          >
                            • {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <span className="flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors duration-300 group-hover:border-primary-foreground/30 group-hover:text-primary-foreground">
                      <Icon icon="solar:arrow-right-linear" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
