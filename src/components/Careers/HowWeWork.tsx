import { careersData } from "@/app/api/data";
import EyeBrew from "../SharedComponent/EyeBrew";

const pills = [
  "Clear direction over ambiguous sprints",
  "Trusted to think — not just follow instructions",
  "Ownership of what you contribute",
  "Thoughtful execution over reactive output",
];

export default function HowWeWork() {
  return (
    <section className="">
      <div className="container mx-auto content-space">
        <EyeBrew text={careersData.howWeWork.eyebrow} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className=" text-foreground tracking-normal max-w-xl">
              {careersData.howWeWork.title}
            </h2>
          {/* Right — pills */}
          <div className="flex flex-col gap-4">
            {careersData.howWeWork.points.map((pill, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg px-4 py-4 text-sm text-muted-foreground bg-primary/10"
              
              >
                <span className="shrink-0 mt-0.5">
                  →
                </span>
                {pill}
              </div>
            ))}
          </div>

        </div>
          <p className="text-body text-muted-foreground">{careersData.howWeWork.closing}</p>

      </div>
    </section>
  );
}