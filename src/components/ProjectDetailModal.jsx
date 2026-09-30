import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, CheckCircle2, Sparkles, Code2, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-primaryBlack rounded-3xl border border-white/15 shadow-2xl overflow-hidden my-6 text-primaryText"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-7 border-b border-white/10 bg-black">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 text-goldAccent font-mono text-xs font-bold uppercase tracking-widest">
                {project.category || 'PROJECT CASE STUDY'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-mutedText hover:text-primaryText bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Main Content */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto font-sans">
            
            {/* Title & Subtitle */}
            <div className="space-y-2 border-b border-white/10 pb-6">
              <h2 className="font-headline text-4xl sm:text-6xl font-black text-primaryText uppercase leading-none tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="font-mono text-sm sm:text-base text-goldAccent font-semibold uppercase tracking-wider">
                  {project.subtitle}
                </p>
              )}
              <p className="text-mutedText text-base sm:text-lg leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest shadow-lg"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB REPO</span>
                </a>
              )}
            </div>

            {/* Overview / Problem / Solution / Role Grid */}
            <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
              {project.overview && (
                <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                  <span className="text-goldAccent font-bold uppercase tracking-widest block">OVERVIEW</span>
                  <p className="font-sans text-sm text-mutedText leading-relaxed">{project.overview}</p>
                </div>
              )}

              {project.problem && (
                <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                  <span className="text-goldAccent font-bold uppercase tracking-widest block">PROBLEM</span>
                  <p className="font-sans text-sm text-mutedText leading-relaxed">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                  <span className="text-goldAccent font-bold uppercase tracking-widest block">SOLUTION</span>
                  <p className="font-sans text-sm text-mutedText leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.myRole && (
                <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                  <span className="text-goldAccent font-bold uppercase tracking-widest block">MY ROLE</span>
                  <p className="font-sans text-sm text-mutedText leading-relaxed">{project.myRole}</p>
                </div>
              )}
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold text-goldAccent uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-goldAccent" />
                  KEY FEATURES
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 font-sans text-sm text-mutedText">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-black/60 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-goldAccent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && (
              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs font-bold text-goldAccent uppercase tracking-widest flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-goldAccent" />
                  TECHNOLOGIES USED
                </h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-primaryText font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-5 sm:p-6 border-t border-white/10 bg-black flex items-center justify-between font-mono text-xs text-mutedText">
            <span>{project.title} — ZAKKI.DEV</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl font-bold text-primaryText bg-white/5 hover:bg-white/10 transition-colors uppercase tracking-widest"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
