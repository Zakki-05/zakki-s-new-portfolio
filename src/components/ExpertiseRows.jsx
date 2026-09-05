import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Terminal, FileCode, Server, Layout, Database, GitBranch, Github, Layers, Cpu } from 'lucide-react';
import { gsap } from 'gsap';

const expertiseList = [
  {
    num: '01',
    title: 'Creative Development',
    desc: 'Building fast, responsive and scalable frontend experiences.',
    icon: Code
  },
  {
    num: '02',
    title: 'Motion & Interaction',
    desc: 'Creating interactive experiences with meaningful motion.',
    icon: Terminal
  },
  {
    num: '03',
    title: 'UI / UX Design',
    desc: 'Creating clean interfaces with strong hierarchy and usability.',
    icon: Layout
  },
  {
    num: '04',
    title: 'Modern Web Apps',
    desc: 'Building interactive applications using modern web technologies.',
    icon: Server
  }
];

const floatingLogos = [
  { name: 'HTML5', icon: Layout, top: '10%', left: '5%', color: '#E34F26' },
  { name: 'CSS3', icon: Code, top: '25%', right: '8%', color: '#1572B6' },
  { name: 'JavaScript', icon: FileCode, top: '48%', left: '3%', color: '#F7DF1E' },
  { name: 'React', icon: Cpu, top: '65%', right: '6%', color: '#61DAFB' },
  { name: 'Node.js', icon: Server, top: '80%', left: '7%', color: '#339933' },
  { name: 'Git', icon: GitBranch, top: '88%', right: '12%', color: '#F05032' },
  { name: 'GitHub', icon: Github, top: '35%', right: '15%', color: '#FFFFFF' },
];

export default function ExpertiseRows() {
  const containerRef = useRef(null);
  const floatingRefs = useRef([]);

  useEffect(() => {
    // GSAP floating animation for tech icons
    floatingRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.to(el, {
        y: (index % 2 === 0 ? 15 : -15),
        x: (index % 3 === 0 ? 10 : -10),
        duration: 3 + (index % 3),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      id="expertise" 
      className="py-28 sm:py-36 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid"
    >
      {/* Floating Independent Technology Logos */}
      {floatingLogos.map((tech, idx) => {
        const TechIcon = tech.icon;
        return (
          <div
            key={tech.name}
            ref={(el) => (floatingRefs.current[idx] = el)}
            style={{ top: tech.top, left: tech.left, right: tech.right }}
            className="absolute pointer-events-none z-0 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-white/10 text-xs font-mono shadow-xl backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity"
          >
            <TechIcon className="w-4 h-4" style={{ color: tech.color }} />
            <span className="text-primaryText font-bold">{tech.name}</span>
          </div>
        );
      })}

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-goldAccent font-bold block">
            03 — EXPERTISE
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl font-extrabold text-primaryText tracking-wider uppercase">
            MY EXPERTISE
          </h2>
          <p className="text-mutedText font-mono text-xs sm:text-sm max-w-xl uppercase tracking-wider">
            I design and build digital experiences where design, code and motion work as one.
          </p>
        </div>

        {/* Stacked Horizontal Expertise Rows */}
        <div className="space-y-0 border-t border-white/10">
          {expertiseList.map((item) => {
            const RowIcon = item.icon;
            return (
              <motion.div
                key={item.num}
                whileHover={{ backgroundColor: '#0B0B0B' }}
                data-cursor="button"
                className="group border-b border-white/10 py-8 px-4 sm:px-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300"
              >
                {/* Number & Title */}
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="font-mono text-sm font-bold text-goldAccent tracking-widest">
                    {item.num}
                  </span>
                  <div className="flex items-center gap-3">
                    <RowIcon className="w-5 h-5 text-goldAccent opacity-70 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-primaryText group-hover:text-goldAccent transition-colors uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-mutedText max-w-md font-sans leading-relaxed">
                  {item.desc}
                </p>

                {/* Arrow */}
                <div className="p-3 rounded-full border border-white/10 group-hover:border-goldAccent group-hover:bg-goldAccent group-hover:text-primaryBlack transition-all self-end md:self-center">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
