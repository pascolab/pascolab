import { portfolioinfo } from "@/app/api/data";

type CaseStudiesPageProps = {
  params: { slug: string };
};

export const dynamic = "force-static";
export const dynamicParams = false;

export default function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { slug } = params;

  return (
    <section>
      <div className="container">
        <h1>Case Studies</h1>
        <p>Selected case study: {slug}</p>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return portfolioinfo
    .filter((item) => item.kind === "Case Study")
    .map((item) => ({ slug: item.slug }));
}