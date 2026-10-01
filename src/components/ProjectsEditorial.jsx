import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, CheckCircle2, Layers, ExternalLink } from 'lucide-react';
import { projectsData, featuredProject } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsEditorial() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div id="projects" className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <Layers className="w-3.5 h-3.5" />
            <span>05 // FEATURED & SELECTED PROJECTS</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            PROJECTS & WORK
          </h2>

          <div className="w-20 h-[2px] bg-goldAccent mt-2" />
        </div>

        {/* 01 — FEATURED PROJECT: JOBFLOW */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl bg-black border border-goldAccent/40 overflow-hidden shadow-2xl p-8 sm:p-12 space-y-8 hover:border-goldAccent transition-all"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6 font-mono text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-goldAccent text-primaryBlack font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                FEATURED FULL STACK PROJECT
              </span>
              <span className="text-goldAccent font-bold">REACT.JS + PYTHON DJANGO / REST API</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <p className="font-mono text-xs text-goldAccent uppercase tracking-widest font-bold">
                    {featuredProject.subtitle}
                  </p>
                  <h3 className="font-headline text-5xl sm:text-7xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase leading-none">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-mutedText text-base sm:text-lg leading-relaxed font-sans">
                  {featuredProject.description}
                </p>

                {/* Key Features Quick Bullets */}
                <div className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-primaryText/90">
                  <p className="font-mono text-[10px] text-goldAccent uppercase tracking-widest font-bold">KEY CAPABILITIES:</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {featuredProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-goldAccent shrink-0" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {featuredProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-goldAccent font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
                  <a
                    href={featuredProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="button"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest shadow-lg"
                  >
                    <span>LIVE DEMO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-goldAccent bg-goldAccent/10 hover:bg-goldAccent/20 border border-goldAccent/30 transition-all uppercase tracking-widest ml-auto"
                  >
                    <span>VIEW CASE STUDY</span>
                  </button>
                </div>
              </div>

              {/* Right Code / Interactive Preview Card */}
              <div className="lg:col-span-5 relative">
                <div 
                  onClick={() => setSelectedProject(featuredProject)}
                  className="aspect-[4/3] rounded-2xl bg-primaryBlack/90 border border-white/15 p-6 flex flex-col justify-between cursor-pointer group-hover:border-goldAccent/50 transition-colors shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-mutedText">
                    <span className="text-goldAccent font-bold uppercase tracking-wider">JobFlow Case Study</span>
                    <span className="text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-primaryText/90">
                    <p className="text-goldAccent font-bold">// Centralized Application Management</p>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                      <span className="text-[10px] text-mutedText uppercase">Pipeline Status</span>
                      <p className="font-bold text-primaryText">Applied → Interviewing → Offered</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] font-mono text-goldAccent">
                    <span>Click to inspect full details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-goldAccent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* 02 — ALL OTHER PROJECTS GRID */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
              ADDITIONAL DEVELOPED PROJECTS
            </h3>
            <span className="font-mono text-xs text-mutedText">{projectsData.length - 1} PROJECTS</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.filter(p => p.id !== 'jobflow').map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group rounded-3xl bg-black border border-white/10 p-7 space-y-5 hover:border-goldAccent/50 transition-all shadow-xl hover:shadow-[0_14px_35px_rgba(185,163,106,0.1)] flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  {/* Category & Subtitle */}
                  <div className="flex items-center justify-between font-mono text-[11px] border-b border-white/10 pb-3">
                    <span className="text-goldAccent font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-mutedText group-hover:text-goldAccent transition-colors">↗</span>
                  </div>

                  {/* Project Title */}
                  <h4 className="font-headline text-3xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase leading-none">
                    {project.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-mutedText text-xs sm:text-sm font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-primaryText font-semibold group-hover:border-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div 
                  className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.08, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-primaryText hover:text-goldAccent border border-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}

                    {project.liveDemo && (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-goldAccent/10 text-goldAccent border border-goldAccent/30 font-bold hover:bg-goldAccent hover:text-primaryBlack transition-all"
                      >
                        <span>DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] font-bold text-mutedText hover:text-goldAccent transition-colors uppercase tracking-wider flex items-center gap-1 group-hover:text-goldAccent"
                  >
                    <span>DETAILS</span>
                    <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
