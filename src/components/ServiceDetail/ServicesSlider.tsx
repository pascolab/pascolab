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
    speed: 600,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    touchMove: true,
    swipeToSlide: true,
    adaptiveHeight: true,
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

        <div className="services-slider min-h-96 py-2">
          <Slider ref={sliderRef} {...settings}>
            {section.services.map((item) => (
              <div key={item.id} className="h-full px-3">
                <Link
                  href={item.href}
                  className="group relative min-h-82 h-full rounded-t-lg border border-border bg-background transition-all duration-300 hover:border-primary hover:bg-primary
                             flex flex-col md:block md:overflow-hidden"
                >
                  {/* Category — always at top, never moves */}
                  <p className="
                    px-6 pt-6 text-muted-foreground/70 transition-colors duration-300
                    group-hover:text-white/80
                    md:absolute md:top-6 md:left-6 md:px-0 md:pt-0
                  ">
                    {item.category}
                  </p>

                  {/* Title + bullets — normal flow on mobile, anchored to bottom on desktop.
                      On hover the block nudges upward so bullets slide into view. */}
                  <div className="
                    flex flex-col gap-10 p-6 pt-3 mt-auto pb-14
                    md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0 md:p-6
                    transition-transform duration-500 ease-[cubic-bezier(0.34,1.1,0.64,1)]
                    md:translate-y-32 md:group-hover:-translate-y-7
                  ">
                    <h3 className="max-w-xs text-foreground transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {item.bullets?.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-small text-muted-foreground transition-colors duration-300 group-hover:text-white"
                        >
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow tab */}
                  <div className="flex justify-end absolute bottom-0 -right-px z-30 bg-white ">
                    <span className="flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors duration-300 md:border-r-transparent group-hover:border-primary/30 group-hover:border-r-primary border-b-0 ">
                      <Icon icon="solar:arrow-right-linear" className="h-4 w-4 md:-translate-x-1 md:group-hover:translate-x-1 transition-all ease-in-out duration-300" />
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
