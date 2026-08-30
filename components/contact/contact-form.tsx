"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { whatsappHref } from "@/lib/business"
import { allServices } from "@/lib/services"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState(allServices[0]?.name ?? "")
  const [area, setArea] = useState("")
  const [details, setDetails] = useState("")

  const message = [
    "Hi, I'd like to book a service.",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service || "-"}`,
    `Area: ${area || "-"}`,
    details ? `Details: ${details}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  const inputClasses =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        window.open(whatsappHref(message), "_blank", "noopener,noreferrer")
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Your name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="e.g. Priya"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
            placeholder="e.g. 98765 43210"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service needed
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClasses}
          >
            {allServices.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="area" className="text-sm font-medium text-foreground">
            Your area in Madurai
          </label>
          <input
            id="area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className={inputClasses}
            placeholder="e.g. Anna Nagar"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="details" className="text-sm font-medium text-foreground">
          Describe the problem (optional)
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          className={inputClasses}
          placeholder="e.g. Split AC not cooling since yesterday"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-base font-semibold text-whatsapp-foreground shadow-sm transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Send booking on WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        This opens WhatsApp with your details pre-filled. You can review before sending.
      </p>
    </form>
  )
}
