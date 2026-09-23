import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import type { PortfolioProject } from '../types/portfolio';
import { ArrowUpRight, Layers, Sparkles, Eye, FolderKanban } from 'lucide-react';

interface PreviousWorksSectionProps {
  onOpenProjectModal: (project: PortfolioProject) => void;
}

export const PreviousWorksSection: React.FC<PreviousWorksSectionProps> = ({
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Operations' },
    { id: 'ecommerce', label: 'E-Commerce Ops' },
    { id: 'shopify', label: 'Shopify Stores' },
    { id: 'marketing', label: 'Marketing & AI' },
    { id: 'inventory', label: 'Inventory & Supply Chain' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="works"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#070914] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
              Previous works & operational execution.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Explore real workflow transformations: multi-channel order dispatching, dynamic repricing models, and automated content architectures.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white dark:bg-[#0c1020] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Glassmorphism Project Cards Grid matching Pinterest reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // First item spans 2 columns on desktop for visual asymmetry
            const isWide = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal(project)}
                className={`group cursor-pointer rounded-3xl bg-white dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-950/20 transition-all duration-300 active:scale-[0.99] flex flex-col justify-between text-left ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenProjectModal(project);
                  }
                }}
                aria-label={`Open details for ${project.title}`}
              >
                {/* Media Showcase Frame with measured contrast overlay */}
                <div className="relative aspect-video sm:aspect-16/9 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-slate-950/70 backdrop-blur-md text-white border border-white/10 shadow-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Click to expand hover indicator */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-violet-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-105 shadow-md shadow-violet-500/30">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Impact Metrics Row (Tabular Figures) */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {project.impactMetrics.slice(0, 2).map((metric) => (
                      <div key={metric.label}>
                        <div className="font-mono-nums font-bold text-base sm:text-lg text-violet-600 dark:text-violet-400">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tool tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono-nums pt-2">
                    {project.toolsUsed.slice(0, 4).map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span>{tool}</span>
                        {tIdx < Math.min(project.toolsUsed.length, 4) - 1 && (
                          <span className="text-slate-300 dark:text-slate-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
