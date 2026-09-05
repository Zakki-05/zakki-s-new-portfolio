import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Code2, Server, Database, Cpu } from 'lucide-react';
import { buildingJourney } from '../data/portfolioData';

export default function CurrentlyBuilding() {
  return (
    <section className="py-20 relative overflow-hidden bg-bgElevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-white/10 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentEmerald/10 text-xs font-mono text-accentEmerald border border-accentEmerald/30">
              <Rocket className="w-3.5 h-3.5" />
              <span>DEVELOPMENT JOURNEY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              CURRENTLY <span className="text-gradient-cyan">BUILDING & LEARNING</span>
            </h2>

            <p className="text-textMuted text-base leading-relaxed">
              I'm continuously strengthening my Python Full Stack & React.js expertise by building production-grade web applications, REST APIs, database schemas, and AI integrations.
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {buildingJourney.map((item) => (
              <div 
                key={item.category}
                className="glass-panel p-5 rounded-2xl border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="font-bold text-white">{item.category}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    item.status === 'Strong Focus' 
                      ? 'bg-accentEmerald/10 text-accentEmerald border border-accentEmerald/30'
                      : item.status === 'Working With'
                      ? 'bg-accentCyan/10 text-accentCyan border border-accentCyan/30'
                      : 'bg-accentPurple/10 text-accentPurple border border-accentPurple/30'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Meter Bar */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      item.status === 'Strong Focus'
                        ? 'bg-gradient-to-r from-accentEmerald to-teal-400'
                        : item.status === 'Working With'
                        ? 'bg-gradient-to-r from-accentCyan to-blue-500'
                        : 'bg-gradient-to-r from-accentPurple to-indigo-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
