/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PreviousWorksSection } from './components/PreviousWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollTopButton } from './components/ScrollTopButton';
import type { PortfolioProject } from './types/portfolio';

export default function App() {
  // Theme Management (defaults to dark mode for sleek executive portfolio aesthetic, or saved preference)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('jonard_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [contactSubject, setContactSubject] = useState<string>(
    'Multi-Channel E-Commerce Store Management'
  );

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('jonard_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('jonard_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactSubject(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussProject = () => {
    if (selectedProject) {
      setContactSubject(`Inquiry regarding ${selectedProject.title}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060813] dark:text-slate-100 transition-colors duration-300 flex flex-col selection:bg-violet-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Services Section */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Work Experience & Education Section */}
        <ExperienceSection />

        {/* Previous Works / Portfolio Section */}
        <PreviousWorksSection
          onOpenProjectModal={(project) => setSelectedProject(project)}
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection
          preselectedSubject={contactSubject}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox / Modal for Project Deep-Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleDiscussProject}
      />

      {/* Full Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Scroll to Top Action Button */}
      <ScrollTopButton />
    </div>
  );
}
