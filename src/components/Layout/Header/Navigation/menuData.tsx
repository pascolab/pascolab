import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    panel: "services",
  },  
  { 
    label: "Projects",
    href: "/projects",
    // megaMenu: {
    //   sections: [
    //     {
    //       id: "web",
    //       sidebarLabel: "Web Platforms",
    //       panelTitle: "Web Platforms",
    //       panelDescription: "Full-stack web platforms built for scale and performance",
    //       items: [
    //         {
    //           title: "FinTrack Dashboard",
    //           description: "Real-time analytics portal for retail banking clients",
    //           href: "/projects/fintrack-dashboard",
    //         },
    //         {
    //           title: "InsureFlow Portal",
    //           description: "End-to-end insurance policy management platform",
    //           href: "/projects/insureflow-portal",
    //         },
    //         {
    //           title: "LendSmart Hub",
    //           description: "AI-assisted loan origination and approval system",
    //           href: "/projects/lendsmart-hub",
    //         },
    //         {
    //           title: "ComplianceIQ",
    //           description: "Regulatory reporting suite for tier-1 banks",
    //           href: "/projects/complianceiq",
    //         },
    //       ],
    //       cta: { label: "All Projects", href: "/projects" },
    //     },
    //     {
    //       id: "mobile",
    //       sidebarLabel: "Mobile Apps",
    //       panelTitle: "Mobile Apps",
    //       panelDescription: "Cross-platform apps delivering seamless financial experiences",
    //       items: [
    //         {
    //           title: "PocketVault",
    //           description: "Personal finance tracker with biometric security",
    //           href: "/projects/pocketvault",
    //         },
    //         {
    //           title: "ClaimSwift",
    //           description: "Mobile-first insurance claims submission and tracking",
    //           href: "/projects/claimswift",
    //         },
    //         {
    //           title: "TradePulse",
    //           description: "Live market data and trade execution on the go",
    //           href: "/projects/tradepulse",
    //         },
    //         {
    //           title: "BranchConnect",
    //           description: "Staff productivity app for bank branch operations",
    //           href: "/projects/branchconnect",
    //         },
    //       ],
    //       cta: { label: "All Projects", href: "/projects" },
    //     },
    //     {
    //       id: "case-studies",
    //       sidebarLabel: "Case Studies",
    //       panelTitle: "Case Studies",
    //       panelDescription: "Deep dives into how we solved complex enterprise challenges",
    //       items: [
    //         {
    //           title: "40% Cost Reduction",
    //           description: "Cloud migration for a top-10 European insurer",
    //           href: "/case-studies/case-study-cloud-migration",
    //         },
    //         {
    //           title: "Fraud Detection at Scale",
    //           description: "ML model catching 98% of fraudulent transactions",
    //           href: "/case-studies/case-study-fraud-detection",
    //         },
    //         {
    //           title: "Zero-Downtime Core Banking",
    //           description: "Legacy modernisation with no customer disruption",
    //           href: "/case-studies/case-study-core-banking",
    //         },
    //         {
    //           title: "Regulatory Sprint",
    //           description: "MiFID II compliance delivered in 8 weeks",
    //           href: "/case-studies/case-study-regulatory-sprint",
    //         },
    //       ],
    //       cta: { label: "Read Case Studies", href: "/case-studies" },
    //     },
    //   ],
    // },
  },
  
  {
    label: 'About'
    , href: '/about-us',
  }
];
