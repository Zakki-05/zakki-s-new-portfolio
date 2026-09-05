import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (IST)
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
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
    <footer className="border-t border-white/10 bg-bgCard/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Location */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="text-xl font-bold font-mono text-white inline-block">
              ZAKKI<span className="text-accentEmerald">.DEV</span>
            </a>
            <p className="text-xs text-textMuted max-w-sm leading-relaxed">
              Frontend Developer & BCA Graduate from Tamil Nadu, India. Passionate about building clean, responsive, and practical web applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-textMuted pt-1">
              <MapPin className="w-3.5 h-3.5 text-accentEmerald" />
              <span>Pernambut, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-3">Navigation</span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-textMuted">
              <a href="#home" className="hover:text-accentEmerald transition-colors">Home</a>
              <a href="#about" className="hover:text-accentEmerald transition-colors">About</a>
              <a href="#skills" className="hover:text-accentEmerald transition-colors">Skills</a>
              <a href="#projects" className="hover:text-accentEmerald transition-colors">Projects</a>
              <a href="#jobflow-case-study" className="hover:text-accentEmerald transition-colors">JobFlow AI</a>
              <a href="#education" className="hover:text-accentEmerald transition-colors">Education</a>
              <a href="#contact" className="hover:text-accentEmerald transition-colors">Contact</a>
            </div>
          </div>

          {/* Live Status & IST Clock */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-white font-bold block mb-3">Live Status</span>
            
            <div className="p-3.5 rounded-xl glass-panel border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-accentEmerald">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentEmerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accentEmerald"></span>
                </span>
                <span className="font-bold">Available for Work</span>
              </div>
              <p className="text-textMuted text-[11px]">Open to software development opportunities.</p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-textMuted">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accentCyan" /> IST (India):</span>
              <span className="font-bold text-white tracking-widest">{time || '17:30:00 PM'}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-textMuted text-center sm:text-left">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            data-cursor="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-textMuted hover:text-white glass-panel hover:bg-accentEmerald/10 border-white/10 hover:border-accentEmerald/40 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
