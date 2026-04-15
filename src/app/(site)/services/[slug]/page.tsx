import { services } from "@/app/api/data";

type ServicesPageProps = {
  params: { slug: string };
};

export const dynamic = "force-static";
export const dynamicParams = false;

export default function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = params;

  return (
    <section>
      <div className="container">
        <h1>Services</h1>
        <p>Selected service: {slug}</p>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}
 