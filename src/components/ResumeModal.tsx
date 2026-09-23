import React, { useEffect, useState } from 'react';
import {
  personalInfo,
  experienceData,
  educationData,
  skillsAndTools,
} from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    const resumeText = `
JONARD CASTRO
E-commerce & Marketing Operations VA
${personalInfo.location} | WhatsApp: ${personalInfo.whatsappDisplay} | ${personalInfo.email} | LinkedIn: ${personalInfo.linkedInUrl}

SUMMARY:
${personalInfo.bio}

KEY SKILLS & TOOLS:
${skillsAndTools.map((g) => `${g.category}: ${g.skills.join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${experienceData
  .map(
    (e) => `
${e.role} | ${e.period}
${e.type} ${e.clientContext ? `— ${e.clientContext}` : ''}
${e.responsibilities.map((r) => `• ${r}`).join('\n')}
Tools: ${e.tools.join(', ')}
`,
  )
  .join('\n')}

EDUCATION:
${educationData.degree} (${educationData.period})
${educationData.institution}
${educationData.details}

REFERENCES:
Available upon request.
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0e1626]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
              Official Resume · Jonard Castro
            </span>
            <span className="text-xs text-slate-400 font-mono-nums hidden sm:inline">
              (Updated 2026)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Copy plain text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:overflow-visible">
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center space-y-2">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-950 dark:text-white">
              JONARD CASTRO
            </h1>
            <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
              E-commerce & Marketing Operations VA
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span>{personalInfo.location}</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>WhatsApp: {personalInfo.whatsappDisplay}</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>{personalInfo.email}</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="text-violet-600 dark:text-violet-400 hover:underline font-medium"
              >
                LinkedIn: in/castrojonard14
              </a>
            </div>
          </div>

          {/* Summary Statement */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {personalInfo.bio}
            </p>
          </div>

          {/* Key Skills & Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Key Skills & Tools
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>E-Commerce Store Management (Shopify, eBay, Amazon SellerCentral)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>Product Listing Optimization & Product Research</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>Inventory & Order Fulfillment, Supplier & Vendor Coordination</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>Supply Chain Management, Purchase Order Management & Fulfillment Tracking</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>Customer Support & Ticket Resolution (Zendesk, Gorgias)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>CRM & Email Marketing (HubSpot, GetResponse)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>WordPress Content Management & Blog Administration</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>AI-Assisted Content Generation (ChatGPT, Claude, Copilot)</span>
              </li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Experience
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono-nums font-semibold text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {exp.type} {exp.clientContext ? `— ${exp.clientContext}` : ''}
                </div>
                <ul className="space-y-1 pl-4 text-xs text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <span className="font-bold text-slate-900 dark:text-white">
                {educationData.degree}
              </span>
              <span className="font-mono-nums text-slate-500 dark:text-slate-400">
                {educationData.period}
              </span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              {educationData.institution}
            </div>
          </div>

          {/* References */}
          <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              References
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
