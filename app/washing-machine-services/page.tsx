import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { ServiceList } from "@/components/services/service-list"
import { Faq } from "@/components/site/faq"
import { CtaBand } from "@/components/site/cta-band"
import { ServiceJsonLd } from "@/components/site/json-ld"
import { washingMachineServices } from "@/lib/services"

export const metadata: Metadata = {
  title: "Washing Machine Repair & Service in Madurai",
  description:
    "Washing machine repair and installation in Madurai for top-load, front-load and semi-automatic machines. Same-day doorstep service for all brands by trained technicians.",
  alternates: { canonical: "/washing-machine-services" },
}

const wmFaqs = [
  {
    q: "My washing machine is not draining water. Can you fix it?",
    a: "Yes. Drainage problems are usually caused by a blocked drain pipe, faulty drain pump or clogged filter. Our technician will identify and fix the exact issue at your home.",
  },
  {
    q: "Do you repair both front-load and top-load machines?",
    a: "We repair all types — fully automatic front-load, fully automatic top-load and semi-automatic washing machines — across every major brand.",
  },
  {
    q: "The machine vibrates or makes loud noise. Is that serious?",
    a: "Excess vibration or noise can come from an unbalanced drum, worn bearings, a loose belt or improper levelling. We diagnose the cause and repair or replace the affected part.",
  },
  {
    q: "Can you install a newly purchased washing machine?",
    a: "Absolutely. We connect the water inlet and drain, level and position the machine correctly, configure the settings and run a test wash cycle.",
  },
]

export default function WashingMachineServicesPage() {
  return (
    <>
      <ServiceJsonLd
        name="Washing Machine Repair & Service in Madurai"
        description="Washing machine repair and installation in Madurai for all machine types and brands."
        serviceType="Washing machine repair and installation"
      />
      <PageHero
        title="Washing Machine Repair & Service in Madurai"
        subtitle="Doorstep repair and installation for top-load, front-load and semi-automatic washing machines of every brand."
        crumbs={[{ name: "Washing Machine Services", path: "/washing-machine-services" }]}
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-border shadow-sm">
          <Image
            src="/images/washing-machine-service.png"
            alt="Technician repairing a front-load washing machine at a home"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>

      <ServiceList services={washingMachineServices} />
      <Faq faqs={wmFaqs} heading="Washing machine service FAQs" />
      <CtaBand
        title="Book your washing machine service"
        subtitle="Same-day doorstep washing machine repair and installation anywhere in Madurai."
      />
    </>
  )
}
