import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { BreadcrumbJsonLd } from "./json-ld"

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const full = [{ name: "Home", path: "/" }, ...items]
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <BreadcrumbJsonLd items={full} />
      <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
        {full.map((item, i) => {
          const last = i === full.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1">
              {last ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
