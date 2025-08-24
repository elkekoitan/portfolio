'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Code,
  Brain,
  TrendingUp,
  Smartphone,
  Globe,
  Zap,
  ChevronDown,
  ExternalLink,
  Github,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Cpu,
  Eye,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { interviewAnswers } from '@/data/interview-answers';
import { getDict, type Locale } from '@/i18n/dictionaries';

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
    { key: 'answers', label: t.nav.answers },
    { key: 'contact', label: t.nav.contact },
  ];

  const langList: Locale[] = ['tr', 'en', 'ru'];

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-dark-900/70 bg-dark-900/60 border-b border-white/10" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-bold gradient-text">
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
                      activeSection === section.key ? 'text-accent-cyan' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-300 ${
                        activeSection === section.key ? 'w-full' : 'group-hover:w-6'
                      }`}
                    />
                  </a>
                ))}
              </div>
              <div className="h-5 w-px bg-white/20" />
              <div className="flex gap-2" aria-label="Language">
                {langList.map((lng) => (
                  <a
                    key={lng}
                    href={`/${lng}#${activeSection}`}
                    aria-current={lng === locale ? 'page' : undefined}
                    className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
                      lng === locale
                        ? 'border-accent-cyan text-accent-cyan'
                        : 'border-white/10 text-gray-300 hover:text-white hover:border-white/30'
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass-card p-8 md:p-10 rounded-3xl border border-white/10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">{t.hero.title1}</span>
              <br />
              <span className="text-white">{t.hero.title2}</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mb-6 rounded-full"></div>

            {/* AI Expertise Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="glass p-6 rounded-2xl mb-8 border border-accent-cyan/20">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-accent-cyan mr-3" />
                <h2 className="text-2xl font-bold text-accent-cyan">{t.hero.aiCardTitle}</h2>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                {locale === 'tr' ? 'Yapay zeka entegrasyonları ile mevcut ekiplerin verimliliğini ' : locale === 'ru' ? 'С помощью интеграции ИИ повышаю продуктивность команд ' : 'With AI integrations I help teams improve productivity '}
                <span className="text-accent-cyan font-bold">10x</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Zap className="w-4 h-4 text-accent-teal mr-2" />
                  <span>{t.hero.aiFeatures[0]}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Cpu className="w-4 h-4 text-accent-purple mr-2" />
                  <span>{t.hero.aiFeatures[1]}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="w-4 h-4 text-accent-coral mr-2" />
                  <span>{t.hero.aiFeatures[2]}</span>
                </div>
              </div>
            </motion.div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.hero.desc}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent-cyan">10x</div>
                <div className="text-sm text-gray-400">{t.hero.stats.prod}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent-teal">15+</div>
                <div className="text-sm text-gray-400">{t.hero.stats.ai}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent-purple">4+</div>
                <div className="text-sm text-gray-400">{t.hero.stats.years}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent-coral">20+</div>
                <div className="text-sm text-gray-400">{t.hero.stats.tools}</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-teal text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all">
                <Rocket className="w-4 h-4 mr-2 inline" />
                {t.hero.buttons.viewProjects}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('answers')} className="px-8 py-3 border border-accent-purple/50 text-accent-purple rounded-lg font-semibold hover:bg-accent-purple/20 transition-all">
                <Brain className="w-4 h-4 mr-2 inline" />
                {t.hero.buttons.interview}
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.about.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.about.desc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-bold mb-6 text-white">{t.about.tech}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-accent-cyan" />
                  <span className="text-gray-300">Full-Stack (React, Python, Node.js)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-accent-teal" />
                  <span className="text-gray-300">AI/ML & Computer Vision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent-purple" />
                  <span className="text-gray-300">Algorithmic Trading Platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-accent-coral" />
                  <span className="text-gray-300">Cross‑platform Mobile Development</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">{t.about.achievements}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.about.ach.completed}</span>
                  <span className="text-accent-cyan font-bold">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.about.ach.years}</span>
                  <span className="text-accent-teal font-bold">4+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.about.ach.techs}</span>
                  <span className="text-accent-purple font-bold">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.about.ach.success}</span>
                  <span className="text-accent-coral font-bold">95%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.projects.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 capitalize">{project.category}</span>
                  <span className="text-sm text-accent-teal font-semibold">{project.difficulty}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.skills.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.skills.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(['frontend', 'backend', 'ai-ml', 'mobile', 'database', 'devops'] as const).map((category, index) => (
              <motion.div key={category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white capitalize">{t.skills.categories[category] ?? category}</h3>
                <div className="space-y-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .slice(0, 4)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-accent-cyan">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-accent-cyan to-accent-teal h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Answers Section */}
      <section id="answers" className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full text-sm font-medium text-accent-cyan border border-accent-cyan/30">
                ✨ 34 {t.answers.stats.answered}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">{t.answers.title}</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t.answers.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold gradient-text-cyan mb-2">34</div>
                <div className="text-sm text-gray-400">{t.answers.stats.answered}</div>
              </div>
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold gradient-text-purple mb-2">15+</div>
                <div className="text-sm text-gray-400">{t.answers.stats.refs}</div>
              </div>
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-accent-coral mb-2">95%</div>
                <div className="text-sm text-gray-400">{t.answers.stats.avgConf}</div>
              </div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {[
              { key: 'All', label: t.answers.filters.all },
              { key: 'Technical', label: t.answers.filters.technical },
              { key: 'Career', label: t.answers.filters.career },
              { key: 'Projects', label: t.answers.filters.projects },
              { key: 'AI/ML', label: t.answers.filters.aiml },
              { key: 'Frontend', label: t.answers.filters.frontend },
              { key: 'Backend', label: t.answers.filters.backend },
            ].map((filter) => (
              <button key={filter.key} className="btn-glass px-5 py-2.5 text-sm font-medium hover:scale-[1.02] transition-all border border-white/10">
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Interview Cards Grid */}
          <div className="grid gap-8 lg:gap-12">
            {interviewAnswers.slice(0, 6).map((item) => (
              <div key={item.questionNumber} className="interview-card">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="confidence-badge">{item.confidence}%</span>
                  <span className="category-badge">{item.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.question}</h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}

            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <button onClick={() => scrollToSection('projects')} className="btn-glass px-8 py-3 bg-gradient-to-r from-accent-purple/20 to-accent-coral/20 border-accent-purple/30 text-accent-purple hover:from-accent-purple/30 hover:to-accent-coral/30">
                  <Eye className="w-4 h-4 mr-2 inline" />
                  {t.answers.ctaViewProjects}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.contact.title}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="glass rounded-2xl p-6 border border-white/10">
              <Mail className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t.contact.email}</h3>
              <p className="text-gray-300">turhanhamza@gmail.com</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass rounded-2xl p-6 border border-white/10">
              <Phone className="w-8 h-8 text-accent-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t.contact.phone}</h3>
              <p className="text-gray-300">+90 554 541 7561</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="glass rounded-2xl p-6 border border-white/10">
              <MapPin className="w-8 h-8 text-accent-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t.contact.location}</h3>
              <p className="text-gray-300">{t.contact.locationValue}</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12">
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a href="https://github.com/elkekoitan" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent-cyan/15 text-accent-cyan rounded-lg border border-accent-cyan/30 hover:bg-accent-cyan/25 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hmztrhn/" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent-teal/15 text-accent-teal rounded-lg border border-accent-teal/30 hover:bg-accent-teal/25 transition-all">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">{t.footer.text}</p>
        </div>
      </footer>
    </main>
  );
}

