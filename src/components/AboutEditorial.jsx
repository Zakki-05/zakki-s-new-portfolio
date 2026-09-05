import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';

export default function AboutEditorial() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-primaryBlack text-primaryText overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-mutedText">
            02 // THE PERSON BEHIND THE WORK
          </span>

          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold text-goldAccent tracking-wider uppercase">
            ABOUT ME
          </h2>

          {/* Thin Curved Gold Line with Circular Point */}
          <div className="relative w-48 sm:w-64 h-6 flex items-center justify-center my-1">
            <svg className="w-full h-full" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 10 15 Q 100 28 190 15" 
                stroke="#B9A36A" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-goldAccent border-2 border-primaryBlack shadow-md" />
          </div>
        </div>

        {/* Asymmetric 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-2xl bg-black border border-white/10 overflow-hidden p-6 flex flex-col justify-between group shadow-2xl">
              
              {/* Top Frame Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[11px] text-goldAccent font-bold uppercase tracking-widest">
                  PORTRAIT // MOHAMMED ZAKKI
                </span>
                <span className="w-2 h-2 rounded-full bg-goldAccent animate-pulse" />
              </div>

              {/* Photo Display / Fallback Frame */}
              <div className="my-auto py-2 font-mono text-xs text-mutedText text-center">
                <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-2xl border border-goldAccent/40 mx-auto overflow-hidden bg-black/90 shadow-2xl relative flex items-center justify-center group-hover:border-goldAccent transition-colors">
                  {!imageError ? (
                    <img 
                      src="/profile.jpg" 
                      alt={personalData.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-goldAccent font-headline text-5xl font-black bg-primaryBlack">
                      ZA
                    </div>
                  )}
                </div>

                <div className="space-y-1 mt-4">
                  <p className="text-primaryText font-bold text-base">{personalData.name}</p>
                  <p className="text-goldAccent text-xs uppercase tracking-wider">{personalData.title}</p>
                </div>
              </div>

              {/* Bottom Frame Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono text-[10px] text-mutedText uppercase">
                <span>ISLAMIAH COLLEGE (AUTONOMOUS)</span>
                <span>BCA 2023-2026</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-goldAccent font-bold block">
              WHO AM I?
            </span>

            {/* Large Statement with mixed white & gold */}
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-primaryText uppercase leading-tight tracking-tight">
              I BUILD DIGITAL WORLDS WHERE <span className="text-goldAccent">DESIGN AND CODE</span> WORK TOGETHER.
            </h3>

            <p className="text-mutedText text-base sm:text-lg font-body leading-relaxed">
              I'm Mohammed Zakki Adnaan, a BCA graduate and Frontend Developer passionate about building clean, responsive and user-friendly web applications.
            </p>

            {/* Bottom Information Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 font-mono">
              
              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  BASED IN
                </span>
                <p className="text-xs font-semibold text-primaryText">PERNAMBUT, TAMIL NADU, INDIA</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  FOCUS
                </span>
                <p className="text-xs font-semibold text-primaryText">WEB / FRONTEND DEVELOPMENT</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  PROJECTS
                </span>
                <p className="text-xs font-semibold text-primaryText">REAL-WORLD WEB APPLICATIONS</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  MINDSET
                </span>
                <p className="text-xs font-semibold text-primaryText">ALWAYS LEARNING</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  EDUCATION
                </span>
                <p className="text-xs font-semibold text-primaryText">BCA (ISLAMIAH COLLEGE)</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest block">
                  BUILDING
                </span>
                <p className="text-xs font-semibold text-primaryText">MODERN WEB EXPERIENCES</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
