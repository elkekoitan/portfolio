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