import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, FileCode, Server, Layout, Palette, Grid, Atom, 
  Smartphone, Boxes, Cpu, Database, GitBranch, Github, Globe, Laptop, 
  Layers, Binary, Box, DatabaseZap, Sparkles, Layers3
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Icon Map helper
const iconMap = {
  Code2: Code2,
  Terminal: Terminal,
  FileCode: FileCode,
  Server: Server,
  Layout: Layout,
  Palette: Palette,
  Grid: Grid,
  Atom: Atom,
  Smartphone: Smartphone,
  Boxes: Boxes,
  Cpu: Cpu,
  Database: Database,
  GitBranch: GitBranch,
  Github: Github,
  Globe: Globe,
  Laptop: Laptop,
  Layers: Layers,
  Binary: Binary,
  Box: Box,
  DatabaseZap: DatabaseZap
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accentEmerald/30 text-xs font-mono text-accentEmerald">
            <Layers3 className="w-3.5 h-3.5" />
            <span>TECHNOLOGY TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY TECH <span className="text-gradient-emerald">STACK</span>
          </h2>
          <p className="text-textMuted text-sm max-w-xl">
            Practical tools and technologies I build with. Transparent experience levels without arbitrary percentage metrics.
          </p>
          <div className="w-16 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              data-cursor="button"
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                activeTab === idx
                  ? 'bg-accentEmerald text-bgDark font-bold border-accentEmerald shadow-emerald-glow'
                  : 'glass-panel text-textMuted hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeTab].skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const isExploring = skill.isLearning;

            return (
              <div
                key={skill.name}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border-white/10 space-y-4 relative group"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${
                    isExploring ? 'bg-accentPurple/10 text-accentPurple' : 'bg-accentEmerald/10 text-accentEmerald'
                  } group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                    isExploring 
                      ? 'bg-accentPurple/20 text-accentPurple border border-accentPurple/30 flex items-center gap-1'
                      : 'bg-accentEmerald/10 text-accentEmerald border border-accentEmerald/20'
                  }`}>
                    {isExploring && <Sparkles className="w-3 h-3 animate-pulse" />}
                    {skill.level}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-accentEmerald transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-textMuted leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Overall Category Overview Cards */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-center text-xs font-mono uppercase tracking-widest text-textMuted mb-8">
            Complete Stack Directory
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {skillCategories.flatMap(c => c.skills).map((skill) => (
              <div 
                key={`mini-${skill.name}`} 
                className="glass-panel p-3 rounded-xl border-white/5 text-center flex flex-col items-center justify-center gap-1.5 hover:border-accentEmerald/30 transition-colors"
              >
                <span className="text-xs font-mono font-semibold text-white">{skill.name}</span>
                <span className="text-[9px] font-mono text-textMuted">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
