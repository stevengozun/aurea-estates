# Aurea — Real Estate & Architectural Design

A clean, editorial real-estate / architecture studio site with a real-footage 3D house hero. Visual language adapted from the Archivanta template.

## Highlights

- **Real-footage hero** — aerial drone footage of an actual modern house that orbits in 3D (autoplay + loop), with scroll-driven zoom/parallax and animated headline copy. Falls back to a still photo if the video can't play.
- **Editorial design system** — Instrument Sans, black-on-white with a blue (`#0000ee`) accent, light-gray raised surfaces, pill buttons, large tight display headings.
- **Smooth scrolling** — Lenis-driven, with a scroll progress bar and IntersectionObserver reveal animations.
- **Sections** — Hero, About (animated stat counters), Projects, Services, Featured Works, How We Work, Reviews, Journal, FAQ, Contact form, Footer.
- **Accessible (WCAG 2.2 AA target)** — visible `:focus-visible` rings, keyboard-operable FAQ accordion, semantic form labels, `prefers-reduced-motion` honored (video paused), descriptive alt text, lazy-loaded imagery.

## Run it

```bash
npm install      # already done
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Tech

Vite · React + TypeScript · Lenis · Tailwind CSS

## Structure

```
src/
  components/ Nav, Hero, HeroBackdrop (video), About, Projects, Services,
              Works, Process, Reviews, Journal, FAQ, CTA, Footer, Counter,
              SmartImage, icons
  data/       content.ts — projects, services, works, reviews, articles, FAQ
  hooks/      scroll-reveal observer
  lib/        scroll-progress store shared with the hero backdrop
public/
  videos/     house.mp4 — hero drone footage
```

## Notes

- Hero video: `public/videos/house.mp4` (drone footage, Pexels — free license).
  It's 4K (~24 MB); for production, transcode to a ~1080p/2–4 MB H.264 + WebM
  pair for faster first load. Swap the file or `VIDEO_SRC` in
  `src/components/HeroBackdrop.tsx` to change it.
- Section imagery uses Unsplash URLs with a gradient fallback — edit the
  `image` fields in `src/data/content.ts` for your own photography.
