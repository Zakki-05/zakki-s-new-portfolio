import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code, Box } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import ThreeTechSphere from './ThreeTechSphere';

export default function GithubSection() {
  return (
    <section className="py-16 sm:py-24 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-black border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl hover:border-goldAccent/40 transition-colors"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
                <Box className="w-3.5 h-3.5" />
                <span>3D INTERACTIVE ARCHITECTURE & SOURCE CODE</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-primaryText uppercase tracking-wide leading-tight">
                DEVELOPMENT WORK ON <span className="text-goldAccent">GITHUB</span>
              </h2>

              <p className="text-mutedText font-sans text-base sm:text-lg leading-relaxed max-w-xl">
                Explore my full stack repositories, React interfaces, Django REST API backends, and open-source contributions.
              </p>

              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="button"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs font-bold text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all uppercase tracking-widest shadow-xl"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW GITHUB REPOSITORIES</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Right Interactive 3D Canvas Sphere */}
            <div className="lg:col-span-5 rounded-2xl bg-primaryBlack/90 border border-white/10 p-4 shadow-xl flex items-center justify-center">
              <ThreeTechSphere />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
