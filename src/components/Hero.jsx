import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Github, Linkedin, FileText, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accentEmerald/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accentCyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border-accentEmerald/30 bg-accentEmerald/5 text-xs font-mono tracking-wider text-accentEmerald"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentEmerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accentEmerald"></span>
              </span>
              <span className="font-semibold uppercase tracking-widest">{personalData.title}</span>
              <span className="text-white/30">|</span>
              <span className="text-textMuted flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accentEmerald" /> Pernambut, India
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                MOHAMMED <br />
                <span className="text-gradient-emerald">ZAKKI</span> <br />
                <span className="text-white">ADNAAN P</span>
              </h1>
            </motion.div>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-accentCyan font-mono tracking-wide max-w-2xl"
            >
              {personalData.tagline}
            </motion.p>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-textMuted text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {personalData.shortBio}
            </motion.p>

            {/* CTAs & Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                data-cursor="button"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-emerald-glow"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor="button"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white glass-panel hover:bg-white/10 border-white/10 hover:border-accentEmerald/40 transition-all"
              >
                <span>LET'S CONNECT</span>
              </a>

              <button
                onClick={onOpenResume}
                data-cursor="button"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs font-semibold text-textMuted hover:text-accentEmerald glass-panel hover:bg-accentEmerald/10 border-white/10 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </button>
            </motion.div>

            {/* Quick Links & Email Copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-xs font-mono text-textMuted"
            >
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex items-center gap-1.5 hover:text-accentEmerald transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex items-center gap-1.5 hover:text-accentEmerald transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">•</span>
              <button
                onClick={handleCopyEmail}
                data-cursor="link"
                className="hover:text-accentEmerald transition-colors flex items-center gap-1"
              >
                {copiedEmail ? (
                  <span className="text-accentEmerald flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> COPIED!
                  </span>
                ) : (
                  <span>zakkiadnan05@gmail.com</span>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Visual Developer Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive Glowing Code Frame */}
            <div className="relative glass-panel rounded-2xl border-white/10 p-5 shadow-2xl code-glow overflow-hidden">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-textMuted">
                  <Terminal className="w-3.5 h-3.5 text-accentEmerald" />
                  <span>developer_profile.js</span>
                </div>
                <Sparkles className="w-4 h-4 text-accentCyan animate-pulse" />
              </div>

              {/* Code Snippet Display */}
              <pre className="font-mono text-xs text-textMuted space-y-2 overflow-x-auto leading-relaxed p-2 bg-black/40 rounded-xl border border-white/5">
                <code>
                  <span className="text-accentPurple">const</span> <span className="text-accentCyan">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">name</span>: <span className="text-amber-300">"{personalData.name}"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">role</span>: <span className="text-amber-300">"Frontend Developer"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">education</span>: <span className="text-amber-300">"BCA Graduate (Islamiah College)"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">philosophy</span>: <span className="text-amber-300">"Learn → Build → Deploy → Improve"</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">techStack</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"JavaScript"</span>, <span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"HTML5/CSS3"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"Bootstrap"</span>, <span className="text-amber-300">"Django"</span>, <span className="text-amber-300">"MySQL"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"Git & GitHub"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">status</span>: <span className="text-emerald-400">"Open to Software Dev Opportunities"</span><br />
                  &#125;;
                </code>
              </pre>

              {/* Floating Badge Widgets */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/10">
                <div className="glass-panel p-3 rounded-xl bg-white/5 border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accentEmerald/10 text-accentEmerald">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-textMuted uppercase">Education</p>
                    <p className="text-xs font-bold text-white">BCA 2023-2026</p>
                  </div>
                </div>

                <div className="glass-panel p-3 rounded-xl bg-white/5 border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accentCyan/10 text-accentCyan">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-textMuted uppercase">Featured App</p>
                    <p className="text-xs font-bold text-white">JobFlow AI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
