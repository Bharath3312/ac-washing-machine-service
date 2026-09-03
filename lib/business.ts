/**
 * ============================================================================
 *  BUSINESS CONFIGURATION  —  EDIT THIS FILE TO GO LIVE
 * ============================================================================
 *  All business details on the website are pulled from this single file.
 *  Replace the placeholder / mock values below with the real business
 *  information (name, phone, address, hours, etc.) whenever you are ready.
 *
 *  NOTE: These are temporary MOCK details for a newly started business.
 * ============================================================================
 */

export const business = {
  // --- Core identity -------------------------------------------------------
  name: "Sri Renganathan Service Center",
  shortName: "Sri Renganathan",
  tagline: "Reliable AC & Washing Machine Service in Madurai",
  description:
    "Sri Renganathan Service Center provides fast, affordable and reliable air conditioner and washing machine repair, service and installation across Madurai, Tamil Nadu. Same-day doorstep service by trained technicians.",
  foundingYear: 2024,

  // --- Contact -------------------------------------------------------------
  // Use full international format for tel/WhatsApp links (no spaces).
  phoneDisplay: "+91 98765 43210",
  phone: "+919876543210",
  whatsapp: "919876543210", // digits only, country code first
  email: "hello@srirenganathanmadurai.example",

  // --- Address (mock) ------------------------------------------------------
  address: {
    street: "No. 12, Kamarajar Salai",
    area: "Anna Nagar",
    city: "Madurai",
    state: "Tamil Nadu",
    postalCode: "625020",
    country: "IN",
  },

  // Approx. geo-coordinates for Madurai (replace with exact shop location)
  geo: {
    latitude: 9.9252,
    longitude: 78.1198,
  },

  // Google Maps embed/directions query
  mapQuery: "Madurai, Tamil Nadu",

  // --- Hours ---------------------------------------------------------------
  hours: {
    display: "Mon – Sun: 8:00 AM – 9:00 PM",
    // Schema.org openingHours spec
    spec: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
  },

  // --- Social (optional — leave blank to hide) -----------------------------
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  // --- Site ----------------------------------------------------------------
  // Update this to the final production domain before launch.
  url: "https://www.srirenganathanmadurai.example",
  locale: "en_IN",

  // Trust signals (kept factual — no fake reviews)
  highlights: [
    "Same-day doorstep service",
    "Trained & background-checked technicians",
    "Transparent pricing, no hidden charges",
    "Service warranty on repairs",
    "All brands serviced",
  ],
} as const

// --- Convenience link builders ---------------------------------------------
export const telHref = `tel:${business.phone}`

export const whatsappHref = (message?: string) => {
  const base = `https://wa.me/${business.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const fullAddress = `${business.address.street}, ${business.address.area}, ${business.address.city}, ${business.address.state} ${business.address.postalCode}`

export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`
