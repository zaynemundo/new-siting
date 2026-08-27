export const designerProfile = {
  name: "Cai De Vera",
  tagline: "Graphic Designer & Art Director",
  headline: "Crafting iconic brand systems, kinetic typography, and editorial experiences.",
  availability: "Available for Q3/Q4 Commissions & Select Retainers",
  location: "Berlin / London / Remote",
  experienceYears: 8,
  projectsCount: 65,
  awardsCount: 14,
  bio: "I am an independent graphic designer and art director with a focus on visual identity systems, bespoke typography, high-impact packaging, and tactile editorial design. My work blends Swiss modernist discipline with experimental digital craft to help ambitious cultural institutions, tech pioneers, and luxury brands stand out.",
  socials: [
    { name: "Instagram", handle: "@caidevera.design", url: "https://instagram.com" },
    { name: "Behance", handle: "caidevera-studio", url: "https://behance.net" },
    { name: "Dribbble", handle: "caidevera", url: "https://dribbble.com" },
    { name: "ReadCV", handle: "caidevera", url: "https://read.cv" },
    { name: "LinkedIn", handle: "in/caidevera-design", url: "https://linkedin.com" },
    { name: "Are.na", handle: "cai-de-vera", url: "https://are.na" }
  ],
  stats: [
    { value: "08+", label: "Years Experience", detail: "Global agency & independent practice" },
    { value: "65+", label: "Brand Identities", detail: "Launched across 18 countries" },
    { value: "14", label: "Design Awards", detail: "TDC, Red Dot, Awwwards, Tokyo TDC" },
    { value: "98%", label: "Client Satisfaction", detail: "Long-term studio partnerships" }
  ]
};

export const categories = [
  { id: "all", label: "All Works" },
  { id: "brand-identity", label: "Brand Identity" },
  { id: "editorial", label: "Editorial & Print" },
  { id: "packaging", label: "Packaging & 3D" },
  { id: "typography", label: "Type & Kinetic" },
  { id: "digital", label: "Digital & UI" }
];

export const projects = [
  {
    id: "kronos-time",
    title: "KRONOS — Modular Type System & Horology Brand",
    category: "brand-identity",
    categoryLabel: "Brand Identity",
    client: "Kronos Atelier Switzerland",
    year: "2025",
    role: "Lead Identity Designer & Custom Typography",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80",
    summary: "Complete visual identity, bespoke monospace typeface, and packaging system for an avant-garde Swiss independent horology studio.",
    deliverables: ["Visual Identity System", "Custom Monospace Font", "Watch Box Packaging", "Art Direction", "Print Lookbook"],
    colors: [
      { name: "Obsidian Core", hex: "#0F1014", bgClass: "bg-[#0F1014]" },
      { name: "Precision Titanium", hex: "#8A909E", bgClass: "bg-[#8A909E]" },
      { name: "Chrono Amber", hex: "#FF5500", bgClass: "bg-[#FF5500]" },
      { name: "Pure Silver Foil", hex: "#E2E8F0", bgClass: "bg-[#E2E8F0]" }
    ],
    typography: {
      headlineFont: "Kronos Mono (Custom Glyphs)",
      bodyFont: "Space Grotesk Regular",
      specimen: "Aa Bb Cc Dd Ee Ff Gg Hh 0123456789 [PRECISION: 0.001s]"
    },
    beforeAfter: {
      title: "Brand Transformation",
      beforeImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Legacy Identity (2018)",
      afterImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "New Visual System (2025)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Kronos Atelier needed a visual transformation from traditional luxury clockmaker into a radical, tech-infused horology laboratory. We developed a proprietary geometric type system inspired by industrial gauge markings and high-frequency escapements.",
    challenge: "Existing horology brands adhere to conservative serif tropes. Kronos wanted to signal radical precision and brutalist architecture while preserving high-craftsmanship perception.",
    solution: "We engineered 'Kronos Mono', a variable typeface with mechanical ink traps. Paired with blind debossed matte black paper stock and safety-orange technical stamps, the brand achieved an unmistakable physical and digital footprint.",
    impact: [
      { label: "Edition Sell-Out", value: "< 48 Hours" },
      { label: "Design Award", value: "Red Dot Best of Best" },
      { label: "Press Coverage", value: "Wallpaper*, Hypebeast, GQ" }
    ]
  },
  {
    id: "neura-skincare",
    title: "NEURA LABS — Bio-Cellular Skincare Packaging & Identity",
    category: "packaging",
    categoryLabel: "Packaging & 3D",
    client: "Neura Biotechnology",
    year: "2025",
    role: "Art Direction & Structural Packaging",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1608248597359-0a379555239a?auto=format&fit=crop&w=1200&q=80",
    summary: "Minimalist aluminum cosmetic bottles, blind-embossed cartons, and clinical typographic packaging system for biotech skincare formulation.",
    deliverables: ["Aluminum Bottle Design", "Secondary Outer Packaging", "Foil Stamping Specs", "Brand Guidelines", "3D Product Renders"],
    colors: [
      { name: "Clinical Ceramic", hex: "#F5F5F0", bgClass: "bg-[#F5F5F0]" },
      { name: "Cobalt Bio-Gel", hex: "#0038FF", bgClass: "bg-[#0038FF]" },
      { name: "Deep Charcoal", hex: "#1C1D21", bgClass: "bg-[#1C1D21]" },
      { name: "Anodized Silver", hex: "#CBD5E1", bgClass: "bg-[#CBD5E1]" }
    ],
    typography: {
      headlineFont: "Syne Bold",
      bodyFont: "JetBrains Mono",
      specimen: "FORMULA № 04 // ACTIVE BIO-PEPTIDES [50ml 1.7 fl oz]"
    },
    beforeAfter: {
      title: "Packaging Evolution",
      beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Generic Bottle (Before)",
      afterImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Custom Sculpted Anodized (After)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608248597359-0a379555239a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Neura synthesizes marine active peptides. The packaging needed to communicate both rigorous molecular science and sensual daily luxury.",
    challenge: "Creating eco-conscious 100% recyclable mono-material aluminum containers while maintaining the tactile weight and elegance of heavy crystal glass.",
    solution: "Custom extruded matte aluminum cylinders with debossed dosage markers and screenprinted cobalt typography. The secondary cartons use 100% post-consumer cotton paper with zero glue folds.",
    impact: [
      { label: "Retail Placement", value: "Sephora & Dover Street Market" },
      { label: "Plastic Reduction", value: "-92% vs Competitors" },
      { label: "Dieline Award", value: "1st Place Sustainable Beauty" }
    ]
  },
  {
    id: "vortex-music-fest",
    title: "VORTEX 2026 — Kinetic Identity & Music Festival System",
    category: "typography",
    categoryLabel: "Type & Kinetic",
    client: "Vortex Sound Culture",
    year: "2025",
    role: "Creative Director & Motion Typography",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    summary: "Generative audio-reactive typography, silkscreen festival poster series, stage visuals, and dynamic digital ticketing passes.",
    deliverables: ["Generative Typography Engine", "Poster Campaign (12 Series)", "Stage LED Motion Loops", "Wristband & Merch Design", "Interactive Schedule Web App"],
    colors: [
      { name: "Acid Hyper-Lime", hex: "#CCFF00", bgClass: "bg-[#CCFF00]" },
      { name: "Pitch Black", hex: "#080808", bgClass: "bg-[#080808]" },
      { name: "Cyber Magenta", hex: "#FF007F", bgClass: "bg-[#FF007F]" },
      { name: "Electric Cyan", hex: "#00F0FF", bgClass: "bg-[#00F0FF]" }
    ],
    typography: {
      headlineFont: "Syne ExtraBold + Custom Distortion",
      bodyFont: "Space Grotesk Medium",
      specimen: "VORTEX AUDIOVISUAL // 3 DAYS // 44 ARTISTS // 120BPM TO ∞"
    },
    beforeAfter: {
      title: "Poster Evolution",
      beforeImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Standard Club Flyer (2023)",
      afterImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Generative Warp Identity (2026)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Vortex is an underground electronic music and digital arts festival held in a decommissioned concrete power plant in Leipzig. We created a live generative identity that responds in real-time to bass frequencies.",
    challenge: "Unifying 44 eclectic music acts across techno, ambient, and hyperpop under a singular, recognizable graphic language that feels alive.",
    solution: "We programmed custom GLSL shaders that deform letterforms into soundwave topography. These kinetic assets were printed on neon silkscreen posters and animated across 300-foot LED stage displays.",
    impact: [
      { label: "Tickets Sold Out", value: "35,000 in 6 mins" },
      { label: "Poster Awards", value: "Tokyo TDC Annual 2025" },
      { label: "Viral Impressions", value: "4.8M on TikTok & IG" }
    ]
  },
  {
    id: "solaris-editorial",
    title: "SOLARIS — Architectural Monograph & Exhibition Catalogue",
    category: "editorial",
    categoryLabel: "Editorial & Print",
    client: "Bauhaus Archive & Solaris Studio",
    year: "2024",
    role: "Editorial Art Director & Book Designer",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    summary: "380-page hardcover architectural monograph featuring Swiss grid layouts, tipped-in tracing papers, and exposed Smyth-sewn binding.",
    deliverables: ["380-Page Hardcover Book", "Swiss Grid System", "Exhibition Typography", "Foil-Stamped Slipcase", "Print Production Oversight"],
    colors: [
      { name: "Unbleached Cotton", hex: "#F3ECE1", bgClass: "bg-[#F3ECE1]" },
      { name: "Architectural Vermilion", hex: "#E63946", bgClass: "bg-[#E63946]" },
      { name: "Concrete Grey", hex: "#4A4E69", bgClass: "bg-[#4A4E69]" },
      { name: "Carbon Ink", hex: "#1A1A1A", bgClass: "bg-[#1A1A1A]" }
    ],
    typography: {
      headlineFont: "Instrument Serif Italic",
      bodyFont: "Space Grotesk Regular",
      specimen: "SOLARIS: The Architecture of Light & Concrete // Vol. IV"
    },
    beforeAfter: {
      title: "Editorial Layout Architecture",
      beforeImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Standard Catalog Layout",
      afterImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Modular 12-Column Swiss Grid"
    },
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A retrospective celebrating 25 years of brutalist and neo-modernist residential architecture across the Mediterranean. Printed with Fedrigoni Materica papers.",
    challenge: "Balancing monumental photography with dense structural blueprints, essays, and architectural drawings without visual clutter.",
    solution: "A bespoke 12-column asymmetric grid paired with Japanese open spine binding, allowing the heavy 380-page volume to lay completely flat on any page.",
    impact: [
      { label: "Book Production", value: "3,000 Limited Print Run" },
      { label: "Recognition", value: "50 Books | 50 Covers Award" },
      { label: "Museum Stock", value: "MoMA, Tate Modern & Centre Pompidou" }
    ]
  },
  {
    id: "hyperion-ai",
    title: "HYPERION — Spatial Intelligence Brand & Digital Design",
    category: "digital",
    categoryLabel: "Digital & UI",
    client: "Hyperion Systems Inc.",
    year: "2025",
    role: "Lead Product Designer & Visual Identity",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    summary: "Future-forward brand identity, 3D asset library, interactive WebGL design system, and product interface for a spatial computing hardware startup.",
    deliverables: ["Brand System & 3D Logo", "Design Tokens & UI Kit", "Interactive 3D Product Site", "Hardware Decals & Iconography", "Motion Design System"],
    colors: [
      { name: "Deep Void", hex: "#0A0B0E", bgClass: "bg-[#0A0B0E]" },
      { name: "Electric Phosphor", hex: "#00FFA3", bgClass: "bg-[#00FFA3]" },
      { name: "Ultraviolet", hex: "#7B2CBF", bgClass: "bg-[#7B2CBF]" },
      { name: "Vapor White", hex: "#F8FAFC", bgClass: "bg-[#F8FAFC]" }
    ],
    typography: {
      headlineFont: "Syne SemiBold",
      bodyFont: "JetBrains Mono Regular",
      specimen: "HYPERION.OS // SPATIAL NEURAL RUNTIME v2.4"
    },
    beforeAfter: {
      title: "UI & Brand Identity Shift",
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Standard SaaS UI (Before)",
      afterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Spatial Glassmorphic System (After)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Hyperion is pioneering AI-native spatial perception headsets. We built a brand identity that reflects the convergence of physical optics and digital intelligence.",
    challenge: "Moving away from generic AI gradients to establish a distinct, authoritative hardware brand with tactile industrial credibility.",
    solution: "Constructed a holographic prism logo mark paired with high-contrast monochrome UI and phosphor accents. Implemented interactive 3D WebGL product configurations on the web.",
    impact: [
      { label: "Series A Raised", value: "$28 Million" },
      { label: "Site of the Day", value: "Awwwards & FWA" },
      { label: "Waitlist Signups", value: "120,000+ Users" }
    ]
  },
  {
    id: "metropole-brewery",
    title: "MÉTROPOLE — Artisanal Craft Brewery & Can Series",
    category: "packaging",
    categoryLabel: "Packaging & 3D",
    client: "Brasserie Métropole Paris",
    year: "2024",
    role: "Graphic Designer & Illustrator",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1608270192799-59e8f8d40f9f?auto=format&fit=crop&w=1200&q=80",
    summary: "Art-deco inspired geometric illustrations, screenprinted beer cans, branded tap handles, and bespoke coaster typography.",
    deliverables: ["6 Can Label Designs", "Custom Monogram", "Tap Handle System", "Merchandise Line", "Bar Signage"],
    colors: [
      { name: "Warm Terracotta", hex: "#C85A32", bgClass: "bg-[#C85A32]" },
      { name: "Cream Malt", hex: "#FFF6E5", bgClass: "bg-[#FFF6E5]" },
      { name: "Forest Hop", hex: "#1D3A2F", bgClass: "bg-[#1D3A2F]" },
      { name: "Matte Gold Foil", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" }
    ],
    typography: {
      headlineFont: "Syne ExtraBold",
      bodyFont: "Space Grotesk Regular",
      specimen: "MÉTROPOLE // BIÈRE ARTISANALE DE PARIS // 6.8% ABV"
    },
    beforeAfter: {
      title: "Label Design",
      beforeImage: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Standard Paper Label",
      afterImage: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Screenprinted Tactile Can Series"
    },
    gallery: [
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608270192799-59e8f8d40f9f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Brasserie Métropole is a microbrewery located in Belleville, Paris. The visual identity pays homage to early 20th-century Parisian modernist posters.",
    challenge: "Standing out in an oversaturated European craft beer market while maintaining premium pricing in boutique restaurants.",
    solution: "Tactile matte-touch metallic cans featuring modular geometric illustrations representing the brewing notes (yuzu, smoked malt, mosaic hops).",
    impact: [
      { label: "Production Volume", value: "350k Cans Sold" },
      { label: "Export Markets", value: "14 Countries" },
      { label: "Design Award", value: "Pentawards Bronze" }
    ]
  },
  {
    id: "syntax-records",
    title: "SYNTAX RECORDS — Vinyl Sleeve Packaging & Motion Posters",
    category: "typography",
    categoryLabel: "Type & Kinetic",
    client: "Syntax Sound Recordings",
    year: "2024",
    role: "Visual Identity & Vinyl Packaging",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=80",
    summary: "Experimental typographic vinyl record sleeves with die-cut outer jackets, holographic center labels, and augmented reality animated posters.",
    deliverables: ["12-Inch Gatefold Vinyl", "Die-Cut O-Card Sleeve", "AR Animated Posters", "Digital EP Artwork", "Record Label Identity"],
    colors: [
      { name: "High-Gloss Black", hex: "#050505", bgClass: "bg-[#050505]" },
      { name: "Prismatic Silver", hex: "#E0E7FF", bgClass: "bg-[#E0E7FF]" },
      { name: "Acid Tangerine", hex: "#FF4D00", bgClass: "bg-[#FF4D00]" }
    ],
    typography: {
      headlineFont: "Syne Black",
      bodyFont: "JetBrains Mono",
      specimen: "SYNTAX // LP-009 // 33⅓ RPM STEREO HI-FI"
    },
    beforeAfter: {
      title: "Vinyl Packaging Structure",
      beforeImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Standard Cardboard Jacket",
      afterImage: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Die-Cut Prismatic Gatefold"
    },
    gallery: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Syntax is an independent imprint curating ambient modular synthesizer compositions. We crafted a tactile vinyl package that invites exploration.",
    challenge: "Creating a packaging system that feels like a rare collector's artifact rather than commercial merchandise.",
    solution: "Engineered a layered die-cut sleeve revealing spinning typographic patterns as the vinyl is pulled from the jacket.",
    impact: [
      { label: "Vinyl Pressing", value: "Sold Out 5,000 Units" },
      { label: "Featured In", value: "It's Nice That & Pitchfork" }
    ]
  },
  {
    id: "botanica-editorial",
    title: "BOTANICA LABS — Sustainable Identity & Field Guide",
    category: "brand-identity",
    categoryLabel: "Brand Identity",
    client: "Botanica Herbarium",
    year: "2024",
    role: "Brand Strategist & Art Director",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    summary: "Organic brand identity, botanical illustration systems, recycled seed paper business cards, and comprehensive sustainability guidelines.",
    deliverables: ["Visual Identity System", "Botanical Illustration Kit", "Seed Paper Stationery", "E-Commerce Guidelines"],
    colors: [
      { name: "Sage Moss", hex: "#3A5A40", bgClass: "bg-[#3A5A40]" },
      { name: "Clay Ochre", hex: "#DDA15E", bgClass: "bg-[#DDA15E]" },
      { name: "Seed Paper Cream", hex: "#FEFAE0", bgClass: "bg-[#FEFAE0]" }
    ],
    typography: {
      headlineFont: "Instrument Serif",
      bodyFont: "Space Grotesk Light",
      specimen: "BOTANICA // Wild Harvested Botanicals from the Alpine Slopes"
    },
    beforeAfter: {
      title: "Identity Refinement",
      beforeImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      beforeLabel: "Old Botanical Logo",
      afterImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=80",
      afterLabel: "Modern Organic System"
    },
    gallery: [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Organic skincare formulated from alpine flora. We created an earthy yet elevated visual identity with plantable packaging.",
    challenge: "Communicating ecological authenticity without looking like typical rustic hippie packaging.",
    solution: "Harmonized classic botanical engravings with ultra-clean modern Swiss typography on 100% recycled cotton seed paper.",
    impact: [
      { label: "Carbon Neutral", value: "100% Certified" },
      { label: "Revenue Growth", value: "+210% Year One" }
    ]
  }
];

export const services = [
  {
    number: "01",
    title: "Brand Identity Systems",
    subtitle: "From core philosophy to complete visual language",
    description: "I craft distinctive, systematic identities that translate across physical packaging, digital interfaces, and spatial environments. Every identity includes custom wordmarks, color logic, grid architectures, and comprehensive brand guidelines.",
    deliverables: ["Logomark & Monogram Systems", "Typography & Type Pairing Guidelines", "Color Palette Logic & Tokens", "Brand Books & Style Guides", "Asset Handover & Component Kits"],
    icon: "Layers"
  },
  {
    number: "02",
    title: "Editorial & Publication Design",
    subtitle: "Monographs, artist catalogues & tactile print systems",
    description: "Deep appreciation for paper stock, tactile finishes, foil stamping, and rigorous Swiss grid typography. I design books, magazines, lookbooks, and annual reports that people keep for decades.",
    deliverables: ["Hardcover & Softcover Monographs", "Exhibition Catalogues & Lookbooks", "Grid Systems & Micro-Typography", "Print Production & Paper Sourcing", "Foil, Emboss & Die-Cut Specs"],
    icon: "BookOpen"
  },
  {
    number: "03",
    title: "Packaging & 3D Form",
    subtitle: "Sustainable, structural & unboxing experiences",
    description: "Translating brand stories into tangible 3D objects. From bespoke cosmetics bottles and luxury boxes to consumer craft goods, I design dielines, material finishes, and shelf-dominating silhouettes.",
    deliverables: ["Structural Dieline Engineering", "Luxury Unboxing Experiences", "Sustainable Mono-Material Specs", "Foil Stamping & Screenprint Proofs", "Photorealistic 3D Renders"],
    icon: "Package"
  },
  {
    number: "04",
    title: "Custom Type & Kinetic Graphics",
    subtitle: "Proprietary typefaces & sound-reactive motion",
    description: "Designing bespoke display typefaces, variable fonts, kinetic poster campaigns, and audio-reactive stage loops that give brands a singular, irreplicable voice.",
    deliverables: ["Custom Display Typefaces & Font Files", "Variable OpenType Features", "Kinetic Typography Loops", "Silk-Screen Poster Series", "Audio-Reactive Stage Visuals"],
    icon: "Type"
  },
  {
    number: "05",
    title: "Digital Art Direction & Web",
    subtitle: "Immersive, typography-first web experiences",
    description: "Bridging print-grade graphic design with modern web technologies. I design interactive web portfolios, e-commerce brand worlds, and WebGL showcases that feel alive.",
    deliverables: ["Creative Web Art Direction", "Interactive Prototypes in Figma", "Design Systems & Token Architecture", "Micro-Interactions & Animation Specs", "Creative Dev Consultation"],
    icon: "Sparkles"
  }
];

export const processSteps = [
  {
    step: "01",
    phase: "Discovery & Deconstruction",
    duration: "Week 1",
    title: "Uncovering the Core Truth",
    description: "We dissect your business model, audience psychology, competitive landscape, and cultural touchpoints. We align on visual moodboards and strategic design principles before drawing a single line.",
    keyActions: ["Stakeholder Interviews", "Visual Audit & Competitor Mapping", "Strategic Moodboards & Tone Positioning", "Design Principles Document"]
  },
  {
    step: "02",
    phase: "Exploration & Prototyping",
    duration: "Week 2 - 3",
    title: "Radical Concept Directions",
    description: "I develop 2 to 3 distinct, fully realized visual directions. Each route is shown in real-world contexts: on giant billboards, tactile packaging mockups, book covers, and responsive screen prototypes.",
    keyActions: ["Custom Type Specimen Drafting", "Logo & Monogram Variations", "Real-World Context Mockups", "Interactive Prototype Walkthrough"]
  },
  {
    step: "03",
    phase: "Refinement & Systematic Craft",
    duration: "Week 4 - 5",
    title: "Engineering the Brand Ecosystem",
    description: "Once the winning direction is selected, we stress-test and refine every micro-detail: vector bezier curves, grid math, color contrast ratios, packaging dielines, and print production specs.",
    keyActions: ["Vector Kerning & Precision Tuning", "Packaging Dieline Testing", "Color Formulation (Pantone/CMYK/RGB)", "Comprehensive Brand Guidelines Book"]
  },
  {
    step: "04",
    phase: "Production & Handover",
    duration: "Week 6",
    title: "Flawless Delivery & Launch",
    description: "You receive organized production-ready master assets in all standard formats (AI, EPS, SVG, OTF, WOFF2, PDF/X-4), plus direct coordination with your print houses or engineering teams.",
    keyActions: ["Master Production Asset Export", "Font Licensing & Webfont Packages", "Printer File Sign-Off", "30-Day Post-Launch Studio Support"]
  }
];

export const awards = [
  { year: "2025", title: "Red Dot Best of the Best", org: "Red Dot Design Awards", project: "Kronos Modular Identity" },
  { year: "2025", title: "Tokyo TDC Annual Book", org: "Tokyo Type Directors Club", project: "Vortex Kinetic Typography" },
  { year: "2024", title: "Site of the Day & Developer Award", org: "Awwwards", project: "Hyperion Spatial OS" },
  { year: "2024", title: "50 Books | 50 Covers Award", org: "AIGA & Design Observer", project: "Solaris Architectural Monograph" },
  { year: "2024", title: "Brand New Best Identity Award", org: "UnderConsideration", project: "Neura Biotechnology Packaging" },
  { year: "2023", title: "Type Directors Club NY Certificate", org: "TDC New York", project: "Syntax Monospace Font" }
];

export const testimonials = [
  {
    quote: "Cai has a rare ability to translate complex technological abstractions into a visually stunning, emotionally resonant graphic language. The Kronos rebrand sold out our entire first run in 48 hours.",
    author: "Maximilian Vane",
    role: "Founder & Creative Director",
    company: "Kronos Atelier Switzerland",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Cai was the smoothest collaboration of my career. The 380-page monograph he designed for the Bauhaus Archive is currently in MoMA and Tate Modern bookshops. Immaculate attention to typography and paper craft.",
    author: "Dr. Elena Rostova",
    role: "Head Curator",
    company: "Bauhaus Archive Foundation",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Our Series A investors specifically praised our visual identity and hardware packaging. Cai didn't just design a logo; he gave our spatial AI platform a memorable soul that outclasses Silicon Valley giants.",
    author: "Darius Thorne",
    role: "CEO & Co-Founder",
    company: "Hyperion Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const clientLogos = [
  { name: "Aesop", tag: "Retail & Packaging" },
  { name: "MoMA", tag: "Museum & Exhibition" },
  { name: "Nike Lab", tag: "Brand Identity" },
  { name: "Stripe Press", tag: "Editorial Design" },
  { name: "Kith", tag: "Art Direction" },
  { name: "Teenage Engineering", tag: "Custom Type" },
  { name: "Monocle", tag: "Print Publishing" },
  { name: "Vogue Scandinavia", tag: "Editorial Layout" }
];

export const designTools = [
  { name: "Adobe Illustrator", level: "Master", category: "Vector & Identity" },
  { name: "Adobe InDesign", level: "Master", category: "Editorial & Grid Systems" },
  { name: "Adobe Photoshop", level: "Master", category: "Retouching & Textures" },
  { name: "Glyphs 3", level: "Advanced", category: "Custom Type Design" },
  { name: "Figma", level: "Master", category: "Digital & Design Systems" },
  { name: "Blender 3D", level: "Proficient", category: "Packaging & 3D Form" },
  { name: "Cinema 4D / Octane", level: "Proficient", category: "Motion & Renders" },
  { name: "After Effects", level: "Advanced", category: "Kinetic Typography" }
];

export const estimatorOptions = {
  projectTypes: [
    { id: "identity", label: "Full Brand Identity System", baseDays: 28, basePrice: 6500 },
    { id: "packaging", label: "Packaging & Structural Design", baseDays: 21, basePrice: 4800 },
    { id: "editorial", label: "Book / Monograph / Editorial Print", baseDays: 24, basePrice: 5200 },
    { id: "typography", label: "Custom Display Font / Type System", baseDays: 18, basePrice: 3800 },
    { id: "digital", label: "Creative Art Direction & Web UI", baseDays: 25, basePrice: 5900 }
  ],
  deliverables: [
    { id: "guidelines", label: "Comprehensive Brand Guidelines (PDF & Web)", price: 1200, days: 5 },
    { id: "font", label: "Custom Monospace / Display Font (OTF/WOFF2)", price: 2000, days: 7 },
    { id: "3d", label: "Photorealistic 3D Renders & Product Animations", price: 1500, days: 4 },
    { id: "motion", label: "Kinetic Logo & Social Motion Loops", price: 1100, days: 3 },
    { id: "print", label: "Printer Coordination & Sample Press Check", price: 800, days: 3 },
    { id: "merch", label: "Merchandise & Stationery Extension Kit", price: 950, days: 3 }
  ],
  timelines: [
    { id: "standard", label: "Standard Studio Pace (4–6 Weeks)", multiplier: 1.0 },
    { id: "priority", label: "Priority Fast-Track (2–3 Weeks)", multiplier: 1.35 },
    { id: "rush", label: "Express Sprint (< 2 Weeks)", multiplier: 1.7 }
  ]
};
