import React, { useState } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles 
} from 'lucide-react';
import { testimonials, clientLogos } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function TestimonialsClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 border-b border-[#252830] bg-[#0D0E11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              TRUSTED BY INNOVATIVE BRANDS & CULTURAL INSTITUTIONS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-xl bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] transition-all flex flex-col items-center justify-center text-center group"
              >
                <span className="font-display font-black text-lg sm:text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors tracking-tight">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)] mt-1 uppercase">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="bg-[#14161C] border border-[#252830] rounded-3xl p-8 sm:p-12 relative shadow-2xl">
          
          <div className="flex items-center justify-between mb-8 border-b border-[#252830] pb-6">
            <div className="flex items-center gap-2 text-[var(--accent-color)] font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Client Endorsement // 0{currentIndex + 1} of 0{testimonials.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-[#252830] bg-[#0D0E11] hover:bg-[#1E2128] text-[var(--text-primary)] transition-all"
                title="Previous Quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-[#252830] bg-[#0D0E11] hover:bg-[#1E2128] text-[var(--text-primary)] transition-all"
                title="Next Quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Quote Body */}
          <div className="max-w-4xl">
            <Quote className="w-10 h-10 text-[var(--accent-color)]/30 mb-4" />
            <p className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
              "{current.quote}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-color)]"
              />
              <div>
                <div className="font-display font-bold text-base text-[var(--text-primary)]">
                  {current.author}
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)]">
                  {current.role}, <span className="text-[var(--accent-color)]">{current.company}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
