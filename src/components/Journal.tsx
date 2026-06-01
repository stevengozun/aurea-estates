import SmartImage from './SmartImage'
import { ArrowUpRight } from './icons'
import { ARTICLES } from '../data/content'

export default function Journal() {
  return (
    <section id="journal" className="bg-white py-s7">
      <div className="container-pad">
        <div className="reveal mb-s5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Journal</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Notes & insights</h2>
          </div>
          <a href="#journal" className="tlink text-md">All articles →</a>
        </div>

        <div className="grid gap-s3 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <a
              key={a.id}
              href="#journal"
              className="reveal group block"
              data-reveal-delay={i * 110}
            >
              <SmartImage src={a.image} alt={a.title} className="aspect-[3/2] rounded-md" />
              <div className="mt-s3 flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted">
                <span className="chip">{a.category}</span>
                <span>{a.date}</span>
              </div>
              <h3 className="mt-2 flex items-start justify-between gap-3 text-2xl font-500 text-ink">
                {a.title}
                <ArrowUpRight
                  width={20}
                  height={20}
                  className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-link"
                />
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
