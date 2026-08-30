import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { serviceAreas } from "@/lib/services"

export function AreasTeaser() {
  const areas = Array.from(new Set(serviceAreas))
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
            Areas we serve in Madurai
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Our technicians cover neighbourhoods right across the city and nearby suburbs.
          </p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
            >
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            See all service areas
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
