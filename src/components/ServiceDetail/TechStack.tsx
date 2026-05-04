// components/TechStackSection.tsx
//
// SETUP (one-time):
//   npm install @iconify/react @iconify-json/simple-icons
//
// You already use Iconify (solar: icons in data.tsx) — this just adds the
// simple-icons dataset. No PNGs, no /public folder, no manual downloads ever.
// To add a new tech: add its string to techStack in data.tsx + one line in TECH_META.

import { ServicePageSection } from "@/types/service";
import { Icon } from "@iconify/react";

// ─── Tech metadata map ────────────────────────────────────────────────────────
// icon  → Iconify id.  simple-icons:xxx for brand logos,
//                      solar:xxx for anything without an official brand mark.
// color → brand hex for the icon fill
// bg    → tailwind bg tint for the chip

const TECH_META: Record<string, { icon: string; color: string; bg: string }> =
{
    // ── Frontend / Frameworks ─────────────────────────────────────────────
    React: { icon: "simple-icons:react", color: "#00D8FF", bg: "bg-[#E9F8FD]" },
    "Next.js": { icon: "simple-icons:nextdotjs", color: "#000000", bg: "bg-[#F0F0F0]" },
    "Vue.js": { icon: "simple-icons:vuedotjs", color: "#41B883", bg: "bg-[#EDFDF4]" },
    "React Native": { icon: "simple-icons:react", color: "#00D8FF", bg: "bg-[#E9F8FD]" },
    "Shopify Polaris": { icon: "simple-icons:shopify", color: "#95BF47", bg: "bg-[#F2F8E9]" },

    // ── Backend ───────────────────────────────────────────────────────────
    "Node.js": { icon: "simple-icons:nodedotjs", color: "#339933", bg: "bg-[#EDF7ED]" },
    "Ruby on Rails": { icon: "simple-icons:rubyonrails", color: "#CC0000", bg: "bg-[#FDF0EE]" },
    Python: { icon: "simple-icons:python", color: "#3776AB", bg: "bg-[#EEF4FC]" },
    Meteor: { icon: "simple-icons:meteor", color: "#DE4F4F", bg: "bg-[#FDECEC]" },

    // ── Meta / stack bundles (no official logo) ───────────────────────────
    MERN: { icon: "solar:layers-bold-duotone", color: "#00684A", bg: "bg-[#EDF7ED]" },
    "MEAN Stack": { icon: "solar:layers-bold-duotone", color: "#43853D", bg: "bg-[#EDF7ED]" },

    // ── Databases ─────────────────────────────────────────────────────────
    MongoDB: { icon: "simple-icons:mongodb", color: "#00ED64", bg: "bg-[#E8FDF2]" },
    PostgreSQL: { icon: "simple-icons:postgresql", color: "#336791", bg: "bg-[#EEF3FB]" },
    MySQL: { icon: "simple-icons:mysql", color: "#00758F", bg: "bg-[#F0F5FB]" },
    DynamoDB: { icon: "simple-icons:amazondynamodb", color: "#4053D6", bg: "bg-[#ECEAFE]" },

    // ── APIs ──────────────────────────────────────────────────────────────
    GraphQL: { icon: "simple-icons:graphql", color: "#E10098", bg: "bg-[#FCE8F6]" },
    Apollo: { icon: "simple-icons:apollographql", color: "#311C87", bg: "bg-[#ECEAFE]" },

    // ── Cloud / Infra ─────────────────────────────────────────────────────
    AWS: { icon: "simple-icons:amazonwebservices", color: "#FF9900", bg: "bg-[#FFF5E8]" },
    Docker: { icon: "simple-icons:docker", color: "#2496ED", bg: "bg-[#EAF4FE]" },
    Nginx: { icon: "simple-icons:nginx", color: "#009639", bg: "bg-[#E8F5EE]" },
    Heroku: { icon: "simple-icons:heroku", color: "#430098", bg: "bg-[#F0EBFE]" },
    "GitHub Actions": { icon: "simple-icons:githubactions", color: "#2088FF", bg: "bg-[#EAF2FF]" },

    // ── PM / Collaboration ────────────────────────────────────────────────
    Agile: { icon: "solar:refresh-circle-bold-duotone", color: "#534AB7", bg: "bg-[#EEEDFE]" },
    Jira: { icon: "simple-icons:jira", color: "#0052CC", bg: "bg-[#E8F0FB]" },
    Trello: { icon: "simple-icons:trello", color: "#0079BF", bg: "bg-[#E8F3FB]" },
    Teamwork: { icon: "solar:users-group-rounded-bold-duotone", color: "#534AB7", bg: "bg-[#EEEDFE]" },
    InVision: { icon: "simple-icons:invision", color: "#FF3366", bg: "bg-[#FDEDF2]" },

    // ── Fallback ──────────────────────────────────────────────────────────
    _default: { icon: "solar:code-bold-duotone", color: "#71717A", bg: "bg-[#F4F4F5]" },
};

const getMeta = (name: string) => TECH_META[name] ?? TECH_META["_default"];

// ─── Component ───────────────────────────────────────────────────────────────
export default function TechStackSection({
    section,
}: { section: ServicePageSection }) {
    const { techStack } = section;
    if (!techStack?.length) return null;

    return (
        <section className="bg-accent/30! dark:bg-accent" id="tech-stack">

            <div className="container">
                <div className="content-space">
                    <h2 className="text-foreground text-center">
                        Tech Stack
                    </h2>

                    {/* Cards grid — 3 cols mobile → 4 sm → 5 md → 6 lg */}
                    <div className="gap-6 md:gap-4 flex flex-col md:flex-row flex-wrap items-center justify-center">
                        {techStack.map((tech) => {
                            const { icon, color, bg } = getMeta(tech);
                            return (
                                <div
                                    key={tech}
                                    className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col items-center justify-center gap-2.5
                         rounded-lg px-3 py-8 md:py-5 text-center
                         bg-background border border-border
                         cursor-default select-none
                         transition-all duration-200 ease-out
                         hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                                >

                                    <Icon icon={icon} className="w-10 h-10 md:w-15 md:h-15" style={{ color }} />

                                    {/* Name */}
                                    <span className="text-small font-medium text-foreground leading-tight
                               transition-colors duration-200 group-hover:text-primary">
                                        {tech}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}