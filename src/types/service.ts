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