import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Wind, WashingMachine } from "lucide-react"
import { acServices, washingMachineServices } from "@/lib/services"

const cards = [
  {
    title: "Air Conditioner Service",
    href: "/ac-services",
    image: "/images/ac-service.png",
    alt: "Technician cleaning and servicing a split AC indoor unit",
    icon: Wind,
    blurb:
      "Repair, general service, installation, deep cleaning and gas charging for split and window ACs of every brand.",
    items: acServices,
  },
  {
    title: "Washing Machine Service",
    href: "/washing-machine-services",
    image: "/images/washing-machine-service.png",
    alt: "Technician repairing a front-load washing machine",
    icon: WashingMachine,
    blurb:
      "Repair and installation for top-load, front-load and semi-automatic washing machines, done at your home.",
    items: washingMachineServices,
  },
]

export function ServicesOverview() {
  return (
    <section className="section-tint border-y border-primary/10 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
          Our services
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Complete home appliance care under one roof, delivered by trained technicians across Madurai.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article
              key={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card soft-shadow transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.items.map((s) => (
                    <li
                      key={s.slug}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  View {card.title.split(" ")[0]} services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
