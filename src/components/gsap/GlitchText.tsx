'use client';

/**
 * GlitchText
 *
 * Technique 4 — Fallout terminal scanline + glitch text using CSS + GSAP.
 *
 * Combines:
 *  • A CSS @keyframes `glitch-clip` that randomly clips the element
 *  • GSAP-driven random x offsets on ::before / ::after pseudo-layers
 *    (we replicate pseudo-layers via real <span> siblings for React-friendly code)
 *  • A periodic GSAP burst that introduces brief translate + color flicker
 *
 * The core "double-layer glitch" CSS trick:
 *   .glitch::before { content: attr(data-text); color: #e07850; clip: rect(0, 999px, 20px, 0); }
 *   .glitch::after  { content: attr(data-text); color: #6ee7d0; clip: rect(40px, 999px, 60px, 0); }
 *   Both layers are animated with @keyframes that randomly shift clip + translate.
 *
 * Because React can't easily use pseudo-elements with dynamic content,
 * this component duplicates the text into two absolutely-positioned spans
 * with clip-path and GSAP timeline bursts.
 */

import { useEffect, useRef, ElementType } from 'react';
import gsap from 'gsap';

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: ElementType;
  /** How often glitch fires (ms, default 6000) */
  interval?: number;
  /** Glitch intensity: x offset range in px (default 6) */
  intensity?: number;
}

export default function GlitchText({
  text,
  className = '',
  tag: Tag = 'span',
  interval = 6000,
  intensity = 6,
}: GlitchTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLSpanElement>(null);
  const layer2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    const wrap = wrapRef.current;
    if (!l1 || !l2 || !wrap) return;

    const triggerGlitch = () => {
      const tl = gsap.timeline();

      // Layer 1 — amber shift
      tl
        .set(l1, { display: 'block', clipPath: `inset(${gsap.utils.random(10, 40)}% 0 ${gsap.utils.random(10, 40)}% 0)` })
        .to(l1, { x: -intensity, duration: 0.04 })
        .to(l1, { x: intensity * 0.5, duration: 0.04 })
        .to(l1, { x: 0, duration: 0.04 })
        .set(l1, { clipPath: `inset(${gsap.utils.random(50, 80)}% 0 ${gsap.utils.random(0, 20)}% 0)` })
        .to(l1, { x: intensity, duration: 0.04 })
        .to(l1, { x: 0, duration: 0.04 })
        .set(l1, { display: 'none', x: 0, clipPath: 'none' });

      // Layer 2 — turquoise shift (offset timing)
      tl
        .set(l2, { display: 'block', clipPath: `inset(${gsap.utils.random(30, 60)}% 0 ${gsap.utils.random(5, 30)}% 0)` }, 0)
        .to(l2, { x: intensity * 0.7, duration: 0.04 }, 0.02)
        .to(l2, { x: -intensity * 0.4, duration: 0.04 }, 0.06)
        .to(l2, { x: 0, duration: 0.03 }, 0.10)
        .set(l2, { display: 'none', x: 0, clipPath: 'none' }, 0.14);

      // Brief whole-element flicker
      tl.to(wrap, { opacity: 0.7, duration: 0.03, yoyo: true, repeat: 1 }, 0.05);
    };

    const id = setInterval(triggerGlitch, interval);
    // Fire once shortly after mount
    const init = setTimeout(triggerGlitch, 800);

    return () => {
      clearInterval(id);
      clearTimeout(init);
    };
  }, [interval, intensity]);

  return (
    <div ref={wrapRef} className={`relative inline-block ${className}`} style={{ display: 'inline-block' }}>
      {/* Real visible text */}
      <Tag style={{ position: 'relative', display: 'block' }}>{text}</Tag>

      {/* Glitch layer 1 — amber channel */}
      <span
        ref={layer1Ref}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'none',
          color: '#e8c07a',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          mixBlendMode: 'screen',
        }}
      >
        {text}
      </span>

      {/* Glitch layer 2 — turquoise channel */}
      <span
        ref={layer2Ref}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'none',
          color: '#6ee7d0',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          mixBlendMode: 'screen',
        }}
      >
        {text}
      </span>
    </div>
  );
}
