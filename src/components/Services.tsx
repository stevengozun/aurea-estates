import SmartImage from './SmartImage'
import { ArrowRight } from './icons'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="bg-white py-s7">
      <div className="container-pad">
        <div className="reveal mb-s5">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">Architecture services</h2>
        </div>

        <div className="overflow-hidden rounded-md border border-line">
          {SERVICES.map((s, i) => (
            <a
              key={s.id}
              href="#contact"
              className={`reveal group grid items-center gap-s3 p-s3 transition-colors hover:bg-raised md:grid-cols-[80px_1fr_2fr_auto] ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
              data-reveal-delay={(i % 3) * 80}
            >
              <span className="text-sm tabular-nums text-muted">0{i + 1}</span>
              <h3 className="text-2xl font-500 text-ink">{s.title}</h3>
              <p className="text-md text-muted">{s.body}</p>
              <div className="flex items-center justify-between gap-4">
                <SmartImage
                  src={s.image}
                  alt={s.title}
                  className="hidden h-16 w-24 rounded-sm md:block"
                />
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill border border-line text-ink transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <ArrowRight width={16} height={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
