'use client';

/**
 * BootSequence — Fallout-style terminal boot sequence on page load.
 */

import { useEffect, useRef, useState, ReactNode } from 'react';
import gsap from 'gsap';

interface BootLine {
  text: string;
  color?: string;
  delay?: number;
}

interface BootSequenceProps {
  lines?: BootLine[];
  children: ReactNode;
  skipAfterMs?: number;
}

const DEFAULT_LINES: BootLine[] = [
  { text: '> ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM' },
  { text: '> COPYRIGHT 2075-2077 ROBCO INDUSTRIES', delay: 0.1 },
  { text: '> -----------------------------------------' },
  { text: '> INITIALIZING PIPELINE CORE... [OK]', color: '#6ee7d0' },
  { text: '> LOADING GSAP v3.14.2 ANIMATION ENGINE... [OK]', color: '#6ee7d0' },
  { text: '> MOUNTING REACT 19 FIBER TREE... [OK]', color: '#6ee7d0' },
  { text: '> SYNCING SCROLL TRIGGERS... [OK]', color: '#6ee7d0' },
  { text: '> REGISTERING MOTION PATH PLUGIN... [OK]', color: '#6ee7d0' },
  { text: '> CALIBRATING TERMINAL DISPLAY... [OK]', color: '#B87333', delay: 0.1 },
  { text: '> WARNING: CORROSION DETECTED... [PATCHED]', color: '#ffb641', delay: 0.15 },
  { text: '> SYSTEM READY.', color: '#B87333', delay: 0.3 },
];

export default function BootSequence({
  lines = DEFAULT_LINES,
  children,
  skipAfterMs,
}: BootSequenceProps) {
  const [done, setDone] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (done) return;

    try {
      if (sessionStorage.getItem('ht_boot')) {
        setDone(true);
        return;
      }
      sessionStorage.setItem('ht_boot', '1');
    } catch {
      setDone(true);
      return;
    }

    const screen = screenRef.current;
    const linesEl = linesRef.current;
    const cursor = cursorRef.current;
    if (!screen || !linesEl || !cursor) return;

    const tl = gsap.timeline({
      onComplete: () => {
        const exitTl = gsap.timeline({ onComplete: () => setDone(true) });
        exitTl
          .to(screen, { opacity: 0, duration: 0.05 })
          .to(screen, { opacity: 1, duration: 0.05 })
          .to(screen, { opacity: 0, duration: 0.05 })
          .to(screen, { opacity: 1, duration: 0.08 })
          .to(screen, { opacity: 0, duration: 0.3, ease: 'power2.in' });
      },
    });

    gsap.to(cursor, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true });

    const lineEls = Array.from(linesEl.children) as HTMLElement[];
    gsap.set(lineEls, { opacity: 0 });

    lineEls.forEach((el, i) => {
      const extraDelay = lines[i]?.delay ?? 0;
      tl.to(el, { opacity: 1, duration: 0.01 }, `+=${0.15 + extraDelay}`);
    });

    tl.to({}, { duration: 0.8 });

    let skipTimeout: ReturnType<typeof setTimeout> | undefined;
    if (skipAfterMs) {
      skipTimeout = setTimeout(() => {
        tl.progress(1);
      }, skipAfterMs);
    }

    return () => {
      tl.kill();
      if (skipTimeout) clearTimeout(skipTimeout);
    };
  }, [done, lines, skipAfterMs]);

  if (done) return <>{children}</>;

  return (
    <div
      ref={screenRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a08',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem 3rem',
        fontFamily: '"Courier New", Courier, monospace',
        boxShadow: 'inset 0 0 120px rgba(0,0,0,0.8)',
      }}
    >
      {/* Scanlines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Phosphor glow overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(110,231,208,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div ref={linesRef} style={{ position: 'relative', zIndex: 2 }}>
        {lines.map((line, i) => (
          <p
            key={i}
            style={{
              color: line.color ?? 'rgba(110,231,208,0.85)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              lineHeight: 1.7,
              margin: 0,
              textShadow: `0 0 8px ${line.color ?? '#6ee7d0'}88`,
            }}
          >
            {line.text}
          </p>
        ))}
      </div>

      {/* Blinking cursor */}
      <span
        ref={cursorRef}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'inline-block',
          width: '0.6em',
          height: '1.1em',
          background: '#6ee7d0',
          verticalAlign: 'text-bottom',
          marginTop: '0.2rem',
        }}
        aria-hidden="true"
      />

      {/* Skip hint */}
      <button
        onClick={() => setDone(true)}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '2rem',
          zIndex: 3,
          background: 'transparent',
          border: '1px solid rgba(110,231,208,0.3)',
          color: 'rgba(110,231,208,0.5)',
          fontFamily: 'inherit',
          fontSize: '0.7rem',
          padding: '0.3rem 0.8rem',
          cursor: 'pointer',
          letterSpacing: '0.1em',
        }}
      >
        SKIP [ESC]
      </button>
    </div>
  );
}
