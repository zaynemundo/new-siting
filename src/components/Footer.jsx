import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Sparkles, Globe, Terminal } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function Footer({ onOpenResume }) {
  const [worldTimes, setWorldTimes] = useState({
    berlin: '',
    london: '',
    newYork: '',
    tokyo: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (tz) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });

      setWorldTimes({
        berlin: format('Europe/Berlin'),
        london: format('Europe/London'),
        newYork: format('America/New_York'),
        tokyo: format('Asia/Tokyo')
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundManager.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#252830] bg-[#0A0B0E] pt-16 pb-12 text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: World Clocks */}
        <div className="p-6 rounded-2xl bg-[#14161C] border border-[#252830] grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { city: "BERLIN (STUDIO)", time: worldTimes.berlin, utc: "UTC+1" },
            { city: "LONDON", time: worldTimes.london, utc: "UTC+0" },
            { city: "NEW YORK", time: worldTimes.newYork, utc: "UTC-5" },
            { city: "TOKYO", time: worldTimes.tokyo, utc: "UTC+9" }
          ].map((loc, idx) => (
            <div key={idx} className="border-l-2 border-[#252830] pl-3">
              <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                {loc.city} ({loc.utc})
              </div>
              <div className="font-mono text-base sm:text-lg font-bold text-[var(--text-primary)] mt-0.5">
                {loc.time || '--:--'}
              </div>
            </div>
          ))}
        </div>

        {/* Middle Tier: Colophon & Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-4">
          
          <div className="space-y-2 max-w-md">
            <div className="font-display font-black text-xl text-[var(--text-primary)] uppercase">
              ALEX RIVERA STUDIO
            </div>
            <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed">
              Independent practice specializing in visual identity architectures, custom variable typography, tactile packaging, and modernist editorial systems.
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center gap-4">
            {designerProfile.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playHover()}
                className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
              >
                {social.name}
              </a>
            ))}

            <button
              onClick={() => {
                soundManager.playPop();
                onOpenResume();
              }}
              className="font-mono text-xs text-[var(--accent-color)] hover:underline"
            >
              Curriculum Vitae
            </button>
          </div>

        </div>

        {/* Bottom Tier: Colophon & Back to Top */}
        <div className="pt-8 border-t border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Alex Rivera Studio. Engineered with Swiss Grid & React.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] text-[var(--text-primary)] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-color)]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
