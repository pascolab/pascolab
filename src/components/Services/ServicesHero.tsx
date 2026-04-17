import CTA from "@/components/Common/CTA";

export default function ServicesHero() {
  return (
    <section className="relative flex items-center min-h-[80vh] overflow-hidden py-0!">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(10,191,163,0.15),transparent_70%)]" />

      <div className="container relative z-10">
        <div className="max-w-3xl content-space">
          <p className="text-primary text-body-large font-semibold tracking-wide uppercase">
            Our Services
          </p>

          <h1 className="text-foreground">
            Services that power{" "}
            <br className="hidden sm:block" />
            growth, not just delivery
          </h1>

          <p className="text-muted-foreground/90 text-body-large max-w-2xl">
            Partner with us across AI, cloud, engineering, and product to build
            reliable digital solutions that grow with your business.
          </p>

          <div className="pt-2">
            <CTA label="Talk to an expert" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
