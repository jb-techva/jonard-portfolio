import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Linkedin,
  FileText,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedSubject?: string;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedSubject = '',
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: preselectedSubject || 'Multi-Channel E-Commerce Store Management',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update subject if prop changes
  React.useEffect(() => {
    if (preselectedSubject) {
      setFormData((prev) => ({ ...prev, subject: preselectedSubject }));
    }
  }, [preselectedSubject]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Multi-Channel E-Commerce Store Management',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#070914] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Outreach & Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRY</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
                Let’s streamline your retail operations.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Whether you need a dedicated virtual assistant to manage Shopify & Amazon fulfillment or want to automate your multi-channel inventory pipeline, I’m ready to contribute immediately.
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber.replace('+', '')}?text=Hello%20Jonard%2C%20I%20would%20like%20to%20discuss%20an%20e-commerce%20operations%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/30 hover:bg-emerald-500/15 transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                      Instant WhatsApp
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalInfo.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Email Card with click to copy */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 space-y-2 text-xs text-slate-600 dark:text-slate-300 shadow-2xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-violet-500" />
                  <span>{personalInfo.timezone} · Response guaranteed &lt; 12 hours</span>
                </div>
              </div>
            </div>

            {/* Quick Links & Resume Modal */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1020] text-slate-700 dark:text-slate-300 hover:border-violet-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
              >
                <Linkedin className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Tech Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-[#0c1020]/95 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-lg shadow-violet-950/10 text-left">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 dark:text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Fill in the details below and I will respond to your inquiry promptly.
              </p>

              {status === 'success' ? (
                <div className="py-8 space-y-4 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been saved. I will follow up via <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/25 transition-all active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center gap-2.5 text-rose-700 dark:text-rose-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="sender-name"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070914] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="sender-email"
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. name@brand.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070914] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="service-subject"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subject / Service Area
                    </label>
                    <select
                      id="service-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070914] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    >
                      <option value="Multi-Channel E-Commerce Operations">
                        Multi-Channel E-Commerce Operations (Shopify, Amazon, eBay)
                      </option>
                      <option value="Inventory & Order Fulfillment Flow">
                        Inventory & Order Fulfillment Flow (ShipStation, Finale)
                      </option>
                      <option value="Dynamic Pricing & Supply Chain Coordination">
                        Dynamic Pricing & Supply Chain Coordination (StreetPricer)
                      </option>
                      <option value="AI Content Generation & WordPress Management">
                        AI Content Generation & WordPress Management
                      </option>
                      <option value="Customer Experience & Helpdesk Management">
                        Customer Experience & Helpdesk Management (Zendesk)
                      </option>
                      <option value="Full-Time or Retainer Operations Role">
                        Full-Time or Retainer Operations Role
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiry-message"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Your Message / Project Scope <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your current store setup, fulfillment volume, or specific challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070914] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-violet-500/25 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
