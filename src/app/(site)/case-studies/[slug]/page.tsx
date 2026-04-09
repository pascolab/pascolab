import { headerData } from "@/components/Layout/Header/Navigation/menuData";




type CaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
    const { slug } = await params;


    return (
        <section className="">
            <div className="container">
                <h1>Case Studies</h1>
                <p>Selected case study: {slug}</p>
            </div>
        </section>
    )
}

export async function generateStaticParams() {
    const hrefs =
        headerData
            .find((item) => item.href === "/case-studies")
            ?.megaMenu?.sections.flatMap((section) => section.items.map((i) => i.href)) ??
        [];

    return hrefs.map((href) => ({ slug: href?.replace(/^\/case-studies\//, "") }));
}