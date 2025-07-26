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
    id: 'ict-ultra-platform',
    title: 'ICT Ultra Trading Platform',
    description: 'Professional algorithmic trading platform with MetaTrader 5 integration',
    longDescription: 'Institutional-grade trading platform featuring real-time market analysis, automated trading strategies, and advanced risk management. Integrates with MetaTrader 5 for live trading execution.',
    technologies: ['Python', 'MetaTrader5', 'React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL', 'TensorFlow.js'],
    features: [
      'Real-time market data analysis',
      'Automated trading strategies',
      'Advanced risk management',
      'Professional dashboard with 14+ tabs',
      'ML-powered price predictions',
      'Push notification system',
      'Multi-timeframe analysis'
    ],
    githubUrl: 'https://github.com/yourusername/ai_algo_trade',
    image: '/images/ict-platform.jpg',
    category: 'trading',
    difficulty: 'expert',
    impact: 'Achieved 32.2% ROI with automated trading strategies',
    challenges: [
      'Real-time data processing from multiple sources',
      'Low-latency trading execution',
      'Complex risk management algorithms'
    ],
    solutions: [
      'Implemented WebSocket-based real-time data streaming',
      'Developed custom trading algorithms with ICT concepts',
      'Created comprehensive risk management system'
    ],
    metrics: {
      performance: 'Sub-second execution',
      accuracy: '95%+ signal accuracy',
      revenue: '+$480,417 profit'
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
    id: 'slack-integration',
    title: 'Slack Customer Service Automation',
    description: 'AI-powered customer service automation platform',
    longDescription: 'Intelligent customer service automation system that integrates with Slack, featuring AI chatbots, ticket management, and analytics. Streamlines customer support operations.',
    technologies: ['Node.js', 'Slack API', 'OpenAI', 'PostgreSQL', 'Redis', 'React', 'WebSocket'],
    features: [
      'AI-powered chatbot integration',
      'Automatic ticket routing',
      'Real-time analytics',
      'Multi-channel support',
      'Custom workflow automation',
      'Performance monitoring'
    ],
    githubUrl: 'https://github.com/yourusername/slack-integration',
    image: '/images/slack-integration.jpg',
    category: 'automation',
    difficulty: 'advanced',
    impact: 'Reduced response time by 70% and improved customer satisfaction',
    challenges: [
      'Complex workflow automation',
      'AI response accuracy',
      'Multi-platform integration'
    ],
    solutions: [
      'Developed custom workflow engine',
      'Implemented context-aware AI responses',
      'Created unified API for multiple platforms'
    ],
    metrics: {
      performance: 'Response time < 30 seconds',
      accuracy: '92% customer satisfaction'
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
}; 