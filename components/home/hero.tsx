import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import { business } from "@/lib/business"
import { CtaPair } from "@/components/site/cta-buttons"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Serving all of Madurai, Tamil Nadu
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl">
            AC &amp; Washing Machine Service in Madurai
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Fast, affordable and reliable repair, service and installation at your doorstep.
            Trained technicians, transparent pricing and same-day service across the city.
          </p>

          <ul className="grid gap-2 sm:grid-cols-2">
            {business.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <CtaPair />
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/hero-technician.png"
              alt="Professional technician servicing a split air conditioner at a home in Madurai"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-lg border border-border bg-background/95 p-4 shadow-md backdrop-blur sm:left-6 sm:right-auto sm:w-auto sm:gap-6">
            <div>
              <p className="font-heading text-2xl font-extrabold text-primary">Same-day</p>
              <p className="text-xs text-muted-foreground">doorstep service</p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <p className="font-heading text-2xl font-extrabold text-primary">All brands</p>
              <p className="text-xs text-muted-foreground">serviced &amp; repaired</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
