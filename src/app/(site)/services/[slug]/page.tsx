import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesPageData } from "@/app/api/data";
import DetailHero from "@/components/ServiceDetail/DetailHero";
import DetailTabs from "@/components/ServiceDetail/DetailTabs";
import HowWeThink from "@/components/ServiceDetail/HowWeThink";
import WhenServiceRightForYou from "@/components/ServiceDetail/WhenServiceRightForYou";
import WhatWeDo from "@/components/ServiceDetail/WhatWeDo";
import { ProjectDetails } from "@/components/ServiceDetail/Project";
import TechStackSection from "@/components/ServiceDetail/TechStack";

type ServicesPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = servicesPageData.find((s) => s.id === slug);

  if (!section) {
    return { title: "Service | Pascolab" };
  }

  return {
    title: `${section.heroTitle} | Pascolab`,
    description: section.heroSubtitle,
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = await params;
  const section = servicesPageData.find((s) => s.id === slug);

  if (!section) {
    notFound();
  }

  return (
    <article>
      <DetailHero section={section} />
      <DetailTabs section={section} />
      <HowWeThink section={section} />
      <WhatWeDo section={section} />
      <WhenServiceRightForYou section={section} />
      <ProjectDetails section={section} />
      <TechStackSection section={section} />
    </article>
  );
}

export function generateStaticParams() {
  return servicesPageData.map((s) => ({ slug: s.id }));
}
