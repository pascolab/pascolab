

export default function CareersQoute() {
  return (
    <section className="border-t border-b border-border">
      <div className="container mx-auto content-space">
        <div className="flex items-start justify-center gap-4">
          <span
            className="text-5xl md:text-6xl font-serif leading-none shrink-0 -mt-2 select-none"
            style={{ color: "oklch(0.82 0.06 280)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div className="flex flex-col gap-2.5 md:gap-1.5">
            <h3 className="font-semibold text-foreground italic">
              Every role here has a story.<br />
              Your career shouldn&apos;t feel like repetition.
            </h3>
            <p className="text-small text-muted-foreground mt-2">
              — Experience of every engineer at Pascolab 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}