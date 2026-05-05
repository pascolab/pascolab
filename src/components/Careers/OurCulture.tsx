import { careersData } from "@/app/api/data";

export default function OurCulture() {
  return (
    <section className="border-t border-border">
      <div className="container mx-auto content-space">
        <p className="text-small font-medium tracking-wide text-primary uppercase">
          {careersData.ourCulture.eyebrow}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 md:gap-4">

          <h2 className="font-semibold text-foreground tracking-normal">
            {careersData.ourCulture.title}
          </h2>

          {/* Right content col */}
          <div className="flex flex-col gap-6">
            <p className="text-body-large text-muted-foreground">
              {careersData.ourCulture.description}
            </p>

            {/* Points list */}
            <div className="rounded-lg border border-border overflow-hidden">
              {careersData.ourCulture.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-4 border-b border-border last:border-0
                           hover:bg-accent/50 transition-colors duration-150"
                >
                  <span className="text-primary font-medium mt-0.5 shrink-0">→</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-body text-primary italic">
              {careersData.ourCulture.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}