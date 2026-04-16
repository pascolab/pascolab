import type { ServicePageSection } from "@/types/service";

type ChallengesProps = {
  section: ServicePageSection;
};

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

        <div className="grid gap-6 md:grid-cols-3">
          {section.challenges.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="content-space">
                <p className="text-h2 font-semibold text-primary">{item.value}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
