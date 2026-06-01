import { useEffect, useState } from 'react'
import { Menu, Close } from './icons'

const LOCATIONS = ['New York', 'San Francisco', 'Miami']
const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-white/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-pad flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <a href="#top" className="text-xl font-600 tracking-[-0.02em] text-ink">
            Aurea<span className="text-link">.</span>
          </a>
          <ul className="hidden items-center gap-5 lg:flex">
            {LOCATIONS.map((l) => (
              <li key={l} className="text-xs uppercase tracking-[0.12em] text-muted">
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ink transition-colors hover:text-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden btn-dark md:inline-flex">
            Book now
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-pill border border-line text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-400 ease-expo-out md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-pad flex flex-col py-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 text-md text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-dark w-full">
              Book now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
