import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, ArrowLeft } from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import { CtaBand } from "@/components/site/cta-band"
import { blogPosts, getPost } from "@/lib/blog"
import { business } from "@/lib/business"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
    mainEntityOfPage: `${business.url}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />

        <div className="mt-6 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {post.description}
        </p>

        <div className="mt-8 space-y-5 border-t border-border pt-8">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-heading text-xl font-bold text-foreground">
                  {block.text}
                </h2>
              )
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground marker:text-primary">
                  {block.items?.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            )
          })}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </article>

      <CtaBand
        title="Appliance acting up?"
        subtitle="Skip the guesswork — our Madurai technicians will diagnose and fix it fast."
      />
    </>
  )
}
