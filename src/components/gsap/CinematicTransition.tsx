'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, ScrambleTextPlugin } from '@/lib/gsap-config'
import { audioEngine } from '@/lib/audio-engine'

interface TransitionConfig {
  sectionId: string
  label: string
  sublabel?: string
}

interface CinematicTransitionProps {
  sections: TransitionConfig[]
}

export default function CinematicTransition({ sections }: CinematicTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const topBarRef = useRef<HTMLDivElement>(null)
  const bottomBarRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const subTextRef = useRef<HTMLDivElement>(null)
  const [currentLabel, setCurrentLabel] = useState('')
  const [currentSub, setCurrentSub] = useState('')

  useEffect(() => {
    if (!overlayRef.current || !topBarRef.current || !bottomBarRef.current) return

    const ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        const trigger = document.getElementById(section.sectionId)
        if (!trigger) return

        ScrollTrigger.create({
          trigger,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            audioEngine.transitionWhoosh()
            setCurrentLabel(section.label)
            setCurrentSub(section.sublabel ?? '')

            const tl = gsap.timeline()

            // Bars slide in
            tl.to(topBarRef.current, { y: 0, duration: 0.3, ease: 'power3.out' })
              .to(bottomBarRef.current, { y: 0, duration: 0.3, ease: 'power3.out' }, '<')

            // ScrambleText decode on the label
            if (textRef.current) {
              tl.to(textRef.current, {
                duration: 0.8,
                scrambleText: {
                  text: section.label,
                  chars: '01!<>{}[]/',
                  speed: 0.4,
                },
              }, '<0.15')
            }

            // Subtitle fade in
            if (subTextRef.current && section.sublabel) {
              tl.fromTo(subTextRef.current,
                { opacity: 0 },
                { opacity: 0.6, duration: 0.3 },
                '<0.3'
              )
            }

            // Hold for a beat
            tl.to({}, { duration: 0.4 })

            // Bars slide out
            tl.to(topBarRef.current, { y: '-100%', duration: 0.25, ease: 'power2.in' })
              .to(bottomBarRef.current, { y: '100%', duration: 0.25, ease: 'power2.in' }, '<')
              .set([topBarRef.current, bottomBarRef.current], { y: '-100%' })
          },
        })
      })
    })

    return () => ctx.revert()
  }, [sections])

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      {/* Top cinematic bar */}
      <div
        ref={topBarRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '12vh',
          background: 'linear-gradient(180deg, #0a0a08 80%, transparent)',
          transform: 'translateY(-100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexDirection: 'column',
        }}
      >
        <div
          ref={textRef}
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
            color: '#6ee7d0',
            letterSpacing: '0.3em',
            textShadow: '0 0 8px rgba(110,231,208,0.4)',
          }}
        >
          {currentLabel}
        </div>
        <div
          ref={subTextRef}
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: 'clamp(0.5rem, 0.8vw, 0.65rem)',
            color: '#B87333',
            letterSpacing: '0.2em',
            opacity: 0,
          }}
        >
          {currentSub}
        </div>
      </div>

      {/* Bottom cinematic bar */}
      <div
        ref={bottomBarRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8vh',
          background: 'linear-gradient(0deg, #0a0a08 80%, transparent)',
          transform: 'translateY(100%)',
        }}
      />
    </div>
  )
}
