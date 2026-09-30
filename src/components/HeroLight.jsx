import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, FolderGit2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function HeroLight({ onOpenResume }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const { scrollY } = useScroll();

  // Scroll animations for fallback motion
  const textScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const textY = useTransform(scrollY, [0, 400], [0, -30]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0.3]);

  useEffect(() => {
    if (!headlineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(headlineRef.current, {
        scaleY: 1.05,
        skewX: -1,
        letterSpacing: '0.03em',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen bg-heroBg text-heroText flex flex-col justify-between p-6 sm:p-12 pt-24 sm:pt-28 pb-8 overflow-hidden editorial-grid-cream select-none"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute top-10 left-8 opacity-[0.03] font-headline text-[18vw] leading-none pointer-events-none select-none text-heroText">
        ZAKKI
      </div>

      {/* Main Hero Container */}
      <motion.div 
        style={{ scale: textScale, y: textY, opacity: textOpacity }}
        className="my-auto space-y-6 relative z-10 max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heroText/5 border border-heroText/15 font-mono text-xs font-bold uppercase tracking-widest text-heroText">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span>OPEN TO FULL-TIME OPPORTUNITIES</span>
          </div>

          {/* Name & Primary Professional Title */}
          <div className="space-y-1">
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-heroText uppercase tracking-wider">
              {personalData.shortName}
            </h1>
            <div ref={headlineRef} className="will-change-transform leading-none pt-1">
              <h2 className="font-headline text-[9.5vw] sm:text-[7.5vw] lg:text-[6.2vw] font-black uppercase leading-[0.88] tracking-tight text-heroText">
                PYTHON FULL STACK
              </h2>
              <h2 className="font-headline text-[9.5vw] sm:text-[7.5vw] lg:text-[6.2vw] font-black uppercase leading-[0.88] tracking-tight text-heroText flex items-center justify-between">
                <span>& REACT.JS DEVELOPER</span>
                <span className="text-lg sm:text-2xl lg:text-3xl font-mono font-bold text-goldAccent hidden md:inline-block tracking-widest">
                  [2026]
                </span>
              </h2>
            </div>
          </div>

          {/* Professional Description */}
          <p className="text-heroText/80 font-sans text-base sm:text-xl max-w-2xl leading-relaxed pt-2">
            I build responsive, scalable web applications using React.js, Python, Django, FastAPI and modern web technologies.
          </p>

          {/* Action Buttons: View Projects & Download Resume */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <a
              href="#work"
              data-cursor="button"
              className="px-6 py-3.5 rounded-full font-bold text-heroBg bg-heroText hover:bg-goldAccent hover:text-heroBg transition-all uppercase tracking-widest shadow-md flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>VIEW PROJECTS</span>
            </a>

            <button
              onClick={onOpenResume}
              data-cursor="button"
              className="px-6 py-3.5 rounded-full font-bold text-heroText bg-heroText/5 hover:bg-heroText/10 border border-heroText/20 hover:border-goldAccent transition-all uppercase tracking-widest flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-goldAccent" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Key Technologies Cloud */}
          <div className="pt-4 flex flex-wrap items-center gap-2 font-mono text-[11px] text-heroText/70">
            <span className="font-bold uppercase text-heroText/90 mr-1">STACK:</span>
            {["React.js", "Python", "Django", "FastAPI", "MySQL", "Tailwind CSS", "REST APIs"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded bg-heroText/5 border border-heroText/10 font-semibold">
                {tech}
              </span>
            ))}
          </div>

        </motion.div>
      </motion.div>

      {/* Bottom Details Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end pt-4 border-t border-heroText/15 relative z-10 font-mono text-xs text-heroText/80"
      >
        {/* Bottom-left */}
        <div className="md:col-span-4 space-y-0.5">
          <p className="font-bold tracking-widest uppercase text-heroText text-xs">©2026 MOHAMMED ZAKKI ADNAAN P</p>
          <p className="text-[10px] text-heroText/60 uppercase tracking-wider">PYTHON FULL STACK & REACT.JS DEVELOPER</p>
        </div>

        {/* Bottom-center */}
        <div className="md:col-span-4 flex flex-col items-center justify-center gap-1 text-center">
          <p className="font-bold tracking-widest text-[10px] uppercase">
            REACT.JS <span className="text-goldAccent">•</span> PYTHON <span className="text-goldAccent">•</span> DJANGO
          </p>
          <a href="#about" className="flex items-center gap-1 text-heroText hover:text-goldAccent transition-colors text-[10px] font-bold uppercase tracking-widest">
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3 h-3 text-goldAccent" />
            </motion.div>
          </a>
        </div>

        {/* Bottom-right Rotating Circular CTA */}
        <div className="md:col-span-4 flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
          <a
            href="#contact"
            data-cursor="cta"
            aria-label="Let's Work Together"
            className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-heroText/30 flex items-center justify-center hover:bg-heroText hover:text-heroBg transition-all duration-300 shadow-sm shrink-0"
          >
            <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
              <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                <path
                  id="circlePathHeroPerfect"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="text-[8px] font-mono tracking-widest uppercase fill-current">
                  <textPath href="#circlePathHeroPerfect" startOffset="0%">
                    LET'S WORK TOGETHER • LET'S WORK TOGETHER •
                  </textPath>
                </text>
              </svg>
            </div>
            <ArrowUpRight className="w-5 h-5 text-heroText group-hover:text-heroBg group-hover:rotate-45 transition-transform" />
          </a>

          <div className="text-right">
            <p className="font-bold text-[10px] uppercase tracking-widest text-heroText">LOCATION</p>
            <p className="text-[10px] text-heroText/60 uppercase">PERNAMBUT, TAMIL NADU, INDIA</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
