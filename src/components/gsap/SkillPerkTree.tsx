'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap, ScrollTrigger, DrawSVGPlugin, ScrambleTextPlugin } from '@/lib/gsap-config'
import { audioEngine } from '@/lib/audio-engine'
import type { Skill } from '@/data/skills'

/* ── Category config ── */
const CATEGORY_CFG: Record<string, { color: string; label: Record<string, string> }> = {
  frontend: { color: '#6ee7d0', label: { tr: 'Frontend', en: 'Frontend', ru: 'Фронтенд' } },
  backend:  { color: '#ffb641', label: { tr: 'Backend',  en: 'Backend',  ru: 'Бэкенд' } },
  'ai-ml':  { color: '#2ecfff', label: { tr: 'AI/ML',    en: 'AI/ML',    ru: 'ИИ/МО' } },
  mobile:   { color: '#CD853F', label: { tr: 'Mobil',    en: 'Mobile',   ru: 'Мобильный' } },
  database: { color: '#a3e635', label: { tr: 'Veritabanı', en: 'Database', ru: 'БД' } },
  devops:   { color: '#B87333', label: { tr: 'DevOps',   en: 'DevOps',   ru: 'DevOps' } },
  tools:    { color: '#e879f9', label: { tr: 'Araçlar',  en: 'Tools',    ru: 'Инструменты' } },
}

const CATEGORIES = Object.keys(CATEGORY_CFG) as (keyof typeof CATEGORY_CFG)[]

/* ── Hex node size by level ── */
function nodeSize(level: number): number {
  if (level >= 85) return 48
  if (level >= 75) return 42
  return 36
}

/* ── Hex clip path ── */
const HEX_CLIP = 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)'

/* ── Skill Node ── */
function SkillNode({
  skill,
  x,
  y,
  color,
  onHover,
  isActive,
}: {
  skill: Skill
  x: number
  y: number
  color: string
  onHover: (skill: Skill | null) => void
  isActive: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const size = nodeSize(skill.level)

  const handleEnter = useCallback(() => {
    audioEngine.hoverTick()
    onHover(skill)
    if (ref.current) {
      gsap.to(ref.current, { scale: 1.15, duration: 0.2, ease: 'back.out(1.7)' })
    }
  }, [skill, onHover])

  const handleLeave = useCallback(() => {
    onHover(null)
    if (ref.current) {
      gsap.to(ref.current, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }
  }, [onHover])

  return (
    <div
      ref={ref}
      className="perk-node absolute"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        opacity: 0,
        transform: 'scale(0)',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Hex shape */}
      <div
        className="w-full h-full flex items-center justify-center cursor-pointer transition-colors duration-200"
        style={{
          clipPath: HEX_CLIP,
          background: isActive
            ? `linear-gradient(135deg, ${color}40, ${color}20)`
            : `linear-gradient(135deg, rgba(26,26,22,0.9), rgba(18,18,16,0.95))`,
          border: 'none',
        }}
      >
        <span
          className="font-terminal text-center leading-tight select-none font-bold"
          style={{
            fontSize: size >= 48 ? '0.65rem' : '0.55rem',
            color: isActive ? color : `${color}cc`,
            textShadow: isActive ? `0 0 8px ${color}60` : 'none',
          }}
        >
          {skill.level}
        </span>
      </div>

      {/* Hex border overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: HEX_CLIP,
          boxShadow: `inset 0 0 0 1.5px ${color}${isActive ? '80' : '40'}`,
        }}
      />

      {/* Glow ring on active */}
      {isActive && (
        <div
          className="absolute inset-[-4px] pointer-events-none animate-pulse"
          style={{
            clipPath: HEX_CLIP,
            boxShadow: `0 0 12px ${color}50, inset 0 0 8px ${color}30`,
          }}
        />
      )}

      {/* Skill name label below node */}
      <div
        className="absolute left-1/2 -translate-x-1/2 font-terminal text-center whitespace-nowrap pointer-events-none select-none"
        style={{
          top: size + 2,
          fontSize: '0.5rem',
          color: isActive ? color : `${color}99`,
          textShadow: isActive ? `0 0 6px ${color}40` : 'none',
          lineHeight: 1.2,
        }}
      >
        {skill.name}
      </div>
    </div>
  )
}

/* ── Hover tooltip ── */
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

  const filled = Math.round((skill.level / 100) * 12)
  const empty = 12 - filled
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(empty)

  return (
    <div
      ref={ref}
      className="absolute right-0 top-0 terminal-frame p-3 z-30 w-56"
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
          <span style={{ color }}>[{bar}] {skill.level}%</span>
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

/* ── Main PerkTree ── */
interface SkillPerkTreeProps {
  skills: Skill[]
  locale: string
  categories: Record<string, string>
}

export default function SkillPerkTree({ skills, locale, categories }: SkillPerkTreeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [hoveredColor, setHoveredColor] = useState('#6ee7d0')

  const handleHover = useCallback((skill: Skill | null) => {
    setHoveredSkill(skill)
    if (skill) {
      const cfg = CATEGORY_CFG[skill.category]
      setHoveredColor(cfg?.color ?? '#6ee7d0')
    }
  }, [])

  // Layout constants — wider and taller for 7 categories
  const W = 1000
  const H = 700
  const TRUNK_X = 90
  const TRUNK_Y_START = 50
  const TRUNK_Y_END = H - 50
  const BRANCH_SPACING = (TRUNK_Y_END - TRUNK_Y_START) / (CATEGORIES.length - 1)

  // ScrollTrigger animation
  useEffect(() => {
    const container = containerRef.current
    const svg = svgRef.current
    if (!container || !svg) return

    const ctx = gsap.context(() => {
      const trunk = svg.querySelector('.trunk-line')
      const branches = svg.querySelectorAll('.branch-line')
      const labels = container.querySelectorAll('.branch-label')
      const nodes = container.querySelectorAll('.perk-node')

      // Initial states
      if (trunk) gsap.set(trunk, { drawSVG: '0%' })
      gsap.set(branches, { drawSVG: '0%' })
      gsap.set(labels, { opacity: 0, x: -10 })
      gsap.set(nodes, { opacity: 0, scale: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true,
        },
      })

      // 1. Draw trunk
      if (trunk) {
        tl.to(trunk, { drawSVG: '100%', duration: 0.8, ease: 'power2.inOut' })
      }

      // 2. Draw branches + reveal labels
      tl.to(branches, {
        drawSVG: '100%',
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.3')

      tl.to(labels, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.06,
        ease: 'power2.out',
      }, '-=0.3')

      // 3. Scale up nodes
      tl.to(nodes, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.03,
        ease: 'back.out(1.4)',
      }, '-=0.2')
    })

    return () => ctx.revert()
  }, [])

  // Build layout data for each category
  const categoryData = CATEGORIES.map((cat, ci) => {
    const cfg = CATEGORY_CFG[cat]
    const branchY = TRUNK_Y_START + ci * BRANCH_SPACING
    const catSkills = skills
      .filter(s => s.category === cat)
      .sort((a, b) => b.level - a.level)
      .slice(0, 5)

    const branchEndX = TRUNK_X + 130
    const nodeStartX = branchEndX + 40

    return {
      cat,
      cfg,
      branchY,
      branchEndX,
      skills: catSkills.map((skill, si) => ({
        skill,
        x: nodeStartX + si * 85,
        y: branchY + (si % 2 === 0 ? -10 : 10),
      })),
    }
  })

  return (
    <div ref={containerRef} className="relative" style={{ width: W, maxWidth: '100%', height: H, margin: '0 auto' }}>
      {/* SVG lines layer */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Trunk */}
        <line
          className="trunk-line"
          x1={TRUNK_X} y1={TRUNK_Y_START}
          x2={TRUNK_X} y2={TRUNK_Y_END}
          stroke="#B87333"
          strokeWidth="2"
          strokeOpacity="0.5"
        />

        {/* Branches */}
        {categoryData.map(({ cat, cfg, branchY, branchEndX }) => (
          <line
            key={cat}
            className="branch-line"
            x1={TRUNK_X}
            y1={branchY}
            x2={branchEndX}
            y2={branchY}
            stroke={cfg.color}
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
        ))}

        {/* Node connections (thin lines from branch end to each node) */}
        {categoryData.map(({ cat, cfg, branchEndX, branchY, skills: catSkills }) =>
          catSkills.map(({ skill, x, y }, si) => (
            <line
              key={`${cat}-${skill.name}`}
              className="branch-line"
              x1={si === 0 ? branchEndX : catSkills[si - 1].x}
              y1={si === 0 ? branchY : catSkills[si - 1].y}
              x2={x}
              y2={y}
              stroke={cfg.color}
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="4 3"
            />
          ))
        )}
      </svg>

      {/* Branch labels */}
      {categoryData.map(({ cat, cfg, branchEndX, branchY }) => (
        <div
          key={`label-${cat}`}
          className="branch-label absolute font-terminal text-xs tracking-wider"
          style={{
            left: branchEndX - 8,
            top: branchY - 20,
            color: cfg.color,
            opacity: 0,
            textShadow: `0 0 6px ${cfg.color}40`,
          }}
        >
          {(categories[cat] ?? cfg.label[locale] ?? cat).toUpperCase()}
        </div>
      ))}

      {/* Skill nodes */}
      {categoryData.map(({ cat, cfg, skills: catSkills }) =>
        catSkills.map(({ skill, x, y }) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            x={x}
            y={y}
            color={cfg.color}
            onHover={handleHover}
            isActive={hoveredSkill?.name === skill.name}
          />
        ))
      )}

      {/* Hub node at trunk top */}
      <div
        className="perk-node absolute"
        style={{
          left: TRUNK_X - 30,
          top: TRUNK_Y_START - 36,
          width: 60,
          height: 60,
          opacity: 0,
          transform: 'scale(0)',
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center node-pulse"
          style={{
            clipPath: HEX_CLIP,
            background: 'linear-gradient(135deg, rgba(110,231,208,0.2), rgba(184,115,51,0.15))',
          }}
        >
          <span className="font-terminal text-vault-turquoise text-glow-tq text-[0.55rem] text-center leading-tight">
            FULL<br />STACK
          </span>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: HEX_CLIP,
            boxShadow: 'inset 0 0 0 2px rgba(110,231,208,0.5)',
          }}
        />
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <SkillTooltip skill={hoveredSkill} color={hoveredColor} locale={locale} />
      )}
    </div>
  )
}
