'use client'

import dynamic from 'next/dynamic'
import { Component, ReactNode, ErrorInfo } from 'react'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
})

class HeroScene3DErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[HeroScene] 3D scene failed:', error.message)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function HeroSceneWrapper() {
  return (
    <HeroScene3DErrorBoundary>
      <HeroScene />
    </HeroScene3DErrorBoundary>
  )
}
