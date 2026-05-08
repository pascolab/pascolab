export interface ProjectFeature {
    title: string;
    description: string;
  }
  
  export interface Project {
    image: string;
    mockup: string;
    slug: string;
    title: string;
    categories: string[];
    liveUrl?: string;
    crmUrl?: string;
    overview: string;
    whatWeBuilt: ProjectFeature[];
    approach: string[];
    techStack: string[];
    outcome: string;
    cta: {
      title: string;
      description: string;
      actionText: string;
      href: string;
    };
  }