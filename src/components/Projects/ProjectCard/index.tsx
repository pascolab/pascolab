
import Image from 'next/image';
import { Project } from '@/types/project';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
    project: Project;
  }
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    // Get the first category and first tech stack item
    const primaryCategory = project.categories[0];
    const primaryTech = project.techStack[0];
  
    return (
      <Link href={`/projects/${project.slug}`}>
        <Card className="rounded-lg p-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:ring-0 cursor-pointer group">
          {/* Image Container */}
          <div className="relative w-full  h-55 md:h-49 lg:h-65 led:h-79  aspect-video bg-neutral-100 group-hover:opacity-95 transition-opacity">
            <Image
              src={project.image}
              alt={project.title}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
  
          {/* Content Container */}
          <div className="p-4 flex flex-col gap-6">
            {/* Title */}
            <h3 className="text-foreground line-clamp-2">
              {project.title}
            </h3>
  
            {/* Overview/Description */}
            <p className="text-muted-foreground dark:opacity-90 line-clamp-2 grow">
              {project.overview}
            </p>
  
            {/* Category and Tech Stack */}
            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {primaryCategory && (
                <Badge variant="outline" className='border-primary/70 px-2 md:px-3 py-1.5'>
                  {primaryCategory}
                </Badge>
              )}
              {primaryTech && (
                <Badge variant="outline" className='border-primary/70 px-2 md:px-3 py-1.5'>
                  {primaryTech}
                </Badge>
              )}
            </div>
          </div>
        </Card>
      </Link>
    );
  }
  