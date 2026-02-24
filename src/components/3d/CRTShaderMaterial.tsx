'use client'

import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

const CRTMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(1, 1),
    distortion: 0.15,
    scanlineIntensity: 0.12,
    flickerIntensity: 0.03,
    vignetteStrength: 0.4,
    chromaticAberration: 0.003,
    brightness: 1.0,
    tDiffuse: null as THREE.Texture | null,
    color: new THREE.Color('#6ee7d0'),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader — CRT composite effect
  `
    uniform float time;
    uniform vec2 resolution;
    uniform float distortion;
    uniform float scanlineIntensity;
    uniform float flickerIntensity;
    uniform float vignetteStrength;
    uniform float chromaticAberration;
    uniform float brightness;
    uniform sampler2D tDiffuse;
    uniform vec3 color;
    varying vec2 vUv;

    // Barrel distortion — simulates curved CRT glass
    vec2 barrelDistort(vec2 uv) {
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);
      float f = 1.0 + r2 * distortion;
      return centered * f + 0.5;
    }

    // Scanline pattern
    float scanline(vec2 uv) {
      float line = sin(uv.y * resolution.y * 3.14159 * 2.0) * 0.5 + 0.5;
      return 1.0 - line * scanlineIntensity;
    }

    // Screen flicker
    float flicker() {
      return 1.0 - flickerIntensity * (sin(time * 8.0) * 0.5 + sin(time * 13.7) * 0.3 + sin(time * 23.1) * 0.2);
    }

    // Vignette — darkened edges
    float vignette(vec2 uv) {
      vec2 centered = (uv - 0.5) * 2.0;
      float v = 1.0 - dot(centered, centered) * vignetteStrength;
      return clamp(v, 0.0, 1.0);
    }

    // Phosphor glow simulation
    vec3 phosphor(vec2 uv) {
      float px = fract(uv.x * resolution.x * 0.5);
      float r = smoothstep(0.0, 0.33, px) - smoothstep(0.33, 0.66, px);
      float g = smoothstep(0.33, 0.66, px) - smoothstep(0.66, 1.0, px);
      float b = smoothstep(0.66, 1.0, px);
      return vec3(r, g, b) * 0.08 + vec3(1.0);
    }

    void main() {
      vec2 uv = barrelDistort(vUv);

      // Out of bounds check (barrel distortion can push UVs outside 0-1)
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
      }

      // Chromatic aberration — RGB channel offset
      float rChan = texture2D(tDiffuse, uv + vec2(chromaticAberration, 0.0)).r;
      float gChan = texture2D(tDiffuse, uv).g;
      float bChan = texture2D(tDiffuse, uv - vec2(chromaticAberration, 0.0)).b;
      vec3 col = vec3(rChan, gChan, bChan);

      // Apply effects
      col *= color;
      col *= phosphor(uv);
      col *= scanline(uv);
      col *= flicker();
      col *= vignette(uv);
      col *= brightness;

      // Subtle noise grain
      float noise = fract(sin(dot(uv * time, vec2(12.9898, 78.233))) * 43758.5453);
      col += (noise - 0.5) * 0.015;

      gl_FragColor = vec4(col, 1.0);
    }
  `
)

extend({ CRTMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    cRTMaterial: THREE.ShaderMaterial & {
      time?: number
      resolution?: THREE.Vector2
      distortion?: number
      scanlineIntensity?: number
      flickerIntensity?: number
      vignetteStrength?: number
      chromaticAberration?: number
      brightness?: number
      tDiffuse?: THREE.Texture | null
      color?: THREE.Color
    }
  }
}

export { CRTMaterial }
export default CRTMaterial
