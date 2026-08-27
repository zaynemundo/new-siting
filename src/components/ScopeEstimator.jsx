import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { estimatorOptions } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function ScopeEstimator({ onApplyScope }) {
  const [selectedType, setSelectedType] = useState(estimatorOptions.projectTypes[0].id);
  const [selectedDeliverables, setSelectedDeliverables] = useState(['guidelines', '3d']);
  const [selectedTimeline, setSelectedTimeline] = useState('standard');

  const currentType = estimatorOptions.projectTypes.find(t => t.id === selectedType) || estimatorOptions.projectTypes[0];
  const currentTimeline = estimatorOptions.timelines.find(t => t.id === selectedTimeline) || estimatorOptions.timelines[0];

  const toggleDeliverable = (id) => {
    soundManager.playClick();
    setSelectedDeliverables(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    let basePrice = currentType.basePrice;
    let baseDays = currentType.baseDays;

    selectedDeliverables.forEach(delivId => {
      const deliv = estimatorOptions.deliverables.find(d => d.id === delivId);
      if (deliv) {
        basePrice += deliv.price;
        baseDays += deliv.days;
      }
    });

    const finalPrice = Math.round(basePrice * currentTimeline.multiplier);
    const minPrice = Math.round(finalPrice * 0.9);
    const maxPrice = Math.round(finalPrice * 1.15);

    const calculatedWeeks = Math.ceil(baseDays / 7);

    return {
      minPrice,
      maxPrice,
      estimatedWeeks: currentTimeline.id === 'rush' ? Math.max(2, Math.round(calculatedWeeks * 0.5)) : calculatedWeeks,
      totalDeliverables: 1 + selectedDeliverables.length
    };
  }, [selectedType, selectedDeliverables, selectedTimeline]);

  const handleApply = () => {
    soundManager.playSuccess();
    const scopeData = {
      projectType: currentType.label,
      deliverables: selectedDeliverables.map(id => estimatorOptions.deliverables.find(d => d.id === id)?.label).filter(Boolean),
      timeline: currentTimeline.label,
      estimatedRange: `$${calculation.minPrice.toLocaleString()} - $${calculation.maxPrice.toLocaleString()}`
    };
    if (onApplyScope) onApplyScope(scopeData);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 border-b border-[#252830] bg-[#0E0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
            Project Scope & Cost Calculator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">
            Estimate investment range and delivery timeline tailored to your specific deliverables. No hidden studio surprises.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Matrix (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#14161C] border border-[#252830] rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* Step 1: Project Core Type */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                01 // Select Core Engagement Focus
              </label>
              <div className="space-y-2.5">
                {estimatorOptions.projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedType(type.id);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedType === type.id
                        ? 'border-[var(--accent-color)] bg-[#1E2128] text-[var(--text-primary)] shadow-md'
                        : 'border-[#252830] bg-[#0D0E11] text-[var(--text-secondary)] hover:border-white/20'
                    }`}
                  >
                    <span className="font-display font-bold text-sm">{type.label}</span>
                    <span className="font-mono text-xs text-[var(--accent-color)]">
                      from ${type.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Deliverables */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                02 // Add Extended Deliverables & Production Kits
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {estimatorOptions.deliverables.map((deliv) => {
                  const isSelected = selectedDeliverables.includes(deliv.id);
                  return (
                    <button
                      key={deliv.id}
                      onClick={() => toggleDeliverable(deliv.id)}
                      className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                        isSelected
                          ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                          : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)] hover:border-white/20'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 border ${
                        isSelected ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-black' : 'border-white/20'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="font-sans text-xs font-medium leading-snug">{deliv.label}</div>
                        <div className="font-mono text-[10px] text-[var(--accent-color)] mt-0.5">+${deliv.price}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pace & Timeline */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                03 // Delivery Schedule & Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {estimatorOptions.timelines.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedTimeline(timeline.id);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedTimeline === timeline.id
                        ? 'border-[var(--accent-color)] bg-[#1E2128] text-[var(--text-primary)]'
                        : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)] hover:border-white/20'
                    }`}
                  >
                    <div className="font-display font-bold text-xs">{timeline.label}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#16181D] to-[#1E2128] border border-[var(--accent-color)]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-28">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                ESTIMATED INVESTMENT
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-mono text-[10px] font-bold">
                COMMISSION QUOTE
              </span>
            </div>

            {/* Price Range Display */}
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                ${calculation.minPrice.toLocaleString()} – ${calculation.maxPrice.toLocaleString()}
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                USD / Net Studio Fee (excluding 3rd-party print/hosting costs)
              </p>
            </div>

            {/* Estimated Duration */}
            <div className="p-4 rounded-xl bg-[#0D0E11] border border-[#252830] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--accent-color)]" />
                <div>
                  <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                    ~{calculation.estimatedWeeks} Weeks Sprint
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-muted)]">
                    Includes all revisions & handover
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-[var(--accent-color)] font-bold">
                {calculation.totalDeliverables} Deliverables
              </span>
            </div>

            {/* Included Studio Guarantees */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                Included in every contract:
              </div>
              {[
                "100% Full IP & Commercial Copyright Transfer",
                "Direct 1-on-1 Slack/Figma collaboration with Cai",
                "Production master vector files (AI, SVG, OTF, PDF/X-4)",
                "30-day post-handover bug & asset support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 font-sans text-xs text-[var(--text-secondary)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <button
              onClick={handleApply}
              className="w-full py-3.5 rounded-xl bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl active:scale-95"
            >
              <span>Apply Scope to Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
