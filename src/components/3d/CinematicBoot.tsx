'use client'

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Sparkles, Text } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import BootParticles from './BootParticles'
import { audioEngine } from '@/lib/audio-engine'

/* ── Boot line data ── */
const BOOT_LINES = [
  { text: '> ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM', color: '#6ee7d0', delay: 0 },
  { text: '> COPYRIGHT 2075-2077 ROBCO INDUSTRIES', color: '#6ee7d0', delay: 100 },
  { text: '> -Server 1- [VAULT-TEC PERSONNEL TERMINAL]', color: '#6ee7d0', delay: 200 },
  { text: '> ', color: '#6ee7d0', delay: 100 },
  { text: '> INITIALIZING PIPELINE CORE........... [OK]', color: '#6ee7d0', delay: 400 },
  { text: '> LOADING REACT 19 FIBER TREE.......... [OK]', color: '#6ee7d0', delay: 300 },
  { text: '> MOUNTING 3D RENDER ENGINE............ [OK]', color: '#6ee7d0', delay: 350 },
  { text: '> SYNCING SCROLL TRIGGERS.............. [OK]', color: '#6ee7d0', delay: 250 },
  { text: '> REGISTERING MOTION PATH PLUGIN....... [OK]', color: '#6ee7d0', delay: 200 },
  { text: '> CALIBRATING TERMINAL DISPLAY......... [OK]', color: '#B87333', delay: 300 },
  { text: '> WARNING: RADIATION LEVELS ELEVATED... [PATCHED]', color: '#ffb641', delay: 400 },
  { text: '> ALL SYSTEMS NOMINAL.', color: '#B87333', delay: 500 },
]

/* ── 3D Boot Text — renders in scene ── */
function BootText3D({ lines, phase }: { lines: typeof BOOT_LINES; phase: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (phase < 1) return
    let idx = 0
    const timers: ReturnType<typeof setTimeout>[] = []

    const showNext = () => {
      if (idx >= lines.length) return
      idx++
      setVisibleCount(idx)
      audioEngine.bootLineAppear()
      if (idx < lines.length) {
        timers.push(setTimeout(showNext, lines[idx]?.delay ?? 200))
      }
    }
    timers.push(setTimeout(showNext, 300))
    return () => timers.forEach(clearTimeout)
  }, [phase, lines])

  return (
    <group ref={groupRef} position={[-4.5, 2.5, 0]}>
      {lines.map((line, i) => (
        <Text
          key={i}
          position={[0, -i * 0.38, 0]}
          fontSize={0.22}
          font="/fonts/ShareTechMono-Regular.ttf"
          color={line.color}
          anchorX="left"
          anchorY="top"
          visible={i < visibleCount}
          maxWidth={10}
        >
          {line.text}
          <meshBasicMaterial
            color={line.color}
            transparent
            opacity={i < visibleCount ? 1 : 0}
            toneMapped={false}
          />
        </Text>
      ))}
    </group>
  )
}

/* ── Progress bar 3D ── */
function ProgressBar3D({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.x = Math.max(0.001, progress)
    }
  })

  return (
    <group position={[-4.5, -2.5, 0]}>
      {/* Background */}
      <mesh position={[3.5, 0, -0.01]}>
        <planeGeometry args={[7, 0.12]} />
        <meshBasicMaterial color="#1a1208" transparent opacity={0.8} />
      </mesh>
      {/* Fill */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[7, 0.08]} />
        <meshBasicMaterial color="#6ee7d0" toneMapped={false} />
      </mesh>
      {/* Label */}
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.14}
        font="/fonts/ShareTechMono-Regular.ttf"
        color="#B87333"
        anchorX="left"
      >
        {`LOADING... ${Math.round(progress * 100)}%`}
      </Text>
    </group>
  )
}

/* ── Scanline overlay plane ── */
function ScanlineOverlay() {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.time.value = clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0.5]} renderOrder={100}>
      <planeGeometry args={[12, 8]} />
      <shaderMaterial
        ref={matRef}
        transparent
        depthWrite={false}
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          void main() {
            float scanline = sin(vUv.y * 400.0 + time * 2.0) * 0.5 + 0.5;
            scanline = pow(scanline, 8.0);
            float alpha = scanline * 0.06;

            // Moving scan beam
            float beam = smoothstep(0.0, 0.02, abs(vUv.y - fract(time * 0.15)));
            beam = 1.0 - beam;
            alpha += beam * 0.04;

            gl_FragColor = vec4(0.11, 0.90, 0.82, alpha);
          }
        `}
      />
    </mesh>
  )
}

/* ── CRT frame border ── */
function CRTFrame() {
  return (
    <group position={[0, 0, 0.2]}>
      {/* Top border */}
      <mesh position={[0, 3.6, 0]}>
        <planeGeometry args={[11, 0.08]} />
        <meshBasicMaterial color="#B87333" transparent opacity={0.4} />
      </mesh>
      {/* Bottom border */}
      <mesh position={[0, -3.6, 0]}>
        <planeGeometry args={[11, 0.08]} />
        <meshBasicMaterial color="#B87333" transparent opacity={0.4} />
      </mesh>
      {/* Left border */}
      <mesh position={[-5.5, 0, 0]}>
        <planeGeometry args={[0.08, 7.28]} />
        <meshBasicMaterial color="#B87333" transparent opacity={0.4} />
      </mesh>
      {/* Right border */}
      <mesh position={[5.5, 0, 0]}>
        <planeGeometry args={[0.08, 7.28]} />
        <meshBasicMaterial color="#B87333" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

/* ── Camera controller ── */
function CameraController({ phase }: { phase: number }) {
  const { camera } = useThree()

  useEffect(() => {
    if (phase === 3) {
      // Fly back reveal
      gsap.to(camera.position, {
        z: 20,
        y: 2,
        duration: 2,
        ease: 'power3.inOut',
      })
      gsap.to(camera.rotation, {
        x: -0.1,
        duration: 2,
        ease: 'power3.inOut',
      })
    }
  }, [phase, camera])

  return null
}

/* ── Inner 3D Scene ── */
function BootScene({
  phase,
  progress,
  onAllLinesShown,
}: {
  phase: number
  progress: number
  onAllLinesShown: () => void
}) {
  const sceneRef = useRef<THREE.Group>(null)

  // When boot text finishes, notify parent
  useEffect(() => {
    if (phase === 1) {
      const totalTime = BOOT_LINES.reduce((sum, l) => sum + (l.delay ?? 200), 300) + 500
      const timer = setTimeout(onAllLinesShown, totalTime)
      return () => clearTimeout(timer)
    }
  }, [phase, onAllLinesShown])

  return (
    <>
      <CameraController phase={phase} />
      <color attach="background" args={['#0a0a08']} />
      <ambientLight intensity={0.1} />

      <group ref={sceneRef}>
        {/* Background stars */}
        <Stars
          radius={50}
          depth={40}
          count={2000}
          factor={2}
          saturation={0}
          speed={0.5}
        />

        {/* Boot particles */}
        <BootParticles
          visible={phase >= 0}
          count={600}
          color="#6ee7d0"
          speed={phase === 3 ? 2 : 0.3}
        />

        {/* Sparkles — ambient glow */}
        <Sparkles
          count={40}
          scale={[10, 6, 4]}
          size={1.5}
          speed={0.3}
          color="#6ee7d0"
          opacity={phase >= 1 ? 0.6 : 0}
        />

        {/* CRT scanline overlay */}
        {phase >= 1 && <ScanlineOverlay />}

        {/* CRT frame border */}
        {phase >= 1 && <CRTFrame />}

        {/* Boot text */}
        <BootText3D lines={BOOT_LINES} phase={phase} />

        {/* Progress bar */}
        {phase >= 1 && <ProgressBar3D progress={progress} />}
      </group>

      {/* Emissive glow plane for bloom-like effect */}
      <mesh position={[0, 0, -1]} renderOrder={-1}>
        <planeGeometry args={[12, 8]} />
        <meshBasicMaterial color="#0a0a08" transparent opacity={0.3} />
      </mesh>
    </>
  )
}

/* ── Main CinematicBoot Component ── */
interface CinematicBootProps {
  children: ReactNode
}

export default function CinematicBoot({ children }: CinematicBootProps) {
  const [done, setDone] = useState(false)
  const [phase, setPhase] = useState(0) // 0=dark, 1=boot, 2=presskey, 3=reveal
  const [progress, setProgress] = useState(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const pressKeyRef = useRef<HTMLDivElement>(null)

  // Check if already booted this session
  useEffect(() => {
    try {
      if (sessionStorage.getItem('ht_boot_3d')) {
        setDone(true)
        return
      }
    } catch {
      setDone(true)
      return
    }

    // Check reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      sessionStorage.setItem('ht_boot_3d', '1')
      return
    }

    // Start boot sequence
    const timer = setTimeout(() => setPhase(1), 800)
    return () => clearTimeout(timer)
  }, [])

  // Progress bar animation
  useEffect(() => {
    if (phase !== 1) return
    const totalTime = BOOT_LINES.reduce((sum, l) => sum + (l.delay ?? 200), 300)
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const p = Math.min(1, elapsed / totalTime)
      setProgress(p)
      if (p >= 1) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [phase])

  const onAllLinesShown = useCallback(() => {
    setProgress(1)
    setPhase(2) // Show "Press Any Key"
  }, [])

  // Handle "Press Any Key"
  useEffect(() => {
    if (phase !== 2) return

    // Pulse animation for press key text
    if (pressKeyRef.current) {
      gsap.to(pressKeyRef.current, {
        opacity: 0.3,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    }

    const handler = () => {
      audioEngine.init()
      audioEngine.glitchBurst()
      setPhase(3) // Start reveal transition

      // Glitch flash + fade out
      if (overlayRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            sessionStorage.setItem('ht_boot_3d', '1')
            setDone(true)
          },
        })
        tl.to(overlayRef.current, { filter: 'brightness(3) blur(4px)', duration: 0.1 })
          .to(overlayRef.current, { filter: 'brightness(0.5) blur(0px)', duration: 0.15 })
          .to(overlayRef.current, { filter: 'brightness(4) blur(8px)', duration: 0.08 })
          .to(overlayRef.current, { opacity: 0, filter: 'brightness(1) blur(0px)', duration: 0.6, ease: 'power2.in' })
      }
    }

    window.addEventListener('keydown', handler, { once: true })
    window.addEventListener('click', handler, { once: true })
    window.addEventListener('touchstart', handler, { once: true })

    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('click', handler)
      window.removeEventListener('touchstart', handler)
    }
  }, [phase])

  if (done) return <>{children}</>

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a08',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
      >
        <BootScene
          phase={phase}
          progress={progress}
          onAllLinesShown={onAllLinesShown}
        />
      </Canvas>

      {/* Press Any Key overlay — HTML layer */}
      {phase === 2 && (
        <div
          ref={pressKeyRef}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: '"Share Tech Mono", "Courier New", monospace',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.95rem)',
            color: '#6ee7d0',
            letterSpacing: '0.2em',
            textShadow: '0 0 12px rgba(110, 231, 208, 0.5)',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {'// PRESS ANY KEY TO CONTINUE //'}
        </div>
      )}

      {/* CSS vignette + scanline overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,8,0.8) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 6,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 3px',
          opacity: 0.4,
        }}
      />

      {/* Skip button */}
      <button
        onClick={() => {
          sessionStorage.setItem('ht_boot_3d', '1')
          setDone(true)
        }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '2rem',
          zIndex: 10,
          background: 'transparent',
          border: '1px solid rgba(110,231,208,0.3)',
          color: 'rgba(110,231,208,0.5)',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '0.7rem',
          padding: '0.3rem 0.8rem',
          cursor: 'pointer',
          letterSpacing: '0.1em',
        }}
      >
        SKIP [ESC]
      </button>
    </div>
  )
}
