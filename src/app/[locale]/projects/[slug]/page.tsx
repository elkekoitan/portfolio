'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Zap,
  Star,
} from 'lucide-react';
import { getProjectById } from '@/data/projects';
import { getDict, type Locale } from '@/i18n/dictionaries';
import { tProject } from '@/i18n/projects';

const STATUS_MAP: Record<string, { label: Record<string, string>; color: string; bg: string }> = {
  production: {
    label: { tr: 'Yayında', en: 'Live', ru: 'В эфире' },
    color: '#6ee7d0',
    bg: 'rgba(110,231,208,0.12)',
  },
  active: {
    label: { tr: 'Aktif Geliştirme', en: 'Active Development', ru: 'Активная разработка' },
    color: '#e8c07a',
    bg: 'rgba(232,192,122,0.12)',
  },
  wip: {
    label: { tr: 'Devam Ediyor', en: 'In Progress', ru: 'В процессе' },
    color: '#e07850',
    bg: 'rgba(224,120,80,0.12)',
  },
  planning: {
    label: { tr: 'Planlama', en: 'Planning', ru: 'Планирование' },
    color: '#c4b5e0',
    bg: 'rgba(196,181,224,0.12)',
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as Locale) || 'tr';
  const slug = params?.slug as string;
  const t = getDict(locale);
  const pd = t.projectDetail;

  const project = getProjectById(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-dune-body flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-dune-bone mb-4">404</h1>
          <p className="text-dune-sand/60 mb-8">Project not found</p>
          <button onClick={() => router.push(`/${locale}#projects`)} className="px-6 py-3 text-dune-amber border border-dune-amber/30 rounded-lg hover:bg-dune-amber/10 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2 inline" /> {pd?.back ?? 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  const statusInfo = project.status ? STATUS_MAP[project.status] : null;

  return (
    <main className="min-h-screen bg-dune-body relative overflow-hidden">
      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-dune-amber/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-dune-turquoise/5 rounded-full blur-3xl" />
      </div>

      {/* Top Bar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dune-body/70 border-b border-dune-amber/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => router.push(`/${locale}#projects`)}
              className="flex items-center text-dune-sand/70 hover:text-dune-bone transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">{pd?.back ?? 'Go Back'}</span>
            </button>
            <span className="text-xl font-serif font-bold gradient-text">{t.brand}</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Color accent bar */}
          <div
            className="h-1.5 rounded-full mb-8 w-32"
            style={{ background: project.colorAccent ?? 'linear-gradient(90deg, #e8c07a, #6ee7d0)' }}
          />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {statusInfo && (
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ background: statusInfo.bg, borderColor: statusInfo.color, color: statusInfo.color }}
              >
                {statusInfo.label[locale] ?? statusInfo.label.en}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-amber/15 border border-dune-amber/40 text-dune-amber flex items-center gap-1">
                <Star className="w-3 h-3" /> Featured
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-lavender/15 border border-dune-lavender/30 text-dune-lavender">
              {t.projectCategories[project.category] ?? project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dune-turquoise/15 border border-dune-turquoise/30 text-dune-turquoise">
              {t.projectDifficulty[project.difficulty]}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-dune-bone mb-4">
            {tProject(project.id, locale, 'title', project.title)}
          </h1>
          <p className="text-lg md:text-xl text-dune-sand mb-8 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 flex items-center gap-2 border border-dune-amber/30 rounded-lg text-dune-amber hover:bg-dune-amber/10 transition-all"
              >
                <Github className="w-5 h-5" />
                {pd?.viewCode ?? 'View Code'}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-dune-amber to-dune-rust text-dune-body rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-dune-amber/25 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                {pd?.liveDemo ?? 'Live Demo'}
              </a>
            )}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm bg-dune-amber/10 text-dune-amber rounded-lg border border-dune-amber/20">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="neomorphic rounded-2xl p-6"
          >
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-dune-turquoise" />
              {pd?.features ?? 'Features'}
            </h2>
            <ul className="space-y-3">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand">
                  <span className="w-1.5 h-1.5 bg-dune-turquoise rounded-full mt-2 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Impact & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Impact */}
            <div className="neomorphic rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-dune-spice" />
                {pd?.impact ?? 'Impact'}
              </h2>
              <p className="text-dune-sand leading-relaxed">{project.impact}</p>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="neomorphic rounded-2xl p-6">
                <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-dune-amber" />
                  {pd?.metrics ?? 'Metrics'}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    val && (
                      <div key={key} className="neomorphic-inset p-3 rounded-xl text-center">
                        <div className="text-sm text-dune-sand/60 capitalize mb-1">{key}</div>
                        <div className="text-dune-turquoise font-semibold text-sm">{val}</div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="neomorphic rounded-2xl p-6"
          >
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-dune-spice" />
              {pd?.challenges ?? 'Challenges'}
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand">
                  <span className="w-1.5 h-1.5 bg-dune-spice rounded-full mt-2 flex-shrink-0" />
                  {ch}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="neomorphic rounded-2xl p-6"
          >
            <h2 className="text-xl font-serif font-bold text-dune-bone mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-dune-lavender" />
              {pd?.solutions ?? 'Solutions'}
            </h2>
            <ul className="space-y-3">
              {project.solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-dune-sand">
                  <span className="w-1.5 h-1.5 bg-dune-lavender rounded-full mt-2 flex-shrink-0" />
                  {sol}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Back to all projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => router.push(`/${locale}#projects`)}
            className="px-8 py-3 text-dune-amber border border-dune-amber/30 rounded-lg hover:bg-dune-amber/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            {pd?.back ?? 'Go Back'}
          </button>
        </motion.div>
      </div>
    </main>
  );
}
