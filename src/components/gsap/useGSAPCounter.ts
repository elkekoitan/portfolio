'use client';

/**
 * useGSAPCounter
 *
 * Technique 9 — GSAP counting up numbers.
 *
 * Animates a plain JS object from 0 to `target`, updating a ref's textContent
 * on every GSAP tick. Triggered automatically via ScrollTrigger once the ref
 * element enters the viewport.
 *
 * Usage:
 *   const ref = useRef<HTMLSpanElement>(null);
 *   useGSAPCounter(ref, 94.5, { suffix: '%', decimals: 1, duration: 2 });
 *
 * Pattern:
 *   const obj = { val: 0 };
 *   gsap.to(obj, {
 *     val: target,
 *     onUpdate() { el.textContent = prefix + obj.val.toFixed(decimals) + suffix; },
 *     ...tweenVars
 *   });
 */

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterOptions {
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  ease?: string;
  /** ScrollTrigger start position, e.g. 'top 90%' */
  scrollStart?: string;
}

export function useGSAPCounter(
  ref: RefObject<HTMLElement | null>,
  target: number,
  {
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 2,
    ease = 'power2.out',
    scrollStart = 'top 90%',
  }: CounterOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease,
      onUpdate() {
        el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: scrollStart,
        toggleActions: 'play none none none',
      },
    });

    return () => { tween.kill(); };
  }, [ref, target, prefix, suffix, decimals, duration, ease, scrollStart]);
}
