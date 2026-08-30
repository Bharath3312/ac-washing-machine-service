import Link from "next/link"
import { Snowflake, Phone, Mail, MapPin, Clock } from "lucide-react"
import { business, telHref, fullAddress } from "@/lib/business"
import { navLinks } from "@/lib/nav"
import { acServices, washingMachineServices } from "@/lib/services"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Snowflake className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-base font-extrabold tracking-tight text-foreground">
                {business.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {business.description}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold text-foreground">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[...acServices, ...washingMachineServices].map((s) => {
                const base = acServices.includes(s) ? "/ac-services" : "/washing-machine-services"
                return (
                  <li key={s.slug}>
                    <Link
                      href={`${base}#${s.slug}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {s.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold text-foreground">Company</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold text-foreground">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <Link href={telHref} className="transition-colors hover:text-primary">
                  {business.phoneDisplay}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <Link href={`mailto:${business.email}`} className="break-all transition-colors hover:text-primary">
                  {business.email}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{business.hours.display}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p>Serving Madurai &amp; surrounding areas, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  )
}
