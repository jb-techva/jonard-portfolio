import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [manilaTime, setManilaTime] = useState('');
  const [imageError, setImageError] = useState(false);

  // Live Philippine standard time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }).format(now);
      setManilaTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-[#060813] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Background Radial Glow Auras matching Pinterest reference */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/20 via-purple-600/15 to-indigo-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Copy & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Top Pill Kicker Badge with Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold backdrop-blur-md shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span>E-COMMERCE & MARKETING OPERATIONS VA</span>
            </div>

            {/* Main Headline with Violet-Purple Gradient Text */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              Optimizing the{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Mechanics of E-Commerce
              </span>
            </h1>

            {/* Paragraph / Resume Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              7+ years of battle-tested experience managing multi-channel storefronts across Shopify, Amazon SellerCentral, and eBay. Specializing in order fulfillment pipelines, automated repricing, inventory reconciliation, and AI-accelerated content.
            </p>

            {/* Quick Impact Metrics Ribbon */}
            <div className="flex flex-wrap items-center gap-6 py-2 border-y border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-slate-900 dark:text-white">99.8%</span>
                <span className="text-slate-500 dark:text-slate-400">Order Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-slate-900 dark:text-white">7+ Years</span>
                <span className="text-slate-500 dark:text-slate-400">Remote Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-slate-900 dark:text-white">12,000+</span>
                <span className="text-slate-500 dark:text-slate-400">Orders Dispatched</span>
              </div>
            </div>

            {/* Action Buttons: Primary Gradient + WhatsApp + Email copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Glowing Gradient Button */}
              <button
                type="button"
                onClick={() => scrollToSection('works')}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 ring-1 ring-white/20 transition-all duration-200 active:scale-95"
              >
                <span>Explore Previous Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber.replace('+', '')}?text=Hello%20Jonard%2C%20I%20saw%20your%20operations%20portfolio%20and%20would%20like%20to%20connect.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>

              {/* One-Click Copy Email Tool */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0e1322]/80 text-slate-700 dark:text-slate-200 hover:border-violet-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all active:scale-95"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Real-Time Manila Clock Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono-nums pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-violet-500" />
                <span>Manila Time: <strong className="text-slate-800 dark:text-slate-200">{manilaTime || '8:00 AM PST'}</strong> (GMT+8)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Framed with Clean Lining, Text Below Picture & Balanced Alignment */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
            {/* Radiant Purple Radial Aura behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-purple-600/20 to-indigo-600/30 rounded-3xl blur-3xl -z-10 scale-95 pointer-events-none" />

            {/* Structured Container that matches paragraph & hero content height */}
            <div className="w-full max-w-[390px] relative space-y-3.5">
              
              {/* Floating 3D Metric Badge: Top Left (Non-colliding) */}
              <div className="absolute -top-3.5 -left-3 sm:-left-5 z-20 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#0f1424]/95 backdrop-blur-xl border border-slate-200/90 dark:border-violet-500/30 shadow-xl shadow-black/10 dark:shadow-violet-950/40 text-left space-y-0.5 animate-in fade-in slide-in-from-top-3 duration-500">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-violet-600 dark:text-violet-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>High Precision Ops</span>
                </div>
                <div className="text-xs font-mono-nums font-bold text-slate-900 dark:text-white">
                  99.8% Order Accuracy
                </div>
              </div>

              {/* Profile Frame with Crisp Gradient Border & Official Local Headshot */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-violet-500/50 via-purple-500/25 to-slate-800/80 shadow-2xl shadow-violet-950/40 w-full aspect-square overflow-hidden group border border-violet-500/30 dark:border-violet-500/40">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  {!imageError ? (
                    <>
                      {/* Official Headshot Asset from /public/Castro.jpg */}
                      <img
                        src="/Castro.jpg"
                        alt="Jonard Castro - Official Profile Portrait"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%',
                        }}
                        loading="eager"
                        decoding="sync"
                      />

                      {/* Subtle vignette shadow gradient at the bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-slate-300">
                      <AlertCircle className="w-10 h-10 text-amber-400 mb-3" />
                      <h4 className="text-sm font-bold text-white mb-1">Official Photo Required</h4>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
                        Please ensure <code className="text-violet-300 font-mono">Castro.jpg</code> is placed inside your project's <code className="text-violet-300 font-mono">public/</code> directory.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dedicated Text & Identity Card BELOW the Picture */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-[#0c1020]/95 backdrop-blur-xl border border-slate-200/90 dark:border-violet-500/30 shadow-xl shadow-black/5 dark:shadow-violet-950/30 text-left transition-colors">
                <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight leading-snug">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">
                      {personalInfo.title}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available</span>
                  </span>
                </div>

                {/* Subtext info pills below picture */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
                    7+ Yrs Experience
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
                    Full-Time / Contract
                  </span>
                </div>
              </div>

              {/* Status summary below card */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 px-1 pt-0.5">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Shopify · Amazon · eBay Synced</span>
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold">
                  12k+ Dispatched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
