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
  category: 'ai-ml' | 'trading' | 'mobile' | 'web' | 'automation';
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
    title: 'AdPro - AI-Powered Mobile App',
    description: 'React Native mobile application with advanced AI features',
    longDescription: 'Cross-platform mobile application built with React Native, featuring AI-powered content generation, user engagement analytics, and seamless social media integration.',
    technologies: ['React Native', 'TypeScript', 'Supabase', 'Google Gemini AI', 'Expo', 'Redux', 'React Navigation'],
    features: [
      'AI-powered content generation',
      'Real-time user analytics',
      'Social media integration',
      'Advanced authentication system',
      'Push notifications',
      'Offline-first architecture'
    ],
    githubUrl: 'https://github.com/yourusername/AdPro',
    image: '/images/adpro-mobile.jpg',
    category: 'mobile',
    difficulty: 'advanced',
    impact: 'Increased user engagement by 60% with AI features',
    challenges: [
      'Cross-platform compatibility',
      'AI integration in mobile environment',
      'Real-time data synchronization'
    ],
    solutions: [
      'Implemented platform-specific optimizations',
      'Created efficient AI service architecture',
      'Developed robust offline-first data strategy'
    ],
    metrics: {
      users: '1000+ active users',
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
  {
    id: 'crypto-trading-bot',
    title: 'Kripto Para Trading Botu',
    description: 'Otomatik kripto para alım-satım sistemi',
    longDescription: 'Binance ve diğer borsalar için geliştirilmiş akıllı trading bot. Teknik analiz, risk yönetimi ve otomatik alım-satım stratejileri ile 7/24 çalışıyor.',
    technologies: ['Python', 'Binance API', 'TensorFlow', 'Pandas', 'NumPy', 'Redis', 'Docker'],
    features: [
      'Otomatik teknik analiz',
      'Risk yönetimi sistemi',
      'Çoklu strateji desteği',
      'Gerçek zamanlı piyasa takibi',
      'Kar/zarar raporlama',
      'Telegram bildirimleri'
    ],
    githubUrl: 'https://github.com/yourusername/crypto-bot',
    image: '/images/crypto-bot.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: '6 ayda %45 getiri sağladı, günlük ortalama 50+ işlem',
    challenges: [
      'Volatil piyasa koşullarına uyum',
      'Hızlı karar verme algoritmaları',
      'Risk yönetimi optimizasyonu'
    ],
    solutions: [
      'Makine öğrenmesi ile piyasa tahmini',
      'Dinamik stop-loss stratejileri',
      'Portföy çeşitlendirme algoritmaları'
    ],
    metrics: {
      performance: 'Milisaniye seviyesinde işlem',
      accuracy: '%78 başarılı işlem oranı',
      revenue: '%45 yıllık getiri'
    }
  },
  {
    id: 'restaurant-management',
    title: 'Restoran Yönetim Sistemi',
    description: 'Kapsamlı restoran işletme yönetim platformu',
    longDescription: 'Restoran işletmeleri için geliştirilmiş tam entegre yönetim sistemi. Sipariş yönetimi, stok takibi, personel yönetimi ve müşteri ilişkileri modülleri içeriyor.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    features: [
      'Sipariş ve masa yönetimi',
      'Stok ve tedarik takibi',
      'Personel vardiya yönetimi',
      'Müşteri sadakat programı',
      'Mali raporlama sistemi',
      'QR menü ve online sipariş'
    ],
    githubUrl: 'https://github.com/yourusername/restaurant-management',
    image: '/images/restaurant-system.jpg',
    category: 'web',
    difficulty: 'advanced',
    impact: '3 restoran zincirinde kullanılıyor, %30 operasyonel verimlilik artışı',
    challenges: [
      'Gerçek zamanlı sipariş senkronizasyonu',
      'Karmaşık stok yönetimi',
      'Çoklu lokasyon desteği'
    ],
    solutions: [
      'WebSocket ile gerçek zamanlı güncellemeler',
      'Akıllı stok tahmin algoritmaları',
      'Merkezi yönetim paneli'
    ],
    metrics: {
      users: '150+ günlük aktif kullanıcı',
      performance: '99.8% uptime',
      revenue: '%25 ciro artışı'
    }
  },
  {
    id: 'smart-home-iot',
    title: 'Akıllı Ev IoT Sistemi',
    description: 'IoT tabanlı akıllı ev otomasyon platformu',
    longDescription: 'Ev otomasyonu için geliştirilmiş IoT sistemi. Aydınlatma, ısıtma, güvenlik ve enerji yönetimi modülleri ile akıllı ev deneyimi sunuyor.',
    technologies: ['React Native', 'Node.js', 'MQTT', 'Arduino', 'Raspberry Pi', 'MongoDB'],
    features: [
      'Akıllı aydınlatma kontrolü',
      'Isı ve klima yönetimi',
      'Güvenlik kamera sistemi',
      'Enerji tüketim takibi',
      'Sesli komut desteği',
      'Uzaktan erişim'
    ],
    githubUrl: 'https://github.com/yourusername/smart-home',
    image: '/images/smart-home.jpg',
    category: 'mobile',
    difficulty: 'expert',
    impact: '%40 enerji tasarrufu, 5 evde aktif kullanımda',
    challenges: [
      'Farklı IoT cihazları entegrasyonu',
      'Güvenli veri iletimi',
      'Düşük güç tüketimi'
    ],
    solutions: [
      'Standart MQTT protokolü kullanımı',
      'End-to-end şifreleme',
      'Optimize edilmiş veri paketleri'
    ],
    metrics: {
      performance: '< 100ms yanıt süresi',
      users: '25+ aktif cihaz',
      accuracy: '%40 enerji tasarrufu'
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
}; 