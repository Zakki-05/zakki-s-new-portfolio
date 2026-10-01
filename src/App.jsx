import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ThreeBackground from './components/ThreeBackground';
import EditorialNav from './components/EditorialNav';
import HeroLight from './components/HeroLight';
import AboutEditorial from './components/AboutEditorial';
import Experience from './components/Experience';
import ExpertiseRows from './components/ExpertiseRows';
import ProjectsEditorial from './components/ProjectsEditorial';
import GithubSection from './components/GithubSection';
import EducationEditorial from './components/EducationEditorial';
import ContactDramatic from './components/ContactDramatic';
import FooterEditorial from './components/FooterEditorial';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-primaryBlack text-primaryText relative font-sans selection:bg-goldAccent selection:text-primaryBlack">
      
      {/* Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Interactive 3D WebGL Background Canvas */}
      <ThreeBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <EditorialNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Website Content */}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        {/* 01 — HERO */}
        <HeroLight onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 — ABOUT ME */}
        <AboutEditorial />

        {/* 03 — EXPERIENCE & INTERNSHIPS */}
        <Experience />

        {/* 04 — TECHNICAL SKILLS */}
        <ExpertiseRows />

        {/* 05 — PROJECTS SHOWCASE & FEATURED CASE STUDY */}
        <ProjectsEditorial />

        {/* 06 — GITHUB CTA */}
        <GithubSection />

        {/* 07 — EDUCATION */}
        <EducationEditorial />

        {/* 08 — CONTACT SECTION */}
        <ContactDramatic />
      </main>

      {/* 09 — FOOTER */}
      <FooterEditorial onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Document Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

    </div>
  );
}
