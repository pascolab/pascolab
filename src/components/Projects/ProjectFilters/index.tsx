'use client';

import { Project } from '@/types/project';

interface ProjectsFiltersProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  const categories: { value: string; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
  ];
  
  export default function ProjectsFilters({
    selectedCategory,
    onCategoryChange,
  }: ProjectsFiltersProps) {
    return (
      <div className="w-full bg-white border-b border-neutral-200">
        {/* Mobile Layout: Stacked */}
        <div className="md:hidden">
          <div className="p-4 space-y-4">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
  
            {/* Dropdown - Mobile version */}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as string)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
  
        {/* Desktop Layout: Side by side */}
        <div className="hidden md:block px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Left Tabs */}
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
  
            {/* Right Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as string)}
              className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
  