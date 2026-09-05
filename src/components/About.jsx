import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, RefreshCw, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accentEmerald/30 text-xs font-mono text-accentEmerald">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ABOUT <span className="text-gradient-emerald">ME</span>
          </h2>
          <div className="w-16 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-8 border-white/10 space-y-6 relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-32 h-32 text-accentEmerald" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-wide">
              Frontend Developer Driven by <span className="text-accentEmerald">Building Real Projects</span>
            </h3>

            <p className="text-textMuted text-base sm:text-lg leading-relaxed">
              {personalData.fullBio}
            </p>

            {/* Core Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accentEmerald/10 text-accentEmerald shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-textMuted uppercase tracking-wider">Education</h4>
                  <p className="text-sm font-semibold text-white">BCA Graduate</p>
                  <p className="text-xs text-textMuted">Islamiah College (Autonomous)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accentCyan/10 text-accentCyan shrink-0 mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-textMuted uppercase tracking-wider">Primary Focus</h4>
                  <p className="text-sm font-semibold text-white">Frontend & Web Dev</p>
                  <p className="text-xs text-textMuted">Responsive UI & React Applications</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Philosophy / Approach Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 glass-panel rounded-2xl border-white/10 bg-bgElevated/50">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
                  <RefreshCw className="w-4 h-4 text-accentEmerald animate-spin" style={{ animationDuration: '8s' }} />
                  <span>MY DEVELOPMENT APPROACH</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accentEmerald/10 text-accentEmerald">CYCLE</span>
              </div>

              <div className="space-y-4">
                {personalData.approach.map((item, idx) => (
                  <div 
                    key={item.step}
                    className="flex items-start gap-4 p-3.5 rounded-xl glass-panel-hover bg-white/5 border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accentEmerald/10 border border-accentEmerald/30 flex items-center justify-center font-mono text-xs font-bold text-accentEmerald shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold font-mono text-white tracking-wide">{item.step}</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accentEmerald" />
                      </div>
                      <p className="text-xs text-textMuted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
