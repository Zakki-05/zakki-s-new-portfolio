import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/10 shadow-2xl bg-bgCard overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-bgElevated">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accentEmerald/10 text-accentEmerald">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">RESUME PREVIEW</h3>
                <p className="text-xs font-mono text-textMuted">{personalData.name} — Python Full Stack & React.js Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-cursor="button"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PRINT / DOWNLOAD</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-textMuted hover:text-white bg-white/5 hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-8 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto font-sans text-textMain leading-relaxed">
            
            {/* Header / Contact */}
            <div className="border-b border-white/10 pb-6 space-y-3">
              <h1 className="text-3xl font-black text-white">{personalData.name}</h1>
              <p className="text-lg font-mono font-semibold text-accentEmerald">{personalData.title} | BCA Graduate</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-textMuted pt-2">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.location}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.email}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-accentEmerald" /> {personalData.phone}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold">PROFESSIONAL SUMMARY</h4>
              <p className="text-sm text-textMuted leading-relaxed">
                {personalData.fullBio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold">EDUCATION</h4>
              
              <div className="space-y-3">
                <div className="glass-panel p-4 rounded-xl border-white/5 space-y-1">
                  <div className="flex justify-between items-start font-semibold text-white text-sm">
                    <span>Bachelor of Computer Applications (BCA)</span>
                    <span className="text-xs font-mono text-accentEmerald">2023 – 2026</span>
                  </div>
                  <p className="text-xs text-textMuted">Islamiah College (Autonomous), Vaniyambadi, Tamil Nadu</p>
                </div>

                <div className="glass-panel p-4 rounded-xl border-white/5 space-y-1">
                  <div className="flex justify-between items-start font-semibold text-white text-sm">
                    <span>Higher Secondary — Class XII</span>
                    <span className="text-xs font-mono text-accentEmerald">2023</span>
                  </div>
                  <p className="text-xs text-textMuted">Islamiah Higher Secondary School, Tamil Nadu State Board</p>
                </div>
              </div>
            </div>

            {/* Key Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold">TECHNICAL SKILLS</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/5">
                  <strong className="text-white font-mono block mb-1">Languages:</strong>
                  <span className="text-textMuted">Python, JavaScript (ES6+), Java</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <strong className="text-white font-mono block mb-1">Frontend Engineering:</strong>
                  <span className="text-textMuted">React.js, HTML5, CSS3, Tailwind CSS, Bootstrap</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <strong className="text-white font-mono block mb-1">Backend & REST APIs:</strong>
                  <span className="text-textMuted">Django, Flask, FastAPI, Node.js & Express.js</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <strong className="text-white font-mono block mb-1">Databases & Tools:</strong>
                  <span className="text-textMuted">MySQL, PostgreSQL, Git, GitHub, Vercel, Netlify</span>
                </div>
              </div>
            </div>

            {/* Projects Overview */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold">CORE PROJECTS</h4>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>JOBFLOW — AI-Powered Job Application Platform</span>
                    <span className="text-[10px] font-mono text-accentEmerald bg-accentEmerald/10 px-2 py-0.5 rounded">Featured</span>
                  </div>
                  <p className="text-xs text-textMuted">Built with React, JavaScript, Node.js, Express, Database, and REST APIs. Designed application dashboard and AI integration.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>TECH ZONE — E-Commerce Web Application</span>
                    <span className="text-[10px] font-mono text-textMuted">HTML5 / CSS3 / JS</span>
                  </div>
                  <p className="text-xs text-textMuted">Responsive e-commerce site for smartphone & electronics browsing with pagination and categorized product views.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>AL-HUDA ISLAMIC SCHOOL — Educational Portal</span>
                    <span className="text-[10px] font-mono text-textMuted">HTML5 / CSS3 / JS</span>
                  </div>
                  <p className="text-xs text-textMuted">Multi-page educational website with curriculum layout, student attendance module UI, and gallery presentation.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-bgElevated flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white glass-panel hover:bg-white/10 transition-all"
            >
              CLOSE PREVIEW
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
