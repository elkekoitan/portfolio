'use client'
import { useRef, ReactNode, MouseEvent } from 'react'
import gsap from 'gsap'
import { audioEngine } from '@/lib/audio-engine'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.25,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }

  const handleMouseEnter = () => {
    audioEngine.hoverTick()
    gsap.to(ref.current, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
    })
  }

  const handleMouseLeaveScale = () => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        handleMouseLeave()
        handleMouseLeaveScale()
      }}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
