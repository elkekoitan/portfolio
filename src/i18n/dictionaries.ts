export const locales = ['tr', 'en', 'ru'] as const
export type Locale = typeof locales[number]

type Dict = {
  meta: { title: string; description: string; keywords: string }
  skipLink: string
  brand: string
  nav: { home: string; about: string; projects: string; skills: string; answers: string; contact: string }
  hero: {
    title1: string
    title2: string
    desc: string
    aiCardTitle: string
    aiFeatures: [string, string, string]
    stats: { prod: string; ai: string; years: string; tools: string }
    buttons: { viewProjects: string; interview: string }
  }
  about: {
    title: string
    desc: string
    tech: string
    achievements: string
    ach: { completed: string; years: string; techs: string; success: string }
    bullets: [string, string, string, string]
  }
  projects: { title: string; subtitle: string }
  skills: { title: string; subtitle: string; categories: Record<string, string> }
  answers: {
    title: string
    subtitle: string
    stats: { answered: string; refs: string; avgConf: string }
    filters: { all: string; technical: string; career: string; projects: string; aiml: string; frontend: string; backend: string }
    ctaViewProjects: string
    originalNote?: string
  }
  contact: { title: string; subtitle: string; email: string; phone: string; location: string; locationValue: string }
  footer: { text: string }
  projectCategories: Record<'ai-ml' | 'trading' | 'mobile' | 'web' | 'automation', string>
  projectDifficulty: Record<'beginner' | 'intermediate' | 'advanced' | 'expert', string>
}

export const dictionaries: Record<Locale, Dict> = {
  tr: {
    meta: {
      title: 'Hamza Turhan - Profesyonel Portföy ve Mülakat Cevapları',
      description:
        'Full-Stack Developer, AI/ML Mühendisi ve Ticaret Platformu Uzmanı. React, Python ve modern web teknolojilerinde uzman.',
      keywords:
        'Full-Stack Developer, React, Python, AI/ML, Ticaret Platformu, Mobil Geliştirme, E-ticaret',
    },
    skipLink: 'İçeriğe atla',
    brand: 'Hamza Turhan',
    nav: { home: 'Ana Sayfa', about: 'Hakkımda', projects: 'Projeler', skills: 'Yetenekler', answers: 'Mülakat Cevapları', contact: 'İletişim' },
    hero: {
      title1: 'Fullstack Developer',
      title2: 'AI Sistem Mimarı',
      desc:
        'Modern web teknolojileri, AI/ML çözümleri ve algoritmik ticaret platformları konusunda uzmanım. Uzun zamandır yapay zekaların şirketlere entegrasyonu üzerinde çalışıyorum.',
      aiCardTitle: 'AI Verimlilik Uzmanı',
      aiFeatures: ['AI Tool Entegrasyonu', 'Otomasyon Sistemleri', 'Süreç Optimizasyonu'],
      stats: { prod: 'Verimlilik Artışı', ai: 'AI Projesi', years: 'Yıl Deneyim', tools: 'AI Tool' },
      buttons: { viewProjects: 'AI Projelerimi Gör', interview: 'Mülakat Cevapları' },
    },
    about: {
      title: 'Hakkımda',
      desc:
        'Deneyimli Fullstack Developer ve AI Sistem Mimarı. Ticaret platformları, modern web teknolojileri ve yapay zeka sistemleri konusunda uzmanım. Gerçek dünya problemlerine yenilikçi çözümler üretmeyi seviyorum.',
      tech: 'Teknik Uzmanlık',
      achievements: 'Önemli Başarılar',
      ach: { completed: 'Tamamlanan Projeler', years: 'Yıllık Deneyim', techs: 'Teknolojiler', success: 'Başarı Oranı' },
      bullets: [
        'Full-Stack Geliştirme (React, Python, Node.js)',
        'AI/ML ve Bilgisayarlı Görü',
        'Algoritmik Ticaret Platformları',
        'Çapraz Platform Mobil Geliştirme',
      ],
    },
    projects: { title: 'Öne Çıkan Projeler', subtitle: 'Farklı alanlardaki uzmanlığımı gerçek dünya uygulamalarıyla sergiliyorum' },
    skills: {
      title: 'Teknik Yetenekler',
      subtitle: 'Modern geliştirme teknolojilerinde kapsamlı uzmanlık',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        'ai-ml': 'AI/ML',
        mobile: 'Mobil',
        database: 'Veritabanı',
        devops: 'DevOps',
      },
    },
    answers: {
      title: 'Mülakat Cevapları',
      subtitle: 'Gerçek proje örnekleriyle desteklenmiş detaylı teknik cevaplar',
      stats: { answered: 'Cevaplanan Sorular', refs: 'Referans Projeler', avgConf: 'Ortalama Güven' },
      filters: { all: 'Tümü', technical: 'Teknik', career: 'Kariyer', projects: 'Projeler', aiml: 'AI/ML', frontend: 'Frontend', backend: 'Backend' },
      ctaViewProjects: 'Projeleri Görüntüle',
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Bir sonraki projenizi veya fırsatınızı konuşmaya hazırım',
      email: 'E-posta',
      phone: 'Telefon',
      location: 'Konum',
      locationValue: 'İstanbul, Türkiye',
    },
    footer: { text: '© 2024 Hamza Turhan. Tüm hakları saklıdır. Next.js ve Tailwind CSS ile geliştirilmiştir.' },
    projectCategories: {
      'ai-ml': 'AI/ML',
      trading: 'Ticaret',
      mobile: 'Mobil',
      web: 'Web',
      automation: 'Otomasyon',
    },
    projectDifficulty: {
      beginner: 'Başlangıç',
      intermediate: 'Orta',
      advanced: 'İleri',
      expert: 'Uzman',
    },
  },
  en: {
    meta: {
      title: 'Hamza Turhan - Professional Portfolio & Interview Answers',
      description:
        'Full-Stack Developer, AI/ML Engineer and Trading Platform Specialist. Expert in React, Python and modern web technologies.',
      keywords:
        'Full-Stack Developer, React, Python, AI/ML, Trading Platform, Mobile Development, E-commerce',
    },
    skipLink: 'Skip to content',
    brand: 'Hamza Turhan',
    nav: { home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills', answers: 'Interview Answers', contact: 'Contact' },
    hero: {
      title1: 'Fullstack Developer',
      title2: 'AI Systems Architect',
      desc:
        'I specialize in modern web technologies, AI/ML solutions and algorithmic trading platforms. I have been integrating AI into companies for a long time.',
      aiCardTitle: 'AI Productivity Expert',
      aiFeatures: ['AI Tool Integration', 'Automation Systems', 'Process Optimization'],
      stats: { prod: 'Productivity Increase', ai: 'AI Projects', years: 'Years Experience', tools: 'AI Tools' },
      buttons: { viewProjects: 'View AI Projects', interview: 'Interview Answers' },
    },
    about: {
      title: 'About Me',
      desc:
        'Experienced Fullstack Developer and AI Systems Architect. I focus on trading platforms, modern web technologies and AI systems. I love building innovative solutions to real problems.',
      tech: 'Technical Expertise',
      achievements: 'Key Achievements',
      ach: { completed: 'Completed Projects', years: 'Years of Experience', techs: 'Technologies', success: 'Success Rate' },
      bullets: [
        'Full-Stack Development (React, Python, Node.js)',
        'AI/ML and Computer Vision',
        'Algorithmic Trading Platforms',
        'Cross-platform Mobile Development',
      ],
    },
    projects: { title: 'Featured Projects', subtitle: 'Showcasing expertise through real-world applications' },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Broad expertise in modern development',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        'ai-ml': 'AI/ML',
        mobile: 'Mobile',
        database: 'Database',
        devops: 'DevOps',
      },
    },
    answers: {
      title: 'Interview Answers',
      subtitle: 'Detailed technical answers backed by real project examples',
      stats: { answered: 'Answered Questions', refs: 'Reference Projects', avgConf: 'Average Confidence' },
      filters: { all: 'All', technical: 'Technical', career: 'Career', projects: 'Projects', aiml: 'AI/ML', frontend: 'Frontend', backend: 'Backend' },
      ctaViewProjects: 'View Projects',
      originalNote: 'Note: Detailed answers are currently in Turkish.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'I’m ready to discuss your next project or opportunity',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Istanbul, Turkey',
    },
    footer: { text: '© 2024 Hamza Turhan. All rights reserved. Built with Next.js and Tailwind CSS.' },
    projectCategories: {
      'ai-ml': 'AI/ML',
      trading: 'Trading',
      mobile: 'Mobile',
      web: 'Web',
      automation: 'Automation',
    },
    projectDifficulty: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert',
    },
  },
  ru: {
    meta: {
      title: 'Хамза Турхан — Портфолио и ответы на собеседования',
      description:
        'Full‑Stack разработчик, инженер AI/ML и специалист по торговым платформам. Эксперт в React, Python и современных веб‑технологиях.',
      keywords:
        'Full-Stack, React, Python, AI/ML, торговые платформы, мобильная разработка, e‑commerce',
    },
    skipLink: 'Перейти к содержимому',
    brand: 'Hamza Turhan',
    nav: { home: 'Главная', about: 'Обо мне', projects: 'Проекты', skills: 'Навыки', answers: 'Ответы на собеседование', contact: 'Контакты' },
    hero: {
      title1: 'Fullstack разработчик',
      title2: 'Архитектор систем ИИ',
      desc:
        'Специализируюсь на современных веб‑технологиях, AI/ML‑решениях и алгоритмических торговых платформах. Долгое время занимаюсь интеграцией ИИ в компании.',
      aiCardTitle: 'Эксперт по продуктивности с ИИ',
      aiFeatures: ['Интеграция AI‑инструментов', 'Системы автоматизации', 'Оптимизация процессов'],
      stats: { prod: 'Рост продуктивности', ai: 'AI‑проекты', years: 'Годы опыта', tools: 'AI‑инструменты' },
      buttons: { viewProjects: 'Смотреть AI‑проекты', interview: 'Ответы на собеседование' },
    },
    about: {
      title: 'Обо мне',
      desc:
        'Опытный Fullstack разработчик и архитектор систем ИИ. Фокус на торговых платформах, современных веб‑технологиях и системах ИИ. Люблю создавать инновационные решения реальных задач.',
      tech: 'Техническая экспертиза',
      achievements: 'Ключевые достижения',
      ach: { completed: 'Завершённые проекты', years: 'Годы опыта', techs: 'Технологии', success: 'Успех' },
      bullets: [
        'Full-Stack разработка (React, Python, Node.js)',
        'AI/ML и компьютерное зрение',
        'Алгоритмические торговые платформы',
        'Кроссплатформенная мобильная разработка',
      ],
    },
    projects: { title: 'Избранные проекты', subtitle: 'Экспертиза в реальных приложениях' },
    skills: {
      title: 'Технические навыки',
      subtitle: 'Широкая экспертиза в современных технологиях',
      categories: {
        frontend: 'Фронтенд',
        backend: 'Бэкенд',
        'ai-ml': 'AI/ML',
        mobile: 'Мобильная разработка',
        database: 'Базы данных',
        devops: 'DevOps',
      },
    },
    answers: {
      title: 'Ответы на собеседование',
      subtitle: 'Подробные технические ответы с примерами реальных проектов',
      stats: { answered: 'Отвеченные вопросы', refs: 'Референс‑проекты', avgConf: 'Средняя уверенность' },
      filters: { all: 'Все', technical: 'Технические', career: 'Карьера', projects: 'Проекты', aiml: 'AI/ML', frontend: 'Фронтенд', backend: 'Бэкенд' },
      ctaViewProjects: 'Смотреть проекты',
      originalNote: 'Примечание: подробные ответы пока на турецком языке.',
    },
    contact: {
      title: 'Связаться',
      subtitle: 'Готов обсудить ваш следующий проект или возможность',
      email: 'Email',
      phone: 'Телефон',
      location: 'Локация',
      locationValue: 'Стамбул, Турция',
    },
    footer: { text: '© 2024 Hamza Turhan. Все права защищены. Создано на Next.js и Tailwind CSS.' },
    projectCategories: {
      'ai-ml': 'AI/ML',
      trading: 'Трейдинг',
      mobile: 'Мобильная',
      web: 'Web',
      automation: 'Автоматизация',
    },
    projectDifficulty: {
      beginner: 'Начальный',
      intermediate: 'Средний',
      advanced: 'Продвинутый',
      expert: 'Эксперт',
    },
  },
}

export function getDict(locale: Locale) {
  return dictionaries[locale]
}
