'use client';

/**
 * PipelineInfographic — Fallout-Terminal × Turquoise-Neomorphic animated pipeline UI
 *
 * GSAP techniques used (all FREE in gsap@3.14.2):
 *  1. SVG path draw animation  — stroke-dasharray/dashoffset (DrawSVGPlugin alternative)
 *  2. ScrollTrigger stagger    — per-step reveal on scroll
 *  3. Pulsing node timelines   — looping glowing rings on each step node
 *  4. Scanline / CRT glitch    — CSS layers + GSAP keyframe bursts
 *  5. Neomorphic breathing     — box-shadow tween via gsap.to (cssVar trick)
 *  6. MotionPathPlugin         — particle travelling along SVG pipeline path
 *  7. SplitText char reveal    — per-character stagger for step descriptions
 *  8. 3-D card tilt            — GSAP perspective + rotateX/Y on mousemove
 *  9. Counter animation        — gsap.to on a plain JS object, textContent update
 * 10. Boot sequence            — terminal-style fade-in sequence on mount
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

// Register all plugins once (safe to call multiple times)
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, SplitText);

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
export interface PipelineStep {
  id: string;
  label: string;
  description: string;
  icon: string;          // emoji or short text label
  metric?: string;       // e.g. "94.5%"
  metricLabel?: string;  // e.g. "Accuracy"
  color?: string;        // override accent colour per step
}

interface PipelineInfographicProps {
  steps?: PipelineStep[];
  title?: string;
  subtitle?: string;
}

// ─────────────────────────────────────────────────────────
// Default pipeline data
// ─────────────────────────────────────────────────────────
const DEFAULT_STEPS: PipelineStep[] = [
  {
    id: 'intake',
    label: 'DATA INTAKE',
    description: 'Raw signals ingested from distributed sensor array',
    icon: '◈',
    metric: '1.2M',
    metricLabel: 'Events/sec',
    color: '#6ee7d0',
  },
  {
    id: 'parse',
    label: 'PARSE & VALIDATE',
    description: 'Schema enforcement and anomaly pre-screening layer',
    icon: '⬡',
    metric: '99.8%',
    metricLabel: 'Valid',
    color: '#e8c07a',
  },
  {
    id: 'enrich',
    label: 'ENRICH',
    description: 'Contextual metadata fusion with third-party feeds',
    icon: '◉',
    metric: '3.4×',
    metricLabel: 'Signal boost',
    color: '#c4b5e0',
  },
  {
    id: 'model',
    label: 'ML INFERENCE',
    description: 'Real-time scoring via quantised transformer model',
    icon: '⬢',
    metric: '12 ms',
    metricLabel: 'P99 latency',
    color: '#e07850',
  },
  {
    id: 'dispatch',
    label: 'DISPATCH',
    description: 'Routed to downstream consumers via event bus',
    icon: '◆',
    metric: '100%',
    metricLabel: 'Delivery SLA',
    color: '#6ee7d0',
  },
];

// ─────────────────────────────────────────────────────────
// SVG pipeline path helpers
// ─────────────────────────────────────────────────────────
const PIPELINE_PATH_ID = 'pipeline-path';

/**
 * Build an SVG "S-curve" connecting path through the step nodes.
 * Steps are laid out horizontally across `viewBox width`.
 */
function buildPipelinePath(steps: PipelineStep[], vw = 900, vh = 200): string {
  const count = steps.length;
  const nodeY = vh / 2;
  const points = steps.map((_, i) => ({
    x: 60 + (i / (count - 1)) * (vw - 120),
    y: nodeY,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x + (curr.x - prev.x) * 0.5;
    const cp2x = curr.x - (curr.x - prev.x) * 0.5;
    d += ` C ${cp1x} ${prev.y}, ${cp2x} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

// ─────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────

/** Animated scanline overlay — pure CSS, zero JS */
function ScanlineOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-50 overflow-hidden rounded-2xl"
      style={{
        background:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
        mixBlendMode: 'overlay',
      }}
    />
  );
}

/** Single pipeline step card with 3-D tilt */
interface StepCardProps {
  step: PipelineStep;
  index: number;
  total: number;
}

function StepCard({ step, index, total }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // ── 3. Pulsing node ring loop ──────────────────────────
  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const color = step.color ?? '#6ee7d0';

    const loop = gsap.timeline({ repeat: -1, yoyo: true, delay: index * 0.3 });
    loop
      .to(ring, {
        boxShadow: `0 0 0 6px ${color}55, 0 0 20px 10px ${color}33`,
        scale: 1.12,
        duration: 1.2,
        ease: 'sine.inOut',
      })
      .to(ring, {
        boxShadow: `0 0 0 2px ${color}33, 0 0 6px 2px ${color}22`,
        scale: 1,
        duration: 1.2,
        ease: 'sine.inOut',
      });

    return () => { loop.kill(); };
  }, [step.color, index]);

  // ── 7. SplitText char-by-char reveal on scroll ────────
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const split = new SplitText(el, { type: 'chars,words' });

    gsap.set(split.chars, { opacity: 0, y: 8 });

    const tween = gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.018,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      split.revert();
    };
  }, [step.description]);

  // ── 9. Counter animation ───────────────────────────────
  useEffect(() => {
    const el = counterRef.current;
    if (!el || !step.metric) return;

    // Parse numeric portion
    const raw = step.metric;
    const numMatch = raw.match(/([\d.]+)/);
    if (!numMatch) {
      el.textContent = raw;
      return;
    }

    const target = parseFloat(numMatch[1]);
    const prefix = raw.slice(0, numMatch.index);
    const suffix = raw.slice((numMatch.index ?? 0) + numMatch[0].length);
    const decimals = (numMatch[1].includes('.') ? numMatch[1].split('.')[1].length : 0);

    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate() {
        el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    return () => { tween.kill(); };
  }, [step.metric]);

  // ── 8. 3-D Tilt on mouse move ─────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -12;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 12;
    gsap.to(card, {
      rotateX: rx,
      rotateY: ry,
      transformPerspective: 600,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const color = step.color ?? '#6ee7d0';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pipeline-step-card relative flex flex-col items-center"
      style={{
        // Neomorphic glow card base — technique 5
        background: 'var(--dune-card)',
        borderRadius: '16px',
        border: `1px solid ${color}44`,
        boxShadow: `
          8px 8px 16px rgba(0,0,0,0.4),
          -4px -4px 12px rgba(52,40,24,0.5),
          0 0 0 1px ${color}22
        `,
        padding: '1.25rem 1rem',
        minWidth: '140px',
        maxWidth: '160px',
        cursor: 'default',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Step number badge */}
      <span
        className="absolute -top-3 -left-2 font-mono text-xs font-bold px-1.5 py-0.5 rounded"
        style={{
          background: color + '22',
          border: `1px solid ${color}66`,
          color: color,
          fontSize: '0.65rem',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Pulsing ring node — technique 3 */}
      <div
        ref={ringRef}
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color}33 0%, ${color}11 70%, transparent 100%)`,
          border: `2px solid ${color}88`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          boxShadow: `0 0 0 2px ${color}33`,
          flexShrink: 0,
        }}
      >
        <span style={{ color, fontFamily: 'monospace' }}>{step.icon}</span>
      </div>

      {/* Label */}
      <p
        className="font-mono font-bold text-center mt-2"
        style={{ color, fontSize: '0.6rem', letterSpacing: '0.12em' }}
      >
        {step.label}
      </p>

      {/* Description — SplitText target */}
      <p
        ref={descRef}
        className="text-center mt-1"
        style={{
          color: 'var(--dune-sand)',
          fontSize: '0.62rem',
          lineHeight: 1.4,
          opacity: 1,
        }}
      >
        {step.description}
      </p>

      {/* Metric counter */}
      {step.metric && (
        <div className="mt-3 text-center">
          <span
            ref={counterRef}
            className="font-mono font-bold"
            style={{ color, fontSize: '1rem' }}
          >
            0
          </span>
          {step.metricLabel && (
            <p
              className="font-mono"
              style={{ color: 'var(--dune-sand)', fontSize: '0.55rem', opacity: 0.7, letterSpacing: '0.1em' }}
            >
              {step.metricLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────
export default function PipelineInfographic({
  steps = DEFAULT_STEPS,
  title = 'SYSTEM PIPELINE',
  subtitle = 'Live data flow — all systems nominal',
}: PipelineInfographicProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [booted, setBooted] = useState(false);

  const VW = 900;
  const VH = 200;
  const pipelinePath = buildPipelinePath(steps, VW, VH);
  const nodeY = VH / 2;

  // Node X positions (mirroring buildPipelinePath calculation)
  const nodePositions = steps.map((_, i) => ({
    x: 60 + (i / (steps.length - 1)) * (VW - 120),
    y: nodeY,
  }));

  // ── 10. Boot sequence ─────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setBooted(true),
    });

    const wrapper = wrapperRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;
    if (!wrapper || !titleEl || !subtitleEl) return;

    // Start hidden
    gsap.set(wrapper, { opacity: 0 });

    tl
      // Flicker on
      .to(wrapper, { opacity: 1, duration: 0.05 })
      .to(wrapper, { opacity: 0, duration: 0.05 })
      .to(wrapper, { opacity: 1, duration: 0.05 })
      .to(wrapper, { opacity: 0, duration: 0.1 })
      .to(wrapper, { opacity: 1, duration: 0.08 })
      // Title scramble-in via SplitText
      .add(() => {
        const split = new SplitText(titleEl, { type: 'chars' });
        gsap.set(split.chars, { opacity: 0, y: -20, rotateX: -90 });
        gsap.to(split.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(2)',
          onComplete: () => split.revert(),
        });
      })
      .to(subtitleEl, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '<0.4');

    return () => { tl.kill(); };
  }, []);

  // ── 1. DrawSVGPlugin path draw animation ──────────────
  // ── 2. ScrollTrigger stagger for step cards ───────────
  useEffect(() => {
    const path = pathRef.current;
    const stepsEl = stepsContainerRef.current;
    if (!path || !stepsEl) return;

    // DrawSVGPlugin: animate from 0% to 100% on scroll
    const drawTween = gsap.fromTo(
      path,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: stepsEl,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Step cards stagger reveal
    const cards = stepsEl.querySelectorAll<HTMLElement>('.pipeline-step-card');
    const staggerTween = gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: stepsEl,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      drawTween.kill();
      staggerTween.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === stepsEl) t.kill();
      });
    };
  }, [steps]);

  // ── 6. MotionPathPlugin — particle along pipeline path ─
  useEffect(() => {
    const particle = particleRef.current;
    if (!particle) return;

    const loop = gsap.timeline({ repeat: -1, delay: 1.5 });
    loop.to(particle, {
      motionPath: {
        path: `#${PIPELINE_PATH_ID}`,
        align: `#${PIPELINE_PATH_ID}`,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 4,
      ease: 'power1.inOut',
    });

    // Pulse the particle as it travels
    const pulseTl = gsap.timeline({ repeat: -1, delay: 1.5 });
    pulseTl
      .to(particle, { r: 8, opacity: 1, duration: 0.3, ease: 'power2.out' })
      .to(particle, { r: 4, opacity: 0.6, duration: 0.3, ease: 'power2.in' });

    return () => {
      loop.kill();
      pulseTl.kill();
    };
  }, []);

  // ── 5. Neomorphic glow "breathing" on the wrapper card ─
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // GSAP can't tween box-shadow strings directly, but we can use
    // a CSS variable + custom prop approach or use a dummy element.
    // Simplest: animate a pseudo-glow layer via opacity.
    const glowEl = wrapper.querySelector<HTMLElement>('.pipeline-glow-overlay');
    if (!glowEl) return;

    const breathe = gsap.to(glowEl, {
      opacity: 0.7,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => { breathe.kill(); };
  }, [booted]);

  // ── 4. CRT Glitch burst — triggered every ~8 s ────────
  useEffect(() => {
    const glitchEl = wrapperRef.current?.querySelector<HTMLElement>('.pipeline-glitch-line');
    if (!glitchEl) return;

    const triggerGlitch = () => {
      const tl = gsap.timeline();
      tl
        .to(glitchEl, { opacity: 1, duration: 0.05 })
        .to(glitchEl, { scaleX: 1.04, x: -4, duration: 0.04 })
        .to(glitchEl, { scaleX: 0.97, x: 3, duration: 0.04 })
        .to(glitchEl, { scaleX: 1, x: 0, opacity: 0, duration: 0.1 });
    };

    const interval = setInterval(triggerGlitch, 8000);
    triggerGlitch(); // fire once immediately

    return () => clearInterval(interval);
  }, []);

  const accentColor = '#6ee7d0'; // dune-turquoise

  return (
    <section
      ref={wrapperRef}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'var(--dune-body)',
        border: `1px solid ${accentColor}33`,
        boxShadow: `
          0 0 40px ${accentColor}11,
          inset 0 0 60px rgba(0,0,0,0.4)
        `,
        padding: '2.5rem 2rem',
        opacity: 0, // starts hidden, boot sequence reveals
      }}
    >
      {/* ── CRT scanlines overlay (technique 4) ── */}
      <ScanlineOverlay />

      {/* ── Neomorphic breathing glow overlay (technique 5) ── */}
      <div
        aria-hidden="true"
        className="pipeline-glow-overlay pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accentColor}18 0%, transparent 70%)`,
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* ── CRT glitch horizontal stripe (technique 4) ── */}
      <div
        aria-hidden="true"
        className="pipeline-glitch-line pointer-events-none absolute left-0 right-0 opacity-0"
        style={{
          top: '38%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${accentColor}88, #e8c07a88, transparent)`,
          zIndex: 60,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* Header — boot sequence target (technique 10) */}
        <div className="mb-6 text-center">
          {/* Terminal blink cursor */}
          <div
            className="font-mono text-xs mb-2"
            style={{ color: accentColor, opacity: 0.6, letterSpacing: '0.2em' }}
          >
            {'>'} INIT PIPELINE VISUALIZER v3.14.2_
          </div>

          <h2
            ref={titleRef}
            className="font-mono font-black tracking-widest"
            style={{
              color: accentColor,
              fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
              textShadow: `0 0 20px ${accentColor}88, 0 0 40px ${accentColor}44`,
              letterSpacing: '0.25em',
            }}
          >
            {title}
          </h2>

          <p
            ref={subtitleRef}
            className="font-mono mt-2 opacity-0"
            style={{ color: 'var(--dune-sand)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
          >
            {subtitle}
          </p>
        </div>

        {/* ── SVG Pipeline path + MotionPath particle ── */}
        <div className="relative mb-2 overflow-hidden rounded-xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VW} ${VH}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            aria-hidden="true"
          >
            <defs>
              <filter id="node-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="particle-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Gradient along path */}
              <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                <stop offset="50%" stopColor="#e8c07a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e07850" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Background grid lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i}
                x1={0}
                y1={(VH / 10) * i}
                x2={VW}
                y2={(VH / 10) * i}
                stroke={`${accentColor}08`}
                strokeWidth="1"
              />
            ))}

            {/* ── 1. DrawSVG animated pipeline path ── */}
            {/* Ghost path (full, dim) */}
            <path
              d={pipelinePath}
              fill="none"
              stroke={`${accentColor}18`}
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {/* Animated draw path */}
            <path
              id={PIPELINE_PATH_ID}
              ref={pathRef}
              d={pipelinePath}
              fill="none"
              stroke="url(#path-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#node-glow)"
            />

            {/* Node circles on SVG (decorative - mirrors card positions) */}
            {nodePositions.map((pos, i) => {
              const color = steps[i]?.color ?? accentColor;
              return (
                <g key={i} filter="url(#node-glow)">
                  <circle cx={pos.x} cy={pos.y} r="10" fill={`${color}22`} stroke={`${color}88`} strokeWidth="1.5" />
                  <circle cx={pos.x} cy={pos.y} r="4" fill={color} />
                </g>
              );
            })}

            {/* ── 6. MotionPath particle ── */}
            <circle
              ref={particleRef}
              cx={nodePositions[0].x}
              cy={nodePositions[0].y}
              r={5}
              fill={accentColor}
              opacity={0}
              filter="url(#particle-glow)"
            />
          </svg>
        </div>

        {/* ── Step cards row — ScrollTrigger stagger target (technique 2) ── */}
        <div
          ref={stepsContainerRef}
          className="flex gap-3 justify-between flex-wrap mt-4"
          style={{ perspective: '1000px' }}
        >
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} total={steps.length} />
          ))}
        </div>

        {/* Terminal footer */}
        <div className="mt-6 font-mono text-xs opacity-30 text-center" style={{ color: accentColor }}>
          {'[ CLASSIFIED // PROJECT-PM // CLEARANCE: SIGMA ]'}
        </div>
      </div>
    </section>
  );
}
