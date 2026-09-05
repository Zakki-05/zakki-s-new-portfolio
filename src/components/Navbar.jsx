import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CASE STUDY', href: '#jobflow-case-study' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <nav 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled 
            ? 'glass-panel shadow-glass-card border-white/10 py-3 px-5 sm:px-8' 
            : 'bg-bgDark/40 backdrop-blur-md border-white/5 py-4 px-5 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group text-xl font-bold tracking-wider font-mono text-white"
            data-cursor="link"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accentEmerald animate-pulse group-hover:scale-125 transition-transform" />
            <span className="text-white group-hover:text-accentEmerald transition-colors">
              ZAKKI<span className="text-accentEmerald">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    data-cursor="link"
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-widest transition-all relative ${
                      isActive 
                        ? 'text-accentEmerald font-semibold' 
                        : 'text-textMuted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-accentEmerald rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action CTAs (Socials & Resume) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="p-2 rounded-lg text-textMuted hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="p-2 rounded-lg text-textMuted hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              data-cursor="button"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-accentEmerald bg-accentEmerald/10 hover:bg-accentEmerald/20 border border-accentEmerald/30 transition-all shadow-emerald-glow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-textMuted hover:text-white hover:bg-white/10 transition-all border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 glass-panel rounded-2xl border border-white/10 p-6 shadow-2xl bg-bgCard/95"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono tracking-widest text-textMuted hover:text-accentEmerald hover:bg-accentEmerald/10 transition-all flex items-center justify-between border border-transparent hover:border-accentEmerald/20"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl text-textMuted hover:text-white bg-white/5 border border-white/10"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl text-textMuted hover:text-white bg-white/5 border border-white/10"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW RESUME</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
