'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger,
    TextPlugin,
    DrawSVGPlugin,
    MotionPathPlugin,
    ScrambleTextPlugin,
    SplitText,
    CustomEase
  )

}

export {
  gsap,
  ScrollTrigger,
  TextPlugin,
  DrawSVGPlugin,
  MotionPathPlugin,
  ScrambleTextPlugin,
  SplitText,
  CustomEase
}
