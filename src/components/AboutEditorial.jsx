import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Code2, Sparkles, GraduationCap, Terminal, Award, Server, Box } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function AboutEditorial() {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef(null);
  
  // 3D Interactive Card Hover Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Enhanced 3D Tilt calculation
    const rX = ((y - centerY) / centerY) * -16; 
    const rY = ((x - centerX) / centerX) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setTranslateZ(25);
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setTranslateZ(0);
  };

  const cardStats = [
    { label: "DEGREE", val: "BCA (2023–2026)", sub: "Islamiah College (Autonomous)", icon: GraduationCap },
    { label: "PRIMARY POSITION", val: "PYTHON FULL STACK", sub: "& React.js Developer", icon: Code2 },
    { label: "BACKEND & DB", val: "PYTHON & DJANGO", sub: "MySQL Database & REST APIs", icon: Server },
    { label: "LOCATION", val: "PERNAMBUT, TAMIL NADU", sub: "India (Open to Relocation/Remote)", icon: MapPin },
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-24 sm:py-32 bg-primaryBlack text-primaryText overflow-hidden editorial-grid select-none"
    >
      
      {/* Background Animated Glow Elements */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-goldAccent/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goldAccent/10 border border-goldAccent/30 font-mono text-xs font-bold uppercase tracking-widest text-goldAccent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // ABOUT ME</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black text-goldAccent tracking-wider uppercase leading-none">
            ABOUT ME
          </h2>

          <div className="w-20 h-[2px] bg-goldAccent mt-2" />
        </motion.div>

        {/* Asymmetric 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 3D Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative perspective-1000"
          >
            {/* Floating 3D Degree Badge */}
            <motion.div 
              style={{
                transform: `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg) translateZ(45px)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="absolute -top-4 -right-3 z-30 px-3.5 py-1.5 rounded-xl bg-black/95 border border-goldAccent text-goldAccent font-mono text-xs font-bold uppercase tracking-wider shadow-[0_10px_25px_rgba(185,163,106,0.25)] flex items-center gap-1.5 backdrop-blur-md pointer-events-none"
            >
              <Award className="w-4 h-4 text-goldAccent" />
              <span>BCA — ISLAMIAH COLLEGE</span>
            </motion.div>

            {/* Main 3D Perspective Card Container */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out'
              }}
              className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl bg-black/90 border border-white/15 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] group cursor-pointer"
            >
              {/* Dynamic 3D Glare Spotlight */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(185, 163, 106, 0.22) 0%, transparent 65%)`
                }}
              />

              {/* Top Card Bar */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10"
              >
                <span className="font-mono text-[11px] text-goldAccent font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  MOHAMMED ZAKKI ADNAAN
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-goldAccent animate-pulse" />
              </div>

              {/* Center 3D Portrait Frame */}
              <div 
                style={{ transform: 'translateZ(35px)' }}
                className="my-auto py-4 relative z-10 text-center transition-transform duration-300"
              >
                <div className="relative w-52 h-68 sm:w-60 sm:h-76 mx-auto rounded-2xl p-1 bg-gradient-to-tr from-goldAccent/50 via-white/15 to-goldAccent/50 shadow-2xl group-hover:from-goldAccent group-hover:to-goldAccent transition-all duration-500">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-primaryBlack relative flex items-center justify-center">
                    {!imageError ? (
                      <img 
                        src="/profile.jpg" 
                        alt="Mohammed Zakki Adnaan"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-108"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-goldAccent font-headline text-6xl font-black bg-primaryBlack">
                        ZA
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1 mt-4">
                  <p className="text-primaryText font-bold text-lg font-headline tracking-wide uppercase">Mohammed Zakki Adnaan P</p>
                  <p className="text-goldAccent font-mono text-xs font-semibold uppercase tracking-wider">Python Full Stack & React.js Developer</p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="border-t border-white/10 pt-4 flex items-center justify-between font-mono text-[11px] text-mutedText uppercase relative z-10"
              >
                <span>ISLAMIAH COLLEGE (AUTONOMOUS)</span>
                <span className="text-goldAccent font-bold bg-goldAccent/10 px-2 py-0.5 rounded border border-goldAccent/30">BCA 2023–2026</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-goldAccent font-bold block">
                PROFESSIONAL SUMMARY
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-primaryText uppercase leading-tight tracking-tight">
                DEVELOPER PROFILE
              </h3>
            </div>

            {/* Concise Recruiter Bio */}
            <p className="text-primaryText/90 text-base sm:text-lg font-body leading-relaxed border-l-2 border-goldAccent pl-5">
              I'm <strong className="text-goldAccent font-semibold">Mohammed Zakki Adnaan</strong>, a BCA graduate and Python Full Stack & React.js Developer focused on building responsive and scalable web applications. I work across frontend interfaces, REST APIs, databases and deployment, with hands-on experience building and deploying real-world projects.
            </p>

            {/* Core Tech Pills */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[11px] text-mutedText uppercase tracking-wider block font-bold">
                CORE TECHNICAL COMPETENCIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript (ES6+)", "Python", "Django", "FastAPI", "MySQL", "REST APIs", "Tailwind CSS", "Bootstrap", "Git & GitHub"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primaryText font-semibold hover:border-goldAccent/40 hover:text-goldAccent transition-all hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom 4-Card Info Grid with 3D Hover Lift */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {cardStats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2 relative overflow-hidden hover:border-goldAccent/40 transition-all shadow-lg hover:shadow-[0_10px_25px_rgba(185,163,106,0.1)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-goldAccent font-bold uppercase tracking-widest">
                      {item.label}
                    </span>
                    <IconComp className="w-4 h-4 text-goldAccent" />
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
