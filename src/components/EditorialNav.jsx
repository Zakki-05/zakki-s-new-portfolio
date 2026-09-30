import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export default function EditorialNav({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <nav 
        aria-label="Main Navigation"
        className={`w-full px-6 sm:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-primaryBlack/95 backdrop-blur-md border-b border-white/10 text-primaryText py-3.5 shadow-2xl' 
            : 'bg-transparent text-heroText border-b border-heroText/10'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="#home"
          data-cursor="link"
          className="font-display text-xl tracking-wider uppercase font-black flex items-center gap-1.5"
        >
          <span>ZAKKI</span><span className="text-goldAccent">.DEV</span>
        </a>

        {/* Center Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                data-cursor="link"
                className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-all ${
                  scrolled 
                    ? 'text-primaryText/80 hover:text-goldAccent' 
                    : 'text-heroText/80 hover:text-heroText font-bold'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            data-cursor="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold border transition-all"
            style={{
              color: scrolled ? '#B9A36A' : '#111111',
              borderColor: scrolled ? 'rgba(185, 163, 106, 0.4)' : 'rgba(17, 17, 17, 0.3)',
              backgroundColor: scrolled ? 'rgba(185, 163, 106, 0.1)' : 'transparent'
            }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Toggle Menu Button for Mobile/Tablet (<1024px) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-all rounded-lg ${scrolled ? 'text-primaryText hover:bg-white/5' : 'text-heroText'}`}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 z-50 bg-primaryBlack/98 backdrop-blur-2xl border-b border-white/10 p-8 space-y-5 text-primaryText font-mono shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase py-2.5 border-b border-white/5 flex items-center justify-between text-primaryText hover:text-goldAccent transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-goldAccent" />
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="w-full mt-4 py-3.5 rounded-full bg-goldAccent text-primaryBlack font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
