import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { CtaBand } from "@/components/site/cta-band"
import { serviceAreas } from "@/lib/services"
import { business, mapsDirectionsHref } from "@/lib/business"

export const metadata: Metadata = {
  title: "Service Areas in Madurai",
  description:
    "We provide AC and washing machine repair, service and installation across Madurai, covering Anna Nagar, K.K. Nagar, Goripalayam, Tallakulam and many more neighbourhoods.",
  alternates: { canonical: "/service-areas" },
}

export default function ServiceAreasPage() {
  const areas = Array.from(new Set(serviceAreas)).sort((a, b) => a.localeCompare(b))

  return (
    <>
      <PageHero
        title="Service Areas in Madurai"
        subtitle="Our technicians provide doorstep AC and washing machine service right across Madurai and its surrounding suburbs."
        crumbs={[{ name: "Service Areas", path: "/service-areas" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-foreground">{area}</p>
                <p className="text-xs text-muted-foreground">AC &amp; washing machine service</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-6 text-center sm:p-8">
          <h2 className="font-heading text-lg font-bold text-foreground text-balance">
            Do not see your area listed?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-pretty text-muted-foreground">
            We are expanding fast across Madurai. Give us a call — chances are we can still reach you the
            same day. Our base is in {business.address.area}, {business.address.city}.
          </p>
          <a
            href={mapsDirectionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Get directions on Google Maps
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
