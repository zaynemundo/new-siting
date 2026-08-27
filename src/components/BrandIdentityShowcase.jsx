import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Check, 
  Copy, 
  Eye, 
  Grid, 
  Maximize2, 
  ShieldCheck,
  RefreshCw,
  Box
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function BrandIdentityShowcase() {
  const [activeMark, setActiveMark] = useState('geometric');
  const [gridOverlay, setGridOverlay] = useState(true);
  const [scale, setScale] = useState(1);
  const [copiedToken, setCopiedToken] = useState(null);

  const marks = [
    {
      id: 'geometric',
      name: 'Dynamic Hex Monogram',
      concept: 'Golden ratio proportions with 60° architectural bevel cuts',
      svg: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <polygon points="60,10 110,38 110,92 60,118 10,92 10,38" fill="none" stroke="currentColor" strokeWidth="6" />
          <polygon points="60,32 90,48 90,82 60,98 30,82 30,48" fill="var(--accent-color)" />
          <circle cx="60" cy="65" r="14" fill="#0D0E11" />
        </svg>
      )
    },
    {
      id: 'kinetic',
      name: 'Kinetic AR Vortex',
      concept: 'Dual interlocking ribbons symbolizing physical and digital synthesis',
      svg: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <path d="M 20 60 C 20 30, 60 20, 60 60 C 60 100, 100 90, 100 60" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M 100 60 C 100 30, 60 20, 60 60 C 60 100, 20 90, 20 60" fill="none" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        </svg>
      )
    },
    {
      id: 'minimalist',
      name: 'Swiss Grid Stamp',
      concept: 'Strict 4-column modernist modular typographic emblem',
      svg: (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <rect x="15" y="15" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="4" />
          <rect x="25" y="25" width="30" height="30" fill="var(--accent-color)" />
          <rect x="65" y="25" width="30" height="30" fill="currentColor" opacity="0.4" />
          <rect x="25" y="65" width="70" height="30" fill="currentColor" />
        </svg>
      )
    }
  ];

  const currentMark = marks.find(m => m.id === activeMark) || marks[0];

  const copyToken = (text) => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section className="py-24 border-b border-[#252830] bg-[#0B0C0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
              <Box className="w-3.5 h-3.5" />
              <span>SYSTEMATIC CRAFT</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
              Brand Architecture & Grid Logic
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
              Every identity mark is mathematically engineered for optical balance, scalability, and cross-medium reproduction.
            </p>
          </div>

          {/* Grid Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                setGridOverlay(!gridOverlay);
              }}
              className={`px-4 py-2 rounded-lg border text-xs font-mono flex items-center gap-2 transition-all ${
                gridOverlay
                  ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                  : 'border-[#252830] bg-[#14161C] text-[var(--text-muted)]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Construction Grid: {gridOverlay ? "ACTIVE" : "OFF"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Construction Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Vector Preview Box */}
          <div className="lg:col-span-7 bg-[#14161C] border border-[#252830] rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden min-h-[420px]">
            
            {/* Background Optical Grid Lines */}
            {gridOverlay && (
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="arch-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#arch-grid)" />
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="var(--accent-color)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50%" cy="50%" r="80" fill="none" stroke="var(--accent-color)" strokeWidth="0.8" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--accent-color)" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--accent-color)" strokeWidth="0.8" strokeDasharray="2 2" />
                </svg>
              </div>
            )}

            {/* Top Spec Badges */}
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] z-10">
              <span className="text-[var(--accent-color)] font-bold">// VECTOR ANATOMY</span>
              <span>BEZIER PRECISION: 0.001 PT</span>
            </div>

            {/* Center Vector Logo */}
            <div className="my-auto flex justify-center items-center py-10 z-10">
              <div 
                className="w-48 h-48 sm:w-56 sm:h-56 text-[var(--text-primary)] transition-transform duration-300"
                style={{ transform: `scale(${scale})` }}
              >
                {currentMark.svg}
              </div>
            </div>

            {/* Bottom Scale Slider & Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#252830] z-10">
              <div className="font-mono text-xs text-[var(--text-secondary)]">
                {currentMark.concept}
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="font-mono text-xs text-[var(--text-muted)]">Scale:</span>
                <input
                  type="range"
                  min="0.6"
                  max="1.3"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-28 accent-[var(--accent-color)] cursor-pointer"
                />
                <span className="font-mono text-xs text-[var(--accent-color)] w-8">
                  {Math.round(scale * 100)}%
                </span>
              </div>
            </div>

          </div>

          {/* Mark Selector & Design Token Kit (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Mark Selector Cards */}
            <div className="bg-[#14161C] border border-[#252830] rounded-2xl p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Select Identity Mark Architecture
              </h3>
              <div className="space-y-3">
                {marks.map((mark) => (
                  <button
                    key={mark.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveMark(mark.id);
                    }}
                    className={`w-full p-4 rounded-xl border text-left flex items-center gap-4 transition-all ${
                      activeMark === mark.id
                        ? 'border-[var(--accent-color)] bg-[#1E2128] shadow-lg'
                        : 'border-[#252830] bg-[#0D0E11] hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 text-[var(--accent-color)] flex-shrink-0">
                      {mark.svg}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                        {mark.name}
                      </div>
                      <div className="font-sans text-xs text-[var(--text-secondary)]">
                        {mark.concept}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessibility & Production Tokens */}
            <div className="bg-[#14161C] border border-[#252830] rounded-2xl p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Production Grade Standards</span>
                </div>
                <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                  Scalable Token Architecture
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Ready for SVG web embeds, iOS icon assets, Pantone spot color print, and CNC engraving.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {[
                  { label: "Contrast Ratio", value: "18.4:1 (WCAG AAA)" },
                  { label: "Pantone Color", value: "PMS 802 C (Neon)" },
                  { label: "Raster Export", value: "300 DPI CMYK PDF/X-4" },
                  { label: "Vector Formats", value: "SVG 2.0 / AI / EPS" }
                ].map((token, idx) => (
                  <div
                    key={idx}
                    onClick={() => copyToken(token.value)}
                    className="p-3 rounded-lg bg-[#0D0E11] border border-[#252830] cursor-pointer hover:border-[var(--accent-color)] transition-all group"
                  >
                    <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                      {token.label}
                    </div>
                    <div className="font-mono text-xs font-bold text-[var(--text-primary)] mt-0.5 group-hover:text-[var(--accent-color)] flex items-center justify-between">
                      <span className="truncate">{token.value}</span>
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
