import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Zap, 
  Search, 
  ArrowUpRight, 
  Menu, 
  X,
  FileText
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Navbar({ 
  theme, 
  setTheme, 
  soundEnabled, 
  setSoundEnabled, 
  openCommandPalette,
  openResumeModal 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
  };

  const cycleTheme = () => {
    soundManager.playClick();
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('acid');
    else setTheme('dark');
  };

  const navLinks = [
    { label: "Selected Works", href: "#projects" },
    { label: "Type & Poster Lab", href: "#poster-lab" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Estimator", href: "#estimator" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#0D0E11]/90 dark:bg-[#0D0E11]/90 backdrop-blur-md border-b border-[#252830] shadow-xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          onClick={() => soundManager.playClick()}
        >
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-display font-extrabold flex items-center justify-center text-xs tracking-tighter shadow-md group-hover:scale-105 transition-transform">
            CDV
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-[var(--text-primary)]">
              CAI DE VERA
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
              STUDIO // BERLIN
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#16181D]/80 border border-[#262932] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-white/5 rounded-full transition-all duration-150"
              onClick={() => soundManager.playHover()}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Search Shortcut */}
          <button
            onClick={() => {
              soundManager.playClick();
              openCommandPalette();
            }}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#252830] bg-[#16181D]/60 hover:bg-[#1E2128] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            title="Search projects & tools (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Quick Jump</span>
            <kbd className="px-1.5 py-0.5 text-[9px] bg-black/40 border border-white/10 rounded">⌘K</kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled
                ? 'border-[var(--accent-color)] text-[var(--accent-color)] bg-[var(--accent-color)]/10'
                : 'border-[#252830] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[#16181D]/60'
            }`}
            title={soundEnabled ? "Mute audio feedback" : "Enable tactile sound feedback"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={cycleTheme}
            className="p-2 rounded-lg border border-[#252830] bg-[#16181D]/60 hover:bg-[#1E2128] text-[var(--text-primary)] transition-all"
            title={`Current Theme: ${theme.toUpperCase()} (Click to switch)`}
          >
            {theme === 'dark' && <Moon className="w-4 h-4 text-purple-400" />}
            {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {theme === 'acid' && <Zap className="w-4 h-4 text-[#CCFF00]" />}
          </button>

          {/* Resume/CV Modal Trigger */}
          <button
            onClick={() => {
              soundManager.playPop();
              openResumeModal();
            }}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#252830] bg-[#16181D]/60 hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={() => soundManager.playPop()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 hover:shadow-lg transition-all active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#252830] text-[var(--text-primary)] bg-[#16181D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#252830] bg-[#0D0E11]/98 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#252830] text-xs font-mono text-[var(--text-muted)]">
              <span>BERLIN LOCAL TIME:</span>
              <span className="text-[var(--accent-color)] font-bold">{time} GMT+1</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-mono text-[var(--text-primary)] hover:text-[var(--accent-color)] flex items-center justify-between"
                onClick={() => {
                  soundManager.playClick();
                  setMobileMenuOpen(false);
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="w-full py-2.5 rounded-lg border border-[#252830] text-center font-mono text-xs text-[var(--text-primary)] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Designer CV & Press Kit
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] text-center font-mono text-xs font-bold uppercase tracking-wider block"
              >
                Start a Commission
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
