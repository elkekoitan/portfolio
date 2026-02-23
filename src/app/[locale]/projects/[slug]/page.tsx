'use client';

import { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Zap,
  Star,
  Terminal,
} from 'lucide-react';
import { getProjectById } from '@/data/projects';
import { getDict, type Locale } from '@/i18n/dictionaries';
import { tProject } from '@/i18n/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATUS_MAP: Record<string, { label: Record<string, string>; color: string; bg: string }> = {
  production: {
    label: { tr: 'Yayında', en: 'Live', ru: 'В эфире' },
    color: '#6ee7d0',
    bg: 'rgba(110,231,208,0.12)',
  },
  active: {
    label: { tr: 'Aktif Geliştirme', en: 'Active Development', ru: 'Активная разработка' },
    color: '#e8c07a',
    bg: 'rgba(232,192,122,0.12)',
  },
  wip: {
    label: { tr: 'Devam Ediyor', en: 'In Progress', ru: 'В процессе' },
    color: '#e07850',
    bg: 'rgba(224,120,80,0.12)',
  },
  planning: {
    label: { tr: 'Planlama', en: 'Planning', ru: 'Планирование' },
    color: '#c4b5e0',
    bg: 'rgba(196,181,224,0.12)',
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as Locale) || 'tr';
  const slug = params?.slug as string;
  const t = getDict(locale);
  const pd = t.projectDetail;

  const project = getProjectById(slug);

  /* ── GSAP ref targets ── */
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      /* 1. Hero entrance — CRT flicker in */
      const flickerTl = gsap.timeline();
      flickerTl
        .fromTo(heroRef.current, { opacity: 0 }, { opacity: 0.4, duration: 0.04 })
        .to(heroRef.current, { opacity: 0.1, duration: 0.04 })
        .to(heroRef.current, { opacity: 0.9, duration: 0.06 })
        .to(heroRef.current, { opacity: 0.6, duration: 0.03 })
        .to(heroRef.current, { opacity: 1, duration: 0.15 });

      /* 2. Accent bar draw — left to right */
      gsap.fromTo(
        accentBarRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 },
      );

      /* 3. Title glitch — brief x-offset flicker */
      if (titleRef.current) {
        const glitchTl = gsap.timeline({ delay: 0.5 });
        glitchTl
          .to(titleRef.current, { x: -3, skewX: 2, duration: 0.04, ease: 'none' })
          .to(titleRef.current, { x: 4, skewX: -2, duration: 0.04, ease: 'none' })
          .to(titleRef.current, { x: -2, skewX: 1, duration: 0.03, ease: 'none' })
          .to(titleRef.current, { x: 0, skewX: 0, duration: 0.08, ease: 'power2.out' });
      }

      /* 4. Tech tags stagger */
      if (techRef.current) {
        const tags = Array.from(techRef.current.querySelectorAll('span'));
        gsap.fromTo(
          tags,
          { opacity: 0, y: 12, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out', delay: 0.4 },
        );
      }

      /* 5. Panel ScrollTrigger stagger */
      if (panelsRef.current) {
        const panels = Array.from(panelsRef.current.querySelectorAll('.detail-panel'));
        panels.forEach((panel, i) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 32, scale: 0.97 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              delay: i * 0.06,
            },
          );
        });
      }

      /* 6. Metric counters — count up from 0 on scroll */
      document.querySelectorAll('.metric-value').forEach((el) => {
        const text = el.textContent ?? '';
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        if (isNaN(num)) return;
        const suffix = text.replace(/[0-9.]/g, '');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          onUpdate: () => {
            el.textContent = (Number.isInteger(num) ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
          },
        });
      });
    });

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dune-body flex items-center justify-center">
        <div className="text-center neo-tq p-10 rounded-2xl">
          {/* CRT scanlines overlay */}
          <div
            aria-hidden="true"
            className="crt-scanlines pointer-events-none absolute inset-0 rounded-2xl"
          />
          <Terminal className="w-12 h-12 text-dune-turquoise mx-auto mb-4" />
          <h1 className="text-4xl font-serif font-bold text-dune-bone mb-2">404</h1>
          <p className="text-dune-sand/60 mb-8 font-mono text-sm">&gt; PROJECT NOT FOUND_</p>
          <button
            onClick={() => router.push(`/${locale}#projects`)}
            className="px-6 py-3 text-dune-amber border border-dune-amber/30 rounded-lg hover:bg-dune-amber/10 transition-all font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 inline" /> {pd?.back ?? 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  const statusInfo = project.status ? STATUS_MAP[project.status] : null;
  const accent = project.colorAccent ?? '#e8c07a';

  return (
    <main className="min-h-screen bg-dune-body relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ background: `${accent}08` }} />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-dune-turquoise/5 rounded-full blur-3xl" />
      </div>

      {/* CRT full-page vignette */}
      <div aria-hidden="true" className="crt-vignette pointer-events-none fixed inset-0 z-50" />

      {/* Top Bar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dune-body/70 border-b border-dune-amber/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => router.push(`/${locale}#projects`)}
              className="flex items-center text-dune-sand/70 hover:text-dune-turquoise transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-mono">{pd?.back ?? 'Go Back'}</span>
            </button>
            <span className="text-xl font-serif font-bold gradient-text">{t.brand}</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Hero block ── */}
        <div ref={heroRef} className="mb-12">
          {/* Accent bar */}
          <div
            ref={accentBarRef}
            className="h-1.5 rounded-full mb-8 w-32"
            style={{ background: `linear-gradient(90deg, ${accent}, #6ee7d0)` }}
          />

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {statusInfo && (
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border font-mono"
                style={{ background: statusInfo.bg, borderColor: statusInfo.color, color: statusInfo.color }}
              >
                ● {statusInfo.label[locale] ?? statusInfo.label.en}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-amber/15 border border-dune-amber/40 text-dune-amber flex items-center gap-1 font-mono">
                <Star className="w-3 h-3" /> FEATURED
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-lavender/15 border border-dune-lavender/30 text-dune-lavender font-mono">
              {t.projectCategories[project.category] ?? project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-turquoise/15 border border-dune-turquoise/30 text-dune-turquoise font-mono">
              {t.projectDifficulty[project.difficulty]}
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl font-serif font-bold text-dune-bone mb-4"
            style={{ textShadow: `0 0 30px ${accent}40` }}
          >
            {tProject(project.id, locale, 'title', project.title)}
          </h1>
          <p className="text-lg md:text-xl text-dune-sand mb-8 leading-relaxed">
            {project.longDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 flex items-center gap-2 border border-dune-amber/30 rounded-lg text-dune-amber hover:bg-dune-amber/10 hover:border-dune-amber/60 transition-all font-mono text-sm"
              >
                <Github className="w-5 h-5" />
                {pd?.viewCode ?? 'View Code'}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all font-mono text-sm text-dune-body"
                style={{ background: `linear-gradient(135deg, ${accent}, #6ee7d0)`, boxShadow: `0 4px 20px ${accent}30` }}
              >
                <ExternalLink className="w-5 h-5" />
                {pd?.liveDemo ?? 'Live Demo'}
              </a>
            )}
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div ref={techRef} className="mb-12 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm rounded-lg border font-mono"
              style={{
                background: `${accent}10`,
                borderColor: `${accent}30`,
                color: accent,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── Detail Panels ── */}
        <div ref={panelsRef} className="grid lg:grid-cols-2 gap-8">

          {/* Features */}
          <div className="detail-panel neo-tq rounded-2xl p-6 relative overflow-hidden">
            <div aria-hidden="true" className="crt-scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-40" />
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-dune-turquoise" />
              {pd?.features ?? 'Features'}
            </h2>
            <ul className="space-y-3 relative z-10">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand text-sm">
                  <span className="font-mono text-dune-turquoise text-xs mt-0.5 flex-shrink-0">[{String(i+1).padStart(2,'0')}]</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact + Metrics */}
          <div className="detail-panel space-y-6">
            <div className="neo-tq rounded-2xl p-6 relative overflow-hidden">
              <div aria-hidden="true" className="crt-scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-40" />
              <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2 relative z-10">
                <Zap className="w-5 h-5 text-dune-spice" />
                {pd?.impact ?? 'Impact'}
              </h2>
              <p className="text-dune-sand leading-relaxed text-sm relative z-10">{project.impact}</p>
            </div>

            {project.metrics && (
              <div className="neo-tq rounded-2xl p-6 relative overflow-hidden">
                <div aria-hidden="true" className="crt-scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-40" />
                <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2 relative z-10">
                  <BarChart3 className="w-5 h-5 text-dune-amber" />
                  {pd?.metrics ?? 'Metrics'}
                </h2>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {Object.entries(project.metrics).map(([key, val]) =>
                    val ? (
                      <div key={key} className="neomorphic-inset p-3 rounded-xl text-center">
                        <div className="text-xs text-dune-sand/60 uppercase tracking-widest mb-1 font-mono">{key}</div>
                        <div className="metric-value text-dune-turquoise font-bold font-mono">{val}</div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Challenges */}
          <div className="detail-panel neo-tq rounded-2xl p-6 relative overflow-hidden">
            <div aria-hidden="true" className="crt-scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-40" />
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-dune-spice" />
              {pd?.challenges ?? 'Challenges'}
            </h2>
            <ul className="space-y-3 relative z-10">
              {project.challenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand text-sm">
                  <span className="font-mono text-dune-spice text-xs mt-0.5 flex-shrink-0">▶</span>
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="detail-panel neo-tq rounded-2xl p-6 relative overflow-hidden">
            <div aria-hidden="true" className="crt-scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-40" />
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-dune-lavender" />
              {pd?.solutions ?? 'Solutions'}
            </h2>
            <ul className="space-y-3 relative z-10">
              {project.solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand text-sm">
                  <span className="font-mono text-dune-lavender text-xs mt-0.5 flex-shrink-0">✓</span>
                  {sol}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => router.push(`/${locale}#projects`)}
            className="px-8 py-3 text-dune-amber border border-dune-amber/30 rounded-lg hover:bg-dune-amber/10 hover:border-dune-amber/50 transition-all font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            {pd?.back ?? 'Go Back'}
          </button>
        </div>
      </div>
    </main>
  );
}
