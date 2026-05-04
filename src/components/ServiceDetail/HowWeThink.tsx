import type { ServicePageSection } from "@/types/service";
import { Card, CardHeader } from "../ui/card";

function formatIndex(idx: number) {
  const n = idx + 1;
  return n < 10 ? `0${n}` : `${n}`;
}

function deriveIntroHeadingAndSubtitle(intro: string) {
  const raw = intro.trim();

  // Engineering-style: "We treat ... asset, not a ... deliverable."
  const notMatch = raw.match(/^(.*?),\s*not\s+(.*)$/i);
  if (notMatch) {
    const before = notMatch[1].trim(); // includes the "We treat ..." part
    const after = notMatch[2].trim();

    const cleanedBefore = before.replace(/^We treat\s+/i, "").trim();
    const heading = cleanedBefore.charAt(0).toUpperCase() + cleanedBefore.slice(1);
    const subtitle = `Not ${after}`;
    return { heading, subtitle };
  }

  // Common: "... not just X, it's Y."
  const itsMatch = raw.match(/^(.*?),\s*(it'?s|it is)\s+(.*)$/i);
  if (itsMatch) {
    const heading = itsMatch[1].trim();
    const subtitle = `${itsMatch[2].replace(/^\s+/, "").trim()} ${itsMatch[3].trim()}`;
    return { heading, subtitle };
  }

  // Generic: split on first comma if present.
  const commaIdx = raw.indexOf(",");
  if (commaIdx !== -1) {
    const heading = raw.slice(0, commaIdx).trim();
    const subtitle = raw.slice(commaIdx + 1).trim();
    return { heading, subtitle };
  }

  return { heading: raw, subtitle: "" };
}

function splitCorePrincipleForTwoLines(point: string) {
  const raw = point.trim();
  const lower = raw.toLowerCase();

  // Common patterns: keep the "main clause" on the first line.
  const soIdx = lower.indexOf(" so ");
  if (soIdx !== -1) {
    return {
      highlight: raw.slice(0, soIdx).trim(),
      blur: raw.slice(soIdx + 4).trim(), // after " so "
    };
  }

  const thatIdx = lower.indexOf(" that ");
  if (thatIdx !== -1) {
    return {
      highlight: raw.slice(0, thatIdx).trim(),
      blur: raw.slice(thatIdx + 6).trim(), // after " that "
    };
  }

  const whereIdx = lower.indexOf(" where ");
  if (whereIdx !== -1) {
    return {
      highlight: raw.slice(0, whereIdx).trim(),
      blur: raw.slice(whereIdx + 7).trim(), // after " where "
    };
  }

  // Engineering-style lists often use commas: "X, Y, Z" -> first clause vs rest.
  const commaIdx = raw.indexOf(",");
  if (commaIdx !== -1) {
    return {
      highlight: raw.slice(0, commaIdx).trim(),
      blur: raw.slice(commaIdx + 1).trim(),
    };
  }

  // Fallback: split into a short lead + the remaining tail.
  const words = raw.split(/\s+/).filter(Boolean);
  if (words.length <= 3) {
    return { highlight: raw, blur: "" };
  }

  const splitAt = Math.min(4, words.length - 1);
  return {
    highlight: words.slice(0, splitAt).join(" "),
    blur: words.slice(splitAt).join(" "),
  };
}

export default function HowWeThink({ section }: { section: ServicePageSection }) {
  const howWeThink = section.howWeThink;
  const points = howWeThink?.points ?? [];
  const { heading, subtitle } = deriveIntroHeadingAndSubtitle(howWeThink?.intro ?? "");

  return (
      <section  id="how-we-think">
        <div className="container content-space">
          <h2 className="text-foreground">{howWeThink.title}</h2>
        <Card className="rounded-lg shadow-sm flex flex-col gap-6 md:gap-3 px-4 md:px-6">
            <CardHeader className="px-0 ">
            <div className="flex flex-col md:items-center md:flex-row md:justify-between ">
            <div className="max-w-3xl flex flex-col gap-6 md:gap-3">
              <h3 className="text-foreground">{heading}</h3>
              {subtitle ? (
                <p className="text-body-large text-muted-foreground italic">
                  {subtitle}
                </p>
              ) : null}
              {howWeThink.focusLabel ? (
                <p className="text-body-large text-muted-foreground">{howWeThink.focusLabel}</p>
              ) : null}
            </div>

            <div className="hidden md:flex items-start gap-3 md:flex-col md:items-end">
              <p className="text-h1 font-bold text-primary leading-none">{points.length}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/90">
                Core principles
              </p>
            </div>
            </div>
            </CardHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {points.map((point, idx) => {
              const split = splitCorePrincipleForTwoLines(point);
              return (
                <div
                  key={`${point}-${idx}`}
                  className="rounded-lg border border-border bg-background/40 p-4 min-h-32 flex flex-col gap-6 md:gap-3"
                >
                  <p className="text-sm font-semibold text-primary">{formatIndex(idx)}</p>
                  <p className="text-body-large font-semibold text-foreground leading-snug tracking-normal">
                    {split.highlight}
                  </p>
                  {split.blur ? (
                    <p
                      className="text-sm leading-relaxed text-muted-foreground/90"
                      style={{ filter: "blur(0.15px)" }}
                    >
                      {split.blur}
                    </p>
                  ) : (
                    <p className="text-sm leading-relaxed text-muted-foreground/90 opacity-0 select-none">
                      {" "}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {howWeThink.closing ? (
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-body-large font-semibold text-primary">{howWeThink.closing}</p>
            </div>
          ) : null}
        </Card>
      </div>
      </section>
  );
}

