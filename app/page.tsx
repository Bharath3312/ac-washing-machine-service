import { Hero } from "@/components/home/hero"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChoose } from "@/components/home/why-choose"
import { HowItWorks } from "@/components/home/how-it-works"
import { AreasTeaser } from "@/components/home/areas-teaser"
import { Faq } from "@/components/site/faq"
import { CtaBand } from "@/components/site/cta-band"

const homeFaqs = [
  {
    q: "How soon can you send a technician in Madurai?",
    a: "In most parts of Madurai we offer same-day service when you book before evening. For busy periods we will confirm the earliest available slot when you call or message us.",
  },
  {
    q: "Do you charge a visit or inspection fee?",
    a: "We share a rough estimate over the phone before we visit. Any inspection charge, if applicable, is told to you upfront and is adjusted against the repair cost if you proceed.",
  },
  {
    q: "Which brands of AC and washing machine do you service?",
    a: "We service all major brands including split and window ACs and top-load, front-load and semi-automatic washing machines, regardless of the brand or model age.",
  },
  {
    q: "Do you provide any warranty on repairs?",
    a: "Yes. Covered repairs come with a service warranty. The exact warranty period depends on the type of repair and any parts replaced, and is mentioned on your bill.",
  },
  {
    q: "How do I pay for the service?",
    a: "You pay after the work is completed. We accept cash and popular UPI apps for your convenience.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChoose />
      <HowItWorks />
      <AreasTeaser />
      <Faq faqs={homeFaqs} />
      <CtaBand />
    </>
  )
}
