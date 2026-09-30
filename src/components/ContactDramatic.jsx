import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Copy, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ContactDramatic() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Large Headline & Description */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-primaryText">
            LET'S <span className="text-goldAccent">BUILD SOMETHING</span>
          </h2>

          <p className="text-mutedText font-sans text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            I'm currently open to full-time opportunities in frontend and Python full-stack development.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href={`mailto:${personalData.email}`}
              data-cursor="cta"
              aria-label="Send email to Mohammed Zakki Adnaan"
              className="group relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-goldAccent/40 flex items-center justify-center hover:bg-goldAccent hover:text-primaryBlack transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
                <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                  <path
                    id="contactCirclePathExact"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[8px] font-mono tracking-widest uppercase fill-current">
                    <textPath href="#contactCirclePathExact" startOffset="0%">
                      LET'S TALK • LET'S TALK • LET'S TALK •
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowUpRight className="w-7 h-7 text-goldAccent group-hover:text-primaryBlack group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Links */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            
            {/* EMAIL */}
            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between hover:border-goldAccent/40 transition-colors">
              <span className="text-mutedText uppercase flex items-center gap-2">
                <Mail className="w-4 h-4 text-goldAccent" /> EMAIL
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href={`mailto:${personalData.email}`} 
                  className="font-bold text-primaryText hover:text-goldAccent transition-colors text-xs sm:text-sm"
                >
                  {personalData.email}
                </a>
                <button 
                  onClick={() => handleCopy(personalData.email, 'email')} 
                  className="text-mutedText hover:text-goldAccent p-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedText === 'email' ? <CheckCircle2 className="w-4 h-4 text-goldAccent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* PHONE */}
            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between hover:border-goldAccent/40 transition-colors">
              <span className="text-mutedText uppercase flex items-center gap-2">
                <Phone className="w-4 h-4 text-goldAccent" /> PHONE
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href={`tel:${personalData.phone}`} 
                  className="font-bold text-primaryText hover:text-goldAccent transition-colors text-xs sm:text-sm"
                >
                  {personalData.phone}
                </a>
                <button 
                  onClick={() => handleCopy(personalData.phone, 'phone')} 
                  className="text-mutedText hover:text-goldAccent p-1"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedText === 'phone' ? <CheckCircle2 className="w-4 h-4 text-goldAccent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between hover:border-goldAccent/40 transition-colors">
              <span className="text-mutedText uppercase flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-goldAccent" /> LINKEDIN
              </span>
              <a 
                href={personalData.linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="font-bold text-primaryText hover:text-goldAccent transition-colors flex items-center gap-1 text-xs sm:text-sm"
              >
                <span>linkedin.com/in/mohammed-zakki-adnan-p</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-goldAccent" />
              </a>
            </div>

            {/* GITHUB */}
            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between hover:border-goldAccent/40 transition-colors">
              <span className="text-mutedText uppercase flex items-center gap-2">
                <Github className="w-4 h-4 text-goldAccent" /> GITHUB
              </span>
              <a 
                href={personalData.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="font-bold text-primaryText hover:text-goldAccent transition-colors flex items-center gap-1 text-xs sm:text-sm"
              >
                <span>github.com/Zakki-05</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-goldAccent" />
              </a>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-black border border-white/10 p-8 sm:p-10 space-y-6 shadow-2xl">
            <h3 className="font-headline text-3xl sm:text-4xl font-extrabold text-primaryText uppercase tracking-wide">
              SEND A DIRECT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-name" className="text-mutedText uppercase tracking-wider block">
                  YOUR NAME <span className="text-goldAccent">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Recruiter / Hiring Manager"
                  className={`w-full p-4 rounded-2xl bg-primaryBlack border ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-goldAccent'
                  } text-primaryText placeholder-mutedText/40 text-sm focus:outline-none transition-all`}
                />
                {errors.name && <p className="text-red-400 text-[11px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-email" className="text-mutedText uppercase tracking-wider block">
                  YOUR EMAIL <span className="text-goldAccent">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="recruiter@company.com"
                  className={`w-full p-4 rounded-2xl bg-primaryBlack border ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-goldAccent'
                  } text-primaryText placeholder-mutedText/40 text-sm focus:outline-none transition-all`}
                />
                {errors.email && <p className="text-red-400 text-[11px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-message" className="text-mutedText uppercase tracking-wider block">
                  MESSAGE <span className="text-goldAccent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Mohammed, we'd like to discuss a developer opportunity..."
                  className={`w-full p-4 rounded-2xl bg-primaryBlack border ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-goldAccent'
                  } text-primaryText placeholder-mutedText/40 text-sm focus:outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-[11px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-goldAccent/10 border border-goldAccent/40 text-goldAccent text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message inquiry has been recorded.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                data-cursor="button"
                className="w-full py-4 px-6 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest text-primaryBlack bg-goldAccent hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {status === 'loading' ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
