import Counter from './Counter'
import SmartImage from './SmartImage'
import { STATS } from '../data/content'

export default function About() {
  return (
    <section id="about" className="bg-white py-s7">
      <div className="container-pad">
        <div className="grid gap-s5 lg:grid-cols-2 lg:gap-s6">
          <div className="reveal">
            <p className="eyebrow mb-4">About Aurea</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              Experience innovative architecture, grounded in real estate.
            </h2>
          </div>
          <div className="reveal" data-reveal-delay={120}>
            <p className="text-lg text-muted">
              Aurea blends design with function. We shape residences and spaces
              around how people actually live — pairing structured planning with
              an obsessive attention to detail, so the finished home feels
              inevitable.
            </p>
            <p className="mt-4 text-md text-muted">
              From first sketch to final handover, our process stays clear,
              measured, and precise.
            </p>
            <a href="#projects" className="tlink mt-6 inline-block text-md">
              See our projects →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-s6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3" data-reveal-delay={180}>
          {STATS.map((s) => (
            <div key={s.label} className="bg-white p-s4">
              <div className="display text-[clamp(2.5rem,6vw,4rem)]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-s4 grid grid-cols-2 gap-s2 md:grid-cols-3">
          {[
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
          ].map((src, i) => (
            <SmartImage
              key={src}
              src={src}
              alt="Aurea interior"
              className={`reveal aspect-[4/3] rounded-md ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
