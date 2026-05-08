"use client";

// components/ProjectShowcase/ProjectShowcase.tsx
// npm install motion

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { projects } from "@/app/api/data";
import EyeBrew from "@/components/SharedComponent/EyeBrew";
import laptopFrame from "../../../../public/images/portfolio/laptop-frame.svg";
import { Badge } from "@/components/ui/badge";
import CTA from "@/components/Common/CTA";


function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative select-none overflow-hidden w-full h-[210px] md:w-[640px] md:h-[380px] ">
      <div
        className="absolute inset-0 z-20 w-[273px] h-[176px] bg-white/20 -translate-y-2 md:w-[464px] md:h-[298px] md:-translate-y-3.25 rounded-lg m-auto overflow-hidden"
      >
        {children}
      </div>
      <img
        src={laptopFrame.src}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="relative z-10 w-full h-full max-sm:object-cover md:scale-110 pointer-events-none overflow-hidden"
      />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ProjectShowcase() {
  const showcase = projects.slice(0,3);
  const n = showcase.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  // 1 = scrolling down (new enters from right)
  // -1 = scrolling up  (new enters from left)
  const [direction, setDirection] = useState<1 | -1>(1);
  const [transitioning, setTransitioning] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  // Derive which project is active from scroll position
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const next = Math.min(Math.floor(v * n), n - 1);
      setActiveIndex((prev) => {
        if (next !== prev) {
          setDirection(next > prev ? 1 : -1);
          setPrevIndex(prev);
          setTransitioning(true);
        }
        return next;
      });
    });
  }, [scrollYProgress, n]);

  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);
  const active = showcase[activeIndex];

  return (
    <div
      ref={containerRef}
      style={{ height: `${n * 100}vh` }}
      className="relative "
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky -top-10 md:top-0 h-screen overflow-hidden">

        {/* ── Split layout ── */}
        <div className="h-full container mx-auto content-space">

          <div className='text-center flex content-space items-center md:pt-32'>
            <EyeBrew text="Featured Projects" />
            <h3
              className='text-foreground text-center md:w-4/6 w-full mx-auto'>
              Explore my portfolio showcase
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-5 md:pt-30 pb-10 md:pb-20">
            {/* LEFT — instant swap, no motion */}
            <div className="order-2 lg:order-1 content-space">

              <h3 className="text-h1 font-semibold text-foreground leading-tight tracking-tight">
                {showcase[activeIndex].title}
              </h3>

              <p className="text-body font-normal text-muted-foreground leading-relaxed line-clamp-3">
                {showcase[activeIndex].overview}
              </p>

              <div className="hidden md:flex flex-wrap gap-2.5">
                {showcase[activeIndex].categories.map((tag) => (
                  <Badge variant="outline" className="py-1.5 px-3 text-xs tracking-wide font-normal border-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CTA label="View Details" href={`/projects/${showcase[activeIndex].slug}`} className="py-0! text-sm! md:hidden" />

              <div className="flex items-start gap-3 pt-3 border-t border-border">
                <span className="text-primary shrink-0 mt-0.5">→</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Result: </span>
                  {showcase[activeIndex].outcome}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
               <div className="flex items-center gap-1.5">
               {showcase.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-200 ${i === activeIndex ? "w-6 bg-primary" : "w-2 bg-border"
                      }`}
                  />
                ))}
               </div>

                <CTA label="View Details" href={`/projects/${showcase[activeIndex].slug}`} size="sm" className="py-0.5! text-sm! hidden md:flex" />
              </div>
            </div>

            {/* RIGHT — fixed laptop, single mockup slides in/out */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="w-full max-w-[540px]">
                <LaptopFrame>
                  <div className="relative w-full h-full">

                    {/*
                    Outgoing image: slides out in the opposite direction of travel.
                    scroll down → exits left  (-100%)
                    scroll up   → exits right (+100%)
                  */}
                    {transitioning && (
                      <motion.div
                        key={`out-${prevIndex}`}
                        className="absolute inset-0"
                        initial={{ x: "0%" }}
                        animate={{ x: direction === 1 ? "-105%" : "105%" }}
                        transition={{
                          duration: 0.55,
                          ease: [0.4, 0, 1, 1],
                        }}
                        onAnimationComplete={() => setTransitioning(false)}
                      >
                        <img
                          src={showcase[prevIndex].image}
                          alt={showcase[prevIndex].title}
                          className="w-full h-full object-cover object-top"
                          draggable={false}
                        />
                      </motion.div>
                    )}

                    {/*
                    Incoming image: slides in from the direction of travel.
                    scroll down → enters from right (+100%)
                    scroll up   → enters from left  (-100%)
                  */}
                    <motion.div
                      key={`in-${activeIndex}`}
                      className="absolute inset-0"
                      initial={{
                        x: transitioning
                          ? direction === 1 ? "105%" : "-105%"
                          : "0%",
                      }}
                      animate={{ x: "0%" }}
                      transition={{
                        duration: 0.60,
                        ease: [0, 0, 0.2, 1],
                      }}
                    >
                      <img
                        src={showcase[activeIndex].image}
                        alt={showcase[activeIndex].title}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </motion.div>

                  </div>
                </LaptopFrame>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
