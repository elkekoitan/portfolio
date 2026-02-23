'use client'
import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  stagger?: number
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  stagger = 0.1,
  delay = 0,
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay, ease: 'power3.out' }
    if (direction === 'up') fromVars.y = 40
    if (direction === 'down') fromVars.y = -40
    if (direction === 'left') fromVars.x = 40
    if (direction === 'right') fromVars.x = -40

    const children = el.children.length > 0 ? el.children : [el]

    const tween = gsap.from(children, {
      ...fromVars,
      stagger,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [direction, stagger, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
