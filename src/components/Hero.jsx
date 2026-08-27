import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  Sparkles, 
  Layers, 
  Compass, 
  Download,
  Terminal,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function Hero({ onOpenCaseStudy, onOpenTypeLab, onOpenResume }) {
  const [activeTab, setActiveTab] = useState('identity');

  const disciplinePills = [
    { id: 'identity', label: '01 // BRAND IDENTITY', desc: 'Holistic visual systems, design tokens, & guidelines' },
    { id: 'editorial', label: '02 // EDITORIAL PRINT', desc: 'Monographs, typography, & tactile paper craft' },
    { id: 'packaging', label: '03 // PACKAGING & 3D', desc: 'Sustainable structures, foils, & tactile unboxing' },
    { id: 'typography', label: '04 // CUSTOM TYPE', desc: 'Proprietary typefaces, variable glyphs & kinetic motion' }
  ];

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#252830] grid-bg">
      
      {/* Abstract Graphic Design Layout Lines & Geometry */}
      <div className="absolute top-1/4 right-8 w-72 h-72 rounded-full border border-white/5 pointer-events-none hidden lg:block animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-12 w-48 h-48 border border-[var(--accent-color)]/15 pointer-events-none hidden lg:block rotate-12" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Status & Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#252830]/80">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              {designerProfile.availability}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              BERLIN — 52.5200° N, 13.4050° E
            </span>
            <span>AWWWARDS / RED DOT / TDC WINNER</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="py-12 sm:py-16">
          <div className="font-mono text-xs sm:text-sm text-[var(--accent-color)] tracking-widest uppercase mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>INDEPENDENT GRAPHIC DESIGN & ART DIRECTION STUDIO</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[var(--text-primary)] uppercase">
            CRAFTING <span className="font-serif italic font-normal text-[var(--accent-color)]">Iconic</span> BRAND
            <br />
            SYSTEMS & <span className="text-outline hover:text-[var(--text-primary)] transition-colors duration-300">KINETIC</span>
            <br />
            TYPOGRAPHY.
          </h1>

          <div className="mt-8 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] font-sans leading-relaxed">
            {designerProfile.bio}
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={() => soundManager.playPop()}
              className="px-6 py-3.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-sm font-bold uppercase tracking-wider hover:opacity-90 hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 group"
            >
              <span>Explore Selected Works</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => {
                soundManager.playClick();
                const el = document.getElementById('poster-lab');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3.5 rounded-lg border border-[#252830] bg-[#16181D] hover:border-[var(--accent-color)] text-[var(--text-primary)] font-mono text-sm tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[var(--accent-color)]" />
              <span>Interactive Type Lab</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                onOpenResume();
              }}
              className="px-5 py-3.5 rounded-lg border border-[#252830] bg-[#16181D]/60 hover:bg-[#1E2128] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Press Kit / CV</span>
            </button>
          </div>
        </div>

        {/* Disciplines & Core Specializations Tabs */}
        <div className="pt-6 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {disciplinePills.map((pill) => (
              <div
                key={pill.id}
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab(pill.id);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === pill.id
                    ? 'bg-[#1E2128] border-[var(--accent-color)] text-[var(--text-primary)] shadow-lg'
                    : 'bg-[#14161C]/80 border-[#252830] text-[var(--text-muted)] hover:border-white/20 hover:text-[var(--text-secondary)]'
                }`}
              >
                <div className="font-mono text-xs font-bold text-[var(--accent-color)] mb-1">
                  {pill.label}
                </div>
                <div className="font-sans text-xs text-[var(--text-secondary)]">
                  {pill.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Kinetic Infinite Marquee Strip */}
      <div className="w-full mt-12 py-3.5 bg-[#16181D] border-y border-[#252830] overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--text-muted)]">
              <span className="text-[var(--accent-color)] font-bold">● VISUAL IDENTITY</span>
              <span>•</span>
              <span className="text-[var(--text-primary)]">TACTILE PACKAGING</span>
              <span>•</span>
              <span className="text-[var(--accent-color)] font-bold">● BESPOKE TYPOGRAPHY</span>
              <span>•</span>
              <span className="text-[var(--text-primary)]">SWISS EDITORIAL PRINT</span>
              <span>•</span>
              <span className="text-[var(--accent-color)] font-bold">● 3D & MOTION SYSTEMS</span>
              <span>•</span>
              <span className="text-[var(--text-primary)]">ART DIRECTION</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
