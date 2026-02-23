'use client';

/**
 * useSplitTextReveal
 *
 * Technique 7 — GSAP SplitText character-by-character / word-by-word reveal.
 *
 * SplitText (FREE since gsap@3.12) splits a DOM element's text into individual
 * <div> wrappers per char / word / line, then GSAP animates them in a stagger.
 *
 * Usage:
 *   const ref = useRef<HTMLHeadingElement>(null);
 *   useSplitTextReveal(ref, { type: 'chars', stagger: 0.03, fromY: 40 });
 *
 * Core GSAP pattern:
 *   const split = new SplitText(el, { type: 'chars,words' });
 *   gsap.from(split.chars, {
 *     opacity: 0,
 *     y: 40,
 *     rotateX: -90,
 *     stagger: 0.03,
 *     ease: 'back.out(2)',
 *     scrollTrigger: { trigger: el, start: 'top 85%' },
 *   });
 *
 * Always call split.revert() on cleanup to restore original DOM.
 */

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

type SplitType = 'chars' | 'words' | 'lines' | 'chars,words' | 'chars,words,lines';

interface SplitRevealOptions {
  /** What to split into (default: 'chars') */
  type?: SplitType;
  /** Y offset to animate from (default: 30) */
  fromY?: number;
  /** X rotation from (default: -90) */
  fromRotateX?: number;
  /** Stagger seconds between units (default: 0.03) */
  stagger?: number;
  /** Tween duration per unit (default: 0.5) */
  duration?: number;
  /** GSAP ease (default: 'back.out(1.8)') */
  ease?: string;
  /** ScrollTrigger start (default: 'top 85%') */
  scrollStart?: string;
  /** Whether to animate words instead of chars when type includes both */
  animateWords?: boolean;
  /** Optional delay before starting */
  delay?: number;
}

export function useSplitTextReveal(
  ref: RefObject<HTMLElement | null>,
  {
    type = 'chars',
    fromY = 30,
    fromRotateX = -90,
    stagger = 0.03,
    duration = 0.5,
    ease = 'back.out(1.8)',
    scrollStart = 'top 85%',
    animateWords = false,
    delay = 0,
  }: SplitRevealOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SplitText wraps each unit in a <div style="display:inline-block">
    const split = new SplitText(el, { type });

    // Choose which collection to animate
    const targets = animateWords ? split.words : split.chars;

    gsap.set(targets, { opacity: 0, y: fromY, rotateX: fromRotateX, transformPerspective: 400 });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: {
        trigger: el,
        start: scrollStart,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      split.revert();
    };
  }, [ref, type, fromY, fromRotateX, stagger, duration, ease, scrollStart, animateWords, delay]);
}
