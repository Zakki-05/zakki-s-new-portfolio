import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Code, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const repoHighlights = [
  {
    name: 'jobflow',
    desc: 'AI-Powered job application management & tracking platform built with React & Express.',
    tech: 'React / Node / Express',
    stars: 5,
    forks: 2,
    url: 'https://github.com/Zakki-05/jobflow'
  },
  {
    name: 'ownProject',
    desc: 'Tech Zone E-Commerce website featuring smartphones, smartwatches, and pagination.',
    tech: 'JavaScript / HTML5 / CSS3',
    stars: 3,
    forks: 1,
    url: 'https://github.com/Zakki-05/ownProject'
  },
  {
    name: 'Digital-Marketing',
    desc: 'Digital agency showcase website with Bootstrap components and interactive UI.',
    tech: 'Bootstrap / JavaScript',
    stars: 4,
    forks: 1,
    url: 'https://github.com/Zakki-05/Digital-Marketing'
  }
];

export default function GithubSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Github className="w-64 h-64 text-white" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accentEmerald">
                <Github className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & BUILDING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                DOCUMENTING MY WORK ON <span className="text-gradient-emerald">GITHUB</span>
              </h2>

              <p className="text-textMuted text-base leading-relaxed">
                I use GitHub to document my projects, experiment with technologies, track version history, and continuously improve my software development skills.
              </p>

              <div className="pt-2">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="button"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-emerald-glow"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW MY GITHUB (@Zakki-05)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Curated Repo Cards */}
            <div className="lg:col-span-6 space-y-3">
              {repoHighlights.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="block glass-panel glass-panel-hover p-4 rounded-xl border-white/5 space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white group-hover:text-accentEmerald transition-colors flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-accentCyan" />
                      Zakki-05/{repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-textMuted group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs text-textMuted leading-relaxed">
                    {repo.desc}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-textMuted pt-1">
                    <span className="text-accentEmerald">{repo.tech}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitBranch className="w-3 h-3 text-cyan-400" /> {repo.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
