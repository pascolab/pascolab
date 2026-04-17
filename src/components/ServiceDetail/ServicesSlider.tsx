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
                  className="group flex min-h-82 h-full flex-col z-10 rounded-t-lg rounded-bl-lg justify-between rounded-none bg-background p-6 transition-all ease-in-out border border-border duration-300 hover:border-primary hover:bg-primary relative hover:rounded-br-lg"
                >
                  <div className="content-space">
                    <p className=" text-muted-foreground/70 transition-colors duration-300 group-hover:text-white">
                      {item.category}
                    </p>

                    <div className="content-space">
                      <h3 className="max-w-xs text-foreground transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h3>

                      <ul className="space-y-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
                  </div>

                  <div className="flex justify-end absolute bottom-0 -right-px z-30 bg-white group-hover:rounded-br-lg ">
                    <span className="flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors duration-300 border-r-transparent group-hover:border-primary/30  group-hover:border-r-primary border-b-0 group-hover:rounded-br-lg">
                      <Icon icon="solar:arrow-right-linear" className="h-4 w-4 -translate-x-1 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
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
