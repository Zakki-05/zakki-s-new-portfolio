import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Globe, Copy } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const validateForm = () => {
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
    if (!validateForm()) return;

    setStatus('loading');

    // Simulated email processing (ready for EmailJS/Formspree API integration)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accentEmerald/30 text-xs font-mono text-accentEmerald">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            LET'S BUILD <span className="text-gradient-emerald">SOMETHING</span>
          </h2>
          <p className="text-textMuted text-sm max-w-xl">
            Have a project, opportunity or just want to connect? Feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-accentEmerald rounded-full mt-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-8 border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl glass-panel-hover bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accentEmerald/10 text-accentEmerald">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-textMuted uppercase block">Email</span>
                      <a href={`mailto:${personalData.email}`} className="text-sm font-semibold text-white hover:text-accentEmerald transition-colors">
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalData.email, 'email')}
                    data-cursor="link"
                    className="p-2 rounded-lg text-textMuted hover:text-accentEmerald hover:bg-white/5 transition-all"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <CheckCircle2 className="w-4 h-4 text-accentEmerald" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl glass-panel-hover bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accentCyan/10 text-accentCyan">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-textMuted uppercase block">Phone</span>
                      <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-white hover:text-accentCyan transition-colors">
                        {personalData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalData.phone, 'phone')}
                    data-cursor="link"
                    className="p-2 rounded-lg text-textMuted hover:text-accentCyan hover:bg-white/5 transition-all"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <CheckCircle2 className="w-4 h-4 text-accentCyan" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accentPurple/10 text-accentPurple">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-textMuted uppercase block">Location</span>
                    <p className="text-sm font-semibold text-white">{personalData.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-textMuted block">Connect Elsewhere</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white border-white/10 flex items-center gap-2 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalData.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white border-white/10 flex items-center gap-2 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalData.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white border-white/10 flex items-center gap-2 text-xs font-mono"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-8 border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Send a Direct Message
              </h3>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-textMuted">
                  Your Name <span className="text-accentEmerald">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-accentEmerald'
                  } text-white placeholder-textMuted/50 text-sm focus:outline-none transition-all`}
                />
                {errors.name && <p className="text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-textMuted">
                  Your Email Address <span className="text-accentEmerald">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-accentEmerald'
                  } text-white placeholder-textMuted/50 text-sm focus:outline-none transition-all`}
                />
                {errors.email && <p className="text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-textMuted">
                  Your Message <span className="text-accentEmerald">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Zakki, I'd like to discuss a Python Full Stack / React.js opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-accentEmerald'
                  } text-white placeholder-textMuted/50 text-sm focus:outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              {/* Submit Feedback Banners */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been received. I'll get back to you shortly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                data-cursor="button"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-mono text-sm font-bold text-bgDark bg-accentEmerald hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-emerald-glow"
              >
                {status === 'loading' ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
