import React, { useEffect } from 'react';
import type { PortfolioProject } from '../types/portfolio';
import { X, CheckCircle, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0c1020] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Category & Title */}
        <div className="space-y-2 pr-10 mb-6">
          <div className="text-xs uppercase tracking-wider font-bold text-violet-600 dark:text-violet-400">
            {project.categoryLabel}
          </div>
          <h2
            id="modal-title"
            className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white"
          >
            {project.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {project.tagline}
          </p>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11172c]/50 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
              Operational Challenge
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11172c]/50 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-500">
              Technical Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="p-5 rounded-2xl bg-violet-50/50 dark:bg-violet-950/20 border border-violet-200/60 dark:border-violet-900/40 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Documented Business Impact</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.impactMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-mono-nums font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Deliverables */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Systems & Tech Used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Want a similar workflow built for your store?
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all active:scale-95 shadow-md shadow-violet-500/25"
          >
            <span>Discuss This Workflow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
