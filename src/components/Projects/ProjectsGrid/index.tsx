'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/app/api/data';
import ProjectCard from '../ProjectCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const INITIAL_DISPLAY = 4; // 2 cards per row on desktop, 1 on mobile
const INCREMENT = 4; // Increase by 2 cards per row on each "Show More"

export default function ProjectsGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY);

    // Get all unique categories
    const allCategories = useMemo(() => [ "All",
        "SaaS",
        "Marketplace",
        "Healthcare",
        "E-commerce",
        "B2B",
        "Education",
        "Analytics",
        "Media",
        "Real Estate",], []);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') {
            return projects;
        }
        return projects.filter((project) =>
            project.categories.includes(selectedCategory)
        );
    }, [selectedCategory]);

    // Display subset of projects
    const displayedProjects = useMemo(() => {
        return filteredProjects.slice(0, displayCount);
    }, [filteredProjects, displayCount]);

    const hasMore = displayCount < filteredProjects.length;

    const handleShowMore = () => {
        setDisplayCount((prev) => prev + INCREMENT);
    };

    return (
        <section>
            <div className="container mx-auto content-space">
                {/* Filters */}
                <div className="border-b border-border pb-8 ">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h2 className="text-foreground">
                            Our Latest Projects
                        </h2>

                        {/* Category Filter */}
                        <div className=" gap-2 flex-col hidden">
                            <label className="text-sm font-medium text-muted-foreground">Filter by:</label>
                            <Select
                                onValueChange={setSelectedCategory}
                                value={selectedCategory}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {allCategories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className=" py-8">
                    {displayedProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 lg:w-[80%] mx-auto">
                                {[...displayedProjects].map((project) => (
                                    <ProjectCard key={project.slug} project={project} />
                                ))}
                            </div>

                            {/* Show More Button */}
                            {hasMore && (
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleShowMore}
                                        className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-neutral-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
