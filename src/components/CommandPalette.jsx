import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  FileText, 
  Mail, 
  Calculator, 
  Grid,
  Zap
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onSelectProject, 
  onOpenResume,
  setTheme,
  theme 
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundManager.playClick();
        onClose(); // toggles
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const staticActions = [
    {
      id: 'lab',
      title: 'Interactive Poster & Type Lab',
      category: 'Playground Tool',
      icon: Sparkles,
      action: () => {
        const el = document.getElementById('poster-lab');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'estimator',
      title: 'Project Scope & Budget Calculator',
      category: 'Client Tool',
      icon: Calculator,
      action: () => {
        const el = document.getElementById('estimator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'View Designer Curriculum Vitae & Press Kit',
      category: 'Document',
      icon: FileText,
      action: () => {
        onOpenResume();
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Book a Project Commission',
      category: 'Inquiry',
      icon: Mail,
      action: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'theme',
      title: `Switch Theme (Current: ${theme.toUpperCase()})`,
      category: 'Appearance',
      icon: Zap,
      action: () => {
        if (theme === 'dark') setTheme('light');
        else if (theme === 'light') setTheme('acid');
        else setTheme('dark');
        onClose();
      }
    }
  ];

  const projectItems = projects.map(p => ({
    id: p.id,
    title: p.title,
    category: `Project // ${p.categoryLabel}`,
    icon: Layers,
    action: () => {
      onSelectProject(p);
      onClose();
    }
  }));

  const allItems = [...staticActions, ...projectItems];

  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      soundManager.playPop();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#14161C] border border-[#252830] rounded-2xl shadow-2xl overflow-hidden animate-fadeIn flex flex-col"
        onKeyDown={handleKeyDown}
      >
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#252830]">
          <Search className="w-4 h-4 text-[var(--accent-color)] mr-3 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search case studies, tools, & sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline px-2 py-0.5 text-[10px] font-mono bg-black/50 border border-white/10 rounded text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* List of results */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[var(--text-muted)]">
              No results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const IconComponent = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    soundManager.playPop();
                    item.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-3.5 py-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] font-bold shadow-md'
                      : 'text-[var(--text-secondary)] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-display font-medium text-xs sm:text-sm leading-tight">
                        {item.title}
                      </div>
                      <div className={`font-mono text-[10px] ${isSelected ? 'opacity-80' : 'text-[var(--text-muted)]'}`}>
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0D0E11] border-t border-[#252830] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>ALEX RIVERA STUDIO // CMD+K</span>
        </div>

      </div>
    </div>
  );
}
