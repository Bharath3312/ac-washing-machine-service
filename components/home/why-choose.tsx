import { Clock, ShieldCheck, IndianRupee, UserCheck, PhoneCall, Wrench } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Same-day service",
    text: "Book in the morning, get service the same day across most areas of Madurai.",
  },
  {
    icon: IndianRupee,
    title: "Transparent pricing",
    text: "Clear quotes before work begins. No hidden charges, no surprises on the bill.",
  },
  {
    icon: UserCheck,
    title: "Trained technicians",
    text: "Skilled, background-checked technicians who respect your home and time.",
  },
  {
    icon: ShieldCheck,
    title: "Service warranty",
    text: "Repairs backed by a service warranty for genuine peace of mind.",
  },
  {
    icon: Wrench,
    title: "All brands & types",
    text: "We service every major brand of AC and washing machine, old or new.",
  },
  {
    icon: PhoneCall,
    title: "Easy booking",
    text: "One call or WhatsApp message is all it takes to schedule a visit.",
  },
]

export function WhyChoose() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
            Why choose us
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            We focus on doing the job right the first time, at a fair price, close to home.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
