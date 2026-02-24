'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from '@/lib/gsap-config'

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!overlayRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false)
          onComplete()
        },
      })

      // Flash on
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: 'power4.in' }
      )

      // Type boot lines
      const lines = overlayRef.current!.querySelectorAll('.boot-line')
      lines.forEach((line) => {
        const text = line.getAttribute('data-text') || ''
        tl.to(line, {
          text: { value: text, delimiter: '' },
          duration: text.length * 0.025,
          ease: 'none',
        }, '>+0.08')
      })

      // Progress bar
      tl.to('.boot-progress-fill', {
        width: '100%',
        duration: 0.8,
        ease: 'steps(15)',
      }, '<+0.2')

      // Status text
      tl.to('.boot-status', {
        text: { value: 'READY.', delimiter: '' },
        duration: 0.3,
        ease: 'none',
      })

      // Fade out
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: 'power2.in',
      })
    }, overlayRef)

    return () => ctx.revert()
  }, [onComplete])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-wasteland-900 flex flex-col items-center justify-center font-heading"
      style={{ opacity: 0 }}
    >
      <div className="max-w-lg w-full px-6 space-y-2">
        <div className="boot-line text-pipboy-400 text-xs" data-text="VAULT-TEC INDUSTRIES (TM) TERMLINK PROTOCOL" />
        <div className="boot-line text-pipboy-400 text-xs" data-text="COPYRIGHT 2077 ROBCO INDUSTRIES" />
        <div className="boot-line text-pipboy-400 text-xs" data-text="> INITIALIZING PORTFOLIO.SYS ..." />
        <div className="boot-line text-amber-500 text-xs" data-text="> HAMZA.TURHAN // FULLSTACK DEVELOPER" />
        <div className="boot-line text-pipboy-400 text-xs" data-text="> LOADING MODULES: AI, WEB, MOBILE, TRADING" />

        <div className="mt-4 pt-2">
          <div className="w-full h-3 bg-wasteland-800 rounded-sm border border-wasteland-600 overflow-hidden">
            <div
              className="boot-progress-fill h-full bg-pipboy-400 rounded-sm"
              style={{ width: '0%', boxShadow: '0 0 8px rgba(64, 224, 208, 0.6)' }}
            />
          </div>
        </div>

        <div className="boot-status text-pipboy-400 text-xs mt-2" />
      </div>
    </div>
  )
}
