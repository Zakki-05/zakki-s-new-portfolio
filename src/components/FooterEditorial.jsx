import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function FooterEditorial({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primaryBlack text-primaryText border-t border-white/10 pt-16 pb-12 relative overflow-hidden select-none editorial-grid font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Left Brand & Title */}
          <div className="space-y-2">
            <a href="#home" className="font-headline text-3xl font-black tracking-widest text-primaryText block hover:text-goldAccent transition-colors">
              MOHAMMED ZAKKI ADNAAN
            </a>
            <p className="text-goldAccent font-bold uppercase tracking-wider text-xs">
              PYTHON FULL STACK & REACT.JS DEVELOPER
            </p>
          </div>

          {/* Center Social & Contact Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={personalData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all font-bold uppercase"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-goldAccent" />
              <span>GITHUB</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all font-bold uppercase"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-goldAccent" />
              <span>LINKEDIN</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all font-bold uppercase"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-goldAccent" />
              <span>EMAIL</span>
            </motion.a>

            {onOpenResume && (
              <motion.button
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-goldAccent/10 border border-goldAccent/30 text-goldAccent hover:bg-goldAccent hover:text-primaryBlack transition-all font-bold uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </motion.button>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-mutedText text-[11px]">
          <p className="uppercase tracking-wider">
            © 2026 MOHAMMED ZAKKI ADNAAN &nbsp;•&nbsp; ALL RIGHTS RESERVED
          </p>

          <motion.button
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-goldAccent text-primaryText hover:text-goldAccent transition-all font-bold uppercase tracking-widest bg-black/40 shadow-sm group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-goldAccent group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
