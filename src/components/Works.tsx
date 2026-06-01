import SmartImage from './SmartImage'
import { WORKS } from '../data/content'

export default function Works() {
  return (
    <section id="works" className="bg-black py-s7 text-white">
      <div className="container-pad">
        <div className="reveal mb-s5">
          <p className="eyebrow mb-4 text-white/55">Featured works</p>
          <h2 className="display text-white text-[clamp(2rem,4.5vw,3.5rem)]">
            Signature spaces
          </h2>
        </div>

        <div className="grid gap-s3 md:grid-cols-3">
          {WORKS.map((w, i) => (
            <article key={w.id} className="reveal group" data-reveal-delay={i * 110}>
              <SmartImage
                src={w.image}
                alt={w.name}
                className="aspect-[4/5] rounded-md"
              />
              <div className="mt-s3 flex items-center justify-between">
                <h3 className="text-2xl font-500">{w.name}</h3>
                <span className="rounded-pill border border-white/20 px-3 py-1 text-xs text-white/70">
                  {w.area}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
