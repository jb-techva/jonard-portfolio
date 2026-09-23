import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll progress and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['contact', 'testimonials', 'works', 'experience', 'services', 'hero'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Works', href: '#works', id: 'works' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#070913]/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-violet-950/20 border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Radiant Electric Violet Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Centered Modern Floating Navigation Pill */}
          <nav
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-100/80 dark:bg-[#0d1020]/90 border border-slate-200/80 dark:border-slate-800/90 backdrop-blur-md shadow-inner text-xs font-semibold text-slate-600 dark:text-slate-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 font-bold'
                      : 'hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Toggle + Resume + Hire Me CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0d1020]/90 text-slate-700 dark:text-slate-200 hover:border-violet-500/50 dark:hover:border-violet-500/50 shadow-xs transition-all active:scale-95 focus:outline-none cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                  <span className="text-[11px] font-semibold text-amber-300 hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-violet-600 transition-transform hover:-rotate-12" />
                  <span className="text-[11px] font-semibold text-slate-600 hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Resume Quick View Button (Desktop) */}
            <button
              type="button"
              onClick={onOpenResume}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0d1020]/80 rounded-xl hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all active:scale-95 whitespace-nowrap"
            >
              Resume PDF
            </button>

            {/* Luminous Primary CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 ring-1 ring-white/20 transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0d1020]/80 text-slate-700 dark:text-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-[#0a0d1a]/95 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Switch to Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-violet-600" />
                      <span>Switch to Dark Mode</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 py-1"
                >
                  Resume
                </button>
              </div>

              <div className="flex justify-end">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="text-xs font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1"
                >
                  <span>Direct Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
