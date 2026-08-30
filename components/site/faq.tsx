import { FaqJsonLd } from "./json-ld"

export function Faq({
  faqs,
  heading = "Frequently asked questions",
  withSchema = true,
}: {
  faqs: { q: string; a: string }[]
  heading?: string
  withSchema?: boolean
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {withSchema && <FaqJsonLd faqs={faqs} />}
      <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
        {heading}
      </h2>
      <dl className="mt-8 divide-y divide-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <dt className="font-heading text-base font-bold text-foreground">{f.q}</dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
