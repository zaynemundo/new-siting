import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Award, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { designerProfile, awards, designTools } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  const experience = [
    {
      role: "Founder & Creative Director",
      studio: "Cai De Vera Studio // Berlin & London",
      period: "2021 — Present",
      bullets: [
        "Directing end-to-end visual identity systems, bespoke variable typefaces, and structural packaging for luxury, tech, and cultural clients.",
        "Recipient of Red Dot Best of the Best 2025 and Tokyo Type Directors Club Annual recognition.",
        "Leading client engagements across Europe, North America, and Japan."
      ]
    },
    {
      role: "Senior Graphic Designer & Art Director",
      studio: "Pentagram Design Syndicate // London",
      period: "2019 — 2021",
      bullets: [
        "Spearheaded major brand architecture overhauls and editorial publishing programs for international cultural institutions.",
        "Designed award-winning exhibition catalogues for Tate Modern and Hayward Gallery."
      ]
    },
    {
      role: "Brand Identity Designer",
      studio: "Kolle Rebbe / Accenture Song // Hamburg",
      period: "2017 — 2019",
      bullets: [
        "Crafted brand identities, physical retail packaging, and campaign art direction for sustainable lifestyle and consumer products."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#111111] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#D6D0C4]">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#EBE7DF] border-b border-[#D6D0C4] print:hidden">
          <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>CURRICULUM VITAE & PRESS KIT // CAI DE VERA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#111111] text-[#FAF8F5] text-xs font-mono font-bold flex items-center gap-1.5 hover:opacity-90 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-[#D6D0C4] hover:bg-rose-500 hover:text-white transition-all text-[#111111]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 font-sans">
          
          {/* Header Info */}
          <div className="border-b-2 border-[#111111] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#111111]">
                Cai De Vera
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4800] font-bold mt-1">
                Senior Graphic Designer & Art Director
              </p>
            </div>

            <div className="font-mono text-xs space-y-1 text-[#525866]">
              <div>cai@caidevera.studio</div>
              <div>Berlin, Germany // London, UK</div>
              <div>www.caidevera.studio</div>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#525866] mb-2">
              // PROFILE STATEMENT
            </h2>
            <p className="text-sm sm:text-base text-[#222222] leading-relaxed">
              Award-winning independent graphic designer and art director with 8+ years of experience engineering comprehensive brand identity systems, custom variable typefaces, tactile luxury packaging, and architectural monographs. Rooted in Swiss modernist typography with modern kinetic craft.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#525866]">
              // PROFESSIONAL EXPERIENCE
            </h2>

            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-[#111111] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#111111]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[#FF4800] font-bold">
                    {exp.period}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#525866]">
                  {exp.studio}
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-[#333333] space-y-1 pt-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Honours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#D6D0C4]">
            
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#525866] mb-3">
                // EDUCATION
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="font-display font-bold text-[#111111]">
                    BA (Hons) Visual Communication & Typography
                  </div>
                  <div className="font-mono text-xs text-[#525866]">
                    Bauhaus-Universität Weimar // 2013 — 2017
                  </div>
                </div>
                <div>
                  <div className="font-display font-bold text-[#111111]">
                    Advanced Typeface Design Certificate
                  </div>
                  <div className="font-mono text-xs text-[#525866]">
                    Type@Cooper Condensed // New York
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#525866] mb-3">
                // SELECT AWARDS
              </h2>
              <div className="space-y-2 text-xs">
                {awards.slice(0, 4).map((award, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-bold text-[#111111]">{award.title}</span>
                    <span className="font-mono text-[#525866]">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Software & Tool Proficiency */}
          <div className="pt-4 border-t border-[#D6D0C4]">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#525866] mb-3">
              // CORE TOOLKIT & TECHNICAL COMPETENCY
            </h2>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#EBE7DF] rounded-md font-mono text-xs text-[#111111] border border-[#D6D0C4]"
                >
                  {tool.name} ({tool.category})
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
