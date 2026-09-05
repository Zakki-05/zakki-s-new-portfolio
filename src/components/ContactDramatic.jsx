import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Copy } from 'lucide-react';
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
      errs.email = 'Invalid email syntax';
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
    <section id="contact" className="py-28 sm:py-36 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10 editorial-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Large Centered Headline */}
        <div className="text-center space-y-6 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-mutedText font-bold block">
            HAVE AN OPPORTUNITY OR PROJECT?
          </span>

          <h2 className="font-headline text-6xl sm:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tight text-primaryText">
            LET'S <span className="text-goldAccent">WORK</span> TOGETHER.
          </h2>

          <div className="flex justify-center pt-6">
            <a
              href={`mailto:${personalData.email}`}
              data-cursor="cta"
              className="group relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-goldAccent/40 flex items-center justify-center hover:bg-goldAccent hover:text-primaryBlack transition-all duration-500 shadow-2xl"
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
              <ArrowUpRight className="w-8 h-8 text-goldAccent group-hover:text-primaryBlack group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        {/* 2-Column Contact Info & Message Form */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Links */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
              <span className="text-mutedText uppercase">EMAIL</span>
              <div className="flex items-center gap-2">
                <a href={`mailto:${personalData.email}`} className="font-bold text-primaryText hover:text-goldAccent transition-colors">
                  {personalData.email}
                </a>
                <button onClick={() => handleCopy(personalData.email, 'email')} className="text-mutedText hover:text-goldAccent">
                  {copiedText === 'email' ? <CheckCircle2 className="w-4 h-4 text-goldAccent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
              <span className="text-mutedText uppercase">GITHUB</span>
              <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="font-bold text-primaryText hover:text-goldAccent transition-colors">
                github.com/Zakki-05
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
              <span className="text-mutedText uppercase">LINKEDIN</span>
              <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="font-bold text-primaryText hover:text-goldAccent transition-colors">
                linkedin.com/in/mohammed-zakki-adnan-p/
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
              <span className="text-mutedText uppercase">PHONE</span>
              <div className="flex items-center gap-2">
                <a href={`tel:${personalData.phone}`} className="font-bold text-primaryText hover:text-goldAccent transition-colors">
                  {personalData.phone}
                </a>
                <button onClick={() => handleCopy(personalData.phone, 'phone')} className="text-mutedText hover:text-goldAccent">
                  {copiedText === 'phone' ? <CheckCircle2 className="w-4 h-4 text-goldAccent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-black border border-white/10 p-8 sm:p-12 space-y-6">
            <h3 className="font-headline text-3xl sm:text-4xl font-extrabold text-primaryText uppercase tracking-wide">
              START A CONVERSATION
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-name" className="text-mutedText uppercase tracking-wider block">
                  YOUR NAME <span className="text-goldAccent">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Zakki, I'd like to talk about a project..."
                  className={`w-full p-4 rounded-2xl bg-primaryBlack border ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-goldAccent'
                  } text-primaryText placeholder-mutedText/40 text-sm focus:outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-[11px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-goldAccent/10 border border-goldAccent/40 text-goldAccent text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
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
