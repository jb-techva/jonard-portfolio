import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';
import type { ServiceItem } from '../types/portfolio';
import {
  Store,
  Boxes,
  TrendingUp,
  FileCode2,
  Headphones,
  MailCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'store-ops':
        return <Store className="w-5 h-5 text-violet-400" />;
      case 'inventory-logistics':
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case 'pricing-supplychain':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'ai-content-wp':
        return <FileCode2 className="w-5 h-5 text-amber-400" />;
      case 'customer-support':
        return <Headphones className="w-5 h-5 text-rose-400" />;
      case 'crm-email':
        return <MailCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Store className="w-5 h-5 text-violet-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#070914] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE SERVICE PILLARS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
              Operational excellence designed to scale your store.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Structured systems for multi-channel listing sync, inventory balance, dynamic pricing, and automated customer experience.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              Contract & Retainer Available
            </span>
          </div>
        </div>

        {/* 6 High-Fidelity Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-500/50 dark:hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/15 dark:hover:shadow-violet-950/40 text-left active:scale-[0.99] will-change-transform"
              >
                {/* Top Glowing Gradient Hover Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-500/80 transition-all duration-500" />

                <div className="space-y-4">
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300 shadow-xs">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Deep-Dive Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in duration-200">
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions: Expand Toggle + Direct Inquire */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? 'Less details' : 'View deliverables'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForContact(service.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-violet-700 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-950/40 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all active:scale-95"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
