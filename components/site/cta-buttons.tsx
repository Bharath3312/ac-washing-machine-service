import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { business, telHref, whatsappHref } from "@/lib/business"

type Props = {
  className?: string
  size?: "default" | "lg"
  message?: string
  showLabels?: boolean
}

const sizes = {
  default: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

export function CallButton({ className, size = "default", showLabels = true }: Props) {
  return (
    <Link
      href={telHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        sizes[size],
        className,
      )}
      aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      {showLabels && <span>Call Now</span>}
    </Link>
  )
}

export function WhatsAppButton({
  className,
  size = "default",
  message = "Hi, I'd like to book an AC / washing machine service.",
  showLabels = true,
}: Props) {
  return (
    <Link
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp font-semibold text-whatsapp-foreground shadow-sm transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
        sizes[size],
        className,
      )}
      aria-label={`Message ${business.name} on WhatsApp`}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {showLabels && <span>WhatsApp</span>}
    </Link>
  )
}

export function CtaPair({ size = "lg", message }: { size?: "default" | "lg"; message?: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <CallButton size={size} message={message} />
      <WhatsAppButton size={size} message={message} />
    </div>
  )
}
