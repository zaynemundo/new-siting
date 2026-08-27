import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StickerBoard from './components/StickerBoard';
import ProjectsGallery from './components/ProjectsGallery';
import BrandIdentityShowcase from './components/BrandIdentityShowcase';
import InteractivePosterLab from './components/InteractivePosterLab';
import ServicesProcess from './components/ServicesProcess';
import ScopeEstimator from './components/ScopeEstimator';
import TestimonialsClients from './components/TestimonialsClients';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { projects, designerProfile } from './data/portfolioData';
import { soundManager } from './utils/sound';
import { 
  Search, 
  ArrowUpRight, 
  X, 
  Sparkles, 
  ArrowUp, 
  Sun, 
  Moon, 
  Zap, 
  Volume2, 
  VolumeX, 
  FileText,
  Command
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light' | 'acid'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [incomingScope, setIncomingScope] = useState(null);
  const [cursorText, setCursorText] = useState(null);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);

  // Apply theme class to html root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-acid');
    if (theme === 'light') {
      root.classList.add('theme-light');
      root.classList.remove('dark');
    } else if (theme === 'acid') {
      root.classList.add('theme-acid');
      root.classList.add('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  // Global Keyboard Shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundManager.playClick();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    soundManager.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Command palette items
  const paletteActions = [
    { id: 'sec-works', title: 'Selected Works & Case Studies', category: 'Navigation', icon: Sparkles, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-type', title: 'Type Specimen & Poster Lab', category: 'Tools', icon: Sparkles, action: () => document.getElementById('poster-lab')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-services', title: 'Services & Capabilities', category: 'Navigation', icon: Sparkles, action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-process', title: 'Design Process Roadmap', category: 'Navigation', icon: Sparkles, action: () => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-estimator', title: 'Cost & Scope Estimator', category: 'Tools', icon: Sparkles, action: () => document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-about', title: 'About Cai De Vera & Manifesto', category: 'Navigation', icon: Sparkles, action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'sec-contact', title: 'Start a Commission / Contact', category: 'Navigation', icon: ArrowUpRight, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'act-resume', title: 'Open CV & Press Kit Modal', category: 'Action', icon: FileText, action: () => setIsResumeOpen(true) },
    { id: 'act-theme-dark', title: 'Switch Theme: Obsidian Dark', category: 'Theme', icon: Moon, action: () => setTheme('dark') },
    { id: 'act-theme-light', title: 'Switch Theme: Modernist Light', category: 'Theme', icon: Sun, action: () => setTheme('light') },
    { id: 'act-theme-acid', title: 'Switch Theme: Acid Cyber', category: 'Theme', icon: Zap, action: () => setTheme('acid') },
    { id: 'act-sound', title: soundEnabled ? 'Mute Tactile Audio' : 'Enable Tactile Audio Feedback', category: 'Preferences', icon: soundEnabled ? VolumeX : Volume2, action: () => setSoundEnabled(soundManager.toggle()) },
    ...projects.map(p => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title}`,
      subtitle: `${p.client} — ${p.categoryLabel}`,
      category: 'Case Studies',
      icon: ArrowUpRight,
      action: () => setSelectedProject(p)
    }))
  ];

  const filteredPaletteActions = paletteActions.filter(item => {
    const q = paletteQuery.toLowerCase();
    return item.title.toLowerCase().includes(q) || (item.subtitle && item.subtitle.toLowerCase().includes(q)) || item.category.toLowerCase().includes(q);
  });

  const handlePaletteSelect = (item) => {
    soundManager.playPop();
    setIsCommandPaletteOpen(false);
    setPaletteQuery('');
    item.action();
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent-color)] selection:text-[var(--accent-contrast)]">
      
      {/* Tactile Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Custom Cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* Sticky Global Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        openCommandPalette={() => setIsCommandPaletteOpen(true)}
        openResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        <Hero
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          onOpenTypeLab={() => document.getElementById('poster-lab')?.scrollIntoView({ behavior: 'smooth' })}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <StickerBoard setCursorText={setCursorText} />

        <ProjectsGallery
          onSelectProject={(proj) => setSelectedProject(proj)}
          setCursorText={setCursorText}
        />

        <BrandIdentityShowcase />

        <InteractivePosterLab />

        <ServicesProcess
          onOpenEstimator={() => document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })}
        />

        <ScopeEstimator
          onApplyScope={(scopeData) => setIncomingScope(scopeData)}
        />

        <TestimonialsClients />

        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ContactSection
          incomingScope={incomingScope}
        />
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-[#252830] bg-[#0A0B0E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#252830]">
            
            {/* Studio Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-display font-extrabold flex items-center justify-center text-sm">
                  CDV
                </div>
                <span className="font-display font-bold text-lg uppercase tracking-wider text-[var(--text-primary)]">
                  CAI DE VERA STUDIO
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm font-sans leading-relaxed">
                Independent graphic design & art direction practice specializing in visual identity systems, kinetic typography, structural packaging, and editorial monographs.
              </p>
              <div className="font-mono text-xs text-[var(--accent-color)]">
                BERLIN // LONDON // WORLDWIDE COMMISSIONS
              </div>
            </div>

            {/* Quick Index */}
            <div className="md:col-span-3 space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Index Navigation
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-xs text-[var(--text-secondary)]">
                <a href="#projects" className="hover:text-[var(--accent-color)] transition-colors">01 // Selected Works</a>
                <a href="#poster-lab" className="hover:text-[var(--accent-color)] transition-colors">02 // Type Specimen Lab</a>
                <a href="#services" className="hover:text-[var(--accent-color)] transition-colors">03 // Studio Services</a>
                <a href="#estimator" className="hover:text-[var(--accent-color)] transition-colors">04 // Scope Calculator</a>
                <a href="#about" className="hover:text-[var(--accent-color)] transition-colors">05 // Design Philosophy</a>
                <a href="#contact" className="hover:text-[var(--accent-color)] transition-colors">06 // Commission Inquiry</a>
              </div>
            </div>

            {/* Socials & Legal */}
            <div className="md:col-span-4 space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Connect & Inquiries
              </div>
              <div className="font-mono text-xs text-[var(--text-primary)]">
                Direct: <a href="mailto:cai@caidevera.studio" className="text-[var(--accent-color)] hover:underline">cai@caidevera.studio</a>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {designerProfile.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-[#14161C] border border-[#252830] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
            <div>
              © {new Date().getFullYear()} Cai De Vera Studio. All Rights Reserved. Swiss Modernist Discipline & Digital Craft.
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-[#252830] bg-[#14161C] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] text-[var(--text-primary)] flex items-center gap-2 transition-all group"
              title="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </footer>

      {/* Case Study Full Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

      {/* CV / Press Kit Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Quick Search / Command Palette (⌘K) Modal */}
      {isCommandPaletteOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsCommandPaletteOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-[#14161C] border border-[#252830] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#252830] gap-3 bg-[#16181D]">
              <Search className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search projects, tools, themes, or commands (e.g. Kronos, Acid, Poster)..."
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono bg-black/40 border border-white/10 rounded text-[var(--text-muted)]">ESC</kbd>
            </div>

            {/* List of Results */}
            <div className="overflow-y-auto p-2 divide-y divide-white/5">
              {filteredPaletteActions.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)]">
                  No matching results for "{paletteQuery}"
                </div>
              ) : (
                filteredPaletteActions.map((item) => {
                  const Icon = item.icon || Sparkles;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handlePaletteSelect(item)}
                      className="w-full p-3 rounded-xl hover:bg-[#1E2128] text-left flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#0D0E11] text-[var(--accent-color)] border border-white/5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs sm:text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-color)]">
                            {item.title}
                          </div>
                          {item.subtitle && (
                            <div className="font-mono text-[11px] text-[var(--text-muted)]">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] uppercase text-[var(--text-muted)] px-2 py-0.5 bg-black/40 rounded">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
