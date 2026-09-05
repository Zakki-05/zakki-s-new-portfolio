import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'JOURNAL', href: '#journal' },
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
        className={`w-full px-6 sm:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-primaryBlack/90 backdrop-blur-md border-b border-white/10 text-primaryText py-4' 
            : 'bg-transparent text-heroText border-b border-heroText/10'
        }`}
      >
        {/* Left Brand Logo */}
        <a 
          href="#home"
          data-cursor="link"
          className="font-display text-xl tracking-wider uppercase font-black"
        >
          ZAKKI
        </a>

        {/* Center Nav Links (Visible on Tablet md: 768px and Laptop lg: 1024px+) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                data-cursor="link"
                className={`font-mono text-[11px] uppercase tracking-widest transition-all ${
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

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenResume}
            data-cursor="button"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold border transition-all"
            style={{
              color: scrolled ? '#B9A36A' : '#111111',
              borderColor: scrolled ? 'rgba(185, 163, 106, 0.4)' : 'rgba(17, 17, 17, 0.3)',
              backgroundColor: scrolled ? 'rgba(185, 163, 106, 0.1)' : 'transparent'
            }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Toggle Menu Button ONLY for small mobile screens (<768px), completely hidden on Tablet & Laptop (md:hidden) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-all ${scrolled ? 'text-primaryText' : 'text-heroText'}`}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay (<768px screens only) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-primaryBlack/95 backdrop-blur-xl border-b border-white/10 p-8 space-y-6 text-primaryText font-mono"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5 flex items-center justify-between text-primaryText hover:text-goldAccent transition-colors"
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
                className="w-full mt-4 py-3 rounded-full bg-goldAccent text-primaryBlack font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
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
