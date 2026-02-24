'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

interface ScrollProgressProps {
  sections: { id: string; label: string }[]
}

export default function ScrollProgress({ sections }: ScrollProgressProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLDivElement>(null)
  const [activeLabel, setActiveLabel] = useState('')

  useEffect(() => {
    if (!fillRef.current || !barRef.current) return

    const ctx = gsap.context(() => {
      // Overall scroll progress
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (fillRef.current) {
            fillRef.current.style.height = `${self.progress * 100}%`
          }
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(self.progress * 100)}%`
          }
        },
      })

      // Section tracking
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (!el) return

        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveLabel(section.label),
          onEnterBack: () => setActiveLabel(section.label),
        })
      })

      // Fade in the progress bar
      gsap.fromTo(barRef.current,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 1,
          ease: 'power2.out',
        }
      )
    })

    return () => ctx.revert()
  }, [sections])

  return (
    <div
      ref={barRef}
      className="hidden md:block"
      style={{
        position: 'fixed',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0,
      }}
    >
      {/* Track */}
      <div
        style={{
          width: '2px',
          height: '120px',
          background: 'rgba(184,115,51,0.15)',
          borderRadius: '1px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fill */}
        <div
          ref={fillRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '0%',
            background: 'linear-gradient(0deg, #6ee7d0, #B87333)',
            borderRadius: '1px',
            transition: 'height 0.1s ease-out',
          }}
        />
      </div>

      {/* Percentage */}
      <div
        ref={percentRef}
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '0.55rem',
          color: '#6ee7d0',
          letterSpacing: '0.1em',
          opacity: 0.6,
        }}
      >
        0%
      </div>

      {/* Active section label */}
      <div
        ref={labelRef}
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '0.5rem',
          color: '#B87333',
          letterSpacing: '0.15em',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          opacity: 0.5,
          maxHeight: '80px',
          overflow: 'hidden',
        }}
      >
        {activeLabel}
      </div>
    </div>
  )
}
