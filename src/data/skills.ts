export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'ai-ml' | 'database' | 'devops' | 'tools';
  experience: string;
  projects: string[];
}

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: 'React',
    level: 95,
    category: 'frontend',
    experience: '4+ years',
    projects: ['AdPro', 'Oto Mansuroğlu', 'ai-algo-trade']
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    experience: '3+ years',
    projects: ['Oto Mansuroğlu', 'ai-algo-trade']
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'frontend',
    experience: '3+ years',
    projects: ['AdPro', 'Oto Mansuroğlu', 'ai-algo-trade']
  },
  {
    name: 'React Native',
    level: 85,
    category: 'mobile',
    experience: '2+ years',
    projects: ['AdPro']
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    category: 'frontend',
    experience: '3+ years',
    projects: ['Oto Mansuroğlu', 'ai-algo-trade']
  },

  // Backend Skills
  {
    name: 'Python',
    level: 90,
    category: 'backend',
    experience: '4+ years',
    projects: ['Solar Analysis', 'ai-algo-trade']
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
    experience: '3+ years',
    projects: ['ai-algo-trade', 'Slack Integration']
  },
  {
    name: 'FastAPI',
    level: 88,
    category: 'backend',
    experience: '2+ years',
    projects: ['Solar Analysis']
  },
  {
    name: 'Express.js',
    level: 82,
    category: 'backend',
    experience: '3+ years',
    projects: ['Slack Integration']
  },

  // AI/ML Skills
  {
    name: 'TensorFlow',
    level: 85,
    category: 'ai-ml',
    experience: '3+ years',
    projects: ['Solar Analysis', 'Ai Algo Trade']
  },
  {
    name: 'OpenCV',
    level: 80,
    category: 'ai-ml',
    experience: '2+ years',
    projects: ['Solar Analysis']
  },
  {
    name: 'Machine Learning',
    level: 88,
    category: 'ai-ml',
    experience: '3+ years',
    projects: ['Solar Analysis', 'Ai Algo Trade']
  },
  {
    name: 'Computer Vision',
    level: 82,
    category: 'ai-ml',
    experience: '2+ years',
    projects: ['Solar Analysis']
  },

  // Database Skills
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'database',
    experience: '3+ years',
    projects: ['Solar Analysis', 'Ai Algo Trade', 'Slack Integration']
  },
  {
    name: 'Redis',
    level: 80,
    category: 'database',
    experience: '2+ years',
    projects: ['ai-algo-trade', 'Slack Integration']
  },
  {
    name: 'Supabase',
    level: 88,
    category: 'database',
    experience: '2+ years',
    projects: ['AdPro', 'Oto Mansuroğlu']
  },

  // DevOps & Tools
  {
    name: 'Docker',
    level: 82,
    category: 'devops',
    experience: '2+ years',
    projects: ['Solar Analysis', 'ai-algo-trade']
  },
  {
    name: 'Git',
    level: 90,
    category: 'tools',
    experience: '4+ years',
    projects: ['All Projects']
  },
  {
    name: 'Vercel',
    level: 85,
    category: 'devops',
    experience: '2+ years',
    projects: ['Oto Mansuroğlu', 'ai-algo-trade']
  },
  {
    name: 'MetaTrader 5',
    level: 88,
    category: 'tools',
    experience: '2+ years',
    projects: ['ai-algo-trade']
  },

  // New Skills
  {
    name: 'Flutter',
    level: 82,
    category: 'mobile',
    experience: '2+ years',
    projects: ['Barter Qween', 'PosPro', 'AdPro']
  },
  {
    name: 'Dart',
    level: 80,
    category: 'mobile',
    experience: '2+ years',
    projects: ['Barter Qween', 'PosPro', 'AdPro']
  },
  {
    name: 'Go (Golang)',
    level: 75,
    category: 'backend',
    experience: '1+ year',
    projects: ['Go-Trade', 'AdPro CLI']
  },
  {
    name: 'Fastify',
    level: 78,
    category: 'backend',
    experience: '1+ year',
    projects: ['OmniSell']
  },
  {
    name: 'Firebase',
    level: 85,
    category: 'database',
    experience: '3+ years',
    projects: ['Mandira Claude', 'Barter Qween', 'PosPro']
  },
  {
    name: 'Prisma',
    level: 80,
    category: 'database',
    experience: '2+ years',
    projects: ['Indirim Kanallari', 'OmniSell']
  },
  {
    name: 'LangChain',
    level: 78,
    category: 'ai-ml',
    experience: '1+ year',
    projects: ['Airchitecture', 'n8n Workflows']
  },
  {
    name: 'Google Gemini',
    level: 80,
    category: 'ai-ml',
    experience: '1+ year',
    projects: ['Sinav Analiz', 'Video Factory', 'AdPro']
  },
  {
    name: 'PyTorch',
    level: 76,
    category: 'ai-ml',
    experience: '1+ year',
    projects: ['Diagnostic']
  },
  {
    name: 'n8n',
    level: 90,
    category: 'tools',
    experience: '2+ years',
    projects: ['n8n Workflows']
  },
  {
    name: 'NestJS',
    level: 78,
    category: 'backend',
    experience: '1+ year',
    projects: ['FireAlert']
  },
  {
    name: 'MQL4/MQL5',
    level: 85,
    category: 'tools',
    experience: '2+ years',
    projects: ['Hayalet', 'Go-Trade']
  },
  {
    name: 'Kubernetes',
    level: 70,
    category: 'devops',
    experience: '1+ year',
    projects: ['AdPro CLI', 'OmniSell']
  },
  {
    name: 'Coolify',
    level: 72,
    category: 'devops',
    experience: '1+ year',
    projects: ['AdPro CLI']
  },

  // Additional Skills
  {
    name: 'BLoC',
    level: 80,
    category: 'mobile',
    experience: '2+ years',
    projects: ['Barter Qween']
  },
  {
    name: 'Riverpod',
    level: 78,
    category: 'mobile',
    experience: '1+ year',
    projects: ['AdPro']
  },
  {
    name: 'Google ML Kit',
    level: 72,
    category: 'ai-ml',
    experience: '1+ year',
    projects: ['AdPro']
  },
  {
    name: 'TensorFlow Lite',
    level: 74,
    category: 'ai-ml',
    experience: '1+ year',
    projects: ['AdPro', 'FitCheck']
  },
  {
    name: 'Telegram Bot API',
    level: 82,
    category: 'tools',
    experience: '2+ years',
    projects: ['Indirim Kanallari', 'Hayalet']
  },
  {
    name: 'Cheerio',
    level: 76,
    category: 'backend',
    experience: '1+ year',
    projects: ['Indirim Kanallari']
  },
  {
    name: 'Sharp',
    level: 74,
    category: 'backend',
    experience: '1+ year',
    projects: ['OmniSell']
  }
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
}; 