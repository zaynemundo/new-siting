import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Check, 
  Copy, 
  Sparkles, 
  Layers, 
  Maximize2, 
  Type,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { projects } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function CaseStudyModal({ project, onClose, onSelectProject }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [customSpecimen, setCustomSpecimen] = useState("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 0123456789");
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigateProject(1);
      if (e.key === 'ArrowLeft') navigateProject(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const navigateProject = (direction) => {
    soundManager.playClick();
    if (direction === 1) onSelectProject(nextProject);
    else onSelectProject(prevProject);
    setActiveTab('overview');
    setActiveGalleryIndex(0);
  };

  const copyColor = (hex) => {
    soundManager.playClick();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl my-auto bg-[#0D0E11] border border-[#252830] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#14161C]/95 backdrop-blur-md border-b border-[#252830]">
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--accent-color)] font-bold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline font-mono text-xs text-[var(--text-muted)]">
              {project.client} ({project.year})
            </span>
          </div>

          {/* Navigation & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateProject(-1)}
              className="p-2 rounded-lg border border-[#252830] bg-[#16181D] hover:bg-[#1E2128] text-[var(--text-primary)] transition-all text-xs font-mono flex items-center gap-1"
              title="Previous Case Study (←)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev</span>
            </button>

            <button
              onClick={() => navigateProject(1)}
              className="p-2 rounded-lg border border-[#252830] bg-[#16181D] hover:bg-[#1E2128] text-[var(--text-primary)] transition-all text-xs font-mono flex items-center gap-1"
              title="Next Case Study (→)"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              className="p-2 rounded-lg bg-[#252830] hover:bg-rose-500 hover:text-white text-[var(--text-primary)] transition-all ml-2"
              title="Close Modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Project Title & Hero Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/20 font-mono text-xs font-bold">
                {project.role}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[var(--text-muted)]">
                Year: {project.year}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[var(--text-muted)]">
                Client: {project.client}
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[var(--text-primary)] uppercase tracking-tight leading-[1.05]">
              {project.title}
            </h2>

            <p className="mt-4 text-base sm:text-xl text-[var(--text-secondary)] font-sans leading-relaxed max-w-4xl">
              {project.summary}
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#252830] pb-3">
            {[
              { id: 'overview', label: '01 // Case Study & Challenge' },
              { id: 'beforeAfter', label: '02 // Before & After Comparison' },
              { id: 'designSystem', label: '03 // Design System & Type Specimen' },
              { id: 'gallery', label: '04 // Mockups & Production Gallery' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab(tab.id);
                }}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] font-bold shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview, Problem & Solution */}
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-fadeIn">
              
              {/* Main Banner Image */}
              <div className="rounded-2xl overflow-hidden border border-[#252830] shadow-2xl relative aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="p-6 rounded-2xl bg-[#14161C] border border-[#252830]">
                  <div className="font-mono text-xs text-rose-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    The Strategic Challenge
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                    Overcoming Convention & Noise
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#14161C] border border-[#252830]">
                  <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    The Creative Solution
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                    Systematic Visual Execution
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

              </div>

              {/* Impact Metrics Row */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14161C] to-[#1E2128] border border-[#252830]">
                <div className="font-mono text-xs text-[var(--accent-color)] uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Verified Project Impact & Industry Recognition
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-[var(--accent-color)] pl-4">
                      <div className="font-display font-black text-2xl sm:text-3xl text-[var(--text-primary)]">
                        {item.value}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)] mt-1 uppercase">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Matrix */}
              <div>
                <h4 className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">
                  Scope of Deliverables & Production Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#16181D] border border-[#252830] flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                      <Check className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Before & After Comparison */}
          {activeTab === 'beforeAfter' && (
            <div className="space-y-6">
              <div className="max-w-2xl">
                <h3 className="font-display font-bold text-2xl uppercase text-[var(--text-primary)]">
                  {project.beforeAfter.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Drag the central interactive slider to compare the legacy identity against the engineered new brand system.
                </p>
              </div>

              <BeforeAfterSlider
                beforeImage={project.beforeAfter.beforeImage}
                afterImage={project.beforeAfter.afterImage}
                beforeLabel={project.beforeAfter.beforeLabel}
                afterLabel={project.beforeAfter.afterLabel}
              />
            </div>
          )}

          {/* Tab 3: Design System & Type Specimen */}
          {activeTab === 'designSystem' && (
            <div className="space-y-8">
              
              {/* Color Palette Swatches */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                    Color Architecture & Hex Tokens (Click to copy)
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => copyColor(color.hex)}
                      className="p-4 rounded-xl bg-[#14161C] border border-[#252830] text-left hover:border-white/30 transition-all group"
                    >
                      <div
                        className="w-full h-20 rounded-lg mb-3 border border-white/10 shadow-inner flex items-end justify-end p-2"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedHex === color.hex ? "COPIED!" : "COPY"}
                        </span>
                      </div>
                      <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                        {color.name}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        {color.hex}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Type Specimen Sandbox */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-[#252830] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#252830] pb-4">
                  <div>
                    <span className="font-mono text-xs text-[var(--accent-color)] font-bold uppercase">
                      TYPOGRAPHY HIERARCHY
                    </span>
                    <h4 className="font-display font-bold text-lg text-[var(--text-primary)]">
                      {project.typography.headlineFont} + {project.typography.bodyFont}
                    </h4>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    Live Editable Specimen
                  </div>
                </div>

                {/* Input for custom specimen testing */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                    Test Custom Text in Project Type System:
                  </label>
                  <input
                    type="text"
                    value={customSpecimen}
                    onChange={(e) => setCustomSpecimen(e.target.value)}
                    className="w-full bg-[#0D0E11] border border-[#252830] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] font-mono"
                  />
                </div>

                {/* Headline Specimen */}
                <div className="p-6 rounded-xl bg-[#0D0E11] border border-[#252830]/80 space-y-2">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                    Headline Specimen // 48pt
                  </span>
                  <div className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)] uppercase tracking-tight">
                    {customSpecimen}
                  </div>
                </div>

                {/* Body Specimen */}
                <div className="p-6 rounded-xl bg-[#0D0E11] border border-[#252830]/80 space-y-2">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                    Body Specimen // 16pt
                  </span>
                  <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                    Graphic design is the architecture of communication. In this visual system, every typographic weight has been calibrated to preserve clarity across 300dpi physical print monographs as well as responsive high-density OLED screens.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Tab 4: Production Mockups Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              
              {/* Featured Selected Image */}
              <div className="rounded-2xl overflow-hidden border border-[#252830] aspect-[16/10] bg-black">
                <img
                  src={project.gallery[activeGalleryIndex]}
                  alt={`${project.title} view ${activeGalleryIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.gallery.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveGalleryIndex(index);
                    }}
                    className={`rounded-xl overflow-hidden border aspect-[16/10] transition-all ${
                      activeGalleryIndex === index
                        ? 'border-[var(--accent-color)] ring-2 ring-[var(--accent-color)]/30 scale-105'
                        : 'border-[#252830] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Footer Next Case Study Trigger */}
          <div className="pt-8 border-t border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
                Up Next
              </span>
              <div className="font-display font-bold text-lg text-[var(--text-primary)]">
                {nextProject.title}
              </div>
            </div>

            <button
              onClick={() => navigateProject(1)}
              className="px-5 py-2.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-all active:scale-95"
            >
              <span>View Next Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
