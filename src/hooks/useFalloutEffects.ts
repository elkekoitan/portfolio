'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { gsap } from '@/lib/gsap-config'

export function useTypewriter(
  text: string,
  options: { speed?: number; delay?: number } = {}
) {
  const ref = useRef<HTMLElement>(null)
  const { speed = 0.05, delay = 0 } = options

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    el.textContent = ''

    const ctx = gsap.context(() => {
      gsap.to(el, {
        duration: text.length * speed,
        delay,
        text: { value: text, delimiter: '' },
        ease: 'none',
      })
    })

    return () => ctx.revert()
  }, [text, speed, delay])

  return ref
}

export function useCRTBoot() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const el = containerRef.current!
      const children = el.querySelectorAll('[data-boot-order]')

      const tl = gsap.timeline()

      // CRT power on flash
      tl.fromTo(el,
        { opacity: 0, filter: 'brightness(5) blur(10px)' },
        { opacity: 1, filter: 'brightness(1) blur(0px)', duration: 0.3, ease: 'power4.in' }
      )

      // Content appears sequentially
      children.forEach((child) => {
        tl.from(child, {
          opacity: 0,
          y: 5,
          duration: 0.3,
          ease: 'steps(3)',
        }, '>-0.05')
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export function useGlitch() {
  const ref = useRef<HTMLElement>(null)

  const triggerGlitch = useCallback(() => {
    if (!ref.current) return
    const el = ref.current
    const tl = gsap.timeline()

    tl.to(el, { x: -3, skewX: 2, duration: 0.05, ease: 'steps(1)' })
      .to(el, { x: 5, skewX: -1, filter: 'hue-rotate(90deg)', duration: 0.05 })
      .to(el, { x: -2, skewX: 0, duration: 0.05 })
      .to(el, { x: 0, skewX: 0, filter: 'none', duration: 0.05 })
  }, [])

  return { ref, triggerGlitch }
}

export function useRadiationGlow(color = '#40e0d0') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current!, {
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}40, 0 0 60px ${color}20`,
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, ref)

    return () => ctx.revert()
  }, [color])

  return ref
}

export function useCountUp(
  targetValue: number,
  suffix = '',
  options: { duration?: number; delay?: number } = {}
) {
  const ref = useRef<HTMLElement>(null)
  const { duration = 1.5, delay = 0 } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: targetValue,
        duration,
        delay,
        ease: 'power2.out',
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.val) + suffix
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [targetValue, suffix, duration, delay])

  return ref
}

export function useBootScreen() {
  const [showContent, setShowContent] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setShowContent(true),
      })

      const lines = overlayRef.current!.querySelectorAll('.boot-line')

      lines.forEach((line) => {
        const text = line.getAttribute('data-text') || ''
        tl.to(line, {
          text: { value: text, delimiter: '' },
          duration: text.length * 0.03,
          ease: 'none',
        }, '>+0.1')
      })

      // Progress bar
      tl.to('.boot-progress-fill', { width: '100%', duration: 1, ease: 'steps(20)' }, '<')

      // Fade out overlay
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = 'none'
          }
        },
      })
    }, overlayRef)

    return () => ctx.revert()
  }, [])

  return { overlayRef, showContent }
}
