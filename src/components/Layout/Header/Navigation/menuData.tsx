import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      sections: [
        {
          id: "overview",
          sidebarLabel: "Overview",
          panelTitle: "Services",
          panelDescription: "Lifecycle consultancy for BFSI that compounds ROI",
          items: [
            {
              title: "Information Security",
              description: "Real-time defense with audit-ready compliance",
              href: "/services/information-security",
            },
            {
              title: "Digital Solutions",
              description: "AI, cloud, automation built into daily ops",
              href: "/services/digital-solutions",
            },
            {
              title: "AI, ML & Data Analytics",
              description: "Predict, automate, and decide faster with AI and ML",
              href: "/services/ai-ml-data-analytics",
            },
            {
              title: "Generative AI",
              description: "Create, adapt, and personalize at enterprise speed",
              href: "/services/generative-ai",
            },
            {
              title: "Policy & Strategy",
              description: "Governance that clears the path for delivery",
              href: "/services/policy-strategy",
            },
            {
              title: "Emerging Technologies",
              description: "Prove and scale what's next, safely",
              href: "/services/emerging-technologies",
            },
            {
              title: "Cloud Services",
              description: "Cloud native on multicloud built for scale and uptime",
              href: "/services/cloud-services",
            },
            {
              title: "Data Engineering",
              description: "Reliable data layers that power AI and decisions",
              href: "/services/data-engineering",
            },
          ],
          cta: { label: "Get Started", href: "/contact" },
        },
      ],
    },
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    megaMenu: {
      sections: [
        {
          id: "web",
          sidebarLabel: "Web Projects",
          panelTitle: "Web Projects",
          panelDescription: "Full-stack web platforms built for scale and performance",
          items: [
            {
              title: "FinTrack Dashboard",
              description: "Real-time analytics portal for retail banking clients",
              href: "/portfolio/fintrack-dashboard",
            },
            {
              title: "InsureFlow Portal",
              description: "End-to-end insurance policy management platform",
              href: "/portfolio/insureflow-portal",
            },
            {
              title: "LendSmart Hub",
              description: "AI-assisted loan origination and approval system",
              href: "/portfolio/lendsmart-hub",
            },
            {
              title: "ComplianceIQ",
              description: "Regulatory reporting suite for tier-1 banks",
              href: "/portfolio/complianceiq",
            },
          ],
          cta: { label: "View All Projects", href: "/portfolio" },
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
              href: "/portfolio/pocketvault",
            },
            {
              title: "ClaimSwift",
              description: "Mobile-first insurance claims submission and tracking",
              href: "/portfolio/claimswift",
            },
            {
              title: "TradePulse",
              description: "Live market data and trade execution on the go",
              href: "/portfolio/tradepulse",
            },
            {
              title: "BranchConnect",
              description: "Staff productivity app for bank branch operations",
              href: "/portfolio/branchconnect",
            },
          ],
          cta: { label: "View All Projects", href: "/portfolio" },
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
              href: "/portfolio/case-study-cloud-migration",
            },
            {
              title: "Fraud Detection at Scale",
              description: "ML model catching 98% of fraudulent transactions",
              href: "/portfolio/case-study-fraud-detection",
            },
            {
              title: "Zero-Downtime Core Banking",
              description: "Legacy modernisation with no customer disruption",
              href: "/portfolio/case-study-core-banking",
            },
            {
              title: "Regulatory Sprint",
              description: "MiFID II compliance delivered in 8 weeks",
              href: "/portfolio/case-study-regulatory-sprint",
            },
          ],
          cta: { label: "Read Case Studies", href: "/portfolio/case-studies" },
        },
      ],
    },
  },
  {
    label: "Teams",
    href: "/teams",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  { label: "Contact", href: "/contact" },
];