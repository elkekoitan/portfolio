'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, DrawSVGPlugin, MotionPathPlugin } from '@/lib/gsap-config'

/**
 * DataFlowConnector — animated SVG lines between About section cards.
 * DrawSVGPlugin draws the paths, MotionPathPlugin moves glow dots along them.
 * Hidden on mobile via CSS.
 */
export default function DataFlowConnector() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    const container = containerRef.current
    if (!svg || !container) return

    const paths = svg.querySelectorAll<SVGPathElement>('.flow-path')
    const dots = svg.querySelectorAll<SVGCircleElement>('.flow-dot')
    if (paths.length === 0) return

    const ctx = gsap.context(() => {
      // Initially hide paths
      gsap.set(paths, { drawSVG: '0%' })
      gsap.set(dots, { opacity: 0, scale: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true,
        },
      })

      // Draw paths sequentially
      paths.forEach((path, i) => {
        tl.to(path, {
          drawSVG: '100%',
          duration: 0.8,
          ease: 'power2.inOut',
        }, i * 0.3)
      })

      // Fade in dots then animate along paths
      dots.forEach((dot, i) => {
        if (!paths[i]) return

        tl.to(dot, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
        }, 0.5 + i * 0.3)

        // Infinite motion along path
        gsap.to(dot, {
          motionPath: {
            path: paths[i],
            align: paths[i],
            alignOrigin: [0.5, 0.5],
          },
          duration: 3 + i * 0.5,
          repeat: -1,
          ease: 'none',
          delay: 1.2 + i * 0.3,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="hidden md:block absolute inset-0 pointer-events-none z-[5]"
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Path: Card 1 → Card 2 */}
        <path
          className="flow-path"
          d="M320,200 C380,200 400,120 480,120 S560,200 600,200"
          stroke="#B87333"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Path: Card 2 → Card 3 */}
        <path
          className="flow-path"
          d="M600,200 C660,200 680,280 760,280 S840,200 880,200"
          stroke="#B87333"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Glow dots */}
        <circle className="flow-dot" r="4" fill="#6ee7d0" opacity="0">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle className="flow-dot" r="4" fill="#6ee7d0" opacity="0">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>

        {/* Glow filter */}
        <defs>
          <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}
