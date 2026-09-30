import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code, GitBranch } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function GithubSection() {
  return (
    <section className="py-16 sm:py-24 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-black border border-white/10 p-8 sm:p-14 relative overflow-hidden shadow-2xl hover:border-goldAccent/40 transition-colors"
        >
          {/* Background Watermark Icon */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 opacity-5 pointer-events-none">
            <Github className="w-80 h-80 text-white" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB PROFILE & SOURCE CODE</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-primaryText uppercase tracking-wide leading-tight">
                DEVELOPMENT WORK ON <span className="text-goldAccent">GITHUB</span>
              </h2>

              <p className="text-mutedText font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore my code, projects and development work.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="button"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest shadow-xl"
              >
                <Github className="w-4 h-4" />
                <span>VIEW GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
