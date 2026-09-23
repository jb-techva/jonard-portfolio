import React, { useState } from 'react';
import {
  experienceData,
  educationData,
  skillsAndTools,
  skillsWithProficiency,
} from '../data/portfolioData';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle,
  Wrench,
  Sparkles,
  Layers,
  Flame,
  ArrowUpRight,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');

  const allCategories = ['All', ...skillsAndTools.map((c) => c.category)];

  const filteredSkills =
    activeSkillCategory === 'All'
      ? skillsAndTools
      : skillsAndTools.filter((c) => c.category === activeSkillCategory);

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-white dark:bg-[#060813] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-950/40 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
            Work experience & core competencies.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            7+ years of continuous remote track record managing multi-channel storefronts, high-volume order flows, and cross-functional digital marketing initiatives.
          </p>
        </div>

        {/* Top Part: Skills Proficiency Bars matching the Pinterest reference design */}
        <div className="mb-20 rounded-3xl bg-slate-50/80 dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-10 shadow-sm text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Technical & Operational Proficiency
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white mt-1">
                E-Commerce & Digital Tooling Mastery
              </h3>
            </div>
            <span className="text-xs font-mono-nums text-slate-500 dark:text-slate-400">
              Evaluated on 7+ years production workflows
            </span>
          </div>

          {/* 3-Column Skills Progress Bar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsWithProficiency.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-2xl bg-white dark:bg-[#11172c]/60 border border-slate-200/60 dark:border-slate-800/80 space-y-2.5 shadow-2xs hover:border-violet-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="font-mono-nums font-bold text-violet-600 dark:text-violet-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Glowing Progress Track */}
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  {skill.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline + Education Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Timeline of Professional Experience (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2 text-left">
              <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <span>Career Trajectory</span>
            </h3>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800/80 ml-3 sm:ml-4 space-y-10 pl-6 sm:pl-8 text-left">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#060813] border-2 border-violet-600 dark:border-violet-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-300" />

                  <div className="rounded-3xl bg-slate-50/70 dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 shadow-xs hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-950/20 transition-all duration-300">
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="font-display font-bold text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 font-mono-nums shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Employment Type & Client Context */}
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {exp.type}
                      </span>
                      {exp.clientContext && (
                        <span>· {exp.clientContext}</span>
                      )}
                    </div>

                    {/* Bullet Responsibilities */}
                    <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-violet-500 dark:text-violet-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools Used Row */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mr-1.5">
                        Tools:
                      </span>
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Skills Matrix (4 Cols) */}
          <div className="lg:col-span-4 space-y-8 text-left">
            {/* Education Card */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span>Education</span>
              </h3>

              <div className="rounded-3xl bg-slate-50/70 dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-6 space-y-3 hover:border-violet-500/40 transition-colors">
                <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 font-mono-nums">
                  {educationData.period}
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                  {educationData.degree}
                </h4>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {educationData.institution}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-slate-800/80 leading-relaxed">
                  {educationData.details}
                </p>
              </div>
            </div>

            {/* Categorized Skills Pills */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span>Specialized Stacks</span>
              </h3>

              <div className="rounded-3xl bg-slate-50/70 dark:bg-[#0c1020]/90 border border-slate-200/80 dark:border-slate-800/80 p-6 space-y-5">
                {skillsAndTools.map((cat) => (
                  <div key={cat.category} className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-xl bg-white dark:bg-[#11172c] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
