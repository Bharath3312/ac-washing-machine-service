export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string // ISO
  readingTime: string
  category: "AC Care" | "Washing Machine" | "Tips"
  /** Body as an array of blocks for simple rendering. */
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ac-not-cooling-madurai-summer",
    title: "Why Your AC Is Not Cooling in the Madurai Summer (And How to Fix It)",
    description:
      "Madurai summers are brutal. If your AC is running but not cooling, here are the most common reasons and what a technician will check.",
    date: "2024-04-18",
    readingTime: "5 min read",
    category: "AC Care",
    body: [
      {
        type: "p",
        text: "When temperatures in Madurai cross 40°C, an air conditioner that will not cool quickly turns a home from a refuge into an oven. The good news is that most cooling problems come down to a handful of causes, many of which are easy to prevent.",
      },
      { type: "h2", text: "1. Clogged air filters" },
      {
        type: "p",
        text: "Dust builds up fast in our dry climate. A blocked filter chokes airflow, so the room never cools even though the compressor keeps running. Cleaning or replacing filters every few weeks during summer makes an immediate difference.",
      },
      { type: "h2", text: "2. Low refrigerant (gas)" },
      {
        type: "p",
        text: "If the AC is blowing air that is only slightly cool, low refrigerant is a likely culprit — usually due to a small leak. Simply topping up gas without fixing the leak is a short-term patch, so insist on leak detection first.",
      },
      { type: "h2", text: "3. Dirty condenser coils" },
      {
        type: "p",
        text: "The outdoor unit releases heat. When its coils are coated in dust, that heat cannot escape and cooling drops sharply. A deep clean of the outdoor unit restores efficiency and lowers your electricity bill.",
      },
      { type: "h2", text: "When to call a technician" },
      {
        type: "ul",
        items: [
          "The AC runs but the room never reaches the set temperature",
          "You notice water leaking indoors or ice on the coils",
          "There are unusual noises or burning smells",
          "Electricity bills have jumped without heavier use",
        ],
      },
      {
        type: "p",
        text: "A professional general service before peak summer is the single best way to avoid a breakdown on the hottest day of the year.",
      },
    ],
  },
  {
    slug: "ac-service-checklist-before-summer",
    title: "AC Service Checklist: Get Ready Before Summer Peaks",
    description:
      "A simple pre-summer checklist to keep your air conditioner cooling efficiently and avoid costly mid-season breakdowns.",
    date: "2024-03-05",
    readingTime: "4 min read",
    category: "Tips",
    body: [
      {
        type: "p",
        text: "A little preparation before summer saves you from sweaty emergencies later. Here is what a complete pre-summer AC service should cover.",
      },
      { type: "h2", text: "The essential checklist" },
      {
        type: "ul",
        items: [
          "Clean or replace air filters",
          "Wash the indoor blower and cooling coil",
          "Clean the outdoor condenser unit",
          "Check refrigerant pressure and inspect for leaks",
          "Clear the drainage pipe to prevent water leakage",
          "Test electrical connections and the capacitor",
          "Confirm the thermostat and remote are working correctly",
        ],
      },
      {
        type: "p",
        text: "Booking this service in early spring means shorter wait times and an AC that is ready before the first heatwave hits Madurai.",
      },
    ],
  },
  {
    slug: "washing-machine-not-draining",
    title: "Washing Machine Not Draining? Here's What Could Be Wrong",
    description:
      "Water left standing in the drum is one of the most common washing machine complaints. Learn the usual causes and when to call for help.",
    date: "2024-02-12",
    readingTime: "4 min read",
    category: "Washing Machine",
    body: [
      {
        type: "p",
        text: "Opening your washing machine to find dirty water still sitting in the drum is frustrating. Drainage faults are common and usually stem from a few specific issues.",
      },
      { type: "h2", text: "Common causes" },
      {
        type: "ul",
        items: [
          "A blocked or kinked drain hose",
          "A clogged drain pump filter — often full of lint, coins or small items",
          "A faulty drain pump that no longer pushes water out",
          "A jammed lid switch on top-load machines that stops the spin cycle",
        ],
      },
      { type: "h2", text: "What you can check safely" },
      {
        type: "p",
        text: "Before calling a technician, make sure the drain hose is not bent and that the machine is not mid-cycle. If the filter is easy to access on your model, clearing lint from it can sometimes solve the problem.",
      },
      {
        type: "p",
        text: "If water still will not drain, it is time for a professional. Pump and control-board issues need proper diagnosis, and our technicians carry the common spare parts to fix it in a single visit.",
      },
    ],
  },
  {
    slug: "extend-washing-machine-life",
    title: "7 Habits That Extend Your Washing Machine's Life",
    description:
      "Small everyday habits can add years to your washing machine and prevent expensive repairs. Here are seven worth adopting.",
    date: "2024-01-20",
    readingTime: "5 min read",
    category: "Washing Machine",
    body: [
      {
        type: "p",
        text: "A washing machine is a big investment for most households. With a few simple habits, you can keep it running smoothly for far longer.",
      },
      {
        type: "ul",
        items: [
          "Do not overload the drum — it strains the motor and bearings",
          "Use the right amount and type of detergent for your machine",
          "Clean the drum and dispenser drawer monthly",
          "Leave the door open after washing to prevent odour and mould",
          "Check pockets to keep coins and keys out of the drum",
          "Level the machine so it does not vibrate excessively",
          "Get a professional check-up once a year",
        ],
      },
      {
        type: "p",
        text: "Follow these and you will notice cleaner washes, quieter cycles and far fewer breakdowns over the years.",
      },
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
