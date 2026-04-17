import type { ServicePageSection } from "@/types/service";

type ChallengesProps = {
  section: ServicePageSection;
};

const staggerClasses = [
  "md:mt-16",  // left  — lowest
  "md:mt-0",   // middle — highest
  "md:mt-8",   // right  — middle
];

export default function Challenges({ section }: ChallengesProps) {
  return (
    <section id="challenges">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Challenges
          </p>
          <h2 className="max-w-3xl">
            Do these {section.eyebrow.toLowerCase()} challenges sound familiar?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:mt-5 md:items-start">
          {section.challenges.map((item, idx) => (
            <article
              key={item.label}
              className={`border-t-10 border-t-primary border border-border bg-card p-6 pb-20 md:p-8 md:pb-32 ${staggerClasses[idx] ?? ""}`}
            >
              <div className="space-y-8">
                <h3 className="text-h1 font-bold leading-none bg-linear-to-b from-primary to-foreground/80 text-transparent bg-clip-text">{item.value}</h3>
                <p className="text-muted-foreground text-body-large leading-relaxed">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
