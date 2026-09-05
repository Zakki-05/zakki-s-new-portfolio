import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Code2, Sparkles, GraduationCap, Rocket, Brain, Cpu, Terminal, Award } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function AboutEditorial() {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef(null);
  
  // 3D Card Hover Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Words reveal array for headline animation
  const statementWords = "I BUILD DIGITAL WORLDS WHERE DESIGN AND CODE WORK TOGETHER.".split(" ");

  const cardStats = [
    { label: "BASED IN", val: "PERNAMBUT, TAMIL NADU", sub: "India", icon: MapPin },
    { label: "PRIMARY FOCUS", val: "PYTHON FULL STACK", sub: "& React.js Development", icon: Code2 },
    { label: "CORE SKILLS", val: "REACT, DJANGO & MYSQL", sub: "RESTful Web APIs", icon: Cpu },
    { label: "MINDSET", val: "ALWAYS LEARNING", sub: "Problem-Solving First", icon: Brain },
    { label: "DEGREE & BATCH", val: "BCA (2023–2026)", sub: "Islamiah College (Autonomous)", icon: GraduationCap },
    { label: "BUILDING", val: "MODERN WEB APPS", sub: "Scalable & Responsive", icon: Rocket },
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-28 sm:py-36 bg-primaryBlack text-primaryText overflow-hidden editorial-grid"
    >
      
      {/* Background Animated Glow Elements */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-goldAccent/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-20">
        
        {/* Section Header with Animated Gold Accent Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>02 // THE PERSON BEHIND THE WORK</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black text-goldAccent tracking-wider uppercase leading-none">
            ABOUT ME
          </h2>

          {/* Animated Gold Curved Line */}
          <div className="relative w-56 sm:w-72 h-8 flex items-center justify-center my-1">
            <svg className="w-full h-full" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                d="M 10 15 Q 100 28 190 15" 
                stroke="#B9A36A" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
            <motion.div 
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-goldAccent border-2 border-primaryBlack shadow-lg shadow-goldAccent/50" 
            />
          </div>
        </motion.div>

        {/* Asymmetric 2-Column Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Interactive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative perspective-1000"
          >
            {/* Outer Unclipped Floating Badge: BCA 2023-2026 */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-3 sm:-right-4 z-30 px-3.5 py-1.5 rounded-xl bg-black/95 border border-goldAccent text-goldAccent font-mono text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-1.5 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-goldAccent animate-pulse" />
              <span>BCA 2023–2026</span>
            </motion.div>

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              data-cursor="card"
              className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl bg-black/90 border border-white/15 p-6 flex flex-col justify-between shadow-2xl group cursor-pointer select-none"
            >
              {/* Dynamic Mouse Glare Overlay */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(185, 163, 106, 0.15) 0%, transparent 60%)`
                }}
              />

              {/* Top Card Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                <span className="font-mono text-[11px] text-goldAccent font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  PORTRAIT // ZAKKI
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-goldAccent/10 border border-goldAccent/40 text-goldAccent font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-goldAccent" />
                  BCA 2023–2026
                </span>
              </div>

              {/* Center Portrait Image Frame */}
              <div className="my-auto py-4 relative z-10 text-center">
                <div className="relative w-52 h-68 sm:w-60 sm:h-76 mx-auto rounded-2xl p-1 bg-gradient-to-tr from-goldAccent/40 via-white/10 to-goldAccent/40 shadow-2xl group-hover:from-goldAccent group-hover:to-goldAccent transition-all duration-500">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-primaryBlack relative flex items-center justify-center">
                    {!imageError ? (
                      <img 
                        src="/profile.jpg" 
                        alt={personalData.name}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-goldAccent font-headline text-6xl font-black bg-primaryBlack">
                        ZA
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1 mt-4">
                  <p className="text-primaryText font-bold text-lg font-headline tracking-wide uppercase">{personalData.name}</p>
                  <p className="text-goldAccent font-mono text-xs font-semibold uppercase tracking-wider">{personalData.title}</p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono text-[11px] text-mutedText uppercase relative z-10">
                <span className="flex items-center gap-1">ISLAMIAH COLLEGE</span>
                <span className="text-goldAccent font-bold bg-goldAccent/10 px-2 py-0.5 rounded border border-goldAccent/30">BCA 2023–2026</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Text Reveal & Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-goldAccent font-bold block">
                WHO AM I?
              </span>

              {/* Animated Word-by-Word Headline Statement */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-primaryText uppercase leading-tight tracking-tight flex flex-wrap gap-x-3 gap-y-1">
                {statementWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className={word === "DESIGN" || word === "CODE" ? "text-goldAccent font-extrabold underline decoration-goldAccent/40 underline-offset-8" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>
            </div>

            {/* Paragraph Bio */}
            <p className="text-mutedText text-base sm:text-lg font-body leading-relaxed border-l-2 border-goldAccent/40 pl-5">
              {personalData.fullBio}
            </p>

            {/* Interactive Tech Badge Pills */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-mutedText uppercase tracking-wider block font-bold">
                CORE STACK & TOOLS:
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Django", "Python", "MySQL", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git & GitHub"].map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(185, 163, 106, 0.15)", borderColor: "#B9A36A" }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primaryText font-semibold transition-all cursor-pointer shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Interactive 6-Card Info Grid */}
        <div className="pt-8 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-goldAccent font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              QUICK HIGHLIGHTS & CREDENTIALS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            {cardStats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -5, backgroundColor: "#0E0E0E" }}
                  className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2 group transition-all shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-goldAccent/5 rounded-full blur-xl group-hover:bg-goldAccent/15 transition-all" />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest">
                      {item.label}
                    </span>
                    <IconComp className="w-4 h-4 text-goldAccent group-hover:scale-110 transition-transform" />
                  </div>

                  <p className="text-sm font-bold text-primaryText tracking-wide uppercase">
                    {item.val}
                  </p>
                  
                  <p className="text-xs text-mutedText">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
