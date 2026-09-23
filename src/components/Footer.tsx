import React from 'react';
import { Logo } from './Logo';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, MessageCircle, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#04060d] border-t border-slate-200/80 dark:border-slate-800/80 py-12 md:py-16 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-2">
            <Logo />
            <p className="text-slate-500 dark:text-slate-400 max-w-sm pt-1">
              7+ years optimizing e-commerce order fulfillment, multi-channel inventory accuracy, and automated digital workflows.
            </p>
          </div>

          {/* Social / Direct Contacts */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${personalInfo.whatsappNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] hover:text-slate-900 dark:hover:text-white hover:border-violet-500/50 transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Jonard Castro. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-mono-nums">
            <span>{personalInfo.location}</span>
            <span>·</span>
            <span>GMT+8</span>
            <span>·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
