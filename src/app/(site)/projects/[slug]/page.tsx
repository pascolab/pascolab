import { projects } from "@/app/api/data";
import { Project } from "@/types/project";
import { notFound } from "next/navigation";
import { ProjectDetailsLayout } from "@/components/Projects/ProjectDetails";



export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const project = projects.find((project: Project) => project.slug === slug);
    if (!project) {
        return notFound();
    }


    return (
        <article className="mt-15 md:mt-[69px] border-b border-border">
            <ProjectDetailsLayout project={project} />
        </article>
    )
}

export function generateStaticParams() {
    return projects.map((project: Project) => ({ slug: project.slug }));
}