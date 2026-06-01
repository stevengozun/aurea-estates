import { useEffect, useRef } from 'react'
import { VALUES } from '../data/content'
import { scrollState, HERO_STAGE_VH } from '../lib/scroll'

/**
 * Hero overlay. The section is tall (HERO_STAGE_VH × viewport) so the user
 * scrolls "through" the 3D camera choreography around the house model.
 * Copy is driven by scroll progress via a rAF loop (no React re-renders).
 */
export default function Hero() {
  const introRef = useRef<HTMLDivElement>(null)
  const outroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      const p = scrollState.heroProgress
      if (introRef.current) {
        const a = 1 - smooth(p, 0.05, 0.34)
        introRef.current.style.opacity = String(a)
        introRef.current.style.transform = `translateY(${(1 - a) * -32}px)`
      }
      if (outroRef.current) {
        const a = smooth(p, 0.62, 0.92)
        outroRef.current.style.opacity = String(a)
        outroRef.current.style.transform = `translateY(${(1 - a) * 32}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="top" className="relative" style={{ height: `${HERO_STAGE_VH * 100}vh` }}>
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden">
        {/* subtle top + bottom fade for legibility over the 3D scene */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/70 to-transparent" />

        {/* Intro copy */}
        <div ref={introRef} className="container-pad relative z-10 pt-24 md:pt-28">
          <p className="eyebrow mb-4">Real Estate · Architectural Design</p>
          <h1 className="display text-[clamp(2.75rem,10vw,10rem)]">Aurea</h1>
        </div>

        {/* spacer where the 3D house shows through */}
        <div className="flex-1" />

        {/* Outro / closing line (fades in as the camera lifts) */}
        <div
          ref={outroRef}
          className="container-pad pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-center opacity-0"
        >
          <h2 className="display mx-auto max-w-3xl text-[clamp(1.6rem,4vw,3rem)]">
            Calm, timeless spaces — designed and delivered with precision.
          </h2>
        </div>

        {/* Bottom: tagline + values */}
        <div className="container-pad relative z-10 pb-12">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-md text-muted md:text-lg">
              We design and deliver innovative residences with structured layouts,
              detailed planning, and a guided process — bringing clarity, efficiency,
              and precision to every home.
            </p>
            <div className="flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <span key={v} className="chip">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function smooth(x: number, a: number, b: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
