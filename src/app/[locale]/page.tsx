'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
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
  Rocket,
  Cpu,
  Zap,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { getDict, type Locale } from '@/i18n/dictionaries';

// GSAP enhancements
import HeroParticles from '@/components/gsap/HeroParticles';
import TextScramble from '@/components/gsap/TextScramble';
import MagneticButton from '@/components/gsap/MagneticButton';
import ScrollReveal from '@/components/gsap/ScrollReveal';
import BootSequence from '@/components/gsap/BootSequence';
import PMPipeline from '@/components/gsap/PMPipeline';
import ProjectCard3D from '@/components/gsap/ProjectCard3D';

export default function Home() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'tr';
  const t = getDict(locale);

  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const navItems = [
    { key: 'hero', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'projects', label: t.nav.projects },
    { key: 'skills', label: t.nav.skills },
    { key: 'answers', label: t.nav.pmInsights },
    { key: 'contact', label: t.nav.contact },
  ];

  const langList: Locale[] = ['tr', 'en', 'ru'];

  return (
    <BootSequence>
    <main id="main-content" className="min-h-screen bg-dune-body relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-dune-amber/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-dune-turquoise/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dune-body/70 border-b border-dune-amber/10" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-serif font-bold gradient-text">
              {t.brand}
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-8">
                {navItems.map((section) => (
                  <a
                    key={section.key}
                    href={`#${section.key}`}
                    onClick={() => scrollToSection(section.key)}
                    className={`group relative text-sm font-medium transition-colors focus:outline-none ${
                      activeSection === section.key ? 'text-dune-amber' : 'text-dune-sand/70 hover:text-dune-bone'
                    }`}
                  >
                    {section.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-dune-amber to-dune-turquoise transition-all duration-300 ${
                        activeSection === section.key ? 'w-full' : 'group-hover:w-6'
                      }`}
                    />
                  </a>
                ))}
              </div>
              <div className="h-5 w-px bg-dune-amber/20" />
              <div className="flex gap-2" aria-label="Language">
                {langList.map((lng) => (
                  <a
                    key={lng}
                    href={`/${lng}#${activeSection}`}
                    aria-current={lng === locale ? 'page' : undefined}
                    className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
                      lng === locale
                        ? 'border-dune-amber text-dune-amber'
                        : 'border-dune-amber/20 text-dune-sand/60 hover:text-dune-bone hover:border-dune-amber/40'
                    }`}
                  >
                    {lng.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile language switcher */}
      <div className="md:hidden fixed top-[64px] right-3 z-40">
        <div className="glass rounded-lg p-1 border border-dune-amber/10 flex gap-1">
          {langList.map((lng) => (
            <a
              key={lng}
              href={`/${lng}#${activeSection}`}
              aria-current={lng === locale ? 'page' : undefined}
              className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
                lng === locale
                  ? 'border-dune-amber text-dune-amber'
                  : 'border-dune-amber/20 text-dune-sand/60 hover:text-dune-bone hover:border-dune-amber/40'
              }`}
            >
              {lng.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroParticles />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="neomorphic p-8 md:p-10 rounded-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              <TextScramble text={t.hero.title1} className="gradient-text" tag="span" delay={0.3} />
              <br />
              <TextScramble text={t.hero.title2} className="text-dune-bone" tag="span" delay={0.8} />
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-dune-amber to-dune-turquoise mx-auto mb-6 rounded-full" />

            {/* AI Expertise Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="neomorphic-inset p-6 rounded-2xl mb-8">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-dune-turquoise mr-3" />
                <h2 className="text-2xl font-serif font-bold text-dune-turquoise">{t.hero.aiCardTitle}</h2>
              </div>
              <p className="text-lg text-dune-sand mb-4">
                {locale === 'tr' ? 'Yapay zeka entegrasyonları ile mevcut ekiplerin verimliliğini ' : locale === 'ru' ? 'С помощью интеграции ИИ повышаю продуктивность команд ' : 'With AI integrations I help teams improve productivity '}
                <span className="text-dune-amber font-bold">10x</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-dune-sand">
                  <Zap className="w-4 h-4 text-dune-amber mr-2" />
                  <span>{t.hero.aiFeatures[0]}</span>
                </div>
                <div className="flex items-center text-dune-sand">
                  <Cpu className="w-4 h-4 text-dune-lavender mr-2" />
                  <span>{t.hero.aiFeatures[1]}</span>
                </div>
                <div className="flex items-center text-dune-sand">
                  <TrendingUp className="w-4 h-4 text-dune-spice mr-2" />
                  <span>{t.hero.aiFeatures[2]}</span>
                </div>
              </div>
            </motion.div>

            <p className="text-lg md:text-xl text-dune-sand mb-8 max-w-3xl mx-auto">{t.hero.desc}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: '10x', label: t.hero.stats.prod, color: 'text-dune-amber', delay: 0.5 },
                { value: '30+', label: t.hero.stats.ai, color: 'text-dune-turquoise', delay: 0.6 },
                { value: '5+', label: t.hero.stats.years, color: 'text-dune-lavender', delay: 0.7 },
                { value: '40+', label: t.hero.stats.tools, color: 'text-dune-spice', delay: 0.8 },
              ].map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: stat.delay }} className="neomorphic-inset p-4 rounded-xl">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-dune-sand/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-dune-amber to-dune-rust text-dune-body rounded-lg font-semibold hover:shadow-lg hover:shadow-dune-amber/25 transition-all">
                  <Rocket className="w-4 h-4 mr-2 inline" />
                  {t.hero.buttons.viewProjects}
                </motion.button>
              </MagneticButton>
              <MagneticButton>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('answers')} className="px-8 py-3 border border-dune-turquoise/50 text-dune-turquoise rounded-lg font-semibold hover:bg-dune-turquoise/10 transition-all">
                  <Brain className="w-4 h-4 mr-2 inline" />
                  {t.hero.buttons.interview}
                </motion.button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-dune-sand/40" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dune-surface">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">{t.about.title}</h2>
              <p className="text-xl text-dune-sand max-w-3xl mx-auto">{t.about.desc}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-dune-bone">{t.about.tech}</h3>
                <div className="space-y-4">
                  {t.about.bullets.map((txt, i) => {
                    const Icon = [Code, Brain, TrendingUp, Smartphone][i] ?? Code;
                    const iconColor = ['text-dune-amber', 'text-dune-turquoise', 'text-dune-spice', 'text-dune-lavender'][i];
                    return (
                      <div key={i} className="flex items-center space-x-3">
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                        <span className="text-dune-sand">{txt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="neomorphic p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold mb-6 text-dune-bone">{t.about.achievements}</h3>
                <div className="space-y-4">
                  {[
                    { label: t.about.ach.completed, value: '30+', color: 'text-dune-amber' },
                    { label: t.about.ach.years, value: '5+', color: 'text-dune-turquoise' },
                    { label: t.about.ach.techs, value: '40+', color: 'text-dune-lavender' },
                    { label: t.about.ach.success, value: '98%', color: 'text-dune-spice' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-dune-sand">{item.label}</span>
                      <span className={`${item.color} font-bold`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dune-body">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">{t.projects.title}</h2>
              <p className="text-xl text-dune-sand max-w-3xl mx-auto">{t.projects.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                locale={locale}
                categoryLabel={t.projectCategories[project.category]}
                difficultyLabel={t.projectDifficulty[project.difficulty] ?? project.difficulty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dune-surface">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">{t.skills.title}</h2>
              <p className="text-xl text-dune-sand max-w-3xl mx-auto">{t.skills.subtitle}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.12}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(['frontend', 'backend', 'ai-ml', 'mobile', 'database', 'devops'] as const).map((category) => (
                <div key={category} className="neomorphic rounded-2xl p-6">
                  <h3 className="text-xl font-serif font-bold mb-4 text-dune-amber capitalize">{t.skills.categories[category] ?? category}</h3>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .slice(0, 4)
                      .map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-dune-sand">{skill.name}</span>
                            <span className="text-dune-turquoise">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-dune-body rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-dune-amber to-dune-turquoise h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PM Insights Section — animated pipeline */}
      <section id="answers" className="bg-dune-body">
        <PMPipeline locale={locale} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dune-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">{t.contact.title}</h2>
              <p className="text-xl text-dune-sand max-w-2xl mx-auto">{t.contact.subtitle}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="neomorphic rounded-2xl p-6">
                <Mail className="w-8 h-8 text-dune-amber mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-dune-bone">{t.contact.email}</h3>
                <p className="text-dune-sand">turhanhamza@gmail.com</p>
              </div>

              <div className="neomorphic rounded-2xl p-6">
                <Phone className="w-8 h-8 text-dune-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-dune-bone">{t.contact.phone}</h3>
                <p className="text-dune-sand">+90 554 541 7561</p>
              </div>

              <div className="neomorphic rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-dune-lavender mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-dune-bone">{t.contact.location}</h3>
                <p className="text-dune-sand">{t.contact.locationValue}</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a href="https://github.com/elkekoitan" target="_blank" rel="noopener noreferrer" className="p-3 bg-dune-amber/10 text-dune-amber rounded-lg border border-dune-amber/30 hover:bg-dune-amber/20 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hmztrhn/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dune-turquoise/10 text-dune-turquoise rounded-lg border border-dune-turquoise/30 hover:bg-dune-turquoise/20 transition-all">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dune-body border-t border-dune-amber/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-dune-sand/50">{t.footer.text}</p>
        </div>
      </footer>
    </main>
    </BootSequence>
  );
}
