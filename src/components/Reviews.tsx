import { Star } from './icons'
import { REVIEWS } from '../data/content'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-raised py-s7">
      <div className="container-pad">
        <div className="reveal mb-s5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Client reviews</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Trusted by owners & developers</h2>
          </div>
          <div className="flex items-center gap-2 text-ink">
            <div className="flex text-link">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={18} height={18} />
              ))}
            </div>
            <span className="text-md font-500">4.9/5.0</span>
          </div>
        </div>

        <div className="grid gap-s3 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.id}
              className="reveal card flex h-full flex-col justify-between p-s4"
              data-reveal-delay={i * 110}
            >
              <div>
                <div className="mb-3 flex text-link">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} width={15} height={15} />
                  ))}
                </div>
                <blockquote className="text-lg text-ink">“{r.body}”</blockquote>
              </div>
              <figcaption className="mt-s4 flex items-center gap-3 border-t border-line pt-s3">
                <span className="grid h-10 w-10 place-items-center rounded-pill bg-black text-sm font-500 text-white">
                  {r.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span>
                  <span className="block text-sm font-500 text-ink">{r.name}</span>
                  <span className="block text-xs text-muted">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
