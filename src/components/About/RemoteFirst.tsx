import { aboutRemoteFirstContent } from "./aboutContent";

export default function RemoteFirst() {
  const {
    eyebrow,
    title,
    paragraphs,
    experienceTitle,
    experienceParagraph,
  } = aboutRemoteFirstContent;

  return (
    <section className="overflow-hidden relative bg-accent/30! dark:bg-accent">
      <div className="container">
        <div className="rounded-lg  overflow-hidden">
          <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="content-space">
              <p className="text-body-large text-primary font-semibold">
                {eyebrow}
              </p>
              <h2 className="max-w-xl w-full">{title}</h2>
              <div className="content-space">
                {paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground leading-7">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <aside className="h-full">
              <div className="h-full rounded-lg border border-border p-5 md:p-6">
                <div className="flex flex-col md:flex-row bg-primary/10 dark:bg-accent/30 overflow-hidden">
                  <div className="w-full md:w-7 h-7 md:h-auto bg-primary shrink-0" />
                  <div className="p-4 md:p-5 content-space">
                    <span className="text-body-large font-semibold tracking-wide">
                      {experienceTitle}
                    </span>
                    <small className="text-muted-foreground">
                      {experienceParagraph}
                    </small>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Clear written communication",
                    "Async updates without meetings",
                    "Demos of working software",
                    "Timezone-aware planning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-border bg-primary/10 dark:bg-accent/30 px-4 py-3 text-sm text-foreground/90"
                    >
                      <span className="text-primary font-semibold">•</span>{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

