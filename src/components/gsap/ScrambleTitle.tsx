'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, ScrambleTextPlugin } from '@/lib/gsap-config'

interface ScrambleTitleProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  chars?: string
  speed?: number
  duration?: number
  scrollStart?: string
  glowFlash?: boolean
  glowColor?: string
}

export default function ScrambleTitle({
  text,
  className = '',
  tag: Tag = 'h2',
  chars = '01!<>{}[]/\\|_#@$%',
  speed = 0.4,
  duration = 1.2,
  scrollStart = 'top 85%',
  glowFlash = true,
  glowColor = '#6ee7d0',
}: ScrambleTitleProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Set initial scrambled state
      gsap.set(el, { opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none',
        },
      })

      // Scramble decode animation
      tl.to(el, {
        duration,
        scrambleText: {
          text,
          chars,
          speed,
          revealDelay: 0.3,
        },
      })

      // Glow flash on completion
      if (glowFlash) {
        tl.fromTo(el,
          { textShadow: `0 0 0px transparent` },
          {
            textShadow: `0 0 20px ${glowColor}88, 0 0 40px ${glowColor}44`,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        tl.to(el, {
          textShadow: `0 0 6px ${glowColor}44`,
          duration: 0.8,
          ease: 'power2.inOut',
        })
      }
    })

    return () => ctx.revert()
  }, [text, chars, speed, duration, scrollStart, glowFlash, glowColor])

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  )
}
