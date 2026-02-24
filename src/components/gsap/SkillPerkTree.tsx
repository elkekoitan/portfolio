'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'
import { audioEngine } from '@/lib/audio-engine'
import type { Skill } from '@/data/skills'

/* ── Category config ── */
const CATEGORY_CFG: Record<string, { color: string; icon: string }> = {
  frontend: { color: '#6ee7d0', icon: '>' },
  backend:  { color: '#ffb641', icon: '$' },
  'ai-ml':  { color: '#2ecfff', icon: '#' },
  mobile:   { color: '#CD853F', icon: '@' },
  database: { color: '#a3e635', icon: '%' },
  devops:   { color: '#B87333', icon: '&' },
  tools:    { color: '#e879f9', icon: '*' },
}

const CATEGORIES = Object.keys(CATEGORY_CFG)

/* ── Skill Bar ── */
function SkillBar({
  skill,
  color,
  onHover,
  isActive,
  delay,
}: {
  skill: Skill
  color: string
  onHover: (skill: Skill | null) => void
  isActive: boolean
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.fromTo(barRef.current,
      { width: '0%' },
      {
        width: `${skill.level}%`,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    )
  }, [skill.level, delay])

  return (
    <div
      ref={ref}
      className="skill-bar-row group cursor-pointer"
      onMouseEnter={() => { audioEngine.hoverTick(); onHover(skill) }}
      onMouseLeave={() => onHover(null)}
      style={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className="font-terminal text-xs tracking-wide transition-colors duration-200"
          style={{
            color: isActive ? color : `${color}cc`,
            textShadow: isActive ? `0 0 8px ${color}40` : 'none',
          }}
        >
          {skill.name}
        </span>
        <span
          className="font-terminal text-xs font-bold"
          style={{ color: isActive ? color : `${color}80` }}
        >
          {skill.level}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-sm overflow-hidden" style={{ background: `${color}10` }}>
        <div
          ref={barRef}
          className="h-full rounded-sm transition-all duration-200"
          style={{
            background: `linear-gradient(90deg, ${color}90, ${color})`,
            boxShadow: isActive ? `0 0 8px ${color}60` : 'none',
            width: 0,
          }}
        />
      </div>
    </div>
  )
}

/* ── Category Card ── */
function CategoryCard({
  category,
  label,
  skills,
  color,
  icon,
  hoveredSkill,
  onHover,
  index,
}: {
  category: string
  label: string
  skills: Skill[]
  color: string
  icon: string
  hoveredSkill: Skill | null
  onHover: (skill: Skill | null) => void
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    )
    // Stagger skill bars
    const bars = cardRef.current.querySelectorAll('.skill-bar-row')
    gsap.fromTo(bars,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.05,
        delay: 0.3 + index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    )
  }, [index])

  const totalLevel = skills.reduce((sum, s) => sum + s.level, 0)
  const avgLevel = Math.round(totalLevel / skills.length)

  return (
    <div
      ref={cardRef}
      className="terminal-frame p-4 h-full"
      style={{ opacity: 0 }}
    >
      {/* Category header */}
      <div className="terminal-header mb-3">
        <div className="flex items-center gap-2">
          <span className="status-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span className="font-terminal text-[0.65rem] tracking-widest" style={{ color }}>
            {icon} {label.toUpperCase()}
          </span>
        </div>
        <span className="font-terminal text-[0.55rem]" style={{ color: `${color}80` }}>
          AVG:{avgLevel}
        </span>
      </div>

      {/* Skill bars */}
      <div className="space-y-2.5">
        {skills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={color}
            onHover={onHover}
            isActive={hoveredSkill?.name === skill.name}
            delay={si * 0.06}
          />
        ))}
      </div>

      {/* Category total */}
      <div className="mt-3 pt-2 border-t" style={{ borderColor: `${color}15` }}>
        <div className="flex justify-between font-terminal text-[0.55rem]">
          <span style={{ color: `${color}60` }}>{skills.length} TECH</span>
          <span style={{ color: `${color}60` }}>
            {'\u2588'.repeat(Math.round(avgLevel / 10))}{'\u2591'.repeat(10 - Math.round(avgLevel / 10))} {avgLevel}%
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Hover tooltip (floating) ── */
function SkillTooltip({ skill, color, locale }: { skill: Skill; color: string; locale: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 8, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
      )
    }
  }, [skill.name])

  return (
    <div
      ref={ref}
      className="fixed bottom-4 right-4 terminal-frame p-3 z-50 w-56 hidden md:block"
      style={{ opacity: 0 }}
    >
      <div className="terminal-header mb-2">
        <div className="flex items-center gap-2">
          <span className="status-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span style={{ color }}>{skill.name}</span>
        </div>
      </div>
      <div className="space-y-1.5 font-terminal text-xs">
        <div className="flex justify-between">
          <span className="text-vault-sand/60">{locale === 'tr' ? 'Seviye' : locale === 'ru' ? 'Уровень' : 'Level'}</span>
          <span style={{ color }}>{skill.level}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-vault-sand/60">{locale === 'tr' ? 'Deneyim' : locale === 'ru' ? 'Опыт' : 'Experience'}</span>
          <span className="text-vault-bone">{skill.experience}</span>
        </div>
        <div className="pt-1 border-t border-vault-rust/20">
          <span className="text-vault-sand/60">{locale === 'tr' ? 'Projeler' : locale === 'ru' ? 'Проекты' : 'Projects'}:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {skill.projects.slice(0, 3).map(p => (
              <span key={p} className="chip-outline text-[0.55rem]" style={{ color, borderColor: `${color}40` }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main Component ── */
interface SkillPerkTreeProps {
  skills: Skill[]
  locale: string
  categories: Record<string, string>
}

export default function SkillPerkTree({ skills, locale, categories }: SkillPerkTreeProps) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [hoveredColor, setHoveredColor] = useState('#6ee7d0')

  const handleHover = useCallback((skill: Skill | null) => {
    setHoveredSkill(skill)
    if (skill) {
      const cfg = CATEGORY_CFG[skill.category]
      setHoveredColor(cfg?.color ?? '#6ee7d0')
    }
  }, [])

  // Build category data
  const categoryData = CATEGORIES.map(cat => {
    const cfg = CATEGORY_CFG[cat]
    const catSkills = skills
      .filter(s => s.category === cat)
      .sort((a, b) => b.level - a.level)

    return { cat, cfg, skills: catSkills }
  }).filter(d => d.skills.length > 0)

  // Total stats
  const totalSkills = skills.length
  const avgLevel = Math.round(skills.reduce((s, sk) => s + sk.level, 0) / totalSkills)
  const topSkills = skills.filter(s => s.level >= 85).length

  return (
    <div className="relative">
      {/* Stats summary bar */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 font-terminal text-xs">
        <div className="flex items-center gap-2">
          <span className="text-vault-sand/50">TOTAL_TECH:</span>
          <span className="text-vault-turquoise font-bold">{totalSkills}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-vault-sand/50">AVG_LEVEL:</span>
          <span className="text-vault-amber font-bold">{avgLevel}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-vault-sand/50">EXPERT(85+):</span>
          <span className="text-vault-turquoise font-bold">{topSkills}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-vault-sand/50">CATEGORIES:</span>
          <span className="text-vault-rust font-bold">{categoryData.length}</span>
        </div>
      </div>

      {/* Category grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categoryData.map((data, i) => (
          <CategoryCard
            key={data.cat}
            category={data.cat}
            label={categories[data.cat] ?? data.cat}
            skills={data.skills}
            color={data.cfg.color}
            icon={data.cfg.icon}
            hoveredSkill={hoveredSkill}
            onHover={handleHover}
            index={i}
          />
        ))}
      </div>

      {/* Floating tooltip */}
      {hoveredSkill && (
        <SkillTooltip skill={hoveredSkill} color={hoveredColor} locale={locale} />
      )}
    </div>
  )
}
