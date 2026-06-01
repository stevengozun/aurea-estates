import { useEffect, useRef, useState } from 'react'
import { scrollState } from '../lib/scroll'

const VIDEO_SRC = '/videos/house.mp4'
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1900&q=80'

/**
 * Fixed full-screen hero backdrop: real drone footage of a house that
 * continuously orbits (autoplay + loop) so the house "moves in 3D".
 * Scroll adds a subtle zoom/parallax across the hero stage.
 * Falls back to a still photo if the video can't play.
 */
export default function HeroBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const v = videoRef.current

    if (v && !reduce) {
      const tryPlay = () => v.play().catch(() => {})
      tryPlay()
      // Fallback: some browsers block autoplay until first interaction.
      const kick = () => {
        tryPlay()
        window.removeEventListener('pointerdown', kick)
        window.removeEventListener('scroll', kick)
      }
      window.addEventListener('pointerdown', kick, { passive: true })
      window.addEventListener('scroll', kick, { passive: true })
    } else if (v && reduce) {
      v.pause()
    }

    let raf = 0
    const tick = () => {
      const p = scrollState.heroProgress // 0 → 1 across the hero
      if (wrapRef.current) {
        const scale = 1.05 + p * 0.16
        const y = p * 8 // subtle drift in %
        wrapRef.current.style.transform = `scale(${scale}) translateY(${y}%)`
        // ease the backdrop away as the hero ends
        wrapRef.current.style.opacity = String(1 - Math.max(0, (p - 0.85) / 0.15) * 0.35)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-raised">
      <div ref={wrapRef} className="absolute inset-0 will-change-transform">
        {!failed ? (
          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              ready ? 'opacity-100' : 'opacity-0'
            }`}
            src={VIDEO_SRC}
            poster={FALLBACK_IMG}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => {
              setReady(true)
              e.currentTarget.play().catch(() => {})
            }}
            onError={() => setFailed(true)}
            aria-label="Aerial drone footage orbiting a modern house"
          />
        ) : (
          <img
            src={FALLBACK_IMG}
            alt="Modern luxury house exterior"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* tint to keep the editorial palette cohesive */}
      <div className="pointer-events-none absolute inset-0 bg-white/10" />
    </div>
  )
}
