import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter CTA Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border-white/10 text-center relative overflow-hidden bg-gradient-to-b from-bgElevated/80 to-bgDark">
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentEmerald/10 text-xs font-mono font-bold text-accentEmerald border border-accentEmerald/30">
              <Briefcase className="w-4 h-4" />
              <span>CAREER OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              LOOKING FOR THE <span className="text-gradient-emerald">NEXT OPPORTUNITY</span>
            </h2>

            <p className="text-textMuted text-base sm:text-lg leading-relaxed">
              I'm open to opportunities where I can contribute as a developer, work on real-world applications, learn from experienced teams and continue growing my technical skills.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                data-cursor="button"
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-mono text-sm font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-emerald-glow"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>

              <button
                onClick={onOpenResume}
                data-cursor="button"
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-mono text-sm font-semibold text-white glass-panel hover:bg-white/10 border-white/10 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
