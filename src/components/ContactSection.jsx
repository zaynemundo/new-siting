import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Mail, 
  Clock, 
  MapPin, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Paperclip,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { designerProfile } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function ContactSection({ incomingScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Identity',
    budget: '$10k - $25k',
    timeline: 'Within 1-2 Months',
    message: '',
    deliverablesNote: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Pre-populate if scope was sent from ScopeEstimator
  useEffect(() => {
    if (incomingScope) {
      setFormData(prev => ({
        ...prev,
        projectType: incomingScope.projectType || prev.projectType,
        budget: incomingScope.estimatedRange || prev.budget,
        deliverablesNote: incomingScope.deliverables ? `Configured Scope: ${incomingScope.deliverables.join(', ')} (${incomingScope.timeline})` : ''
      }));
    }
  }, [incomingScope]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Europe/Berlin', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projectTypes = [
    "Brand Identity",
    "Packaging & 3D",
    "Editorial & Print",
    "Custom Typography",
    "Digital & Web Art Direction"
  ];

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playSuccess();

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CCFF00', '#FFFFFF', '#FF5722', '#3B82F6']
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText("cai@caidevera.studio");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMMISSION INQUIRY</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text-primary)] leading-[0.95]">
                Let's Build Something <span className="font-serif italic font-normal text-[var(--accent-color)]">Remarkable.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)]">
                Have a new brand to launch, a monograph to design, or a custom typeface requirement? Fill out the brief or reach out directly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              
              {/* Direct Email Card */}
              <div 
                onClick={copyEmail}
                className="p-5 rounded-2xl bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-1">
                  <span>DIRECT INBOX</span>
                  <span className="text-[var(--accent-color)] group-hover:underline">
                    {copiedEmail ? "COPIED TO CLIPBOARD!" : "CLICK TO COPY"}
                  </span>
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] flex items-center justify-between">
                  <span>cai@caidevera.studio</span>
                  {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 opacity-40 group-hover:opacity-100" />}
                </div>
              </div>

              {/* Timezone & Studio Status */}
              <div className="p-5 rounded-2xl bg-[#14161C] border border-[#252830] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--accent-color)]" />
                  <div>
                    <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                      Berlin, Germany ({localTime})
                    </div>
                    <div className="font-mono text-xs text-[var(--text-muted)]">
                      CET // Response within 24h
                    </div>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

            </div>

            {/* Social Channels */}
            <div>
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                Digital Channels & Profiles:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {designerProfile.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundManager.playHover()}
                    className="p-3 rounded-xl bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] transition-all flex items-center justify-between group"
                  >
                    <span className="font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                      {social.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent-color)]" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#14161C] border border-[#252830] rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-3xl text-[var(--text-primary)] uppercase">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-md mx-auto">
                  Thank you for reaching out! I will review your project brief and reply with initial thoughts and calendar availability within 24 hours.
                </p>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg border border-[#252830] bg-[#0D0E11] text-xs font-mono text-[var(--accent-color)] hover:border-[var(--accent-color)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Project Scope Pill (if imported) */}
                {formData.deliverablesNote && (
                  <div className="p-3.5 rounded-xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 font-mono text-xs text-[var(--accent-color)] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    <span>{formData.deliverablesNote}</span>
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0E11] border border-[#252830] rounded-xl text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0E11] border border-[#252830] rounded-xl text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                    Company / Organization / Studio
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Cultural Lab"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0E11] border border-[#252830] rounded-xl text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans"
                  />
                </div>

                {/* Project Type Select */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                    Primary Service Focus
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          soundManager.playClick();
                          setFormData({ ...formData, projectType: type });
                        }}
                        className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                          formData.projectType === type
                            ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] font-bold'
                            : 'bg-[#0D0E11] border border-[#252830] text-[var(--text-secondary)] hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                    Anticipated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => {
                          soundManager.playClick();
                          setFormData({ ...formData, budget: budget });
                        }}
                        className={`py-2 px-3 rounded-lg font-mono text-xs text-center transition-all ${
                          formData.budget === budget
                            ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] font-bold'
                            : 'bg-[#0D0E11] border border-[#252830] text-[var(--text-secondary)] hover:border-white/20'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
                    Project Goals & Narrative *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your brand vision, key challenges, target launch date, and any reference inspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0E11] border border-[#252830] rounded-xl text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl active:scale-95"
                >
                  <span>Transmit Project Brief</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center font-mono text-[11px] text-[var(--text-muted)]">
                  Strict confidentiality guaranteed. NDAs signed upon request.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
