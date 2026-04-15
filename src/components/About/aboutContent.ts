import {
  Hammer,
  PackageCheck,
  PenTool,
  Search,
} from "lucide-react";

export const aboutHeroContent = {
  highlight: "> About Us",
  eyebrow: "ABOUT PASCOLAB",
  title: "We build software like it's our own",
  description:
    "Not just to launch — but to last",
};

export const whoWeAreContent = {
  title: "Who We Are",
  paragraphs: [
    "Pascolab is a small, focused team that cares about doing things properly.",
    "We work with people who have ideas, products, or even half-built systems and help turn them into something reliable, scalable, and worth building on.",
    "No shortcuts that come back later. Just solid work, done with intention.",
    "We are a remote-first studio. We've worked with funded startups in New York, enterprise banks in Kuwait, marketplaces in the UK, and healthcare platforms in Sweden. Geography has never been a limitation, clarity of communication and quality of execution are what matter. ",
  ],
};

/** Legacy / story section (image + copy + stats). */
export const aboutLegacyContent = {
  title: whoWeAreContent.title,
  paragraphs: whoWeAreContent.paragraphs,
  imageSrc: "/images/hero/hero-img.jpg",
  imageAlt:
    "Collaborative workspace — Pascolab full-stack development studio",
};


export const howItStartedContent = {
  title:
    "How It Started",
  paragraphs: [
    "Most software doesn’t fail because of bad code.", "It fails because of rushed decisions, unclear thinking, and teams that move on too quickly.",
    "Pascolab started with a simple idea: slow down where it matters, so things don’t break later.",
    "Take the time to understand the problem.",
    "Make the right technical choices early.",
    "And stay accountable until it actually works."
  ],
 
};

export const processWeFollowContent = {
  title:
    "The Process We Follow",
  paragraphs: [
    "We don’t see ourselves as just developers.",
    "We ask questions",
    "We challenge ideas when needed.",
    "We care about whether something will still make sense six months from now,  not just whether it works today.",
    "Because good products aren’t built by just following instructions.",
    "They’re built by thinking through the details most people skip."
  ]
};

export const howWeWorkContent = {
  title: "How We Work",
  steps: [
    {
      step: "01",
      title: "Understand first",
      description:
        "We take time to learn what you’re building and why.",
      icon: Search,
    },
    {
      step: "02",
      title: "Design it properly",
      description:
        "We choose the right structure before writing code.",
      icon: PenTool,
    },
    {
      step: "03",
      title: "Build with clarity",
      description:
        "You see progress as it happens, not at the end.",
      icon: Hammer,
    },
    {
      step: "04",
      title: "Deliver something solid",
      description:
        "Clean, reliable, and ready to grow.",
      icon: PackageCheck,
    },
  ]
};

export const closingCtaContent = {
  title: "Let’s Keep It Simple",
  paragraphs: [
    "If you’re building something new, or trying to fix something that isn’t working,",
    "we’re happy to take a look and give you honest input."
  ],
  primaryCtaLabel: "Let's Talk",
  secondaryCtaLabel: "Start a Project",
  primaryCtaHref: "/contact",
  secondaryCtaHref: "/contact"
};
