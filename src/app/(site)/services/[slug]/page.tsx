import { headerData } from "@/components/Layout/Header/Navigation/menuData";




type ServicesPageProps = {
    params: Promise<{ slug: string }>
}

export default async function ServicesPage({ params }: ServicesPageProps) {
    const { slug } = await params;


    return (
        <section className="">
            <div className="container">
                <h1>Services</h1>
                <p>Selected service: {slug}</p>
            </div>
        </section>
    )
}

export async function generateStaticParams() {
    const hrefs =
        headerData
            .find((item) => item.href === "/services")
            ?.megaMenu?.sections.flatMap((section) => section.items.map((i) => i.href)) ??
        [];

    return hrefs.map((href) => ({ slug: href?.replace(/^\/services\//, "") }));
}   