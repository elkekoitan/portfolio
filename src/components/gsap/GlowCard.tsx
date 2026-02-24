'use client';

/**
 * GlowCard
 *
 * Technique 5 — Turquoise neomorphism "breathing" glow using GSAP.
 *
 * The card uses the layered box-shadow neomorphic pattern (dark + light
 * pseudo-shadows + a coloured glow ring). GSAP animates a transparent
 * overlay div from opacity 0 → 1 in a yoyo repeat, simulating a breathing
 * glow without directly tweening box-shadow strings (which GSAP core does
 * not interpolate across multiple shadows reliably).
 *
 * For single-shadow tweens GSAP CSSPlugin handles box-shadow fine:
 *   gsap.to(el, { boxShadow: '0 0 40px #6ee7d044', yoyo: true, repeat: -1 })
 *
 * The "turquoise neomorphism" CSS formula:
 *   background: #342818  (wasteland-700)
 *   box-shadow:
 *     8px  8px  16px rgba(0,0,0,0.4),          ← dark shadow (depth)
 *    -4px -4px  12px rgba(52,40,24,0.55),       ← light shadow (lift)
 *     0    0   0 1px rgba(110,231,208,0.12),    ← hairline glow ring
 *     0    0   20px rgba(110,231,208,0.08);     ← ambient turquoise halo
 */

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  breatheDuration?: number;
  /** If true, also applies 3-D tilt on hover */
  tilt?: boolean;
  /** Border radius — '2px' for terminal style, '20px' for neo (default) */
  borderRadius?: string;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = '#6ee7d0',
  breatheDuration = 3,
  tilt = true,
  borderRadius = '20px',
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // ── Breathing glow ────────────────────────────────────
  useEffect(() => {
    const glowEl = glowRef.current;
    if (!glowEl) return;

    const tween = gsap.to(glowEl, {
      opacity: 1,
      duration: breatheDuration,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, [breatheDuration]);

  // ── 3-D tilt ─────────────────────────────────────────
  useEffect(() => {
    if (!tilt) return;
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      gsap.to(card, {
        rotateX: -ny * 8,
        rotateY: nx * 8,
        scale: 1.02,
        transformPerspective: 800,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.7,
        ease: 'elastic.out(1, 0.45)',
      });
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, [tilt]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'var(--vault-card)',
        borderRadius,
        // Neomorphic shadow stack
        boxShadow: `
          8px  8px 16px rgba(0,0,0,0.4),
          -4px -4px 12px rgba(52,40,24,0.55),
          0 0 0 1px ${glowColor}18,
          0 0 24px ${glowColor}0a
        `,
        border: `1px solid ${glowColor}22`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Breathing glow layer */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius,
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${glowColor}22 0%, transparent 65%)`,
          opacity: 0.2,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
