"use client";

const items = [
  { id: "challenges", label: "Challenges" },
  { id: "services", label: "Services" },
  { id: "what-we-offer", label: "What We Offer" },
  { id: "process", label: "Process" },
  { id: "industries", label: "Industries" },
  { id: "expertise", label: "Expertise" },
  { id: "faqs", label: "FAQs" },
];

export default function DetailTabs() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = window.innerWidth >= 1024 ? 69 : 60;
    const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-0! border-b border-border shadow-md bg-background">
      <div className="container mx-auto">
        <nav
          aria-label="Service details sections"
          className="flex gap-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="shrink-0    px-3.5 py-2 text-sm font-normal uppercase tracking-wide text-muted-foreground/70 hover:text-primary cursor-pointer transition-colors duration-200 "
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
