import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesPageData } from "@/app/api/data";
import Challenges from "@/components/ServiceDetail/Challenges";
import DetailHero from "@/components/ServiceDetail/DetailHero";
import DetailTabs from "@/components/ServiceDetail/DetailTabs";
import Expertise from "@/components/ServiceDetail/Expertise";
import FAQs from "@/components/ServiceDetail/FAQs";
import Industries from "@/components/ServiceDetail/Industries";
import ProcessAccordion from "@/components/ServiceDetail/ProcessAccordion";
import ServicesSlider from "@/components/ServiceDetail/ServicesSlider";
import WhatWeOffer from "@/components/ServiceDetail/WhatWeOffer";

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
    <>
      <DetailHero section={section} />
      <DetailTabs />
      <Challenges section={section} />
      <ServicesSlider section={section} />
      <WhatWeOffer section={section} />
      <ProcessAccordion section={section} />
      <Industries section={section} />
      <Expertise section={section} />
      <FAQs section={section} />
    </>
  );
}

export function generateStaticParams() {
  return servicesPageData.map((s) => ({ slug: s.id }));
}
