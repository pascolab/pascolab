import type { ServicePageSection } from "@/types/service";

type ExpertiseProps = {
  section: ServicePageSection;
};

export default function Expertise({ section }: ExpertiseProps) {
  return (
    <section id="expertise">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Expertise
          </p>
          <h2 className="max-w-3xl">Our expertise and technologies aligned to this service</h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="space-y-6">
            {section.expertise.map((group, index) => (
              <div
                key={group.label}
                className={index !== section.expertise.length - 1 ? "border-b border-border pb-6" : ""}
              >
                <div className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {group.label}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
