import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, MapPin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalData, technicalSkillsGrouped, experienceData, educationData, projectsData, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-primaryBlack rounded-3xl border border-white/15 shadow-2xl overflow-hidden my-6 text-primaryText"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black select-none">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-goldAccent/10 text-goldAccent border border-goldAccent/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-primaryText uppercase tracking-wider">RESUME PREVIEW</h3>
                <p className="text-xs font-mono text-mutedText">{personalData.name} — Python Full Stack & React.js Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-cursor="button"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / DOWNLOAD PDF</span>
                <span className="sm:hidden">PRINT</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-mutedText hover:text-primaryText bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close Resume Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 space-y-7 max-h-[78vh] overflow-y-auto font-sans leading-relaxed selection:bg-goldAccent selection:text-primaryBlack">
            
            {/* Header / Contact Info */}
            <div className="text-center border-b border-white/10 pb-6 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-primaryText tracking-wide uppercase">{personalData.name}</h1>
              <p className="text-sm sm:text-base font-mono font-bold text-goldAccent tracking-wide uppercase">
                {personalData.title}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-mono text-mutedText pt-2">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-goldAccent" /> {personalData.location}</span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-goldAccent" /> {personalData.phone}</span>
                <span className="text-white/20">•</span>
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-1 hover:text-goldAccent transition-colors"><Mail className="w-3.5 h-3.5 text-goldAccent" /> {personalData.email}</a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-goldAccent pt-1">
                <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">github.com/Zakki-05 <ExternalLink className="w-3 h-3" /></a>
                <span className="text-white/20">•</span>
                <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">linkedin.com/in/mohammed-zakki-adnan-p <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">PROFESSIONAL SUMMARY</h4>
              <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                {personalData.fullBio}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">TECHNICAL SKILLS</h4>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <strong className="text-primaryText">Frontend:</strong> <span className="text-mutedText">{technicalSkillsGrouped.frontend.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-primaryText">Backend:</strong> <span className="text-mutedText">{technicalSkillsGrouped.backend.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-primaryText">Database:</strong> <span className="text-mutedText">{technicalSkillsGrouped.database.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-primaryText">Tools:</strong> <span className="text-mutedText">{technicalSkillsGrouped.tools.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-primaryText">Deployment:</strong> <span className="text-mutedText">{technicalSkillsGrouped.deployment.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">EXPERIENCE</h4>
              <div className="space-y-5">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-primaryText">
                      <span>{exp.role} — <span className="text-goldAccent">{exp.company}</span></span>
                      <span className="text-xs font-mono text-mutedText font-normal">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-mutedText pl-1">
                      {exp.details.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Highlights */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">KEY PROJECTS</h4>
              <div className="space-y-4">
                {projectsData.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between text-xs font-bold text-primaryText">
                      <span>{proj.title} <span className="font-mono text-mutedText font-normal">| {proj.technologies.join(', ')}</span></span>
                    </div>
                    <p className="text-xs text-mutedText leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">EDUCATION</h4>
              {educationData.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-primaryText font-bold">
                  <span>{edu.degree} <span className="text-mutedText font-normal">— {edu.institution}</span></span>
                  <span className="font-mono text-goldAccent font-semibold">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {certificationsData.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-bold border-b border-goldAccent/30 pb-1">CERTIFICATIONS & TRAINING</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-mutedText">
                  {certificationsData.map((cert, idx) => (
                    <li key={idx}><strong className="text-primaryText">{cert.title}</strong> — {cert.issuer}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black flex items-center justify-between font-mono text-xs select-none">
            <span className="text-mutedText hidden sm:inline">{personalData.name} — RESUME PREVIEW</span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl font-bold text-primaryText bg-white/5 hover:bg-white/10 transition-all ml-auto uppercase tracking-widest"
            >
              CLOSE PREVIEW
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
