'use client';

import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import {
  Brain,
  TrendingUp,
  Smartphone,
  Globe,
  Zap,
  Code,
  Star,
  ArrowRight,
} from 'lucide-react';
import type { Locale } from '@/i18n/dictionaries';
import { tProject } from '@/i18n/projects';

/* ─────────────────────────────────────────────────────────
   Category config
───────────────────────────────────────────────────────── */
const CATEGORY_CFG = {
  'ai-ml': {
    Icon: Brain,
    color: '#6ee7d0',
    label: { tr: 'Yapay Zeka', en: 'AI/ML', ru: 'ИИ/ML' },
    pattern: 'neural',
  },
  'trading': {
    Icon: TrendingUp,
    color: '#e8c07a',
    label: { tr: 'Ticaret', en: 'Trading', ru: 'Трейдинг' },
    pattern: 'chart',
  },
  'mobile': {
    Icon: Smartphone,
    color: '#c4b5e0',
    label: { tr: 'Mobil', en: 'Mobile', ru: 'Мобильный' },
    pattern: 'phone',
  },
  'web': {
    Icon: Globe,
    color: '#e07850',
    label: { tr: 'Web', en: 'Web', ru: 'Веб' },
    pattern: 'browser',
  },
  'automation': {
    Icon: Zap,
    color: '#ddd0b0',
    label: { tr: 'Otomasyon', en: 'Automation', ru: 'Автоматизация' },
    pattern: 'circuit',
  },
  'tools': {
    Icon: Code,
    color: '#c07848',
    label: { tr: 'Araçlar', en: 'Tools', ru: 'Инструменты' },
    pattern: 'terminal',
  },
} as const;

const STATUS_CFG: Record<string, { label: { tr: string; en: string; ru: string }; color: string }> = {
  production: { label: { tr: 'Canlı', en: 'Live', ru: 'Прод' }, color: '#6ee7d0' },
  active: { label: { tr: 'Aktif', en: 'Active', ru: 'Актив' }, color: '#a3e635' },
  wip: { label: { tr: 'Geliştirme', en: 'WIP', ru: 'В разр.' }, color: '#e8c07a' },
  planning: { label: { tr: 'Planlama', en: 'Planning', ru: 'Планир.' }, color: '#c4b5e0' },
};

/* ─────────────────────────────────────────────────────────
   SVG Category Patterns (inline)
───────────────────────────────────────────────────────── */
function CategoryPattern({ pattern, color }: { pattern: string; color: string }) {
  const dim = 180;
  const c = `${color}18`;
  const cs = `${color}30`;

  if (pattern === 'neural') {
    const nodes = [
      [90, 30], [40, 70], [90, 70], [140, 70], [60, 110], [120, 110], [90, 150],
    ] as [number, number][];
    const edges: [number, number][] = [[0,1],[0,2],[0,3],[1,4],[2,4],[2,5],[3,5],[4,6],[5,6]];
    return (
      <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={cs} strokeWidth="1" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 || i === 6 ? 7 : 5} fill={c} stroke={cs} strokeWidth="1.5" />
        ))}
      </svg>
    );
  }

  if (pattern === 'chart') {
    const bars = [[30, 130, 60, 40], [70, 100, 60, 70], [110, 80, 60, 90], [150, 110, 60, 60]] as [number, number, number, number][];
    return (
      <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
        <polyline points="20,140 60,100 100,80 130,90 160,60" fill="none" stroke={cs} strokeWidth="2" strokeLinecap="round" />
        {bars.map(([x, y, w, h], i) => (
          <rect key={i} x={x - w/2} y={y} width={w - 8} height={h} fill={c} rx="3" />
        ))}
        <circle cx="160" cy="60" r="5" fill={color} opacity="0.5" />
      </svg>
    );
  }

  if (pattern === 'phone') {
    return (
      <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
        <rect x="55" y="20" width="70" height="140" rx="12" fill={c} stroke={cs} strokeWidth="1.5" />
        <rect x="63" y="32" width="54" height="90" rx="4" fill={cs} />
        <circle cx="90" cy="140" r="5" fill={cs} />
        <line x1="75" y1="25" x2="105" y2="25" stroke={cs} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (pattern === 'browser') {
    return (
      <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
        <rect x="20" y="35" width="140" height="110" rx="8" fill={c} stroke={cs} strokeWidth="1.5" />
        <rect x="20" y="35" width="140" height="24" rx="8" fill={cs} />
        <circle cx="35" cy="47" r="5" fill={color} opacity="0.4" />
        <circle cx="52" cy="47" r="5" fill={color} opacity="0.3" />
        <circle cx="69" cy="47" r="5" fill={color} opacity="0.2" />
        <rect x="30" y="70" width="120" height="6" rx="3" fill={cs} />
        <rect x="30" y="82" width="80" height="6" rx="3" fill={`${color}15`} />
        <rect x="30" y="94" width="100" height="6" rx="3" fill={`${color}10`} />
      </svg>
    );
  }

  if (pattern === 'circuit') {
    return (
      <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
        <path d="M30 90 H60 V50 H120 V90 H150" fill="none" stroke={cs} strokeWidth="1.5" />
        <path d="M90 90 V130 H150 V110" fill="none" stroke={cs} strokeWidth="1.5" />
        <rect x="55" y="42" width="16" height="16" fill={c} stroke={cs} strokeWidth="1" rx="2" />
        <rect x="117" y="82" width="16" height="16" fill={c} stroke={cs} strokeWidth="1" rx="2" />
        <circle cx="90" cy="90" r="6" fill={cs} />
        <circle cx="150" cy="110" r="4" fill={color} opacity="0.5" />
      </svg>
    );
  }

  // terminal (tools)
  return (
    <svg viewBox={`0 0 ${dim} ${dim}`} className="w-full h-full" aria-hidden="true">
      <rect x="20" y="30" width="140" height="120" rx="8" fill={c} stroke={cs} strokeWidth="1.5" />
      <text x="32" y="60" fill={color} opacity="0.6" fontSize="11" fontFamily="monospace">{'$ npm run build'}</text>
      <text x="32" y="78" fill={color} opacity="0.45" fontSize="11" fontFamily="monospace">{'> Building...'}</text>
      <text x="32" y="96" fill={color} opacity="0.35" fontSize="11" fontFamily="monospace">{'✓ Done in 2.3s'}</text>
      <rect x="32" y="106" width="6" height="12" fill={color} opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Project interface (minimal — matches projects.ts)
───────────────────────────────────────────────────────── */
export interface ProjectLike {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: keyof typeof CATEGORY_CFG;
  difficulty: string;
  featured?: boolean;
  status?: string;
  colorAccent?: string;
  year?: number;
  metrics?: { users?: string; performance?: string; accuracy?: string; revenue?: string };
}

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
interface ProjectCard3DProps {
  project: ProjectLike;
  locale: Locale;
  categoryLabel?: string;
  difficultyLabel?: string;
}

export default function ProjectCard3D({
  project,
  locale,
  categoryLabel,
  difficultyLabel,
}: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const cfg = CATEGORY_CFG[project.category] ?? CATEGORY_CFG['web'];
  const CategoryIcon = cfg.Icon;
  const accent = project.colorAccent ?? cfg.color;
  const status = project.status ? STATUS_CFG[project.status] : null;
  const loc = locale as 'tr' | 'en' | 'ru';

  /* ── 3-D tilt on mouse move ── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      gsap.to(card, {
        rotateX: -ny * 8,
        rotateY: nx * 8,
        transformPerspective: 900,
        scale: 1.03,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: true,
      });
      // Move glow with cursor
      if (glowRef.current) {
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        glowRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, ${accent}22 0%, transparent 65%)`;
      }
    },
    [accent]
  );

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
      overwrite: true,
    });
    if (glowRef.current) {
      glowRef.current.style.background = 'transparent';
    }
  }, []);

  const projectTitle = tProject(project.id, locale, 'title', project.title);
  const projectDesc = tProject(project.id, locale, 'description', project.description);

  const firstMetric = project.metrics
    ? Object.entries(project.metrics).find(([, v]) => v)?.[1]
    : null;

  return (
    <Link href={`/${locale}/projects/${project.id}`} className="block h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden h-full cursor-pointer"
        style={{
          background: 'var(--dune-card)',
          border: `1px solid ${accent}22`,
          boxShadow: `
            8px 8px 20px rgba(0,0,0,0.45),
            -4px -4px 14px rgba(52,40,24,0.5),
            0 0 0 1px ${accent}15
          `,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Cursor-tracking glow */}
        <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 transition-all duration-200" />

        {/* CRT scanlines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px)',
          }}
        />

        {/* Top accent line */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />

        {/* Visual area */}
        <div
          className="relative overflow-hidden"
          style={{
            height: 160,
            background: `linear-gradient(135deg, ${accent}0a 0%, ${accent}04 100%)`,
          }}
        >
          {/* Category pattern */}
          <div className="absolute inset-4 opacity-60">
            <CategoryPattern pattern={cfg.pattern} color={accent} />
          </div>

          {/* Category icon - large, centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                background: `${accent}15`,
                border: `1.5px solid ${accent}40`,
                boxShadow: `0 0 20px ${accent}20`,
              }}
            >
              <CategoryIcon style={{ width: 24, height: 24, color: accent }} />
            </div>
          </div>

          {/* Featured star */}
          {project.featured && (
            <div
              className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full"
              style={{
                background: `${accent}20`,
                border: `1px solid ${accent}50`,
              }}
            >
              <Star style={{ width: 10, height: 10, color: accent, fill: accent }} />
              <span className="text-xs font-mono" style={{ color: accent, fontSize: '0.6rem' }}>
                FEATURED
              </span>
            </div>
          )}

          {/* Status badge */}
          {status && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              {(project.status === 'production' || project.status === 'active') && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: status.color,
                    boxShadow: `0 0 6px ${status.color}`,
                    animation: 'pulse-glow 2s ease-in-out infinite',
                  }}
                />
              )}
              <span
                className="text-xs font-mono px-1.5 py-0.5 rounded"
                style={{
                  background: `${status.color}20`,
                  color: status.color,
                  border: `1px solid ${status.color}40`,
                  fontSize: '0.6rem',
                }}
              >
                {status.label[loc] ?? status.label.tr}
              </span>
            </div>
          )}

          {/* Year */}
          {project.year && (
            <div
              className="absolute bottom-3 right-3 font-mono text-xs"
              style={{ color: `${accent}60`, fontSize: '0.65rem' }}
            >
              {project.year}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3
            className="font-bold text-dune-bone mb-1 leading-snug line-clamp-2"
            style={{ fontSize: '1rem' }}
          >
            {projectTitle}
          </h3>

          {/* Description */}
          <p
            className="text-xs leading-relaxed mb-3 line-clamp-2"
            style={{ color: 'rgba(221,208,176,0.65)' }}
          >
            {projectDesc}
          </p>

          {/* Metric if available */}
          {firstMetric && (
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded mb-3 font-mono text-xs"
              style={{
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
                color: accent,
              }}
            >
              <TrendingUp style={{ width: 10, height: 10 }} />
              {firstMetric}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  background: `${accent}10`,
                  border: `1px solid ${accent}25`,
                  color: `${accent}cc`,
                  fontSize: '0.65rem',
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ color: 'rgba(221,208,176,0.35)', fontSize: '0.65rem' }}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: 'rgba(221,208,176,0.45)' }}>
              {categoryLabel ?? (cfg.label[loc] || cfg.label.tr)}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono" style={{ color: accent }}>
                {difficultyLabel ?? project.difficulty}
              </span>
              <ArrowRight
                style={{
                  width: 12,
                  height: 12,
                  color: accent,
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
