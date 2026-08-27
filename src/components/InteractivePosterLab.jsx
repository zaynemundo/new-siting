import React, { useState, useRef } from 'react';
import { 
  Sliders, 
  Download, 
  RefreshCw, 
  Layers, 
  Grid, 
  Sparkles, 
  Copy, 
  Check, 
  Type, 
  Palette,
  Maximize2
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function InteractivePosterLab() {
  const [headline, setHeadline] = useState("FORM FOLLOWS FICTION");
  const [subheading, setSubheading] = useState("INTERNATIONAL TYPOGRAPHIC POSTER // SERIES 04");
  const [catalogNum, setCatalogNum] = useState("CDV-2026-TDC");
  const [activePreset, setActivePreset] = useState("swiss");
  const [activeColor, setActiveColor] = useState("acid");
  const [showGrid, setShowGrid] = useState(true);
  const [showGrain, setShowGrain] = useState(true);
  const [showStamp, setShowStamp] = useState(true);
  const [fontSize, setFontSize] = useState(54);
  const [letterSpacing, setLetterSpacing] = useState(-2);
  const [alignment, setAlignment] = useState("left");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const posterRef = useRef(null);

  const presets = [
    { id: "swiss", label: "Swiss Grid", font: "font-display font-black", serif: false },
    { id: "editorial", label: "Neo-Editorial", font: "font-serif italic font-normal", serif: true },
    { id: "brutalist", label: "Mono Brutalism", font: "font-mono font-bold tracking-tighter", serif: false },
    { id: "techno", label: "Acid Cyber", font: "font-display font-extrabold uppercase", serif: false }
  ];

  const colorPalettes = [
    { id: "acid", label: "Acid / Void", bg: "#0D0E11", text: "#CCFF00", accent: "#FFFFFF", border: "#252830" },
    { id: "swiss", label: "Swiss Paper / Red", bg: "#F4EFE6", text: "#111111", accent: "#E63946", border: "#D8D0C5" },
    { id: "cyber", label: "Ultraviolet", bg: "#090A10", text: "#00F0FF", accent: "#FF007F", border: "#2A2D40" },
    { id: "monochrome", label: "Obsidian / White", bg: "#000000", text: "#FFFFFF", accent: "#888888", border: "#333333" },
    { id: "forest", label: "Moss / Ochre", bg: "#1C2B22", text: "#E9D8A6", accent: "#EE9B00", border: "#2D4336" }
  ];

  const currentColor = colorPalettes.find(c => c.id === activeColor) || colorPalettes[0];

  const randomize = () => {
    soundManager.playPop();
    const headlines = [
      "SYSTEM OVER NOISE",
      "PURE GEOMETRY",
      "KINETIC DISCIPLINE",
      "RADICAL SIMPLICITY",
      "TACTILE VISIONS",
      "TYPE IS ARCHITECTURE"
    ];
    const randHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    const randColor = colorPalettes[Math.floor(Math.random() * colorPalettes.length)].id;
    const randPreset = presets[Math.floor(Math.random() * presets.length)].id;

    setHeadline(randHeadline);
    setActiveColor(randColor);
    setActivePreset(randPreset);
  };

  const copyConfig = () => {
    soundManager.playClick();
    const config = JSON.stringify({
      headline,
      subheading,
      preset: activePreset,
      palette: activeColor,
      grid: showGrid,
      grain: showGrain,
      stamp: showStamp
    }, null, 2);

    navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    soundManager.playSuccess();
    setDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 1600;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setDownloading(false);
      return;
    }

    // Fill background
    ctx.fillStyle = currentColor.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Swiss Grid lines if enabled
    if (showGrid) {
      ctx.strokeStyle = currentColor.text;
      ctx.globalAlpha = 0.12;
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x <= canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;
    }

    // Draw header border & catalog
    ctx.fillStyle = currentColor.text;
    ctx.font = "bold 24px 'Space Grotesk', sans-serif";
    ctx.fillText("CAI DE VERA STUDIO // TYPE LAB", 80, 100);

    ctx.fillStyle = currentColor.accent;
    ctx.font = "20px 'JetBrains Mono', monospace";
    ctx.fillText(`CATALOG: ${catalogNum}`, canvas.width - 360, 100);

    // Draw decorative geometric shape
    ctx.strokeStyle = currentColor.accent;
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 140, canvas.width - 160, 1);

    // Draw Main Headline
    ctx.fillStyle = currentColor.text;
    ctx.font = activePreset === 'editorial' 
      ? "italic 96px 'Instrument Serif', serif" 
      : activePreset === 'brutalist' 
      ? "bold 84px 'JetBrains Mono', monospace" 
      : "bold 104px 'Syne', sans-serif";

    const words = headline.split(" ");
    let line = "";
    let y = 420;
    const maxWidth = canvas.width - 160;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, 80, y);
        line = words[n] + " ";
        y += 120;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 80, y);

    // Subheading
    ctx.fillStyle = currentColor.accent;
    ctx.font = "28px 'Space Grotesk', sans-serif";
    ctx.fillText(subheading, 80, y + 100);

    // Footer block & Barcode simulation
    ctx.fillStyle = currentColor.text;
    ctx.font = "20px 'JetBrains Mono', monospace";
    ctx.fillText("BERLIN // 2026 // ALL RIGHTS RESERVED", 80, canvas.height - 100);

    // Barcode lines
    const startBarcodeX = canvas.width - 320;
    const barcodeY = canvas.height - 130;
    ctx.fillStyle = currentColor.text;
    for (let i = 0; i < 30; i++) {
      const w = (i % 3 === 0) ? 5 : (i % 2 === 0) ? 3 : 1.5;
      ctx.fillRect(startBarcodeX + i * 8, barcodeY, w, 40);
    }

    // Trigger download
    const link = document.createElement("a");
    link.download = `poster-cai-de-vera-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    setTimeout(() => setDownloading(false), 800);
  };

  return (
    <section id="poster-lab" className="py-24 border-b border-[#252830] bg-[#0E0F13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1D24] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE PLAYGROUND</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
              Interactive Poster & Type Lab
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
              Experiment with real-time typography systems, Swiss modernist grid layouts, and color palettes. Export high-resolution poster artwork directly.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={randomize}
              className="px-4 py-2.5 rounded-lg border border-[#252830] bg-[#16181D] hover:bg-[#1E2128] text-xs font-mono text-[var(--text-primary)] flex items-center gap-2 transition-all active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Randomize</span>
            </button>
            <button
              onClick={copyConfig}
              className="px-4 py-2.5 rounded-lg border border-[#252830] bg-[#16181D] hover:bg-[#1E2128] text-xs font-mono text-[var(--text-primary)] flex items-center gap-2 transition-all active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied JSON" : "Copy Config"}</span>
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-5 py-2.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? "Rendering..." : "Export Poster PNG"}</span>
            </button>
          </div>
        </div>

        {/* Lab Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 bg-[#14161C] border border-[#252830] rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
            
            {/* Headline Input */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                Primary Headline
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full bg-[#0D0E11] border border-[#252830] rounded-lg px-3.5 py-2.5 text-sm font-sans text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                placeholder="Type your title..."
              />
            </div>

            {/* Subheading Input */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Subheading / Edition
              </label>
              <input
                type="text"
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
                className="w-full bg-[#0D0E11] border border-[#252830] rounded-lg px-3.5 py-2.5 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
              />
            </div>

            {/* Typography Preset Selection */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                Typographic Treatment
              </label>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActivePreset(preset.id);
                    }}
                    className={`px-3 py-2.5 rounded-lg border text-xs font-mono text-left transition-all ${
                      activePreset === preset.id
                        ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)] font-bold'
                        : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)] hover:border-white/20'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette Selector */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                Color Harmony & Contrast
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {colorPalettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveColor(palette.id);
                    }}
                    className={`p-2 rounded-lg border flex items-center gap-2 text-xs font-mono transition-all ${
                      activeColor === palette.id
                        ? 'border-[var(--accent-color)] bg-[#1E2128]'
                        : 'border-[#252830] bg-[#0D0E11] hover:border-white/20'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: palette.text }}
                    />
                    <span className="truncate text-[var(--text-secondary)]">{palette.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles: Grid, Grain, Stamp */}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                Graphic Overlays
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setShowGrid(!showGrid);
                  }}
                  className={`py-2 px-2 rounded-lg border text-xs font-mono text-center transition-all ${
                    showGrid
                      ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                      : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)]'
                  }`}
                >
                  Grid: {showGrid ? "ON" : "OFF"}
                </button>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setShowGrain(!showGrain);
                  }}
                  className={`py-2 px-2 rounded-lg border text-xs font-mono text-center transition-all ${
                    showGrain
                      ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                      : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)]'
                  }`}
                >
                  Noise: {showGrain ? "ON" : "OFF"}
                </button>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setShowStamp(!showStamp);
                  }}
                  className={`py-2 px-2 rounded-lg border text-xs font-mono text-center transition-all ${
                    showStamp
                      ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                      : 'border-[#252830] bg-[#0D0E11] text-[var(--text-muted)]'
                  }`}
                >
                  Stamp: {showStamp ? "ON" : "OFF"}
                </button>
              </div>
            </div>

          </div>

          {/* Live Poster Canvas Preview (Right) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div
              ref={posterRef}
              className="w-full max-w-md aspect-[3/4] rounded-2xl p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden border transition-all duration-300 select-none"
              style={{
                backgroundColor: currentColor.bg,
                color: currentColor.text,
                borderColor: currentColor.border
              }}
            >
              {/* Optional Grid Lines Overlay */}
              {showGrid && (
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${currentColor.text} 1px, transparent 1px), linear-gradient(to bottom, ${currentColor.text} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              )}

              {/* Optional Grain Noise Texture */}
              {showGrain && (
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              )}

              {/* Poster Top Bar */}
              <div className="relative z-10 flex items-start justify-between border-b pb-4" style={{ borderColor: `${currentColor.text}33` }}>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                    CAI DE VERA STUDIO
                  </span>
                  <span className="font-mono text-[9px] opacity-70">
                    TYPE SPECIMEN LAB // NO. 04
                  </span>
                </div>
                <div className="text-right font-mono text-[10px]" style={{ color: currentColor.accent }}>
                  {catalogNum}
                </div>
              </div>

              {/* Poster Center Headline Content */}
              <div className="relative z-10 my-auto py-6">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-wider opacity-60">
                  // EXPERIMENTAL TYPE DISPLAY
                </div>
                
                <h3 
                  className={`leading-[0.9] uppercase transition-all ${
                    activePreset === 'editorial' 
                      ? 'font-serif italic font-normal text-5xl sm:text-6xl'
                      : activePreset === 'brutalist'
                      ? 'font-mono font-black text-4xl sm:text-5xl tracking-tighter'
                      : activePreset === 'techno'
                      ? 'font-display font-black text-4xl sm:text-5xl tracking-tight'
                      : 'font-display font-black text-5xl sm:text-6xl tracking-tight'
                  }`}
                >
                  {headline || "UNTITLED WORK"}
                </h3>

                <p 
                  className="mt-6 text-xs sm:text-sm font-mono opacity-85 max-w-xs leading-relaxed"
                  style={{ color: currentColor.accent }}
                >
                  {subheading}
                </p>
              </div>

              {/* Poster Bottom Bar & Details */}
              <div className="relative z-10 pt-4 border-t flex items-end justify-between" style={{ borderColor: `${currentColor.text}33` }}>
                
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider opacity-70">
                    BERLIN • Q3 2026
                  </span>
                  <span className="font-mono text-[9px] opacity-50">
                    52.5200° N / 13.4050° E
                  </span>
                </div>

                {/* Swiss Stamp */}
                {showStamp && (
                  <div 
                    className="stamp-border font-mono text-[9px] uppercase font-bold tracking-widest rotate-[-6deg]"
                    style={{ borderColor: currentColor.accent, color: currentColor.accent }}
                  >
                    APPROVED // CDV
                  </div>
                )}

                {/* Barcode Mock */}
                <div className="flex items-end gap-[2px] h-6 opacity-75">
                  {[4, 8, 2, 6, 8, 3, 5, 2, 7, 4, 8, 3, 2, 6, 8, 4, 5, 7, 3].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-[2px]" 
                      style={{ height: `${h * 3}px`, backgroundColor: currentColor.text }} 
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
