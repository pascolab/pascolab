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
    <section className="py-0! border-b border-border bg-background">
      <div className="container">
        <nav
          aria-label="Service details sections"
          className="flex gap-2 overflow-x-auto py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="shrink-0 border-b-2 border-transparent px-1 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
