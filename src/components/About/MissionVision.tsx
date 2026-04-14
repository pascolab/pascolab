import { aboutMissionContent, aboutVisionContent } from "./aboutContent";

export default function MissionVision() {
  const mission = aboutMissionContent;
  const vision = aboutVisionContent;

  return (
    <section
      className="relative overflow-hidden  bg-background"
      aria-label="Mission and vision"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          <article className="content-space">
            <p className="text-body-large text-primary font-semibold">
              {mission.eyebrow}
            </p>
            <h3 className="max-w-4xl w-full">
              {mission.title}
            </h3>
            <div className="content-space">
              {mission.paragraphs.map((p) => (
                <p key={p} className="text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row bg-primary/10 dark:bg-accent/30">
                <div className="w-full md:w-7 h-7 md:h-full bg-primary shrink-0" />
             <div className="space-y-1.5 p-4">
             <span className="text-body-large font-bold text-foreground inline-block">
                {mission.practicalIntro}
              </span>
              <div className="content-space">
                {mission.practicalParagraphs.map((p) => (
                  <small key={p} className="text-muted-foreground">
                    {p}
                  </small>
                ))}
              </div>
             </div>
            </div>
          </article>

          <article className="content-space">
            <p className="text-body-large text-primary font-semibold">
              {vision.eyebrow}
            </p>
            <h3 className="max-w-4xl w-full">
              {vision.title}
            </h3>
            <div className="content-space">
              {vision.paragraphs.map((p) => (
                <p key={p} className="text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row bg-primary/10 dark:bg-accent/30">
                <div className="w-full md:w-7 h-7 md:h-full bg-primary shrink-0" />
             <div className="space-y-1.5 p-4">
             <span className="text-body-large font-bold text-foreground inline-block">
                {vision.directionTitle}
              </span>
              <div className="content-space">
                {vision.directionParagraphs.map((p) => (
                  <small key={p} className="text-muted-foreground">
                    {p}
                  </small>
                ))}
              </div>
             </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
