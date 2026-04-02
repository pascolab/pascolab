"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/data";

const iconMap: Record<string, string> = {
  shield: "ion:shield-checkmark-outline",
  strategy: "ion:document-text-outline",
  audit: "ion:clipboard-outline",
  risk: "ion:warning-outline",
  ai: "ion:hardware-chip-outline",
  "generative-ai": "ion:sparkles-outline",
  data: "ion:server-outline",
  analytics: "ion:bar-chart-outline",
  intelligence: "ion:bulb-outline",
  digital: "ion:globe-outline",
  cloud: "ion:cloud-outline",
  emerging: "ion:rocket-outline",
  devops: "ion:git-branch-outline",
  infrastructure: "ion:layers-outline",
  modernization: "ion:refresh-outline",
};

const ActiveArrow = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="4" className="fill-primary" />
    <path d="M10 8L18 14L10 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InactiveArrow = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="4" fill="none" stroke="#CCD7E1" strokeWidth="1.5" />
    <path d="M10 8L18 14L10 20" stroke="#668199" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Services = () => {
  const { sections } = services;
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // Prevent observer from overriding active state while a programmatic scroll is settling
  const isScrollingRef = useRef(false);

  // Click left nav → scroll to that section group
  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const el = sectionRefs.current[sectionId];
    const container = scrollRef.current;
    if (!el || !container) return;

    isScrollingRef.current = true;
    // getBoundingClientRect gives position relative to viewport, so we
    // adjust by the container's current scroll position to get the true target.
    const scrollTarget =
      container.scrollTop +
      el.getBoundingClientRect().top -
      container.getBoundingClientRect().top;
    container.scrollTo({ top: scrollTarget, behavior: "smooth" });

    // Release the lock after the smooth scroll settles (~800 ms)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  // Mobile tab click → same behaviour
  const handleTabClick = useCallback(
    (sectionId: string) => handleNavClick(sectionId),
    [handleNavClick]
  );

  // Scroll listener: mark whichever section header has just passed the top of
  // the container as active.  Much more reliable than IntersectionObserver for
  // sections that are taller than the scroll window.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      if (isScrollingRef.current) return;
      const containerTop = container.getBoundingClientRect().top;

      // Walk sections in order; keep updating activeId as long as the section
      // header is at or above the container's top edge (with a small buffer).
      let activeId = sections[0].id;
      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (!el) continue;
        const elTop = el.getBoundingClientRect().top - containerTop;
        if (elTop <= 16) activeId = section.id;
      }
      setActiveSection(activeId);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <section className="bg-section overflow-hidden">
      <div className="container">
        <div className="mb-10">
          <span className="text-lg text-primary font-medium tracking-wide leading-tight ">Services We Offer</span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-midnight_text leading-tight mt-2">Transform Your Business</h2>
        </div>
        {/* Mobile: horizontal scrollable tabs */}
        <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-primary text-white"
                  : "bg-white text-grey border border-border dark:bg-darklight dark:text-white/60 dark:border-dark_border"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 py-10">
          {/* Left nav — desktop only */}
          <div className="hidden md:flex flex-col w-[30%] lg:w-[28%] shrink-0">
            {sections.map((section, idx) => {
              const isActive = activeSection === section.id;
              const isLast = idx === sections.length - 1;
              return (
                <div key={section.id} className="relative">
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className="flex items-start gap-4 w-full text-left group"
                  >
                    <div className="flex flex-col items-center shrink-0 mt-1">
                      {isActive ? <ActiveArrow /> : <InactiveArrow />}
                      {!isLast && (
                        <div className={`w-px flex-1 mt-2 mb-2 min-h-10 border-l-2 border-dashed ${isActive ? "border-primary" : "border-border dark:border-dark_border"}`} />
                      )}
                    </div>
                    <div className={`${isLast ? "pb-0" : "pb-8"}`}>
                      <p
                        className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                          isActive
                            ? "text-midnight_text dark:text-white"
                            : "text-grey dark:text-white/40 group-hover:text-midnight_text dark:group-hover:text-white/70"
                        }`}
                      >
                        {section.title}
                      </p>
                        <p className={`mt-1 text-sm ${isActive ? "text-midnight_text dark:text-white" : "text-grey dark:text-white/50"}  leading-relaxed max-w-56`}>
                          {section.description}
                        </p>
                   
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right panel: all sections rendered, fixed-height scrollable */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={scrollRef}
              className="relative h-[400px] overflow-y-auto overflow-x-hidden pr-1"
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => { sectionRefs.current[section.id] = el; }}
                  className="mb-6 last:mb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                    {section.cards.map((card) => {
                      const iconName = iconMap[card.icon] ?? "ion:apps-outline";
                      return (
                        <div
                          key={card.id}
                          className="group rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 bg-white dark:bg-darklight shadow-service border border-border dark:border-dark_border hover:bg-primary hover:border-primary hover:shadow-lg cursor-pointer"
                        >
                          {/* Icon */}
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center shrink-0 bg-Sky-blue-mist/30 dark:bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                            <Icon
                              icon={iconName}
                              className="text-2xl md:text-4xl text-primary group-hover:text-white transition-colors duration-300"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-xl md:text-[1.3rem] font-medium leading-snug text-midnight_text dark:text-white group-hover:text-white transition-colors duration-300">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-sm md:text-sm leading-relaxed text-grey dark:text-white/50 group-hover:text-white/80 transition-colors duration-300 max-sm:line-clamp-1">
                              {card.description}
                            </p>
                          </div>

                          {/* Link */}
                          <Link
                            href={card.href}
                            className="inline-flex items-center gap-1.5 text-sm font-medium mt-auto text-primary group-hover:text-white transition-colors duration-300"
                          >
                            View Details
                            <Icon icon="ion:arrow-forward-outline" className="text-base" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
