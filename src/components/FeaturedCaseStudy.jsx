import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Github, AlertTriangle, Lightbulb, Code2, CheckCircle2, Cpu, Server, Database, Layout, Terminal } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function FeaturedCaseStudy() {
  const jobflow = projectsData.find(p => p.id === 'jobflow');
  const [activeStep, setActiveStep] = useState('problem');

  if (!jobflow) return null;

  const steps = [
    {
      id: 'problem',
      num: '01',
      title: 'PROBLEM',
      icon: AlertTriangle,
      content: jobflow.problem,
      details: [
        'Scattered job applications across multiple portals.',
        'Difficulty keeping track of application dates and follow-up deadlines.',
        'Lack of insights on application progress and resume optimization.'
      ]
    },
    {
      id: 'approach',
      num: '02',
      title: 'APPROACH',
      icon: Lightbulb,
      content: jobflow.solution,
      details: [
        'Designed a clean, single-page application dashboard using React components.',
        'Structured a clear application state pipeline (Applied → Interviewing → Offer).',
        'Planned AI query helpers for application summary generation.'
      ]
    },
    {
      id: 'development',
      num: '03',
      title: 'DEVELOPMENT',
      icon: Code2,
      content: jobflow.myContribution,
      details: [
        'Frontend UI built with React.js & modular component state.',
        'RESTful API architecture built on Node.js & Express server.',
        'Database persistence for job application records & status tracking.'
      ]
    },
    {
      id: 'result',
      num: '04',
      title: 'RESULT',
      icon: CheckCircle2,
      content: 'A complete end-to-end application tracking workflow demonstrating growth from static web pages into application development.',
      details: [
        'Streamlined multi-application organization.',
        'Faster status updates and intuitive candidate dashboard.',
        'Validated integration between React frontend and Express backend.'
      ]
    }
  ];

  return (
    <section id="jobflow-case-study" className="py-24 relative overflow-hidden bg-bgElevated/40 border-y border-white/10">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accentEmerald/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accentPurple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-accentEmerald/40 bg-accentEmerald/10 text-xs font-mono font-bold text-accentEmerald">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>FEATURED CASE STUDY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            JOBFLOW <span className="text-gradient-cyan">AI PLATFORM</span>
          </h2>
          <p className="text-textMuted text-base max-w-2xl">
            Detailed case study showcasing my progression from static frontend interfaces into full application development, REST APIs, database integration, and AI features.
          </p>
          <div className="w-20 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        {/* Case Study Card Container */}
        <div className="glass-panel rounded-3xl border-white/10 p-6 sm:p-10 shadow-2xl space-y-12">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono text-accentCyan uppercase tracking-widest">Featured Project</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Job Application Management Platform</h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={jobflow.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-textMuted hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE</span>
              </a>

              <a
                href={jobflow.liveDemo}
                target="_blank"
                rel="noreferrer"
                data-cursor="button"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 transition-all shadow-emerald-glow"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Steps Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  data-cursor="button"
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    isActive
                      ? 'bg-accentEmerald/15 border-accentEmerald text-white shadow-emerald-glow'
                      : 'glass-panel text-textMuted hover:text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-accentEmerald">{step.num}</span>
                    <StepIcon className={`w-4 h-4 ${isActive ? 'text-accentEmerald' : 'text-textMuted'}`} />
                  </div>
                  <p className="font-mono text-xs font-bold tracking-wider">{step.title}</p>
                </button>
              );
            })}
          </div>

          {/* Step Active Detail View */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/5">
            <div className="lg:col-span-7 space-y-4">
              {steps.map((step) => {
                if (step.id !== activeStep) return null;
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accentEmerald/10 text-accentEmerald font-mono text-xs font-bold">
                      <StepIcon className="w-4 h-4" />
                      <span>SECTION {step.num} — {step.title}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {step.content}
                    </h4>

                    <ul className="space-y-2.5 pt-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-textMuted">
                          <CheckCircle2 className="w-4 h-4 text-accentEmerald shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* Architecture Preview Box */}
            <div className="lg:col-span-5 glass-panel p-5 rounded-xl border-white/10 bg-bgElevated space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-accentCyan font-bold flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> Stack Architecture
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Active</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white flex items-center gap-2">
                    <Layout className="w-4 h-4 text-cyan-400" /> React Frontend
                  </span>
                  <span className="text-[10px] text-textMuted">UI & State</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-400" /> Node + Express API
                  </span>
                  <span className="text-[10px] text-textMuted">REST Endpoints</span>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-purple-400" /> Database & AI
                  </span>
                  <span className="text-[10px] text-textMuted">Records & AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills Footer */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h4 className="font-mono text-xs uppercase tracking-widest text-textMuted">
              05 — TECHNOLOGIES INTEGRATED
            </h4>

            <div className="flex flex-wrap gap-2">
              {jobflow.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-accentEmerald/10 text-accentEmerald border border-accentEmerald/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
