"use client";

import { ServicePageSection } from "@/types/service";

const items = [
  { id: "how-we-think", label: "How We Think" },
  { id: "what-we-do", label: "What We Do" },
  { id: "project-details", label: "Project Details" },
  { id: "tech-stack", label: "Tech Stack" },
];

export default function DetailTabs({section}: {section: ServicePageSection}) {
  if (!items.some((item) => item.id === "when-service-right-for-you") && section.whenServiceRightForYou && section.whenServiceRightForYou.title) {
    items.push({ id: "when-service-right-for-you", label: "When Service Right For You" });
  }
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = window.innerWidth >= 1024 ? 69 : 60;
    const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-0! border-b border-border shadow-md bg-background/70  backdrop-blur-xl transition-colors sticky! top-16! z-10!">
      <div className="container mx-auto ">
        <nav
          aria-label="Service details sections"
          className="flex gap-4 overflow-x-auto px-0.5 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="shrink-0 px-3 rounded-sm py-2.5 text-sm font-normal uppercase outline-1   outline-primary tracking-wide text-muted-foreground/90 hover:-translate-y-0.5 hover:text-primary cursor-pointer transition-colors duration-200 "
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
