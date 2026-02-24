'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { gsap } from 'gsap';
import {
  Code,
  Brain,
  TrendingUp,
  Smartphone,
  ChevronDown,
  ExternalLink,
  Github,
  Mail,
  Phone,
  MapPin,
  Home as HomeIcon,
  User,
  FolderKanban,
  BarChart3,
  MessageSquare,
  Contact,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { getDict, type Locale } from '@/i18n/dictionaries';

// GSAP enhancements
import TextScramble from '@/components/gsap/TextScramble';
import MagneticButton from '@/components/gsap/MagneticButton';
import ScrollReveal from '@/components/gsap/ScrollReveal';
import PMPipeline from '@/components/gsap/PMPipeline';
import ProjectCard3D from '@/components/gsap/ProjectCard3D';
import AnimatedAsciiBar from '@/components/gsap/AnimatedAsciiBar';
import AnimatedCounter from '@/components/gsap/AnimatedCounter';
import GlitchText from '@/components/gsap/GlitchText';

// Advanced — 3D & cinematic
import CinematicBootWrapper from '@/components/3d/CinematicBootWrapper';
import HeroSceneWrapper from '@/components/3d/HeroSceneWrapper';
import CinematicTransition from '@/components/gsap/CinematicTransition';
import CircuitDivider from '@/components/gsap/CircuitDivider';
import ScrambleTitle from '@/components/gsap/ScrambleTitle';
import SplitTextReveal from '@/components/gsap/SplitTextReveal';
import SectionMarker from '@/components/gsap/SectionMarker';
import ScrollProgress from '@/components/gsap/ScrollProgress';
import TerminalEmulator from '@/components/gsap/TerminalEmulator';
import DataFlowConnector from '@/components/gsap/DataFlowConnector';
import SkillPerkTree from '@/components/gsap/SkillPerkTree';

/* ── Static ASCII bar (skills section uses this) ── */
function AsciiBar({ value, max = 16, color = 'text-vault-turquoise' }: { value: number; max?: number; color?: string }) {
  const filled = Math.round((value / 100) * max);
  const empty = max - filled;
  return (
    <span className={`font-terminal text-sm ${color}`}>
      [{'\u2588'.repeat(filled)}{'\u2591'.repeat(empty)}]
    </span>
  );
}

export default function Home() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'tr';
  const t = getDict(locale);

  const [activeSection, setActiveSection] = useState('hero');
  const brandRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── IntersectionObserver for active nav tracking ── */
  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'skills', 'answers', 'contact'];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── GSAP entrance animations (replaces framer-motion) ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (brandRef.current) {
        gsap.fromTo(brandRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' });
      }
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      }
      if (chevronRef.current) {
        gsap.to(chevronRef.current, { y: -10, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      }
    });
    return () => ctx.revert();
  }, []);

  const navItems = [
    { key: 'hero', label: t.nav.home, icon: HomeIcon },
    { key: 'about', label: t.nav.about, icon: User },
    { key: 'projects', label: t.nav.projects, icon: FolderKanban },
    { key: 'skills', label: t.nav.skills, icon: BarChart3 },
    { key: 'answers', label: t.nav.pmInsights, icon: MessageSquare },
    { key: 'contact', label: t.nav.contact, icon: Contact },
  ];

  const langList: Locale[] = ['tr', 'en', 'ru'];

  /* ── Cinematic transition section configs ── */
  const cinematicSections = [
    { sectionId: 'about', label: `> SECTION 01 // ${t.about.title.toUpperCase()}`, sublabel: '> ACCESSING OPERATIVE PROFILE...' },
    { sectionId: 'projects', label: `> SECTION 02 // ${t.projects.title.toUpperCase()}`, sublabel: '> LOADING MISSION LOG...' },
    { sectionId: 'skills', label: `> SECTION 03 // ${t.skills.title.toUpperCase()}`, sublabel: '> SCANNING TECHNICAL PROFICIENCIES...' },
    { sectionId: 'answers', label: `> SECTION 04 // ${t.nav.pmInsights.toUpperCase()}`, sublabel: '> DECRYPTING OPERATIONAL DATA...' },
    { sectionId: 'contact', label: `> SECTION 05 // ${t.contact.title.toUpperCase()}`, sublabel: '> ESTABLISHING COMM LINK...' },
  ];

  const scrollProgressSections = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'answers', label: 'SYSTEM' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <CinematicBootWrapper>
    <main id="main-content" className="min-h-screen bg-vault-body relative overflow-hidden">
      {/* Cinematic section transitions */}
      <CinematicTransition sections={cinematicSections} />

      {/* Scroll progress indicator */}
      <ScrollProgress sections={scrollProgressSections} />

      {/* Background rust/turquoise glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-vault-rust/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-vault-turquoise/5 rounded-full blur-3xl" />
      </div>

      {/* ═══ NAVIGATION — Pip-Boy Tab Style ═══ */}
      <nav className="fixed top-0 w-full z-50 bg-vault-body border-b-2 border-vault-rust" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Brand — Terminal style */}
            <div ref={brandRef} className="font-terminal text-lg tracking-wider text-vault-rust">
              HAMZA.TURHAN<span className="cursor-blink" />
            </div>

            {/* Nav tabs */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((section) => (
                <a
                  key={section.key}
                  href={`#${section.key}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(section.key); }}
                  className={`font-terminal text-xs tracking-widest px-3 py-2 border transition-all duration-200 ${
                    activeSection === section.key
                      ? 'border-vault-turquoise text-vault-turquoise text-glow-tq bg-vault-turquoise/5'
                      : 'border-transparent text-vault-sand/50 hover:text-vault-bone hover:border-vault-rust/40'
                  }`}
                >
                  [{section.label.toUpperCase()}]
                </a>
              ))}

              {/* Language switcher */}
              <div className="ml-3 flex gap-1 border-l border-vault-rust/30 pl-3">
                {langList.map((lng) => (
                  <a
                    key={lng}
                    href={`/${lng}#${activeSection}`}
                    aria-current={lng === locale ? 'page' : undefined}
                    className={`font-terminal text-xs px-2 py-1 border transition-colors ${
                      lng === locale
                        ? 'border-vault-turquoise text-vault-turquoise'
                        : 'border-vault-rust/20 text-vault-sand/40 hover:text-vault-bone hover:border-vault-rust/50'
                    }`}
                  >
                    [{lng.toUpperCase()}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MOBILE BOTTOM NAV ═══ */}
      <div className="md:hidden mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around items-center py-2 px-1">
          {navItems.map((section) => {
            const Icon = section.icon;
            return (
              <a
                key={section.key}
                href={`#${section.key}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(section.key); }}
                className={`mobile-bottom-nav-item ${activeSection === section.key ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span>{section.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile language switcher */}
      <div className="md:hidden fixed top-[56px] right-3 z-40">
        <div className="bg-vault-body border border-vault-rust/30 p-1 flex gap-1">
          {langList.map((lng) => (
            <a
              key={lng}
              href={`/${lng}#${activeSection}`}
              aria-current={lng === locale ? 'page' : undefined}
              className={`font-terminal text-xs px-2 py-1 border transition-colors ${
                lng === locale
                  ? 'border-vault-turquoise text-vault-turquoise'
                  : 'border-vault-rust/20 text-vault-sand/40 hover:text-vault-bone'
              }`}
            >
              [{lng.toUpperCase()}]
            </a>
          ))}
        </div>
      </div>

      {/* ═══ HERO — Pip-Boy Terminal Screen + 3D Background ═══ */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSceneWrapper />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
          <div
            ref={heroRef}
            className="terminal-frame screen-flicker relative"
          >
            {/* CRT scanlines */}
            <div aria-hidden="true" className="crt-scanlines pointer-events-none absolute inset-0 z-20" />
            <div aria-hidden="true" className="crt-vignette pointer-events-none absolute inset-0 z-20 rounded-sm" />

            {/* Terminal header bar */}
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <span className="status-dot" />
                <span>VAULT-TEC PERSONNEL TERMINAL v7.1</span>
              </div>
              <span className="text-vault-turquoise/60 text-xs">STATUS: ONLINE</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 md:p-8 relative z-10">
              {/* Boot lines */}
              <div className="font-terminal text-xs text-vault-turquoise/60 mb-4 space-y-0.5">
                <p>&gt; ACCESSING PERSONNEL FILE...</p>
                <p>&gt; CLEARANCE: <span className="text-vault-amber">SIGMA</span></p>
              </div>

              {/* Name + Title */}
              <h1 className="font-terminal text-2xl sm:text-3xl md:text-4xl text-vault-turquoise text-glow-tq mb-1 tracking-wider">
                <TextScramble text={t.hero.title1} className="text-vault-rust" tag="span" delay={0.3} />
              </h1>
              <h2 className="font-terminal text-lg sm:text-xl text-vault-bone/90 mb-2 tracking-wide">
                <TextScramble text={t.hero.title2} className="" tag="span" delay={0.8} />
              </h2>

              <div className="h-px bg-gradient-to-r from-vault-rust via-vault-turquoise to-vault-rust mb-6 opacity-40" />

              {/* S.P.E.C.I.A.L. Stat Bars — GSAP animated fill */}
              <div className="space-y-2 mb-6">
                {[
                  { label: 'PRODUCTIVITY', value: 95,  stat: '10x', color: 'text-vault-amber',     delay: 0.6 },
                  { label: 'AI_PROJECTS ', value: 100, stat: '30+', color: 'text-vault-turquoise', delay: 0.75 },
                  { label: 'EXPERIENCE  ', value: 55,  stat: '5+',  color: 'text-vault-patina',    delay: 0.9 },
                  { label: 'AI_TOOLS    ', value: 90,  stat: '40+', color: 'text-vault-rust',      delay: 1.05 },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 font-terminal text-sm"
                  >
                    <span className="text-vault-sand/70 w-28 sm:w-32 text-xs tracking-wider">{stat.label}</span>
                    <AnimatedAsciiBar value={stat.value} max={20} color={stat.color} delay={stat.delay} duration={0.9} />
                    <span className={`${stat.color} font-bold text-xs ml-1`}>{stat.stat}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-vault-sand text-sm leading-relaxed mb-6 font-terminal">
                &gt; {t.hero.desc}
              </p>

              {/* CTA Buttons — Terminal style */}
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="btn-terminal w-full sm:w-auto"
                  >
                    [A] {t.hero.buttons.viewProjects.toUpperCase()}
                  </button>
                </MagneticButton>
                <MagneticButton>
                  <button
                    onClick={() => scrollToSection('answers')}
                    className="btn-terminal w-full sm:w-auto"
                  >
                    [B] {t.hero.buttons.interview.toUpperCase()}
                  </button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        <div ref={chevronRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-5 h-5 text-vault-rust/40" />
        </div>
      </section>

      {/* Circuit Divider: Hero → About */}
      <CircuitDivider variant="branched" />

      {/* ═══ ABOUT — Terminal Readout (3-Card Layout) ═══ */}
      <section id="about" className="py-20 bg-vault-surface rust-texture relative">
        <SectionMarker number="01" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrambleTitle text={t.about.title.toUpperCase()} className="font-terminal text-3xl md:text-4xl text-vault-rust text-glow-rust tracking-widest mb-4" glowColor="#B87333" />
              <SplitTextReveal className="text-vault-sand max-w-3xl mx-auto" type="words" stagger={0.04} fromY={15}>
                {t.about.desc}
              </SplitTextReveal>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 items-start relative">
            <DataFlowConnector />
            {/* Card 1: TECH_PROFILE */}
            <ScrollReveal direction="left">
              <div className="terminal-frame p-5 h-full">
                <div className="terminal-header mb-4">
                  <div className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span>TECH_PROFILE</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.about.bullets.map((txt, i) => {
                    const Icon = [Code, Brain, TrendingUp, Smartphone][i] ?? Code;
                    const iconColor = ['text-vault-amber', 'text-vault-turquoise', 'text-vault-rust', 'text-vault-patina'][i];
                    return (
                      <div key={i} className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                        <span className="text-vault-sand text-sm">{txt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: SYSTEM_STATS */}
            <ScrollReveal>
              <div className="terminal-frame p-5 h-full">
                <div className="terminal-header mb-4">
                  <div className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span>SYSTEM_STATS</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: t.about.ach.completed, to: 30, suffix: '+', color: 'text-vault-amber',     glowColor: '#ffb641' },
                    { label: t.about.ach.years,     to: 5,  suffix: '+', color: 'text-vault-turquoise', glowColor: '#6ee7d0' },
                    { label: t.about.ach.techs,     to: 40, suffix: '+', color: 'text-vault-patina',    glowColor: '#2ecfff' },
                    { label: t.about.ach.success,   to: 98, suffix: '%', color: 'text-vault-rust',      glowColor: '#B87333' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between font-terminal text-sm">
                      <span className="text-vault-sand/70 text-xs">&gt; {item.label}</span>
                      <span className={`${item.color} font-bold`}>
                        [<AnimatedCounter to={item.to} suffix={item.suffix} glowColor={item.glowColor} duration={1.4} />]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: WORKFLOW (Pin 3 inspired — numbered steps) */}
            <ScrollReveal direction="right">
              <div className="terminal-frame p-5 h-full">
                <div className="terminal-header mb-4">
                  <div className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span>WORK_FLOW</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {t.about.workflowSteps.map((step, i) => (
                    <div key={i} className="workflow-step">
                      <span className="workflow-step-number">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <span className="workflow-step-label">{step}</span>
                        <div className="mt-1">
                          <AnimatedAsciiBar
                            value={[85, 95, 80][i]}
                            max={12}
                            color={['text-vault-amber', 'text-vault-turquoise', 'text-vault-patina'][i]}
                            delay={0.3 + i * 0.2}
                            duration={0.7}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Circuit Divider: About → Projects */}
      <CircuitDivider variant="branched" />

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="py-20 bg-vault-body relative">
        <SectionMarker number="02" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <ScrambleTitle text={t.projects.title.toUpperCase()} className="font-terminal text-3xl md:text-4xl text-vault-rust text-glow-rust tracking-widest mb-4" glowColor="#B87333" />
              <SplitTextReveal className="text-vault-sand max-w-3xl mx-auto" type="words" stagger={0.03}>
                {t.projects.subtitle}
              </SplitTextReveal>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                locale={locale}
                categoryLabel={t.projectCategories[project.category]}
                difficultyLabel={t.projectDifficulty[project.difficulty] ?? project.difficulty}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Divider: Projects → Skills */}
      <CircuitDivider variant="branched" />

      {/* ═══ SKILLS — Roadmap Mind-Map (Pin 4 Inspired) ═══ */}
      <section id="skills" className="py-20 bg-vault-surface rust-texture relative">
        <SectionMarker number="03" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrambleTitle text={t.skills.title.toUpperCase()} className="font-terminal text-3xl md:text-4xl text-vault-rust text-glow-rust tracking-widest mb-4" glowColor="#B87333" />
              <SplitTextReveal className="text-vault-sand max-w-3xl mx-auto" type="words" stagger={0.03}>
                {t.skills.subtitle}
              </SplitTextReveal>
            </div>
          </ScrollReveal>

          {/* Desktop: Fallout Perk Tree */}
          <div className="hidden md:block">
            <SkillPerkTree skills={skills} locale={locale} categories={t.skills.categories} />
          </div>

          {/* Mobile: Grid fallback */}
          <div className="md:hidden">
            <ScrollReveal stagger={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {(['frontend', 'backend', 'ai-ml', 'mobile', 'database', 'devops', 'tools'] as const).map((category) => (
                  <div key={category} className="terminal-frame p-4">
                    <div className="terminal-header mb-3">
                      <div className="flex items-center gap-2">
                        <span className="status-dot" />
                        <span className="text-[0.6rem]">{(t.skills.categories[category] ?? category).toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .sort((a, b) => b.level - a.level)
                        .slice(0, 3)
                        .map((skill, si) => (
                          <div key={skill.name} className="space-y-0.5">
                            <div className="flex justify-between font-terminal text-[0.65rem]">
                              <span className="text-vault-sand">{skill.name}</span>
                              <span className="text-vault-turquoise">{skill.level}%</span>
                            </div>
                            <AnimatedAsciiBar
                              value={skill.level}
                              max={10}
                              color="text-vault-turquoise"
                              delay={si * 0.1}
                              duration={0.7}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Circuit Divider: Skills → Work System */}
      <CircuitDivider variant="branched" />

      {/* ═══ WORK SYSTEM ═══ */}
      <section id="answers" className="py-20 bg-vault-body relative">
        <SectionMarker number="04" />
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <ScrambleTitle text={t.nav.pmInsights.toUpperCase()} tag="h2" className="font-terminal text-3xl md:text-4xl tracking-widest mb-3 text-vault-rust text-glow-rust" glowColor="#B87333" chars="01!<>{}[]/" duration={1.5} />
              <SplitTextReveal className="text-vault-sand max-w-2xl mx-auto text-sm" type="words" stagger={0.04}>
                {t.answers.subtitle}
              </SplitTextReveal>
            </div>
          </ScrollReveal>
          <PMPipeline locale={locale} />
        </div>
      </section>

      {/* Circuit Divider: Work System → Contact */}
      <CircuitDivider variant="branched" />

      {/* ═══ CONTACT — 2-Column Terminal Layout ═══ */}
      <section id="contact" className="py-20 bg-vault-surface rust-texture relative">
        <SectionMarker number="05" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrambleTitle text={t.contact.title.toUpperCase()} className="font-terminal text-3xl md:text-4xl text-vault-rust text-glow-rust tracking-widest mb-4" glowColor="#B87333" />
              <SplitTextReveal className="text-vault-sand max-w-2xl mx-auto" type="words" stagger={0.04}>
                {t.contact.subtitle}
              </SplitTextReveal>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Interactive Terminal (desktop) / Static CTA (mobile) */}
            <ScrollReveal direction="left">
              {/* Desktop: Interactive Terminal Emulator */}
              <div className="hidden md:block">
                <TerminalEmulator locale={locale} />
              </div>

              {/* Mobile: Static CTA fallback */}
              <div className="md:hidden contact-terminal-cta">
                <div className="font-terminal text-xs text-vault-turquoise/60 mb-4 space-y-1">
                  <p>&gt; ESTABLISHING SECURE CONNECTION...</p>
                  <p>&gt; CHANNEL: <span className="text-vault-amber">ENCRYPTED</span></p>
                  <p>&gt; STATUS: <span className="text-vault-turquoise">READY</span></p>
                </div>
                <div className="h-px bg-gradient-to-r from-vault-rust via-vault-turquoise to-vault-rust mb-6 opacity-30" />
                <p className="text-vault-bone font-terminal text-sm mb-6 leading-relaxed">
                  &gt; {t.contact.subtitle}
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton>
                    <a href="https://github.com/elkekoitan" target="_blank" rel="noopener noreferrer" className="btn-terminal w-full inline-flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      [GITHUB]
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href="https://www.linkedin.com/in/hmztrhn/" target="_blank" rel="noopener noreferrer" className="btn-terminal w-full inline-flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      [LINKEDIN]
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact info cards */}
            <ScrollReveal direction="right" stagger={0.12}>
              <div className="space-y-4">
                <div className="terminal-frame p-5">
                  <div className="terminal-header mb-3">
                    <div className="flex items-center gap-2">
                      <span className="status-dot" />
                      <span>COMM_LINK</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-vault-amber flex-shrink-0" />
                    <div>
                      <h3 className="font-terminal text-xs text-vault-sand/70">{t.contact.email}</h3>
                      <p className="text-vault-turquoise font-terminal text-sm">turhanhamza@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="terminal-frame p-5">
                  <div className="terminal-header mb-3">
                    <div className="flex items-center gap-2">
                      <span className="status-dot" />
                      <span>VOICE_LINK</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-vault-turquoise flex-shrink-0" />
                    <div>
                      <h3 className="font-terminal text-xs text-vault-sand/70">{t.contact.phone}</h3>
                      <p className="text-vault-turquoise font-terminal text-sm">+90 554 541 7561</p>
                    </div>
                  </div>
                </div>

                <div className="terminal-frame p-5">
                  <div className="terminal-header mb-3">
                    <div className="flex items-center gap-2">
                      <span className="status-dot" />
                      <span>LOCATION</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-vault-patina flex-shrink-0" />
                    <div>
                      <h3 className="font-terminal text-xs text-vault-sand/70">{t.contact.location}</h3>
                      <p className="text-vault-turquoise font-terminal text-sm">{t.contact.locationValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-8 bg-vault-body border-t-2 border-vault-rust/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-terminal text-xs text-vault-sand/30 tracking-widest">
              {'// VAULT-TEC TERMINAL // HAMZA TURHAN // 2025 //'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/elkekoitan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-xs text-vault-sand/40 hover:text-vault-turquoise transition-colors tracking-wider"
              >
                [GITHUB]
              </a>
              <a
                href="https://www.linkedin.com/in/hmztrhn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-xs text-vault-sand/40 hover:text-vault-turquoise transition-colors tracking-wider"
              >
                [LINKEDIN]
              </a>
              <a
                href="mailto:turhanhamza@gmail.com"
                className="font-terminal text-xs text-vault-sand/40 hover:text-vault-turquoise transition-colors tracking-wider"
              >
                [EMAIL]
              </a>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="font-terminal text-[0.6rem] text-vault-sand/20 tracking-wider">
              BUILT WITH NEXT.JS + GSAP + THREE.JS // DESIGNED IN VAULT-TEC AESTHETIC
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile nav spacer */}
      <div className="md:hidden h-16" />
    </main>
    </CinematicBootWrapper>
  );
}
