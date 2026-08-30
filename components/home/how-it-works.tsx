import { PhoneCall, CalendarClock, Wrench, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    title: "Call or WhatsApp",
    text: "Tell us the appliance and the problem. We'll give you a rough estimate upfront.",
  },
  {
    icon: CalendarClock,
    title: "Book a slot",
    text: "Pick a time that suits you. Our technician arrives at your doorstep on time.",
  },
  {
    icon: Wrench,
    title: "Get it fixed",
    text: "We diagnose, quote and repair on the spot wherever possible, using quality parts.",
  },
  {
    icon: ThumbsUp,
    title: "Pay & relax",
    text: "Pay only after the job is done, with a service warranty on covered repairs.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-3xl">
          How it works
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Getting your appliance fixed is simple and stress-free.
        </p>
      </div>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <li key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="absolute right-5 top-5 font-heading text-3xl font-extrabold text-primary/15">
                {i + 1}
              </span>
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
