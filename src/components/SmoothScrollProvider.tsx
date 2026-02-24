'use client'

import { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const tickerCb = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
