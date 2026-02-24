'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  value: number
  max?: number
  color?: string
  delay?: number
  duration?: number
  triggerOnce?: boolean
}

/**
 * ASCII bar that animates from left-to-right via GSAP clip-path.
 * Renders: [████████████░░░░░░░░]
 * On scroll-in: filled chars reveal with a sweeping animation.
 */
export default function AnimatedAsciiBar({
  value,
  max = 20,
  color = 'text-vault-turquoise',
  delay = 0,
  duration = 0.9,
  triggerOnce = true,
}: Props) {
  const filled = Math.round((value / 100) * max)
  const empty = max - filled
  const filledRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = filledRef.current
    if (!el) return

    gsap.set(el, { clipPath: 'inset(0 100% 0 0)' })

    const tween = gsap.to(el, {
      clipPath: 'inset(0 0% 0 0)',
      duration,
      ease: 'power2.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: triggerOnce ? 'play none none none' : 'play none none reset',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill()
      })
    }
  }, [value, max, delay, duration, triggerOnce])

  return (
    <span className={`font-terminal text-sm ${color}`}>
      [
      <span ref={filledRef} className="inline-block">
        {'\u2588'.repeat(filled)}
      </span>
      {'\u2591'.repeat(empty)}]
    </span>
  )
}
