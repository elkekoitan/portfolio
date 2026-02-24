'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Component, ErrorInfo } from 'react'

const CinematicBoot = dynamic(() => import('./CinematicBoot'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a08',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          color: '#6ee7d0',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          opacity: 0.6,
        }}
      >
        {'> INITIALIZING...'}
      </div>
    </div>
  ),
})

/* Error boundary — if 3D crashes, render children normally */
class Boot3DErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[CinematicBoot] 3D boot failed, falling back to normal render:', error.message)
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export default function CinematicBootWrapper({ children }: { children: ReactNode }) {
  return (
    <Boot3DErrorBoundary fallback={children}>
      <CinematicBoot>{children}</CinematicBoot>
    </Boot3DErrorBoundary>
  )
}
