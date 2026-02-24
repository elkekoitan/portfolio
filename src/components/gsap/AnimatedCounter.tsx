'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  to: number
  from?: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  /** Show a phosphor glow pulse after counting finishes */
  glowColor?: string
}

/**
 * Count-up number animation triggered by ScrollTrigger.
 * Used in About section stats.
 */
export default function AnimatedCounter({
  to,
  from = 0,
  suffix = '',
  prefix = '',
  duration = 1.6,
  className,
  glowColor,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { val: from }
    el.textContent = prefix + from + suffix

    const tween = gsap.to(obj, {
      val: to,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      onUpdate() {
        el.textContent = prefix + Math.round(obj.val) + suffix
      },
      onComplete() {
        if (glowColor) {
          gsap.fromTo(
            el,
            { textShadow: `0 0 0px ${glowColor}` },
            {
              textShadow: `0 0 16px ${glowColor}, 0 0 32px ${glowColor}60`,
              duration: 0.4,
              yoyo: true,
              repeat: 1,
              ease: 'power2.out',
            }
          )
        }
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill()
      })
    }
  }, [to, from, suffix, prefix, duration, glowColor])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {from}
      {suffix}
    </span>
  )
}
