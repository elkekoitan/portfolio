import type { Locale } from './dictionaries'

type Fields = 'title' | 'description'

const map: Record<string, Partial<Record<Locale, Partial<Record<Fields, string>>>>> = {
  'solar-analysis': {
    tr: {
      title: 'Güneş Paneli Anomali Tespit Sistemi',
      description: 'AI destekli güneş paneli izleme ve anomali tespit platformu',
    },
    en: {
      title: 'Solar Panel Anomaly Detection System',
      description: 'AI-powered solar panel monitoring and anomaly detection platform',
    },
    ru: {
      title: 'Система обнаружения аномалий солнечных панелей',
      description: 'Платформа мониторинга и обнаружения аномалий на базе ИИ',
    },
  },
  'ai-algo-trade': {
    tr: {
      title: 'AI Algo Trade - Kuantum Ticaret Platformu',
      description: 'Kuantum algoritmalarıyla güçlendirilmiş yeni nesil AI ticaret platformu',
    },
    en: {
      title: 'AI Algo Trade - Quantum Trading Platform',
      description: 'Next-generation AI-powered trading platform with quantum algorithms',
    },
    ru: {
      title: 'AI Algo Trade — квантовая торговая платформа',
      description: 'Торговая платформа нового поколения на базе ИИ и квантовых алгоритмов',
    },
  },
  'adpro-mobile': {
    tr: {
      title: 'AdPro - Yapay Zeka Destekli Mobil Uygulama',
      description: 'React Native ile gelişmiş yapay zeka özellikli mobil uygulama',
    },
    en: {
      title: 'AdPro - AI-powered Mobile App',
      description: 'React Native mobile app with advanced AI features',
    },
    ru: {
      title: 'AdPro — мобильное приложение с ИИ',
      description: 'Кроссплатформенное приложение на React Native с функциями ИИ',
    },
  },
  'oto-mansuroglu': {
    tr: {
      title: 'Oto Mansuroğlu E-ticaret Platformu',
      description: 'Gelişmiş özelliklere sahip uçtan uca e-ticaret çözümü',
    },
    en: {
      title: 'Oto Mansuroğlu E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features',
    },
    ru: {
      title: 'Платформа электронной коммерции Oto Mansuroğlu',
      description: 'Полноценное e-commerce решение с расширенными возможностями',
    },
  },
  'n8n-workflows': {
    tr: {
      title: 'n8n İş Akışı Otomasyonu ve RAG Chatbotlar',
      description: 'Şirketler için gelişmiş otomasyon ve self-hosted çözümler',
    },
    en: {
      title: 'n8n Workflow Automation & RAG Chatbots',
      description: 'Advanced automation and self-hosted solutions for companies',
    },
    ru: {
      title: 'Автоматизация рабочих процессов n8n и RAG‑чат-боты',
      description: 'Продвинутая автоматизация и self-hosted решения для компаний',
    },
  },
  'slack-integration': {
    tr: {
      title: 'Slack Müşteri Hizmetleri Otomasyonu',
      description: 'Yapay zeka destekli müşteri hizmetleri otomasyon platformu',
    },
    en: {
      title: 'Slack Customer Support Automation',
      description: 'AI-powered customer service automation platform',
    },
    ru: {
      title: 'Автоматизация поддержки в Slack',
      description: 'Платформа автоматизации клиентской поддержки на базе ИИ',
    },
  },
}

export function tProject(
  id: string,
  locale: Locale,
  field: Fields,
  fallback: string
): string {
  return map[id]?.[locale]?.[field] ?? fallback
}

