'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, DrawSVGPlugin, MotionPathPlugin } from '@/lib/gsap-config'

interface CircuitDividerProps {
  className?: string
  variant?: 'simple' | 'branched' | 'complex'
}

export default function CircuitDivider({ className = '', variant = 'branched' }: CircuitDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const particleRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const ctx = gsap.context(() => {
      const mainLine = svg.querySelector('.circuit-main-line') as SVGPathElement
      const nodes = svg.querySelectorAll('.circuit-node')
      const branches = svg.querySelectorAll('.circuit-branch')
      const particle = particleRef.current
      const sparks = svg.querySelectorAll('.circuit-spark')

      if (!mainLine) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // 1. Draw main line
      tl.fromTo(mainLine,
        { drawSVG: '0%' },
        { drawSVG: '100%', duration: 1.2, ease: 'power2.inOut' }
      )

      // 2. Nodes appear with scale + glow
      if (nodes.length) {
        tl.fromTo(nodes,
          { scale: 0, transformOrigin: 'center center' },
          { scale: 1, duration: 0.3, stagger: 0.1, ease: 'back.out(2)' },
          '-=0.6'
        )
      }

      // 3. Branch lines draw
      if (branches.length) {
        tl.fromTo(branches,
          { drawSVG: '0%' },
          { drawSVG: '100%', duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        )
      }

      // 4. Sparks flash
      if (sparks.length) {
        tl.fromTo(sparks,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1.5, duration: 0.15, stagger: 0.05, ease: 'power4.out' },
          '-=0.2'
        )
        tl.to(sparks, { opacity: 0, scale: 0, duration: 0.3 }, '+=0.1')
      }

      // 5. Travelling particle (loops)
      if (particle && mainLine) {
        gsap.set(particle, { opacity: 0 })
        tl.set(particle, { opacity: 1 }, '-=0.3')
        tl.to(particle, {
          motionPath: {
            path: mainLine,
            align: mainLine,
            alignOrigin: [0.5, 0.5],
          },
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 1,
        })
      }
    })

    return () => ctx.revert()
  }, [variant])

  if (variant === 'simple') {
    return (
      <div className={`py-4 ${className}`} aria-hidden="true">
        <svg ref={svgRef} viewBox="0 0 800 40" className="w-full h-10 overflow-visible">
          <path
            className="circuit-main-line"
            d="M80,20 L720,20"
            stroke="#B87333"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          <circle className="circuit-node" cx="400" cy="20" r="4" fill="#0a0a08" stroke="#B87333" strokeWidth="1.5" />
          <circle ref={particleRef} r="2.5" fill="#6ee7d0" opacity="0">
            <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    )
  }

  return (
    <div className={`py-4 ${className}`} aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 800 60" className="w-full h-[60px] overflow-visible">
        {/* Main horizontal line with angular node */}
        <path
          className="circuit-main-line"
          d="M60,30 L340,30 L370,15 L400,30 L430,45 L460,30 L740,30"
          stroke="#B87333"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />

        {/* Branch lines */}
        <path className="circuit-branch" d="M200,30 L200,12" stroke="#B87333" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path className="circuit-branch" d="M600,30 L600,48" stroke="#B87333" strokeWidth="0.8" fill="none" opacity="0.3" />

        {/* Nodes */}
        <circle className="circuit-node" cx="200" cy="30" r="3" fill="#0a0a08" stroke="#6ee7d0" strokeWidth="1.5" />
        <circle className="circuit-node" cx="400" cy="30" r="5" fill="#0a0a08" stroke="#B87333" strokeWidth="2">
          <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle className="circuit-node" cx="600" cy="30" r="3" fill="#0a0a08" stroke="#6ee7d0" strokeWidth="1.5" />

        {/* Branch endpoint nodes */}
        <circle className="circuit-node" cx="200" cy="12" r="2" fill="#6ee7d0" opacity="0.6" />
        <circle className="circuit-node" cx="600" cy="48" r="2" fill="#6ee7d0" opacity="0.6" />

        {/* Sparks at junction points */}
        <circle className="circuit-spark" cx="200" cy="30" r="6" fill="none" stroke="#6ee7d0" strokeWidth="0.5" opacity="0" />
        <circle className="circuit-spark" cx="400" cy="30" r="8" fill="none" stroke="#B87333" strokeWidth="0.5" opacity="0" />
        <circle className="circuit-spark" cx="600" cy="30" r="6" fill="none" stroke="#6ee7d0" strokeWidth="0.5" opacity="0" />

        {/* Glow around center node */}
        <circle cx="400" cy="30" r="10" fill="none" stroke="#B87333" strokeWidth="0.3" opacity="0.2">
          <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Travelling particle */}
        <circle ref={particleRef} r="3" fill="#6ee7d0" opacity="0" filter="url(#glow)">
          <animate attributeName="r" values="3;2;3" dur="0.5s" repeatCount="indefinite" />
        </circle>

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
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
