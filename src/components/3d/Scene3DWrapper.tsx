'use client'

import { Suspense, ReactNode } from 'react'
import { Canvas, type CanvasProps } from '@react-three/fiber'

interface Scene3DWrapperProps extends Omit<CanvasProps, 'children'> {
  children: ReactNode
  className?: string
  fallback?: ReactNode
}

const DefaultFallback = () => (
  <div className="absolute inset-0 bg-vault-body" />
)

export default function Scene3DWrapper({
  children,
  className = '',
  fallback,
  ...canvasProps
}: Scene3DWrapperProps) {
  return (
    <Suspense fallback={fallback ?? <DefaultFallback />}>
      <Canvas
        className={className}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        {...canvasProps}
      >
        {children}
      </Canvas>
    </Suspense>
  )
}
