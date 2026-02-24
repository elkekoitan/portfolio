'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap-config'

interface SplitTextRevealProps {
  children: string
  className?: string
  tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3'
  type?: 'chars' | 'words' | 'lines'
  fromY?: number
  fromRotateX?: number
  stagger?: number
  duration?: number
  ease?: string
  delay?: number
  scrollStart?: string
}

export default function SplitTextReveal({
  children,
  className = '',
  tag: Tag = 'p',
  type = 'words',
  fromY = 20,
  fromRotateX = 0,
  stagger = 0.03,
  duration = 0.5,
  ease = 'back.out(1.4)',
  delay = 0,
  scrollStart = 'top 85%',
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const split = new SplitText(el, { type })
      const targets = type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines

      gsap.set(targets, { opacity: 0, y: fromY, rotateX: fromRotateX, transformPerspective: 400 })

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        ease,
        delay,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none',
        },
      })

      return () => {
        split.revert()
      }
    })

    return () => ctx.revert()
  }, [children, type, fromY, fromRotateX, stagger, duration, ease, delay, scrollStart])

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
