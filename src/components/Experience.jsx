import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // PROFESSIONAL EXPERIENCE</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            EXPERIENCE & INTERNSHIPS
          </h2>

          <div className="w-20 h-[2px] bg-goldAccent mt-2" />
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-10 relative">
          {/* Vertical Timeline Connector Line */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-goldAccent/40 via-white/10 to-transparent pointer-events-none" />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative rounded-3xl bg-black border border-white/10 p-8 sm:p-12 space-y-6 hover:border-goldAccent/50 transition-all shadow-2xl hover:shadow-[0_12px_30px_rgba(185,163,106,0.08)]"
            >
              {/* Header Info: ROLE, COMPANY, LOCATION, DATES */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                  <h3 className="font-headline text-3xl sm:text-5xl font-black text-primaryText uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-bold text-goldAccent uppercase tracking-widest">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="text-xs font-mono text-mutedText flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-goldAccent" /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="font-mono text-xs text-left sm:text-right shrink-0">
                  <span className="px-4 py-1.5 rounded-full bg-goldAccent/10 text-goldAccent border border-goldAccent/30 font-bold uppercase tracking-widest inline-block">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* 2–4 Concise Bullets Describing Actual Work */}
              <ul className="space-y-3 font-sans text-sm sm:text-base text-mutedText leading-relaxed">
                {exp.details.map((bullet, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-goldAccent shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
