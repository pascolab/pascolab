
import { Metadata } from "next";
import EyeBrew from "@/components/SharedComponent/EyeBrew";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
export const metadata: Metadata = {
  title: "Projects | Pascolab",
};

const ProjectsPage = () => {
  return (
    <article>
      <section className="relative py-0! mt-15 md:mt-[69px] overflow-hidden border-b border-border">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)]" />
     <div className="container relative z-10 md:min-h-[40vh] py-24 md:py-32 content-space">
          <EyeBrew text="Our Solutions" />
          <h1 className="text-display text-foreground max-w-5xl">
            Projects
          </h1>
          <p className="text-body-large text-muted-foreground max-w-xl">
            Dive into a curated collection of my finest work, showcasing expertise across various industries.
          </p>
        </div>
      </section>
      <ProjectsGrid />
    </article>
  );
};



export default ProjectsPage;