import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, MapPin, Mail, Phone, ExternalLink, Award, Trophy, Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalData, technicalSkillsGrouped, experienceData, educationData, projectsData, certificationsData, achievementsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/10 shadow-2xl bg-bgCard overflow-hidden my-6"
        >
          {/* Modal Top Action Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-bgElevated select-none">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accentEmerald/10 text-accentEmerald">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">RESUME PREVIEW</h3>
                <p className="text-xs font-mono text-textMuted">{personalData.name} — Resume</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-cursor="button"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / DOWNLOAD PDF</span>
                <span className="sm:hidden">PRINT</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-textMuted hover:text-white bg-white/5 hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content - Styled like exact Resume layout */}
          <div className="p-6 sm:p-10 space-y-7 max-h-[80vh] overflow-y-auto font-sans text-textMain leading-relaxed selection:bg-accentEmerald selection:text-bgDark">
            
            {/* 01. Header / Contact */}
            <div className="text-center border-b border-white/10 pb-6 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wide uppercase">{personalData.name}</h1>
              <p className="text-sm sm:text-base font-mono font-bold text-accentEmerald tracking-wide">
                Frontend Developer &nbsp;|&nbsp; React.js &nbsp;|&nbsp; Full-Stack Fundamentals
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-mono text-textMuted pt-2">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.location}</span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.phone}</span>
                <span className="text-white/20">•</span>
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-1 hover:text-accentEmerald transition-colors"><Mail className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.email}</a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-accentCyan pt-1">
                <a href={personalData.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">zakki-dev.netlify.app <ExternalLink className="w-3 h-3" /></a>
                <span className="text-white/20">•</span>
                <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">github.com/Zakki-05 <ExternalLink className="w-3 h-3" /></a>
                <span className="text-white/20">•</span>
                <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">linkedin.com/in/mohammed-zakki-adnan-p <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* 02. Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">PROFESSIONAL SUMMARY</h4>
              <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                {personalData.fullBio}
              </p>
            </div>

            {/* 03. Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">TECHNICAL SKILLS</h4>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <strong className="text-white">Frontend:</strong> <span className="text-textMuted">{technicalSkillsGrouped.frontend.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-white">Backend:</strong> <span className="text-textMuted">{technicalSkillsGrouped.backend.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-white">Database:</strong> <span className="text-textMuted">{technicalSkillsGrouped.database.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-white">Tools:</strong> <span className="text-textMuted">{technicalSkillsGrouped.tools.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-white">Concepts:</strong> <span className="text-textMuted">{technicalSkillsGrouped.concepts.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-accentEmerald">Currently Learning:</strong> <span className="text-accentEmerald">{technicalSkillsGrouped.learning.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* 04. Experience */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">EXPERIENCE</h4>
              <div className="space-y-5">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-white">
                      <span>{exp.role} — <span className="text-accentEmerald">{exp.company}</span></span>
                      <span className="text-xs font-mono text-textMuted font-normal">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                      {exp.details.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 05. Projects */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">PROJECTS</h4>
              <div className="space-y-4">
                
                {/* Pernambut Connect */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                    <span>Pernambut Connect — Community Platform <span className="font-mono text-textMuted font-normal">| React.js, Tailwind CSS, Django, MySQL</span></span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                    <li>Architected a full-stack community platform with JWT authentication and protected-route guards, managing session persistence across React and Django without third-party auth providers.</li>
                    <li>Designed RESTful Django endpoints for posts, profiles, and community interactions, consumed via Axios with centralized error handling and full CRUD support.</li>
                  </ul>
                </div>

                {/* Pernambut Hub */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                    <span>Pernambut Hub — Civic Issue Tracking <span className="font-mono text-textMuted font-normal">| Django, MySQL</span></span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                    <li>Built a status-driven issue lifecycle (submitted → in-progress → resolved) with role-based permissions distinguishing residents from administrators.</li>
                    <li>Modeled a normalized MySQL schema via Django ORM for issues, users, and audit-trail records, avoiding duplication across categorization and status history.</li>
                  </ul>
                </div>

                {/* Al Huda Islamic School */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                    <span>Al Huda Islamic School — Institutional Site <span className="font-mono text-textMuted font-normal">| HTML5, CSS3, JavaScript</span></span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                    <li>Delivered a production institutional website with semantic HTML5 and CSS media queries, covering viewports from 320px to 1440px for consistent cross-device rendering.</li>
                  </ul>
                </div>

                {/* Expense Tracker */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                    <span>Expense Tracker <span className="font-mono text-textMuted font-normal">| React.js, Tailwind CSS</span></span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                    <li>Built a responsive income and expense management dashboard with dynamic charts and local storage persistence for a fully client-side budgeting tool.</li>
                  </ul>
                </div>

                {/* Portfolio Website */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                    <span>Portfolio Website <span className="font-mono text-textMuted font-normal">| React.js, Tailwind CSS, Framer Motion</span></span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-textMuted pl-1">
                    <li>Designed and deployed a responsive, SEO-friendly personal portfolio with a dark theme and Framer Motion animations, optimized for performance via code splitting.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 06. Education */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">EDUCATION</h4>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white font-bold">
                <span>Bachelor of Computer Applications (BCA) <span className="text-textMuted font-normal">— Islamiah College (Autonomous), Vaniyambadi</span></span>
                <span className="font-mono text-accentEmerald font-semibold">2023 – 2026</span>
              </div>
            </div>

            {/* 07. Certifications */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">CERTIFICATIONS</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-textMuted">
                {certificationsData.map((cert, idx) => (
                  <li key={idx}><strong className="text-white">{cert.title}</strong> — {cert.issuer}</li>
                ))}
              </ul>
            </div>

            {/* 08. Achievements */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold border-b border-accentCyan/20 pb-1">ACHIEVEMENTS</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-textMuted">
                {achievementsData.map((ach, idx) => (
                  <li key={idx}><strong className="text-white">{ach.title}</strong>, {ach.event}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Modal Bottom Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-bgElevated flex items-center justify-between select-none">
            <span className="text-xs font-mono text-textMuted hidden sm:inline">MOHAMMED ZAKKI ADNAAN P — RESUME</span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl font-mono text-xs font-bold text-white glass-panel hover:bg-white/10 transition-all ml-auto"
            >
              CLOSE PREVIEW
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
