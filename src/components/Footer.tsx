import { Facebook, Instagram, XLogo, LinkedIn } from './icons'

const QUICK = ['About', 'Services', 'Projects', 'Works', 'FAQ', 'Contact']
const UTILITY = ['Style Guide', 'License', 'Changelog', 'Privacy', 'Terms', 'Accessibility']
const SOCIALS = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Instagram', Icon: Instagram },
  { label: 'X', Icon: XLogo },
  { label: 'LinkedIn', Icon: LinkedIn },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-pad py-s6">
        <div className="grid gap-s5 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="text-2xl font-600 tracking-[-0.02em]">
              Aurea<span className="text-link">.</span>
            </a>
            <p className="mt-4 max-w-xs text-md text-white/60">
              Residences in prime locations, designed and delivered with precision.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-pill border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick links" links={QUICK} />
          <FooterCol title="Resources" links={UTILITY} />

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-white/45">Contact</h4>
            <ul className="space-y-3 text-md text-white/70">
              <li><a href="tel:+13105550199" className="hover:text-white">+1 (310) 555-0199</a></li>
              <li><a href="mailto:hello@aurea.studio" className="hover:text-white">hello@aurea.studio</a></li>
              <li>Los Angeles, California</li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-s6 select-none border-t border-white/15 pt-s5">
          <p className="display text-white/10 text-[clamp(4rem,22vw,20rem)] leading-none">Aurea</p>
        </div>

        <div className="mt-s4 flex flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Aurea Studio. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-white/45">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-md text-white/70 transition-colors hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
