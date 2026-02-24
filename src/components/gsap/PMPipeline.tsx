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
   Pipeline Stage Data — Gerçek Çalışma Sürecim
   Claude Code + Codex ile birlikte nasıl proje çıkarıyorum.
   Her aşama gerçek projelerden (EstimatePro, bu portföy, Hayalet vb.)
───────────────────────────────────────────────────────── */
const STAGES = [
  {
    id: 'discovery',
    num: 1,
    Icon: Search,
    color: '#6ee7d0',
    label: { tr: 'Keşif', en: 'Discovery', ru: 'Открытие' },
    category: { tr: 'Planlama', en: 'Planning', ru: 'Планирование' },
    title: { tr: 'Fikir & Araştırma', en: 'Ideation & Research', ru: 'Идея и Исследование' },
    approach: {
      tr: 'Her proje bir ihtiyaçla başlıyor. Problemi tanımladıktan sonra Claude Code\'a açıyorum — birlikte rakip analizi yapıyoruz, teknoloji seçeneklerini tartışıyoruz, projenin scope\'unu belirliyoruz. EstimatePro\'da "proje effort tahminleri neden hep tutmuyor?" sorusuyla başladık, Claude ile ML tabanlı çözümün mimarisini birlikte çizdik. Bu portföyü de aynı şekilde: "Fallout temalı 3D portföy" fikrini Claude Code\'da plan modunda detaylandırdık.',
      en: 'Every project starts with a need. After defining the problem, I open Claude Code — together we do competitor analysis, discuss tech options, define project scope. EstimatePro started with "why are project estimates always wrong?" — we designed the ML-based solution architecture together. This portfolio too: the "Fallout-themed 3D portfolio" idea was detailed in Claude Code\'s plan mode.',
      ru: 'Каждый проект начинается с потребности. Определив проблему, открываю Claude Code — вместе анализируем конкурентов, обсуждаем технологии, определяем scope. EstimatePro начался с вопроса "почему оценки проектов всегда неточны?" — вместе спроектировали ML-решение.',
    },
    steps: {
      tr: ['Problem tanımı — Claude Code\'da beyin fırtınası', 'Rakip analizi + mevcut çözüm araştırması', 'Claude Code plan mode → mimari taslak', 'MVP scope: hangi özellikler ilk versiyonda olacak'],
      en: ['Problem definition — brainstorming in Claude Code', 'Competitor analysis + existing solution research', 'Claude Code plan mode → architecture draft', 'MVP scope: which features ship in v1'],
      ru: ['Определение проблемы — мозговой штурм в Claude Code', 'Анализ конкурентов + исследование решений', 'Claude Code plan mode → черновик архитектуры', 'MVP scope: какие фичи войдут в v1'],
    },
    metric: { tr: 'Birkaç saatte net proje planı', en: 'Clear project plan in hours', ru: 'Чёткий план за несколько часов' },
    projects: ['project-effort', 'solar-analysis', 'hayalet'],
    confidence: 97,
  },
  {
    id: 'architecture',
    num: 2,
    Icon: Cpu,
    color: '#e8c07a',
    label: { tr: 'Doküman', en: 'Docs', ru: 'Документы' },
    category: { tr: 'Mimari', en: 'Architecture', ru: 'Архитектура' },
    title: { tr: 'Dokümantasyon & Ajan Sistemi', en: 'Documentation & Agent System', ru: 'Документация и Агентная Система' },
    approach: {
      tr: 'Koda başlamadan önce doküman altyapısını kuruyorum. CLAUDE.md dosyası projenin hafızası — kurallar, tercihler, mimari kararlar buraya yazılıyor. Memory dosyaları ile Claude Code oturumlar arası bağlam koruyor. EstimatePro\'da proje yapısını, veritabanı şemasını, API endpointlerini hep önce dokümante ettik. Bu portföyde de MEMORY.md ile tema renkleri, component yapısı, kullanılan pluginler kayıt altında.',
      en: 'Before touching code, I set up the documentation infrastructure. CLAUDE.md is the project\'s memory — rules, preferences, architectural decisions go here. Memory files let Claude Code maintain context across sessions. In EstimatePro we documented project structure, DB schema, API endpoints first. This portfolio also has MEMORY.md tracking theme colors, components, plugins.',
      ru: 'Перед кодом настраиваю документацию. CLAUDE.md — память проекта: правила, предпочтения, архитектурные решения. Memory-файлы сохраняют контекст между сессиями. В EstimatePro сначала задокументировали структуру, БД, API. В портфолио MEMORY.md хранит цвета, компоненты, плагины.',
    },
    steps: {
      tr: ['CLAUDE.md — proje kuralları + mimari kararlar', 'Memory dosyaları — oturumlar arası bağlam', 'Veritabanı şeması + API tasarımı dokümantasyonu', 'Ajan izinleri (settings.json) — hangi komutlar otomatik'],
      en: ['CLAUDE.md — project rules + architecture decisions', 'Memory files — cross-session context', 'Database schema + API design documentation', 'Agent permissions (settings.json) — which commands auto-approved'],
      ru: ['CLAUDE.md — правила проекта + архитектурные решения', 'Memory-файлы — контекст между сессиями', 'Документация схемы БД + API', 'Разрешения агента (settings.json) — авто-команды'],
    },
    metric: { tr: 'Sıfır bağlam kaybı, oturumlar arası', en: 'Zero context loss across sessions', ru: 'Ноль потери контекста между сессиями' },
    projects: ['project-effort', 'adpro-cli', 'omnisell'],
    confidence: 96,
  },
  {
    id: 'ai-dev',
    num: 3,
    Icon: Bot,
    color: '#c4b5e0',
    label: { tr: 'Kodlama', en: 'Coding', ru: 'Кодинг' },
    category: { tr: 'Geliştirme', en: 'Development', ru: 'Разработка' },
    title: { tr: 'Claude Code + Codex ile Birlikte Kodlama', en: 'Pair Programming with Claude Code + Codex', ru: 'Парное Программирование с Claude Code + Codex' },
    approach: {
      tr: 'Geliştirme süreci tam bir iş birliği. Claude Code\'da task oluşturuyorum, plan modunda mimariyi çiziyoruz, sonra adım adım implemente ediyoruz. Ben yönlendiriyorum, Claude Code yazıyor, birlikte review ediyoruz. Codex\'i paralel görevler için kullanıyorum. Bu portföyün 3D boot sekansı, GSAP animasyonları, prosedürel ses motoru — hepsi Claude Code ile birlikte yazıldı. Cursor, Windsurf, VS Code — onlarca farklı IDE denedim, sonunda Claude Code + Codex kombinasyonuna yerleştim.',
      en: 'Development is true collaboration. I create tasks in Claude Code, design architecture in plan mode, then implement step by step. I direct, Claude Code writes, we review together. I use Codex for parallel tasks. This portfolio\'s 3D boot sequence, GSAP animations, procedural audio engine — all written with Claude Code. Tried dozens of IDEs: Cursor, Windsurf, VS Code — settled on Claude Code + Codex combo.',
      ru: 'Разработка — настоящее сотрудничество. Создаю задачи в Claude Code, проектируем архитектуру в plan mode, затем шаг за шагом реализуем. Я направляю, Claude Code пишет, вместе ревьюим. Codex для параллельных задач. 3D boot, GSAP анимации, аудио-движок — всё написано с Claude Code.',
    },
    steps: {
      tr: ['Claude Code task sistemi — adım adım ilerleme', 'Plan mode → mimari onayı → implementasyon', 'Codex — paralel görevler + worktree izolasyonu', 'Farklı IDE\'ler (Cursor, Windsurf, VS Code) denendi → Claude Code + Codex'],
      en: ['Claude Code task system — step-by-step progress', 'Plan mode → architecture approval → implementation', 'Codex — parallel tasks + worktree isolation', 'Tried IDEs (Cursor, Windsurf, VS Code) → settled on Claude Code + Codex'],
      ru: ['Система задач Claude Code — шаг за шагом', 'Plan mode → утверждение архитектуры → реализация', 'Codex — параллельные задачи + worktree изоляция', 'Пробовал IDE (Cursor, Windsurf, VS Code) → Claude Code + Codex'],
    },
    metric: { tr: 'Saatler içinde tam özellik teslimi', en: 'Full feature delivery in hours', ru: 'Полная фича за часы' },
    projects: ['diagnostic', 'airchitecture', 'n8n-workflows'],
    confidence: 95,
  },
  {
    id: 'git-cicd',
    num: 4,
    Icon: GitBranch,
    color: '#e07850',
    label: { tr: 'Git & CI/CD', en: 'Git & CI/CD', ru: 'Git и CI/CD' },
    category: { tr: 'Altyapı', en: 'Infrastructure', ru: 'Инфраструктура' },
    title: { tr: 'Git Workflow & CI/CD Pipeline', en: 'Git Workflow & CI/CD Pipeline', ru: 'Git Workflow и CI/CD' },
    approach: {
      tr: 'Her değişiklik düzgün bir git sürecinden geçiyor. Feature branch açıyorum, Claude Code ile commit mesajları yazıyorum, PR oluşturuyorum. Vercel\'de her push otomatik preview deploy alıyor. GitHub Actions\'da lint + type check + build pipeline çalışıyor. Bu portföyde Claude Code\'un kendi git entegrasyonunu kullanıyorum — otomatik staging, commit, push. Stitch entegrasyonları: Vercel + GitHub + n8n webhook\'ları birbirine bağlı.',
      en: 'Every change goes through proper git workflow. Feature branches, commit messages with Claude Code, PR creation. Vercel auto-deploys preview on every push. GitHub Actions runs lint + type check + build pipeline. In this portfolio I use Claude Code\'s own git integration — auto staging, commit, push. Stitch integrations: Vercel + GitHub + n8n webhooks all connected.',
      ru: 'Каждое изменение проходит через git workflow. Feature branches, коммиты с Claude Code, создание PR. Vercel авто-деплоит preview при каждом push. GitHub Actions: линт + type check + build. Использую git-интеграцию Claude Code — авто staging, commit, push.',
    },
    steps: {
      tr: ['Feature branch → Claude Code ile geliştirme', 'Otomatik commit + PR (gh cli entegrasyonu)', 'Vercel preview deploy — her PR\'da canlı önizleme', 'GitHub Actions — lint, type check, build pipeline'],
      en: ['Feature branch → development with Claude Code', 'Auto commit + PR (gh cli integration)', 'Vercel preview deploy — live preview on every PR', 'GitHub Actions — lint, type check, build pipeline'],
      ru: ['Feature branch → разработка с Claude Code', 'Авто коммит + PR (gh cli интеграция)', 'Vercel preview deploy — живой предпросмотр', 'GitHub Actions — линт, type check, build'],
    },
    metric: { tr: 'Her push\'ta otomatik deploy', en: 'Auto deploy on every push', ru: 'Авто-деплой при каждом push' },
    projects: ['adpro-cli', 'omnisell', 'indirim-kanallari'],
    confidence: 96,
  },
  {
    id: 'testing',
    num: 5,
    Icon: Shield,
    color: '#e8a0a0',
    label: { tr: 'Test', en: 'Testing', ru: 'Тесты' },
    category: { tr: 'Kalite', en: 'Quality', ru: 'Качество' },
    title: { tr: 'Test & Debug Süreci', en: 'Testing & Debugging', ru: 'Тестирование и Отладка' },
    approach: {
      tr: 'Claude Code build çalıştırıyor, hata alınca kendisi düzeltiyor, Playwright ile tarayıcıda test ediyor. Bu portföyde 3D boot sekansında postprocessing crash vardı — Claude Code Playwright ile yakaladı, CSS alternatifiyle değiştirdi, sıfır hata olana kadar döngüde kaldı. CustomEase hatası, memory leak, GSAP ticker temizliği — hepsi otomatik test döngüsünde bulundu. "Teslim etmeden test et" prensibi.',
      en: 'Claude Code runs builds, auto-fixes errors, tests in browser with Playwright. This portfolio had a postprocessing crash in the 3D boot — Claude Code caught it via Playwright, replaced with CSS alternative, looped until zero errors. CustomEase bug, memory leak, GSAP ticker cleanup — all found in automated test cycles. "Test before you ship" principle.',
      ru: 'Claude Code запускает сборку, автоматически исправляет ошибки, тестирует в браузере через Playwright. В портфолио был краш postprocessing — Claude Code нашёл через Playwright, заменил CSS-альтернативой, крутился в цикле до нуля ошибок.',
    },
    steps: {
      tr: ['npm run build — TypeScript hata kontrolü', 'Playwright headless test — screenshot + console error', 'Hata → otomatik düzeltme → tekrar test döngüsü', 'Sıfır console error olana kadar devam'],
      en: ['npm run build — TypeScript error check', 'Playwright headless test — screenshot + console errors', 'Error → auto-fix → retest loop', 'Continue until zero console errors'],
      ru: ['npm run build — проверка TypeScript', 'Playwright headless тест — скриншот + ошибки консоли', 'Ошибка → авто-исправление → повторный тест', 'Продолжать до нуля ошибок'],
    },
    metric: { tr: 'Sıfır console error ile teslim', en: 'Ship with zero console errors', ru: 'Доставка с нулём ошибок консоли' },
    projects: ['hayalet', 'diagnostic', 'pospro'],
    confidence: 98,
  },
  {
    id: 'integration',
    num: 6,
    Icon: Rocket,
    color: '#ddd0b0',
    label: { tr: 'Entegrasyon', en: 'Integration', ru: 'Интеграция' },
    category: { tr: 'Bağlantı', en: 'Integration', ru: 'Интеграция' },
    title: { tr: 'Servis Entegrasyonları & Otomasyon', en: 'Service Integrations & Automation', ru: 'Интеграция Сервисов' },
    approach: {
      tr: 'Projeler tek başına yaşamıyor — birbirine bağlanıyor. n8n ile servisleri birbirine dikiyorum: Telegram bot → scraper → veritabanı → bildirim. Hayalet\'te MetaTrader 5 + Go backend + PostgreSQL + Telegram alert zinciri var. İndirim Kanalları\'nda 11 scraper → Supabase → Telegram bot pipeline\'ı 7/24 çalışıyor. Slack entegrasyonu, webhook\'lar, cron job\'lar — hepsi Claude Code ile birlikte kuruldu.',
      en: 'Projects don\'t live alone — they connect. I stitch services together with n8n: Telegram bot → scraper → database → notification. Hayalet has MetaTrader 5 + Go backend + PostgreSQL + Telegram alert chain. Indirim Kanallari: 11 scrapers → Supabase → Telegram bot pipeline runs 24/7. Slack integration, webhooks, cron jobs — all set up with Claude Code.',
      ru: 'Проекты не живут отдельно — они связаны. Сшиваю сервисы через n8n: Telegram бот → скрапер → БД → уведомление. Hayalet: MetaTrader 5 + Go + PostgreSQL + Telegram. Indirim Kanallari: 11 скраперов → Supabase → Telegram бот 24/7.',
    },
    steps: {
      tr: ['n8n workflow — servisleri birbirine bağlama', 'Webhook + API entegrasyonları', 'Telegram bot + bildirim pipeline\'ları', 'Cron job\'lar — 7/24 çalışan otomasyon'],
      en: ['n8n workflows — stitching services together', 'Webhook + API integrations', 'Telegram bot + notification pipelines', 'Cron jobs — 24/7 automation'],
      ru: ['n8n workflow — связь сервисов', 'Webhook + API интеграции', 'Telegram бот + уведомления', 'Cron job — автоматизация 24/7'],
    },
    metric: { tr: '50+ aktif otomasyon workflow', en: '50+ active automation workflows', ru: '50+ активных workflow автоматизации' },
    projects: ['n8n-workflows', 'indirim-kanallari', 'slack-integration', 'hayalet'],
    confidence: 96,
  },
  {
    id: 'delivery',
    num: 7,
    Icon: Package,
    color: '#6ee7d0',
    label: { tr: 'Sonuç', en: 'Result', ru: 'Результат' },
    category: { tr: 'Ürün', en: 'Product', ru: 'Продукт' },
    title: { tr: 'Production & Sürekli Geliştirme', en: 'Production & Continuous Improvement', ru: 'Продакшн и Улучшение' },
    approach: {
      tr: 'Proje production\'a çıktıktan sonra bitmez — sürekli geliştirme devam eder. Monitoring kurulur, hatalar izlenir, yeni özellikler eklenir. Bu portföy de öyle: Faz 1\'de 3D boot + GSAP animasyonlar, Faz 2\'de ses motoru + terminal emülatör + perk tree eklendi. Her oturum bir öncekinin üzerine inşa eder — Claude Code\'un memory sistemi sayesinde sıfırdan başlamaya gerek yok. 30+ projede bu döngü işliyor.',
      en: 'A project doesn\'t end at production — continuous improvement continues. Monitoring is set up, bugs tracked, new features added. This portfolio: Phase 1 was 3D boot + GSAP animations, Phase 2 added audio engine + terminal emulator + perk tree. Each session builds on the previous — Claude Code\'s memory system means no starting from scratch. This cycle runs across 30+ projects.',
      ru: 'Проект не заканчивается на продакшне — непрерывное улучшение. Настраивается мониторинг, отслеживаются баги, добавляются фичи. Это портфолио: Фаза 1 — 3D boot + GSAP, Фаза 2 — аудио + терминал + perk tree. Каждая сессия строит на предыдущей — memory Claude Code не теряет контекст.',
    },
    steps: {
      tr: ['Production deploy + monitoring kurulumu', 'Kullanıcı geri bildirimi → yeni özellikler', 'Memory sistemi — her oturum öncekinin devamı', '30+ projede aktif sürekli geliştirme döngüsü'],
      en: ['Production deploy + monitoring setup', 'User feedback → new features', 'Memory system — each session continues from last', '30+ projects in active continuous improvement'],
      ru: ['Deploy в продакшн + мониторинг', 'Обратная связь → новые фичи', 'Memory система — каждая сессия продолжает предыдущую', '30+ проектов в активном цикле улучшения'],
    },
    metric: { tr: '30+ proje, 99%+ uptime', en: '30+ projects, 99%+ uptime', ru: '30+ проектов, 99%+ uptime' },
    projects: ['indirim-kanallari', 'hayalet', 'solar-analysis', 'pospro'],
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
    // Glitch flash + slide in
    tl.fromTo(
      card,
      { opacity: 0, y: 20, filter: 'brightness(2) blur(4px)' },
      { opacity: 1, y: 0, filter: 'brightness(1) blur(0px)', duration: 0.35, ease: 'power3.out' }
    );

    // Stagger steps
    const steps = card.querySelectorAll('.pm-step');
    if (steps.length) {
      tl.fromTo(
        steps,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' },
        '-=0.15'
      );
    }

    // Animate projects tags
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
      // Reset auto-play timer
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
          <div className="flex items-start gap-4 mb-5">
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
              <div className="font-terminal text-xs text-vault-sand/50 tracking-widest">
                {String(stage.num).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Approach text */}
          <div className="terminal-inset p-4 mb-5">
            <p className="text-vault-sand text-sm font-terminal leading-relaxed">
              <span className="text-vault-turquoise">&gt;</span> {stage.approach[loc] || stage.approach.tr}
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid sm:grid-cols-2 gap-2 mb-5">
            {(stage.steps[loc] || stage.steps.tr).map((step, i) => (
              <div key={i} className="pm-step flex items-start gap-3 terminal-inset p-3">
                <span
                  className="flex-shrink-0 font-terminal text-xs font-bold mt-0.5"
                  style={{ color: stage.color }}
                >
                  [{String(i + 1).padStart(2, '0')}]
                </span>
                <span className="text-vault-sand text-sm font-terminal leading-snug">{step}</span>
              </div>
            ))}
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
