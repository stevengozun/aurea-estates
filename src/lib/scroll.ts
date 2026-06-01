// Lightweight singleton store so the smooth-scroll handler can feed the
// React Three Fiber render loop without triggering React re-renders.

export const scrollState = {
  /** Normalised progress through the hero "stage" (0 → 1). */
  heroProgress: 0,
  /** Raw scroll position in px. */
  scrollY: 0,
  /** Viewport height in px. */
  viewportH: typeof window !== 'undefined' ? window.innerHeight : 800,
}

/**
 * The hero 3D stage spans the first `HERO_STAGE_VH` viewport-heights of the
 * page. Camera + model choreography is mapped across this range.
 */
export const HERO_STAGE_VH = 2.4

export function updateScroll(scrollY: number) {
  scrollState.scrollY = scrollY
  scrollState.viewportH = window.innerHeight
  const stagePx = scrollState.viewportH * HERO_STAGE_VH
  scrollState.heroProgress = Math.min(1, Math.max(0, scrollY / stagePx))
}
