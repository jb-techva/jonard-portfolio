import React, { useState } from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white dark:bg-[#060813] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>CLIENT ENDORSEMENTS & TRUST</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
              Trusted by multi-channel founders and agency directors.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Reliable execution, meticulous inventory balance, and proactive communication that clients depend on day in and day out.
            </p>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] text-slate-700 dark:text-slate-300 hover:border-violet-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-2xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono-nums text-xs font-semibold text-slate-500 dark:text-slate-400 px-2">
              {activeIndex + 1} / {testimonialsData.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] text-slate-700 dark:text-slate-300 hover:border-violet-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-2xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-3xl bg-slate-50/70 dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-12 shadow-sm text-left transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-display font-medium text-xl sm:text-2xl text-slate-900 dark:text-white leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author & Relationship */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                  {currentTestimonial.role} · {currentTestimonial.company}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentTestimonial.relationship}
                </div>
              </div>
            </div>

            {/* Right side highlight box */}
            <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-[#11172c]/70 border border-slate-200/60 dark:border-slate-800/80 p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 block">
                Direct Impact Highlight
              </span>
              <p className="font-display font-semibold text-base text-slate-900 dark:text-white">
                "{currentTestimonial.highlight}"
              </p>
            </div>
          </div>

          {/* Quick Select Indicators */}
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            {testimonialsData.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-8 bg-gradient-to-r from-violet-600 to-indigo-600'
                    : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
