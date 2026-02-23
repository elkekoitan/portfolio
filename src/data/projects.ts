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
}

export const projects: Project[] = [
  {
    id: 'solar-analysis',
    title: 'Solar Panel Anomaly Detection System',
    description: 'AI-powered solar panel monitoring and anomaly detection platform',
    longDescription: 'Advanced machine learning system for real-time solar panel performance monitoring and anomaly detection. Integrates with MapperX for comprehensive solar farm analysis.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Real-time anomaly detection using computer vision',
      'Predictive maintenance algorithms',
      'Performance optimization recommendations',
      'Comprehensive reporting dashboard',
      'Integration with MapperX platform',
      'Multi-site monitoring capabilities'
    ],
    githubUrl: 'https://github.com/yourusername/solar-analysis',
    image: '/images/solar-analysis.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Reduced maintenance costs by 40% and improved energy efficiency by 25%',
    challenges: [
      'Processing large-scale satellite imagery data',
      'Real-time anomaly detection with high accuracy',
      'Integration with existing solar farm management systems'
    ],
    solutions: [
      'Implemented distributed computing architecture',
      'Developed custom CNN models for image analysis',
      'Created RESTful API for seamless integration'
    ],
    metrics: {
      accuracy: '94.5%',
      performance: 'Real-time processing < 2 seconds',
      users: '5+ solar farms'
    }
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
    title: 'AdPro - Yapay Zeka Destekli Mobil Uygulama',
    description: 'React Native ile geliştirilmiş gelişmiş yapay zeka özellikli mobil uygulama',
    longDescription: 'React Native ile geliştirilmiş çapraz platform mobil uygulama. Yapay zeka destekli içerik üretimi, kullanıcı etkileşim analitiği ve sosyal medya entegrasyonu içeriyor.',
    technologies: ['React Native', 'TypeScript', 'Supabase', 'Google Gemini AI', 'Expo', 'Redux', 'React Navigation'],
    features: [
      'Yapay zeka destekli içerik üretimi',
      'Gerçek zamanlı kullanıcı analitiği',
      'Sosyal medya entegrasyonu',
      'Gelişmiş kimlik doğrulama sistemi',
      'Anlık bildirimler',
      'Çevrimdışı öncelikli mimari'
    ],
    githubUrl: 'https://github.com/yourusername/AdPro',
    image: '/images/adpro-mobile.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Yapay zeka özellikleri ile kullanıcı etkileşimini %60 artırdı',
    challenges: [
      'Çapraz platform uyumluluğu',
      'Mobil ortamda yapay zeka entegrasyonu',
      'Gerçek zamanlı veri senkronizasyonu'
    ],
    solutions: [
      'Platform özel optimizasyonlar uyguladım',
      'Verimli yapay zeka servis mimarisi oluşturdum',
      'Sağlam çevrimdışı öncelikli veri stratejisi geliştirdim'
    ],
    metrics: {
      users: '1000+ aktif kullanıcı',
      performance: 'App store rating: 4.8/5'
    }
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
    title: 'Hayalet HFT Trading System',
    description: 'Ultra-low latency high-frequency trading system for MT4 with Go + Python hybrid architecture',
    longDescription: 'Production-grade HFT system combining Go decision engine with Python AI agents. Features named pipe bridge for MT4 communication under 2ms latency, grid trading strategies, smart hedge algorithms, and autonomous risk management across XAUUSDm, BTCUSDm, ETHUSDm pairs.',
    technologies: ['Go', 'Python', 'MQL4', 'gRPC', 'WebSocket', 'Flask', 'Redis', 'Prometheus', 'Telegram API'],
    features: [
      'Named pipe bridge for MT4 (<2ms latency)',
      '7 autonomous AI agents for market analysis',
      'Smart hedge & grid trading algorithms',
      'Real-time Flask web dashboard',
      'Telegram notifications system',
      'Prometheus metrics & monitoring',
      '5D Genome stealth HFT plugin',
      'Risk management with position sizing'
    ],
    githubUrl: 'https://github.com/elkekoitan/Prometheus',
    image: '/images/hayalet.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: 'Achieved sub-2ms decision latency with 18 Go packages and 7 Python agents',
    challenges: [
      'Named pipe communication between Go and MT4 with microsecond precision',
      'Synchronizing 7 independent AI agents for coherent trading decisions',
      'Managing concurrent positions across multiple currency pairs'
    ],
    solutions: [
      'Custom Go named pipe bridge with binary protocol for ultra-low latency',
      'Event-driven agent orchestration with Redis pub/sub',
      'Grid-based risk management with dynamic position sizing'
    ],
    metrics: {
      performance: '<2ms decision latency',
      accuracy: '7 AI agents running concurrently'
    },
    status: 'active',
    featured: true,
    year: 2024,
    colorAccent: '#10b981'
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
    description: 'Flutter barter platform for Bogazici University students with neuromorphic UI design',
    longDescription: 'Modern peer-to-peer barter platform for university students. Features ultra-deep neuromorphic UI with 16-24 layer depth, real-time chat, Google Pay integration, and BLoC state management with Clean Architecture.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'GetIt', 'Injectable', 'Google Pay', 'Cloud Functions'],
    features: [
      'Ultra-deep neuromorphic UI (16-24 layers)',
      'Real-time chat messaging',
      'Google Pay integration',
      'Push notifications system',
      'Rating & review system',
      'Analytics tracking dashboard',
      'Clean Architecture with BLoC pattern'
    ],
    githubUrl: 'https://github.com/qween-code/barter-qween',
    image: '/images/barter-qween.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Created university-first barter economy with Pinterest-level design quality',
    challenges: [
      'Implementing 16-24 layer neuromorphic UI effects in Flutter',
      'Real-time messaging with offline-first architecture',
      'Secure payment integration for student transactions'
    ],
    solutions: [
      'Custom Flutter widgets with layered shadow/gradient compositions',
      'Firebase Firestore with offline persistence and conflict resolution',
      'Google Pay SDK with Firebase Cloud Functions for secure processing'
    ],
    metrics: {
      users: 'Beta v1.2.0',
      performance: 'iOS & Android cross-platform'
    },
    status: 'active',
    year: 2025,
    colorAccent: '#f472b6'
  },
  {
    id: 'diagnostic',
    title: 'AI Cancer Detection System',
    description: 'Multi-modal cancer detection with ML pipeline, medical device firmware, and HL7/FHIR integration',
    longDescription: 'Advanced medical diagnostic system combining impedance spectroscopy and optical analysis with AI. Features C++/RTOS device firmware, Qt/.NET host application, and a comprehensive ML pipeline with PyTorch models (1D-CNN, BiLSTM, mini-Transformer) for cancer tissue classification.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'C++', 'RTOS', 'OpenAI API', 'PostgreSQL', 'MongoDB', 'HL7', 'FHIR'],
    features: [
      'Multi-modal analysis (impedance + optical)',
      'PyTorch ML pipeline (1D-CNN, BiLSTM, Transformer)',
      'HL7 v2 & FHIR medical standard compliance',
      'OpenAI second-opinion integration',
      'PDF/A diagnostic reports generation',
      'DVC & MLflow experiment tracking',
      'Device firmware (C++/RTOS)'
    ],
    githubUrl: 'https://github.com/elkekoitan/diagnostic',
    image: '/images/diagnostic.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Multi-modal AI approach for medical diagnostics with HL7/FHIR compliance',
    challenges: [
      'Multi-modal data fusion (impedance time-series + optical spectrum)',
      'Medical regulatory compliance (HL7, FHIR)',
      'Real-time inference on embedded hardware'
    ],
    solutions: [
      'Ensemble ML models with SVM/RF/XGB + deep learning',
      'Standards-compliant API with FHIR resource mapping',
      'Optimized TensorRT inference for embedded deployment'
    ],
    metrics: {
      accuracy: 'Multi-modal ensemble classification',
      performance: 'Real-time embedded inference'
    },
    status: 'wip',
    featured: true,
    year: 2025,
    colorAccent: '#ef4444'
  },
  {
    id: 'omnisell',
    title: 'OmniSell - E-commerce Automation Platform',
    description: 'AI-powered multi-marketplace listing automation for Etsy, Amazon, Shopify, and Trendyol',
    longDescription: 'Unified e-commerce management platform that synchronizes product listings across multiple marketplaces. Features AI-powered listing optimization, automated inventory sync, and social media integration. Built with TypeScript ESM architecture and repository pattern.',
    technologies: ['TypeScript', 'Fastify', 'Prisma', 'Vitest', 'OpenAI API', 'Etsy API', 'Amazon API', 'Shopify API'],
    features: [
      'Multi-marketplace sync (Etsy, Amazon, Shopify, Trendyol)',
      'AI-powered listing optimization',
      'Automated inventory management',
      'Social media content generation',
      'Marketplace adapter interface pattern',
      'Comprehensive test suite with Vitest'
    ],
    githubUrl: 'https://github.com/elkekoitan/etsy-ai-integration',
    image: '/images/omnisell.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Unified 4 marketplace APIs into single management interface',
    challenges: [
      'Normalizing different marketplace API schemas',
      'Rate limiting and API quota management across platforms',
      'Consistent inventory sync with conflict resolution'
    ],
    solutions: [
      'Adapter pattern with unified marketplace interface',
      'Token bucket rate limiter with platform-specific configs',
      'Event-sourced inventory with optimistic concurrency'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#f59e0b'
  },
  {
    id: 'firealert',
    title: 'FireAlert - Fire Detection Mobile App',
    description: 'Cross-platform fire alert system with NASA FIRMS satellite data and NestJS backend',
    longDescription: 'Mobile application that leverages NASA FIRMS (Fire Information for Resource Management System) satellite data for real-time fire detection and alerting. Built with Expo/React Native for cross-platform deployment and NestJS for the backend API.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'NASA FIRMS API', 'JWT', 'Detox'],
    features: [
      'Real-time NASA FIRMS satellite fire data',
      'Push notification alerts for nearby fires',
      'Interactive map with fire locations',
      'User profile management with JWT auth',
      'E2E testing with Detox framework',
      'Alerts dashboard with filtering'
    ],
    githubUrl: 'https://github.com/elkekoitan/firealert-mobile-app',
    image: '/images/firealert.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Real-time fire detection using satellite data for public safety',
    challenges: [
      'Processing NASA FIRMS satellite data in real-time',
      'Geolocation-based push notification system',
      'Cross-platform performance optimization'
    ],
    solutions: [
      'Efficient GeoJSON processing pipeline for satellite data',
      'Background location tracking with geofencing for alerts',
      'Expo managed workflow with native module optimization'
    ],
    status: 'active',
    year: 2025,
    colorAccent: '#dc2626'
  },
  {
    id: 'indirim-kanallari',
    title: 'Indirim Kanallari - Deal Scraper & Telegram Bot',
    description: 'Automated Turkish retail deal scraper with quality scoring and 12+ Telegram channel distribution',
    longDescription: 'Intelligent deal discovery system that scrapes 11+ Turkish retailers, scores deals using a self-improving know-how system, and automatically distributes quality deals to 12+ Telegram channels. Features price tracking, similarity deduplication, and seasonal scoring bonuses.',
    technologies: ['TypeScript', 'Node.js', 'Prisma', 'SQLite', 'Next.js 15', 'Telegram Bot API', 'Puppeteer'],
    features: [
      '11+ Turkish retailer scrapers (Trendyol, BIM, A101...)',
      'Self-improving deal quality scoring system',
      '12+ Telegram channel auto-distribution',
      'Price tracking and history',
      'Similarity deduplication engine',
      'Next.js 15 admin panel',
      'Seasonal bonus scoring'
    ],
    githubUrl: 'https://github.com/elkekoitan/indirim-kanallari',
    image: '/images/indirim-kanallari.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Automated discovery and distribution of 300+ deals per cycle to 12+ channels',
    challenges: [
      'Bypassing anti-scraping measures (CAPTCHA, WAF, rate limiting)',
      'Quality scoring across diverse product categories',
      'Maintaining 11+ scrapers with different site structures'
    ],
    solutions: [
      'API-first scraping where available, headless browser fallback',
      'ML-inspired scoring with category weights and seasonal adjustments',
      'Modular scraper architecture with self-healing retry logic'
    ],
    metrics: {
      performance: '~190 deals/cycle from Trendyol alone',
      users: '12+ Telegram channels'
    },
    status: 'production',
    featured: true,
    year: 2025,
    colorAccent: '#8b5cf6'
  },
  {
    id: 'mandira-claude',
    title: 'Mandira Sut Takip - Dairy Farm Management',
    description: 'Modern dairy farm management system with Next.js 14, Firebase, and real-time tracking',
    longDescription: 'Comprehensive dairy farm management platform for tracking milk production, animal health, and farm operations. Built with Next.js 14 App Router, Firebase for real-time data, and Zustand for state management.',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Firebase', 'Zustand', 'React Query', 'Tailwind CSS'],
    features: [
      'Real-time milk production tracking',
      'Animal health record management',
      'Firebase authentication & Firestore',
      'Production analytics dashboard',
      'Multi-user farm access control',
      'Responsive mobile-friendly design'
    ],
    githubUrl: 'https://github.com/qween-code/mandira-sut-takip',
    image: '/images/mandira-claude.jpg',
    category: 'web',
    difficulty: 'advanced',
    impact: 'Digitized dairy farm operations for real-time production monitoring',
    challenges: [
      'Real-time data synchronization for field workers',
      'Offline-capable data entry for rural areas',
      'Complex analytics across seasonal production cycles'
    ],
    solutions: [
      'Firebase Firestore with real-time listeners',
      'Service worker caching with background sync',
      'Time-series aggregation with React Query caching'
    ],
    status: 'production',
    year: 2024,
    colorAccent: '#22c55e'
  },
  {
    id: 'pospro',
    title: 'PosPro - Turkey POS System',
    description: 'Enterprise POS system for Turkish market with Flutter cross-platform and FastAPI backend',
    longDescription: 'Turkey-specific Point of Sale system built with Flutter for cross-platform deployment (Windows, Linux, Web, iOS, Android) and FastAPI backend. Features offline-first architecture, analytics dashboards with fl_chart, and Turkish tax compliance.',
    technologies: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'SQLite', 'GetX', 'fl_chart', 'Firebase'],
    features: [
      'Cross-platform (Windows/Linux/Web/iOS/Android)',
      'Offline-first with SQLite local storage',
      'Turkish tax compliance (e-fatura)',
      'Real-time analytics with fl_chart',
      'Multi-branch management',
      'Inventory tracking system',
      'GetX state management'
    ],
    image: '/images/pospro.jpg',
    category: 'web',
    difficulty: 'expert',
    impact: 'Enterprise-grade POS solution serving Turkish retail market',
    challenges: [
      'Cross-platform UI consistency across 5 platforms',
      'Offline-first architecture with sync on reconnect',
      'Turkish tax regulation compliance'
    ],
    solutions: [
      'Flutter adaptive layouts with platform-specific widgets',
      'SQLite + Firebase hybrid storage with conflict resolution',
      'e-Fatura integration module with GIB API'
    ],
    status: 'active',
    featured: true,
    year: 2025,
    colorAccent: '#06b6d4'
  },
  {
    id: 'sinav-analiz',
    title: 'Sinav Analiz Uzmani - Education Analytics',
    description: 'Advanced exam analysis platform for Turkish educators with AI-powered pedagogical insights',
    longDescription: 'Comprehensive education analytics platform aligned with Turkish MEB curriculum. Features 17 analysis modules, Google Gemini AI-powered pedagogical suggestions, bilingual reports, and smart prompt builder for AI-assisted educational content creation.',
    technologies: ['React 18', 'TypeScript 5', 'Supabase', 'Google Gemini AI', 'Chart.js', 'Zustand'],
    features: [
      '17 analysis modules for exam evaluation',
      'MEB curriculum-aligned analytics',
      'AI-powered pedagogical suggestions (Gemini)',
      'Bilingual reports (TR/EN)',
      'Smart prompt builder for AI assistant',
      'Student profile management',
      'Class performance tracking'
    ],
    githubUrl: 'https://github.com/salihaerdol/sinav-analiz-uzmani',
    image: '/images/sinav-analiz.jpg',
    category: 'ai-ml',
    difficulty: 'advanced',
    impact: 'AI-enhanced education analytics serving Turkish teachers with 17 analysis modules',
    challenges: [
      'Aligning analytics with complex MEB curriculum standards',
      'Generating pedagogically sound AI suggestions',
      'Processing and visualizing multi-dimensional exam data'
    ],
    solutions: [
      'Hierarchical curriculum mapping with Supabase relational model',
      'Fine-tuned Gemini prompts with pedagogical context injection',
      'Custom Chart.js configurations for education-specific visualizations'
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
    title: 'Airchitecture - Meta-Agent AI System',
    description: 'Super-organization intelligence architecture that creates and orchestrates its own agent army',
    longDescription: 'Enterprise-grade meta-agent system designed to autonomously create, manage, and orchestrate AI agent networks. Features comprehensive architecture documentation covering vision, technical infrastructure, use cases, security/ethics, integration patterns, and system architecture diagrams.',
    technologies: ['LangChain', 'Python', 'Docker', 'Kubernetes', 'gRPC', 'Redis', 'PostgreSQL'],
    features: [
      'Self-creating agent orchestration',
      'Dynamic agent lifecycle management',
      'Multi-agent communication protocols',
      'Security & ethics framework',
      'Enterprise integration patterns',
      'Comprehensive 9-document architecture spec',
      'Scalable Kubernetes deployment'
    ],
    image: '/images/airchitecture.jpg',
    category: 'ai-ml',
    difficulty: 'expert',
    impact: 'Pioneering meta-agent architecture for autonomous AI organization',
    challenges: [
      'Designing self-referential agent creation systems',
      'Ensuring safety in autonomous agent orchestration',
      'Scalable communication between dynamic agent populations'
    ],
    solutions: [
      'Hierarchical meta-agent architecture with safety boundaries',
      'Ethics-first design with kill switches and audit trails',
      'gRPC + Redis pub/sub for scalable inter-agent messaging'
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