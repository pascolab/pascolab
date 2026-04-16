import { Service, ServicePageSection } from "@/types/service";
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

export const servicesPageData: ServicePageSection[] = [
  {
    id: "ai-data-innovation",
    title: "AI & Data Innovation",
    subtitle:
      "Turning your data into intelligent action that drives measurable business results and innovation across every department.",
    icon: "solar:cpu-bold-duotone",
    listingCtaLabel: "Go to AI & Data Innovation",
    eyebrow: "AI & Data Innovation",
    heroTitle: "Build your AI roadmap to ROI with clarity and speed",
    heroSubtitle:
      "Start with a focused AI engagement to identify high-impact opportunities, assess readiness, and define a practical path from experimentation to measurable business value.",
    ctaLabel: "Book a workshop",
    ctaHref: "/contact",
    categories: [
      {
        id: "ai-agents",
        title: "AI Agents",
        description:
          "Deploy intelligent agents to automate workflows and decisions.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "genai-consulting",
        title: "GenAI Consulting & Workshops",
        description:
          "Build your AI roadmap with expert strategy, readiness, and ROI clarity.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "intelligent-automation",
        title: "Intelligent Automation",
        description:
          "Streamline operations using AI-driven automation.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "ai-poc-mvp",
        title: "AI PoC & MVP Development",
        description:
          "Validate AI ideas quickly with proof-of-concept and MVP delivery.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "machine-learning",
        title: "Machine Learning Solutions",
        description:
          "Custom ML models for prediction, classification, and automation.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "mlops",
        title: "MLOps & AI Infrastructure",
        description:
          "Operationalize AI models with secure infrastructure.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "data-science",
        title: "Data Science & Predictive Analytics",
        description:
          "Advanced analytics for actionable business insights.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "data-engineering",
        title: "Data Engineering & Integration",
        description:
          "Scalable data pipelines and system integrations.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "data-governance",
        title: "Data Governance & Business Intelligence",
        description: "Govern, visualize, and trust your data.",
        href: "/services/ai-data-innovation",
      },
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        description:
          "Smart AI software built for real business impact.",
        href: "/services/ai-data-innovation",
      },
    ],
    challenges: [
      {
        value: "70%",
        label: "of AI roadblocks come from people, process, and delivery gaps rather than tooling alone.",
      },
      {
        value: "75%",
        label: "of teams lack the in-house expertise needed to move from ideas to governed implementation.",
      },
      {
        value: "74%",
        label: "of organizations struggle to scale value from AI pilots into durable operating workflows.",
      },
    ],
    services: [
      {
        id: "ai-workshop",
        category: "AI & DATA INNOVATION",
        title: "AI workshop",
        bullets: [
          "Identify high-value AI opportunities.",
          "Build a practical adoption roadmap.",
          "Align teams with hands-on sessions.",
        ],
        href: "/contact",
      },
      {
        id: "readiness-assessment",
        category: "AI & DATA INNOVATION",
        title: "AI strategy & readiness assessment",
        bullets: [
          "Assess data maturity and governance.",
          "Review infrastructure readiness.",
          "Prioritize realistic next steps.",
        ],
        href: "/contact",
      },
      {
        id: "roi-modeling",
        category: "AI & DATA INNOVATION",
        title: "Use case discovery & ROI modeling",
        bullets: [
          "Map use cases to business goals.",
          "Estimate impact and delivery effort.",
          "Rank opportunities by feasibility.",
        ],
        href: "/contact",
      },
      {
        id: "rag-systems",
        category: "IMPLEMENTATION & ENABLEMENT",
        title: "Knowledge & RAG systems",
        bullets: [
          "Connect AI to your business data.",
          "Improve answer quality with context.",
          "Design secure retrieval pipelines.",
        ],
        href: "/contact",
      },
      {
        id: "workflow-automation",
        category: "IMPLEMENTATION & ENABLEMENT",
        title: "Workflow & process automation",
        bullets: [
          "Automate repetitive internal workflows.",
          "Reduce response times and manual effort.",
          "Improve consistency across teams.",
        ],
        href: "/contact",
      },
      {
        id: "agentic-systems",
        category: "IMPLEMENTATION & ENABLEMENT",
        title: "Agentic & multimodal AI systems",
        bullets: [
          "Coordinate text, image, and data inputs.",
          "Support guided decision-making.",
          "Build role-specific intelligent assistants.",
        ],
        href: "/contact",
      },
    ],
    offerTabs: [
      {
        id: "consulting-workshop",
        label: "Consulting & workshop",
        items: [
          {
            title: "AI workshop",
            description:
              "A focused strategy session to uncover opportunities, assess readiness, and align decision-makers around a clear adoption roadmap.",
          },
          {
            title: "AI strategy & readiness assessment",
            description:
              "We evaluate maturity across data, security, workflows, and operating constraints so your roadmap is grounded in reality.",
          },
          {
            title: "Use case discovery & ROI modeling",
            description:
              "Identify and prioritize AI use cases based on impact, feasibility, and expected return rather than hype.",
          },
          {
            title: "Governance & responsible AI advisory",
            description:
              "Shape guardrails, review processes, and model controls that fit your compliance and risk posture.",
          },
          {
            title: "Pilot & proof-of-concept advisory",
            description:
              "Define success metrics, scope lean pilots, and validate value before committing to a broader rollout.",
          },
        ],
      },
      {
        id: "implementation-enablement",
        label: "Implementation & enablement",
        items: [
          {
            title: "LLM integration & customization",
            description:
              "Embed the right models into your workflows while aligning for privacy, reliability, and production fit.",
          },
          {
            title: "Knowledge & RAG systems",
            description:
              "Deliver context-aware answers by connecting AI systems to trusted internal knowledge sources.",
          },
          {
            title: "Workflow & process automation",
            description:
              "Apply AI where it removes friction, accelerates throughput, and improves operational consistency.",
          },
          {
            title: "Code generation & developer copilots",
            description:
              "Support engineering teams with AI-assisted documentation, prototyping, testing, and review workflows.",
          },
          {
            title: "GenAI platform & MLOps enablement",
            description:
              "Set up the infrastructure, observability, and governance required to scale safely after launch.",
          },
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Run a structured workshop to identify high-impact AI opportunities, assess readiness, and align stakeholders on business outcomes before any build begins.",
      },
      {
        step: "02",
        title: "Validate",
        description:
          "Test feasibility through targeted experiments and lean pilots to confirm model fit, data quality, user value, and delivery constraints early.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Move into implementation with clear architecture, responsible AI guardrails, measurable workflows, and an execution plan tied to business goals.",
      },
      {
        step: "04",
        title: "Scale",
        description:
          "Operationalize with monitoring, governance, training, and iteration loops so the solution remains reliable as adoption grows.",
      },
    ],
    industries: [
      {
        id: "financial-services",
        label: "Financial services",
        description:
          "Use generative AI to improve reporting, client support, compliance workflows, and internal knowledge retrieval without sacrificing governance.",
        bullets: [
          "Generate financial summaries and compliance-ready reports faster.",
          "Support analysts with contextual research assistants.",
          "Automate client communication drafts and internal Q&A workflows.",
          "Improve fraud and risk review with better data access patterns.",
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare",
        description:
          "Support care operations, documentation, and patient communication with tightly scoped, human-supervised AI workflows.",
        bullets: [
          "Summarize clinical notes and discharge content efficiently.",
          "Improve staff access to policy and treatment knowledge.",
          "Automate administrative communication and intake workflows.",
          "Design governance patterns for protected health information.",
        ],
      },
      {
        id: "retail-ecommerce",
        label: "Retail & e-commerce",
        description:
          "Bring AI into merchandising, support, and marketing systems to improve speed, consistency, and personalization.",
        bullets: [
          "Generate product content and metadata at scale.",
          "Power support copilots for agents and customers.",
          "Create campaign variants aligned to brand voice.",
          "Surface insights from sales, reviews, and customer feedback.",
        ],
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        description:
          "Make operational knowledge easier to access and turn documentation-heavy workflows into faster, more reliable systems.",
        bullets: [
          "Improve SOP retrieval and technician support.",
          "Generate maintenance and production summaries.",
          "Automate training materials and operational briefs.",
          "Expose quality and process insights from fragmented systems.",
        ],
      },
      {
        id: "software-it",
        label: "Software & IT services",
        description:
          "Accelerate delivery teams with AI-assisted knowledge management, internal tooling, and developer enablement workflows.",
        bullets: [
          "Create engineering copilots and internal assistants.",
          "Summarize incidents, logs, and retrospectives.",
          "Draft technical documentation and onboarding content.",
          "Support delivery operations with AI-enhanced workflow automation.",
        ],
      },
    ],
    expertise: [
      {
        label: "LLMs",
        items: ["OpenAI", "Anthropic", "Gemini", "Llama", "Mistral", "DeepSeek"],
      },
      {
        label: "Agent frameworks",
        items: ["LangChain", "OpenAI Agents", "CrewAI", "Copilot Studio", "LangGraph"],
      },
      {
        label: "Data & retrieval",
        items: ["Qdrant", "Weaviate", "pgvector", "PostgreSQL", "Pinecone"],
      },
    ],
    faqs: [
      {
        question: "What is included in your GenAI consulting workshop?",
        answer:
          "The workshop covers opportunity discovery, readiness assessment, ROI framing, delivery constraints, and a practical roadmap tied to business priorities.",
      },
      {
        question: "How is this different from generic AI strategy consulting?",
        answer:
          "Our approach is delivery-oriented. We focus on where AI can create measurable value, what is realistic to implement, and what should happen next after the workshop.",
      },
      {
        question: "Can you support implementation after strategy work?",
        answer:
          "Yes. We can move from workshop to pilot, MVP, and scaled implementation with architecture, governance, and enablement built into the process.",
      },
      {
        question: "Is this suitable for teams without in-house AI expertise?",
        answer:
          "Yes. The engagement is designed to give decision-makers and delivery teams a clear path forward even when internal AI capability is still emerging.",
      },
      {
        question: "How quickly can we move from workshop to pilot?",
        answer:
          "Most teams can define a pilot path within weeks once the right use case, success metrics, and constraints are clarified during discovery.",
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    subtitle:
      "Architect, migrate, and manage cloud environments that scale with your business while staying secure and cost-efficient.",
    icon: "solar:cloud-bold-duotone",
    listingCtaLabel: "Go to Cloud & Infrastructure",
    eyebrow: "Cloud & Infrastructure",
    heroTitle: "Migrate to the cloud with less disruption and more confidence",
    heroSubtitle:
      "Modernize legacy systems and move critical workloads with a migration strategy that balances continuity, security, performance, and cost control.",
    ctaLabel: "Talk to a cloud expert",
    ctaHref: "/contact",
    categories: [
      {
        id: "cloud-strategy",
        title: "Cloud Strategy & Architecture",
        description:
          "Build a trusted data foundation for consistent, actionable intelligence.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        description:
          "Migrate confidently with a cloud approach that reduces disruption.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "infrastructure-modernization",
        title: "Infrastructure Modernization",
        description:
          "Modernize legacy systems with secure infrastructure for automation.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "cloud-engineering",
        title: "Cloud Engineering",
        description:
          "Build secure, automated, cloud-native systems.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "cloudops-devops",
        title: "CloudOps & DevOps",
        description:
          "Automate delivery and strengthen cloud ops for stable deployments.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "managed-cloud",
        title: "Support & Managed Cloud Services",
        description:
          "Reduce outages with 24/7 cloud monitoring and optimization.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "cloud-cost-optimization",
        title: "Cloud Cost Optimization",
        description:
          "Cut cloud costs with rightsizing, tuning, and FinOps practices.",
        href: "/services/cloud-infrastructure",
      },
      {
        id: "multi-cloud-security",
        title: "Multi-Cloud Security & Compliance",
        description:
          "Get unified threat visibility and security controls with compliance.",
        href: "/services/cloud-infrastructure",
      },
    ],
    challenges: [
      {
        value: "68%",
        label: "of cloud migration delays come from unclear dependencies, legacy constraints, and migration sequencing issues.",
      },
      {
        value: "61%",
        label: "of teams underestimate governance, security, and cost planning during the move to cloud infrastructure.",
      },
      {
        value: "57%",
        label: "of organizations struggle to modernize architecture after lift-and-shift migrations are complete.",
      },
    ],
    services: [
      {
        id: "assessment-planning",
        category: "CLOUD & INFRASTRUCTURE",
        title: "Migration assessment & planning",
        bullets: [
          "Audit systems, workloads, and dependencies.",
          "Define migration waves and risks.",
          "Prioritize by impact and complexity.",
        ],
        href: "/contact",
      },
      {
        id: "application-replatforming",
        category: "CLOUD & INFRASTRUCTURE",
        title: "Application replatforming",
        bullets: [
          "Refactor where it creates real value.",
          "Improve cloud fit and resilience.",
          "Reduce long-term operational drag.",
        ],
        href: "/contact",
      },
      {
        id: "data-migration",
        category: "CLOUD & INFRASTRUCTURE",
        title: "Database & data migration",
        bullets: [
          "Move critical data with validation steps.",
          "Protect integrity during cutovers.",
          "Reduce downtime and rollback risk.",
        ],
        href: "/contact",
      },
      {
        id: "landing-zone",
        category: "SECURITY & OPERATIONS",
        title: "Cloud landing zones",
        bullets: [
          "Set up accounts, networking, and access.",
          "Create secure deployment foundations.",
          "Standardize environments early.",
        ],
        href: "/contact",
      },
      {
        id: "devops-automation",
        category: "SECURITY & OPERATIONS",
        title: "DevOps & deployment automation",
        bullets: [
          "Automate release workflows.",
          "Improve repeatability and recovery.",
          "Lower manual deployment risk.",
        ],
        href: "/contact",
      },
      {
        id: "cost-optimization",
        category: "SECURITY & OPERATIONS",
        title: "Post-migration optimization",
        bullets: [
          "Tune performance and cloud spend.",
          "Improve observability and reliability.",
          "Stabilize the operating model.",
        ],
        href: "/contact",
      },
    ],
    offerTabs: [
      {
        id: "migration-strategy",
        label: "Strategy & planning",
        items: [
          {
            title: "Current-state assessment",
            description:
              "Map existing applications, infrastructure, dependencies, and operational constraints before choosing a migration path.",
          },
          {
            title: "Migration roadmap",
            description:
              "Define the migration sequence, workstreams, risk controls, and milestones needed to move with minimal disruption.",
          },
          {
            title: "Target architecture planning",
            description:
              "Choose cloud patterns, service boundaries, and infrastructure principles that support long-term scalability.",
          },
          {
            title: "Security & compliance planning",
            description:
              "Shape the identity, access, networking, and governance decisions required before workloads move.",
          },
          {
            title: "Cost and operating model analysis",
            description:
              "Estimate cloud economics and clarify the support model needed after migration is complete.",
          },
        ],
      },
      {
        id: "execution-optimization",
        label: "Execution & optimization",
        items: [
          {
            title: "Application migration",
            description:
              "Move services and workloads with the right mix of rehost, replatform, and refactor strategies.",
          },
          {
            title: "Database migration",
            description:
              "Plan cutovers, validation, rollback paths, and data integrity checks for critical systems.",
          },
          {
            title: "CI/CD enablement",
            description:
              "Set up pipelines, deployment controls, and environment automation for repeatable releases.",
          },
          {
            title: "Observability & resilience",
            description:
              "Improve monitoring, alerting, and fault tolerance as workloads settle into the new environment.",
          },
          {
            title: "Performance & cost tuning",
            description:
              "Right-size infrastructure and optimize runtime behavior once the migration is stable.",
          },
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Audit the current estate, identify dependencies, map constraints, and define the migration scope with business continuity in mind.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "Create the migration roadmap, target architecture, landing zone, governance model, and release sequencing before execution starts.",
      },
      {
        step: "03",
        title: "Migrate",
        description:
          "Move workloads in controlled waves with cutover planning, validation steps, and fallback paths to reduce operational risk.",
      },
      {
        step: "04",
        title: "Optimize",
        description:
          "Stabilize operations after migration with observability, performance tuning, security hardening, and cloud cost control.",
      },
    ],
    industries: [
      {
        id: "saas-platforms",
        label: "SaaS platforms",
        description:
          "Improve deployment speed, resilience, and scalability while reducing the operational burden of aging infrastructure.",
        bullets: [
          "Migrate customer-facing applications with low disruption.",
          "Improve release processes through CI/CD automation.",
          "Design cloud foundations that support product growth.",
          "Tune infrastructure for better performance and cost control.",
        ],
      },
      {
        id: "fintech",
        label: "FinTech",
        description:
          "Move regulated workloads with stronger governance, access controls, and architecture planning built into the migration process.",
        bullets: [
          "Align migration planning with compliance constraints.",
          "Protect sensitive systems and data paths during cutovers.",
          "Improve observability for critical financial workflows.",
          "Reduce infrastructure risk without slowing delivery teams.",
        ],
      },
      {
        id: "retail",
        label: "Retail & e-commerce",
        description:
          "Support traffic variability, faster releases, and better uptime for customer-facing digital systems.",
        bullets: [
          "Improve resilience during seasonal traffic spikes.",
          "Modernize storefront and backend infrastructure.",
          "Reduce deployment friction across environments.",
          "Support analytics and integration-heavy commerce stacks.",
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare",
        description:
          "Plan carefully for risk, continuity, and security when modernizing systems tied to care operations and sensitive data.",
        bullets: [
          "Move legacy systems with minimal downtime.",
          "Build stronger access controls and network segmentation.",
          "Increase reliability for critical internal applications.",
          "Create clearer operational visibility after migration.",
        ],
      },
      {
        id: "media",
        label: "Media & content platforms",
        description:
          "Support variable workloads, faster publishing systems, and distributed infrastructure needs with cloud-native patterns.",
        bullets: [
          "Handle burst traffic and large content volumes.",
          "Improve deployment velocity for fast-moving teams.",
          "Support asset workflows with modern infrastructure.",
          "Optimize cloud resources for cost-sensitive workloads.",
        ],
      },
    ],
    expertise: [
      {
        label: "Cloud platforms",
        items: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Heroku"],
      },
      {
        label: "Infrastructure & deployment",
        items: ["Docker", "Kubernetes", "Terraform", "Nginx", "GitHub Actions"],
      },
      {
        label: "Data & observability",
        items: ["PostgreSQL", "MongoDB", "Prometheus", "Grafana", "Datadog"],
      },
    ],
    faqs: [
      {
        question: "How do you reduce risk during cloud migration?",
        answer:
          "We reduce risk through dependency mapping, phased migration plans, validation checkpoints, rollback paths, and clear operational ownership before each move.",
      },
      {
        question: "Do you only support lift-and-shift migrations?",
        answer:
          "No. We help choose the right mix of rehost, replatform, and refactor strategies depending on business needs, technical debt, and timeline.",
      },
      {
        question: "Can you modernize our deployment process during migration?",
        answer:
          "Yes. We frequently pair migrations with CI/CD improvements, environment automation, and better observability so teams gain long-term benefits after the move.",
      },
      {
        question: "How do you handle security and compliance requirements?",
        answer:
          "Security and governance are built into the planning phase, including access patterns, networking, logging, and operational controls appropriate to the environment.",
      },
      {
        question: "What happens after migration is complete?",
        answer:
          "We support post-migration stabilization, cost tuning, monitoring improvements, and architecture refinements so the cloud environment performs well over time.",
      },
    ],
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
