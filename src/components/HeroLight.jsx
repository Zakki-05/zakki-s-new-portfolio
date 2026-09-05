import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroLight({ onOpenResume }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const { scrollY } = useScroll();

  // Scroll animations for fallback motion
  const textScale = useTransform(scrollY, [0, 400], [1, 0.94]);
  const textY = useTransform(scrollY, [0, 400], [0, -35]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0.25]);

  useEffect(() => {
    if (!headlineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(headlineRef.current, {
        scaleY: 1.08,
        skewX: -1.5,
        letterSpacing: '0.04em',
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
      className="relative h-screen max-h-screen bg-heroBg text-heroText flex flex-col justify-between p-6 sm:p-12 pt-20 sm:pt-24 pb-6 overflow-hidden editorial-grid-cream select-none"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute top-12 left-8 opacity-[0.03] font-headline text-[18vw] leading-none pointer-events-none select-none text-heroText">
        ZAKKI
      </div>

      {/* Main Massive Hero Headline */}
      <motion.div 
        style={{ scale: textScale, y: textY, opacity: textOpacity }}
        className="my-auto space-y-3 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-1"
        >
          <div className="flex items-center justify-start gap-2.5 font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-heroText/70 mb-1">
            <span className="w-2 h-2 rounded-full bg-goldAccent inline-block animate-pulse" />
            <span>MOHAMMED ZAKKI ADNAAN P — FRONTEND DEVELOPER</span>
          </div>

          {/* Perfect Proportions Headline */}
          <div ref={headlineRef} className="will-change-transform leading-none">
            <h1 className="font-headline text-[13vw] sm:text-[10.5vw] lg:text-[9vw] font-black uppercase leading-[0.84] tracking-tight text-heroText">
              FRONTEND
            </h1>
            <h1 className="font-headline text-[13vw] sm:text-[10.5vw] lg:text-[9vw] font-black uppercase leading-[0.84] tracking-tight text-heroText flex items-center justify-between">
              <span>DEVELOPER</span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-mono font-normal text-goldAccent hidden sm:inline-block tracking-normal">
                [2026]
              </span>
            </h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Details Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end pt-4 border-t border-heroText/10 relative z-10 font-mono text-xs text-heroText/80"
      >
        {/* Bottom-left */}
        <div className="md:col-span-4 space-y-0.5">
          <p className="font-bold tracking-widest uppercase text-heroText text-xs">©2026 ZAKKI</p>
          <p className="text-[10px] text-heroText/60 uppercase tracking-wider">MOHAMMED ZAKKI ADNAAN P</p>
        </div>

        {/* Bottom-center */}
        <div className="md:col-span-4 flex flex-col items-center justify-center gap-1 text-center">
          <p className="font-bold tracking-widest text-[10px] uppercase">
            VISUALS <span className="text-goldAccent">•</span> CODE <span className="text-goldAccent">•</span> EXPERIENCE
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
            <p className="font-bold text-[10px] uppercase tracking-widest text-heroText">BASED IN INDIA</p>
            <p className="text-[10px] text-heroText/60 uppercase">PERNAMBUT, TAMIL NADU</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
