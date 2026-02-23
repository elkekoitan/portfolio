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

  // ═══ New Projects ═══

  'hayalet': {
    tr: {
      title: 'Hayalet HFT Ticaret Sistemi',
      description: 'Go + Python hibrit mimarisine sahip ultra düşük gecikmeli yüksek frekanslı ticaret sistemi',
    },
    en: {
      title: 'Hayalet HFT Trading System',
      description: 'Ultra-low latency high-frequency trading system with Go + Python hybrid architecture',
    },
    ru: {
      title: 'Hayalet — HFT торговая система',
      description: 'Высокочастотная торговая система с гибридной архитектурой Go + Python',
    },
  },
  'go-trade': {
    tr: {
      title: 'Go-Trade MT5 Algoritmik Ticaret',
      description: 'C++ DLL paylaşımlı bellek köprüsü ve Next.js dashboard ile MT5 algo-trading sistemi',
    },
    en: {
      title: 'Go-Trade MT5 Algorithmic Trading',
      description: 'MT5 algorithmic trading system with C++ DLL shared memory bridge and Next.js dashboard',
    },
    ru: {
      title: 'Go-Trade — алгоритмическая торговля MT5',
      description: 'Алгоритмическая торговая система MT5 с мостом разделяемой памяти C++ DLL',
    },
  },
  'barter-qween': {
    tr: {
      title: 'Barter Qween - Üniversite Takas Platformu',
      description: 'Boğaziçi öğrencileri için nöromorfik tasarımlı Flutter takas platformu',
    },
    en: {
      title: 'Barter Qween - University Exchange Platform',
      description: 'Flutter barter platform for Bogazici University students with neuromorphic UI',
    },
    ru: {
      title: 'Barter Qween — платформа обмена для студентов',
      description: 'Flutter платформа обмена для студентов с нейроморфным дизайном',
    },
  },
  'diagnostic': {
    tr: {
      title: 'AI Kanser Tespit Sistemi',
      description: 'ML pipeline, medikal cihaz yazılımı ve HL7/FHIR entegrasyonlu çoklu-modal kanser tespit sistemi',
    },
    en: {
      title: 'AI Cancer Detection System',
      description: 'Multi-modal cancer detection with ML pipeline and HL7/FHIR integration',
    },
    ru: {
      title: 'Система обнаружения рака с ИИ',
      description: 'Мультимодальная система обнаружения рака с ML пайплайном и HL7/FHIR',
    },
  },
  'omnisell': {
    tr: {
      title: 'OmniSell - E-ticaret Otomasyon Platformu',
      description: 'Etsy, Amazon, Shopify ve Trendyol için AI destekli çoklu pazaryeri otomasyon platformu',
    },
    en: {
      title: 'OmniSell - E-commerce Automation Platform',
      description: 'AI-powered multi-marketplace listing automation for Etsy, Amazon, Shopify, Trendyol',
    },
    ru: {
      title: 'OmniSell — платформа e-commerce автоматизации',
      description: 'ИИ‑автоматизация листингов для Etsy, Amazon, Shopify, Trendyol',
    },
  },
  'firealert': {
    tr: {
      title: 'FireAlert - Yangın Tespit Mobil Uygulaması',
      description: 'NASA FIRMS uydu verileri ve NestJS backend ile çapraz platform yangın tespit sistemi',
    },
    en: {
      title: 'FireAlert - Fire Detection Mobile App',
      description: 'Cross-platform fire alert system with NASA FIRMS satellite data and NestJS backend',
    },
    ru: {
      title: 'FireAlert — мобильное приложение обнаружения пожаров',
      description: 'Кроссплатформенная система оповещения о пожарах с данными NASA FIRMS',
    },
  },
  'indirim-kanallari': {
    tr: {
      title: 'İndirim Kanalları - Fırsat Avcısı & Telegram Bot',
      description: 'Kalite puanlaması ve 12+ Telegram kanalına dağıtımlı otomatik Türk perakende fırsat tarayıcısı',
    },
    en: {
      title: 'Indirim Kanallari - Deal Scraper & Telegram Bot',
      description: 'Automated Turkish retail deal scraper with quality scoring and 12+ Telegram channel distribution',
    },
    ru: {
      title: 'İndirim Kanalları — скрапер скидок и Telegram-бот',
      description: 'Автоматический сканер скидок турецких магазинов с рассылкой в 12+ Telegram‑каналов',
    },
  },
  'mandira-claude': {
    tr: {
      title: 'Mandıra Süt Takip - Çiftlik Yönetim Sistemi',
      description: 'Next.js 14, Firebase ve gerçek zamanlı takip ile modern süt çiftliği yönetim sistemi',
    },
    en: {
      title: 'Mandira Sut Takip - Dairy Farm Management',
      description: 'Modern dairy farm management system with Next.js 14, Firebase, and real-time tracking',
    },
    ru: {
      title: 'Mandıra — система управления молочной фермой',
      description: 'Система управления молочной фермой на Next.js 14 с Firebase',
    },
  },
  'pospro': {
    tr: {
      title: 'PosPro - Türkiye POS Sistemi',
      description: 'Flutter çapraz platform ve FastAPI backend ile Türk pazarına özel kurumsal POS sistemi',
    },
    en: {
      title: 'PosPro - Turkey POS System',
      description: 'Enterprise POS system for Turkish market with Flutter cross-platform and FastAPI backend',
    },
    ru: {
      title: 'PosPro — POS‑система для Турции',
      description: 'Корпоративная POS‑система для турецкого рынка на Flutter и FastAPI',
    },
  },
  'sinav-analiz': {
    tr: {
      title: 'Sınav Analiz Uzmanı - Eğitim Analitiği',
      description: 'AI destekli pedagojik önerilerle Türk eğitimcileri için gelişmiş sınav analiz platformu',
    },
    en: {
      title: 'Sinav Analiz Uzmani - Education Analytics',
      description: 'Advanced exam analysis platform for Turkish educators with AI-powered pedagogical insights',
    },
    ru: {
      title: 'Sınav Analiz — образовательная аналитика',
      description: 'Платформа анализа экзаменов для турецких педагогов с ИИ‑рекомендациями',
    },
  },
  'video-factory': {
    tr: {
      title: 'Video Factory - AI Video Prodüksiyonu',
      description: 'AI destekli özellikler, FFmpeg işleme ve Gemini entegrasyonu ile masaüstü video düzenleyici',
    },
    en: {
      title: 'Video Factory - AI Video Production',
      description: 'Desktop video editor with AI-powered features, FFmpeg processing, and Gemini integration',
    },
    ru: {
      title: 'Video Factory — ИИ видеопродакшн',
      description: 'Десктопный видеоредактор с ИИ‑функциями, FFmpeg и Gemini',
    },
  },
  'airchitecture': {
    tr: {
      title: 'Airchitecture - Meta-Agent AI Sistemi',
      description: 'Kendi ajan ordusunu oluşturan ve yöneten süper-organizasyon zeka mimarisi',
    },
    en: {
      title: 'Airchitecture - Meta-Agent AI System',
      description: 'Super-organization intelligence that creates and orchestrates its own agent army',
    },
    ru: {
      title: 'Airchitecture — мета‑агентная ИИ‑система',
      description: 'Сверхорганизация, создающая и оркестрирующая собственную армию агентов',
    },
  },

  // ═══ New Projects ═══

  'adpro-cli': {
    tr: {
      title: 'AdPro CLI - DevOps Otomasyon Aracı',
      description: 'Coolify deployment otomasyonu ve sunucu yönetimi için Go tabanlı CLI aracı',
    },
    en: {
      title: 'AdPro CLI - DevOps Automation Tool',
      description: 'Go-based CLI tool for Coolify deployment automation and server management',
    },
    ru: {
      title: 'AdPro CLI — DevOps‑автоматизация',
      description: 'CLI‑инструмент на Go для автоматизации Coolify и управления серверами',
    },
  },
  'solar-analysis-v2': {
    tr: {
      title: 'Solar Termal Analiz v2 - Gelişmiş Enerji Platformu',
      description: 'ML tahminleri ve 3D görselleştirme ile ikinci nesil güneş termal analizi',
    },
    en: {
      title: 'Solar Thermal Analysis v2 - Advanced Energy Platform',
      description: 'Second-generation solar thermal analysis with ML predictions and 3D visualization',
    },
    ru: {
      title: 'Солнечный анализ v2 — энергоплатформа',
      description: 'Второе поколение термоанализа солнечных панелей с ML и 3D‑визуализацией',
    },
  },
  'reflux': {
    tr: {
      title: 'Reflux - Flutter State Management Kütüphanesi',
      description: 'Sıfır boilerplate ile Flutter için hafif reaktif state management kütüphanesi',
    },
    en: {
      title: 'Reflux - Flutter State Management',
      description: 'Lightweight reactive state management library for Flutter with zero boilerplate',
    },
    ru: {
      title: 'Reflux — управление состоянием Flutter',
      description: 'Лёгкая библиотека реактивного состояния для Flutter без шаблонного кода',
    },
  },
  'lumora': {
    tr: {
      title: 'Lumora - AI Yazma Asistanı',
      description: 'Çoklu model desteği ve belge zekası ile bağlam-farkındanlı AI yazma asistanı',
    },
    en: {
      title: 'Lumora - AI Writing Assistant',
      description: 'Context-aware AI writing assistant with multi-model support and document intelligence',
    },
    ru: {
      title: 'Lumora — ИИ‑ассистент для письма',
      description: 'Контекстный ИИ‑ассистент для написания текстов с поддержкой нескольких моделей',
    },
  },
  'epinera': {
    tr: {
      title: 'Epinera - Sağlık Teknolojisi Platformu',
      description: 'AI destekli semptom analizi ile hastaları uzmanlarla buluşturan dijital sağlık platformu',
    },
    en: {
      title: 'Epinera - Health Tech Platform',
      description: 'Digital health platform connecting patients with specialists through AI-powered symptom analysis',
    },
    ru: {
      title: 'Epinera — медтех‑платформа',
      description: 'Цифровая платформа здравоохранения с ИИ‑анализом симптомов',
    },
  },
  'fitcheck': {
    tr: {
      title: 'FitCheck - AI Fitness Takipçisi',
      description: 'AI destekli antrenman form analizi ve kişiselleştirilmiş eğitim planları ile mobil fitness uygulaması',
    },
    en: {
      title: 'FitCheck - AI Fitness Tracker',
      description: 'Mobile fitness app with AI-powered workout form analysis and personalized training plans',
    },
    ru: {
      title: 'FitCheck — ИИ фитнес‑трекер',
      description: 'Фитнес‑приложение с ИИ‑анализом формы и персональными тренировками',
    },
  },
  'aura-ai': {
    tr: {
      title: 'Aura - AI Sesli Asistan Platformu',
      description: 'Özel uyanma kelimesi algılama ve plugin mimarisi ile çok-modlu AI sesli asistan',
    },
    en: {
      title: 'Aura - AI Voice Assistant Platform',
      description: 'Multi-modal AI voice assistant with custom wake word detection and plugin architecture',
    },
    ru: {
      title: 'Aura — ИИ голосовой ассистент',
      description: 'Мультимодальный голосовой ассистент с кастомным wake word и плагинами',
    },
  },
  'project-effort': {
    tr: {
      title: 'EstimatePro - Proje Efor Tahmini',
      description: 'Tarihsel analiz ve takım hız takibi ile veri odaklı proje efor tahmin aracı',
    },
    en: {
      title: 'EstimatePro - Project Effort Estimation',
      description: 'Data-driven project effort estimation tool with historical analysis and team velocity tracking',
    },
    ru: {
      title: 'EstimatePro — оценка трудозатрат',
      description: 'Инструмент оценки трудозатрат на основе данных с историческим анализом',
    },
  },
  'finance-flow': {
    tr: {
      title: 'FinanceFlow - Bütçe Yönetim Platformu',
      description: 'AI destekli harcama analizi ve tahminleme ile kişisel ve kurumsal bütçe takibi',
    },
    en: {
      title: 'FinanceFlow - Budget Management Platform',
      description: 'Personal and business budget tracking with AI-powered spending insights and forecasting',
    },
    ru: {
      title: 'FinanceFlow — управление бюджетом',
      description: 'Отслеживание бюджета с ИИ‑аналитикой расходов и прогнозированием',
    },
  },
  'ict-ultra': {
    tr: {
      title: 'ICT Ultra - Ticaret İndikatörleri Paketi',
      description: 'MetaTrader için gelişmiş ICT ticaret metodolojisi indikatörleri ve otomatik sinyal üretimi',
    },
    en: {
      title: 'ICT Ultra - Trading Indicators Suite',
      description: 'Advanced ICT trading methodology indicators for MetaTrader with automated signal generation',
    },
    ru: {
      title: 'ICT Ultra — торговые индикаторы',
      description: 'Индикаторы методологии ICT для MetaTrader с автоматической генерацией сигналов',
    },
  },
  'advantage-ads': {
    tr: {
      title: 'AdVantage - Dijital Reklam Otomasyonu',
      description: 'Çok kanallı kampanya yönetimi için AI destekli dijital reklam otomasyon platformu',
    },
    en: {
      title: 'AdVantage - Digital Ads Automation',
      description: 'AI-powered digital advertising automation platform for multi-channel campaign management',
    },
    ru: {
      title: 'AdVantage — автоматизация рекламы',
      description: 'ИИ‑платформа автоматизации рекламы для управления многоканальными кампаниями',
    },
  },
  'irobot-home': {
    tr: {
      title: 'iRobot Home - Akıllı Otomasyon Merkezi',
      description: 'Sahne yönetimi, enerji izleme ve sesli kontrol ile IoT ev otomasyon merkezi',
    },
    en: {
      title: 'iRobot Home - Smart Automation Hub',
      description: 'IoT home automation hub with scene management, energy monitoring, and voice control',
    },
    ru: {
      title: 'iRobot Home — умная автоматизация',
      description: 'IoT‑хаб для умного дома с управлением сценами и мониторингом энергии',
    },
  },
  'melkorstux': {
    tr: {
      title: 'Melkorstux - Güvenlik Araştırma Araç Seti',
      description: 'Otomatik zafiyet tarama ile modüler güvenlik araştırma ve pentest araç seti',
    },
    en: {
      title: 'Melkorstux - Security Research Toolkit',
      description: 'Modular security research and penetration testing toolkit with automated vulnerability scanning',
    },
    ru: {
      title: 'Melkorstux — набор для исследования безопасности',
      description: 'Модульный инструмент пентеста с автоматическим сканированием уязвимостей',
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

