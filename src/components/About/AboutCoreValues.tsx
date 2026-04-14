import {
  aboutCoreValuesContent,
  coreValues,
} from "./aboutContent";

export default function AboutCoreValues() {
  const { title } = aboutCoreValuesContent;

  return (
    <section
      className="bg-background overflow-hidden"
      aria-labelledby="about-values-heading"
    >
      <div className="container">
        <h2
          id="about-values-heading"
          className="text-center text-3xl font-bold text-foreground sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map(({ Icon, title: cardTitle, description }) => (
            <article
              key={cardTitle}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Icon
                className="size-8 shrink-0 text-primary"
                aria-hidden
              />
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {cardTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
