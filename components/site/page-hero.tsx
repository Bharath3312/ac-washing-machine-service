import { Breadcrumbs } from "./breadcrumbs"

export function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string
  subtitle?: string
  crumbs: { name: string; path: string }[]
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
