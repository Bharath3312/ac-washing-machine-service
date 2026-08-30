import { business, fullAddress } from "@/lib/business"
import { allServices } from "@/lib/services"

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON is safe here — controlled, non-user data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** LocalBusiness / HVACBusiness schema — used site-wide. */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": `${business.url}/#business`,
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: `${business.url}/images/hero-technician.png`,
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: "Madurai",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.area}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.hours.spec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    makesOffer: allServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.short },
    })),
  }
  return <JsonLd data={data} />
}

/** Breadcrumb schema for inner pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${business.url}${item.path}`,
    })),
  }
  return <JsonLd data={data} />
}

/** Service schema for service pages. */
export function ServiceJsonLd({
  name,
  description,
  serviceType,
}: {
  name: string
  description: string
  serviceType: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: { "@id": `${business.url}/#business` },
    areaServed: { "@type": "City", name: "Madurai" },
    address: fullAddress,
  }
  return <JsonLd data={data} />
}

/** FAQ schema. */
export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return <JsonLd data={data} />
}
