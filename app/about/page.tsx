import type { Metadata } from "next"
import Image from "next/image"
import { Target, Heart, ShieldCheck, Users } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { CtaBand } from "@/components/site/cta-band"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${business.name}, a Madurai-based AC and washing machine service business built on honest pricing, skilled technicians and reliable doorstep service.`,
  alternates: { canonical: "/about" },
}

const values = [
  {
    icon: Heart,
    title: "Honesty first",
    text: "We recommend only what your appliance actually needs — never unnecessary parts or repairs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality work",
    text: "Careful diagnosis, quality spare parts and a service warranty on every covered repair.",
  },
  {
    icon: Users,
    title: "Respect for you",
    text: "Punctual, polite technicians who treat your home and time with care.",
  },
  {
    icon: Target,
    title: "Fair pricing",
    text: "Clear estimates before we begin, with no hidden charges added later.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${business.shortName}`}
        subtitle="A local Madurai business on a simple mission: make home appliance service fast, fair and genuinely reliable."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              {business.name} was started in {business.foundingYear} with one goal — to give the people of
              Madurai a home appliance service they can actually trust. Too often, customers face unclear
              pricing, long waits and repairs that do not last.
            </p>
            <p>
              We do things differently. Our trained technicians arrive on time, explain the problem in plain
              language, quote a fair price upfront and get the job done right. Whether it is an air conditioner
              that will not cool or a washing machine that will not spin, we treat every call with the same care.
            </p>
            <p>
              As a growing local business, every customer matters to us. Your recommendation to a neighbour is
              the biggest compliment we can earn — and that is exactly why we never cut corners.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/images/hero-technician.png"
              alt="CoolCare technician working on an air conditioner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
