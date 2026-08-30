import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { business, telHref, whatsappHref } from "@/lib/business"

/**
 * Fixed call/WhatsApp bar shown only on small screens for easy conversion.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <Link
        href={telHref}
        className="flex items-center justify-center gap-2 py-3.5 font-semibold text-primary"
        aria-label={`Call ${business.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Call
      </Link>
      <Link
        href={whatsappHref("Hi, I'd like to book a service.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-border py-3.5 font-semibold text-whatsapp"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </Link>
    </div>
  )
}
