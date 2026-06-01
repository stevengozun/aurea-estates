import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="bg-white py-s7">
      <div className="container-pad">
        <div className="reveal mb-s5 grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">A guided, five-step process</h2>
          </div>
          <p className="text-md text-muted">
            A clear path from first conversation to handover — so you always know
            where the project stands and what comes next.
          </p>
        </div>

        <div className="hairline">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="reveal grid gap-s2 border-b border-line py-s4 md:grid-cols-[120px_1fr_2fr] md:items-baseline"
              data-reveal-delay={(i % 3) * 90}
            >
              <span className="display text-4xl text-link">{p.step}</span>
              <h3 className="text-2xl font-500 text-ink">{p.title}</h3>
              <p className="text-md text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
