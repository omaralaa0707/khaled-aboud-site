import type { AboudContent } from "./schema-ext";

/**
 * Arabic copy. Factory colour, trim and package names stay in Latin script —
 * that is how the dealership writes them, and how their buyers say them.
 * Only the connecting language is translated.
 */
export const ar: AboudContent = {
  locale: "ar",
  dir: "rtl",
  brand: {
    name: "خالد عبود أوتوموتيف",
    shortName: "KA",
    tagline: "سيارات فاخرة ونادرة",
  },
  nav: [
    { label: "المجموعة", href: "#collection" },
    { label: "الصالة", href: "#hub" },
    { label: "للاستفسار", href: "#visit" },
  ],
  hero: {
    eyebrow: "Auto Hub & Museum — القاهرة الجديدة",
    headline: "حيث تلتقي الفخامة بالطريق",
    sub: "كل تفصيلة معمولة لحد عارف هو عايز إيه. مجموعة دائمة من السيارات الفاخرة والنادرة، كل واحدة موثّقة لحد اسم لون الدهان.",
    primaryCta: "شوف المجموعة",
    secondaryCta: "اتصل ٠١١٠٢٠٦٩٦٠٦",
  },
  about: {
    heading: "موثّقة، مش معروضة وخلاص",
    body: [
      "خالد عبود أوتوموتيف بيحتفظوا بسياراتهم جوه الـ Auto Hub & Museum في القاهرة الجديدة، وبيصوّروها زي ما المتحف بيصوّر مقتنياته — الشعار، وبلاطة الباب، والمفاتيح، وحتى نسيج التطعيم.",
      "وبينشروا نفس اللوحة لكل عربية: اسم لون الدهان من المصنع، وجلد المقصورة، والتطعيم، والمحرك، والتسارع، والجنوط. الصفحة دي بتعيد نشر اللوحات دي زي ما هي بالظبط.",
    ],
    stats: [
      { value: "١ من ١٠", label: "على مستوى العالم — للـ 760i" },
      { value: "٨", label: "سيارات موثّقة هنا" },
      { value: "A204", label: "وحدتهم في الـ Auto Hub" },
    ],
  },
  services: {
    heading: "طريقتهم",
    intro: "تلات حاجات بيكرروها في كل بوست.",
    items: [
      {
        title: "اللون باسمه",
        body: "الألوان بتتكتب زي ما المصنع بيسمّيها — Techno Violet وCarpathian Grey وBlue Bay Lagoon — مش «بنفسجي» أو «رمادي» أو «أزرق».",
      },
      {
        title: "ضمان الوكيل",
        body: "لما العربية لسه عليها ضمان الوكيل بيكتبوها في اللوحة، جنب عداد الكيلومترات.",
      },
      {
        title: "الندرة بالرقم",
        body: "لما العربية تبقى واحدة من عشرة في العالم بينشروا الرقم، وترتيبها في الشرق الأوسط وفي مصر.",
      },
    ],
  },
  gallery: { heading: "تفاصيل", intro: "", items: [] },
  contact: {
    heading: "للاستفسار",
    intro: "المجموعة في الوحدة A204 داخل Auto Hub & Museum بمول ماكسيم، القاهرة الجديدة. كلّمهم قبل ما تيجي وهيطلّعولك العربية.",
    addressLabel: "العنوان",
    address: "مول ماكسيم، Auto Hub & Museum (A204) — القاهرة الجديدة",
    phoneLabel: "تليفون",
    phones: ["٠١١٠٢٠٦٩٦٠٦", "٠١٠١٠٠١٠٦٤٤", "٠١١٤١٣٦٠٦٨٠"],
    hoursLabel: "الاستفسارات",
    hours: "يوميًا على التليفون",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Auto+Hub+%26+Museum+Maxim+Mall+New+Cairo",
    instagramUrl: "https://www.instagram.com/khaledaboudauto/",
    facebookUrl: "https://www.facebook.com/khaledabouuto/",
    cta: "اتصل دلوقتي",
  },
  footer: {
    disclaimer:
      "تصميم مفاهيمي — عرض مستقل، وليس الموقع الرسمي لخالد عبود أوتوموتيف. الصور والمواصفات المنشورة ملك لخالد عبود أوتوموتيف.",
    rights: "خالد عبود أوتوموتيف — القاهرة الجديدة",
  },
  a11y: {
    toggleLanguage: "Switch to English",
    openMenu: "افتح القائمة",
    closeMenu: "اقفل القائمة",
  },
  scan: {
    hint: "مسح نقطي — حرّك الماوس عشان تلف العيّنة",
    alt: "بي إم دبليو M5 بلون Techno Violet Metallic، متصوّرة جوه صالة خالد عبود أوتوموتيف بالقاهرة الجديدة.",
  },
  collection: {
    heading: "المجموعة",
    intro:
      "تمن سيارات، كل واحدة معاها اللوحة اللي نشروها. لو في خانة ناقصة، فهي ناقصة لأنهم ما نشروهاش.",
    paintLabel: "لون الدهان",
    mileageLabel: "العداد",
    provenanceLabel: "الندرة",
    specsLabel: "المواصفات",
    kitLabel: "التجهيزات",
    exteriorLabel: "من بره",
    detailLabel: "تفاصيل",
    interiorLabel: "من جوه",
    noSpecs: "مفيش لوحة مواصفات منشورة للعربية دي — الندرة بس.",
    specLabels: {
      Exterior: "اللون الخارجي",
      Interior: "المقصورة",
      Trim: "التطعيمات",
      Engine: "المحرك",
      Acceleration: "التسارع",
      Wheels: "الجنوط",
      Transmission: "ناقل الحركة",
      Drivetrain: "الدفع",
      Battery: "البطارية",
    },
    specValues: {
      "4.4L twin-turbo V8 — plug-in hybrid / 727 hp / 1000 Nm":
        "٤.٤ لتر تيربو مزدوج V8 — هجين قابل للشحن / ٧٢٧ حصان / ١٠٠٠ نيوتن.م",
      "0–100 km/h — 3.2 s": "٠–١٠٠ كم/س — ٣.٢ ثانية",
      "0–100 km/h — 3.5 s": "٠–١٠٠ كم/س — ٣.٥ ثانية",
      "0–100 km/h — 4.9 s": "٠–١٠٠ كم/س — ٤.٩ ثانية",
      "3 electric motors — 830 hp and 11,500 lb-ft of torque":
        "٣ موتورات كهربائية — ٨٣٠ حصان و١١٬٥٠٠ رطل.قدم عزم",
      "Battery range 505 km": "مدى البطارية ٥٠٥ كم",
      "4.0L V8 biturbo — mild hybrid — 510 hp / 730 Nm":
        "٤.٠ لتر V8 تيربو مزدوج — هجين خفيف — ٥١٠ حصان / ٧٣٠ نيوتن.م",
      "2.0L turbocharged / 247 hp / 365 Nm": "٢.٠ لتر تيربو / ٢٤٧ حصان / ٣٦٥ نيوتن.م",
      "2.0L turbocharged / 261 hp / 400 Nm": "٢.٠ لتر تيربو / ٢٦١ حصان / ٤٠٠ نيوتن.م",
      "3.6L V6 / 293 hp": "٣.٦ لتر V6 / ٢٩٣ حصان",
      "1.5L TwinPower Turbo / 136 hp / 230 Nm":
        "١.٥ لتر TwinPower Turbo / ١٣٦ حصان / ٢٣٠ نيوتن.م",
      "9-speed automatic": "أوتوماتيك ٩ سرعات",
      "8-speed automatic": "أوتوماتيك ٨ سرعات",
      "All-wheel drive": "دفع رباعي",
      "Black leather": "جلد أسود",
      "Leather brown": "جلد بني",
      "Leather — black / anthracite": "جلد — أسود / أنثراسيت",
      "Grey open-pore oak wood": "خشب بلوط رمادي مفتوح المسام",
      "Shadow Grey Ash veneer": "قشرة Shadow Grey Ash",
      "3X — 3 motors (1 front, 2 rear)": "فئة 3X — ٣ موتورات (واحد أمامي، اتنين خلفي)",
      "Caraway/Ebony with extended Windsor leather":
        "Caraway/Ebony بجلد Windsor ممتد",
      "Lunar Horizon (Jet Black/Light Grey), premium leather":
        "Lunar Horizon (أسود/رمادي فاتح)، جلد فاخر",
      "Veganza perforated Mocha": "Veganza مثقّب بلون Mocha",
      "BMW Individual Leather 'Merino' | Black/Dark Violet":
        "جلد BMW Individual ‘Merino’ | أسود/بنفسجي غامق",
      "M accent dark silver combined with 'Carbon Fiber' and high-gloss silver threads":
        "تطعيمات M فضي غامق مع ‘Carbon Fiber’ وخيوط فضية لامعة",
      '20"/21" M light alloy, double-spoke style 951 M Black':
        'جنوط M خفيفة ٢٠"/٢١" — طراز 951 M أسود',
      '22" premium finish aluminium': 'ألومنيوم ٢٢" بتشطيب فاخر',
      '22" AMG multi-spoke': 'AMG متعددة القضبان ٢٢"',
      '22" style 1075, diamond turned with gloss dark grey contrast':
        'طراز 1075 مقاس ٢٢"، مخرَّطة ألماسيًا برمادي غامق لامع',
      '20" × 8.5" machined/painted aluminium': 'ألومنيوم ٢٠" × ٨.٥" مخرَّط/مدهون',
      '20" aluminium alloy': 'سبيكة ألومنيوم ٢٠"',
    },
    provenance: {
      "1 of 10 in worldwide": "١ من ١٠ على مستوى العالم",
      "1 of 2 in Middle East": "١ من ٢ في الشرق الأوسط",
      "1 of 1 in Egypt": "١ من ١ في مصر",
      "The only one in Egypt Rolls Royce Specs": "الوحيدة في مصر بمواصفات Rolls-Royce",
      "BMW Private Selection": "BMW Private Selection",
      "1 of 1 Specs in Egypt": "مواصفات ١ من ١ في مصر",
      "Special Order Individual Interior & Exterior":
        "طلب خاص — Individual داخلي وخارجي",
      "Agent Guarantee": "ضمان الوكيل",
      "Sport Package": "Sport Package",
      "Three-Row L": "ثلاث صفوف — فئة L",
      "Special order colour exterior": "لون خارجي بطلب خاص",
    },
    kit: {
      "AMG exterior sport package": "باقة AMG الرياضية الخارجية",
      "AMG Night package": "باقة AMG Night",
      "Gloss black exterior accents": "تطعيمات خارجية سوداء لامعة",
      "Head-up display": "شاشة عرض على الزجاج",
      "Supersport steering wheel, deep-embossed leather":
        "طارة Supersport بجلد محفور",
      "MBUX Navigation Plus": "MBUX Navigation Plus",
      "MBUX High-End Rear Seat Entertainment": "نظام ترفيه خلفي MBUX High-End",
      "Temperature-controlled cup holder": "حامل أكواب بالتحكم في الحرارة",
      "Automatic panoramic sliding sunroof": "فتحة سقف بانوراما أوتوماتيك",
      "360° camera": "كاميرا محيطية ٣٦٠°",
      "Premium sound system": "نظام صوتي فاخر",
      "AMG styling — front spoiler, side skirts":
        "تصميم AMG — سبويلر أمامي وعتبات جانبية",
      "Automatic high beam control plus (IHC+)": "تحكم أوتوماتيك في الضوء العالي (IHC+)",
      "Dynamic LED headlamps": "مصابيح LED ديناميكية",
      "180° front view for off-road driving": "رؤية أمامية ١٨٠° للطرق الوعرة",
    },
    status: {
      "Brand New 2025": "زيرو ٢٠٢٥",
      "Brand New 2026": "زيرو ٢٠٢٦",
      "Model 2024": "موديل ٢٠٢٤",
      "Model 2025": "موديل ٢٠٢٥",
      "Model 2026": "موديل ٢٠٢٦",
      "Facelift, model 2024": "فيسليفت، موديل ٢٠٢٤",
      "23,000 km": "٢٣٬٠٠٠ كم",
      "29,600 km": "٢٩٬٦٠٠ كم",
      "18,000 km": "١٨٬٠٠٠ كم",
      "11,000 km": "١١٬٠٠٠ كم",
    },
  },
  hub: {
    heading: "Auto Hub & Museum",
    body: [
      "الصالة قاعة من الزجاج والخرسانة في القاهرة الجديدة، وبتعمل شغل الاستوديو: إضاءة متساوية على الجنبين، وأعمدة غامقة، وأرضية بتعكس القد اللي يخلي العربية «قاعدة» عليها.",
      "وعشان كده صورهم كلها شكلها مجموعة واحدة. كل عربية في الصفحة دي متصوّرة في نفس الأوضة وتحت نفس الضوء، وده الطريق الوحيد العادل إنك تقارن GLS بلون Polar White بـ M5 بلون Techno Violet.",
    ],
    addressLine: "مول ماكسيم · Auto Hub & Museum · وحدة A204 · القاهرة الجديدة",
  },
  marques: { heading: "الماركات في الصالة" },
};
