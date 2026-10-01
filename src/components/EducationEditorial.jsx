import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationEditorial() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC QUALIFICATIONS</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            EDUCATION
          </h2>

          <div className="w-20 h-[2px] bg-goldAccent mt-2" />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-black border border-white/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-goldAccent/50 transition-all shadow-2xl hover:shadow-[0_12px_30px_rgba(185,163,106,0.08)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-goldAccent">
                  <span className="font-bold uppercase tracking-widest">{edu.degree}</span>
                  <span className="font-mono font-bold px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-headline text-4xl sm:text-6xl font-black text-primaryText uppercase leading-none">
                  {edu.shortDegree}
                </h3>

                <div className="font-mono text-xs space-y-1">
                  <p className="font-bold text-goldAccent text-sm uppercase">{edu.institution}</p>
                  <p className="text-mutedText">{edu.location}</p>
                </div>

                {edu.description && (
                  <p className="text-mutedText text-xs font-sans leading-relaxed pt-2 border-t border-white/5">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 font-mono text-[10px] text-mutedText uppercase flex justify-between">
                <span>{edu.institution}</span>
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
