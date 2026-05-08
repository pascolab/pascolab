'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import CTA from '@/components/Common/CTA';
import EyeBrew from '@/components/SharedComponent/EyeBrew';

interface ProjectDetailsLayout {
  project: Project;
}

export function ProjectDetailsLayout({ project }: ProjectDetailsLayout) {
  const heroOverviewExcerpt = (() => {
    const overview = project.overview?.trim() ?? '';
    if (!overview) return '';

    const firstPeriodIdx = overview.indexOf('.');
    if (firstPeriodIdx !== -1) {
      return overview.slice(0, firstPeriodIdx + 1).trim();
    }

    return overview.split(/\s+/).slice(0, 22).join(' ').trim();
  })();

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative px-6 py-12 md:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(10,191,163,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%)] pointer-events-none" />
        <div className="container mx-auto flex flex-col items-center justify-center content-space">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='flex gap-2'
          >
            <EyeBrew text={project.categories.slice(0, 2).join(' | ')} className=''/>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-display text-foreground max-w-4xl"
          >
            {project.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-body md:text-lg text-muted-foreground text-center leading-relaxed max-w-4xl"
          >
            {heroOverviewExcerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit"
          >
            <CTA label={project.cta.actionText} href={project.cta.href} />
          </motion.div>
        </div>
      </motion.section>

      {/* Mockup Image Section */}
      <section className="md:py-0 py-10">
        <div className="container mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={project.mockup}
              alt={project.title}
              fill
              className="object-cover h-full w-full scale-125 md:scale-100"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview - Reveal */}
      <section className="">
        <div className="content-space container max-w-7xl mx-auto">
          <h2 className="text-foreground text-left lg:text-center">Overview</h2>
          <p className="text-body  text-muted-foreground leading-relaxed max-w-7xl mx-auto text-left lg:text-center">
            {project.overview}
          </p>
        </div>
      </section>

      {/* What We Built - Scroll Reveal */}
      <section className="">
        <div className="content-space container">
          <h2 className="text-foreground text-left lg:text-center">
            What We Built
          </h2>
          <div className="content-space max-w-7xl mx-auto">
            {project.whatWeBuilt.map((feature, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-primary flex flex-col gap-y-2"
              >
                <div className="absolute -left-2  w-3.5 h-3.5 rounded-full bg-primary" />
                <h3 className=" text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach - Full Width Cards */}
      <section className="">
        <div className="content-space container">
          <h2 className="text-foreground text-left lg:text-center">
            Our Approach
          </h2>
          <div className="flex flex-col gap-y-4 max-w-7xl mx-auto">
            {project.approach.map((para, idx) => (
              <div
                key={idx}
                className={`p-4 md:p-8 rounded-xl backdrop-blur-sm ${
                  idx % 2 === 0
                    ? 'bg-linear-to-r from-orange-100/30 to-primary/10 border border-primary/30'
                    : 'bg-linear-to-r from-primary/10 to-orange-100/30 border border-primary/30'
                }`}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">{para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Animated Reveal */}
      <section className="">
        <div className="container content-space ">
          <h2 className="text-foreground text-left lg:text-center">
            Technology Stack
          </h2>
          <ul className="flex flex-wrap gap-3 justify-start lg:justify-center max-w-7xl mx-auto">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <span
                  title={tech}
                  className="inline-flex items-center rounded-full border border-primary/50  px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary/70" />
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

            
      {/* Outcome - Large Text */}
      <section className="">
        <div className=" container content-space">
          <h2 className=" text-foreground text-left lg:text-center">
            The Result
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed max-w-7xl mx-auto text-left lg:text-center">
            {project.outcome}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className=" bg-background  max-w-7xl mx-auto">
        <div className=' container flex flex-col gap-y-6'>
          <h2 className="text-foreground max-w-7xl mx-0 text-left lg:mx-auto lg:text-center">{project.cta.title}</h2>
          <p className="text-body-large text-muted-foreground text-left lg:text-center">{project.cta.description}</p>
          <div className="w-fit mx-0 lg:mx-auto">
            <CTA label={project.cta.actionText} href={project.cta.href} className='w-fit not-dark:hover:text-white' />
            {/* {project.cta.actionText} */}
          </div>
        </div>
      </section>
    </div>
  );
}
