import React, { useEffect, useState } from 'react';

export default function CustomCursor({ cursorText, cursorVariant }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animId;
    const updateTrailing = () => {
      setTrailingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animId = requestAnimationFrame(updateTrailing);
    };
    animId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  const hasCustomText = Boolean(cursorText);

  return (
    <div className="pointer-events-none hidden md:block">
      {/* Primary center dot */}
      <div
        className="fixed z-[9999] rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent-color)',
          transform: 'translate(-50%, -50%)',
          opacity: hasCustomText ? 0 : 1
        }}
      />

      {/* Trailing follower circle / badge */}
      <div
        className={`fixed z-[9998] rounded-full pointer-events-none flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase transition-all duration-200 ease-out ${
          hasCustomText
            ? 'bg-[#CCFF00] text-black shadow-lg scale-100'
            : isHovered
            ? 'scale-150 border border-[var(--accent-color)] bg-[var(--accent-color)]/10'
            : 'border border-[var(--text-secondary)]/30 scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: hasCustomText ? '76px' : isHovered ? '44px' : '28px',
          height: hasCustomText ? '76px' : isHovered ? '44px' : '28px',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {hasCustomText && (
          <span className="text-center font-extrabold leading-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
