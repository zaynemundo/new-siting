import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Download,
  BookOpen,
  Cpu
} from 'lucide-react';
import { designerProfile, awards, designTools } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function AboutSection({ onOpenResume }) {
  const [selectedToolCat, setSelectedToolCat] = useState('all');

  const toolCategories = [
    { id: 'all', label: 'All Software' },
    { id: 'Vector & Identity', label: 'Identity' },
    { id: 'Editorial & Grid Systems', label: 'Editorial' },
    { id: 'Custom Type Design', label: 'Type' },
    { id: 'Packaging & 3D Form', label: '3D' }
  ];

  const filteredTools = selectedToolCat === 'all' 
    ? designTools 
    : designTools.filter(t => t.category === selectedToolCat);

  return (
    <section id="about" className="py-24 border-b border-[#252830] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Designer Portrait & Bio */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden border border-[#252830] group shadow-2xl aspect-[4/5] bg-black">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Cai De Vera, Graphic Designer"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <div className="font-display font-black text-2xl text-white uppercase">
                    Cai De Vera
                  </div>
                  <div className="font-mono text-xs text-[var(--accent-color)] uppercase">
                    Independent Art Director & Graphic Designer
                  </div>
                </div>
                <div className="stamp-border font-mono text-[9px] uppercase tracking-widest text-[var(--accent-color)] bg-black/60 backdrop-blur-sm rotate-[-4deg]">
                  STUDIO // 2026
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {designerProfile.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14161C] border border-[#252830]">
                  <div className="font-display font-black text-3xl text-[var(--accent-color)]">
                    {stat.value}
                  </div>
                  <div className="font-display font-bold text-xs text-[var(--text-primary)] mt-1">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[11px] text-[var(--text-muted)] mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Statement & Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DESIGN PHILOSOPHY</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
                Graphic design is <span className="font-serif italic font-normal text-[var(--accent-color)]">Systematic</span> thinking made visible.
              </h2>
            </div>

            <div className="space-y-4 font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In a world overwhelmed with disposable digital noise, I build brand systems and physical artifacts engineered to endure. My practice operates at the intersection of Swiss typographic rigor, sustainable materials science, and kinetic digital experiences.
              </p>
              <p>
                Whether designing a bespoke monospace typeface for a Swiss luxury watchmaker or crafting a 380-page architectural monograph for museum archives, every project begins with unearthing the fundamental conceptual core.
              </p>
            </div>

            {/* Designer Principles / Tenets */}
            <div className="space-y-3 pt-4 border-t border-[#252830]">
              {[
                { title: "Typographic Primacy", desc: "Type is not just text; it is the voice, cadence, and architectural backbone of every brand." },
                { title: "Physicality in a Digital Age", desc: "Paper stock, blind debossing, foil finishes, and tangible weight create irreplaceable emotional connection." },
                { title: "Mathematically Disciplined Freedom", desc: "Strict modular grids unlock creative bravery without descending into chaotic visual clutter." }
              ].map((tenet, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14161C] border border-[#252830]">
                  <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                    0{idx + 1}. {tenet.title}
                  </div>
                  <div className="font-sans text-xs text-[var(--text-secondary)] mt-1">
                    {tenet.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume / Press kit CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  soundManager.playPop();
                  onOpenResume();
                }}
                className="px-6 py-3 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>View Full Curriculum Vitae & Press Kit</span>
              </button>
            </div>

          </div>

        </div>

        {/* Awards & Recognition Table */}
        <div className="pt-12 border-t border-[#252830]">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--accent-color)]" />
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[var(--text-primary)]">
                Awards & Industry Recognition
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              14 International Honors
            </span>
          </div>

          <div className="border border-[#252830] rounded-2xl overflow-hidden bg-[#14161C]">
            <div className="divide-y divide-[#252830]">
              {awards.map((award, index) => (
                <div
                  key={index}
                  onMouseEnter={() => soundManager.playHover()}
                  className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#1E2128]/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-color)] font-bold">
                      {award.year}
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                        {award.title}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        {award.org}
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[var(--text-secondary)] sm:text-right">
                    Project: <span className="text-[var(--text-primary)] font-medium">{award.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
