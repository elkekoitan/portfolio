'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#e8c07a', '#e07850', '#6ee7d0', '#ddd0b0', '#c07848', '#c4b5e0']
    const particles: Particle[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }))

    // Mouse interaction
    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    let time = 0
    const ticker = gsap.ticker.add(() => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          p.vx += (dx / dist) * force * 0.3
          p.vy += (dy / dist) * force * 0.3
        }

        // Wind drift — desert sand effect
        p.vx += Math.sin(time * 0.001 + p.y * 0.01) * 0.02
        p.vy += Math.cos(time * 0.0008 + p.x * 0.01) * 0.008

        // Velocity damping
        p.vx *= 0.99
        p.vy *= 0.99

        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        // Boundary wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const pulsedOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        const pulsedSize = p.size * (0.8 + 0.2 * Math.sin(p.pulse * 0.7))

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedSize * 3)
        gradient.addColorStop(0, p.color + Math.round(pulsedOpacity * 255).toString(16).padStart(2, '0'))
        gradient.addColorStop(1, p.color + '00')

        ctx.beginPath()
        ctx.arc(p.x, p.y, pulsedSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulsedSize, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = pulsedOpacity
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.2
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            lineGrad.addColorStop(0, a.color)
            lineGrad.addColorStop(1, b.color)
            ctx.strokeStyle = lineGrad
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.6
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    })

    return () => {
      gsap.ticker.remove(ticker)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
