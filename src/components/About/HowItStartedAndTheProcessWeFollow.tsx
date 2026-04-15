import { howItStartedContent, processWeFollowContent } from "./aboutContent";

export default function HowItStartedAndTheProcessWeFollow() {
  const howItStarted = howItStartedContent;
  const processWeFollow = processWeFollowContent;
  const highlightedLine =
    "slow down where it matters, so things don’t break later.";

  return (
    <section
      className="relative overflow-hidden  bg-background"
      aria-label="How It Started and The Process We Follow"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="relative overflow-hidden rounded-lg border border-border bg-background/60 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/70 via-primary/30 to-transparent" />
            <div className="content-space">
              <h2>{howItStarted.title}</h2>
              <div className="content-space">
                {howItStarted.paragraphs.map((p) => (
                  <p
                    key={p}
                    className={
                      p.includes(highlightedLine)
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-lg border border-border bg-background/60 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/70 via-primary/30 to-transparent" />
            <div className="content-space">
              <h2>{processWeFollow.title}</h2>
              <div className="content-space">
                {processWeFollow.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
