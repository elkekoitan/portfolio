'use client'

import { useState, useEffect } from 'react'
import { audioEngine } from '@/lib/audio-engine'

export default function AudioToggle() {
  const [on, setOn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setOn(audioEngine.enabled)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => {
        const next = audioEngine.toggle()
        setOn(next)
      }}
      className="fixed bottom-4 left-4 z-50 hidden md:block"
      style={{
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.15em',
        color: on ? '#6ee7d0' : '#4f3e27',
        border: `1px solid ${on ? 'rgba(110,231,208,0.4)' : 'rgba(79,62,39,0.4)'}`,
        background: 'rgba(10,10,8,0.8)',
        padding: '0.25rem 0.6rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      title={on ? 'Sound Effects ON' : 'Sound Effects OFF'}
    >
      [SFX: {on ? 'ON' : 'OFF'}]
    </button>
  )
}
