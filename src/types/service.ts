export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type ServiceProject = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  subHeading: string;
  description: string;
  navReference: string;
  ctaLabel: string;
  ctaHref: string;
  cards: ServiceCard[];
  techStack: string[];
  project?: ServiceProject;
};

export type Service = ServiceItem[];

export type ServiceCategoryItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type ChallengeItem = {
  value: string;
  label: string;
};

export type ServiceSliderCard = {
  id: string;
  category: string;
  title: string;
  bullets?: string[];
  href: string;
};

export type OfferTabItem = {
  title: string;
  description: string;
};

export type OfferTab = {
  id: string;
  label: string;
  items: OfferTabItem[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type IndustryTab = {
  id: string;
  label: string;
  description: string;
  bullets: string[];
};

export type ExpertiseGroup = {
  label: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Single entry covering both the /services listing section and the /services/[id] detail page.
 * `id` is used as the URL slug for the detail page.
 */
export type ServicePageSection = {
  id: string;

  // ── Listing page (services overview) ──────────────────────────────
  title: string;          // section heading, e.g. "AI & Data Innovation"
  subtitle: string;       // short section description
  icon: string;           // iconify icon string
  listingCtaLabel: string; // CTA label on listing, e.g. "Go to AI & Data Innovation"
  categories: ServiceCategoryItem[];

  // ── Detail page hero ───────────────────────────────────────────────
  eyebrow: string;        // small label above hero heading
  heroTitle: string;      // main hero heading
  heroSubtitle: string;   // hero supporting text
  ctaLabel: string;       // hero CTA button label
  ctaHref: string;        // hero CTA destination (e.g. "/contact")

  // ── Detail page sections ───────────────────────────────────────────
  challenges: ChallengeItem[];
  services: ServiceSliderCard[];
  offerTabs: OfferTab[];
  process: ProcessStep[];
  industries: IndustryTab[];
  expertise: ExpertiseGroup[];
  faqs: FaqItem[];
};
