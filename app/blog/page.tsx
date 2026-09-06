import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { CtaBand } from "@/components/site/cta-band"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Appliance Care Blog",
  description:
    "Practical tips and guides on AC and washing machine care, maintenance and repair from Sri Renganathan Service Center's technicians in Madurai.",
  alternates: { canonical: "/blog" },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return (
    <>
      <PageHero
        title="Appliance Care Blog"
        subtitle="Straightforward tips and guides to help you get the most from your AC and washing machine."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground text-balance">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  aria-label={`Read ${post.title}`}
                >
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
