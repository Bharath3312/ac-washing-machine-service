import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { ServiceList } from "@/components/services/service-list"
import { Faq } from "@/components/site/faq"
import { CtaBand } from "@/components/site/cta-band"
import { ServiceJsonLd } from "@/components/site/json-ld"
import { acServices } from "@/lib/services"

export const metadata: Metadata = {
  title: "AC Service & Repair in Madurai",
  description:
    "Air conditioner repair, general service, installation, deep cleaning and gas charging in Madurai. Same-day doorstep AC service for all brands by trained technicians.",
  alternates: { canonical: "/ac-services" },
}

const acFaqs = [
  {
    q: "How often should I service my AC?",
    a: "For regular use, a general service once every 3 to 6 months keeps cooling efficient and reduces electricity bills. Before the summer season is the ideal time.",
  },
  {
    q: "My AC is not cooling. What could be wrong?",
    a: "Common causes are clogged filters, low refrigerant, a dirty condenser or a compressor fault. Our technician will diagnose the exact cause on-site and share the cost before repairing.",
  },
  {
    q: "Do you install split and window ACs?",
    a: "Yes. We handle complete installation for both split and window ACs, including copper piping, mounting, vacuuming, leak testing and a final cooling check.",
  },
  {
    q: "What type of gas do you refill?",
    a: "We refill R32, R410a and R22 refrigerant depending on your AC model, and always fix any leak before topping up the gas.",
  },
]

export default function AcServicesPage() {
  return (
    <>
      <ServiceJsonLd
        name="AC Service & Repair in Madurai"
        description="Air conditioner repair, service, installation, cleaning and gas charging in Madurai."
        serviceType="Air conditioner repair and maintenance"
      />
      <PageHero
        title="AC Service & Repair in Madurai"
        subtitle="From repairs and gas charging to installation and deep cleaning, we keep your air conditioner running cool and efficient all year round."
        crumbs={[{ name: "AC Services", path: "/ac-services" }]}
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-border shadow-sm">
          <Image
            src="/images/ac-service.png"
            alt="Technician performing a general service on a split air conditioner"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>

      <ServiceList services={acServices} />
      <Faq faqs={acFaqs} heading="AC service FAQs" />
      <CtaBand
        title="Book your AC service today"
        subtitle="Same-day doorstep AC repair, service and installation anywhere in Madurai."
      />
    </>
  )
}
