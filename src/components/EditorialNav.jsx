import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'PROJECTS', href: '#work', id: 'work' },
  { label: 'EDUCATION', href: '#education', id: 'education' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export default function EditorialNav({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
          className="font-display text-xl tracking-wider uppercase font-black flex items-center gap-1.5 transition-transform hover:scale-105"
        >
          <span>ZAKKI</span><span className="text-goldAccent">.DEV</span>
        </a>

        {/* Center Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.label} className="relative py-1">
                <a
                  href={item.href}
                  data-cursor="link"
                  className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-all relative z-10 ${
                    scrolled 
                      ? (isActive ? 'text-goldAccent font-bold' : 'text-primaryText/80 hover:text-goldAccent') 
                      : (isActive ? 'text-heroText font-extrabold' : 'text-heroText/80 hover:text-heroText font-bold')
                  }`}
                >
                  {item.label}
                </a>

                {/* Animated Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      scrolled ? 'bg-goldAccent shadow-[0_0_8px_#B9A36A]' : 'bg-heroText'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenResume}
            data-cursor="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold border transition-all shadow-sm"
            style={{
              color: scrolled ? '#B9A36A' : '#111111',
              borderColor: scrolled ? 'rgba(185, 163, 106, 0.4)' : 'rgba(17, 17, 17, 0.3)',
              backgroundColor: scrolled ? 'rgba(185, 163, 106, 0.1)' : 'transparent'
            }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </motion.button>

          {/* Toggle Menu Button for Mobile/Tablet (<1024px) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-all rounded-lg ${scrolled ? 'text-primaryText hover:bg-white/5' : 'text-heroText'}`}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6 text-goldAccent" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden fixed inset-x-0 top-16 z-50 bg-primaryBlack/98 backdrop-blur-2xl border-b border-white/10 p-8 space-y-5 text-primaryText font-mono shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-bold tracking-widest uppercase py-2.5 border-b border-white/5 flex items-center justify-between transition-colors ${
                    activeSection === item.id ? 'text-goldAccent' : 'text-primaryText hover:text-goldAccent'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-goldAccent" />
                </a>
              ))}

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="w-full mt-4 py-3.5 rounded-full bg-goldAccent text-primaryBlack font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg hover:bg-amber-300 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
