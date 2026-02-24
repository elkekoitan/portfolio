'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BootParticlesProps {
  count?: number
  visible?: boolean
  color?: string
  speed?: number
}

export default function BootParticles({
  count = 800,
  visible = true,
  color = '#6ee7d0',
  speed = 0.3,
}: BootParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, velocities, opacities } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const opa = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Spread particles in a cylinder around center
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 8 + 0.5
      pos[i3] = Math.cos(angle) * radius
      pos[i3 + 1] = (Math.random() - 0.5) * 10
      pos[i3 + 2] = Math.sin(angle) * radius - 5

      // Slow drift velocity
      vel[i3] = (Math.random() - 0.5) * 0.01
      vel[i3 + 1] = Math.random() * 0.005 + 0.002
      vel[i3 + 2] = (Math.random() - 0.5) * 0.01

      opa[i] = Math.random() * 0.6 + 0.2
    }
    return { positions: pos, velocities: vel, opacities: opa }
  }, [count])

  useFrame((_, delta) => {
    if (!pointsRef.current || !visible) return
    const geo = pointsRef.current.geometry
    const posAttr = geo.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posAttr.array[i3] += velocities[i3] * speed * delta * 60
      posAttr.array[i3 + 1] += velocities[i3 + 1] * speed * delta * 60
      posAttr.array[i3 + 2] += velocities[i3 + 2] * speed * delta * 60

      // Reset particles that drift too far
      if (posAttr.array[i3 + 1] > 6) {
        posAttr.array[i3 + 1] = -6
      }
    }
    posAttr.needsUpdate = true

    // Slow rotation
    pointsRef.current.rotation.y += delta * 0.02
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <points ref={pointsRef} visible={visible} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
