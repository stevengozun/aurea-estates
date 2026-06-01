import { useState } from 'react'
import { Plus, Minus } from './icons'
import { FAQS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-raised py-s7">
      <div className="container-pad grid gap-s5 lg:grid-cols-[1fr_2fr] lg:gap-s6">
        <div className="reveal">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Questions, answered</h2>
          <p className="mt-4 text-md text-muted">
            Can't find what you're looking for?{' '}
            <a href="#contact" className="tlink">Get in touch</a>.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-md border border-line bg-white" data-reveal-delay={120}>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={i !== 0 ? 'border-t border-line' : ''}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 p-s3 text-left text-lg font-500 text-ink"
                  >
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-pill border border-line text-ink">
                      {isOpen ? <Minus width={16} height={16} /> : <Plus width={16} height={16} />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ease-expo-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-s3 pb-s3 text-md text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
