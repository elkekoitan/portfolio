'use client'
import { useRef, useEffect, useState, ElementType, useCallback } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
  tag?: ElementType
  duration?: number
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\u03b1\u03b2\u03b3\u03b4\u2211\u220f\u222b\u2248\u2260\u221e\u25ca\u2020\u2021\u2026'

function scrambleText(text: string, revealCount: number): string {
  return text
    .split('')
    .map((char, i) => {
      if (i < revealCount) return char
      if (char === ' ') return ' '
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    })
    .join('')
}

export default function TextScramble({
  text,
  className,
  delay = 0,
  tag: Tag = 'span',
  duration = 1500,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text)
  const mountedRef = useRef(true)

  const animate = useCallback(() => {
    const len = text.length
    const delayMs = delay * 1000

    // Show initial scramble
    setDisplay(scrambleText(text, 0))

    const startTime = performance.now() + delayMs
    let lastRevealed = 0

    const tick = () => {
      if (!mountedRef.current) return

      const now = performance.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        // Still in delay phase, show scramble
        setDisplay(scrambleText(text, 0))
        requestAnimationFrame(tick)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const revealed = Math.floor(progress * len)

      if (revealed !== lastRevealed || progress < 1) {
        lastRevealed = revealed
        setDisplay(scrambleText(text, revealed))
      }

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    requestAnimationFrame(tick)
  }, [text, delay, duration])

  useEffect(() => {
    mountedRef.current = true
    animate()
    return () => { mountedRef.current = false }
  }, [animate])

  return <Tag className={className}>{display}</Tag>
}
