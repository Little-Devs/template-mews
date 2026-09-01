export const site = {
  logo: {
    text: "Mews House",
    mark: "MH",
  },
  fonts: {
    display: "Oswald",
    ui: "Space Grotesk",
  },
  colors: {
    deep: "#003A4E",
    cream: "#FBDDB9",
    sand: "#F1E2CE",
    peach: "#FFBC7D",
  },
  meta: {
    title: "Mews House — A terrace of 1899, now a private townhouse",
    description: "Lorem ipsum dolor sit amet. A heritage mews townhouse with four floors, a walled garden, and viewing by note.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+61 8 5550 1899",
    address: "12 Mews Lane, inner city",
  },
  sections: {
    hero: true,
    house: true,
    rooms: true,
    grounds: true,
    visit: true,
    contact: true,
  },
  nav: [
    { href: "#house", label: "The house", section: "house" as const },
    { href: "#rooms", label: "Rooms", section: "rooms" as const },
    { href: "#grounds", label: "Grounds", section: "grounds" as const },
    { href: "#visit", label: "Viewing", section: "visit" as const },
    { href: "#contact", label: "Enquire", section: "contact" as const },
  ],
  ticker: ["Open days by note", "Est 1899", "Walled garden", "Four floors", "Private mews"],
  hero: {
    kicker: "Est 1899 · townhouse",
    title: "A mews built for trade, kept as a house.",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The terrace opens to the lane; the garden sits behind the original workshops. Viewing is by appointment, not by portal.",
    primaryCta: { label: "Request a viewing", href: "#contact" },
    secondaryCta: { label: "See the rooms", href: "#rooms" },
  },
  house: {
    kicker: "The house",
    title: "Workshops in front, a dwelling behind",
    manifesto: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The facade is interwar in spirit, the plan is older. Two shops once fronted the street; the factories at the rear are now kitchen, library, and a long room.",
    points: [
      "Built 1899. Replanned as a single dwelling.",
      "Stone, timber joists, and a stair that still turns.",
      "Ut enim ad minim veniam, quis nostrud exercitation.",
    ],
  },
  rooms: {
    kicker: "Rooms",
    title: "Four floors, no show-home staging",
    items: [
      { title: "Hall and long room", note: "Lorem ipsum dolor sit amet. High windows to the lane. A fire that works.", tone: "one" },
      { title: "Kitchen in the old workshop", note: "Consectetur adipiscing elit. North light, a scullery, and a door to the garden.", tone: "two" },
      { title: "Sleeping floors", note: "Four bedrooms, two baths. The attic is a study with a skylight.", tone: "three" },
      { title: "Cellar", note: "Ut labore et dolore. Wine, stores, and the original service stair.", tone: "four" },
    ],
  },
  grounds: {
    kicker: "Grounds",
    title: "A walled garden where the yard was",
    note: "Duis aute irure dolor in reprehenderit. Fig, bay, and a strip of lawn. The rear gate still opens to the mews.",
  },
  visit: {
    kicker: "Viewing",
    title: "Open days are not listed online",
    rows: [
      { day: "Weekdays", time: "By note, 10:00–16:00" },
      { day: "Saturday", time: "Two slots, booked" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  footer: {
    credit: "Mews House — a Little-Devs template",
    note: "MIT. Light-custom: logo, colours, fonts, copy, sections.",
  },
} as const;

export type Site = typeof site;
