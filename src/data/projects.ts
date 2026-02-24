export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'ai-ml' | 'trading' | 'mobile' | 'web' | 'automation' | 'tools';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  impact: string;
  challenges: string[];
  solutions: string[];
  metrics?: {
    users?: string;
    performance?: string;
    accuracy?: string;
    revenue?: string;
  };
  // New optional fields
  status?: 'production' | 'active' | 'wip' | 'planning';
  featured?: boolean;
  year?: number;
  colorAccent?: string;
  // Detail page enrichment fields
  architecture?: string[];
  timeline?: { phase: string; status: 'done' | 'active' | 'planned' }[];
  relatedProjects?: string[];
  linesOfCode?: string;
  screens?: string;
  endpoints?: string;
}

export const projects: Project[] = [
  {
    id: 'solar-analysis',
    title: 'Solar Panel Thermal Analysis System',
    description: 'Python 3.9+ Flask 2.0+ solar panel fault detection with ML, E2B Code Interpreter, and thermal image analysis',
    longDescription: 'Advanced solar panel analysis platform built with Python 3.9+ and Flask 2.0+. Features ML-based fault detection for solar panels, E2B Code Interpreter integration for dynamic analysis, thermal image processing for panel diagnostics, and a mobile-responsive web dashboard. Currently 72% complete.',
    technologies: ['Python 3.9+', 'Flask 2.0+', 'TensorFlow', 'OpenCV', 'E2B Code Interpreter', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'ML fault detection for solar panels',
      'E2B Code Interpreter integration',
      'Thermal image analysis for panel diagnostics',
      'Mobile-responsive web dashboard',
      'Predictive maintenance algorithms',
      'Performance optimization recommendations',
      'Comprehensive reporting dashboard'
    ],
    githubUrl: 'https://github.com/yourusername/solar-analysis',
    image: '/images/solar-analysis.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'ML-powered thermal analysis reducing maintenance costs by 40% and improving energy efficiency by 25%',
    challenges: [
      'Processing thermal imagery for accurate fault detection',
      'Integrating E2B Code Interpreter for dynamic analysis',
      'Building mobile-responsive dashboard for field workers'
    ],
    solutions: [
      'Custom CNN models for thermal image fault classification',
      'E2B sandboxed code execution for safe dynamic analysis',
      'Responsive Flask templates with progressive enhancement'
    ],
    metrics: {
      accuracy: '94.5%',
      performance: 'Real-time processing < 2 seconds',
      users: '72% complete'
    },
    status: 'wip',
    year: 2025,
    colorAccent: '#f59e0b'
  },
  {
    id: 'ai-algo-trade',
    title: 'AI Algo Trade - Quantum Trading Platform',
    description: 'Next-generation AI-powered trading platform with quantum algorithms',
    longDescription: 'Cutting-edge trading platform combining quantum computing algorithms with traditional AI/ML models for superior market prediction and automated trading execution.',
    technologies: ['Python', 'FastAPI', 'React', 'Next.js', 'MetaTrader5', 'TensorFlow', 'Quantum Computing', 'WebSocket', 'Redis', 'PostgreSQL'],
    features: [
      'Quantum algorithm-based market prediction',
      'Real-time AI pattern recognition',
      'Automated trading execution',
      'Advanced risk management system',
      'Multi-timeframe analysis',
      'Glassmorphism dashboard design',
      'Real-time performance monitoring'
    ],
    githubUrl: 'https://github.com/yourusername/ai-algo-trade',
    image: '/images/ai-algo-trade.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: '%300 performance improvement with quantum algorithms',
    challenges: [
      'Quantum algorithm optimization for real-time trading',
      'Microsecond-level latency requirements',
      'Complex AI model integration'
    ],
    solutions: [
      'Hybrid quantum-classical computing approach',
      'Custom memory management for high-frequency trading',
      'Advanced AI ensemble models (LSTM, Transformer, GRU)'
    ],
    metrics: {
      performance: 'Sub-millisecond execution',
      accuracy: '94.1% prediction accuracy',
      revenue: '$2M+ trading volume handled'
    }
  },
  {
    id: 'adpro-mobile',
    title: 'AdPro - AI-Powered Content & Social Media Platform',
    description: 'Flutter + Riverpod mobile app with AI-powered content creation, social media management, and Next.js 15 admin panel',
    longDescription: 'Cross-platform mobile application built with Flutter and Riverpod for AI-powered content creation and social media management. Integrates Google ML Kit and TensorFlow Lite for on-device AI capabilities, Supabase for backend, and Sentry for error monitoring. Includes a Next.js 15 admin panel and a dynamic theme system with holiday-specific themes.',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Supabase', 'Google ML Kit', 'TensorFlow Lite', 'Sentry', 'Next.js 15', 'TypeScript'],
    features: [
      'AI-powered content creation with on-device ML',
      'Social media management & scheduling',
      'Google ML Kit integration for smart features',
      'TensorFlow Lite on-device inference',
      'Next.js 15 admin panel',
      'Dynamic theme system with holiday themes',
      'Sentry error monitoring & crash reporting',
      'Supabase real-time backend'
    ],
    githubUrl: 'https://github.com/yourusername/AdPro',
    image: '/images/adpro-mobile.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'AI-powered content creation with on-device ML reducing server costs and improving response time',
    challenges: [
      'On-device ML inference with TensorFlow Lite performance optimization',
      'Dynamic theme system with seasonal/holiday variants',
      'Real-time social media management across multiple platforms'
    ],
    solutions: [
      'Optimized TFLite models with quantization for mobile deployment',
      'Theme engine with hot-swappable seasonal configurations',
      'Riverpod state management with Supabase real-time subscriptions'
    ],
    metrics: {
      users: '1000+ aktif kullanıcı',
      performance: 'App store rating: 4.8/5'
    },
    status: 'active',
    year: 2025,
    colorAccent: '#a78bfa'
  },
  {
    id: 'oto-mansuroglu',
    title: 'Oto Mansuroğlu E-commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features',
    longDescription: 'Comprehensive e-commerce platform featuring modern UI/UX, payment integrations, inventory management, and advanced analytics. Built with modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    features: [
      'Modern responsive design',
      'Secure payment processing',
      'Advanced product management',
      'User authentication & authorization',
      'Order tracking system',
      'Analytics dashboard',
      'SEO optimization'
    ],
    githubUrl: 'https://github.com/yourusername/oto-mansuroglu',
    image: '/images/oto-mansuroglu.jpg',
    category: 'web',
    difficulty: 'advanced',
    impact: 'Increased conversion rate by 35% with improved UX',
    challenges: [
      'Complex payment integration',
      'Performance optimization for large catalogs',
      'Security compliance requirements'
    ],
    solutions: [
      'Implemented secure payment gateway integration',
      'Created efficient product catalog with pagination',
      'Developed comprehensive security measures'
    ],
    metrics: {
      performance: 'Page load time < 2 seconds',
      users: '5000+ monthly visitors'
    }
  },
  {
    id: 'n8n-workflows',
    title: 'n8n Workflow Automation & RAG Chatbots',
    description: 'Şirketler için gelişmiş workflow otomasyonları ve self-hosted çözümler',
    longDescription: 'Şirketlerin iş süreçlerini otomatikleştiren n8n tabanlı workflow sistemleri ve kurumsal kültürü yansıtan RAG (Retrieval-Augmented Generation) chatbotlar geliştiriyorum.',
    technologies: ['n8n', 'Node.js', 'OpenAI API', 'Pinecone', 'Docker', 'PostgreSQL', 'Webhook', 'REST API'],
    features: [
      'Özel n8n workflow tasarımı ve geliştirme',
      'Self-hosted n8n kurulumları',
      'RAG tabanlı akıllı chatbotlar',
      'Kurumsal veri entegrasyonu',
      'Otomatik raporlama sistemleri',
      'Webhook ve API entegrasyonları',
      'Real-time bildirim sistemleri'
    ],
    githubUrl: 'https://github.com/yourusername/n8n-workflows',
    image: '/images/n8n-workflows.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Şirketlerin iş süreçlerinde %70 zaman tasarrufu sağladı',
    challenges: [
      'Karmaşık iş süreçlerinin otomatikleştirilmesi',
      'Farklı sistemler arası veri senkronizasyonu',
      'Kurumsal güvenlik gereksinimlerinin karşılanması'
    ],
    solutions: [
      'Modüler workflow tasarımı ile esnek çözümler',
      'API gateway kullanarak güvenli veri transferi',
      'Self-hosted çözümlerle tam veri kontrolü'
    ],
    metrics: {
      users: '10+ şirket',
      performance: '%99.9 uptime',
      accuracy: '%95 automation success rate'
    }
  },
  {
    id: 'slack-integration',
    title: 'Slack Müşteri Hizmetleri Otomasyonu',
    description: 'Yapay zeka destekli müşteri hizmetleri otomasyon platformu',
    longDescription: 'Slack ile entegre çalışan akıllı müşteri hizmetleri sistemi. AI chatbotlar, bilet yönetimi ve analitik özellikleri ile müşteri destek süreçlerini otomatikleştiriyor.',
    technologies: ['Node.js', 'Slack API', 'OpenAI', 'PostgreSQL', 'Redis', 'React', 'WebSocket'],
    features: [
      'Yapay zeka destekli chatbot entegrasyonu',
      'Otomatik bilet yönlendirme',
      'Gerçek zamanlı analitik',
      'Çoklu kanal desteği',
      'Özel iş akışı otomasyonu',
      'Performans izleme'
    ],
    githubUrl: 'https://github.com/yourusername/slack-integration',
    image: '/images/slack-integration.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Yanıt süresini %70 azalttı ve müşteri memnuniyetini artırdı',
    challenges: [
      'Karmaşık iş akışı otomasyonu',
      'AI yanıt doğruluğu',
      'Çoklu platform entegrasyonu'
    ],
    solutions: [
      'Özel iş akışı motoru geliştirdim',
      'Bağlam farkında AI yanıtları uyguladım',
      'Birden fazla platform için birleşik API oluşturdum'
    ],
    metrics: {
      performance: 'Yanıt süresi < 30 saniye',
      accuracy: '%92 müşteri memnuniyeti'
    }
  },

  // ═══════════════════════════════════════
  // NEW PROJECTS — Desktop & Claude History
  // ═══════════════════════════════════════

  {
    id: 'hayalet',
    title: 'Hayalet - 7D Decision Engine Trading System',
    description: 'Python 3.8+ Flask trading system for MT4/MQL4 with 7D decision engine, 13+ toggleable modules, and multi-instance support',
    longDescription: 'Production-grade algorithmic trading system built with Python 3.8+ and Flask for MT4/MQL4 integration. Features a 7-Dimensional decision engine powered by NumPy, 13+ toggleable analysis modules (stealth_evolver, indicator_scoring, ict_analysis, etc.), 15+ API endpoints, a real-time web dashboard, and multi-instance support for running multiple trading strategies concurrently.',
    technologies: ['Python 3.8+', 'Flask', 'MQL4', 'NumPy', 'WebSocket', 'REST API', 'Telegram API'],
    features: [
      '7D decision engine with NumPy',
      '13+ toggleable modules (stealth_evolver, indicator_scoring, ict_analysis...)',
      '15+ REST API endpoints',
      'Real-time Flask web dashboard',
      'Multi-instance trading support',
      'Telegram notifications system',
      'Stealth evolution & indicator scoring',
      'ICT analysis module integration'
    ],
    githubUrl: 'https://github.com/elkekoitan/Prometheus',
    image: '/images/hayalet.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: 'Modular 7D decision engine with 13+ toggleable analysis modules and multi-instance trading',
    challenges: [
      'Building a 7-dimensional decision engine for market analysis',
      'Managing 13+ independently toggleable trading modules',
      'Supporting multiple concurrent trading instances'
    ],
    solutions: [
      '7D NumPy-based decision matrix with configurable dimension weights',
      'Plugin architecture with hot-swappable module activation',
      'Process isolation with shared state for multi-instance coordination'
    ],
    metrics: {
      performance: '15+ API endpoints, real-time dashboard',
      accuracy: '13+ analysis modules running concurrently'
    },
    status: 'active',
    featured: true,
    year: 2024,
    colorAccent: '#10b981',
    architecture: [
      'Python Flask API Server',
      'MT4/MQL4 Bridge Layer',
      'Prediction Engine (NumPy + PyTorch)',
      'Real-time WebSocket Feed',
      'Dashboard CLI Interface',
      'Telegram Notification Service',
    ],
    timeline: [
      { phase: 'Core Engine & MT4 Bridge', status: 'done' },
      { phase: '7D Decision Matrix', status: 'done' },
      { phase: '13 Analysis Modules', status: 'done' },
      { phase: 'Multi-Instance Support', status: 'active' },
      { phase: 'Go HFT Integration', status: 'planned' },
    ],
    relatedProjects: ['go-trade', 'ict-ultra'],
  },
  {
    id: 'go-trade',
    title: 'Go-Trade MT5 Algorithmic Trading',
    description: 'MT5 algorithmic trading system with C++ DLL shared memory bridge and Next.js dashboard',
    longDescription: 'Advanced extension of the Hayalet ecosystem for MetaTrader 5. Uses shared memory (SHM) bridge between C++20 DLL and Go engine for zero-copy data transfer. Includes full Next.js trading dashboard with TR/EN internationalization.',
    technologies: ['Go', 'C++20', 'MQL5', 'Next.js', 'TypeScript', 'WebSocket', 'Shared Memory'],
    features: [
      'C++20 DLL ↔ Go shared memory bridge',
      'Zero-copy SHM struct alignment',
      'Grid + cascade + guard trading strategies',
      'Smart close position management',
      'Next.js dashboard with i18n (TR/EN)',
      'Real-time WebSocket data streaming'
    ],
    githubUrl: 'https://github.com/elkekoitan/go-trade',
    image: '/images/go-trade.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: 'Zero-copy shared memory architecture achieving microsecond-level data transfer',
    challenges: [
      'Struct alignment between C++ DLL and Go for shared memory',
      'Real-time data synchronization across 3 languages',
      'Building low-latency trading pipeline'
    ],
    solutions: [
      'Custom SHM protocol with precise struct padding',
      'Hybrid architecture: MQL5 → C++ DLL → SHM → Go → WebSocket → Next.js',
      'Lock-free concurrent data structures in Go'
    ],
    metrics: {
      performance: 'Microsecond SHM transfer',
      accuracy: '4 completed development phases'
    },
    status: 'active',
    featured: true,
    year: 2025,
    colorAccent: '#3b82f6'
  },
  {
    id: 'barter-qween',
    title: 'Barter Qween - University Exchange Platform',
    description: 'Flutter 3.24.3 barter platform for Bogazici University students with neuromorphic UI design system (40+ shadow presets)',
    longDescription: 'Modern peer-to-peer barter platform for university students. 45K+ lines of code across 35+ screens and 24+ custom widgets. Features ultra-deep neuromorphic UI design system with 40+ shadow presets, real-time chat, Google Pay integration, and BLoC state management with Clean Architecture. Firebase backend with Firestore, Cloud Functions, Auth, Storage, and FCM push notifications. 65% production ready, beta v1.2.0.',
    technologies: ['Flutter 3.24.3', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Firebase Storage', 'Cloud Functions', 'FCM', 'BLoC', 'GetIt DI', 'Injectable', 'Google Pay'],
    features: [
      'Neuromorphic UI design system with 40+ shadow presets',
      '35+ screens with 24+ custom widgets (45K LOC)',
      'Real-time chat messaging with Firebase',
      'Google Pay integration',
      'FCM push notifications system',
      'Rating & review system',
      'Analytics tracking dashboard',
      'Clean Architecture with BLoC pattern & GetIt DI'
    ],
    githubUrl: 'https://github.com/qween-code/barter-qween',
    image: '/images/barter-qween.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Created university-first barter economy with Pinterest-level design quality — 45K LOC, 35+ screens',
    challenges: [
      'Building neuromorphic UI design system with 40+ shadow presets in Flutter',
      'Real-time messaging with offline-first architecture across 35+ screens',
      'Secure payment integration for student transactions'
    ],
    solutions: [
      '24+ custom Flutter widgets with layered shadow/gradient compositions',
      'Firebase Firestore with offline persistence and conflict resolution',
      'Google Pay SDK with Firebase Cloud Functions for secure processing'
    ],
    metrics: {
      users: 'Beta v1.2.0 (65% production ready)',
      performance: 'iOS & Android cross-platform, 45K+ LOC'
    },
    status: 'active',
    year: 2025,
    colorAccent: '#f472b6',
    linesOfCode: '45,000+',
    screens: '35+',
    architecture: [
      'Flutter 3.24.3 Presentation Layer',
      'BLoC State Management + GetIt DI',
      'Clean Architecture (Domain/Data/Presentation)',
      'Firebase Backend (Firestore + Auth + Storage)',
      'Cloud Functions (4 deployed)',
      'FCM Push Notification Service',
    ],
    timeline: [
      { phase: 'Architecture & Design System', status: 'done' },
      { phase: '24+ Custom Widgets', status: 'done' },
      { phase: 'Chat & Notifications', status: 'done' },
      { phase: 'Payment Integration', status: 'active' },
      { phase: 'Beta Testing & Launch', status: 'planned' },
    ],
  },
  {
    id: 'diagnostic',
    title: 'AI Cancer Detection System',
    description: 'Multi-modal cancer detection with PyTorch + scikit-learn ML pipeline, GPT-4 consultation, HL7/FHIR, and C++/RTOS firmware',
    longDescription: 'Advanced medical diagnostic system combining impedance spectroscopy and optical analysis with AI. Features a comprehensive ML pipeline: PyTorch deep learning (1D-CNN, BiLSTM, mini-Transformer) plus scikit-learn classical models (SVM, Random Forest, XGBoost) for multi-modal fusion. OpenAI GPT-4 consultation layer for second opinions. FastAPI inference service, HL7/FHIR medical standard compliance, PDF/A diagnostic report generation, and C++/RTOS device firmware.',
    technologies: ['Python', 'PyTorch', 'scikit-learn', 'FastAPI', 'C++', 'RTOS', 'OpenAI GPT-4', 'PostgreSQL', 'MongoDB', 'HL7', 'FHIR'],
    features: [
      'Multi-modal fusion (impedance + optical spectroscopy)',
      'PyTorch deep learning (1D-CNN, BiLSTM, Transformer)',
      'scikit-learn ensemble (SVM, Random Forest, XGBoost)',
      'OpenAI GPT-4 consultation layer',
      'HL7 v2 & FHIR medical standard compliance',
      'PDF/A diagnostic report generation',
      'FastAPI inference service',
      'DVC & MLflow experiment tracking',
      'Device firmware (C++/RTOS)'
    ],
    githubUrl: 'https://github.com/elkekoitan/diagnostic',
    image: '/images/diagnostic.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Multi-modal AI diagnostics with GPT-4 consultation and HL7/FHIR compliance',
    challenges: [
      'Multi-modal data fusion (impedance time-series + optical spectrum)',
      'Integrating GPT-4 consultation with ML pipeline outputs',
      'Real-time inference on embedded hardware with C++/RTOS'
    ],
    solutions: [
      'Ensemble: SVM/RF/XGB classical + 1D-CNN/BiLSTM/Transformer deep learning fusion',
      'GPT-4 context-aware consultation with structured diagnostic prompts',
      'Optimized TensorRT inference for embedded deployment'
    ],
    metrics: {
      accuracy: 'Multi-modal ensemble classification',
      performance: 'Real-time embedded inference'
    },
    status: 'wip',
    featured: true,
    year: 2025,
    colorAccent: '#ef4444',
    architecture: [
      'PyTorch Deep Learning (1D-CNN, BiLSTM, Transformer)',
      'scikit-learn Ensemble (SVM, RF, XGBoost)',
      'FastAPI Inference Service',
      'OpenAI GPT-4 Consultation Layer',
      'C++/RTOS Device Firmware',
      'HL7/FHIR Medical Standards Bridge',
    ],
    timeline: [
      { phase: 'ML Pipeline & Model Training', status: 'done' },
      { phase: 'FastAPI Inference Service', status: 'done' },
      { phase: 'GPT-4 Consultation Layer', status: 'active' },
      { phase: 'Device Firmware (C++/RTOS)', status: 'active' },
      { phase: 'Clinical Trials & Certification', status: 'planned' },
    ],
    relatedProjects: ['solar-analysis-v2'],
  },
  {
    id: 'omnisell',
    title: 'OmniSell - E-commerce Automation Platform',
    description: 'AI-powered multi-marketplace listing automation with BullMQ job queues, Sharp image processing, and AWS S3 storage',
    longDescription: 'Unified e-commerce management platform that synchronizes product listings across Etsy, Amazon, Shopify, and Trendyol. Built with Fastify and Prisma in TypeScript. Features AI-powered listing generation via OpenAI API, BullMQ for background job queues, Sharp for image processing and optimization, and AWS S3 for media storage.',
    technologies: ['TypeScript', 'Fastify', 'Prisma', 'Vitest', 'OpenAI API', 'AWS S3', 'BullMQ', 'Sharp', 'Etsy API', 'Amazon API', 'Shopify API', 'Trendyol API'],
    features: [
      'Multi-marketplace sync (Etsy, Amazon, Shopify, Trendyol)',
      'AI listing generation via OpenAI API',
      'BullMQ background job queues for async processing',
      'Sharp image processing & optimization',
      'AWS S3 media storage',
      'Automated inventory management',
      'Marketplace adapter interface pattern',
      'Comprehensive test suite with Vitest'
    ],
    githubUrl: 'https://github.com/elkekoitan/etsy-ai-integration',
    image: '/images/omnisell.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Unified 4 marketplace APIs with AI listing generation and async job processing',
    challenges: [
      'Normalizing different marketplace API schemas',
      'Processing and optimizing product images at scale',
      'Reliable async job processing for bulk listing operations'
    ],
    solutions: [
      'Adapter pattern with unified marketplace interface',
      'Sharp pipeline with AWS S3 for optimized image delivery',
      'BullMQ with Redis-backed queues for reliable job processing'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#f59e0b'
  },
  {
    id: 'firealert',
    title: 'FireAlert - Fire Detection Mobile App',
    description: 'Expo + React Native fire alert system with NASA FIRMS data, NestJS backend, Detox E2E, and OpenAPI type generation',
    longDescription: 'Mobile application that leverages NASA FIRMS (Fire Information for Resource Management System) satellite data for real-time fire detection and alerting. Built with Expo/React Native and TypeScript for cross-platform deployment, NestJS for the backend API. Features comprehensive documentation suite, Detox E2E testing framework, and OpenAPI-based automatic type generation for type-safe API communication.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'NASA FIRMS API', 'JWT', 'Detox', 'OpenAPI'],
    features: [
      'Real-time NASA FIRMS satellite fire data',
      'Push notification alerts for nearby fires',
      'Interactive map with fire locations',
      'User profile management with JWT auth',
      'Detox E2E testing framework',
      'OpenAPI automatic type generation',
      'Comprehensive documentation suite',
      'Alerts dashboard with filtering'
    ],
    githubUrl: 'https://github.com/elkekoitan/firealert-mobile-app',
    image: '/images/firealert.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Real-time fire detection using satellite data for public safety with full E2E test coverage',
    challenges: [
      'Processing NASA FIRMS satellite data in real-time',
      'Geolocation-based push notification system',
      'Maintaining type-safe API contracts across frontend and backend'
    ],
    solutions: [
      'Efficient GeoJSON processing pipeline for satellite data',
      'Background location tracking with geofencing for alerts',
      'OpenAPI schema-driven type generation for end-to-end type safety'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#dc2626'
  },
  {
    id: 'indirim-kanallari',
    title: 'Indirim Kanallari - Deal Scraper & Telegram Bot',
    description: 'Node.js 20+ LTS deal scraper with 11 retailer scrapers, Telegram bot with inline voting, 30-day price history, and merchant reputation',
    longDescription: 'Intelligent deal discovery system built with Node.js 20+ LTS and TypeScript. Uses Prisma ORM to manage data, scrapes 11 Turkish retailers (Trendyol, BIM, A101, Migros, Amazon TR, and more), and distributes quality deals via Telegram bot with inline voting. Features deal quality scoring algorithm, 30-day price history tracking, merchant reputation system, Next.js 15 admin panel, and similarity deduplication engine.',
    technologies: ['Node.js 20+ LTS', 'TypeScript', 'Prisma ORM', 'SQLite', 'Next.js 15', 'Telegram Bot API', 'Puppeteer', 'Cheerio'],
    features: [
      '11 retailer scrapers (Trendyol, BIM, A101, Migros, Amazon TR...)',
      'Telegram bot with inline voting system',
      'Deal quality scoring algorithm',
      '30-day price history tracking',
      'Merchant reputation system',
      'Next.js 15 admin panel',
      'Similarity deduplication engine',
      'Seasonal bonus scoring'
    ],
    githubUrl: 'https://github.com/elkekoitan/indirim-kanallari',
    image: '/images/indirim-kanallari.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Automated discovery and distribution of 300+ deals per cycle with merchant reputation tracking',
    challenges: [
      'Bypassing anti-scraping measures (CAPTCHA, WAF, rate limiting) across 11 retailers',
      'Building accurate merchant reputation and deal quality scoring',
      'Maintaining 30-day price history with efficient storage'
    ],
    solutions: [
      'API-first scraping with Cheerio fallback, headless Puppeteer for JS-heavy sites',
      'Composite scoring with merchant history, price delta, and user voting signals',
      'Prisma ORM with efficient time-series queries for price history'
    ],
    metrics: {
      performance: '~190 deals/cycle from Trendyol alone',
      users: '12+ Telegram channels'
    },
    status: 'production',
    featured: true,
    year: 2025,
    colorAccent: '#8b5cf6',
    architecture: [
      'Node.js 20+ LTS Scraper Engine',
      'Puppeteer + Cheerio (11 Retailers)',
      'Prisma ORM + SQLite Database',
      'Telegram Bot API Distribution',
      'Next.js 15 Admin Panel',
      'Deal Quality Scoring Algorithm',
    ],
    timeline: [
      { phase: 'Scraper Engine & Retailers', status: 'done' },
      { phase: 'Telegram Bot Integration', status: 'done' },
      { phase: 'Admin Panel (Next.js 15)', status: 'done' },
      { phase: 'Merchant Reputation System', status: 'done' },
      { phase: 'ML-based Price Prediction', status: 'planned' },
    ],
  },
  {
    id: 'mandira-claude',
    title: 'Mandira Sut Takip v2.0 - Dairy Farm Management',
    description: 'Modern dairy farm management system with Next.js 14, Firebase, React Query + Zustand, and 7 core modules',
    longDescription: 'Comprehensive dairy farm management platform v2.0 with 7 core modules: animal management, milk production tracking, batch management, sales/shipping, financial tracking, health/vaccines, and reporting. Built with Next.js 14 App Router, Firebase (Firestore, Auth, Hosting), React Query for server state, and Zustand for client state management.',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Firebase Firestore', 'Firebase Auth', 'Firebase Hosting', 'Zustand', 'React Query', 'Tailwind CSS'],
    features: [
      'Animal management module',
      'Milk production tracking & analytics',
      'Batch management system',
      'Sales & shipping management',
      'Financial tracking & reporting',
      'Health records & vaccine scheduling',
      'Firebase Auth & Firestore real-time sync',
      'React Query + Zustand hybrid state management'
    ],
    githubUrl: 'https://github.com/qween-code/mandira-sut-takip',
    image: '/images/mandira-claude.jpg',
    category: 'web',
    difficulty: 'advanced',
    impact: 'Digitized dairy farm operations with 7 core modules for complete farm lifecycle management (v2.0)',
    challenges: [
      'Real-time data synchronization for field workers across 7 modules',
      'Offline-capable data entry for rural areas',
      'Complex analytics across seasonal production cycles'
    ],
    solutions: [
      'Firebase Firestore with real-time listeners per module',
      'Service worker caching with background sync',
      'React Query server state + Zustand client state for optimal performance'
    ],
    status: 'production',
    year: 2024,
    colorAccent: '#22c55e'
  },
  {
    id: 'pospro',
    title: 'PosPro - Enterprise Hybrid POS System',
    description: 'Enterprise-grade Flutter 3.16+ POS with FastAPI, 70+ DB tables, 200+ API endpoints, offline-first — 3x faster than Shopify POS',
    longDescription: 'Enterprise-grade hybrid Point of Sale system built with Flutter 3.16+ and FastAPI with PostgreSQL 15+. Features 70+ database tables, 200+ API endpoints, offline-first architecture with automatic sync. Infrastructure includes Redis caching, Celery task queues, Docker containerization, and Kubernetes orchestration. Integrated Stripe/PayPal payment processing. Benchmarked at 3x faster than Shopify POS with TCO savings of $200K+ for enterprise deployments.',
    technologies: ['Flutter 3.16+', 'Dart', 'FastAPI', 'PostgreSQL 15+', 'Redis', 'Celery', 'Docker', 'Kubernetes', 'Stripe', 'PayPal', 'SQLite'],
    features: [
      'Cross-platform (Windows/Linux/Web/iOS/Android)',
      '70+ database tables, 200+ API endpoints',
      'Offline-first with automatic sync',
      'Redis caching & Celery task queues',
      'Stripe & PayPal payment integration',
      'Docker & Kubernetes deployment',
      'Turkish tax compliance (e-fatura)',
      'Real-time analytics with fl_chart',
      'Multi-branch management'
    ],
    image: '/images/pospro.jpg',
    category: 'web',
    difficulty: 'expert',
    impact: '3x faster than Shopify POS with TCO savings of $200K+ for enterprise deployments',
    challenges: [
      'Managing 70+ database tables with complex relational integrity',
      'Offline-first architecture with conflict resolution across 200+ endpoints',
      'Kubernetes orchestration for multi-tenant enterprise deployments'
    ],
    solutions: [
      'PostgreSQL 15+ with partitioning and Redis caching layer',
      'SQLite local store with Celery-driven background sync',
      'Kubernetes with Helm charts for automated scaling and deployment'
    ],
    metrics: {
      performance: '3x faster than Shopify POS',
      revenue: 'TCO savings $200K+'
    },
    status: 'active',
    featured: true,
    year: 2025,
    colorAccent: '#06b6d4',
    endpoints: '200+',
    architecture: [
      'Flutter 3.16+ Cross-Platform Client',
      'FastAPI 0.104+ Backend Server',
      'PostgreSQL 15+ (70+ Tables)',
      'Redis Cache + Celery Task Queues',
      'SQLite Offline Store + Auto-Sync',
      'Docker + Kubernetes Orchestration',
    ],
    timeline: [
      { phase: 'Database Schema (70+ tables)', status: 'done' },
      { phase: 'API Layer (200+ endpoints)', status: 'done' },
      { phase: 'Flutter POS Client', status: 'done' },
      { phase: 'Payment Gateway Integration', status: 'active' },
      { phase: 'Multi-Tenant SaaS Deploy', status: 'planned' },
    ],
    relatedProjects: ['omnisell'],
  },
  {
    id: 'sinav-analiz',
    title: 'Sinav Analiz Uzmani v2.0 - Education Analytics',
    description: 'Advanced exam analysis platform for Turkish educators with Gemini AI pedagogy, Recharts visualization, and PDF/Word/Excel reporting',
    longDescription: 'Comprehensive education analytics platform v2.0 aligned with Turkish MEB curriculum. Built with React 18, TypeScript, and Vite. Uses Supabase (PostgreSQL with RLS, Auth) for backend, Google Gemini AI for pedagogy recommendations, Recharts for data visualization, and jsPDF + docx for PDF/Word report generation. Features Excel import/export, Google OAuth 2.0 authentication, and 17 analysis modules.',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'RLS', 'Google Gemini AI', 'Recharts', 'jsPDF', 'docx', 'Google OAuth 2.0'],
    features: [
      '17 analysis modules for exam evaluation',
      'MEB curriculum-aligned analytics',
      'Google Gemini AI pedagogy recommendations',
      'Recharts interactive data visualizations',
      'PDF/Word report generation (jsPDF + docx)',
      'Excel import/export for exam data',
      'Google OAuth 2.0 authentication',
      'Supabase with Row Level Security (RLS)',
      'Smart prompt builder for AI assistant'
    ],
    githubUrl: 'https://github.com/salihaerdol/sinav-analiz-uzmani',
    image: '/images/sinav-analiz.jpg',
    category: 'ai-ml',
    difficulty: 'advanced',
    impact: 'AI-enhanced MEB curriculum-aligned education analytics serving Turkish teachers with 17 analysis modules (v2.0)',
    challenges: [
      'Aligning analytics with complex MEB curriculum standards',
      'Generating pedagogically sound AI suggestions with Gemini',
      'Multi-format report generation (PDF, Word, Excel)'
    ],
    solutions: [
      'Hierarchical curriculum mapping with Supabase PostgreSQL + RLS',
      'Fine-tuned Gemini prompts with pedagogical context injection',
      'jsPDF + docx libraries for rich report export with Recharts visualizations'
    ],
    metrics: {
      accuracy: '17 analysis modules',
      users: 'v2.0.0 released'
    },
    status: 'production',
    year: 2025,
    colorAccent: '#eab308'
  },
  {
    id: 'video-factory',
    title: 'Video Factory - AI Video Production',
    description: 'Desktop video editor with AI-powered features, FFmpeg processing, and Gemini integration',
    longDescription: 'Free desktop video production application with AI-powered editing features. Designed as an Electron/Tauri application with FFmpeg for video processing and Google Gemini AI for intelligent editing suggestions. Planned 30 features across 8 development phases.',
    technologies: ['Electron', 'TypeScript', 'FFmpeg', 'Google Gemini AI', 'React', 'Tauri'],
    features: [
      'AI-powered video editing suggestions',
      'FFmpeg-based video processing pipeline',
      'Template-based video generation',
      'Multi-track timeline editor',
      'AI subtitle generation',
      'Batch processing capabilities',
      'Cross-platform desktop app'
    ],
    image: '/images/video-factory.jpg',
    category: 'ai-ml',
    difficulty: 'advanced',
    impact: 'Democratizing video production with AI-powered free desktop editor',
    challenges: [
      'Real-time video preview with FFmpeg pipeline',
      'AI-assisted editing that understands video context',
      'Cross-platform desktop deployment'
    ],
    solutions: [
      'Streaming FFmpeg processing with WebSocket preview',
      'Gemini multimodal API for scene understanding',
      'Tauri for lightweight native desktop packaging'
    ],
    status: 'planning',
    year: 2026,
    colorAccent: '#d946ef'
  },
  {
    id: 'airchitecture',
    title: 'Airchitecture - Meta-Agent AI Architecture',
    description: 'Enterprise intelligence system with thousands of specialized AI agents, orchestration management, collective memory, and zero-trust security',
    longDescription: 'Enterprise-grade meta-agent AI architecture system documented across 9 comprehensive specification files. Designed for enterprise intelligence with thousands of specialized AI agents, orchestration management for agent lifecycle and coordination, collective memory systems for shared knowledge, and zero-trust security architecture. Covers vision, technical infrastructure, use cases, security/ethics, integration patterns, and system architecture.',
    technologies: ['LangChain', 'Python', 'Docker', 'Kubernetes', 'gRPC', 'Redis', 'PostgreSQL'],
    features: [
      '9 comprehensive architecture documentation files',
      'Thousands of specialized AI agents',
      'Orchestration management system',
      'Collective memory for shared knowledge',
      'Zero-trust security architecture',
      'Dynamic agent lifecycle management',
      'Enterprise integration patterns',
      'Scalable Kubernetes deployment'
    ],
    image: '/images/airchitecture.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Enterprise intelligence architecture with thousands of specialized AI agents and zero-trust security',
    challenges: [
      'Orchestrating thousands of specialized AI agents at scale',
      'Building collective memory systems for persistent shared knowledge',
      'Implementing zero-trust security for autonomous agent networks'
    ],
    solutions: [
      'Hierarchical orchestration with agent specialization tiers',
      'Distributed vector store with event-sourced collective memory',
      'Zero-trust architecture with per-agent certificates and audit trails'
    ],
    status: 'planning',
    featured: true,
    year: 2025,
    colorAccent: '#14b8a6'
  },

  // ═══════════════════════════════════════
  // NEW PROJECTS — GitHub & Claude History
  // ═══════════════════════════════════════

  {
    id: 'adpro-cli',
    title: 'AdPro CLI - DevOps Automation Tool',
    description: 'Go-based CLI tool for Coolify deployment automation and server management',
    longDescription: 'Command-line DevOps tool written in Go for automating Coolify deployments, server provisioning, and infrastructure management. Features interactive prompts, multi-environment support, and CI/CD pipeline integration.',
    technologies: ['Go', 'Cobra CLI', 'Coolify API', 'Docker', 'SSH', 'YAML'],
    features: [
      'Interactive deployment wizard',
      'Multi-environment configuration (dev/staging/prod)',
      'Coolify API integration for app management',
      'SSH tunnel management for remote servers',
      'Docker compose orchestration',
      'CI/CD pipeline generation'
    ],
    githubUrl: 'https://github.com/elkekoitan/adpro-cli',
    image: '/images/adpro-cli.jpg',
    category: 'tools',
    difficulty: 'advanced',
    impact: 'Streamlined deployment workflow reducing deploy time from 30min to 2min',
    challenges: [
      'Cross-platform CLI compatibility (Windows/Linux/Mac)',
      'Secure credential management for multiple servers',
      'Graceful error handling for network failures'
    ],
    solutions: [
      'Cobra CLI framework with platform-specific build tags',
      'OS keychain integration for secure credential storage',
      'Retry logic with exponential backoff and circuit breaker'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#6ee7d0'
  },
  {
    id: 'solar-analysis-v2',
    title: 'Solar Thermal Analysis v2 - Advanced Energy Platform',
    description: 'Second-generation solar thermal analysis with ML predictions and 3D visualization',
    longDescription: 'Enhanced solar energy analysis platform combining thermal imaging, weather data, and machine learning for predictive maintenance. Features 3D panel visualization, anomaly classification, and automated report generation for solar farm operators.',
    technologies: ['Python', 'PyTorch', 'Three.js', 'FastAPI', 'TimescaleDB', 'Grafana', 'Docker'],
    features: [
      'ML-based thermal anomaly classification',
      '3D solar panel visualization with Three.js',
      'Weather-correlated performance predictions',
      'Automated maintenance scheduling',
      'TimescaleDB time-series analytics',
      'Grafana monitoring dashboards',
      'PDF report generation with charts'
    ],
    githubUrl: 'https://github.com/elkekoitan/solar-analysis-v2',
    image: '/images/solar-analysis-v2.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Reduced false positive rate by 60% compared to v1 with improved ML models',
    challenges: [
      'Processing TB-scale thermal imaging data efficiently',
      'Correlating weather patterns with panel performance',
      'Real-time 3D rendering of large solar farm layouts'
    ],
    solutions: [
      'Distributed processing with Dask and GPU acceleration',
      'LSTM weather prediction integrated with anomaly detection',
      'LOD (Level of Detail) system for scalable 3D rendering'
    ],
    metrics: {
      accuracy: '97.2% anomaly detection',
      performance: '3x faster than v1'
    },
    status: 'active',
    featured: true,
    year: 2025,
    colorAccent: '#e8c07a'
  },
  {
    id: 'reflux',
    title: 'Reflux - Flutter State Management',
    description: 'Lightweight reactive state management library for Flutter with zero boilerplate',
    longDescription: 'Open-source Flutter state management library inspired by Redux but designed for simplicity. Features reactive streams, middleware support, time-travel debugging, and automatic widget rebuilds with minimal boilerplate code.',
    technologies: ['Flutter', 'Dart', 'RxDart', 'CI/CD', 'pub.dev'],
    features: [
      'Zero-boilerplate reactive state management',
      'Middleware pipeline for side effects',
      'Time-travel debugging support',
      'Automatic widget rebuild optimization',
      'DevTools integration',
      'Comprehensive test utilities'
    ],
    githubUrl: 'https://github.com/qween-code/reflux',
    image: '/images/reflux.jpg',
    category: 'tools',
    difficulty: 'advanced',
    impact: 'Reduced state management code by 70% compared to BLoC pattern',
    challenges: [
      'Achieving zero-boilerplate API without sacrificing type safety',
      'Memory-efficient reactive stream management',
      'Compatible with existing Flutter ecosystem'
    ],
    solutions: [
      'Code generation with build_runner for type-safe stores',
      'Weak reference streams with automatic disposal',
      'Adapter pattern for BLoC/Provider migration'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#c4b5e0'
  },
  {
    id: 'lumora',
    title: 'Lumora - AI Writing Assistant',
    description: 'Context-aware AI writing assistant with multi-model support and document intelligence',
    longDescription: 'Intelligent writing assistant that understands document context, maintains consistent tone, and supports multiple AI models. Features include document analysis, style matching, auto-completion, and collaborative editing with AI suggestions.',
    technologies: ['TypeScript', 'Next.js', 'OpenAI API', 'Anthropic API', 'Supabase', 'Tiptap', 'LangChain'],
    features: [
      'Multi-model AI support (GPT-4, Claude)',
      'Context-aware document analysis',
      'Style and tone matching',
      'Real-time AI suggestions in editor',
      'Document template library',
      'Collaborative editing with AI'
    ],
    githubUrl: 'https://github.com/qween-code/lumora',
    image: '/images/lumora.jpg',
    category: 'ai-ml',
    difficulty: 'advanced',
    impact: 'Improved writing productivity by 3x with context-aware AI assistance',
    challenges: [
      'Maintaining document context across long documents',
      'Consistent tone matching across different writing styles',
      'Low-latency AI suggestions during typing'
    ],
    solutions: [
      'Sliding window context with hierarchical summarization',
      'Fine-tuned style embeddings for tone analysis',
      'Streaming API with speculative decoding for instant suggestions'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#e8a0a0'
  },
  {
    id: 'epinera',
    title: 'Epinera - Health Tech Platform',
    description: 'Digital health platform connecting patients with specialists through AI-powered symptom analysis',
    longDescription: 'Healthcare technology platform that uses AI for preliminary symptom analysis, connects patients with relevant specialists, and manages appointment scheduling. Built with HIPAA-compliant architecture and real-time telemedicine capabilities.',
    technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'WebRTC', 'Redis'],
    features: [
      'AI-powered symptom checker',
      'Specialist matching algorithm',
      'Real-time video consultations (WebRTC)',
      'Electronic health records integration',
      'Appointment scheduling system',
      'Prescription management'
    ],
    githubUrl: 'https://github.com/qween-code/epinera',
    image: '/images/epinera.jpg',
    category: 'web',
    difficulty: 'expert',
    impact: 'Reduced patient wait time by 60% with AI-driven specialist routing',
    challenges: [
      'HIPAA-compliant data handling and storage',
      'Real-time video quality optimization',
      'Accurate symptom-to-specialist matching'
    ],
    solutions: [
      'End-to-end encryption with audit logging',
      'Adaptive bitrate WebRTC with TURN server fallback',
      'NLP-based symptom analysis with medical ontology mapping'
    ],
    status: 'wip',
    year: 2025,
    colorAccent: '#6ee7d0'
  },
  {
    id: 'fitcheck',
    title: 'FitCheck - AI Fitness Tracker',
    description: 'Mobile fitness app with AI-powered workout form analysis and personalized training plans',
    longDescription: 'Cross-platform fitness application that uses device sensors and computer vision to analyze workout form in real-time. Features personalized AI training plans, nutrition tracking, and social fitness challenges.',
    technologies: ['React Native', 'Expo', 'TensorFlow Lite', 'Firebase', 'Node.js', 'MongoDB'],
    features: [
      'AI workout form analysis via camera',
      'Personalized training plan generation',
      'Real-time rep counting with sensors',
      'Nutrition tracking and meal suggestions',
      'Social fitness challenges',
      'Progress analytics dashboard'
    ],
    githubUrl: 'https://github.com/qween-code/fitcheck',
    image: '/images/fitcheck.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Helped users improve workout form accuracy by 45% with AI feedback',
    challenges: [
      'Real-time pose estimation on mobile devices',
      'Battery-efficient sensor data processing',
      'Accurate calorie estimation across activities'
    ],
    solutions: [
      'Optimized TFLite model with quantization for mobile',
      'Batch sensor processing with adaptive sampling rates',
      'Activity-specific metabolic models with user calibration'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#e07850'
  },
  {
    id: 'aura-ai',
    title: 'Aura - AI Voice Assistant Platform',
    description: 'Multi-modal AI voice assistant with custom wake word detection and plugin architecture',
    longDescription: 'Enterprise AI voice assistant platform supporting custom wake words, multi-language processing, and extensible plugin system. Designed for business environments with meeting transcription, task management, and CRM integration capabilities.',
    technologies: ['Python', 'Whisper', 'LangChain', 'FastAPI', 'WebSocket', 'Redis', 'Elasticsearch'],
    features: [
      'Custom wake word detection',
      'Multi-language voice processing',
      'Meeting transcription and summarization',
      'Plugin architecture for extensions',
      'CRM and calendar integration',
      'Voice-driven task management'
    ],
    githubUrl: 'https://github.com/qween-code/aura-ai',
    image: '/images/aura-ai.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Reduced meeting documentation time by 80% with automatic transcription',
    challenges: [
      'Low-latency wake word detection with high accuracy',
      'Multi-speaker diarization in noisy environments',
      'Scalable real-time audio processing pipeline'
    ],
    solutions: [
      'Custom CNN wake word model with edge deployment',
      'Speaker embedding clustering with pyannote.audio',
      'WebSocket streaming with Redis pub/sub for horizontal scaling'
    ],
    status: 'wip',
    featured: true,
    year: 2025,
    colorAccent: '#c4b5e0'
  },
  {
    id: 'project-effort',
    title: 'EstimatePro - Project Effort Estimation',
    description: 'Data-driven project effort estimation tool with historical analysis and team velocity tracking',
    longDescription: 'Project management tool that estimates development effort using historical data, team velocity metrics, and complexity analysis. Features sprint planning assistance, risk assessment, and automated reporting for agile teams.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Scikit-learn', 'Chart.js', 'Celery'],
    features: [
      'ML-based effort estimation from task descriptions',
      'Team velocity tracking and forecasting',
      'Sprint planning optimization',
      'Risk assessment with Monte Carlo simulation',
      'Historical project analysis dashboards',
      'Jira/Azure DevOps integration'
    ],
    githubUrl: 'https://github.com/zenginsenol/project_effort',
    image: '/images/project-effort.jpg',
    category: 'tools',
    difficulty: 'advanced',
    impact: 'Improved estimation accuracy by 35% using historical data analysis',
    challenges: [
      'Accurate effort prediction from unstructured task descriptions',
      'Accounting for team composition and skill variations',
      'Handling uncertainty in long-term project forecasting'
    ],
    solutions: [
      'NLP-based task complexity scoring with TF-IDF features',
      'Bayesian model with team-specific velocity priors',
      'Monte Carlo simulation for confidence interval estimation'
    ],
    metrics: {
      accuracy: '35% better than manual estimates',
      users: 'Used across 5+ agile teams'
    },
    status: 'production',
    year: 2024,
    colorAccent: '#ddd0b0'
  },
  {
    id: 'finance-flow',
    title: 'FinanceFlow - Budget Management Platform',
    description: 'Personal and business budget tracking with AI-powered spending insights and forecasting',
    longDescription: 'Comprehensive financial management platform with automatic transaction categorization, spending pattern analysis, and AI-powered budget forecasting. Supports multiple accounts, currencies, and generates visual financial reports.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Plaid API', 'Chart.js', 'Tailwind CSS'],
    features: [
      'Automatic transaction categorization',
      'AI spending pattern analysis',
      'Multi-currency support',
      'Budget forecasting and alerts',
      'Visual financial reports',
      'Recurring expense tracking'
    ],
    image: '/images/finance-flow.jpg',
    category: 'web',
    difficulty: 'advanced',
    impact: 'Helped users save 20% more by identifying spending patterns',
    challenges: [
      'Accurate transaction categorization across banks',
      'Real-time multi-currency conversion',
      'Privacy-first architecture for financial data'
    ],
    solutions: [
      'Fine-tuned classifier on merchant category codes',
      'Streaming exchange rate updates with caching layer',
      'Client-side encryption with zero-knowledge architecture'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#e8c07a'
  },
  {
    id: 'ict-ultra',
    title: 'ICT Ultra - Trading Indicators Suite',
    description: 'Advanced ICT trading methodology indicators for MetaTrader with automated signal generation',
    longDescription: 'Comprehensive suite of Inner Circle Trader (ICT) methodology indicators for MetaTrader platforms. Includes order block detection, fair value gap identification, liquidity sweep alerts, and automated trade signal generation based on institutional trading concepts.',
    technologies: ['MQL5', 'MQL4', 'Python', 'WebSocket', 'C++', 'MetaTrader'],
    features: [
      'Order block detection and visualization',
      'Fair value gap (FVG) auto-identification',
      'Liquidity sweep alerts',
      'Kill zone time filters',
      'Multi-timeframe confluence analysis',
      'Automated signal generation with Telegram alerts'
    ],
    githubUrl: 'https://github.com/elkekoitan/ict-ultra',
    image: '/images/ict-ultra.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: 'Automated ICT methodology reducing manual chart analysis by 90%',
    challenges: [
      'Accurate order block detection across volatile markets',
      'Real-time multi-timeframe synchronization',
      'Minimizing indicator lag for timely signals'
    ],
    solutions: [
      'Custom candle pattern matching with statistical validation',
      'Parallel timeframe processing with shared memory',
      'Predictive caching for next-bar signal pre-computation'
    ],
    metrics: {
      performance: 'Sub-100ms signal generation',
      accuracy: '78% signal accuracy on backtests'
    },
    status: 'active',
    featured: true,
    year: 2025,
    colorAccent: '#c07848'
  },
  {
    id: 'advantage-ads',
    title: 'AdVantage - Digital Ads Automation',
    description: 'AI-powered digital advertising automation platform for multi-channel campaign management',
    longDescription: 'Unified digital advertising platform that automates campaign creation, optimization, and reporting across Google Ads, Meta Ads, and TikTok Ads. Uses AI for audience targeting, creative optimization, and budget allocation.',
    technologies: ['TypeScript', 'Next.js', 'Google Ads API', 'Meta Marketing API', 'OpenAI', 'PostgreSQL', 'Redis'],
    features: [
      'Multi-channel campaign management',
      'AI-powered audience targeting',
      'Creative A/B testing automation',
      'Budget allocation optimization',
      'Cross-platform analytics dashboard',
      'Automated performance reporting'
    ],
    image: '/images/advantage-ads.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Reduced ad management overhead by 65% with AI automation',
    challenges: [
      'Normalizing metrics across different ad platforms',
      'Real-time budget reallocation based on performance',
      'Privacy-compliant audience targeting post-iOS14'
    ],
    solutions: [
      'Unified metric schema with platform-specific adapters',
      'Multi-armed bandit algorithm for dynamic budget allocation',
      'First-party data enrichment with conversion API integration'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#e07850'
  },
  {
    id: 'irobot-home',
    title: 'iRobot Home - Smart Automation Hub',
    description: 'IoT home automation hub with scene management, energy monitoring, and voice control',
    longDescription: 'Central home automation platform integrating multiple IoT protocols (Zigbee, Z-Wave, WiFi) with intelligent scene management, energy consumption monitoring, and multi-assistant voice control support.',
    technologies: ['Python', 'MQTT', 'FastAPI', 'React', 'InfluxDB', 'Zigbee2MQTT', 'Docker'],
    features: [
      'Multi-protocol IoT device management',
      'Intelligent scene automation',
      'Energy consumption monitoring',
      'Voice assistant integration (Alexa, Google)',
      'Real-time device status dashboard',
      'Automated energy optimization routines'
    ],
    image: '/images/irobot-home.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Reduced home energy consumption by 25% with automated optimization',
    challenges: [
      'Reliable communication across different IoT protocols',
      'Real-time device state synchronization',
      'Energy-efficient automation scheduling'
    ],
    solutions: [
      'MQTT message broker with protocol-specific bridges',
      'Event-sourced device state with optimistic updates',
      'Genetic algorithm for optimal automation scheduling'
    ],
    status: 'active',
    year: 2024,
    colorAccent: '#6ee7d0'
  },
  {
    id: 'melkorstux',
    title: 'Melkorstux - Security Research Toolkit',
    description: 'Modular security research and penetration testing toolkit with automated vulnerability scanning',
    longDescription: 'Comprehensive security research toolkit for authorized penetration testing engagements. Features automated reconnaissance, vulnerability scanning, exploit framework integration, and detailed compliance reporting for security audits.',
    technologies: ['Python', 'Go', 'Nmap', 'Metasploit API', 'Docker', 'PostgreSQL', 'Celery'],
    features: [
      'Automated reconnaissance pipeline',
      'Vulnerability assessment with CVE mapping',
      'Exploit framework integration',
      'Compliance report generation (PCI-DSS, SOC2)',
      'Network topology visualization',
      'Scheduled scan management'
    ],
    image: '/images/melkorstux.jpg',
    category: 'tools',
    difficulty: 'expert',
    impact: 'Reduced security audit time by 50% with automated scanning pipeline',
    challenges: [
      'Minimizing false positives in vulnerability scanning',
      'Safe exploitation without disrupting target systems',
      'Generating actionable compliance reports'
    ],
    solutions: [
      'Multi-scanner correlation for false positive reduction',
      'Sandboxed exploit validation with rollback capability',
      'Template-based report engine with framework mapping'
    ],
    status: 'active',
    year: 2024,
    colorAccent: '#e8a0a0'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
}; 