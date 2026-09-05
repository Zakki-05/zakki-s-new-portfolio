import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function FooterEditorial() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primaryBlack text-primaryText border-t border-white/10 py-12 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="font-bold tracking-widest uppercase text-primaryText">
          ©2026 ZAKKI
        </p>

        {/* Center */}
        <p className="text-mutedText uppercase text-center font-bold tracking-wider">
          MOHAMMED ZAKKI ADNAAN P
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-primaryText font-bold">
          <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="hover:text-goldAccent transition-colors">
            GITHUB
          </a>
          <span className="text-mutedText">•</span>
          <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-goldAccent transition-colors">
            LINKEDIN
          </a>
          <span className="text-mutedText">•</span>
          <a href={`mailto:${personalData.email}`} className="hover:text-goldAccent transition-colors">
            EMAIL
          </a>

          <button
            onClick={scrollToTop}
            data-cursor="button"
            className="ml-4 p-2 rounded-full border border-white/10 hover:border-goldAccent hover:text-goldAccent transition-all"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
