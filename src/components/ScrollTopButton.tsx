import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white/90 dark:bg-[#0c1020]/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 active:scale-95 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      aria-label="Scroll back to top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
