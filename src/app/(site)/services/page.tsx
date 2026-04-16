import { Metadata } from "next";
import { servicesPageData } from "@/app/api/data";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesNav from "@/components/Services/ServicesNav";
import ServiceSection from "@/components/Services/ServiceSection";

export const metadata: Metadata = {
  title: "Services | Pascolab",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesNav sections={servicesPageData} />
      {servicesPageData.map((section, idx) => (
        <ServiceSection
          key={section.id}
          section={section}
          isLast={idx === servicesPageData.length - 1}
        />
      ))}
    </>
  );
}
