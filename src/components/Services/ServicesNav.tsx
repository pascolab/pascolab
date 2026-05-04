"use client";

import type { ServicePageSection } from "@/types/service";

type ServicesNavProps = {
  sections: ServicePageSection[];
};

export default function ServicesNav({ sections }: ServicesNavProps) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = window.innerWidth >= 1024 ? 69 : 60;
    const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="border-y border-border bg-background shadow-md">
      <div className="container mx-auto">
        <nav
          className="flex gap-4 overflow-x-auto py-3 md:py-4 px-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label="Service navigation"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              className="shrink-0 px-3 py-2.5 cursor-pointer rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground ring-1 ring-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              {s.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
