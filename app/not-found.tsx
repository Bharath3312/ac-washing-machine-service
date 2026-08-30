import Link from "next/link"
import type { Metadata } from "next"
import { Home, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business, telHref } from "@/lib/business"

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-heading text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-foreground text-balance">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
        The page you&apos;re looking for may have moved. Head back home or call us directly for AC and washing machine
        service anywhere in {business.address.city}.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={telHref}>
            <Phone className="size-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </Button>
      </div>
    </div>
  )
}
