'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import { use3DTilt } from './use3DTilt';
import { audioEngine } from '@/lib/audio-engine';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────
   Category config — Fallout terminal palette
───────────────────────────────────────────────────────── */
const CATEGORY_CFG = {
  'ai-ml':      { Icon: Brain,      color: '#6ee7d0', label: { tr: 'Yapay Zeka', en: 'AI/ML',      ru: 'ИИ/ML'       } },
  'trading':    { Icon: TrendingUp, color: '#ffb641', label: { tr: 'Ticaret',    en: 'Trading',    ru: 'Трейдинг'    } },
  'mobile':     { Icon: Smartphone, color: '#2ecfff', label: { tr: 'Mobil',      en: 'Mobile',     ru: 'Мобильный'   } },
  'web':        { Icon: Globe,      color: '#B87333', label: { tr: 'Web',        en: 'Web',        ru: 'Веб'         } },
  'automation': { Icon: Zap,        color: '#CD853F', label: { tr: 'Otomasyon',  en: 'Automation', ru: 'Автоматизация'} },
  'tools':      { Icon: Code,       color: '#6ee7d0', label: { tr: 'Araçlar',    en: 'Tools',      ru: 'Инструменты' } },
} as const;

const STATUS_CFG: Record<string, {
  label: { tr: string; en: string; ru: string };
  color: string;
  bgAlpha: string;
}> = {
  production: { label: { tr: 'CANLI',  en: 'LIVE',   ru: 'ПРОД'  }, color: '#6ee7d0', bgAlpha: '25' },
  active:     { label: { tr: 'AKTİF', en: 'ACTIVE', ru: 'АКТИВ' }, color: '#a3e635', bgAlpha: '25' },
  wip:        { label: { tr: 'GEL.',   en: 'WIP',    ru: 'РАЗР.' }, color: '#ffb641', bgAlpha: '25' },
  planning:   { label: { tr: 'PLAN',   en: 'PLAN',   ru: 'ПЛАН'  }, color: '#2ecfff', bgAlpha: '25' },
};

/* ─────────────────────────────────────────────────────────
   Difficulty ASCII bar
───────────────────────────────────────────────────────── */
const DIFFICULTY_LEVELS: Record<string, number> = {
  'Başlangıç': 25, 'Orta': 50, 'İleri': 75, 'Uzman': 100,
  'Beginner': 25, 'Intermediate': 50, 'Advanced': 75, 'Expert': 100,
};

function DifficultyBar({ difficulty, label }: { difficulty: string; label?: string }) {
  const val = DIFFICULTY_LEVELS[difficulty] ?? 50;
  const max = 8;
  const filled = Math.round((val / 100) * max);
  const empty = max - filled;
  return (
    <span className="font-terminal text-xs text-vault-amber">
      [{'\u2588'.repeat(filled)}{'\u2591'.repeat(empty)}] {label ?? difficulty}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   Project interface
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
   Component — Terminal Dossier Card
───────────────────────────────────────────────────────── */
interface ProjectCard3DProps {
  project: ProjectLike;
  locale: Locale;
  categoryLabel?: string;
  difficultyLabel?: string;
  index?: number;
}

export default function ProjectCard3D({
  project,
  locale,
  categoryLabel,
  difficultyLabel,
  index = 0,
}: ProjectCard3DProps) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const scanRef  = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  use3DTilt(cardRef, { maxAngle: 8, perspective: 800, scale: 1.02 });

  const cfg          = CATEGORY_CFG[project.category] ?? CATEGORY_CFG['web'];
  const CategoryIcon = cfg.Icon;
  const accent       = project.colorAccent ?? cfg.color;
  const status       = project.status ? STATUS_CFG[project.status] : null;
  const loc          = locale as 'tr' | 'en' | 'ru';

  /* ── Scroll reveal: card enters from below ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 40, borderColor: 'rgba(184,115,51,0.1)' },
      {
        opacity: 1,
        y: 0,
        borderColor: 'rgba(184,115,51,1)',
        duration: 0.7,
        ease: 'power3.out',
        delay: (index % 3) * 0.12,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );

    const chips = card.querySelectorAll<HTMLElement>('.chip-outline');
    if (chips.length > 0) {
      gsap.fromTo(
        chips,
        { opacity: 0, y: 8, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.06,
          ease: 'back.out(1.7)',
          delay: (index % 3) * 0.12 + 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === card) t.kill();
      });
    };
  }, [index]);

  /* ── Hover: glitch + scan sweep ── */
  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    const scan = scanRef.current;
    if (!card) return;

    setIsGlitching(true);
    audioEngine.hoverTick();

    const tl = gsap.timeline({ onComplete: () => setIsGlitching(false) });
    tl
      .to(card, { x: -2, skewX: 1,    duration: 0.04, ease: 'none' })
      .to(card, { x:  3, skewX: -1,   duration: 0.04, ease: 'none' })
      .to(card, { x: -1, skewX: 0.5,  duration: 0.03, ease: 'none' })
      .to(card, { x:  0, skewX: 0,    duration: 0.08, ease: 'power2.out' });

    if (scan) {
      gsap.fromTo(
        scan,
        { x: '-120%', opacity: 1 },
        { x: '120%',  opacity: 0.6, duration: 0.65, ease: 'power1.inOut' }
      );
    }

    const chips = card.querySelectorAll('.chip-outline');
    if (chips.length > 0) {
      gsap.fromTo(
        chips,
        { scale: 1 },
        { scale: 1.06, duration: 0.12, stagger: 0.04, yoyo: true, repeat: 1, ease: 'power2.out' }
      );
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      x: 0, skewX: 0, duration: 0.3, ease: 'power2.out', overwrite: true,
    });
  }, []);

  const projectTitle = tProject(project.id, locale, 'title',       project.title);
  const projectDesc  = tProject(project.id, locale, 'description', project.description);

  const firstMetric = project.metrics
    ? Object.entries(project.metrics).find(([, v]) => v)?.[1]
    : null;

  return (
    <Link href={`/${locale}/projects/${project.id}`} className="block h-full">
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="terminal-frame h-full cursor-pointer relative overflow-hidden"
        style={{ opacity: 0, transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* CRT scanlines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px)',
          }}
        />

        {/* Hover scan sweep overlay */}
        <div ref={scanRef} className="scan-line" />

        {/* ── Terminal Header ── */}
        <div className="terminal-header">
          <div className="flex items-center gap-2 min-w-0">
            <span className="status-dot flex-shrink-0" style={status ? { background: status.color, boxShadow: `0 0 6px ${status.color}` } : {}} />
            <span className="truncate text-vault-rust/80">
              PROJECT_{project.id.toUpperCase().replace(/-/g, '_')}
            </span>
          </div>

          {status && (
            <span
              className="chip-filled flex-shrink-0"
              style={{
                color:       status.color,
                borderColor: status.color,
                background:  `${status.color}${status.bgAlpha}`,
              }}
            >
              {status.label[loc] ?? status.label.tr}
            </span>
          )}
        </div>

        {/* ── Content ── */}
        <div className="p-4 relative z-10">
          {project.featured && (
            <div className="flex items-center gap-1.5 mb-2.5">
              <Star style={{ width: 10, height: 10, color: '#ffb641', fill: '#ffb641' }} />
              <span
                className="chip-filled"
                style={{ color: '#ffb641', borderColor: '#ffb641', background: '#ffb64125' }}
              >
                FEATURED
              </span>
            </div>
          )}

          <div className="flex items-center gap-2 mb-2">
            <CategoryIcon style={{ width: 14, height: 14, color: accent, flexShrink: 0 }} />
            {project.year && (
              <span className="font-terminal text-xs text-vault-sand/40">{project.year}</span>
            )}
          </div>

          <h3 className="font-terminal text-sm text-vault-bone mb-1 tracking-wide leading-snug line-clamp-2">
            {projectTitle}
          </h3>

          <p className="text-xs text-vault-sand/60 leading-relaxed mb-3 line-clamp-2">
            {projectDesc}
          </p>

          <div className="mb-3">
            <DifficultyBar difficulty={project.difficulty} label={difficultyLabel} />
          </div>

          {firstMetric && (
            <div className="mb-3 font-terminal text-xs text-vault-turquoise">
              &gt; <span className="text-vault-amber">{firstMetric}</span>
            </div>
          )}

          <div className="mb-3 flex flex-wrap gap-1.5 items-center">
            <span className="font-terminal text-xs text-vault-rust/60 flex-shrink-0">&gt;</span>
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="chip-outline"
                style={{ color: accent, borderColor: `${accent}55` }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className="chip-outline"
                style={{ color: '#a09880', borderColor: 'rgba(160,152,128,0.3)' }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-vault-rust/20">
            <span
              className="chip-filled"
              style={{ color: accent, borderColor: `${accent}50`, background: `${accent}12` }}
            >
              {categoryLabel ?? (cfg.label[loc] || cfg.label.tr)}
            </span>

            <div className="flex items-center gap-1 font-terminal text-xs text-vault-turquoise">
              VIEW_PROJECT
              <ArrowRight style={{ width: 10, height: 10 }} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
