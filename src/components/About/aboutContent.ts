import {
  Briefcase,
  Calendar,
  Earth,
  Globe2,
  HeartHandshake,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { brands, type Brand } from "@/components/Home/Brands/brandsData";

export const aboutHeroContent = {
  /** Highlight line above the headline (not a breadcrumb). */
  highlight: "> About Us",
  eyebrow: "ABOUT PASCOLAB",
  title: "We take ownership. Most studios don't.",
  description:
    "Pascolab is a remote-first full-stack development studio. We've spent over a decade building software that actually works — not just software that ships.",
};

export const aboutOurStoryContent = {
  eyebrow: "OUR STORY",
  title: "Built on a single principle: write software that solves real problems.",
  paragraphs: [
    "Pascolab started with a straightforward idea — that great software isn't about clever code or the trendiest framework. It's about deeply understanding the problem, making smart architectural decisions, and following through with discipline from the first commit to the last deployment.",
    "Over the years we've built products across fintech, healthcare, real estate, logistics, media, and SaaS. Some of those products have been acquired. Some are used by thousands of people every day. All of them were built the same way: with full ownership, zero shortcuts, and a genuine stake in the outcome.",
    "We are a remote-first studio. We've worked with funded startups in New York, enterprise banks in Kuwait, marketplaces in the UK, and healthcare platforms in Sweden. Geography has never been a limitation — clarity of communication and quality of execution are what matter.",
  ],
};

/** Legacy / story section (image + copy + stats). */
export const aboutLegacyContent = {
  eyebrow: aboutOurStoryContent.eyebrow,
  title: aboutOurStoryContent.title,
  paragraphs: aboutOurStoryContent.paragraphs,
  imageSrc: "/images/hero/hero-img.jpg",
  imageAlt:
    "Collaborative workspace — Pascolab full-stack development studio",
};

export const legacyStats: {
  Icon: LucideIcon;
  value: string;
  label: string;
}[] = [
  { Icon: Calendar, value: "10+", label: "Years of experience" },
  { Icon: Briefcase, value: "15+", label: "Projects delivered" },
  { Icon: Sparkles, value: "8+", label: "Technologies mastered" },
  { Icon: Globe2, value: "4", label: "Industries served" },
];

export const aboutPartnersContent = {
  title: "Partners",
  description:
    "We integrate with the tools your business already runs on—so delivery stays fast, secure, and aligned with your stack.",
  ctaLabel: "Talk to us",
  ctaHref: "/contact",
};

/** Nine slots for the partners grid (7 unique logos + 2 repeats). */
export const partnerGridBrands: Brand[] = [
  ...brands,
  brands[0]!,
  brands[1]!,
];

export const aboutCoreValuesContent = {
  title: "What we stand for",
  description: "Four principles that govern every project we touch.",
};

export const coreValues: {
  Icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    Icon: Shield,
    title: "Ownership, not execution",
    description:
      "We don't just write what's in the ticket. We think about the problem, flag the risks, and bring solutions — not just status updates.",
  },
  {
    Icon: Sparkles,
    title: "Quality over velocity",
    description:
      "We'd rather take an extra day than ship something that breaks in production. Speed without discipline isn't a feature — it's debt.",
  },
  {
    Icon: HeartHandshake,
    title: "Radical transparency",
    description:
      "If something isn't working, we say so. If a deadline is at risk, you hear it from us first — not when it's too late to course-correct.",
  },
  {
    Icon: Earth,
    title: "Long-term thinking",
    description:
      "We architect for where your product is going, not just where it is today. Our best work is still running cleanly years after we handed it over.",
  },
];

export const aboutMissionContent = {
  eyebrow: "Our mission",
  title:
    "To engineer software with the clarity, ownership, and craft that most teams reserve for their own products.",
  paragraphs: [
    "We exist to close the gap between what clients are told they'll get and what they actually receive. Too many development projects end with brittle codebases, missed timelines, and teams that disappear after handoff. We're the alternative to that.",
  ],
  practicalIntro: "What this means in practice:",
  practicalParagraphs: [
    "Every project we take on gets our full technical judgment — not just our hands. We tell clients when their scope is wrong, when their tech choices will hurt them later, and when the simplest solution is the best one. We don't build what we're told to build. We build what should be built.",
  ],
};

export const aboutVisionContent = {
  eyebrow: "Our vision",
  title:
    "A world where ambitious products get the engineering talent they deserve — regardless of where that talent is located.",
  paragraphs: [
    "The best engineers aren't all in San Francisco or London. The best product ideas don't only come from well-funded companies. Our vision is a future where geography is no longer a barrier to building exceptional software — where a healthcare startup in Lahore can access the same caliber of engineering as a Series B company in New York.",
    "We are building toward that by consistently raising the standard of what remote-first development looks like: fast communication, clean code, honest timelines, and products we're genuinely proud to have our name on.",
  ],
  directionTitle: "Where we're headed:",
  directionParagraphs: [
    "We are expanding our capabilities into AI-integrated product engineering — building systems that don't just automate tasks but genuinely augment human decision-making. The next decade of software will be defined by how intelligently it assists its users. We intend to be at the forefront of that.",
  ],
};

export const aboutHowWeWorkContent = {
  eyebrow: "How we work",
  title: "A process built around clarity, not ceremony.",
  intro:
    "We don't impose heavyweight process for the sake of looking organized. Our workflow is lean, transparent, and designed to keep you informed without drowning you in meetings.",
};

export const howWeWorkSteps: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Before we write a line of code, we understand your users, your constraints, and your definition of success. We ask the questions most teams skip.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "We design systems for the real requirements — not an idealized version of them. The right stack, the right structure, the right tradeoffs, documented clearly.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints with weekly demos. You see working software early and often. No surprises at the end of the project.",
  },
  {
    step: "04",
    title: "Deploy & Own",
    description:
      "We hand over clean, well-documented code. No lock-in, no dependency on us for basics. You own your product completely.",
  },
];

export const aboutIndustriesContent = {
  eyebrow: "Industries we've worked in",
  title: "Depth across sectors. No industry is too specialized.",
  description:
    "Our experience spans more than a decade across highly regulated and fast-moving industries alike. We understand that healthcare software is not the same problem as an e-commerce platform — and we approach each domain with the specific knowledge it demands.",
};

export const industries: {
  title: string;
  description: string;
}[] = [
  {
    title: "Fintech & Banking",
    description:
      "Digital onboarding, payment platforms, core banking integrations",
  },
  {
    title: "Healthcare",
    description:
      "Appointment systems, caregiver platforms, patient management",
  },
  {
    title: "Real Estate",
    description:
      "Investment analytics, rental platforms, property data tools",
  },
  {
    title: "SaaS & Marketplaces",
    description:
      "Multi-sided platforms, subscription systems, API-first architecture",
  },
  {
    title: "E-commerce",
    description:
      "Shopify apps, CRM integrations, rewards and loyalty systems",
  },
  {
    title: "Media & Entertainment",
    description:
      "Content platforms, news aggregators, entertainment apps",
  },
];

export const aboutWhyPascolabContent = {
  eyebrow: "Why Pascolab",
  title: "What makes us different isn't what we say. It's what we don't do.",
  bullets: [
    "We don't pad timelines to make ourselves look efficient later.",
    "We don't take on projects we're not the right fit for.",
    "We don't disappear after handoff — we document, we train, we transfer knowledge properly.",
    "We don't treat technical debt as someone else's problem. We flag it, price it, and fix it.",
    "We don't hide behind process when something goes wrong. We take accountability and fix it.",
  ],
  closingParagraph:
    "The companies we've worked with come back — not because of a retainer or a contract, but because the software we built is still running well, and because working with us didn't feel like a gamble.",
};

export const aboutRemoteFirstContent = {
  eyebrow: "Remote-first, not remote-lite",
  title: "We've been remote since before it was a necessity.",
  paragraphs: [
    "Remote work only fails when teams treat it as a compromise. We've spent years building the communication habits, documentation culture, and async discipline that make distributed work feel as natural as sitting in the same room.",
  ],
  experienceTitle: "What our clients experience:",
  experienceParagraph:
    "Clear written communication. Async updates that don't require meetings to decode. Demos that show working software, not slides about software. Timezone gaps that don't translate into delays because we plan around them, not through them.",
};

export const aboutClosingCtaContent = {
  title: "Got a product to build?",
  description:
    "Whether you're starting from scratch or rescuing something half-built — let's have an honest conversation about what you need.",
  primaryCtaLabel: "Let's Talk",
  secondaryCtaLabel: "Start a Project",
  primaryCtaHref: "/contact",
  secondaryCtaHref: "/contact",
  footerLine:
    "PASCOLAB · Full-Stack Development Studio · Building software that works. Since 2014.",
};
