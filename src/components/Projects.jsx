import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, ShoppingBag, GraduationCap, Megaphone, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const projectCategoryIcons = {
  'tech-zone': ShoppingBag,
  'al-huda': GraduationCap,
  'digital-agency': Megaphone,
  'jobflow': Sparkles
};

export default function Projects({ onSelectProject }) {
  // Filter standard projects (JobFlow gets its dedicated Featured Case Study section)
  const regularProjects = projectsData.filter(p => p.id !== 'jobflow');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accentEmerald/30 text-xs font-mono text-accentEmerald">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SELECTED <span className="text-gradient-emerald">PROJECTS</span>
          </h2>
          <p className="text-textMuted text-sm max-w-xl">
            Real web applications built hands-on to solve practical design, organization, and interface problems.
          </p>
          <div className="w-16 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => {
            const CategoryIcon = projectCategoryIcons[project.id] || Layers;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                data-cursor="project"
                className="glass-panel glass-panel-hover rounded-2xl border-white/10 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header Banner */}
                  <div className="relative h-48 bg-gradient-to-br from-bgElevated to-bgDark border-b border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accentEmerald/5 rounded-full blur-xl group-hover:bg-accentEmerald/15 transition-all" />

                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-accentEmerald/10 text-accentEmerald border border-accentEmerald/30">
                        {project.badge}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-accentCyan">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="z-10">
                      <p className="text-[11px] font-mono text-accentCyan uppercase tracking-widest">
                        {project.category}
                      </p>
                      <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-accentEmerald transition-colors mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-textMuted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    {project.features && (
                      <div className="space-y-2 pt-2">
                        <p className="text-[11px] font-mono text-white/50 uppercase tracking-wider">Key Features:</p>
                        <ul className="space-y-1.5">
                          {project.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-xs text-textMuted">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accentEmerald shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Tech & Links */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono text-textMuted bg-white/5 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links CTA */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-mono font-medium text-textMuted hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>SOURCE CODE</span>
                    </a>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="button"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-emerald-glow"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
