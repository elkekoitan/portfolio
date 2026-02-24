'use client'

import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

export function useScrollReveal(
  options: {
    y?: number
    x?: number
    opacity?: number
    duration?: number
    delay?: number
    stagger?: number
    childSelector?: string
  } = {}
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const {
    y = 30, x = 0, opacity = 0,
    duration = 0.8, delay = 0,
    stagger = 0, childSelector
  } = options

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const targets = childSelector
        ? containerRef.current!.querySelectorAll(childSelector)
        : containerRef.current!

      gsap.from(targets, {
        y, x, opacity, duration, delay,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current!,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [y, x, opacity, duration, delay, stagger, childSelector])

  return containerRef
}

export function useEntranceAnimation(
  options: {
    y?: number; x?: number; scale?: number
    opacity?: number; duration?: number; delay?: number
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)
  const {
    y = 0, x = 0, scale = 1,
    opacity = 0, duration = 0.8, delay = 0
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current!, {
        y, x, scale, opacity, duration, delay,
        ease: 'power3.out',
      })
    }, ref)

    return () => ctx.revert()
  }, [y, x, scale, opacity, duration, delay])

  return ref
}

export function useLoopBounce(distance = 20, duration = 2) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current!, {
        y: -distance,
        duration: duration / 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, ref)

    return () => ctx.revert()
  }, [distance, duration])

  return ref
}

export function useMasterTimeline() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mainRef.current) return

    const ctx = gsap.context(() => {
      // ScrollTrigger batch for cards
      ScrollTrigger.batch('.project-card, .skill-card, .contact-card, .terminal-card-wrapper', {
        onEnter: (batch) => gsap.from(batch, {
          opacity: 0, y: 30, stagger: 0.1, duration: 0.6,
          ease: 'power2.out',
        }),
        start: 'top 85%',
      })

      // Section title reveals
      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 30, duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // Skill bar animations
      gsap.utils.toArray<HTMLElement>('.skill-bar-fill').forEach((bar) => {
        const level = bar.getAttribute('data-level') || '0'
        gsap.fromTo(bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar.closest('.skill-card') || bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Parallax for background elements
      gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach((el) => {
        gsap.to(el, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return mainRef
}
