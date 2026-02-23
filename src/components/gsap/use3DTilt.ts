'use client';

/**
 * use3DTilt
 *
 * Technique 8 — GSAP + mouse tracking for perspective tilt on hover.
 *
 * Attaches mousemove / mouseleave listeners to a ref element, computing
 * normalised offsets from the element's centre, then driving GSAP
 * rotateX / rotateY tweens for a natural card-flip feel.
 *
 * Usage:
 *   const cardRef = useRef<HTMLDivElement>(null);
 *   use3DTilt(cardRef, { maxAngle: 12, perspective: 800 });
 *   <div ref={cardRef} style={{ transformStyle: 'preserve-3d' }}>...</div>
 *
 * Core GSAP calls:
 *   gsap.to(el, { rotateX, rotateY, transformPerspective, duration: 0.25, ease: 'power2.out' })
 *   gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
 */

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

interface TiltOptions {
  /** Maximum tilt angle in degrees (default 12) */
  maxAngle?: number;
  /** CSS perspective value in px (default 700) */
  perspective?: number;
  /** Hover scale factor (default 1.04) */
  scale?: number;
}

export function use3DTilt(
  ref: RefObject<HTMLElement | null>,
  { maxAngle = 12, perspective = 700, scale = 1.04 }: TiltOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Normalise: -1 to 1 from centre
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      gsap.to(el, {
        rotateX: -ny * maxAngle,  // tilt up when cursor above centre
        rotateY: nx * maxAngle,   // tilt right when cursor right of centre
        scale,
        transformPerspective: perspective,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      // Reset on unmount
      gsap.set(el, { rotateX: 0, rotateY: 0, scale: 1 });
    };
  }, [ref, maxAngle, perspective, scale]);
}
