import { Check } from "lucide-react"
import type { Service } from "@/lib/services"
import { CtaPair } from "@/components/site/cta-buttons"

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <h2 className="font-heading text-xl font-bold text-foreground">{s.name}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.description}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-border bg-secondary/50 p-8 text-center">
        <p className="font-heading text-lg font-bold text-foreground text-balance">
          Book your service in under a minute
        </p>
        <CtaPair />
      </div>
    </div>
  )
}
