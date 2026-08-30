import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { business, telHref, whatsappHref, fullAddress, mapsDirectionsHref } from "@/lib/business"

export const metadata: Metadata = {
  title: "Contact & Book a Service",
  description: `Book an AC or washing machine service in Madurai. Call ${business.phoneDisplay}, message us on WhatsApp, or send your booking details online.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: business.phoneDisplay, href: telHref },
    { icon: MessageCircle, label: "WhatsApp", value: business.phoneDisplay, href: whatsappHref() },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: "Address", value: fullAddress, href: mapsDirectionsHref },
    { icon: Clock, label: "Hours", value: business.hours.display },
  ]

  return (
    <>
      <PageHero
        title="Contact & Book a Service"
        subtitle="Reach out any way you like — call, WhatsApp, or fill in the quick booking form and we will confirm your slot."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Get in touch</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We are available {business.hours.display.toLowerCase()}. For the fastest response, call or
              message us on WhatsApp.
            </p>

            <ul className="mt-6 space-y-3">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">{d.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <Link
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-xl font-bold text-foreground">Quick booking</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fill in a few details and send them straight to us on WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            title={`Map showing ${business.address.city} service area`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </>
  )
}
