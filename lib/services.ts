/**
 * Service catalogue and service-area data.
 * Editing these arrays automatically updates the pages, navigation and sitemap.
 */

export type Service = {
  slug: string
  name: string
  short: string
  description: string
  points: string[]
}

export const acServices: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    short: "Fast diagnosis and repair for all AC faults.",
    description:
      "From cooling problems and water leakage to compressor and PCB faults, our technicians diagnose and fix all air conditioner issues at your doorstep.",
    points: [
      "Not cooling / poor cooling fixes",
      "Water leakage & drainage issues",
      "Compressor & PCB repair",
      "Fan motor and capacitor replacement",
    ],
  },
  {
    slug: "ac-service",
    name: "AC General Service",
    short: "Complete tune-up to keep your AC running efficiently.",
    description:
      "A thorough general service improves cooling, lowers electricity bills and extends the life of your air conditioner.",
    points: [
      "Filter & coil cleaning",
      "Cooling performance check",
      "Gas pressure inspection",
      "Electrical & drainage check",
    ],
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    short: "Safe, professional installation for split & window ACs.",
    description:
      "Correct installation is critical for cooling and efficiency. We install split and window ACs with proper mounting, piping and testing.",
    points: [
      "Split & window AC installation",
      "Copper piping & wall mounting",
      "Vacuuming & leak testing",
      "Final cooling test",
    ],
  },
  {
    slug: "ac-cleaning",
    name: "AC Deep Cleaning",
    short: "Jet cleaning for healthier air and better cooling.",
    description:
      "Professional foam and jet cleaning of indoor and outdoor units removes dust, mould and odour for cleaner, healthier air.",
    points: [
      "Indoor unit foam jet cleaning",
      "Outdoor condenser cleaning",
      "Anti-bacterial treatment",
      "Blower & filter cleaning",
    ],
  },
  {
    slug: "ac-gas-charging",
    name: "AC Gas Charging",
    short: "Refrigerant top-up and leak fixing for full cooling.",
    description:
      "If your AC is not cooling, low refrigerant may be the cause. We detect leaks, repair them and refill gas to restore full cooling.",
    points: [
      "Leak detection & repair",
      "R32 / R410a / R22 gas refilling",
      "Pressure testing",
      "Cooling verification",
    ],
  },
]

export const washingMachineServices: Service[] = [
  {
    slug: "washing-machine-repair",
    name: "Washing Machine Repair",
    short: "Repairs for all top-load, front-load & semi-automatic machines.",
    description:
      "We fix drainage problems, spin faults, noise, water inlet issues, drum and motor problems for all washing machine types and brands.",
    points: [
      "Not spinning / not draining fixes",
      "Water inlet & drainage repair",
      "Drum, belt & motor repair",
      "Control board & timer issues",
    ],
  },
  {
    slug: "washing-machine-installation",
    name: "Washing Machine Installation",
    short: "Correct setup, levelling and first-wash testing.",
    description:
      "Proper installation prevents leaks, vibration and damage. We install and configure your machine and run a test cycle.",
    points: [
      "Inlet & drain connection",
      "Levelling & positioning",
      "Settings configuration",
      "Test wash cycle",
    ],
  },
]

export const allServices = [...acServices, ...washingMachineServices]

// --- Service areas (localities across Madurai) -----------------------------
export const serviceAreas: string[] = [
  "Anna Nagar",
  "K.K. Nagar",
  "Villapuram",
  "Goripalayam",
  "Simmakkal",
  "Tallakulam",
  "Arasaradi",
  "Mattuthavani",
  "Thiruparankundram",
  "Sellur",
  "Vilangudi",
  "Iyer Bungalow",
  "Othakadai",
  "Kalavasal",
  "Ponmeni",
  "Palanganatham",
  "Avaniyapuram",
]
