"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/data";

const iconMap: Record<string, string> = {
  shield: "solar:shield-bold-duotone",
  strategy: "solar:document-add-bold-duotone",
  audit: "solar:clipboard-bold-duotone",
  risk: "solar:danger-triangle-bold-duotone",
  ai: "solar:cpu-bold-duotone",
  "generative-ai": "solar:stars-bold-duotone",
  data: "solar:database-bold-duotone",
  analytics: "solar:chart-2-bold-duotone",
  intelligence: "solar:lightbulb-bold-duotone",
  digital: "solar:global-bold-duotone",
  cloud: "solar:cloud-bold-duotone",
  emerging: "solar:rocket-bold-duotone",
  devops: "solar:settings-bold-duotone",
  infrastructure: "solar:layers-bold-duotone",
  modernization: "solar:refresh-circle-bold-duotone",
};

const NavIndicator = ({ isActive }: { isActive: boolean }) => (
  <div
    className={`w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 transition-all duration-200 font-bold text-sm select-none
      ${isActive
        ? "bg-primary text-primary-foreground"
        : "border border-muted-foreground text-muted-foreground group-hover:border-primary group-hover:text-primary"
      }`}
  >
    P
  </div>
);

const ServiceCard = ({ card }: { card: { id: string, title: string, description: string, href: string, iconName: string } }) => {
  return (
    <div
      key={card.id}
      className="group rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 bg-card dark:bg-[#E8622A] shadow-service border border-border/20 hover:bg-[#E8622A] dark:hover:bg-foreground  shadow-lg cursor-pointer"
    >
        <Icon icon="solar:document-add-bold-duotone" width={36} height={36} className="text-primary dark:text-white group-hover:text-white dark:group-hover:text-background transition-all duration-300" />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl transition-all duration-300 md:text-[1.3rem] font-medium leading-snug text-black dark:text-white group-hover:text-white dark:group-hover:text-background">
          {card.title}
        </h3>
        <p className="mt-2 transition-all duration-300 text-sm md:text-sm leading-relaxed text-black/90 dark:text-white/95 group-hover:text-white/90 dark:group-hover:text-background max-sm:line-clamp-1">
          {card.description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={card.href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto text-foreground group-hover:text-primary-foreground dark:group-hover:text-background transition-all duration-300 "
      >
        View Details
        <Icon icon="solar:arrow-right-bold-duotone" className="text-base text-primary dark:text-white group-hover:text-primary-foreground dark:group-hover:text-background transition-all duration-300" />
      </Link>
    </div>
  )
}

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

  const handleTabClick = useCallback(
    (sectionId: string) => handleNavClick(sectionId),
    [handleNavClick]
  );

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
    <section className="overflow-hidden relative bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-radial from-primary/10 to-transparent" />
      <div className="container z-50">
        <div className="mb-10">
          <span className="text-lg font-medium tracking-wide leading-tight text-muted-foreground">Services We Offer</span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-midnight_text leading-tight mt-2">Transform Your Business</h2>
        </div>
        {/* Mobile: horizontal scrollable tabs */}
        <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeSection === section.id
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground border border-muted-foreground"
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
                      <NavIndicator isActive={isActive} />
                      {!isLast && (
                        <div className={`w-px flex-1 mt-2 mb-2 min-h-20  border-l-2 border-dashed ${isActive ? "border-primary" : "border-muted-foreground"}`} />
                      )}
                    </div>
                    <div className={`${isLast ? "pb-0" : "pb-8"}`}>
                      <p
                        className={`text-xl font-semibold leading-snug transition-colors duration-200 ${isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {section.title}
                      </p>
                      <p className={`mt-1 text-base ${isActive ? "text-foreground" : "text-muted-foreground"}  leading-relaxed max-w-[80%]`}>
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
              className="relative h-[440px] overflow-y-auto overflow-x-hidden pr-1"
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => { sectionRefs.current[section.id] = el; }}
                  className="mb-6 last:mb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 lg:gap-5">
                    {section.cards.map((card) => {
                      const iconName = iconMap[card.icon] ?? "solar:widget-bold-duotone";
                      return (
                        <ServiceCard key={card.id} card={{ ...card, iconName }} />
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
