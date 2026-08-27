import React, { useState } from 'react';
import { 
  Layers, 
  BookOpen, 
  Package, 
  Type, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { services, processSteps } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

const iconMap = {
  Layers: Layers,
  BookOpen: BookOpen,
  Package: Package,
  Type: Type,
  Sparkles: Sparkles
};

export default function ServicesProcess({ onOpenEstimator }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="services" className="py-24 border-b border-[#252830] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>CAPABILITIES & METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
              Services & Studio Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
              End-to-end design direction from foundational visual identity strategy to structural physical packaging and tactile print production.
            </p>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              const el = document.getElementById('estimator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-lg border border-[#252830] bg-[#16181D] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-primary)] flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <span>Launch Scope & Cost Calculator</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-color)]" />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.number}
                onMouseEnter={() => soundManager.playHover()}
                className="group p-8 rounded-2xl bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[var(--accent-color)]">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-[#0D0E11] border border-[#252830] text-[var(--text-primary)] group-hover:text-[var(--accent-color)] group-hover:border-[var(--accent-color)] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-[var(--accent-color)]/80 uppercase">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#252830]/80 space-y-2">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* 4-Step Design Process Roadmap */}
        <div id="process" className="pt-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>THE 4-STAGE ROADMAP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text-primary)]">
              Creative Design Process
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              A disciplined, transparent, and collaborative sprint process designed to eliminate guesswork and guarantee excellence.
            </p>
          </div>

          {/* Process Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => {
                  soundManager.playClick();
                  setActiveStep(idx);
                }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeStep === idx
                    ? 'bg-[#1E2128] border-[var(--accent-color)] shadow-2xl scale-[1.02]'
                    : 'bg-[#14161C] border-[#252830] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-[var(--accent-color)]">
                      {step.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/50 border border-white/10 font-mono text-[10px] text-[var(--text-muted)]">
                      {step.duration}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-color)] font-medium">
                    {step.phase}
                  </span>

                  <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mt-1 mb-3">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {step.keyActions.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3 h-3 text-[var(--accent-color)] flex-shrink-0" />
                      <span className="truncate">{action}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
