import { CareersPageData } from "@/types/career";
import { Project } from "@/types/project";
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


export const projects: Project[] = [
  {
    image: getImgPath("/images/portfolio/project-mockups/screenfluence.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/screenfluence.png"),
    slug: "screenfluence",
    title: "Screenfluence",
    categories: ["AdTech", "SaaS", "Digital Signage Platform"],
    overview:
      "Screenfluence is a cloud-based digital signage platform that gives businesses complete control over their advertising content across distributed screen networks from a single dashboard. Clients can upload media, build display schedules, and push content updates to any number of screens and locations in real time, with no physical access to devices required.",
    whatWeBuilt: [
      {
        title: "Centralized Content Management",
        description:
          "A cloud portal where businesses upload, organize, and manage all advertising content from one place, structured for speed and clarity at scale.",
      },
      {
        title: "Remote Screen Distribution",
        description:
          "A real-time content delivery system that syncs media across connected displays instantly, keeping every screen current without on-site intervention.",
      },
      {
        title: "Scheduling & Playlist Management",
        description:
          "Flexible scheduling tools with time-based and location-based rules, giving operators precise control over what plays, where, and when.",
      },
      {
        title: "Enterprise Client Management",
        description:
          "Role-based access controls, multi-client organization, and scalable SaaS infrastructure designed to grow alongside advertising networks of any size.",
      },
    ],
    approach: [
      "The core challenge was building a platform that could handle large-scale digital signage operations without adding complexity for the teams managing them.",
      "We prioritized reliability and a clean, predictable user experience making it easy to manage campaigns, push updates, and keep screens in sync across multiple locations.",
      "Particular attention went into content synchronization stability, and long-term maintainability of the underlying system architecture.",
    ],
    techStack: [
      "Ruby on Rails",
      "Cloud Infrastructure",
      "Digital Signage Systems",
    ],
    outcome:
      "Screenfluence is a fully operational SaaS platform actively powering digital advertising networks across North America. It helps businesses manage content distribution more efficiently while eliminating the operational burden of manual screen management.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  {
    image: getImgPath("/images/portfolio/project-mockups/viatrm.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/viatrm.png"),
    slug: "viatrm",
    title: "ViaTrm",
    categories: ["EdTech", "SaaS", "Study Abroad Management Platform"],
    overview:
      "ViaTrm is a comprehensive study abroad management platform built for universities and international education offices. It centralizes the entire student mobility lifecycle from applications and advising through travel coordination and institutional reporting inside one unified system. Designed as a multi-tenant SaaS product, ViaTrm helps universities run international programs more efficiently while delivering a better experience for students and administrators alike.",
    whatWeBuilt: [
      {
        title: "Student Workflow Management",
        description:
          "A structured application and pre-departure system that guides students through every step of the study abroad process with clarity and minimal friction.",
      },
      {
        title: "Advisor & Administration Dashboards",
        description:
          "Centralized dashboards giving advisors real-time visibility into student engagement, application progress, approvals, and program activity.",
      },
      {
        title: "Institutional Program Management",
        description:
          "Tools for managing university partnerships, travel logistics, and international program records, all in one organized system.",
      },
      {
        title: "Multi-Tenant SaaS Architecture",
        description:
          "A scalable platform structure where each university operates within its own secure, independently configured environment under a shared infrastructure.",
      },
    ],
    approach: [
      "Universities were managing study abroad programs through spreadsheets, disconnected tools, and manual communication, a process that was slow, error-prone, and hard to scale.",
      "Our focus was building a platform that creates clarity across the entire study abroad lifecycle.",
      "Advisors needed operational control; students needed a smooth, accessible experience.",
      "We designed for both, with strong attention to data organization, scalability, and the flexibility required to support multiple institutions under one architecture.",
    ],
    techStack: ["React", "Ruby on Rails", "PostgreSQL"],
    outcome:
      "ViaTrm grew into a global SaaS platform adopted by universities across multiple regions to manage international education programs more effectively. It later expanded into multiple specialized product lines, a testament to the scalability and flexibility built into the original system architecture.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/house-folios.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/housefolios.png"),
    slug: "housefolios",
    title: "HouseFolios",
    categories: [
      "Real Estate",
      "SaaS",
      "Investment Analytics Platform",
    ],
    overview:
      "HouseFolios is a real estate investment management platform that helps investors move faster and make better decisions through structured, data-driven analytics. The platform supports the full investment lifecycle, deal sourcing, property analysis, offer management, rehab tracking, and portfolio oversight, all within one centralized system.",
    whatWeBuilt: [
      {
        title: "Property Analytics Engine",
        description:
          "A powerful evaluation system that processes investment opportunities using key metrics: ROI, cash flow projections, cap rate, and ARV calculations, giving investors the data they need to act with confidence.",
      },
      {
        title: "Deal Sourcing & Market Comparisons",
        description:
          "Integrated property search and market comparison tools that let investors analyze opportunities faster and benchmark against relevant market data.",
      },
      {
        title: "Investment Workflow Management",
        description:
          "End-to-end tools for managing offers, tracking deal closings, monitoring active rehab projects, and organizing property portfolios in one place.",
      },
      {
        title: "Collaborative Investor Platform",
        description:
          "Shared portfolio management features that support team collaboration and group investment decisions across organizations.",
      },
    ],
    approach: [
      "Real estate investors have long relied on fragmented tools, manual spreadsheets, and incomplete market data to make high-stakes decisions.",
      "We set out to replace that with a platform that transforms raw property data into a clear, actionable investment workflow.",
      "The architecture was built to process large volumes of property information while keeping the experience fast and highly interactive designed for investors who are actively working deals, not just reviewing reports.",
      "Data visualization, real-time updates, and scalable analytics infrastructure were central to every design decision.",
    ],
    techStack: [
      "Meteor",
      "React",
      "GraphQL",
      "Apollo",
      "MongoDB",
    ],
    outcome:
      "HouseFolios is a growing SaaS platform serving real estate investors across the US market, helping users evaluate opportunities faster and manage their portfolios through a centralized, analytics-driven system. The platform continues to expand with new features and an active and growing user base.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/sellify.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/sellify.png"),
    slug: "sellifyhq",
    title: "SellifyHQ",
    categories: ["B2B Commerce", "SaaS", "Wholesale Growth Platform"],
    overview:
      "SellifyHQ is a wholesale growth platform built for modern product brands that need to manage B2B sales, inventory, customer relationships, and e-commerce operations in one connected system. It brings together CRM functionality, inventory-aware workflows, and wholesale ordering tools, eliminating the friction that comes from running these operations across disconnected platforms.",
    whatWeBuilt: [
      {
        title: "Wholesale B2B Platform",
        description:
          "A self-serve ordering system purpose-built around how B2B buyers actually place and manage orders, streamlined, transparent, and easy to use.",
      },
      {
        title: "Stock-Aware CRM",
        description:
          "CRM workflows connected directly to live inventory and order data, giving sales teams full visibility into account health and stock availability in real time.",
      },
      {
        title: "Inventory & Order Synchronization",
        description:
          "Systems that keep inventory levels, customer accounts, and order data synchronized across connected tools and sales channels automatically.",
      },
      {
        title: "Sales & Account Management Tools",
        description:
          "Features for pipeline tracking, follow-ups, account health monitoring, and automated reorder workflows built specifically for the needs of product-based wholesale businesses.",
      },
    ],
    approach: [
      "Wholesale operations typically suffer from the same problem: sales, inventory, and customer data live in separate systems that don't talk to each other.",
      "The result is slow order processing, poor visibility, and a frustrating experience for B2B buyers.",
      "We built SellifyHQ to solve that at the core; a platform where inventory, CRM activity, and commerce are connected in real time, with a scalable architecture that reduces operational complexity instead of adding to it.",
    ],
    techStack: [
      "React",
      "SaaS Architecture",
      "CRM Systems",
      "Inventory Management",
      "B2B Commerce",
    ],
    outcome:
      "SellifyHQ is a scalable wholesale growth platform helping brands manage B2B operations more efficiently through connected CRM, inventory, and commerce workflows. It continues to support businesses looking to streamline wholesale sales, automate day-to-day operations, and improve customer management through one unified system.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  {
    image: getImgPath("/images/portfolio/project-mockups/machinetools.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/machinetools.png"),
    slug: "machinetools",
    title: "MachineTools.com",
    categories: [
      "Industrial",
      "B2B Marketplace",
      "Manufacturing Platform",
    ],
    overview:
      "MachineTools.com is one of the world's leading marketplaces for industrial machinery, connecting buyers and sellers of new and used manufacturing equipment across global markets. The platform handles thousands of listings across hundreds of industrial equipment categories, serving manufacturers, dealers, and procurement teams worldwide.",
    whatWeBuilt: [
      {
        title: "Industrial Marketplace Infrastructure",
        description:
          "A large-scale marketplace system engineered to manage machinery listings across a vast and highly varied category taxonomy reliably and at volume.",
      },
      {
        title: "Advanced Search & Filtering",
        description:
          "Powerful search with category, price range, condition, and location filters that make equipment discovery fast and precise for buyers across international markets.",
      },
      {
        title: "Dealer & Seller Management Tools",
        description:
          "Tools that give dealers and individual sellers full control over their inventory listings, inquiry management, and marketplace presence.",
      },
      {
        title: "Lead Generation & Buyer Connections",
        description:
          "Integrated workflows that route qualified buyer inquiries to the right sellers and streamline the entire inquiry-to-connection process.",
      },
    ],
    approach: [
      "Industrial equipment procurement has historically relied on fragmented supplier networks, limited market transparency, and time-consuming sourcing processes.",
      "The opportunity was to build a trusted, high-volume marketplace that could make equipment discovery genuinely fast and reliable for global buyers and sellers.",
      "We focused on scalable architecture, a well-structured category taxonomy, and reliable search performance capable of handling high traffic across international markets, all without sacrificing usability or platform stability.",
    ],
    techStack: ["Ruby on Rails", "B2B Marketplace Architecture"],
    outcome:
      "MachineTools.com continues to operate as a leading global marketplace for industrial machinery, serving manufacturers, equipment dealers, and industrial buyers worldwide. It remains an active, high-traffic destination for equipment discovery, lead generation, and marketplace operations at enterprise scale.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/happinest.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/happinest.png"),
    slug: "happinest",
    title: "HappiNest",
    categories: [
      "Digital Health",
      "Mental Wellbeing",
      "Maternal Care Platform",
    ],
    overview:
      "HappiNest is a digital wellbeing platform built to support the emotional and mental health of new and expecting parents across pregnancy, postpartum, and the early stages of parenthood. It provides structured guidance, expert-led therapy access, and personalized care pathways that help parents navigate one of life's most significant transitions with confidence and proper support. The platform bridges the gap between clinical care and everyday emotional well-being, ensuring no one is left without guidance when they need it most.",
    whatWeBuilt: [
      {
        title: "Personalized Maternal Mental Health Journeys",
        description:
          "Guided care experiences tailored to each user's specific stage of pregnancy, postpartum, or early parenting with support that evolves as their needs change.",
      },
      {
        title: "Expert Access & Therapy Integration",
        description:
          "Direct access to licensed therapists, counselors, and maternal health specialists for consultations, ongoing sessions, and emotional support available within the platform.",
      },
      {
        title: "Mood & Wellbeing Tracking",
        description:
          "A simple but powerful tracking system that monitors emotional patterns and stress levels over time, enabling proactive care before challenges escalate.",
      },
      {
        title: "Content & Guidance Library",
        description:
          "A medically reviewed content library covering anxiety, postpartum depression, sleep challenges, relationship changes, and the emotional demands of early parenting.",
      },
      {
        title: "Support Network Features",
        description:
          "Community tools that connect parents with peer groups and guided support programs, designed to reduce isolation and build a sense of shared experience.",
      },
    ],
    approach: [
      "Maternal mental health is chronically underserved in traditional healthcare, often deprioritized despite being critical to both parent and child wellbeing.",
      "HappiNest was built to change that.",
      "The goal was a platform that treats emotional health with the same seriousness as physical health, and makes accessing support feel as easy as possible.",
      "We built with a strong emphasis on personalization, sensitive data handling, privacy, and reducing friction at every point of care access.",
      "The architecture supports continuous user engagement and scalable expert access across regions.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Healthcare API Integrations",
      "Cloud-Based Architecture",
    ],
    outcome:
      "HappiNest serves as a growing digital companion for new and expecting parents, helping them manage emotional stress, connect with expert care, and feel genuinely supported throughout their parenting journey. It continues to expand as a trusted mental well-being layer within maternal healthcare.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/study-abroad-apartments.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/studyabroadapartments.png"),
    slug: "study-abroad-apartments",
    title: "Study Abroad Apartments",
    categories: [
      "PropTech",
      "Student Housing Marketplace",
      "Global Accommodation Platform",
    ],
    overview:
      "Study Abroad Apartments is a global housing marketplace built to help international students find and book safe, verified, and fully furnished accommodation — removing one of the most stressful parts of studying abroad. The platform consolidates trusted listings, transparent property information, and a seamless booking experience into one place, purpose-built for students relocating across countries.",
    whatWeBuilt: [
      {
        title: "Verified Student Housing Marketplace",
        description:
          "A structured listing system featuring verified apartments, vetted housing providers, and furnished rentals across major student cities worldwide.",
      },
      {
        title: "Advanced Search & Location Filters",
        description:
          "Smart filters that let students search by city, proximity to their university, budget, lease duration, and available amenities, narrowing options quickly and reliably.",
      },
      {
        title: "Seamless Booking Experience",
        description:
          "An end-to-end booking flow that simplifies inquiries, reservations, and confirmations, designed for students navigating an unfamiliar country and process.",
      },
      {
        title: "Trust & Safety Layer",
        description:
          "Verification systems for listings, landlords, and properties that ensure students are only accessing reliable options, never left to guess.",
      },
    ],
    approach: [
      "International students face a uniquely difficult housing challenge, making high-stakes accommodation decisions from abroad, with limited local knowledge and too many unreliable options.",
      "We built the platform around resolving that uncertainty, creating a trusted global marketplace with strong data structuring, location intelligence, and verification mechanisms that make the right decision easier to reach.",
      "The goal was to reduce decision-making friction for students navigating new countries, at a moment when stress is already high.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Marketplace Infrastructure",
      "Cloud Storage & APIs",
    ],
    outcome:
      "Study Abroad Apartments has become a trusted destination for international students seeking safe, verified housing abroad. The platform continues to grow as a reliable resource that makes international student relocation faster, safer, and far less stressful.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/greatest-hire.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/greatesthire.png"),
    slug: "greatest-hire",
    title: "Greatest Hire",
    categories: [
      "HR Tech",
      "Recruitment Platform",
      "Talent Marketplace",
    ],
    overview:
      "Greatest Hire is a modern recruitment platform built to help companies connect with the right talent through structured, efficient hiring workflows. It streamlines the full hiring journey from sourcing and screening through evaluation and onboarding, making recruitment faster, more consistent, and more data-informed.",
    whatWeBuilt: [
      {
        title: "Smart Candidate Sourcing",
        description:
          "A centralized system that helps recruiters discover, manage, and shortlist candidates efficiently from multiple talent pools without losing track of anyone in the process.",
      },
      {
        title: "Structured Hiring Pipelines",
        description:
          "Customizable workflows that move candidates through defined stages like screening, interviews, evaluation, and onboarding, keeping every hire on track and every team aligned.",
      },
      {
        title: "Team Collaboration Tools",
        description:
          "Real-time collaboration features that let hiring managers and HR teams share feedback, compare assessments, and make decisions together in a single place.",
      },
      {
        title: "Standardized Evaluation Framework",
        description:
          "Consistent evaluation tools that reduce bias, improve hiring accuracy, and make it easier to compare candidates fairly across roles.",
      },
    ],
    approach: [
      "Most hiring processes are slower and more chaotic than they need to be, built on disconnected tools, inconsistent evaluation criteria, and communication spread across emails and spreadsheets.",
      "Greatest Hire was designed to replace that with a unified, workflow-driven system.",
      "We focused on usability, structured pipelines, and an architecture that scales as hiring teams grow with equal attention paid to reducing time-to-hire and improving the experience for candidates going through the process.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Workflow Engine",
      "Cloud-Based SaaS Architecture",
    ],
    outcome:
      "Greatest Hire continues to help companies build stronger teams by making recruitment more structured, transparent, and scalable. It is actively used to streamline hiring and improve collaboration across HR and talent acquisition teams.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  
  {
    image: getImgPath("/images/portfolio/project-mockups/the-d-zone.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/thedzone.png"),
    slug: "the-d-zone",
    title: "The D Zone",
    categories: [
      "Sports Media",
      "Content Platform",
      "High School Football Analytics",
    ],
    overview:
      "The D Zone is a sports content platform dedicated to high school football, delivering real-time updates, news, and data-driven insights to athletes, coaches, recruiters, and fans. The platform provides comprehensive coverage: schedules, rankings, player statistics, and recruiting profiles all in one structured destination built around the needs of high school sports.",
    whatWeBuilt: [
      {
        title: "Real-Time Sports Content Engine",
        description:
          "A publishing system built to deliver live game updates, results, and breaking news at the pace high school football actually moves during busy seasons with many simultaneous events.",
      },
      {
        title: "Player Stats & Rankings System",
        description:
          "Dynamic tracking of athlete performance, season statistics, and regional rankings is updated continuously and organized for quick reference by coaches and recruiters.",
      },
      {
        title: "Game Schedules & Results Hub",
        description:
          "A centralized, always-current hub for fixtures, match schedules, and real-time results across teams and regions.",
      },
      {
        title: "Recruiting Insights Platform",
        description:
          "Data-driven athlete profiles and performance insights are designed to improve player visibility and support college recruiting decisions with better information.",
      },
    ],
    approach: [
      "High school sports data has traditionally been scattered, inconsistent, and difficult to access in a timely way, especially for a stakeholder group as varied as athletes, coaches, fans, and recruiters.",
      "We built The D Zone to consolidate that information into a structured, scalable platform that serves all of those audiences well.",
      "Real-time data handling, efficient content delivery, and a clear information architecture were central priorities, particularly during peak season when traffic spikes significantly.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Real-Time Data APIs",
      "Content Management System",
    ],
    outcome:
      "The D Zone has become a key destination for high school football coverage, giving athletes, coaches, recruiters, and fans reliable, timely access to the information they need. The platform continues to grow as a trusted source for high school sports data and player visibility.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  },
  {
    image: getImgPath("/images/portfolio/project-mockups/abaco.jpg"),
    mockup: getImgPath("/images/portfolio/project-mockups/details/abaco.png"),
      slug: "abaco-polarized",
    title: "Abaco Polarized",
    categories: ["E-commerce", "Shopify", "CRM Integration"],
    overview:
      "Abaco Polarized needed more than just an online store. They required a connected system that could manage customer engagement, rewards, and post-purchase workflows, all in one place.",
    whatWeBuilt: [
      {
        title: "Custom Shopify Applications",
        description:
          "Developed tailored apps for rewards and warranty management",
      },
      {
        title: "CRM Platform",
        description:
          "Built a dedicated CRM system to manage customer data, engagement, and lifecycle",
      },
      {
        title: "Integrated Ecosystem",
        description:
          "Connected storefront and backend systems for a smooth, unified workflow",
      },
    ],
    approach: [
      "We focused on creating a system that works beyond the storefront, where customer interactions, rewards, and warranties are all managed seamlessly without adding operational complexity.",
      "The goal was not just functionality, but clarity and efficiency for both the business and its users.",
    ],
    techStack: [
      "Shopify Themes",
      "React",
      "Next.js",
      "Node.js",
      "DynamoDB",
    ],
    outcome:
      "A fully integrated e-commerce and CRM setup that supports customer engagement, simplifies internal processes, and creates a more connected experience across the platform.",
    cta: {
      title: "Building something like this?",
      description:
        "We can help you plan it, build it, and get it ready for real users.",
      actionText: "Start a Conversation",
      href: "/contact"
    },
  }
];

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
    id: "custom-software-engineering",
    title: "Custom Software Engineering",
    subtitle:
      "Build it right from the start,  not twice later.",
    description:
      "We help you design and develop software that is structured, scalable, and built to evolve with your business not break as it grows. At Pascolab, we don’t just write code. We build systems with clarity, so every decision made today still supports you tomorrow.",
    icon: "solar:code-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "Custom Software Engineering",
    heroTitle: "Build it right from the start, not twice later",
    heroSubtitle:
      "We help you design and develop software that is structured, scalable, and built to evolve with your business not break as it grows. At Pascolab, we don’t just write code. We build systems with clarity, so every decision made today still supports you tomorrow.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "enterprise-web-applications",
        title: "Enterprise Web Applications",
        description:
          "High-performance platforms built for real users and real scale. Designed with reliability, security, and long-term stability at the core.",
        href: "/services/custom-software-engineering",
      },
      {
        id: "api-design-system-integration",
        title: "API Design & System Integration",
        description:
          "Clean, well-structured REST and GraphQL APIs that connect smoothly with internal systems and third-party platforms.",
        href: "/services/custom-software-engineering",
      },
      {
        id: "legacy-system-modernization",
        title: "Legacy System Modernization",
        description:
          "Transform outdated systems into modern, scalable architectures while improving performance without disrupting operations.",
        href: "/services/custom-software-engineering",
      },
    ],
    howWeThink: {
      title: "How We Think About Engineering",
      intro: "We treat software as a long-term asset, not a short-term deliverable.",
      focusLabel: "That means:",
      points: [
        "Structuring systems so they don’t collapse under growth",
        "Making architecture decisions that reduce future technical debt",
        "Keeping codebases clean, readable, and easy to extend",
      ],
      closing:
        "Good engineering is not about doing more, it’s about doing things the right way early.",
    },
    techStack: ["React", "Node.js", "Ruby on Rails", "MERN", "PostgreSQL"],
    project: {
      title: "eFuse — Real-Time Data Intelligence Platform",
      description:
        "We built a unified platform designed to handle and organize large-scale real-time data for the global esports ecosystem.",
      challenge:
        "The challenge was not just handling data but making it usable. The system needed to process fast-moving information streams while keeping the experience smooth, structured, and accessible for end users.",
      focusIntro: "We focused on:",
      focusPoints: [
        "Designing a scalable backend structure capable of handling high-frequency data updates",
        "Building clean API layers for efficient data delivery",
        "Structuring the frontend experience for fast, real-time consumption without overload",
        "Ensuring system stability under continuous data flow and high traffic conditions",
      ],
      result:
        "The result was a platform that improved how esports data is accessed and consumed, turning fragmented information into a unified, real-time experience.",
    },
    whenServiceRightForYou: {
      title: "When This Service Is Right For You",
      points: [
        "You’re building a new product from scratch",
        "Your system is starting to break under growth",
        "You need a solid engineering foundation before scaling",
        "You want a team that thinks beyond just writing code",
      ],
      outro:
        "Have something similar in mind? Let’s talk about how we can help you build it the right way.",
      ctaLabel: "→Get in touch",
      ctaHref: "/contact",
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
  {
    id: "ai-data-systems",
    title: "AI & Data Systems",
    subtitle:
      "Make your product better without complicating it",
    description:
      "AI and data is used only where they improve real outcomes, not as a buzzword layer. The focus is simple: clarity, usefulness, and systems that help users and businesses make better decisions without added complexity. At Pascolab, we design AI-driven features that feel natural inside your product.",
    icon: "solar:cpu-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "AI & Data Systems",
    heroTitle: "Make your product better without complicating it",
    heroSubtitle:
      "AI and data is used only where they improve real outcomes, not as a buzzword layer. The focus is simple: clarity, usefulness, and systems that help users and businesses make better decisions without added complexity. At Pascolab, we design AI-driven features that feel natural inside your product.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "intelligent-workflows",
        title: "Intelligent Workflows",
        description:
          "Automate repetitive and rule-based processes to reduce manual effort and improve speed.",
        href: "/services/ai-data-systems",
      },
      {
        id: "data-driven-product-features",
        title: "Data-Driven Product Features",
        description:
          "Turn raw, unstructured data into meaningful insights directly inside your application.",
        href: "/services/ai-data-systems",
      },
      {
        id: "scalable-data-architectures",
        title: "Scalable Data Architectures",
        description:
          "Build data systems designed to grow with your product while keeping performance stable.",
        href: "/services/ai-data-systems",
      },
    ],
    howWeThink: {
      title: "How We Think About AI & Data",
      intro: "AI is not the product,  it’s a layer that improves the product.",
      focusLabel: "We focus on:",
      points: [
        "Using AI only where it creates real value",
        "Avoiding unnecessary complexity or over-engineering",
        "Designing systems that are explainable, maintainable, and scalable",
        "Making data usable, not just available",
      ],
      closing: "The goal is always the same: better decisions with less friction.",
    },
    techStack: ["Next.js", "MongoDB", "GraphQL", "Apollo"],
    project: {
      title: "InsightFlow — Data Intelligence System",
      description:
        "We built a structured data intelligence system designed to help teams work with complex datasets more effectively.",
      challenge:
        "The challenge wasn’t collecting data,  it was making it usable. Most systems overwhelm users with raw information, making decision-making slower instead of faster.",
      focusIntro: "We focused on:",
      focusPoints: [
        "Designing a structured data pipeline that organizes and processes large datasets efficiently",
        "Creating clear, accessible interfaces for interpreting complex information",
        "Building scalable backend systems that support continuous data growth",
        "Reducing cognitive load by presenting only relevant, actionable insights",
      ],
      result:
        "The result was a system that transforms complexity into clarity, helping teams make faster, more confident decisions using data they already have.",
    },
    whenServiceRightForYou: {
      title: "When This Service Is Right For You",
      points: [
        "Your product depends heavily on data but feels hard to interpret",
        "You want to introduce AI in a practical, controlled way",
        "Your team spends too much time on manual or repetitive processes",
        "You need a system that turns data into decisions, not dashboards",
      ],
      outro:
        "Have something similar in mind? Let’s talk about how we can help you build it the right way.",
      ctaLabel: "→Get in touch",
      ctaHref: "/contact",
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
  {
    id: "fintech-proptech-systems",
    title: "FinTech & PropTech Systems",
    subtitle:
      "When trust, accuracy, and speed matter, the system has to be right from day one.",
    description:
      "Building for finance or real estate isn’t just about features. It’s about handling sensitive, high-value data with precision and clarity. We design systems that simplify complexity and making financial workflows and property platforms secure.",
    icon: "solar:shield-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "FinTech & PropTech Systems",
    heroTitle: "When trust, accuracy, and speed matter",
    heroSubtitle:
      "Building for finance or real estate isn’t just about features. It’s about handling sensitive, high-value data with precision and clarity. We design systems that simplify complexity and making financial workflows and property platforms secure.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "real-estate-analytics",
        title: "Real Estate Analytics",
        description:
          "Dashboards and models that help teams understand trends, performance, and investment opportunities.",
        href: "/services/fintech-proptech-systems",
      },
      {
        id: "digital-onboarding-systems",
        title: "Digital Onboarding Systems",
        description:
          "Secure, paperless onboarding flows that reduce friction while ensuring compliance and accuracy.",
        href: "/services/fintech-proptech-systems",
      },
      {
        id: "marketplace-logic-systems",
        title: "Marketplace Logic Systems",
        description:
          "Backend structures for bookings, rentals, and scheduling built for real operational complexity.",
        href: "/services/fintech-proptech-systems",
      },
    ],
    howWeThink: {
      title: "How We Think About This Domain",
      intro: "In FinTech and PropTech, small mistakes become big risks.",
      focusLabel: "That’s why we focus on:",
      points: [
        "Strong data integrity from the start",
        "Secure and compliant system design",
        "Clean workflows that reduce operational friction",
        "Architecture that supports scale without breaking trust",
      ],
      closing: "",
    },
    techStack: ["Meteor", "GraphQL", "Apollo", "MongoDB", "MEAN Stack"],
    project: {
      title: "KFHK Bank — Digital Onboarding Platform",
      description:
        "We helped digitize the customer onboarding journey, transforming a traditionally slow and paperwork-heavy process into a seamless digital experience.",
      challenge:
        "The challenge was to simplify onboarding without compromising security or compliance.",
      focusIntro: "We focused on:",
      focusPoints: [
        "Designing a secure, step-based onboarding flow",
        "Reducing friction in user verification processes",
        "Structuring backend systems for compliance and scalability",
        "Ensuring smooth mobile-first user experience",
      ],
      result:
        "The result was a platform that allows users to open accounts within minutes replacing manual processes with a fast, reliable digital workflow.",
    },
    whenServiceRightForYou: {
      title: "",
      points: [],
      outro:
        "Have something similar in mind? Let’s talk about how we can help you build it the right way.",
      ctaLabel: "→Get in touch",
      ctaHref: "/contact",
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle:
      "Your product shouldn’t slow down because your infrastructure can’t keep up.",
    description:
      "We design cloud systems that are built for stability and scale so your product performs reliably even as demand grows. From deployment pipelines to infrastructure optimization, we ensure everything behind your product runs smoothly and efficiently.",
    icon: "solar:cloud-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "Cloud & DevOps",
    heroTitle: "Your product shouldn’t slow down because your infrastructure can’t keep up.",
    heroSubtitle:
      "We design cloud systems that are built for stability and scale so your product performs reliably even as demand grows. From deployment pipelines to infrastructure optimization, we ensure everything behind your product runs smoothly and efficiently.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        description:
          "Move existing systems to modern cloud environments carefully with minimal disruption.",
        href: "/services/cloud-devops",
      },
      {
        id: "cicd-automation",
        title: "CI/CD Automation",
        description:
          "Automated deployment pipelines that speed up releases and reduce manual errors.",
        href: "/services/cloud-devops",
      },
      {
        id: "infrastructure-optimization",
        title: "Infrastructure Optimization",
        description:
          "Load balancing, containerization, and server-level improvements for better performance.",
        href: "/services/cloud-devops",
      },
    ],
    howWeThink: {
      title: "How We Think About Infrastructure",
      intro: "Good infrastructure is invisible when it works and painful when it doesn’t.",
      focusLabel: "We focus on:",
      points: [
        "Stability before scale",
        "Automation over manual processes",
        "Cost efficiency without performance trade-offs",
        "Systems that are easy to maintain and evolve",
      ],
      closing: "",
    },
    techStack: ["AWS", "Docker", "Nginx", "Heroku", "GitHub Actions"],
    project: {
      title: "Screenfluence — Cloud Distribution Network",
      description:
        "We managed and optimized the cloud infrastructure powering large-scale digital advertising screens across multiple locations.",
      challenge:
        "The focus was on ensuring reliability in a system that required continuous content delivery and minimal downtime.",
      focusIntro: "We worked on:",
      focusPoints: [
        "Optimizing cloud distribution for high-volume content delivery",
        "Improving system reliability across multiple endpoints",
        "Streamlining deployment workflows for faster updates",
        "Enhancing performance under continuous load",
      ],
      result:
        "The result was a stable and scalable cloud setup capable of supporting large-scale digital display networks.",
    },
    whenServiceRightForYou: {
      title: "",
      points: [],
      outro:
        "Have something similar in mind? Let’s talk about how we can help you build it the right way.",
      ctaLabel: "→Get in touch",
      ctaHref: "/contact",
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
  {
    id: "ecommerce-headless-commerce",
    title: "E-commerce & Headless Commerce",
    subtitle:
      "E-commerce today is not just about stores. It's about systems that sell, retain, and scale.",
    description:
      "We build e-commerce platforms that go beyond traditional storefronts, designed for speed, flexibility, and business growth. From headless architectures to deep system integrations, we help brands build commerce systems that actually perform.",
    icon: "solar:cart-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "E-commerce & Headless Commerce",
    heroTitle: "E-commerce today is not just about stores. It's about systems that sell, retain, and scale.",
    heroSubtitle:
      "We build e-commerce platforms that go beyond traditional storefronts, designed for speed, flexibility, and business growth. From headless architectures to deep system integrations, we help brands build commerce systems that actually perform.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "headless-commerce",
        title: "Headless Commerce",
        description:
          "Decoupled storefronts for better performance, flexibility, and SEO.",
        href: "/services/ecommerce-headless-commerce",
      },
      {
        id: "custom-shopify-solutions",
        title: "Custom Shopify Solutions",
        description:
          "Tailored Shopify apps for rewards, warranties, loyalty programs, and workflows.",
        href: "/services/ecommerce-headless-commerce",
      },
      {
        id: "crm-system-integrations",
        title: "CRM & System Integrations",
        description:
          "Connect your store to backend systems so customer data flows across the business.",
        href: "/services/ecommerce-headless-commerce",
      },
    ],
    howWeThink: {
      title: "How We Think About E-commerce",
      intro: "Modern commerce is not just transactions, it’s experience and retention.",
      focusLabel: "We focus on:",
      points: [
        "Speed and performance-first storefronts",
        "Flexible systems that adapt to business growth",
        "Seamless integration between sales and operations",
        "Reducing friction across the customer journey",
      ],
      closing: "",
    },
    techStack: ["Shopify Polaris", "Next.js", "DynamoDB", "Node.js"],
    project: {
      title: "Abaco Polarized — Shopify Integrated Commerce System",
      description:
        "We built a custom Shopify-based system that extended beyond a traditional storefront.",
      challenge:
        "The goal was to create a connected commerce experience with rewards and warranty management built directly into the system.",
      focusIntro: "We focused on:",
      focusPoints: [
        "Developing custom Shopify extensions for business-specific workflows",
        "Integrating CRM systems for better customer lifecycle tracking",
        "Enhancing post-purchase experience through rewards and warranty flows",
        "Improving overall operational efficiency across platforms",
      ],
      result:
        "The result was a more structured and connected e-commerce ecosystem that improved both customer experience and internal operations.",
    },
    whenServiceRightForYou: {
      title: "",
      points: [],
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
  {
    id: "team-extension-product-leadership",
    title: "Team Extension & Product Leadership",
    subtitle:
      "We don’t just support teams; we become part of them.",
    description:
      "When you need experienced engineers or product guidance, we step in as an extension of your team, bringing structure, clarity, and execution strength.",
    icon: "solar:users-group-rounded-bold-duotone",
    listingCtaLabel: "Let’s Talk",
    catLabel: "What We Do",
    eyebrow: "Team Extension & Product Leadership",
    heroTitle: "We don’t just support teams; we become part of them.",
    heroSubtitle:
      "When you need experienced engineers or product guidance, we step in as an extension of your team, bringing structure, clarity, and execution strength.",
    ctaLabel: "Let’s Talk",
    ctaHref: "/contact",
    whatWeDo: [
      {
        id: "full-lifecycle-support",
        title: "Full Lifecycle Support",
        description:
          "Support from planning and prototyping through launch and ongoing iteration.",
        href: "/services/team-extension-product-leadership",
      },
      {
        id: "agile-delivery",
        title: "Agile Delivery",
        description:
          "Transparent workflows with clear progress tracking and consistent communication.",
        href: "/services/team-extension-product-leadership",
      },
      {
        id: "mvp-development",
        title: "MVP Development",
        description:
          "Build investor-ready products without unnecessary complexity or overbuilding.",
        href: "/services/team-extension-product-leadership",
      },
    ],
    howWeThink: {
      title: "How We Work in Teams",
      intro:
        "We focus on becoming a reliable extension of your workflow, not an external dependency.",
      focusLabel: "That means:",
      points: [
        "Clear communication",
        "Predictable delivery cycles",
        "Ownership of outcomes",
        "Seamless integration into your existing team",
      ],
      closing: "",
    },
    techStack: ["Agile", "Jira", "Trello", "Teamwork", "InVision"],
    project: {
      title: "Multiple startup collaborations",
      description:
        "We’ve supported early-stage teams in shaping, building, and scaling their MVPs.",
      challenge:
        "",
      focusIntro: "",
      focusPoints: [],
      result:
        "It helps them move from idea to investor-ready product with structured engineering support and clean execution.",
    },
    whenServiceRightForYou: {
      title: "",
      points: [],
      outro:
        "Have something similar in mind? Let’s talk about how we can help you build it the right way.",
      ctaLabel: "→Get in touch",
      ctaHref: "/contact",
    },
    offerTabs: [{ id: "overview", label: "Overview", items: [] }]
  },
];

export const careersData: CareersPageData = {
  hero: {
    eyebrow: "Careers",
    title: ["Build the kind of work you’d be","proud","to put your name on"],
    subtitle: "Turn your ideas, skills, and ambition into something real not just tasks on a board.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
  ourCulture: {
    eyebrow: "Our Culture",
    title: "What this means here",
    description: "At Pascolab, work isn’t about filling hours or closing tickets. It’s about:",
    points: ["Taking something unclear and turning it into something that works",
      "Building products people actually use",
      "Growing your thinking, not just your skillset",
    ],
    closing: "We believe your career shouldn’t feel stuck or repetitive. It should feel like you’re moving forward.",
  },
  howWeWork: {
    eyebrow: "How We Work",
    title: "We keep things simple and intentional",
    points: ["No unnecessary pressure",
      "No chaotic workflows.",
      "Just clear direction and thoughtful execution",
    ],
    closing: "You'll be trusted to think, contribute, and take ownership, not just follow instructions",
  },
  whatWeLookFor: {
    eyebrow: "Who fits here",
    title: "What we look for",
    description: ["Your imperfect resumes won’t be judged.", "We’re looking for people who:"],
    points: ["Care about doing things properly",
      "Want to grow through real work",
      "Take ownership of what you build",
      "Aren't afraid to ask “why” before “how”",
    ],
  },
  openRoles: {
    eyebrow: "Open roles",
    title: "We're not hiring for fixed roles at the moment.",
    description: "But we're always open to meeting people who want to build something meaningful.",
    ctaLabel: "Always open",
  },
  careersQoute: {
    quote: "Every role here has a story.",
    description: "Your career shouldn't feel like repetition.",
  },
  careersCta: {
    eyebrow: "Start here",
    title: "Your career shouldn’t feel like repetition.",
    description: ["If this sounds like your kind of work, we should talk.", "Send us your work, your ideas, or just a short note about how you think."],
    ctaLabel: "Apply now",
    ctaHref: "/contact",
    email: "info@pascolab.com",
    contactMessage: "I'm interested in the [role] position at Pascolab. Here's a bit about me: [your bio]",
  },
}

export const servicesPageIntro = {
  title: "Services built around what your product actually needs",
  subtitle:
    "From custom development to AI systems and cloud infrastructure, everything we do is built to support real products, not just ship features. Clean engineering, thoughtful architecture, and systems designed to hold up over time.",
};

export const footerCtaContent = {
  title: "Not sure where to start? That’s a good place to begin.",
  paragraphs: [
    "Tell us what you’re working on, and we’ll help you figure out the best way forward."
  ],
  primaryCtaLabel: "Let’s Talk",
  secondaryCtaLabel: "Start a Project",
  primaryCtaHref: "/contact",
  secondaryCtaHref: "/contact"
};
