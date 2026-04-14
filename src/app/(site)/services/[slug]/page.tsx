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
  const slugs = services.sections
    .flatMap((s) => s.cards)
    .map((c) => c.href)
    .filter((href): href is string => !!href && href.startsWith("/services/"))
    .map((href) => href.replace("/services/", "").replace(/\/$/, ""))
    .filter((slug) => slug.length > 0);

  return slugs.map((slug) => ({ slug }));
}
 