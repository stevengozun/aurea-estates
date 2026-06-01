import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import HeroBackdrop from './components/HeroBackdrop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Works from './components/Works'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Journal from './components/Journal'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { updateScroll } from './lib/scroll'

function App() {
  const barRef = useRef<HTMLDivElement>(null)
  useReveal()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
    })

    const onScroll = ({ scroll }: { scroll: number }) => {
      updateScroll(scroll)
      if (barRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        barRef.current.style.transform = `scaleX(${max > 0 ? scroll / max : 0})`
      }
    }
    lenis.on('scroll', onScroll)

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    updateScroll(window.scrollY)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {/* scroll progress bar */}
      <div
        ref={barRef}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-link"
      />

      {/* Fixed video backdrop — real drone footage shows through the hero */}
      <div className="fixed inset-0 z-0 bg-raised">
        <HeroBackdrop />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        {/* Content sits on opaque surfaces that scroll over the video backdrop */}
        <div className="relative z-10 bg-white">
          <About />
          <Projects />
          <Services />
          <Works />
          <Process />
          <Reviews />
          <Journal />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
