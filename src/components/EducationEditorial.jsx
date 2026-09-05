import React from 'react';
import { motion } from 'framer-motion';

export default function EducationEditorial() {
  return (
    <section id="education" className="py-24 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-mutedText">
            ACADEMIC QUALIFICATIONS
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            EDUCATION
          </h2>
          <div className="w-16 h-[2px] bg-goldAccent mt-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* BCA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-black border border-white/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-goldAccent">
                <span className="font-bold uppercase tracking-widest">BACHELOR OF COMPUTER APPLICATIONS</span>
                <span>2023 — 2026</span>
              </div>

              <h3 className="font-headline text-6xl sm:text-7xl font-black text-primaryText uppercase leading-none">
                BCA
              </h3>

              <div className="font-mono text-xs space-y-1">
                <p className="font-bold text-goldAccent text-sm uppercase">ISLAMIAH COLLEGE (AUTONOMOUS)</p>
                <p className="text-mutedText">VANIYAMBADI, TAMIL NADU, INDIA</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-[10px] text-mutedText uppercase flex justify-between">
              <span>TAMIL NADU, INDIA</span>
              <span>2023 — 2026</span>
            </div>
          </motion.div>

          {/* Class XII */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-black border border-white/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-goldAccent">
                <span className="font-bold uppercase tracking-widest">HIGHER SECONDARY</span>
                <span>2023</span>
              </div>

              <h3 className="font-headline text-4xl sm:text-5xl font-black text-primaryText uppercase leading-tight">
                HIGHER SECONDARY
              </h3>

              <div className="font-mono text-xs space-y-1">
                <p className="font-bold text-primaryText uppercase">ISLAMIAH HIGHER SECONDARY SCHOOL</p>
                <p className="text-mutedText">TAMIL NADU STATE BOARD</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-[10px] text-mutedText uppercase flex justify-between">
              <span>TAMIL NADU STATE BOARD</span>
              <span>2023</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
