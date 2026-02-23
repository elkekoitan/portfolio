# Hamza Turhan - Portfolio

Dune-themed portfolio site built with **Next.js 16**, **React 19**, **GSAP**, and **Tailwind CSS**.

Live: [hmztrhn.vercel.app](https://hmztrhn.vercel.app)

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 3, Neomorphic Design System |
| Animations | GSAP 3 (ScrollTrigger, Canvas Particles), Framer Motion |
| Fonts | Cinzel (headings), Inter (body) |
| Deploy | Vercel |
| i18n | TR / EN / RU |

## Features

- **Dune Pastel Neomorphic UI** - warm desert tones with soft shadow depth
- **GSAP Canvas Particles** - sand-like particles with wind drift effect
- **Text Scramble Animation** - hero text reveal with scientific character set
- **ScrollReveal** - intersection-based section animations
- **30+ Projects** - full-stack, AI/ML, trading, mobile, automation
- **PM Insights** - 25 project management Q&A entries with real project references
- **40+ Skills** - categorized with progress bars
- **3 Languages** - Turkish, English, Russian
- **Responsive** - mobile-first design
- **SEO** - dynamic sitemap, robots.txt, hreflang alternates

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Requires Node.js 18+.

## Project Structure

```
src/
  app/
    [locale]/           # i18n routes (/tr, /en, /ru)
      page.tsx           # main page
      projects/[slug]/   # project detail pages
    layout.tsx           # root layout (Cinzel + Inter fonts)
    globals.css          # Dune neomorphic design system
  components/gsap/
    HeroParticles.tsx    # canvas particle system
    TextScramble.tsx     # text reveal animation
    ScrollReveal.tsx     # scroll-triggered reveals
    MagneticButton.tsx   # magnetic hover effect
  data/
    projects.ts          # 30+ project definitions
    skills.ts            # 40+ skill entries
    interview-answers.ts # 25 PM Q&A entries
  i18n/
    dictionaries.ts      # UI strings (TR/EN/RU)
    projects.ts          # project translations
```

## Deployment

Vercel auto-deploys on push. `vercel.json` includes security headers and cache config.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| dune-body | `#1a1008` | Background |
| dune-surface | `#2a1f12` | Section alt background |
| dune-card | `#342818` | Card background |
| dune-amber | `#e8c07a` | Primary accent |
| dune-turquoise | `#6ee7d0` | Secondary accent |
| dune-spice | `#e07850` | Warm highlight |
| dune-sand | `#ddd0b0` | Body text |
| dune-bone | `#f0e8d8` | Heading text |
| dune-lavender | `#c4b5e0` | Tertiary accent |
| dune-rust | `#c07848` | Badge accent |
| dune-rose | `#e8a0a0` | Soft accent |
