'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

interface SectionMarkerProps {
  number: string // "01", "02", etc.
  className?: string
}

export default function SectionMarker({ number, className = '' }: SectionMarkerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Parallax scroll effect
      gsap.to(el, {
        y: -60,
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Fade in on enter
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [number])

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        position: 'absolute',
        top: '-2rem',
        right: '2rem',
        fontFamily: '"Orbitron", "Share Tech Mono", monospace',
        fontSize: 'clamp(6rem, 18vw, 14rem)',
        fontWeight: 900,
        color: '#6ee7d0',
        opacity: 0,
        lineHeight: 1,
        WebkitTextStroke: '1px rgba(110,231,208,0.06)',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 40px rgba(110,231,208,0.03)',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {number}
    </div>
  )
}
