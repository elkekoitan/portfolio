'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Sparkles, Float } from '@react-three/drei'
import * as THREE from 'three'

/* ── Floating debris / wasteland particles ── */
function FloatingDebris({ count = 15 }: { count?: number }) {
  const meshes = useMemo(() => {
    const items = []
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? 'box' : 'tetra'
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 12
      const z = (Math.random() - 0.5) * 8 - 4
      const scale = Math.random() * 0.15 + 0.03
      const rotSpeed = (Math.random() - 0.5) * 0.5
      const color = ['#B87333', '#e8a849', '#d4cfc0', '#4f3e27'][Math.floor(Math.random() * 4)]
      const wireframe = Math.random() > 0.5
      items.push({ id: i, type, position: [x, y, z] as [number, number, number], scale, rotSpeed, color, wireframe })
    }
    return items
  }, [count])

  return (
    <>
      {meshes.map((item) => (
        <Float key={item.id} speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh position={item.position} scale={item.scale}>
            {item.type === 'box' ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <tetrahedronGeometry args={[1, 0]} />
            )}
            <meshBasicMaterial
              color={item.color}
              transparent
              opacity={0.25}
              wireframe={item.wireframe}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

/* ── Mouse parallax camera ── */
function MouseParallax() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  // Mouse listener in useEffect (NOT useFrame — useFrame runs every frame)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05
    target.current.y += (mouse.current.y - target.current.y) * 0.05
    camera.position.x = target.current.x * 0.3
    camera.position.y = target.current.y * 0.2
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Ambient glow ring ── */
function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.1
      const scale = 1 + Math.sin(clock.elapsedTime * 0.5) * 0.05
      ringRef.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0, -8]}>
      <ringGeometry args={[3, 3.05, 64]} />
      <meshBasicMaterial color="#6ee7d0" transparent opacity={0.15} toneMapped={false} />
    </mesh>
  )
}

/* ── Inner scene content ── */
function HeroSceneContent() {
  return (
    <>
      <color attach="background" args={['#0a0a08']} />

      {/* Mouse parallax */}
      <MouseParallax />

      {/* Star field — deep background */}
      <Stars
        radius={80}
        depth={60}
        count={3000}
        factor={3}
        saturation={0}
        speed={0.4}
      />

      {/* Floating debris */}
      <FloatingDebris count={12} />

      {/* Ambient sparkles — turquoise */}
      <Sparkles
        count={50}
        scale={[14, 8, 6]}
        size={2}
        speed={0.2}
        color="#6ee7d0"
        opacity={0.4}
      />

      {/* Amber sparkles */}
      <Sparkles
        count={20}
        scale={[10, 6, 4]}
        size={1.5}
        speed={0.15}
        color="#e8a849"
        opacity={0.25}
      />

      {/* Glow ring */}
      <GlowRing />

    </>
  )
}

/* ── Exported component ── */
export default function HeroScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  )
}
