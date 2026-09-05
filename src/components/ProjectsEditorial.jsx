import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsEditorial() {
  return (
    <section id="work" className="py-28 sm:py-36 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-mutedText">
            04 // PORTFOLIO SHOWCASE
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            MY WORK
          </h2>
          <div className="w-16 h-[2px] bg-goldAccent mt-2" />
        </div>

        {/* Large Editorial Projects Showcase */}
        <div className="space-y-24">
          
          {/* PROJECT 01 — JOBFLOW (FEATURED LARGE EDITORIAL CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            className="group relative rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-14 space-y-8 hover:border-goldAccent/40 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-goldAccent text-primaryBlack font-extrabold uppercase tracking-widest">
                01 / 04 — FEATURED APP
              </span>
              <span className="text-goldAccent font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI-POWERED PLATFORM
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="font-mono text-xs text-goldAccent uppercase tracking-widest font-bold">
                  AI-POWERED JOB APPLICATION PLATFORM
                </p>
                <h3 className="font-headline text-5xl sm:text-7xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase leading-none">
                  JOBFLOW
                </h3>
                <p className="text-mutedText text-base sm:text-lg leading-relaxed font-sans">
                  An AI-powered job application management platform designed to help users organize, track and manage their job applications efficiently.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {['REACT', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS.JS', 'DATABASE', 'AI'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-goldAccent font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 font-mono text-xs">
                  <a
                    href="https://zakki-dev.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="button"
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest shadow-lg"
                  >
                    <span>VIEW LIVE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/Zakki-05/jobflow"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE</span>
                  </a>
                </div>
              </div>

              {/* Code Container */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl bg-primaryBlack/90 border border-white/10 p-6 flex flex-col justify-between overflow-hidden group-hover:border-goldAccent/40 transition-colors">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-mutedText">
                    <span>jobflow_dashboard.jsx</span>
                    <span className="text-goldAccent">Status: Active</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-primaryText/80">
                    <p className="text-goldAccent">// Centralized Application Pipeline</p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[10px] text-mutedText uppercase">Pipeline Status</span>
                      <p className="font-bold text-primaryText">Applied → Interviewing → Offered</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] font-mono text-goldAccent">
                    <span>React + Express Integration</span>
                    <span>AI Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* PROJECT 02 — TECH ZONE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            className="group relative rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-12 space-y-6 hover:border-goldAccent/40 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-goldAccent font-bold uppercase tracking-widest">
                02 / 04 — E-COMMERCE WEBSITE
              </span>
              <span className="text-mutedText font-mono">HTML5 / CSS3 / JAVASCRIPT</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-headline text-4xl sm:text-6xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase">
                  TECH ZONE
                </h3>
                <p className="text-mutedText text-sm sm:text-base leading-relaxed font-sans">
                  A responsive e-commerce website for browsing smartphones, smartwatches, earbuds and laptops.
                </p>

                <div className="space-y-2 pt-2">
                  <p className="font-mono text-[10px] text-goldAccent uppercase tracking-widest font-bold">FEATURES:</p>
                  <div className="flex flex-wrap gap-4 font-mono text-xs text-primaryText">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-goldAccent" /> PRODUCT CATEGORIES</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-goldAccent" /> RESPONSIVE DESIGN</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-goldAccent" /> PAGINATION</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 font-mono text-xs">
                  <a
                    href="https://zakki-dev.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="button"
                    className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/Zakki-05/ownProject"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex items-center gap-2 px-4 py-3 rounded-full font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


          {/* 2-COLUMN GRID FOR PROJECT 03 & 04 */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* PROJECT 03 — AL-HUDA ISLAMIC SCHOOL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-cursor="project"
              className="group rounded-3xl bg-black border border-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-goldAccent/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-goldAccent font-bold uppercase tracking-widest">03 / 04 — EDUCATIONAL WEBSITE</span>
                  <span className="text-mutedText">HTML5 / CSS3 / JS</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase">
                  AL-HUDA ISLAMIC SCHOOL
                </h3>

                <p className="text-mutedText text-xs sm:text-sm leading-relaxed font-sans">
                  A responsive educational website presenting school information, curriculum, gallery content and educational resources.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                <a
                  href="https://zakki-dev.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="button"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase"
                >
                  <span>VIEW LIVE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>


            {/* PROJECT 04 — DIGITAL MARKETING AGENCY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-cursor="project"
              className="group rounded-3xl bg-black border border-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-goldAccent/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-goldAccent font-bold uppercase tracking-widest">04 / 04 — BUSINESS WEBSITE</span>
                  <span className="text-mutedText">BOOTSTRAP / JS</span>
                </div>

                <h3 className="font-headline text-3xl sm:text-4xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase">
                  DIGITAL MARKETING AGENCY
                </h3>

                <p className="text-mutedText text-xs sm:text-sm leading-relaxed font-sans">
                  A responsive digital marketing agency website featuring services, portfolio, about and contact sections.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                <a
                  href="https://github.com/Zakki-05/Digital-Marketing"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>VIEW SOURCE</span>
                </a>

                <a
                  href="https://zakki-dev.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="button"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase"
                >
                  <span>VIEW DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
