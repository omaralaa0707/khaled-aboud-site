/**
 * Khaled Aboud Automotive publish their stock as formatted spec plates —
 * exterior and interior colours by their proper factory names, trim, engine,
 * acceleration, wheels, mileage, and where it applies a rarity line.
 *
 * Everything below is transcribed from those captions verbatim. Nothing is
 * inferred: where they did not publish a field, the field is absent rather
 * than filled in.
 *
 * `paint` is a hex eyedropped to match the paint *they name* in that car's own
 * photographs. It is a rendering of their published colour name, not a claim
 * of a factory colour code.
 */

export type SpecRow = { label: string; value: string };

export type Exhibit = {
  id: string;
  make: string;
  model: string;
  /** Their own year/condition line, e.g. "Brand New 2026". */
  status: string;
  /** Mileage exactly as posted, where they posted one. */
  mileage?: string;
  /** Rarity/provenance lines, in their order. Empty for most cars. */
  provenance: string[];
  /** The published exterior colour name. */
  paintName?: string;
  /** Hex matched to that colour in their own frames. Absent when unpublished. */
  paint?: string;
  specs: SpecRow[];
  /** Long equipment list, only where they published one. */
  kit?: string[];
  exterior: string[];
  detail: string[];
  interior: string[];
};

const f = (car: string, kind: "ext" | "det" | "int", n: number) =>
  `/media/${car}-${kind}-${String(n).padStart(2, "0")}.jpg`;

export const EXHIBITS: Exhibit[] = [
  {
    id: "760i",
    make: "BMW",
    model: "760i xDrive",
    status: "Brand New 2025",
    provenance: [
      "1 of 10 in worldwide",
      "1 of 2 in Middle East",
      "1 of 1 in Egypt",
      "The only one in Egypt Rolls Royce Specs",
      "BMW Private Selection",
    ],
    specs: [],
    exterior: [1, 2, 3, 4].map((n) => f("760i", "ext", n)),
    detail: [1, 2, 3].map((n) => f("760i", "det", n)),
    interior: [1, 2, 3].map((n) => f("760i", "int", n)),
  },
  {
    id: "m5",
    make: "BMW",
    model: "M5",
    status: "Brand New 2026",
    provenance: [
      "1 of 1 Specs in Egypt",
      "Special Order Individual Interior & Exterior",
      "Agent Guarantee",
    ],
    paintName: "BMW Individual Special Techno violet Metallic",
    paint: "#5c4a85",
    specs: [
      { label: "Exterior", value: "BMW Individual Special Techno violet Metallic" },
      { label: "Interior", value: "BMW Individual Leather 'Merino' | Black/Dark Violet" },
      {
        label: "Trim",
        value: "M accent dark silver combined with 'Carbon Fiber' and high-gloss silver threads",
      },
      { label: "Engine", value: "4.4L twin-turbo V8 — plug-in hybrid / 727 hp / 1000 Nm" },
      { label: "Acceleration", value: "0–100 km/h — 3.2 s" },
      { label: "Wheels", value: '20"/21" M light alloy, double-spoke style 951 M Black' },
    ],
    exterior: [1, 2, 3, 4, 5, 6].map((n) => f("m5", "ext", n)),
    detail: [1, 2, 3].map((n) => f("m5", "det", n)),
    interior: [1, 2].map((n) => f("m5", "int", n)),
  },
  {
    id: "hummer",
    make: "Hummer",
    model: "H EV 3X",
    status: "Model 2025",
    mileage: "23,000 km",
    provenance: ["Sport Package"],
    paintName: "Void Black Metallic",
    paint: "#16171a",
    specs: [
      { label: "Exterior", value: "Void Black Metallic" },
      { label: "Interior", value: "Lunar Horizon (Jet Black/Light Grey), premium leather" },
      { label: "Trim", value: "3X — 3 motors (1 front, 2 rear)" },
      { label: "Engine", value: "3 electric motors — 830 hp and 11,500 lb-ft of torque" },
      { label: "Battery", value: "Battery range 505 km" },
      { label: "Acceleration", value: "0–100 km/h — 3.5 s" },
      { label: "Wheels", value: '22" premium finish aluminium' },
    ],
    exterior: [1, 2, 3, 4, 5].map((n) => f("hummer", "ext", n)),
    detail: [1, 2, 3].map((n) => f("hummer", "det", n)),
    interior: [1, 2, 3].map((n) => f("hummer", "int", n)),
  },
  {
    id: "gls",
    make: "Mercedes-Benz",
    model: "GLS 580 AMG",
    status: "Facelift, model 2024",
    mileage: "29,600 km",
    provenance: [],
    paintName: "Polar white metallic",
    paint: "#e8eaec",
    specs: [
      { label: "Exterior", value: "Polar white metallic" },
      { label: "Interior", value: "Leather — black / anthracite" },
      { label: "Trim", value: "Grey open-pore oak wood" },
      { label: "Engine", value: "4.0L V8 biturbo — mild hybrid — 510 hp / 730 Nm" },
      { label: "Acceleration", value: "0–100 km/h — 4.9 s" },
      { label: "Wheels", value: '22" AMG multi-spoke' },
      { label: "Transmission", value: "9-speed automatic" },
      { label: "Drivetrain", value: "All-wheel drive" },
    ],
    kit: [
      "AMG exterior sport package",
      "AMG Night package",
      "Gloss black exterior accents",
      "Head-up display",
      "Supersport steering wheel, deep-embossed leather",
      "MBUX Navigation Plus",
      "MBUX High-End Rear Seat Entertainment",
      "Temperature-controlled cup holder",
      "Automatic panoramic sliding sunroof",
      "360° camera",
      "Premium sound system",
      "AMG styling — front spoiler, side skirts",
      "Automatic high beam control plus (IHC+)",
      "Dynamic LED headlamps",
      "180° front view for off-road driving",
    ],
    exterior: [1, 2, 3, 4, 5].map((n) => f("gls", "ext", n)),
    detail: [1, 2, 3].map((n) => f("gls", "det", n)),
    interior: [1, 2, 3].map((n) => f("gls", "int", n)),
  },
  {
    id: "velar",
    make: "Range Rover",
    model: "Velar P250 Dynamic HSE",
    status: "Model 2024",
    mileage: "18,000 km",
    provenance: [],
    paintName: "Carpathian Grey Metallic",
    paint: "#6c7278",
    specs: [
      { label: "Exterior", value: "Carpathian Grey — metallic" },
      { label: "Interior", value: "Caraway/Ebony with extended Windsor leather" },
      { label: "Trim", value: "Shadow Grey Ash veneer" },
      { label: "Engine", value: "2.0L turbocharged / 247 hp / 365 Nm" },
      {
        label: "Wheels",
        value: '22" style 1075, diamond turned with gloss dark grey contrast',
      },
    ],
    exterior: [1, 2, 3, 4, 5].map((n) => f("velar", "ext", n)),
    detail: [1, 2, 3].map((n) => f("velar", "det", n)),
    interior: [1, 2, 3, 4].map((n) => f("velar", "int", n)),
  },
  {
    id: "jeep",
    make: "Jeep",
    model: "Grand Cherokee Limited 4×4",
    status: "Brand New 2025",
    provenance: ["Three-Row L"],
    paintName: "Diamond Black Crystal Pearl-Coat Metallic",
    paint: "#15171c",
    specs: [
      { label: "Exterior", value: "Diamond Black Crystal Pearl-Coat metallic" },
      { label: "Interior", value: "Black leather" },
      { label: "Engine", value: "3.6L V6 / 293 hp" },
      { label: "Transmission", value: "8-speed automatic" },
      { label: "Wheels", value: '20" × 8.5" machined/painted aluminium' },
    ],
    exterior: [1, 2, 3, 4, 5, 6].map((n) => f("jeep", "ext", n)),
    detail: [1, 2].map((n) => f("jeep", "det", n)),
    interior: [1, 2, 3].map((n) => f("jeep", "int", n)),
  },
  {
    id: "exeed",
    make: "Exeed",
    model: "VX Flagship",
    status: "Model 2026",
    provenance: [],
    paintName: "Aurora Green Metallic",
    paint: "#1f3a36",
    specs: [
      { label: "Exterior", value: "Aurora Green metallic" },
      { label: "Interior", value: "Leather brown" },
      { label: "Engine", value: "2.0L turbocharged / 261 hp / 400 Nm" },
      { label: "Wheels", value: '20" aluminium alloy' },
    ],
    exterior: [1, 2, 3].map((n) => f("exeed", "ext", n)),
    detail: [1, 2, 3, 4].map((n) => f("exeed", "det", n)),
    interior: [1, 2, 3, 4].map((n) => f("exeed", "int", n)),
  },
  {
    id: "x1",
    make: "BMW",
    model: "X1 M Sport",
    status: "Model 2026",
    mileage: "11,000 km",
    provenance: ["Agent Guarantee", "Special order colour exterior"],
    paintName: "Blue Bay Lagoon Metallic",
    paint: "#1b96d2",
    specs: [
      { label: "Exterior", value: "Blue Bay Lagoon metallic" },
      { label: "Interior", value: "Veganza perforated Mocha" },
      { label: "Engine", value: "1.5L TwinPower Turbo / 136 hp / 230 Nm" },
    ],
    exterior: [1, 2, 3, 4, 5, 6].map((n) => f("x1", "ext", n)),
    detail: [1, 2, 3].map((n) => f("x1", "det", n)),
    interior: [1, 2, 3].map((n) => f("x1", "int", n)),
  },
];

/** Marques represented across the exhibits above. */
export const MARQUES = [
  "BMW",
  "Mercedes-Benz",
  "Range Rover",
  "Hummer",
  "Jeep",
  "GMC",
  "Exeed",
];

/** The frame the hero scan is built from — their Techno Violet M5. */
export const HERO_SHOT = "/media/m5-ext-03.jpg";
