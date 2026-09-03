"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Snowflake, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { business, telHref } from "@/lib/business"
import { navLinks } from "@/lib/nav"
import { CallButton, WhatsAppButton } from "./cta-buttons"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${business.name} home`}>
          <span className="brand-gradient flex size-10 items-center justify-center rounded-xl text-primary-foreground shadow-sm ring-4 ring-primary/10">
            <Snowflake className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-extrabold tracking-tight text-foreground">
              {business.shortName}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">AC &amp; Appliance Service</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-muted-foreground",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <WhatsAppButton />
          <CallButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={telHref}
            className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2 px-1 pb-2">
              <CallButton className="flex-1" />
              <WhatsAppButton className="flex-1" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
