import { business } from "@/lib/business"
import { CtaPair } from "./cta-buttons"

export function CtaBand({
  title = "Need a technician today?",
  subtitle,
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="brand-gradient text-primary-foreground shadow-inner">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <div className="space-y-3">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-primary-foreground/85">
            {subtitle ??
              `Call or WhatsApp ${business.shortName} for same-day AC and washing machine service anywhere in Madurai.`}
          </p>
        </div>
        <div className="[&_a]:bg-background [&_a]:text-foreground [&_a:first-child]:bg-background [&_a:last-child]:bg-whatsapp [&_a:last-child]:text-whatsapp-foreground">
          <CtaPair />
        </div>
        <p className="text-sm text-primary-foreground/80">{business.hours.display}</p>
      </div>
    </section>
  )
}
