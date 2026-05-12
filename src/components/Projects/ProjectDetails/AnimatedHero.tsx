'use client';

import { motion } from "motion/react";
import { Project } from "@/types/project";
import EyeBrew from "@/components/SharedComponent/EyeBrew";
import CTA from "@/components/Common/CTA";


interface AnimatedHeroProps {
    project: Project;
}
export default function AnimatedHero({ project }: AnimatedHeroProps) {
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


    )}