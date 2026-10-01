import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Globe, Cpu } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  FRONTEND: Layout,
  BACKEND: Server,
  DATABASE: Database,
  TOOLS: Wrench,
  DEPLOYMENT: Globe
};

export default function ExpertiseRows() {
  return (
    <section 
      id="skills" 
      className="py-24 sm:py-32 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <Cpu className="w-3.5 h-3.5" />
            <span>04 // TECHNICAL SKILLS & STACK</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            TECHNICAL SKILLS
          </h2>

          <div className="w-20 h-[2px] bg-goldAccent mt-2" />
          
          <p className="text-mutedText font-mono text-xs sm:text-sm max-w-xl uppercase tracking-wider pt-2">
            Categorized technical stack across modern web development technologies.
          </p>
        </div>

        {/* 5 Clean Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((group, idx) => {
            const IconComp = categoryIcons[group.category] || Cpu;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group rounded-3xl bg-black border border-white/10 p-7 space-y-5 hover:border-goldAccent/50 transition-all shadow-xl hover:shadow-[0_10px_25px_rgba(185,163,106,0.08)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold text-goldAccent uppercase tracking-widest flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-goldAccent group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                      {group.category}
                    </span>
                    <span className="text-[10px] font-mono text-mutedText">{group.skills.length} TECHS</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-primaryText font-semibold hover:border-goldAccent/40 hover:text-goldAccent transition-all hover:scale-[1.02]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-mutedText uppercase flex items-center justify-between">
                  <span>VERIFIED STACK</span>
                  <span className="text-goldAccent font-bold">ZAKKI.DEV</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
