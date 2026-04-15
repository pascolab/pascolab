import { Service } from "@/types/service";
import { getImgPath } from "@/utils/image";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.86",
    description: "Out of 5 stars from 3896 reviews on Google platform",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "364",
    description: "Client testimonials received in the year 2021",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "45M+",
    description: "Revenue generated through new projects & marketing",
  },
];

export const statsContent = {
  title: 'Numbers That Tell Our Story',
  stats: [
    { value: 2, suffix: "+", label: "Years of Building" },
    { value: 10, suffix: "+", label: "Products Shipped" },
    { value: 8, suffix: "+", label: "Core Technologies Used" },
    { label: "Clients Across Multiple Regions" },
  ]
};

export const Progress = [
  { title: 'UX Research and Testing', Progress: 95 },
  { title: 'Product Management', Progress: 84 },
  { title: 'UI & Visual Design', Progress: 90 }
];

export const testimonials = [
  {
    name: 'Paul Smith',
    role: 'Software Tester',
    company: 'Monaco',
    quote: 'The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.',
  },
  {
    name: 'Tim Williams',
    role: 'Business Owner',
    company: 'Proline',
    quote: 'The feedback and analytics tools have also helped us gain valuable insights and continuously improve our services. It\'s like having our own virtual office!',
  },
  {
    name: 'Katie Adams',
    role: 'Entrepreneur',
    company: 'Delaware',
    quote: 'As a marketing professional, I rely heavily on data to drive my campaigns. They have been instrumental in helping me analyze and visualize data effectively.',
  },
  {
    name: 'Alex Schiller',
    role: 'Senior Engineer',
    company: 'Luminous',
    quote: 'With its powerful help desk features and automation capabilities, we have been able to provide faster and more personalized support to our clients.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Vertex',
    quote: 'This platform completely transformed how our team communicates. Remote collaboration has never felt so natural and productive for us.',
  },
  {
    name: 'David Lee',
    role: 'Creative Director',
    company: 'Archetype',
    quote: 'The design flexibility here is unmatched. We were able to tailor every workflow to fit our creative process without any friction.',
  },
  {
    name: 'Mia Torres',
    role: 'Operations Lead',
    company: 'Zenflow',
    quote: 'Onboarding our team was seamless and the support documentation is excellent. We were fully operational within a day of signing up.',
  },
]

export type PortfolioKind = 'Case Study' | 'Blog'

export type PortfolioItem = {
  image: string
  alt: string
  title: string
  slug: string
  info: string
  Class: string
  kind: PortfolioKind
}

export const portfolioinfo: PortfolioItem[] = [
  {
    image: getImgPath('/images/portfolio/cozycasa.png'),
    alt: 'US Fashion Resale Platform case study',
    title: 'US Fashion Resale Platform',
    slug: 'Cozycasa',
    info: 'E-commerce & marketplace',
    Class: 'md:mt-0',
    kind: 'Case Study',
  },
  {
    image: getImgPath('/images/portfolio/mars.png'),
    alt: 'Custom web application development article',
    title: 'Custom Web Application Development: Everything You Need to Know',
    slug: 'Mars',
    info: 'Engineering insights',
    Class: 'md:mt-24',
    kind: 'Blog',
  },
  {
    image: getImgPath('/images/portfolio/humans.png'),
    alt: 'Hospitality AI platform case study',
    title: 'Hospitality AI Platform',
    slug: 'everyday-humans',
    info: 'AI & analytics',
    Class: 'md:mt-0',
    kind: 'Case Study',
  },
  {
    image: getImgPath('/images/portfolio/roket-squred.png'),
    alt: 'Cloud computing transformation article',
    title: 'How Cloud Computing Can Transform Your Operations',
    slug: 'rocket-squared',
    info: 'Cloud strategy',
    Class: 'md:mt-24',
    kind: 'Blog',
  },
  {
    image: getImgPath('/images/portfolio/panda-logo.png'),
    alt: 'Mobile design trends article',
    title: 'Trends of Mobile Design: What’s Next for Your Business?',
    slug: 'panda-logo',
    info: 'UX & mobile',
    Class: 'md:mt-0',
    kind: 'Blog',
  },
  {
    image: getImgPath('/images/portfolio/humans.png'),
    alt: 'Pakistan furniture Shopify migration case study',
    title: 'Pakistan Furniture Leader’s Shopify Migration',
    slug: 'fusion-dynamics',
    info: 'Shopify & retail',
    Class: 'md:mt-0',
    kind: 'Case Study',
  },
  {
    image: getImgPath('/images/portfolio/cozycasa.png'),
    alt: 'Generative AI in business article',
    title: 'How Generative AI Is Transforming Product Teams',
    slug: 'innovate-x-ventures',
    info: 'AI adoption',
    Class: 'md:mt-24',
    kind: 'Blog',
  },
  {
    image: getImgPath('/images/portfolio/mars.png'),
    alt: 'US fintech AI financial modeling case study',
    title: 'US Fintech’s AI Financial Modeling',
    slug: 'nebula-holdings',
    info: 'Fintech & ML',
    Class: 'md:mt-0',
    kind: 'Case Study',
  },
  {
    image: getImgPath('/images/portfolio/panda-logo.png'),
    alt: 'Innovation and venture case study',
    title: 'Summit Partners: Scaling the Product Org',
    slug: 'summit-partners',
    info: 'Product & growth',
    Class: 'md:mt-24',
    kind: 'Case Study',
  }
]

export const services: Service = [
  {
    id: "custom-software-engineering",
    title: "Custom Software Engineering",
    subHeading: "Have a product that needs to be built right from the ground up?",
    description:
      "At Pascolab, we build software around your specific business needs, carefully structured from day one so it remains stable, scalable, and easy to evolve.",
    navReference: "custom-software-engineering",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "enterprise-web-applications",
        title: "Enterprise Web Applications",
        description:
          "High-performance platforms designed for reliability, security, and real-world usage",
        icon: "digital",
        href: "/contact",
      },
      {
        id: "api-design-orchestration",
        title: "API Design & Orchestration",
        description:
          "Well-structured REST and GraphQL layers that integrate seamlessly with external systems",
        icon: "strategy",
        href: "/contact",
      },
      {
        id: "system-modernization",
        title: "System Modernization",
        description:
          "Transforming outdated codebases into scalable architectures without interrupting operations",
        icon: "modernization",
        href: "/contact",
      },
    ],
    techStack: ["React", "Node.js", "Ruby on Rails", "MERN", "PostgreSQL"],
    project: {
      id: "major-project-efuse",
      title: "eFuse",
      description:
        "Architected a unifying portal that aggregates massive real-time data for the global esports community, enabling faster access, better organization, and a seamless user experience.",
      href: "/#portfolio",
    },
  },
  {
    id: "ai-data-systems",
    title: "AI & Data Systems",
    subHeading: "Looking to make your product smarter in a practical way?",
    description:
      "We use AI and data where they genuinely improve how your product works. The focus is on clarity and usefulness for building systems that simplify processes, surface the right insights, and support better decisions without unnecessary complexity.",
    navReference: "ai-data-systems",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "intelligent-workflows",
        title: "Intelligent Workflows",
        description:
          "Automating repetitive tasks to improve efficiency and reduce manual effort",
        icon: "ai",
        href: "/contact",
      },
      {
        id: "data-driven-features",
        title: "Data-Driven Features",
        description:
          "Turning raw data into clear, actionable insights within your product",
        icon: "intelligence",
        href: "/contact",
      },
      {
        id: "scalable-data-systems",
        title: "Scalable Data Systems",
        description:
          "Architectures designed to handle growing data without slowing down performance",
        icon: "data",
        href: "/contact",
      },
    ],
    techStack: ["Next.js", "MongoDB", "GraphQL", "Apollo"],
    project: {
      id: "major-project-insightflow",
      title: "InsightFlow",
      description:
        "Built a data-driven system that transforms complex datasets into structured, easy-to-understand insights for helping teams make faster, more informed decisions.",
      href: "/#portfolio",
    },
  },
  {
    id: "fintech-proptech-systems",
    title: "FinTech & PropTech Systems",
    subHeading: "Building in finance or real estate? Let’s get the foundation right",
    description:
      "In industries where accuracy and trust matter most, we build systems that handle complex data with clarity and precision. From financial workflows to property platforms, everything is designed to be secure, reliable, and easy to use.",
    navReference: "fintech-proptech-systems",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "real-estate-analytics",
        title: "Real Estate Analytics",
        description:
          "Data-driven dashboards and models that support smarter property decisions",
        icon: "analytics",
        href: "/contact",
      },
      {
        id: "digital-onboarding-systems",
        title: "Digital Onboarding Systems",
        description:
          "Secure, paperless flows that simplify user onboarding and verification",
        icon: "shield",
        href: "/contact",
      },
      {
        id: "marketplace-logic",
        title: "Marketplace Logic",
        description: "Smart systems for bookings, rentals, and automated scheduling",
        icon: "strategy",
        href: "/contact",
      },
    ],
    techStack: ["Meteor", "GraphQL", "Apollo", "MongoDB", "MEAN Stack"],
    project: {
      id: "major-project-kfhk-bank",
      title: "KFHK Bank",
      description:
        "Digitized the customer onboarding process, enabling users to open accounts within minutes through a secure and seamless mobile experience.",
      href: "/#portfolio",
    },
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subHeading: "Need infrastructure that won’t slow you down as you grow?",
    description:
      "We design and manage cloud environments that are stable, scalable, and efficient. The focus is on keeping your system running smoothly with minimal downtime and maximum flexibility.",
    navReference: "cloud-devops",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        description:
          "Moving existing systems to modern environments without data loss or disruption",
        icon: "cloud",
        href: "/contact",
      },
      {
        id: "ci-cd-pipelines",
        title: "CI/CD Pipelines",
        description: "Automating deployments to improve speed and reduce manual errors",
        icon: "devops",
        href: "/contact",
      },
      {
        id: "infrastructure-optimization",
        title: "Infrastructure Optimization",
        description:
          "Enhancing performance through load balancing, containerization, and server tuning",
        icon: "infrastructure",
        href: "/contact",
      },
    ],
    techStack: ["AWS", "Docker", "Nginx", "Heroku", "GitHub Actions"],
    project: {
      id: "major-project-screenfluence",
      title: "Screenfluence",
      description:
        "Managed and optimized the cloud distribution network powering large-scale digital advertising screens across multiple locations.",
      href: "/#portfolio",
    },
  },
  {
    id: "ecommerce-headless-commerce",
    title: "E-commerce & Headless Commerce",
    subHeading: "Looking to build more than just a standard online store?",
    description:
      "We create e-commerce systems that are fast, flexible, and built around your business model. From custom Shopify setups to fully integrated backend systems, everything is designed to support growth.",
    navReference: "ecommerce-headless-commerce",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "headless-commerce",
        title: "Headless Commerce",
        description:
          "High-performance storefronts with flexible backend systems for speed and scalability",
        icon: "digital",
        href: "/contact",
      },
      {
        id: "custom-shopify-solutions",
        title: "Custom Shopify Solutions",
        description: "Tailored apps for rewards, warranties, and customer engagement",
        icon: "strategy",
        href: "/contact",
      },
      {
        id: "crm-system-integrations",
        title: "CRM & System Integrations",
        description:
          "Connecting your store with the tools you need to manage and retain customers",
        icon: "data",
        href: "/contact",
      },
    ],
    techStack: ["Shopify Polaris", "Next.js", "DynamoDB", "Node.js"],
    project: {
      id: "major-project-abaco-polarized",
      title: "Abaco Polarized",
      description:
        "Developed a custom Shopify-integrated platform to manage rewards and warranty claims, improving both customer experience and operational efficiency.",
      href: "/#portfolio",
    },
  },
  {
    id: "team-extension-product-leadership",
    title: "Team Extension & Product Leadership",
    subHeading: "Need experienced support without building a full in-house team?",
    description:
      "We work as an extension of your team contributing not just development, but structure, clarity, and direction. From early-stage products to ongoing systems, we help you move forward with confidence.",
    navReference: "team-extension-product-leadership",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    cards: [
      {
        id: "full-lifecycle-support",
        title: "Full Lifecycle Support",
        description:
          "From planning and prototyping to deployment and ongoing improvements",
        icon: "modernization",
        href: "/contact",
      },
      {
        id: "agile-delivery",
        title: "Agile Delivery",
        description:
          "Clear workflows and transparent progress using modern project management tools",
        icon: "devops",
        href: "/contact",
      },
      {
        id: "mvp-development",
        title: "MVP Development",
        description: "Helping startups build solid, investor-ready products without overbuilding",
        icon: "strategy",
        href: "/contact",
      },
    ],
    techStack: ["Agile", "Jira", "Trello", "Teamwork", "InVision"]
  },
];

export const footerCtaContent = {
  title: "Let’s Keep It Simple",
  paragraphs: [
    "If you’re building something new, or trying to fix something that isn’t working.",
    "we’re happy to take a look and give you honest input."
  ],
  primaryCtaLabel: "Let's Talk",
  secondaryCtaLabel: "Start a Project",
  primaryCtaHref: "/contact",
  secondaryCtaHref: "/contact"
};
