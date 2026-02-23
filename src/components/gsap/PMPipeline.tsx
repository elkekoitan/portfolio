'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search,
  Cpu,
  Users,
  Globe,
  AlertTriangle,
  GitBranch,
  Package,
  ChevronRight,
} from 'lucide-react';
import type { Locale } from '@/i18n/dictionaries';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────
   Pipeline Stage Data — 7 PM workflow stages
───────────────────────────────────────────────────────── */
const STAGES = [
  {
    id: 'discovery',
    num: 1,
    Icon: Search,
    color: '#6ee7d0',
    label: { tr: 'Keşif', en: 'Discovery', ru: 'Открытие' },
    category: { tr: 'Planlama', en: 'Planning', ru: 'Планирование' },
    title: { tr: 'Keşif & Kapsam', en: 'Discovery & Scope', ru: 'Открытие и Охват' },
    approach: {
      tr: 'Müşteriyle oturur, gerçek problemi buluruz. "5 Neden" tekniği ile yüzeysel isteğin altındaki asıl ihtiyacı keşfederiz. Solar Analysis\'te müşteri "panel izleme istiyorum" dedi — asıl ihtiyaç: bakım maliyetlerini %40 düşürmekti. Teknik çözümü konuşmadan önce iş değerini netleştiririm.',
      en: 'I sit with the client to discover the real problem. Using "5 Whys" to find the actual need beneath the surface request. Solar Analysis client wanted "panel monitoring" — actual need was reducing maintenance costs by 40%.',
      ru: 'Сажусь с клиентом, нахожу настоящую проблему. Техника "5 почему" раскрывает реальную потребность. Клиент хотел "мониторинг панелей" — на самом деле нужно было снизить расходы на обслуживание на 40%.',
    },
    steps: {
      tr: [
        'Müşteri briefing — "gerçek ihtiyaç" tespiti',
        'Problem-Solution fit analizi',
        'MVP scope + önceliklendirme matrisi',
        'Sprint 0: PoC + risk haritası',
      ],
      en: [
        'Client briefing — real need discovery',
        'Problem-Solution fit analysis',
        'MVP scope + prioritization matrix',
        'Sprint 0: PoC + risk mapping',
      ],
      ru: [
        'Брифинг клиента — выявление реальной потребности',
        'Анализ соответствия проблема-решение',
        'MVP scope + матрица приоритетов',
        'Sprint 0: PoC + карта рисков',
      ],
    },
    metric: { tr: '2-3 günde net kapsam', en: 'Clear scope in 2-3 days', ru: 'Четкий охват за 2-3 дня' },
    projects: ['solar-analysis', 'diagnostic', 'pospro'],
    confidence: 96,
  },
  {
    id: 'architecture',
    num: 2,
    Icon: Cpu,
    color: '#e8c07a',
    label: { tr: 'Mimari', en: 'Architecture', ru: 'Архитектура' },
    category: { tr: 'Teknik', en: 'Technical', ru: 'Техническое' },
    title: { tr: 'Teknik Mimari', en: 'Technical Architecture', ru: 'Техническая Архитектура' },
    approach: {
      tr: 'Stack seçimi üç kriter: ekip yetkinliği, ekosistem olgunluğu, ölçeklenebilirlik. PosPro\'da cross-platform zorunluydu — Flutter. Hayalet\'te Go — concurrency desteği mükemmel. Hype\'a kapılmam; kanıtlanmış teknolojileri tercih ederim, ama yenilikçi olmaktan korkmam.',
      en: 'Three criteria for stack selection: team competency, ecosystem maturity, scalability. PosPro needed cross-platform — Flutter. Hayalet needed concurrency — Go. I prefer proven tech but don\'t fear innovation.',
      ru: 'Три критерия: компетентность команды, зрелость экосистемы, масштабируемость. PosPro — Flutter для кросс-платформы. Hayalet — Go для параллелизма.',
    },
    steps: {
      tr: [
        'Ekip yetkinlik analizi — "bunu yapabilir miyiz?"',
        'Build vs Buy kararı',
        'Ölçeklenebilirlik senaryoları',
        'PoC ile teknik doğrulama',
      ],
      en: [
        'Team competency analysis — "can we do this?"',
        'Build vs Buy decision',
        'Scalability scenario planning',
        'Technical validation via PoC',
      ],
      ru: [
        'Анализ компетентности команды',
        'Решение Build vs Buy',
        'Планирование сценариев масштабируемости',
        'Техническая валидация через PoC',
      ],
    },
    metric: { tr: 'İlk haftada onaylı mimari', en: 'Approved architecture in week 1', ru: 'Утвержд. архитектура за 1 неделю' },
    projects: ['hayalet', 'pospro', 'go-trade', 'adpro-cli'],
    confidence: 96,
  },
  {
    id: 'team',
    num: 3,
    Icon: Users,
    color: '#c4b5e0',
    label: { tr: 'Takım', en: 'Team', ru: 'Команда' },
    category: { tr: 'Takım', en: 'Team', ru: 'Команда' },
    title: { tr: 'Takım Koordinasyonu', en: 'Team Coordination', ru: 'Координация Команды' },
    approach: {
      tr: 'Uzaktan ekiplerde asenkron iletişim şart. Notion\'da görev takibi, haftada 2 sync toplantı, her geliştirici için "success criteria" dökümanı. Barter-Qween\'de 4 ülke, 6 geliştirici, sıfır "ben bilmiyordum" sürprizi.',
      en: 'Async communication is essential for remote teams. Task tracking in Notion, 2 syncs per week, "success criteria" doc for each developer. Barter-Qween: 4 countries, 6 developers, zero "I didn\'t know" surprises.',
      ru: 'Асинхронная коммуникация обязательна. Отслеживание задач в Notion, 2 синхронных встречи в неделю. Barter-Qween: 4 страны, 6 разработчиков.',
    },
    steps: {
      tr: [
        'Rol tanımı + RACI matrisi',
        'Async iletişim protokolü',
        'Knowledge sharing — haftalık tech talk',
        'Retrospektif + sürekli iyileştirme',
      ],
      en: [
        'Role definition + RACI matrix',
        'Async communication protocol',
        'Knowledge sharing — weekly tech talk',
        'Retrospective + continuous improvement',
      ],
      ru: [
        'Определение ролей + RACI матрица',
        'Протокол асинхронной коммуникации',
        'Knowledge sharing — еженедельный tech talk',
        'Ретроспектива + непрерывное улучшение',
      ],
    },
    metric: { tr: 'Sıfır iletişim kaynaklı bug', en: 'Zero communication-caused bugs', ru: 'Ноль ошибок из-за коммуникации' },
    projects: ['barter-qween', 'firealert', 'omnisell'],
    confidence: 94,
  },
  {
    id: 'client',
    num: 4,
    Icon: Globe,
    color: '#e07850',
    label: { tr: 'Müşteri', en: 'Client', ru: 'Клиент' },
    category: { tr: 'Müşteri', en: 'Client', ru: 'Клиент' },
    title: { tr: 'Müşteri İletişimi', en: 'Client Communication', ru: 'Коммуникация с Клиентом' },
    approach: {
      tr: 'Scope creep normal — kontrol altına almak önemli. OmniSell\'de müşteri haftada ortalama 3 yeni istek getirdi. Change request formu + etki analizi + süre tahmini → müşteri bilgilendirilmiş karar veriyor. Sprint ortasında değişiklik = hayır.',
      en: 'Scope creep is normal — controlling it is key. OmniSell client brought 3 new requests per week on average. CR form + impact analysis + time estimate → client makes informed decisions. Mid-sprint changes = no.',
      ru: 'Scope creep нормален — важно его контролировать. Форма CR + анализ влияния + оценка времени → клиент принимает взвешенное решение.',
    },
    steps: {
      tr: [
        'Haftalık demo + feedback loop',
        'Change Request formu — her istek kayıt',
        'Etki analizi: süre + maliyet + risk',
        'Önceliklendirme: acil/önemli matrisi',
      ],
      en: [
        'Weekly demo + feedback loop',
        'Change Request form — every request logged',
        'Impact analysis: time + cost + risk',
        'Prioritization: urgency/importance matrix',
      ],
      ru: [
        'Еженедельное демо + обратная связь',
        'Форма CR — каждый запрос записан',
        'Анализ влияния: время + стоимость + риск',
        'Матрица приоритетов',
      ],
    },
    metric: { tr: 'Sıfır sürpriz teslimat', en: 'Zero surprise delivery', ru: 'Ноль сюрпризов при доставке' },
    projects: ['omnisell', 'oto-mansuroglu', 'mandira-claude'],
    confidence: 95,
  },
  {
    id: 'risk',
    num: 5,
    Icon: AlertTriangle,
    color: '#e8a0a0',
    label: { tr: 'Risk', en: 'Risk', ru: 'Риск' },
    category: { tr: 'Risk', en: 'Risk', ru: 'Риск' },
    title: { tr: 'Risk Yönetimi', en: 'Risk Management', ru: 'Управление Рисками' },
    approach: {
      tr: 'Risk tablosu her sprintte güncellenir. Hayalet\'te gece 3\'te production bug: named pipe bridge koptu, pozisyonlar açık kaldı. Otomatik risk yönetimi devreye girdi, hotfix 2 saatte. Postmortem → monitoring eklendi. Her bug\'dan bir öğrenme çıkar.',
      en: 'Risk table updated every sprint. Hayalet production bug at 3am: pipe bridge broke, positions stuck open. Auto risk management triggered, hotfix in 2 hours. Postmortem → monitoring added. Every bug yields a lesson.',
      ru: 'Таблица рисков обновляется каждый спринт. Production баг в 3 ночи: автоматическое управление, hotfix за 2 часа. Post-mortem → мониторинг добавлен.',
    },
    steps: {
      tr: [
        'Risk registry — Olasılık × Etki matrisi',
        'Mitigation planları önceden hazır',
        'Early escalation protokolü',
        'Post-mortem → kalıcı çözüm',
      ],
      en: [
        'Risk registry — Probability × Impact matrix',
        'Mitigation plans prepared in advance',
        'Early escalation protocol',
        'Post-mortem → permanent fix',
      ],
      ru: [
        'Реестр рисков — матрица Вер. × Влияние',
        'Планы снижения рисков готовы заранее',
        'Протокол ранней эскалации',
        'Post-mortem → постоянное решение',
      ],
    },
    metric: { tr: '< 45 dk incident çözüm', en: '< 45 min incident resolution', ru: '< 45 мин разрешение инцидента' },
    projects: ['hayalet', 'indirim-kanallari', 'diagnostic'],
    confidence: 97,
  },
  {
    id: 'process',
    num: 6,
    Icon: GitBranch,
    color: '#ddd0b0',
    label: { tr: 'Süreç', en: 'Process', ru: 'Процесс' },
    category: { tr: 'Süreç', en: 'Process', ru: 'Процесс' },
    title: { tr: 'Agile Süreç', en: 'Agile Process', ru: 'Agile Процесс' },
    approach: {
      tr: '2 haftalık sprintler, fibonacci story points, %20 buffer. AdPro CLI\'de CI/CD: her commit → test → staging → tek tıkla production. Teknik borç "borç dönemi" olarak takip edilir. Her retrospektifte en az bir somut iyileştirme taahhüdü.',
      en: '2-week sprints, fibonacci story points, 20% buffer. AdPro CLI CI/CD: every commit → test → staging → one-click production. Technical debt tracked as "debt period". Each retrospective yields one concrete improvement commitment.',
      ru: '2-недельные спринты, очки Фибоначчи, буфер 20%. CI/CD: каждый коммит → тест → staging → продакшн одним кликом.',
    },
    steps: {
      tr: [
        'Sprint planlama — fibonacci + capacity',
        'Daily standup — engel odaklı (15 dk)',
        'Code review checklist + pair programming',
        'Retrospektif — sürekli iyileştirme kültürü',
      ],
      en: [
        'Sprint planning — fibonacci + capacity',
        'Daily standup — blocker-focused (15 min)',
        'Code review checklist + pair programming',
        'Retrospective — continuous improvement culture',
      ],
      ru: [
        'Планирование спринта — фибоначчи + capacity',
        'Ежедневный standup (15 мин)',
        'Code review + парное программирование',
        'Ретроспектива — культура улучшения',
      ],
    },
    metric: { tr: '3+ deployment/gün', en: '3+ deployments/day', ru: '3+ деплоя в день' },
    projects: ['adpro-cli', 'omnisell', 'sinav-analiz'],
    confidence: 96,
  },
  {
    id: 'delivery',
    num: 7,
    Icon: Package,
    color: '#6ee7d0',
    label: { tr: 'Teslimat', en: 'Delivery', ru: 'Доставка' },
    category: { tr: 'Ürün', en: 'Product', ru: 'Продукт' },
    title: { tr: 'Ürün Teslimi', en: 'Product Delivery', ru: 'Доставка Продукта' },
    approach: {
      tr: 'Definition of Done: kod review, test coverage >%70, performans benchmarks. İndirim Kanalları\'nda 11 scraper 7/24 çalışıyor — 99.3% uptime. Kalite bir süreç, son dakika kontrol değil. Staged rollout: %10 → %50 → %100.',
      en: 'Definition of Done: code review, test coverage >70%, performance benchmarks. Indirim Kanallari: 11 scrapers running 24/7 — 99.3% uptime. Quality is a process, not a last-minute check. Staged rollout: 10% → 50% → 100%.',
      ru: 'DoD: code review, покрытие тестами >70%, бенчмарки. 11 скраперов 24/7 — 99.3% uptime. Качество — это процесс. Поэтапный выпуск: 10% → 50% → 100%.',
    },
    steps: {
      tr: [
        'DoD checklist — her story için zorunlu',
        'Performance testing + benchmark',
        'Staged rollout: %10 → %50 → %100',
        'Production monitoring + alerting',
      ],
      en: [
        'DoD checklist — mandatory for every story',
        'Performance testing + benchmark',
        'Staged rollout: 10% → 50% → 100%',
        'Production monitoring + alerting',
      ],
      ru: [
        'Чеклист DoD — обязателен для каждой истории',
        'Нагрузочное тестирование + бенчмарк',
        'Поэтапный выпуск: 10% → 50% → 100%',
        'Мониторинг продакшна + оповещения',
      ],
    },
    metric: { tr: '99%+ production uptime', en: '99%+ production uptime', ru: '99%+ uptime в продакшне' },
    projects: ['indirim-kanallari', 'pospro', 'fitcheck'],
    confidence: 94,
  },
];

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
interface PMPipelineProps {
  locale: Locale;
}

export default function PMPipeline({ locale }: PMPipelineProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const stage = STAGES[activeIdx];
  const StageIcon = stage.Icon;
  const loc = locale as keyof typeof stage.label;

  /* ── Scroll-triggered pipeline reveal ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
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
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
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
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  /* ── Animate card in when stage changes ── */
  const animateCard = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.fromTo(
      card,
      { opacity: 0, y: 24, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }
    );
  }, []);

  const selectStage = useCallback(
    (idx: number) => {
      setActiveIdx(idx);
      animateCard();
    },
    [animateCard]
  );

  useEffect(() => {
    animateCard();
  }, [animateCard]);

  return (
    <div ref={containerRef} className="opacity-0">
      {/* ── Pipeline nodes row ── */}
      <div className="relative mb-10 px-4">
        {/* SVG connector line */}
        <svg
          className="absolute top-1/2 left-0 right-0 w-full pointer-events-none"
          style={{ height: '2px', transform: 'translateY(-50%)' }}
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* ghost line */}
          <line x1="0" y1="1" x2="1000" y2="1" stroke="rgba(110,231,208,0.12)" strokeWidth="2" />
          {/* animated draw line */}
          <line
            ref={lineRef}
            x1="0"
            y1="1"
            x2="1000"
            y2="1"
            stroke="url(#pipeline-grad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pipeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7d0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e8c07a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e07850" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Node buttons */}
        <div className="flex justify-between items-center relative z-10">
          {STAGES.map((s, i) => {
            const Ico = s.Icon;
            const isActive = activeIdx === i;
            return (
              <button
                key={s.id}
                ref={(el) => { nodeRefs.current[i] = el; }}
                onClick={() => selectStage(i)}
                aria-pressed={isActive}
                className="flex flex-col items-center gap-1.5 group focus:outline-none"
                style={{ opacity: 0 }}
              >
                {/* Node circle */}
                <div
                  className="relative flex items-center justify-center rounded-full transition-all duration-400"
                  style={{
                    width: 44,
                    height: 44,
                    background: isActive ? `${s.color}22` : 'var(--dune-card)',
                    border: `2px solid ${isActive ? s.color : s.color + '40'}`,
                    boxShadow: isActive
                      ? `0 0 0 4px ${s.color}22, 0 0 20px ${s.color}44`
                      : `0 0 0 0px ${s.color}00`,
                    animation: isActive ? `node-pulse 2s ease-in-out infinite` : 'none',
                  }}
                >
                  <Ico
                    style={{
                      width: 18,
                      height: 18,
                      color: isActive ? s.color : `${s.color}70`,
                      transition: 'color 0.3s',
                    }}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <span
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                      style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
                    />
                  )}
                </div>
                {/* Label */}
                <span
                  className="text-xs font-mono hidden sm:block transition-all duration-300"
                  style={{
                    color: isActive ? s.color : 'rgba(221,208,176,0.4)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  {s.label[loc] || s.label.tr}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active stage detail card ── */}
      <div
        ref={cardRef}
        className="neo-tq rounded-2xl overflow-hidden"
        style={{ minHeight: 380 }}
      >
        {/* CRT scanline overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px)',
            zIndex: 0,
          }}
        />

        {/* Glow overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${stage.color}15 0%, transparent 70%)`,
            zIndex: 0,
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center neo-tq-inset"
              style={{ border: `1px solid ${stage.color}30` }}
            >
              <StageIcon style={{ width: 24, height: 24, color: stage.color }} />
            </div>

            <div className="flex-1 min-w-0">
              {/* Stage number + category */}
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span
                  className="font-mono text-xs"
                  style={{ color: `${stage.color}80`, letterSpacing: '0.12em' }}
                >
                  STAGE {String(stage.num).padStart(2, '0')} / 07
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: `${stage.color}15`,
                    border: `1px solid ${stage.color}40`,
                    color: stage.color,
                  }}
                >
                  {stage.category[loc] || stage.category.tr}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: 'rgba(110,231,208,0.1)',
                    border: '1px solid rgba(110,231,208,0.25)',
                    color: '#6ee7d0',
                  }}
                >
                  {stage.confidence}%
                </span>
              </div>
              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-serif font-bold text-dune-bone"
                style={{ textShadow: `0 0 20px ${stage.color}30` }}
              >
                {stage.title[loc] || stage.title.tr}
              </h3>
            </div>
          </div>

          {/* Approach text */}
          <p className="text-dune-sand leading-relaxed mb-6 text-sm md:text-base">
            {stage.approach[loc] || stage.approach.tr}
          </p>

          {/* Steps grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {(stage.steps[loc] || stage.steps.tr).map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 neo-tq-inset rounded-xl p-3"
              >
                <span
                  className="flex-shrink-0 font-mono text-xs font-bold mt-0.5"
                  style={{ color: stage.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-dune-sand text-sm leading-snug">{step}</span>
              </div>
            ))}
          </div>

          {/* Footer: projects + outcome */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {stage.projects.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    background: `${stage.color}10`,
                    border: `1px solid ${stage.color}30`,
                    color: stage.color,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Outcome metric */}
            <div
              className="neo-tq-inset px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <ChevronRight style={{ width: 14, height: 14, color: stage.color }} />
              <div>
                <div className="text-xs font-mono opacity-50" style={{ color: stage.color, letterSpacing: '0.1em' }}>
                  OUTCOME
                </div>
                <div
                  className="font-bold text-sm"
                  style={{ color: stage.color, textShadow: `0 0 8px ${stage.color}40` }}
                >
                  {stage.metric[loc] || stage.metric.tr}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => selectStage(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIdx === i ? 24 : 6,
              height: 6,
              background: activeIdx === i ? s.color : `${s.color}30`,
            }}
            aria-label={`Stage ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
