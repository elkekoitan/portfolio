'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  color: string
  vx: number
  vy: number
  phase: number
  phaseSpeed: number
}

const COLORS = ['#6ee7d0', '#B87333', '#ffb641']
const PARTICLE_COUNT = 45

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = window.innerWidth
    let h = window.innerHeight

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 1 + Math.random() * 2,
      opacity: 0.06 + Math.random() * 0.18,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.25,
      vy: -0.05 - Math.random() * 0.2,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.003 + Math.random() * 0.008,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        // Update
        p.phase += p.phaseSpeed
        p.x += p.vx + Math.sin(p.phase) * 0.15
        p.y += p.vy

        // Wrap around
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      }
      ctx.globalAlpha = 1

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}
