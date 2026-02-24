'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search,
  Cpu,
  Bot,
  Rocket,
  Shield,
  GitBranch,
  Package,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';
import type { Locale } from '@/i18n/dictionaries';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────
   Pipeline Stage Data — Technical Workflow
   Claude Code + Codex Development Pipeline
───────────────────────────────────────────────────────── */
const STAGES = [
  {
    id: 'discovery',
    num: 1,
    Icon: Search,
    color: '#6ee7d0',
    label: { tr: 'Keşif', en: 'Discovery', ru: 'Открытие' },
    category: { tr: 'Planlama', en: 'Planning', ru: 'Планирование' },
    title: { tr: 'Araştırma & Scope Tanımı', en: 'Research & Scope Definition', ru: 'Исследование и Scope' },
    approach: {
      tr: 'Problem → Claude Code plan mode → mimari taslak → MVP scope. Rakip analizi, teknoloji karşılaştırması ve fizibilite birlikte yapılır.',
      en: 'Problem → Claude Code plan mode → architecture draft → MVP scope. Competitor analysis, tech comparison and feasibility done together.',
      ru: 'Проблема → Claude Code plan mode → черновик архитектуры → MVP scope. Анализ конкурентов, сравнение технологий.',
    },
    commands: [
      'claude --plan "Analyze market and define MVP scope"',
      'claude "Compare Next.js vs Remix for this use case"',
      'claude "Design database schema for [project]"',
    ],
    techStack: ['Claude Code', 'Plan Mode', 'Web Search', 'Context7'],
    steps: {
      tr: ['claude --plan → mimari tasarım', 'Rakip analizi + stack karşılaştırma', 'DB schema + API kontrat tasarımı', 'MVP scope → task listesi'],
      en: ['claude --plan → architecture design', 'Competitor analysis + stack comparison', 'DB schema + API contract design', 'MVP scope → task list generation'],
      ru: ['claude --plan → архитектура', 'Анализ конкурентов + стеки', 'Схема БД + контракт API', 'MVP scope → список задач'],
    },
    metric: { tr: 'Saatler içinde net mimari plan', en: 'Clear architecture in hours', ru: 'Чёткий план за часы' },
    projects: ['EstimatePro', 'Solar Analysis', 'Hayalet'],
    confidence: 97,
  },
  {
    id: 'architecture',
    num: 2,
    Icon: Cpu,
    color: '#e8c07a',
    label: { tr: 'Doküman', en: 'Docs', ru: 'Документы' },
    category: { tr: 'Mimari', en: 'Architecture', ru: 'Архитектура' },
    title: { tr: 'Ajan Konfigürasyonu & Doküman', en: 'Agent Config & Documentation', ru: 'Конфиг Агента и Документы' },
    approach: {
      tr: 'CLAUDE.md → proje kuralları, mimari kararlar. Memory dosyaları → oturumlar arası bağlam. settings.json → ajan izinleri ve otomasyon.',
      en: 'CLAUDE.md → project rules, architecture decisions. Memory files → cross-session context. settings.json → agent permissions and automation.',
      ru: 'CLAUDE.md → правила, решения. Memory → контекст между сессиями. settings.json → разрешения агента.',
    },
    commands: [
      'vim CLAUDE.md  # Project rules + architecture',
      'ls .claude/memory/  # Persistent context files',
      'cat .claude/settings.json  # Agent permissions',
    ],
    techStack: ['CLAUDE.md', 'Memory System', 'settings.json', 'TypeScript'],
    steps: {
      tr: ['CLAUDE.md → kurallar + mimari kararlar', 'Memory → stack, patterns, debug notları', 'settings.json → allowedTools config', 'TypeScript interface + Prisma schema'],
      en: ['CLAUDE.md → rules + architecture decisions', 'Memory → stack, patterns, debug notes', 'settings.json → allowedTools config', 'TypeScript interfaces + Prisma schema'],
      ru: ['CLAUDE.md → правила + решения', 'Memory → стек, паттерны, заметки', 'settings.json → allowedTools конфиг', 'TypeScript интерфейсы + Prisma'],
    },
    metric: { tr: 'Sıfır bağlam kaybı', en: 'Zero context loss', ru: 'Ноль потери контекста' },
    projects: ['EstimatePro', 'AdPro CLI', 'OmniSell'],
    confidence: 96,
  },
  {
    id: 'ai-dev',
    num: 3,
    Icon: Bot,
    color: '#c4b5e0',
    label: { tr: 'Kodlama', en: 'Coding', ru: 'Кодинг' },
    category: { tr: 'Geliştirme', en: 'Development', ru: 'Разработка' },
    title: { tr: 'Claude Code + Codex Geliştirme', en: 'Claude Code + Codex Development', ru: 'Разработка с Claude Code + Codex' },
    approach: {
      tr: 'Task sistemi ile adım adım. Plan mode → onay → implementasyon. Codex paralel worktree izolasyonu. Cursor, Windsurf denendi → Claude Code + Codex.',
      en: 'Step-by-step with task system. Plan mode → approval → implementation. Codex parallel worktree isolation. Tried Cursor, Windsurf → Claude Code + Codex.',
      ru: 'Пошагово через задачи. Plan mode → утверждение → реализация. Codex worktree изоляция. Пробовал Cursor, Windsurf → Claude Code + Codex.',
    },
    commands: [
      'claude "Implement auth module following CLAUDE.md"',
      'claude --plan "Refactor to server components"',
      'codex "Add unit tests for UserService" --worktree',
    ],
    techStack: ['Claude Code', 'Codex', 'Worktree', 'Task System'],
    steps: {
      tr: ['claude --plan → onay → implementasyon', 'TaskCreate → adım adım ilerleme takibi', 'codex --worktree → paralel izolasyon', 'Otomatik refactoring + type-safe migration'],
      en: ['claude --plan → approval → implementation', 'TaskCreate → step-by-step progress tracking', 'codex --worktree → parallel isolation', 'Auto refactoring + type-safe migrations'],
      ru: ['claude --plan → утверждение → реализация', 'TaskCreate → пошаговый прогресс', 'codex --worktree → параллельная изоляция', 'Авто-рефакторинг + type-safe миграции'],
    },
    metric: { tr: 'Saatler içinde feature teslimi', en: 'Feature delivery in hours', ru: 'Фича за часы' },
    projects: ['Diagnostic', 'Airchitecture', 'n8n Workflows'],
    confidence: 95,
  },
  {
    id: 'git-cicd',
    num: 4,
    Icon: GitBranch,
    color: '#e07850',
    label: { tr: 'Git & CI/CD', en: 'Git & CI/CD', ru: 'Git и CI/CD' },
    category: { tr: 'Altyapı', en: 'Infrastructure', ru: 'Инфраструктура' },
    title: { tr: 'Git Workflow & Auto Deploy', en: 'Git Workflow & Auto Deploy', ru: 'Git Workflow и Авто-деплой' },
    approach: {
      tr: 'Feature branch → Claude Code geliştirme → otomatik commit + PR. Vercel her push preview deploy. GitHub Actions lint + type check + build.',
      en: 'Feature branch → Claude Code dev → auto commit + PR. Vercel preview deploy per push. GitHub Actions lint + type check + build.',
      ru: 'Feature branch → разработка → авто коммит + PR. Vercel preview deploy. GitHub Actions lint + type check + build.',
    },
    commands: [
      'git checkout -b feat/new-feature',
      'claude "Implement and commit when ready"',
      'gh pr create --title "feat: add auth" --body "..."',
      'vercel --prod  # Triggered on merge to main',
    ],
    techStack: ['Git', 'GitHub Actions', 'Vercel', 'gh CLI'],
    steps: {
      tr: ['git checkout -b feat/* → izole branch', 'Claude Code otomatik commit + mesaj', 'gh pr create → review + merge', 'Vercel auto-deploy → preview + prod'],
      en: ['git checkout -b feat/* → isolated branch', 'Claude Code auto commit + message', 'gh pr create → review + merge', 'Vercel auto-deploy → preview + prod'],
      ru: ['git checkout -b feat/* → изолированная ветка', 'Claude Code авто коммит + сообщение', 'gh pr create → ревью + merge', 'Vercel авто-деплой → preview + prod'],
    },
    metric: { tr: 'Her push otomatik deploy', en: 'Auto deploy on every push', ru: 'Авто-деплой при push' },
    projects: ['AdPro CLI', 'OmniSell', 'İndirim Kanalları'],
    confidence: 96,
  },
  {
    id: 'testing',
    num: 5,
    Icon: Shield,
    color: '#e8a0a0',
    label: { tr: 'Test', en: 'Testing', ru: 'Тесты' },
    category: { tr: 'Kalite', en: 'Quality', ru: 'Качество' },
    title: { tr: 'Otomatik Test & Debug Loop', en: 'Automated Test & Debug Loop', ru: 'Авто-тест и Отладка' },
    approach: {
      tr: 'Build → Playwright headless test → screenshot + console error → hata varsa otomatik fix → retest. Sıfır error olana kadar döngü.',
      en: 'Build → Playwright headless test → screenshot + console errors → auto-fix if errors → retest. Loop until zero errors.',
      ru: 'Build → Playwright headless → скриншот + ошибки → авто-fix → повтор. Цикл до нуля ошибок.',
    },
    commands: [
      'npm run build  # TypeScript + ESLint check',
      'npx playwright test --headed  # Visual verify',
      'claude "Fix build errors and rerun tests"',
      'npx playwright test --grep @smoke  # Smoke suite',
    ],
    techStack: ['Playwright', 'TypeScript', 'ESLint', 'npm scripts'],
    steps: {
      tr: ['npm run build → TS + ESLint kontrolü', 'npx playwright test → screenshot + error log', 'Hata → claude fix → retest döngüsü', 'Sıfır error + görsel doğrulama'],
      en: ['npm run build → TS + ESLint check', 'npx playwright test → screenshot + error log', 'Error → claude fix → retest loop', 'Zero errors + visual verification'],
      ru: ['npm run build → TS + ESLint проверка', 'npx playwright test → скриншот + логи', 'Ошибка → claude fix → повтор', 'Ноль ошибок + визуальная проверка'],
    },
    metric: { tr: 'Sıfır error ile teslim', en: 'Ship with zero errors', ru: 'Ноль ошибок' },
    projects: ['Hayalet', 'Diagnostic', 'PosPro'],
    confidence: 98,
  },
  {
    id: 'integration',
    num: 6,
    Icon: Rocket,
    color: '#ddd0b0',
    label: { tr: 'Entegrasyon', en: 'Integration', ru: 'Интеграция' },
    category: { tr: 'Bağlantı', en: 'Integration', ru: 'Интеграция' },
    title: { tr: 'Servis Orkestrasyonu', en: 'Service Orchestration', ru: 'Оркестрация Сервисов' },
    approach: {
      tr: 'n8n workflow engine ile servisleri bağlar. Webhook → scraper → DB → bildirim pipeline. Telegram, Slack, MT5 entegrasyonları 7/24.',
      en: 'Services connected via n8n workflow engine. Webhook → scraper → DB → notification pipelines. Telegram, Slack, MT5 integrations 24/7.',
      ru: 'Сервисы через n8n. Webhook → скрапер → БД → уведомление. Telegram, Slack, MT5 24/7.',
    },
    commands: [
      'n8n start  # Self-hosted workflow engine',
      'curl -X POST https://n8n.io/webhook/trigger',
      'docker compose up -d  # MT5+Go+PostgreSQL stack',
      'pm2 start ecosystem.config.js  # Daemon mgmt',
    ],
    techStack: ['n8n', 'Docker', 'Telegram API', 'Webhooks', 'pm2'],
    steps: {
      tr: ['n8n workflow → servis orkestrasyonu', 'Webhook + REST API bağlantıları', 'docker compose → multi-service stack', 'pm2 / cron → 7/24 daemon management'],
      en: ['n8n workflows → service orchestration', 'Webhook + REST API connections', 'docker compose → multi-service stack', 'pm2 / cron → 24/7 daemon management'],
      ru: ['n8n workflow → оркестрация', 'Webhook + REST API', 'docker compose → multi-service стек', 'pm2 / cron → 24/7 управление'],
    },
    metric: { tr: '50+ aktif workflow', en: '50+ active workflows', ru: '50+ активных workflow' },
    projects: ['n8n Workflows', 'İndirim Kanalları', 'Hayalet'],
    confidence: 96,
  },
  {
    id: 'delivery',
    num: 7,
    Icon: Package,
    color: '#6ee7d0',
    label: { tr: 'Sonuç', en: 'Result', ru: 'Результат' },
    category: { tr: 'Ürün', en: 'Product', ru: 'Продукт' },
    title: { tr: 'Production & Sürekli İterasyon', en: 'Production & Continuous Iteration', ru: 'Продакшн и Итерация' },
    approach: {
      tr: 'Deploy → monitoring → hata takibi → sürekli iyileştirme. Memory sistemi bağlamı korur. Her oturum öncekinin devamı. 30+ projede aktif döngü.',
      en: 'Deploy → monitoring → bug tracking → continuous improvement. Memory system preserves context. Each session builds on last. 30+ projects active.',
      ru: 'Деплой → мониторинг → трекинг → улучшение. Memory сохраняет контекст. Каждая сессия продолжает предыдущую. 30+ проектов.',
    },
    commands: [
      'vercel logs hmztrhn.vercel.app  # Prod logs',
      'claude "Analyze perf metrics and optimize"',
      'gh issue create --title "Bug: ..." --body "..."',
      'claude --resume  # Continue from last session',
    ],
    techStack: ['Vercel', 'Monitoring', 'Memory', 'gh CLI'],
    steps: {
      tr: ['vercel --prod → deploy + monitoring', 'gh issue → bug tracking + feature req', 'claude --resume → oturum arası süreklilik', '30+ projede aktif iterasyon'],
      en: ['vercel --prod → deploy + monitoring', 'gh issue → bug tracking + feature requests', 'claude --resume → cross-session continuity', '30+ projects active iteration'],
      ru: ['vercel --prod → деплой + мониторинг', 'gh issue → баг-трекинг + фичи', 'claude --resume → межсессионная работа', '30+ проектов активный цикл'],
    },
    metric: { tr: '30+ proje, 99%+ uptime', en: '30+ projects, 99%+ uptime', ru: '30+ проектов, 99%+ uptime' },
    projects: ['İndirim Kanalları', 'Hayalet', 'Solar Analysis'],
    confidence: 98,
  },
];

const AUTO_PLAY_INTERVAL = 6000;

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
interface PMPipelineProps {
  locale: Locale;
}

export default function PMPipeline({ locale }: PMPipelineProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isVisible = useRef(false);

  const stage = STAGES[activeIdx];
  const StageIcon = stage.Icon;
  const loc = locale as keyof typeof stage.label;

  /* ── Auto-play timer ── */
  useEffect(() => {
    if (!isPlaying || !isVisible.current) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STAGES.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, activeIdx]);

  /* ── Progress bar animation ── */
  useEffect(() => {
    if (!progressRef.current || !isPlaying) return;
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: AUTO_PLAY_INTERVAL / 1000, ease: 'linear' }
    );
  }, [activeIdx, isPlaying]);

  /* ── Scroll-triggered entrance ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => { isVisible.current = true; },
      onLeaveBack: () => { isVisible.current = false; },
    });

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
      }
    );

    /* Stagger node buttons */
    gsap.fromTo(
      nodeRefs.current.filter(Boolean),
      { opacity: 0, scale: 0.6, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.8)',
        scrollTrigger: { trigger: el, start: 'top 78%', toggleActions: 'play none none none' },
      }
    );

    /* SVG line draw */
    const line = lineRef.current;
    if (line) {
      const length = 1000;
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: el, start: 'top 78%', toggleActions: 'play none none none' },
      });
    }

    return () => { st.kill(); };
  }, []);

  /* ── Animate particle along pipeline on stage change ── */
  useEffect(() => {
    const particle = particleRef.current;
    if (!particle) return;

    const targetX = (activeIdx / (STAGES.length - 1)) * 100;
    gsap.to(particle, {
      left: `${targetX}%`,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [activeIdx]);

  /* ── Animate card in when stage changes ── */
  const animateCard = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    const tl = gsap.timeline();
    tl.fromTo(
      card,
      { opacity: 0, y: 20, filter: 'brightness(2) blur(4px)' },
      { opacity: 1, y: 0, filter: 'brightness(1) blur(0px)', duration: 0.35, ease: 'power3.out' }
    );

    const steps = card.querySelectorAll('.pm-step');
    if (steps.length) {
      tl.fromTo(
        steps,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' },
        '-=0.15'
      );
    }

    const cmdLines = card.querySelectorAll('.pm-cmd-line');
    if (cmdLines.length) {
      tl.fromTo(
        cmdLines,
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.25, stagger: 0.05, ease: 'power2.out' },
        '-=0.2'
      );
    }

    const tags = card.querySelectorAll('.pm-project-tag');
    if (tags.length) {
      tl.fromTo(
        tags,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.2, stagger: 0.04, ease: 'back.out(1.5)' },
        '-=0.2'
      );
    }
  }, []);

  useEffect(() => {
    animateCard();
  }, [activeIdx, animateCard]);

  const selectStage = useCallback(
    (idx: number) => {
      setActiveIdx(idx);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    },
    []
  );

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  return (
    <div ref={containerRef} className="opacity-0">
      {/* ── Pipeline nodes row ── */}
      <div className="relative mb-8 px-4">
        {/* SVG connector line */}
        <svg
          className="absolute top-1/2 left-0 right-0 w-full pointer-events-none"
          style={{ height: '2px', transform: 'translateY(-50%)' }}
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0" y1="1" x2="1000" y2="1" stroke="rgba(184,115,51,0.15)" strokeWidth="2" />
          <line
            ref={lineRef}
            x1="0" y1="1" x2="1000" y2="1"
            stroke="url(#pipeline-grad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pipeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7d0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e8c07a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6ee7d0" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Travelling particle */}
        <div
          ref={particleRef}
          className="motion-particle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
          style={{ left: '0%', width: 8, height: 8 }}
        />

        {/* Node buttons */}
        <div className="flex justify-between items-center relative z-10">
          {STAGES.map((s, i) => {
            const Ico = s.Icon;
            const isActive = activeIdx === i;
            const isPast = i < activeIdx;
            return (
              <button
                key={s.id}
                ref={(el) => { nodeRefs.current[i] = el; }}
                onClick={() => selectStage(i)}
                aria-pressed={isActive}
                className="flex flex-col items-center gap-1.5 group focus:outline-none"
                style={{ opacity: 0 }}
              >
                <div
                  className="relative flex items-center justify-center transition-all duration-300"
                  style={{
                    width: isActive ? 48 : 40,
                    height: isActive ? 48 : 40,
                    borderRadius: '2px',
                    background: isActive ? `${s.color}18` : isPast ? 'var(--vault-surface)' : 'var(--vault-card)',
                    border: `2px solid ${isActive ? s.color : isPast ? s.color + '60' : s.color + '25'}`,
                    boxShadow: isActive
                      ? `0 0 0 3px ${s.color}15, 0 0 20px ${s.color}30, inset 0 0 15px rgba(0,0,0,0.4)`
                      : `inset 0 0 10px rgba(0,0,0,0.3)`,
                  }}
                >
                  <Ico
                    style={{
                      width: 16,
                      height: 16,
                      color: isActive ? s.color : isPast ? `${s.color}90` : `${s.color}40`,
                      transition: 'color 0.3s',
                      filter: isActive ? `drop-shadow(0 0 4px ${s.color})` : 'none',
                    }}
                  />
                  {isActive && (
                    <span
                      className="absolute -top-1 -right-1 w-2 h-2"
                      style={{
                        background: s.color,
                        boxShadow: `0 0 6px ${s.color}`,
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </div>
                <span
                  className="text-xs font-terminal hidden sm:block transition-all duration-300"
                  style={{
                    color: isActive ? s.color : isPast ? `${s.color}70` : 'rgba(160,152,128,0.35)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.1em',
                    fontWeight: isActive ? 700 : 400,
                    textShadow: isActive ? `0 0 8px ${s.color}40` : 'none',
                  }}
                >
                  {s.label[loc] || s.label.tr}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Auto-play progress bar ── */}
      <div className="relative h-[2px] mx-4 mb-6 bg-vault-rust/10">
        {isPlaying && (
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 right-0"
            style={{
              background: `linear-gradient(90deg, ${stage.color}60, ${stage.color})`,
              transformOrigin: 'left center',
            }}
          />
        )}
      </div>

      {/* ── Active stage detail card — Terminal Frame ── */}
      <div
        ref={cardRef}
        className="terminal-frame relative overflow-hidden"
        style={{ minHeight: 340 }}
      >
        {/* Scan sweep */}
        <div className="scan-line" aria-hidden="true" />

        {/* CRT scanline overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px)',
            zIndex: 0,
          }}
        />

        {/* Colored glow overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${stage.color}12 0%, transparent 65%)`,
            zIndex: 0,
          }}
        />

        {/* Terminal header */}
        <div className="terminal-header">
          <div className="flex items-center gap-2">
            <span className="status-dot" style={{ background: stage.color, boxShadow: `0 0 6px ${stage.color}` }} />
            <span className="text-vault-rust">
              STAGE_{String(stage.num).padStart(2, '0')} // {(stage.category[loc] || stage.category.tr).toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="chip-filled"
              style={{ background: `${stage.color}15`, borderColor: `${stage.color}40`, color: stage.color }}
            >
              {stage.confidence}% CONF
            </span>
            <button
              onClick={toggleAutoPlay}
              className="flex items-center justify-center w-6 h-6 transition-colors hover:text-vault-turquoise"
              style={{ color: 'var(--vault-sand)' }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause style={{ width: 12, height: 12 }} /> : <Play style={{ width: 12, height: 12 }} />}
            </button>
          </div>
        </div>

        <div className="relative z-10 p-5 md:p-7">
          {/* Title row */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center terminal-inset"
              style={{ border: `1px solid ${stage.color}30` }}
            >
              <StageIcon style={{ width: 22, height: 22, color: stage.color, filter: `drop-shadow(0 0 6px ${stage.color})` }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="text-lg md:text-xl font-terminal font-bold text-vault-bone tracking-wide mb-1"
                style={{ textShadow: `0 0 15px ${stage.color}20` }}
              >
                {stage.title[loc] || stage.title.tr}
              </h3>
              <div className="flex items-center gap-2">
                <span className="font-terminal text-xs text-vault-sand/50 tracking-widest">
                  {String(stage.num).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
                </span>
                <span className="text-vault-sand/20">|</span>
                <div className="flex flex-wrap gap-1">
                  {stage.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-terminal text-[0.5rem] px-1.5 py-0.5 tracking-wider"
                      style={{
                        color: stage.color,
                        background: `${stage.color}10`,
                        border: `1px solid ${stage.color}25`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Approach text — concise */}
          <div className="terminal-inset p-3 mb-4">
            <p className="text-vault-sand text-sm font-terminal leading-relaxed">
              <span className="text-vault-turquoise">&gt;</span> {stage.approach[loc] || stage.approach.tr}
            </p>
          </div>

          {/* Two-column layout: Commands + Steps */}
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {/* CLI Commands */}
            <div className="terminal-inset p-3">
              <div className="font-terminal text-[0.55rem] uppercase tracking-widest mb-2" style={{ color: `${stage.color}60` }}>
                TERMINAL
              </div>
              <div className="space-y-1.5">
                {stage.commands.map((cmd, i) => {
                  const commentIdx = cmd.indexOf('  #');
                  const cmdText = commentIdx > -1 ? cmd.slice(0, commentIdx) : cmd;
                  const comment = commentIdx > -1 ? cmd.slice(commentIdx) : '';
                  return (
                    <div key={i} className="pm-cmd-line flex items-start gap-2 font-terminal text-xs">
                      <span style={{ color: stage.color }}>$</span>
                      <div className="min-w-0">
                        <span className="text-vault-bone break-all">{cmdText}</span>
                        {comment && <span className="text-vault-sand/30">{comment}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-2">
              {(stage.steps[loc] || stage.steps.tr).map((step, i) => (
                <div key={i} className="pm-step flex items-start gap-3 terminal-inset p-2.5">
                  <span
                    className="flex-shrink-0 font-terminal text-xs font-bold mt-0.5"
                    style={{ color: stage.color }}
                  >
                    [{String(i + 1).padStart(2, '0')}]
                  </span>
                  <span className="text-vault-sand text-xs font-terminal leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer: projects + outcome */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {stage.projects.map((p) => (
                <span
                  key={p}
                  className="pm-project-tag tech-tag"
                  style={{ color: stage.color, borderColor: `${stage.color}30` }}
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="terminal-inset px-4 py-2 flex items-center gap-2">
              <ChevronRight style={{ width: 14, height: 14, color: stage.color }} />
              <div>
                <div className="text-[0.55rem] font-terminal uppercase tracking-widest" style={{ color: `${stage.color}60` }}>
                  OUTCOME
                </div>
                <div
                  className="font-terminal font-bold text-xs"
                  style={{ color: stage.color, textShadow: `0 0 8px ${stage.color}40` }}
                >
                  {stage.metric[loc] || stage.metric.tr}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stage navigation indicators ── */}
      <div className="flex justify-center gap-2 mt-5">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => selectStage(i)}
            className="transition-all duration-300"
            style={{
              width: activeIdx === i ? 28 : 6,
              height: 6,
              borderRadius: '1px',
              background: activeIdx === i ? s.color : `${s.color}25`,
              boxShadow: activeIdx === i ? `0 0 8px ${s.color}40` : 'none',
            }}
            aria-label={`Stage ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
