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

export const counterStats = [
    { value: 17, suffix: "+", label: "Years on Market" },
    { value: 800, suffix: "+", label: "Professionals on Board" },
    { value: 73, suffix: "%", label: "Of Clients Return for Long-Term Partnerships" },
    { value: 4, suffix: "", label: "Global Offices" },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'UX & Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Performance Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'UX & Products Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

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

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'Cozycasa',
        slug: 'Cozycasa',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Mars',
        slug: 'Mars',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: 'everyday-humans',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Rocket Squared',
        slug: 'rocket-squared',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Panda Logo',
        slug: 'panda-logo',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Fusion Dynamics',
        slug: 'fusion-dynamics',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'InnovateX Ventures',
        slug: 'innovate-x-ventures',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Nebula Holdings',
        slug: 'nebula-holdings',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Summit Partners',
        slug: 'summit-partners',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Apex Strategies',
        slug: 'apex-strategies',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    
]

export const services: Service = {
  sections: [
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      description: "Tailored software built for your unique needs",
      navReference: "security-strategy",
      cards: [
        {
          id: "information-security",
          title: "Information Security",
          description: "Protect your critical assets with real-time threat detection and defence mechanisms. Achieve audit-ready compliance while maintaining operational efficiency and security posture.",
          icon: "shield",
          href: "/services/information-security",
        },
        {
          id: "policy-strategy",
          title: "Policy & Strategy",
          description: "Establish governance frameworks that align with business objectives and regulatory requirements.",
          icon: "strategy",
          href: "/services/policy-strategy",
        },
        {
          id: "compliance-audit",
          title: "Compliance & Audit",
          description: "Stay ahead of regulatory requirements with comprehensive compliance programs and regular audits. Ensure your organization meets industry standards and legal obligations.",
          icon: "audit",
          href: "/services/compliance-audit",
        },
        {
          id: "risk-management",
          title: "Risk Management",
          description: "Identify, assess, and mitigate business risks before they impact operations. Develop resilient strategies to protect revenue and maintain business continuity.",
          icon: "risk",
          href: "/services/risk-management",
        },
      ],
    },
    {
      id: "ai-data",
      title: "AI & Data",
      description: "Intelligence and automation at enterprise scale",
      navReference: "ai-data",
      cards: [
        {
          id: "ai-ml-data-analytics",
          title: "AI, ML & Data Analytics",
          description: "Unlock hidden patterns in your data with machine learning and advanced analytics. Predict market trends, optimize operations, and make faster, data-driven decisions at scale.",
          icon: "ai",
          href: "/services/ai-ml-data-analytics",
        },
        {
          id: "generative-ai",
          title: "Generative AI",
          description: "Leverage cutting-edge generative AI to automate content creation, personalization, and customer experiences. Deploy enterprise-grade solutions that scale with your business.",
          icon: "generative-ai",
          href: "/services/generative-ai",
        },
        {
          id: "data-engineering",
          title: "Data Engineering",
          description: "Build robust data pipelines and infrastructure that power AI models and business intelligence. Ensure reliable, secure, and scalable data layers for enterprise operations.",
          icon: "data",
          href: "/services/data-engineering",
        },
        {
          id: "predictive-analytics",
          title: "Predictive Analytics",
          description: "Forecast customer behavior, market trends, and business outcomes with precision. Transform historical data into actionable predictions that drive competitive advantage.",
          icon: "analytics",
          href: "/services/predictive-analytics",
        },
        {
          id: "business-intelligence",
          title: "Business Intelligence",
          description: "Turn raw data into actionable insights with intuitive dashboards and analytics platforms. Empower teams with real-time visibility and data-driven decision capabilities.",
          icon: "intelligence",
          href: "/services/business-intelligence",
        },
      ],
    },
    {
      id: "digital-cloud",
      title: "Digital & Cloud",
      description: "Modern platforms built for scale and uptime",
      navReference: "digital-cloud",
      cards: [
        {
          id: "digital-solutions",
          title: "Digital Solutions",
          description: "Accelerate digital transformation with AI, cloud, and automation seamlessly integrated into daily operations. Modernize workflows and unlock new revenue streams.",
          icon: "digital",
          href: "/services/digital-solutions",
        },
        {
          id: "cloud-services",
          title: "Cloud Services",
          description: "Migrate and operate on cloud-native architectures across multiple platforms. Achieve scalability, reliability, and cost-efficiency with expert multi-cloud management.",
          icon: "cloud",
          href: "/services/cloud-services",
        },
        {
          id: "emerging-technologies",
          title: "Emerging Technologies",
          description: "Safely explore and scale next-generation technologies like blockchain, IoT, and quantum computing. Prove value in controlled environments before enterprise-wide deployment.",
          icon: "emerging",
          href: "/services/emerging-technologies",
        },
        {
          id: "devops-automation",
          title: "DevOps & Automation",
          description: "Streamline development workflows and accelerate time-to-market with CI/CD pipelines and infrastructure automation. Deploy faster, more reliably, and with greater confidence.",
          icon: "devops",
          href: "/services/devops-automation",
        },
        {
          id: "infrastructure",
          title: "Infrastructure & Ops",
          description: "Manage complex infrastructure with reliability and scale at the core. Ensure 24/7 uptime, performance optimization, and proactive issue resolution across environments.",
          icon: "infrastructure",
          href: "/services/infrastructure",
        },
        {
          id: "app-modernization",
          title: "App Modernization",
          description: "Transform legacy systems into cloud-ready, scalable applications. Reduce technical debt, improve performance, and embrace modern development practices.",
          icon: "modernization",
          href: "/services/app-modernization",
        },
      ],
    },
  ],
};