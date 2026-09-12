import type { AboudContent } from "./schema-ext";

/**
 * English copy. Their own line — "Where luxury meets the road… where every
 * detail is made for those who know what they want" — sets the register, and
 * the address is the one they publish on every post.
 */
export const en: AboudContent = {
  locale: "en",
  dir: "ltr",
  brand: {
    name: "Khaled Aboud Automotive",
    shortName: "KA",
    tagline: "Luxury & Exotics",
  },
  nav: [
    { label: "The collection", href: "#collection" },
    { label: "The hub", href: "#hub" },
    { label: "Enquire", href: "#visit" },
  ],
  hero: {
    eyebrow: "Auto Hub & Museum — New Cairo",
    headline: "Where luxury meets the road",
    sub: "Every detail is made for those who know what they want. A standing collection of luxury and exotics, each one catalogued down to the name of its paint.",
    primaryCta: "See the collection",
    secondaryCta: "Call 011 0206 9606",
  },
  about: {
    heading: "Catalogued, not listed",
    body: [
      "Khaled Aboud Automotive keep their cars inside the Auto Hub & Museum in New Cairo, and they photograph them the way a museum photographs an exhibit — the badge, the sill plate, the switchgear, the weave of the trim.",
      "They publish the same plate for every car: the factory name of the exterior colour, the interior leather, the veneer, the engine, the acceleration, the wheels. This page reproduces those plates exactly as posted.",
    ],
    stats: [
      { value: "1 of 10", label: "Worldwide, for the 760i" },
      { value: "8", label: "Exhibits catalogued here" },
      { value: "A204", label: "Their unit at the Auto Hub" },
    ],
  },
  services: {
    heading: "How they work",
    intro: "Three things their captions repeat.",
    items: [
      {
        title: "Specified to the name",
        body: "Colours are given as the factory names them — Techno Violet, Carpathian Grey, Blue Bay Lagoon — not as 'purple', 'grey' or 'blue'.",
      },
      {
        title: "Agent guarantee",
        body: "Where a car still carries its agent guarantee they say so on the plate, alongside the mileage.",
      },
      {
        title: "Rarity, stated plainly",
        body: "When a car is one of ten in the world they publish the count, and where it stands in the Middle East and in Egypt.",
      },
    ],
  },
  gallery: { heading: "Detail", intro: "", items: [] },
  contact: {
    heading: "Enquire",
    intro: "The collection stands at unit A204 in the Auto Hub & Museum, Maxim Mall, New Cairo. Call before you come and they will have the car brought out.",
    addressLabel: "Address",
    address: "Maxim Mall, Auto Hub & Museum (A204) — New Cairo",
    phoneLabel: "Telephone",
    phones: ["011 0206 9606", "010 1001 0644", "011 4136 0680"],
    hoursLabel: "Enquiries",
    hours: "Daily, by telephone",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Auto+Hub+%26+Museum+Maxim+Mall+New+Cairo",
    instagramUrl: "https://www.instagram.com/khaledaboudauto/",
    facebookUrl: "https://www.facebook.com/khaledabouuto/",
    cta: "Call now",
  },
  footer: {
    rights: "© Khaled Aboud Automotive. All rights reserved.",
  },
  a11y: {
    toggleLanguage: "التبديل إلى العربية",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  scan: {
    hint: "Point scan — move to turn the specimen",
    alt: "A BMW M5 in Techno Violet Metallic, photographed inside Khaled Aboud Automotive's hub in New Cairo.",
  },
  collection: {
    heading: "The collection",
    intro:
      "Eight exhibits, each with the plate its owner published. Where a field is missing it is missing because they did not post it.",
    paintLabel: "Exterior colour",
    mileageLabel: "Odometer",
    provenanceLabel: "Provenance",
    specsLabel: "Specification",
    kitLabel: "Equipment",
    exteriorLabel: "Exterior",
    detailLabel: "Detail",
    interiorLabel: "Interior",
    noSpecs: "No specification plate published for this car — only its provenance.",
    specLabels: {
      Exterior: "Exterior",
      Interior: "Interior",
      Trim: "Trim",
      Engine: "Engine",
      Acceleration: "Acceleration",
      Wheels: "Wheels",
      Transmission: "Transmission",
      Drivetrain: "Drivetrain",
      Battery: "Battery",
    },
    specValues: {},
    provenance: {
      "1 of 10 in worldwide": "1 of 10 in worldwide",
      "1 of 2 in Middle East": "1 of 2 in Middle East",
      "1 of 1 in Egypt": "1 of 1 in Egypt",
      "The only one in Egypt Rolls Royce Specs": "The only one in Egypt with Rolls-Royce specs",
      "BMW Private Selection": "BMW Private Selection",
      "1 of 1 Specs in Egypt": "1 of 1 specs in Egypt",
      "Special Order Individual Interior & Exterior":
        "Special order — Individual interior & exterior",
      "Agent Guarantee": "Agent guarantee",
      "Sport Package": "Sport package",
      "Three-Row L": "Three-row L",
      "Special order colour exterior": "Special order exterior colour",
    },
    kit: {},
    status: {},
  },
  hub: {
    heading: "Auto Hub & Museum",
    body: [
      "The hub is a glass and concrete hall in New Cairo, and it does the work a studio would: even light down both sides, dark columns, and a floor that throws just enough reflection to sit a car on.",
      "It is why their photographs read as a set. Every exhibit on this page was shot in the same room, under the same light, which is the only fair way to compare a Polar White GLS with a Techno Violet M5.",
    ],
    addressLine: "Maxim Mall · Auto Hub & Museum · Unit A204 · New Cairo",
  },
  marques: { heading: "Marques in the hall" },
};
