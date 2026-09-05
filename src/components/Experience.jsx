import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-goldAccent font-bold block">
            03 // INDUSTRY EXPERIENCE & INTERNSHIPS
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-primaryText tracking-wider uppercase">
            EXPERIENCE & TRAINING
          </h2>
          <p className="text-mutedText font-mono text-xs sm:text-sm max-w-xl uppercase tracking-wider">
            Verified software development internships, industry training, and hands-on professional programs.
          </p>
        </div>

        {/* Experience Rows Stack */}
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              data-cursor="button"
              className="group rounded-3xl bg-black border border-white/10 p-8 sm:p-12 space-y-6 hover:border-goldAccent/40 transition-colors shadow-2xl"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-goldAccent uppercase tracking-widest block">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="text-[11px] font-mono text-mutedText flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-goldAccent" /> {exp.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline text-3xl sm:text-5xl font-black text-primaryText group-hover:text-goldAccent transition-colors uppercase tracking-wide mt-1">
                    {exp.role}
                  </h3>
                </div>

                <div className="font-mono text-xs text-left sm:text-right space-y-1">
                  <span className="px-3.5 py-1 rounded-full bg-goldAccent/10 text-goldAccent border border-goldAccent/30 font-bold uppercase tracking-widest inline-block">
                    {exp.period}
                  </span>
                  {exp.technology && (
                    <p className="text-goldAccent text-[11px] font-bold uppercase tracking-wider block">
                      TECH: {exp.technology}
                    </p>
                  )}
                  {exp.duration && (
                    <p className="text-mutedText text-[11px] uppercase tracking-wider">{exp.duration}</p>
                  )}
                </div>
              </div>

              {/* Details & Description */}
              {exp.details ? (
                <ul className="space-y-3 font-sans text-sm text-mutedText">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-goldAccent shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3 font-sans text-sm text-mutedText">
                  {exp.focus && (
                    <p className="font-mono text-xs text-goldAccent font-bold uppercase tracking-widest">
                      FOCUS: {exp.focus}
                    </p>
                  )}
                  <p className="leading-relaxed">{exp.description}</p>
                </div>
              )}

              {/* Bottom Metadata Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-mutedText uppercase">
                <span>{exp.company}</span>
                {exp.certificateDate ? (
                  <span className="text-goldAccent font-bold">CERTIFICATE ISSUED: {exp.certificateDate}</span>
                ) : (
                  <span>PRACTICAL WEB DEVELOPMENT PROGRAM</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
