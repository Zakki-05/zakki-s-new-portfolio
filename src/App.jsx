import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import EditorialNav from './components/EditorialNav';
import HeroLight from './components/HeroLight';
import AboutEditorial from './components/AboutEditorial';
import Experience from './components/Experience';
import ExpertiseRows from './components/ExpertiseRows';
import ProjectsEditorial from './components/ProjectsEditorial';
import CurrentlyBuildingMarquee from './components/CurrentlyBuildingMarquee';
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
      
      {/* Initial Percentage Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Editorial Navigation */}
      <EditorialNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Core Website Layout */}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        {/* 01 — HERO (Warm Cream Section) */}
        <HeroLight onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 — ABOUT ME (Luxury Black Section with Gold Line & Asymmetric Frame) */}
        <AboutEditorial />

        {/* 03 — INDUSTRY EXPERIENCE (Aspirasys Internship & Industrial Training) */}
        <Experience />

        {/* 04 — EXPERTISE (Horizontal Architectural Rows & Tech Cloud) */}
        <ExpertiseRows />

        {/* 05 — MY WORK (Magazine Editorial Viewport Project Cards) */}
        <ProjectsEditorial />

        {/* 06 — JOURNAL (MOTION DESIGN + UI/UX + FRONTEND Marquee) */}
        <CurrentlyBuildingMarquee />

        {/* 07 — EDUCATION (BCA & Higher Secondary Timeline) */}
        <EducationEditorial />

        {/* 08 — CONTACT (Dramatic Black Section + Rotating "LET'S TALK ↗" CTA) */}
        <ContactDramatic />
      </main>

      {/* 09 — FOOTER */}
      <FooterEditorial onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Document Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

    </div>
  );
}
