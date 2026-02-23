'use client';

/**
 * useMotionPath
 *
 * Technique 6 — GSAP MotionPathPlugin: animate a DOM element along an SVG path.
 *
 * MotionPathPlugin is FREE in gsap@3.12+.
 *
 * The element (icon, dot, particle) must be positioned absolutely inside the
 * same coordinate space as the SVG. The `path` can be either an SVG element
 * reference or an SVG path string ("M 0 0 C 100 0, 200 100, 300 100").
 *
 * Usage:
 *   const particleRef = useRef<HTMLDivElement>(null);
 *   useMotionPath(particleRef, '#my-svg-path', { duration: 5, loop: true });
 *
 * Core GSAP pattern:
 *   gsap.registerPlugin(MotionPathPlugin);
 *   gsap.to(el, {
 *     motionPath: {
 *       path: '#my-svg-path',
 *       align: '#my-svg-path',
 *       alignOrigin: [0.5, 0.5],
 *       autoRotate: true,        // element rotates to follow path tangent
 *       start: 0,                // 0–1 position to start at
 *       end: 1,                  // 0–1 position to end at
 *     },
 *     duration: 5,
 *     ease: 'power1.inOut',
 *     repeat: -1,
 *   });
 */

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

interface MotionPathOptions {
  /** Duration of one traversal in seconds (default: 4) */
  duration?: number;
  /** Whether to loop (default: true) */
  loop?: boolean;
  /** Whether element rotates to follow path tangent (default: false) */
  autoRotate?: boolean;
  /** GSAP ease (default: 'power1.inOut') */
  ease?: string;
  /** Start position 0–1 (default: 0) */
  start?: number;
  /** End position 0–1 (default: 1) */
  end?: number;
  /** Delay before starting (default: 0) */
  delay?: number;
  /** Alignment origin [x, y] normalised 0–1 (default: [0.5, 0.5]) */
  alignOrigin?: [number, number];
}

export function useMotionPath(
  ref: RefObject<SVGElement | HTMLElement | null>,
  /** CSS selector string for the SVG <path>, or the SVG path `d` attribute string */
  pathSelector: string,
  {
    duration = 4,
    loop = true,
    autoRotate = false,
    ease = 'power1.inOut',
    start = 0,
    end = 1,
    delay = 0,
    alignOrigin = [0.5, 0.5],
  }: MotionPathOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      motionPath: {
        path: pathSelector,
        align: pathSelector,
        alignOrigin,
        autoRotate,
        start,
        end,
      },
      duration,
      ease,
      repeat: loop ? -1 : 0,
      delay,
    });

    return () => { tween.kill(); };
  }, [ref, pathSelector, duration, loop, autoRotate, ease, start, end, delay, alignOrigin]);
}
