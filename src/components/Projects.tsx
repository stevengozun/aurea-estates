import SmartImage from './SmartImage'
import { ArrowUpRight, Pin } from './icons'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="bg-raised py-s7">
      <div className="container-pad">
        <div className="reveal mb-s5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Selected Projects</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Designed perfection</h2>
          </div>
          <a href="#works" className="tlink text-md">View all works →</a>
        </div>

        <div className="grid gap-s3 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="reveal group card"
              data-reveal-delay={(i % 2) * 120}
            >
              <SmartImage src={p.image} alt={`${p.name}, ${p.location}`} className="aspect-[16/11]" />
              <div className="flex items-center justify-between p-s3">
                <div>
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-muted">
                    <Pin width={14} height={14} /> {p.location}
                  </p>
                  <h3 className="mt-1 text-2xl font-500 text-ink">{p.name}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill border border-line text-ink transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight width={18} height={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
