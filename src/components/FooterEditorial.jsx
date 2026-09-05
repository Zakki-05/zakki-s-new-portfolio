import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Clock, MapPin, Mail, Phone, Github, Linkedin, FileText, ExternalLink, Sparkles, Code2, Globe } from 'lucide-react';
import { personalData, projectsData } from '../data/portfolioData';

export default function FooterEditorial({ onOpenResume }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primaryBlack text-primaryText border-t border-white/10 pt-20 pb-12 relative overflow-hidden select-none editorial-grid">
      
      {/* Background Subtle Watermark */}
      <div className="absolute -bottom-10 right-0 opacity-[0.02] font-headline text-[22vw] leading-none pointer-events-none select-none text-white font-black">
        ZAKKI
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Top Call-To-Action Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-primaryText uppercase tracking-wider leading-none">
              LET'S BUILD SOMETHING <span className="text-goldAccent">EXTRAORDINARY.</span>
            </h2>
            
            <p className="text-mutedText font-mono text-xs sm:text-sm">
              Seeking Frontend & Full-Stack Developer roles in Bangalore, Chennai, or remote-first engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-cursor="button"
              className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-primaryBlack bg-goldAccent hover:bg-yellow-400 transition-all uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <span>GET IN TOUCH</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                data-cursor="button"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-primaryText bg-white/5 hover:bg-white/10 border border-white/10 hover:border-goldAccent/40 transition-all uppercase tracking-wider flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-goldAccent" />
                <span>VIEW RESUME</span>
              </button>
            )}
          </div>

        </div>

        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Profile (Col-span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="font-headline text-3xl font-black tracking-widest text-primaryText flex items-center gap-2">
              ZAKKI<span className="text-goldAccent">.DEV</span>
            </a>
            
            <p className="text-mutedText text-xs font-sans leading-relaxed max-w-sm">
              Frontend Developer with a full-stack foundation in React.js, Django, and MySQL. Passionate about building clean, responsive, and user-friendly web applications.
            </p>

            <div className="space-y-2 pt-2 font-mono text-xs text-mutedText">
              <div className="flex items-center gap-2 hover:text-primaryText transition-colors">
                <MapPin className="w-3.5 h-3.5 text-goldAccent shrink-0" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primaryText transition-colors">
                <Mail className="w-3.5 h-3.5 text-goldAccent shrink-0" />
                <a href={`mailto:${personalData.email}`} className="hover:underline">{personalData.email}</a>
              </div>
              <div className="flex items-center gap-2 hover:text-primaryText transition-colors">
                <Phone className="w-3.5 h-3.5 text-goldAccent shrink-0" />
                <a href={`tel:${personalData.phone}`} className="hover:underline">{personalData.phone}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-goldAccent">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-mutedText">
              <li>
                <a href="#home" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">01</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">02</span>
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">03</span>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">04</span>
                  <span>Expertise</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">05</span>
                  <span>Selected Work</span>
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">06</span>
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primaryText transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-goldAccent">07</span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Projects (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-goldAccent">
              SELECTED PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs text-mutedText">
              {projectsData.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <a 
                    href={project.github || "#projects"} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center justify-between hover:text-primaryText transition-colors"
                  >
                    <span className="truncate pr-2">{project.title}</span>
                    <ExternalLink className="w-3 h-3 text-goldAccent/60 group-hover:text-goldAccent shrink-0 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Live Status & Socials (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-goldAccent">
              LIVE STATUS
            </h4>

            {/* Live IST Clock Widget */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-mutedText text-[10px] uppercase tracking-wider">
                <Clock className="w-3 h-3 text-goldAccent" />
                <span>IST (INDIA)</span>
              </div>
              <p className="font-bold text-sm text-primaryText tracking-widest font-mono">
                {time || '07:30:00 PM'}
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] text-mutedText uppercase tracking-widest block font-bold">CONNECT</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all text-primaryText"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all text-primaryText"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalData.email}`}
                  data-cursor="link"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all text-primaryText"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mutedText">
          
          <p className="uppercase tracking-wider text-center sm:text-left text-[11px]">
            © {new Date().getFullYear()} MOHAMMED ZAKKI ADNAAN P &nbsp;•&nbsp; CRAFTED WITH REACT & TAILWIND
          </p>

          <button
            onClick={scrollToTop}
            data-cursor="button"
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 hover:border-goldAccent text-primaryText hover:text-goldAccent transition-all text-xs font-bold uppercase tracking-widest bg-black/40 shadow-md group"
          >
            <span>BACK TO TOP</span>
            <div className="p-1 rounded-full bg-white/5 group-hover:bg-goldAccent group-hover:text-primaryBlack transition-all">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
}
