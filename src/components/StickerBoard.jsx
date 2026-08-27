import React, { useState } from 'react';
import { Sparkles, Move, Eye, EyeOff, RotateCw } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function StickerBoard({ setCursorText }) {
  const [stickers, setStickers] = useState([
    { id: 1, text: "SWISS GRID CERTIFIED", bg: "bg-[#CCFF00] text-black", x: 60, y: 140, rot: -8, type: "stamp" },
    { id: 2, text: "NO SERIFS ALLOWED", bg: "bg-rose-500 text-white", x: 280, y: 220, rot: 12, type: "warning" },
    { id: 3, text: "300 DPI // CMYK ONLY", bg: "bg-blue-600 text-white", x: 520, y: 110, rot: -4, type: "technical" },
    { id: 4, text: "VECTOR // 0.001pt", bg: "bg-zinc-800 text-[#CCFF00] border border-[#CCFF00]", x: 740, y: 240, rot: 6, type: "badge" },
    { id: 5, text: "KERNING POLICE ★", bg: "bg-orange-500 text-black font-black", x: 920, y: 130, rot: -12, type: "stamp" }
  ]);

  const [activeStickerId, setActiveStickerId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showStickers, setShowStickers] = useState(true);

  const handleMouseDown = (e, id) => {
    soundManager.playPop();
    setActiveStickerId(id);
    const sticker = stickers.find(s => s.id === id);
    setOffset({
      x: e.clientX - sticker.x,
      y: e.clientY - sticker.y
    });
  };

  const handleMouseMove = (e) => {
    if (activeStickerId === null) return;
    setStickers(prev =>
      prev.map(s => {
        if (s.id === activeStickerId) {
          return {
            ...s,
            x: Math.max(10, Math.min(e.clientX - offset.x, window.innerWidth - 200)),
            y: Math.max(10, Math.min(e.clientY - offset.y, 400))
          };
        }
        return s;
      })
    );
  };

  const handleMouseUp = () => {
    setActiveStickerId(null);
  };

  const rotateSticker = (id, e) => {
    e.stopPropagation();
    soundManager.playClick();
    setStickers(prev =>
      prev.map(s => {
        if (s.id === id) {
          return { ...s, rot: (s.rot + 25) % 360 };
        }
        return s;
      })
    );
  };

  return (
    <div 
      className="relative w-full py-8 border-b border-[#252830] bg-[#0A0B0E] overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-color)]" />
          <span>INTERACTIVE STUDIO STICKER PINBOARD (DRAG & ROTATE ANYWHERE)</span>
        </div>
        <button
          onClick={() => {
            soundManager.playClick();
            setShowStickers(!showStickers);
          }}
          className="p-1.5 px-3 rounded-md bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--text-secondary)] hover:text-white flex items-center gap-1.5"
        >
          {showStickers ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          <span>{showStickers ? "Hide Stickers" : "Show Stickers"}</span>
        </button>
      </div>

      {showStickers && (
        <div className="relative h-44 w-full">
          {stickers.map((sticker) => (
            <div
              key={sticker.id}
              onMouseDown={(e) => handleMouseDown(e, sticker.id)}
              onMouseEnter={() => setCursorText && setCursorText("DRAG")}
              onMouseLeave={() => setCursorText && setCursorText(null)}
              style={{
                left: `${sticker.x}px`,
                top: `${sticker.y}px`,
                transform: `rotate(${sticker.rot}deg)`,
                cursor: activeStickerId === sticker.id ? 'grabbing' : 'grab'
              }}
              className={`absolute z-20 px-3.5 py-1.5 rounded-md shadow-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-shadow duration-150 hover:scale-105 active:scale-110 active:shadow-2xl border-2 border-black/40 ${sticker.bg}`}
            >
              <span>{sticker.text}</span>
              <button
                onClick={(e) => rotateSticker(sticker.id, e)}
                className="p-1 rounded-full bg-black/20 hover:bg-black/40 text-current transition-colors"
                title="Rotate Sticker"
              >
                <RotateCw className="w-2.5 h-2.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
