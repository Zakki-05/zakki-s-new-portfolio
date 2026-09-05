import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bgElevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accentEmerald/30 text-xs font-mono text-accentEmerald">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION <span className="text-gradient-emerald">TIMELINE</span>
          </h2>
          <div className="w-16 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accentEmerald via-accentCyan to-transparent sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-0 w-8 h-8 rounded-full bg-bgDark border-2 border-accentEmerald flex items-center justify-center -translate-x-1/2 z-10 shadow-emerald-glow">
                    <BookOpen className="w-3.5 h-3.5 text-accentEmerald" />
                  </div>

                  {/* Card Container */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 border-white/10 space-y-3 relative group">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accentEmerald/10 text-accentEmerald border border-accentEmerald/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-textMuted flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-accentCyan" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-accentEmerald transition-colors">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-semibold text-accentCyan flex items-center gap-1.5">
                        <Award className="w-4 h-4 shrink-0" />
                        {item.institution}
                      </p>

                      <p className="text-xs text-textMuted leading-relaxed">
                        {item.description}
                      </p>
                      
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
