'use client';

import { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  Lightbulb,
  Zap,
  Star,
  Terminal,
} from 'lucide-react';
import { getProjectById, getProjectsByCategory, type Project } from '@/data/projects';
import { getDict, type Locale } from '@/i18n/dictionaries';
import { tProject } from '@/i18n/projects';
import TextScramble from '@/components/gsap/TextScramble';
import MagneticButton from '@/components/gsap/MagneticButton';
import AnimatedCounter from '@/components/gsap/AnimatedCounter';
import ScrollReveal from '@/components/gsap/ScrollReveal';
import GlitchText from '@/components/gsap/GlitchText';
import GlowCard from '@/components/gsap/GlowCard';
import ProjectCard3D from '@/components/gsap/ProjectCard3D';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Status config ── */
const STATUS_MAP: Record<string, { label: Record<string, string>; color: string }> = {
  production: { label: { tr: 'CANLI', en: 'LIVE', ru: 'ПРОД' }, color: '#6ee7d0' },
  active: { label: { tr: 'AKTİF', en: 'ACTIVE', ru: 'АКТИВ' }, color: '#a3e635' },
  wip: { label: { tr: 'GELİŞTİRME', en: 'IN PROGRESS', ru: 'РАЗРАБОТКА' }, color: '#ffb641' },
  planning: { label: { tr: 'PLANLAMA', en: 'PLANNING', ru: 'ПЛАН' }, color: '#2ecfff' },
};

/* ── Parse numeric value from metric string ── */
function parseMetricNum(val: string): number | null {
  const match = val.match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : null;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as Locale) || 'tr';
  const slug = params?.slug as string;
  const t = getDict(locale);
  const pd = t.projectDetail;

  const project = getProjectById(slug);

  /* ── Refs ── */
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);

  /* ── GSAP Master Animation ── */
  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      /* 1. CRT Boot — page power-on flash */
      if (pageRef.current) {
        const bootTl = gsap.timeline();
        bootTl
          .fromTo(pageRef.current, { opacity: 0, filter: 'brightness(5) blur(8px)' }, { opacity: 1, filter: 'brightness(1) blur(0px)', duration: 0.3, ease: 'power4.in' });
      }

      /* 2. Hero entrance — sequential boot order */
      if (heroRef.current) {
        const bootItems = heroRef.current.querySelectorAll('[data-boot]');
        gsap.set(bootItems, { opacity: 0, y: 8 });
        bootItems.forEach((el, i) => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.3, delay: 0.3 + i * 0.12, ease: 'steps(3)' });
        });
      }

      /* 3. Accent bar draw */
      if (accentBarRef.current) {
        gsap.fromTo(accentBarRef.current, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.6, ease: 'power2.out', delay: 0.4 });
      }

      /* 4. Tech tags stagger */
      if (techRef.current) {
        const tags = techRef.current.querySelectorAll('.tech-tag');
        gsap.fromTo(tags, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25, stagger: 0.03, ease: 'power2.out', delay: 0.8 });
      }

      /* 5. Architecture nodes stagger */
      if (archRef.current) {
        const nodes = archRef.current.querySelectorAll('.arch-node');
        const connectors = archRef.current.querySelectorAll('.arch-connector');
        gsap.fromTo(nodes, { opacity: 0, y: 16, scale: 0.9 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: archRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
        gsap.fromTo(connectors, { opacity: 0, scaleX: 0 }, {
          opacity: 0.4, scaleX: 1, duration: 0.3, stagger: 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: archRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          delay: 0.3,
        });
      }

      /* 6. Timeline dots stagger */
      const timelineDots = document.querySelectorAll('.tl-item');
      if (timelineDots.length) {
        gsap.fromTo(timelineDots, { opacity: 0, x: -20 }, {
          opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: timelineDots[0], start: 'top 85%', toggleActions: 'play none none none' },
        });
      }

      /* 7. Detail panels scroll reveal */
      const panels = document.querySelectorAll('.detail-panel');
      panels.forEach((panel) => {
        gsap.fromTo(panel, { opacity: 0, y: 32 }, {
          opacity: 1, y: 0, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });

      /* 8. Scan sweep on panel hover */
      panels.forEach((panel) => {
        const scanLine = panel.querySelector('.scan-line');
        if (!scanLine) return;
        panel.addEventListener('mouseenter', () => {
          gsap.fromTo(scanLine, { x: '-120%' }, { x: '120%', duration: 0.6, ease: 'power2.inOut' });
        });
      });
    });

    return () => ctx.revert();
  }, [project]);

  /* ── 404 ── */
  if (!project) {
    return (
      <div className="min-h-screen bg-vault-body flex items-center justify-center">
        <div className="terminal-frame p-10 text-center">
          <div className="terminal-header">
            <span><span className="status-dot" /> SYSTEM ERROR</span>
            <span>ERR_404</span>
          </div>
          <div className="p-8">
            <Terminal className="w-12 h-12 text-vault-turquoise mx-auto mb-4" />
            <h1 className="text-4xl font-terminal font-bold text-vault-bone mb-2">404</h1>
            <p className="text-vault-sand mb-8 font-terminal text-sm">&gt; PROJECT_NOT_FOUND_</p>
            <button
              onClick={() => router.push(`/${locale}#projects`)}
              className="btn-terminal"
            >
              <ArrowLeft className="w-4 h-4 mr-2 inline" /> {pd?.back ?? 'Go Back'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = project.status ? STATUS_MAP[project.status] : null;
  const accent = project.colorAccent ?? '#e8c07a';

  /* Related projects — same category, excluding self */
  const relatedByCategory = getProjectsByCategory(project.category)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);
  const relatedProjects = project.relatedProjects
    ? project.relatedProjects.map(getProjectById).filter(Boolean) as Project[]
    : relatedByCategory;

  /* Challenge-solution pairs */
  const pairs = project.challenges.map((ch, i) => ({
    challenge: ch,
    solution: project.solutions[i] ?? '',
  }));

  return (
    <main ref={pageRef} className="min-h-screen bg-vault-body relative overflow-hidden">
      {/* CRT full-page vignette */}
      <div aria-hidden="true" className="crt-vignette pointer-events-none fixed inset-0 z-50" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ background: `${accent}08` }} />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ background: 'rgba(110,231,208,0.04)' }} />
      </div>

      {/* ── Terminal Top Bar ── */}
      <nav className="fixed top-0 w-full z-40 terminal-header" style={{ padding: '0 1rem', height: '48px', display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => router.push(`/${locale}#projects`)}
          className="flex items-center text-vault-sand hover:text-vault-turquoise transition-colors group mr-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-terminal uppercase tracking-widest">{pd?.back ?? 'Go Back'}</span>
        </button>
        <span className="status-dot" />
        <span className="text-xs font-terminal uppercase tracking-widest text-vault-rust ml-2">
          {project.id.toUpperCase().replace(/-/g, '_')}
        </span>
      </nav>

      <div className="pt-20 pb-20 max-w-5xl mx-auto px-6 relative z-10">

        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <div ref={heroRef} className="mb-12">
          {/* Accent bar */}
          <div
            ref={accentBarRef}
            className="h-[2px] mb-8 w-32"
            style={{ background: `linear-gradient(90deg, ${accent}, #6ee7d0)` }}
          />

          {/* Badges */}
          <div data-boot className="flex flex-wrap items-center gap-2 mb-4">
            {statusInfo && (
              <span
                className="chip-filled"
                style={{ background: `${statusInfo.color}18`, borderColor: `${statusInfo.color}40`, color: statusInfo.color }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: statusInfo.color, boxShadow: `0 0 6px ${statusInfo.color}` }} />
                {statusInfo.label[locale] ?? statusInfo.label.en}
              </span>
            )}
            {project.featured && (
              <span className="chip-filled" style={{ background: 'rgba(255,182,65,0.12)', borderColor: 'rgba(255,182,65,0.4)', color: '#ffb641' }}>
                <Star className="w-2.5 h-2.5" /> FEATURED
              </span>
            )}
            <span className="chip-outline" style={{ borderColor: `${accent}40`, color: accent }}>
              {t.projectCategories[project.category] ?? project.category}
            </span>
            <span className="chip-outline" style={{ borderColor: 'rgba(110,231,208,0.3)', color: '#6ee7d0' }}>
              {t.projectDifficulty[project.difficulty]}
            </span>
            {project.year && (
              <span className="chip-outline" style={{ borderColor: 'rgba(184,115,51,0.3)', color: '#B87333' }}>
                {project.year}
              </span>
            )}
          </div>

          {/* Title — TextScramble reveal */}
          <div data-boot>
            <TextScramble
              text={tProject(project.id, locale, 'title', project.title)}
              tag="h1"
              className="text-3xl md:text-5xl font-terminal font-bold text-vault-bone mb-4"
              delay={0.5}
              duration={1200}
            />
          </div>

          {/* Description */}
          <p data-boot className="text-base md:text-lg text-vault-sand mb-6 leading-relaxed font-terminal" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>
            &gt; {project.longDescription}
          </p>

          {/* Quick stats row */}
          {(project.linesOfCode || project.screens || project.endpoints) && (
            <div data-boot className="flex flex-wrap gap-4 mb-6">
              {project.linesOfCode && (
                <div className="metric-terminal px-4 py-2">
                  <div className="text-[0.6rem] text-vault-sand uppercase tracking-widest mb-1 font-terminal">LOC</div>
                  <div className="text-vault-turquoise font-terminal font-bold text-sm">{project.linesOfCode}</div>
                </div>
              )}
              {project.screens && (
                <div className="metric-terminal px-4 py-2">
                  <div className="text-[0.6rem] text-vault-sand uppercase tracking-widest mb-1 font-terminal">Screens</div>
                  <div className="text-vault-turquoise font-terminal font-bold text-sm">{project.screens}</div>
                </div>
              )}
              {project.endpoints && (
                <div className="metric-terminal px-4 py-2">
                  <div className="text-[0.6rem] text-vault-sand uppercase tracking-widest mb-1 font-terminal">Endpoints</div>
                  <div className="text-vault-turquoise font-terminal font-bold text-sm">{project.endpoints}</div>
                </div>
              )}
            </div>
          )}

          {/* CTA Buttons */}
          <div data-boot className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <MagneticButton>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terminal inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  {pd?.viewCode ?? 'View Code'}
                </a>
              </MagneticButton>
            )}
            {project.liveUrl && (
              <MagneticButton>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-terminal text-sm uppercase tracking-wider text-vault-body font-bold"
                  style={{ background: `linear-gradient(135deg, ${accent}, #6ee7d0)`, borderRadius: '2px' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {pd?.liveDemo ?? 'Live Demo'}
                </a>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            TECH PIPELINE
        ═══════════════════════════════════════════ */}
        <ScrollReveal className="mb-12">
          <div className="terminal-frame">
            <div className="terminal-header">
              <span><span className="status-dot" /> {pd?.techPipeline ?? 'Tech Pipeline'}</span>
              <span className="font-terminal text-[0.6rem] text-vault-sand">{project.technologies.length} MODULES</span>
            </div>
            <div ref={techRef} className="p-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════
            ARCHITECTURE (if available)
        ═══════════════════════════════════════════ */}
        {project.architecture && project.architecture.length > 0 && (
          <ScrollReveal className="mb-12">
            <div className="terminal-frame">
              <div className="terminal-header">
                <span className="flex items-center gap-2">
                  <span className="status-dot" />
                  <GlitchText text={pd?.architecture ?? 'Architecture'} interval={10000} intensity={3} className="text-vault-rust" />
                </span>
                <span className="font-terminal text-[0.6rem] text-vault-sand">{project.architecture.length} LAYERS</span>
              </div>
              <div ref={archRef} className="p-5">
                {/* Desktop: Zigzag pipeline flow */}
                <div className="hidden md:block">
                  <div className="flex flex-wrap items-center gap-2 justify-center">
                    {project.architecture.map((layer, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="arch-node">{layer}</div>
                        {i < project.architecture!.length - 1 && (
                          <span className="arch-connector text-vault-rust font-terminal text-xs opacity-40" style={{ transformOrigin: 'left center' }}>──→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mobile: Vertical flow */}
                <div className="md:hidden space-y-0">
                  {project.architecture.map((layer, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="arch-node w-full text-center">{layer}</div>
                      {i < project.architecture!.length - 1 && (
                        <div className="flow-connector h-6 w-[2px] my-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ═══════════════════════════════════════════
            TIMELINE (if available)
        ═══════════════════════════════════════════ */}
        {project.timeline && project.timeline.length > 0 && (
          <ScrollReveal className="mb-12">
            <div className="terminal-frame">
              <div className="terminal-header">
                <span><span className="status-dot" /> {pd?.timeline ?? 'Timeline'}</span>
                <span className="font-terminal text-[0.6rem] text-vault-sand">{project.timeline.filter(p => p.status === 'done').length}/{project.timeline.length} DONE</span>
              </div>
              <div className="p-5">
                <div className="space-y-0">
                  {project.timeline.map((phase, i) => (
                    <div key={i} className="tl-item flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`timeline-dot ${phase.status}`} />
                        {i < project.timeline!.length - 1 && <div className="timeline-line h-8" />}
                      </div>
                      <div className="pb-4">
                        <span className="font-terminal text-sm" style={{
                          color: phase.status === 'done' ? '#6ee7d0' : phase.status === 'active' ? '#ffb641' : 'rgba(184,115,51,0.5)',
                        }}>
                          {phase.status === 'done' ? '✓ ' : phase.status === 'active' ? '▶ ' : '○ '}
                          {phase.phase}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ═══════════════════════════════════════════
            FEATURES PANEL (GlowCard — turquoise)
        ═══════════════════════════════════════════ */}
        <GlowCard glowColor="#6ee7d0" breatheDuration={4} borderRadius="2px" className="mb-8">
          <div className="detail-panel relative">
            <div className="scan-line" aria-hidden="true" />
            <div className="terminal-header">
              <span><span className="status-dot" /> {pd?.features ?? 'Features'}</span>
              <span className="font-terminal text-[0.6rem] text-vault-sand">{project.features.length} ITEMS</span>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-vault-sand text-sm font-terminal">
                    <span className="text-vault-turquoise text-xs mt-0.5 flex-shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlowCard>

        {/* ═══════════════════════════════════════════
            IMPACT + METRICS (GlowCard — amber)
        ═══════════════════════════════════════════ */}
        <GlowCard glowColor="#ffb641" breatheDuration={3.5} borderRadius="2px" className="mb-8">
          <div className="detail-panel relative">
            <div className="scan-line" aria-hidden="true" />
            <div className="terminal-header">
              <span><span className="status-dot" /> {pd?.impact ?? 'Impact'} & {pd?.metrics ?? 'Metrics'}</span>
            </div>
            <div className="p-5">
              {/* Impact statement */}
              <div className="mb-6 terminal-inset p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-vault-amber flex-shrink-0 mt-0.5" />
                  <p className="text-vault-sand text-sm font-terminal leading-relaxed">&gt; {project.impact}</p>
                </div>
              </div>

              {/* Metrics grid */}
              {project.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(project.metrics).map(([key, val]) => {
                    if (!val) return null;
                    const num = parseMetricNum(val);
                    return (
                      <div key={key} className="metric-terminal">
                        <div className="text-[0.6rem] text-vault-sand uppercase tracking-widest mb-2 font-terminal">{key}</div>
                        {num !== null ? (
                          <AnimatedCounter
                            to={num}
                            suffix={val.replace(String(num), '').trim() ? ' ' + val.replace(String(num), '').trim() : ''}
                            className="text-vault-turquoise font-terminal font-bold text-lg"
                            glowColor="#6ee7d0"
                          />
                        ) : (
                          <div className="text-vault-turquoise font-terminal font-bold text-xs">{val}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </GlowCard>

        {/* ═══════════════════════════════════════════
            CHALLENGES → SOLUTIONS FLOW
        ═══════════════════════════════════════════ */}
        <div className="detail-panel terminal-frame mb-8 relative">
          <div className="scan-line" aria-hidden="true" />
          <div className="terminal-header">
            <span className="flex items-center gap-2">
              <span className="status-dot" />
              <GlitchText text={`${pd?.challenges ?? 'Challenges'} → ${pd?.solutions ?? 'Solutions'}`} interval={8000} intensity={4} className="text-vault-rust" />
            </span>
            <span className="font-terminal text-[0.6rem] text-vault-sand">{pairs.length} PAIRS</span>
          </div>
          <div className="p-5 space-y-6">
            {pairs.map((pair, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-3 items-stretch">
                  {/* Challenge */}
                  <div className="flex-1 terminal-inset p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-vault-rust flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[0.6rem] text-vault-rust uppercase tracking-widest mb-1 font-terminal">CHALLENGE #{String(i + 1).padStart(2, '0')}</div>
                        <p className="text-vault-sand text-sm font-terminal">{pair.challenge}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="hidden md:flex items-center justify-center px-2">
                    <span className="font-terminal text-vault-turquoise text-xs opacity-60">──→</span>
                  </div>
                  <div className="flex md:hidden justify-center py-1">
                    <div className="flow-connector h-6 w-[2px]" />
                  </div>

                  {/* Solution */}
                  <div className="flex-1 terminal-inset p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-4 h-4 text-vault-turquoise flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[0.6rem] text-vault-turquoise uppercase tracking-widest mb-1 font-terminal">SOLUTION #{String(i + 1).padStart(2, '0')}</div>
                        <p className="text-vault-sand text-sm font-terminal">{pair.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            RELATED PROJECTS
        ═══════════════════════════════════════════ */}
        {relatedProjects.length > 0 && (
          <ScrollReveal className="mb-12">
            <div className="mb-4">
              <h3 className="font-terminal text-sm text-vault-rust tracking-widest uppercase">
                <span className="status-dot inline-block mr-2" /> {pd?.relatedProjects ?? 'Related Projects'}
                <span className="text-vault-sand/40 ml-2 text-xs">[{relatedProjects.length} FOUND]</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedProjects.map((rp, i) => (
                <ProjectCard3D
                  key={rp.id}
                  project={rp}
                  locale={locale}
                  categoryLabel={t.projectCategories[rp.category]}
                  difficultyLabel={t.projectDifficulty[rp.difficulty] ?? rp.difficulty}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* ── Back CTA ── */}
        <div className="mt-12 text-center">
          <MagneticButton>
            <button
              onClick={() => router.push(`/${locale}#projects`)}
              className="btn-terminal"
            >
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              {pd?.back ?? 'Go Back'}
            </button>
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
