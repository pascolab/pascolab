import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      sections: [
        {
          id: "security-strategy",
          sidebarLabel: "Security & Strategy",
          panelTitle: "Security & Strategy",
          panelDescription: "Governance, compliance and defence for regulated industries",
          items: [
            {
              title: "Information Security",
              description: "Real-time defence with audit-ready compliance",
              href: "/services/information-security",
            },
            {
              title: "Policy & Strategy",
              description: "Governance that clears the path for delivery",
              href: "/services/policy-strategy",
            },
          ],
          cta: { label: "All Services", href: "/services" },
        },
        {
          id: "ai-data",
          sidebarLabel: "AI & Data",
          panelTitle: "AI & Data",
          panelDescription: "Intelligence and automation at enterprise scale",
          items: [
            {
              title: "AI, ML & Data Analytics",
              description: "Predict, automate and decide faster",
              href: "/services/ai-ml-data-analytics",
            },
            {
              title: "Generative AI",
              description: "Create and personalise at enterprise speed",
              href: "/services/generative-ai",
            },
            {
              title: "Data Engineering",
              description: "Reliable data layers that power AI and decisions",
              href: "/services/data-engineering",
            },
          ],
          cta: { label: "All Services", href: "/services" },
        },
        {
          id: "digital-cloud",
          sidebarLabel: "Digital & Cloud",
          panelTitle: "Digital & Cloud",
          panelDescription: "Modern platforms built for scale and uptime",
          items: [
            {
              title: "Digital Solutions",
              description: "AI, cloud and automation built into daily ops",
              href: "/services/digital-solutions",
            },
            {
              title: "Cloud Services",
              description: "Cloud-native on multicloud built for scale",
              href: "/services/cloud-services",
            },
            {
              title: "Emerging Technologies",
              description: "Prove and scale what's next, safely",
              href: "/services/emerging-technologies",
            },
          ],
          cta: { label: "All Services", href: "/services" },
        },
      ],
    },
  },
  // TODO: add content for industries item, that an IT company can serve to
  { 
    label: "Solutions",
    href: "/solutions"
  },    
  { 
    label: "Case Studies",
    href: "/case-studies",
    megaMenu: {
      sections: [
        {
          id: "web",
          sidebarLabel: "Web Platforms",
          panelTitle: "Web Platforms",
          panelDescription: "Full-stack web platforms built for scale and performance",
          items: [
            {
              title: "FinTrack Dashboard",
              description: "Real-time analytics portal for retail banking clients",
              href: "/case-studies/fintrack-dashboard",
            },
            {
              title: "InsureFlow Portal",
              description: "End-to-end insurance policy management platform",
              href: "/case-studies/insureflow-portal",
            },
            {
              title: "LendSmart Hub",
              description: "AI-assisted loan origination and approval system",
              href: "/case-studies/lendsmart-hub",
            },
            {
              title: "ComplianceIQ",
              description: "Regulatory reporting suite for tier-1 banks",
              href: "/case-studies/complianceiq",
            },
          ],
          cta: { label: "All Case Studies", href: "/case-studies" },
        },
        {
          id: "mobile",
          sidebarLabel: "Mobile Apps",
          panelTitle: "Mobile Apps",
          panelDescription: "Cross-platform apps delivering seamless financial experiences",
          items: [
            {
              title: "PocketVault",
              description: "Personal finance tracker with biometric security",
              href: "/case-studies/pocketvault",
            },
            {
              title: "ClaimSwift",
              description: "Mobile-first insurance claims submission and tracking",
              href: "/case-studies/claimswift",
            },
            {
              title: "TradePulse",
              description: "Live market data and trade execution on the go",
              href: "/case-studies/tradepulse",
            },
            {
              title: "BranchConnect",
              description: "Staff productivity app for bank branch operations",
              href: "/case-studies/branchconnect",
            },
          ],
          cta: { label: "All Case Studies", href: "/case-studies" },
        },
        {
          id: "case-studies",
          sidebarLabel: "Case Studies",
          panelTitle: "Case Studies",
          panelDescription: "Deep dives into how we solved complex enterprise challenges",
          items: [
            {
              title: "40% Cost Reduction",
              description: "Cloud migration for a top-10 European insurer",
              href: "/case-studies/case-study-cloud-migration",
            },
            {
              title: "Fraud Detection at Scale",
              description: "ML model catching 98% of fraudulent transactions",
              href: "/case-studies/case-study-fraud-detection",
            },
            {
              title: "Zero-Downtime Core Banking",
              description: "Legacy modernisation with no customer disruption",
              href: "/case-studies/case-study-core-banking",
            },
            {
              title: "Regulatory Sprint",
              description: "MiFID II compliance delivered in 8 weeks",
              href: "/case-studies/case-study-regulatory-sprint",
            },
          ],
          cta: { label: "Read Case Studies", href: "/case-studies" },
        },
      ],
    },
  },
  
  // TODO: add company page. I'll have further details to add. like About Us, How We Work, AI First Company, etc.
  {
    label: "Company",
    href: "/company",
    megaMenu: {
      sections: [
        {
          id: "about-us",
          sidebarLabel: "About Us",
          panelTitle: "About Us",
          panelDescription: "We are a team of passionate developers and engineers who are dedicated to building innovative solutions for our clients.",
          items: [
            {
              title: "About Us",
              description: "We are a team of passionate developers and engineers who are dedicated to building innovative solutions for our clients.",
              href: "/company/about-us",
            },
          ]
        },
        {
          id: "how-we-work",
          sidebarLabel: "How We Work",
          panelTitle: "How We Work",
          panelDescription: "We follow a agile methodology to deliver projects on time and within budget.",
          items: [
            {
              title: "How We Work",
              description: "We follow a agile methodology to deliver projects on time and within budget.",
              href: "/company/how-we-work",
            },
          ]
        },
        {
          id: "ai-first-company",
          sidebarLabel: "AI First Company",
          panelTitle: "AI First Company",
          panelDescription: "We are a company that is dedicated to using AI to solve complex problems.",
          items: [
            {
              title: "AI First Company",
              description: "We are a company that is dedicated to using AI to solve complex problems.",
              href: "/company/ai-first-company",
            },
          ]
        }
      ]
    }
  },
  
  { label: "Contact", href: "/contact" }, 
];
