import { useState } from 'react'
import SmartImage from './SmartImage'
import { ArrowRight } from './icons'

export default function CTA() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-white py-s7">
      <div className="container-pad">
        {/* Banner */}
        <div className="reveal grid items-stretch gap-s3 md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-between rounded-md bg-black p-s4 text-white md:p-s6">
            <p className="eyebrow text-white/55">Let's begin</p>
            <h2 className="display mt-6 text-white text-[clamp(2rem,4.5vw,3.6rem)]">
              Let's build calm, timeless spaces together.
            </h2>
            <p className="mt-5 max-w-md text-md text-white/65">
              Tell us about your site and ambitions. A dedicated advisor will
              respond within one business day.
            </p>
          </div>
          <SmartImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80"
            alt="Aurea residence"
            className="hidden rounded-md md:block"
          />
        </div>

        {/* Form */}
        <form
          className="reveal mt-s4 rounded-md border border-line p-s4 md:p-s5"
          data-reveal-delay={120}
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="grid gap-s3 md:grid-cols-2">
            <Field label="Full name" id="name" required>
              <input id="name" name="name" type="text" required autoComplete="name" className={input} placeholder="Jane Doe" />
            </Field>
            <Field label="Email" id="email" required>
              <input id="email" name="email" type="email" required autoComplete="email" className={input} placeholder="jane@email.com" />
            </Field>
            <Field label="Phone" id="phone">
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} placeholder="+1 (000) 000-0000" />
            </Field>
            <Field label="Project type" id="ptype">
              <select id="ptype" name="ptype" className={input} defaultValue="">
                <option value="" disabled>Select type</option>
                <option>New residence</option>
                <option>Renovation</option>
                <option>Commercial</option>
                <option>Other</option>
              </select>
            </Field>
          </div>
          <div className="mt-s3">
            <Field label="Tell us about your project" id="message">
              <textarea id="message" name="message" rows={4} className={input} placeholder="Location, scope, timeline…" />
            </Field>
          </div>

          <div className="mt-s4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted" aria-live="polite">
              {sent ? 'Thank you — we will be in touch within one business day.' : 'Your details are kept strictly confidential.'}
            </p>
            <button type="submit" className="btn-blue" disabled={sent}>
              {sent ? 'Request received' : 'Book now'}
              {!sent && <ArrowRight width={16} height={16} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

const input =
  'w-full rounded-sm border border-line bg-white px-4 py-3 text-md text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-link'

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string
  id: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-muted">
        {label}
        {required && <span className="text-link"> *</span>}
      </span>
      {children}
    </label>
  )
}
