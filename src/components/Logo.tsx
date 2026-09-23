import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <a
      href="#hero"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl transition-all active:scale-95 ${className}`}
      aria-label="Jonard Castro Portfolio Home"
    >
      {/* Tech Monogram Emblem with Violet Glow */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white shadow-md shadow-violet-500/20 ring-1 ring-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/30 group-hover:scale-105">
        <span className="font-display font-extrabold text-sm tracking-tight select-none">
          JC
        </span>
        {/* Glowing online status indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white dark:ring-[#070913]" />
        </span>
      </div>

      {/* Styled Wordmark */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-extrabold text-base md:text-lg tracking-tight text-slate-900 dark:text-white leading-tight group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
            JONARD CASTRO
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent leading-none">
          Operations Specialist
        </span>
      </div>
    </a>
  );
};
