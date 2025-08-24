'use client';

import { useState } from 'react';
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
  Atom,
  Rocket,
  Shield,
  Users,
  Award,
  Eye,
  Target,
  Cpu,
  Sparkles,
  CheckCircle,
  Activity,
  BarChart3
} from 'lucide-react';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { interviewAnswers } from '@/data/interview-answers';


export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Subtle Background Accents (toned down) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-2xl" />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-dark-900/70 bg-dark-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Hamza Turhan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { key: 'hero', label: 'Ana Sayfa' },
                { key: 'about', label: 'Hakkımda' },
                { key: 'projects', label: 'Projeler' },
                { key: 'skills', label: 'Yetenekler' },
                { key: 'answers', label: 'Mülakat Cevapları' },
                { key: 'contact', label: 'İletişim' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`group relative text-sm font-medium transition-colors ${
                    activeSection === section.key ? 'text-accent-cyan' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-300 ${
                      activeSection === section.key ? 'w-full' : 'group-hover:w-6'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Fullstack Developer</span>
              <br />
              <span className="text-white">AI Sistem Mimarı</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mb-6 rounded-full"></div>
            
            {/* AI Expertise Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass p-6 rounded-2xl mb-8 border border-accent-cyan/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-accent-cyan mr-3" />
                <h2 className="text-2xl font-bold text-accent-cyan">AI Verimlilik Uzmanı</h2>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Yapay zeka entegrasyonları ile mevcut ekiplerin verimliliğini <span className="text-accent-cyan font-bold">10 kata kadar artırıyorum</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Zap className="w-4 h-4 text-accent-teal mr-2" />
                  <span>AI Tool Entegrasyonu</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Cpu className="w-4 h-4 text-accent-purple mr-2" />
                  <span>Otomasyon Sistemleri</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="w-4 h-4 text-accent-coral mr-2" />
                  <span>Süreç Optimizasyonu</span>
                </div>
              </div>
            </motion.div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Modern web teknolojileri, AI/ML çözümleri ve algoritmik ticaret platformları konusunda uzmanım.
              Uzun zamandır yapay zekaların şirketlere entegrasyonu üzerinde çalışıyorum.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-accent-cyan">10x</div>
                <div className="text-sm text-gray-400">Verimlilik Artışı</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-accent-teal">15+</div>
                <div className="text-sm text-gray-400">AI Projesi</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-accent-purple">4+</div>
                <div className="text-sm text-gray-400">Yıl Deneyim</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-accent-coral">20+</div>
                <div className="text-sm text-gray-400">AI Tool</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-teal text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
              >
                <Rocket className="w-4 h-4 mr-2 inline" />
                AI Projelerimi Gör
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('answers')}
                className="px-8 py-3 border border-accent-purple/50 text-accent-purple rounded-lg font-semibold hover:bg-accent-purple/20 transition-all"
              >
                <Brain className="w-4 h-4 mr-2 inline" />
                Mülakat Cevapları
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Hakkımda</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deneyimli Fullstack Developer ve AI Sistem Mimarı. Ticaret platformları, modern web teknolojileri ve yapay zeka sistemleri konusunda uzmanım.
              Gerçek dünya problemlerine yenilikçi çözümler üretmeyi seviyorum.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Teknik Uzmanlık</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-accent-cyan" />
                  <span className="text-gray-300">Full-Stack Geliştirme (React, Python, Node.js)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-accent-teal" />
                  <span className="text-gray-300">AI/ML ve Bilgisayarlı Görü</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent-purple" />
                  <span className="text-gray-300">Algoritmik Ticaret Platformları</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-accent-coral" />
                  <span className="text-gray-300">Çapraz Platform Mobil Geliştirme</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Önemli Başarılar</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tamamlanan Projeler</span>
                  <span className="text-accent-cyan font-bold">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Yıllık Deneyim</span>
                  <span className="text-accent-teal font-bold">4+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Teknolojiler</span>
                  <span className="text-accent-purple font-bold">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Başarı Oranı</span>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Öne Çıkan Projeler</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Farklı alanlardaki uzmanlığımı gerçek dünya uygulamalarıyla sergiliyorum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Teknik Yetenekler</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern geliştirme teknolojilerinde kapsamlı uzmanlık
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['frontend', 'backend', 'ai-ml', 'mobile', 'database', 'devops'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-white capitalize">{category}</h3>
                <div className="space-y-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .slice(0, 4)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-accent-cyan">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-accent-cyan to-accent-teal h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
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
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full text-sm font-medium text-accent-cyan border border-accent-cyan/30">
                ✨ 34 Kapsamlı Cevap
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Mülakat Cevapları
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Gerçek proje örnekleriyle desteklenmiş detaylı teknik cevaplar. 
              <span className="text-accent-cyan font-semibold"> AI/ML</span>, 
              <span className="text-accent-teal font-semibold"> Full-Stack Geliştirme</span> ve 
              <span className="text-accent-purple font-semibold"> Sistem Mimarisi</span> alanlarındaki uzmanlığımı sergiliyor.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold gradient-text-cyan mb-2">34</div>
                <div className="text-sm text-gray-400">Cevaplanan Sorular</div>
              </div>
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold gradient-text-purple mb-2">15+</div>
                <div className="text-sm text-gray-400">Referans Projeler</div>
              </div>
              <div className="glass-card p-6 text-center border border-white/10">
                <div className="text-3xl font-bold text-accent-coral mb-2">95%</div>
                <div className="text-sm text-gray-400">Ortalama Güven</div>
              </div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {[
              { key: 'All', label: 'Tümü' },
              { key: 'Technical', label: 'Teknik' },
              { key: 'Career', label: 'Kariyer' },
              { key: 'Projects', label: 'Projeler' },
              { key: 'AI/ML', label: 'AI/ML' },
              { key: 'Frontend', label: 'Frontend' },
              { key: 'Backend', label: 'Backend' }
            ].map((filter) => (
              <button
                key={filter.key}
                className="btn-glass px-5 py-2.5 text-sm font-medium hover:scale-[1.02] transition-all border border-white/10"
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Interview Cards Grid */}
          <div className="grid gap-8 lg:gap-12">
            {interviewAnswers.map((answer, index) => (
              <motion.div
                key={answer.questionNumber}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="interview-card group"
              >
                {/* Question Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal flex items-center justify-center text-white font-bold text-sm">
                        Q{answer.questionNumber}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="confidence-badge">
                          <Target className="w-3 h-3 mr-1 inline" />
                          {answer.confidence}%
                        </span>
                        <span className="category-badge">
                          {answer.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-accent-cyan transition-colors">
                      {answer.question}
                    </h3>
                  </div>
                </div>

                {/* Answer Content */}
                <div className="prose prose-lg prose-invert max-w-none mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {answer.answer}
                  </p>
                </div>

                {/* Projects Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent-coral mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    İlgili Projeler
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {answer.projects?.map((project, idx) => (
                      <span key={idx} className="project-tag">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies Section */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-sm font-semibold text-accent-teal mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Teknolojiler ve Yetenekler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {answer.technologies?.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Projenizi Konuşmaya Hazır mısınız?
              </h3>
              <p className="text-gray-300 mb-6">
                Uzmanlığımın ekibinizin başarısına nasıl katkıda bulunabileceğini keşfedelim
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-glass px-8 py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-teal/20 border-accent-cyan/30 text-accent-cyan hover:from-accent-cyan/30 hover:to-accent-teal/30"
                >
                  <Mail className="w-4 h-4 mr-2 inline" />
                  İletişime Geç
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-glass px-8 py-3 bg-gradient-to-r from-accent-purple/20 to-accent-coral/20 border-accent-purple/30 text-accent-purple hover:from-accent-purple/30 hover:to-accent-coral/30"
                >
                  <Eye className="w-4 h-4 mr-2 inline" />
                  Projeleri Görüntüle
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">İletişime Geçin</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bir sonraki projenizi veya fırsatınızı konuşmaya hazırım
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <Mail className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">E-posta</h3>
              <p className="text-gray-300">turhanhamza@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <Phone className="w-8 h-8 text-accent-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Telefon</h3>
              <p className="text-gray-300">+90 554 541 7561</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <MapPin className="w-8 h-8 text-accent-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Konum</h3>
              <p className="text-gray-300">İstanbul, Türkiye</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a
                href="https://github.com/elkekoitan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent-cyan/15 text-accent-cyan rounded-lg border border-accent-cyan/30 hover:bg-accent-cyan/25 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hmztrhn/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent-teal/15 text-accent-teal rounded-lg border border-accent-teal/30 hover:bg-accent-teal/25 transition-all"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Hamza Turhan. Tüm hakları saklıdır. Next.js ve Tailwind CSS ile geliştirilmiştir.
          </p>
        </div>
      </footer>
    </div>
  );
}
