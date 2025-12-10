export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Plywood' | 'Doors';
  subcategory?: string;
  description: string;
  thicknesses: string[];
  specifications: string[];
  keyFeatures: string[];
  primaryUses: string;
  image: string;
  badge?: string;
  faq?: { question: string; answer: string }[]; 
}

export const products: Product[] = [
  // PLYWOOD CATEGORY
  {
    id: 'ananta',
    name: 'ANANTA – Premium Marine BWP Plywood',
    tagline: 'Endless Strength-  Structural | High Load | Moisture-Prone Areas',
    category: 'Plywood',
    subcategory: 'Built for extreme moisture, Designed to last a lifetime.',
    description: 'Ananta is a premium marine-grade plywood made for strength, stability, and long life where regular plywood fails. It is designed to handle dialy moisture, heavy loads, steam, and long-term use without swelling, bending, or weakening. If the requirement is high performance with zero compromises, Ananta is the solution.',
    thicknesses: ['19 mm', '16 mm', '12 mm', '9 mm', '6 mm'],
    specifications: [
      'Surface: 100% Calibrated | Smooth Finish',
      'Grade: BWP Marine (Boiling Waterproof)',
      'Bonding: Phenol Formaldehyde (PF) marine bonding',
      'Core Material: High-density Hardwood Core (Gurjan Face)',
      'Pressing: Advanced 5-Press Technology Calibrated for even thickness',
      'Structure: 15 Layers with Zero Core & Pin Gaps',
      'Water Resistance: 100% waterproof',
      'Treatment: Anti-termite & anti-borer treated',
      'Standards: IS:710 & IS:10701 compliant | Structural Performance',
      'Emission Level: E0 Grade (Low Emission)',
      
      'Special: Anti-viral & Anti-bacterial surface protection',
      
      'Warranty: Lifetime Guarantee against manufacturing defects.',
    ],
    keyFeatures: [
      'Grade: 100% BWP Marine Plywood (IS:710)',
      'Warranty: Lifetime Guarantee on Core & Delamination',
      'Core: 100% hardwood (Gurjan-based structure)',
      'Water Resistance: 100% Fully Boiling Waterproof',
      'Calibration: Multi-press calibrated for uniform thickness',
      'Protection: Termite & Borer Proof Treated',
      'Environment: Low-emission, interior-safe bonding',
      'Technology: 5-Press Manufacturing Technology',
      'Emission: E0 Grade Certified (Safe for Indoors)',
      'Structure: 15 Layers | Zero Core Gaps | Zero Pin Gaps.',
    ],
    primaryUses: 'Structural joinery, heavy furniture, load-bearing panels',
    image: 'https://images.unsplash.com/photo-1554230253-017daba2b631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGx5d29vZCUyMHdvb2QlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MTk5MjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Premium',
    faq: [
  {
    question: "Is Ananta suitable for kitchens and bathrooms?",
    answer: "Yes, it is fully boiling waterproof and ideal for wet areas."
  },
  {
    question: "Does Ananta swell or bend over time?",
    answer: " No, Zero core gaps and hardwood core prevent swelling."
  },
  {
    question: "Is this plywood safe for indoor use?",
    answer: " Yes, It is E0 grade certified with low emission adhesives."
  },
   {
    question: "Can it be used for heavy furniture?",
    answer: "Yes, 15-layer construction supports high load applications."
  },
   {
    question: "What makes Ananta different from other marine plywood?",
    answer: "  5-press technology, lifetime warranty, and zero core gaps."
  },
   {
    question: "Is Ananta termite-proof?",
    answer: " Yes, it is chemically treated against termites & borers."
  },
   {
    question: "Is calibration important?",
    answer: " Yes, Calibrated sheets ensure even thickness and smooth finishing."
  },
   {
    question: "Is this suitable for commercial projects?",
    answer: " Yes, It is E0 grade certified with low emission adhesives."
  },
   {
    question: "Is this plywood safe for indoor use?",
    answer: "Absolutely, It is widely used in hotels, offices & retail interiors."
  },
]

  },
  {
    id: 'agni',
    name: 'Agni',
    tagline: 'The Power Built',
    category: 'Plywood',
    subcategory: 'Fire-Retardant Marine Grade | Lifetime Warranty',
    description: 'Designed for safety-first projects. Agni combines fire resistance with marine-grade protection, perfect for public and commercial spaces.',
    thicknesses: ['19 mm', '16 mm', '12 mm', '9 mm', '6 mm'],
    specifications: [
      'FRIE RETARDANT',
      'CALIBRATED SURFACE',
      'LIFE TIME GUARANTEE',
      'GURJAN FACE 100%',
      'BOILING WATERPROOF 100%',
      'BWP 710 MARINE GRADE',
      'E 0 CRAB CERTIFIED',
      '5 PRESS TECHNOLOGY',
      'IS: 5509',
      'TERMITE PROOF & BORER PROOF',
      'ANTI- VIRAL & ANTI- BACTERIAL COVERING',
    ],
    keyFeatures: [
      'Fire retardant (IS: 5509)',
      'Gurjan face veneers (100%)',
      'Calibrated surface finish',
      'Termite & moisture resistant',
      'Lifetime guarantee on bonding',
    ],
    primaryUses: 'Public interiors, commercial fit-outs, safety-sensitive installations',
    image: 'https://images.unsplash.com/photo-1720861985952-8fbd5122b34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwcmVzaXN0YW50JTIwcGx5d29vZHxlbnwxfHx8fDE3NjE5OTIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Fire Safe',
  },
  {
    id: 'bhima',
    name: 'Bhima',
    tagline: 'The Legend',
    category: 'Plywood',
    subcategory: 'Heavy-Duty Marine BWP Grade | Lifetime Warranty',
    description: 'Made for load-heavy, high-impact, and long-term use. Bhima offers rock-solid performance in demanding environments.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    specifications: [
      'LIFE TIME GUARANTEE',
      'GURJAN FACE 100%',
      '4 PRESS TECHNOLOGY',
      'FULLY CALIBRATED',
      'E 0 CRAB CERTIFIED',
      'BOILING WATERPROOF 100%',
      'TERMITEPROOF & BORER PROOF',
      'BWP IS: 710 MARINE GRADE',
    ],
    keyFeatures: [
      'Fully calibrated for precision tolerance',
      '100% boiling waterproof',
      'Gurjan face 100%',
      'Termite & borer proof',
      'Lifetime durability promise',
    ],
    primaryUses: 'Marine interiors, exterior decking sublayers, wet areas',
    image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBncmFkZSUyMHBseXdvb2R8ZW58MXx8fHwxNzYxOTkyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Marine Grade',
  },
  {
    id: 'samrat',
    name: 'Samrat',
    tagline: 'Supreme Quality',
    category: 'Plywood',
    subcategory: 'BWP Marine Grade | 30-Year Warranty',
    description: 'Reliable, durable, and perfect for everyday interiors. Samrat balances performance and value, making it a favorite for homes and offices.',
    thicknesses : ['6mm', '9mm', '12mm', '16mm', '19mm'],
    specifications: [
      '30 YEARS WARRANTY',
      'ISI: 710 BWP MARINE GRADE',
      'E 0 FORMALDEHYDE EMISSION LEVEL',
      'QUADRUPLE 4 TIME PRESSED',
      'DOUBLE SIDE CALIBRATED',
      'ANTI TERMITE & BORER',
      'TERMITE PROOF',
      'BORER & FUNGAL PROOF',
      'GURJAN FACE 100%',
    ],
    keyFeatures: [
      'BWP IS: 710 certified (marine grade)',
      'EO emission level (low VOC)',
      'Quadruple pressing for improved bonding',
      'Double-side calibration for perfect finishing',
      '30-year warranty on structural integrity',
    ],
    primaryUses: 'Luxury furniture, premium cabinetry, architectural panels',
    image: 'https://images.unsplash.com/photo-1761294364419-fcbfe2059dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwdmVuZWVyfGVufDF8fHx8MTc2MTk5MjIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller',
  },
  {
    id: 'vajra',
    name: 'Vajra',
    tagline: 'The Unbreakable',
    category: 'Plywood',
    subcategory: 'High-Density BWR Grade | 15-Year Warranty',
    description: 'A strong, impact-resistant sheet built for dry and semi-moist interiors. A dependable choice for wardrobes and home furniture.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    specifications: [
      '20 YEARS WARRANTY',
      'ISI: 710 BWP MARINE GRADE',
      'E 1 FORMALDEHYDE EMISSION LEVEL',
      'QUADRUPLE 4 TIME PRESSED',
      'DOUBLE SIDE CALIBRATED',
      'ANTI TERMITE & BORER',
      'TERMITE PROOF',
      'BORER & FUNGAL PROOF',
      'GURJAN FACE 100%',
    ],
    keyFeatures: [
      'IS: 710 BWP marine grade',
      'Quad core pressing technology',
      'Anti-termite and anti-fungal protection',
      'Double-side calibration',
      '20-year warranty',
    ],
    primaryUses: 'Heavy-use interiors, institutional furniture, specialist installations',
    image: 'https://images.unsplash.com/photo-1638726302618-d1d33ab13266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmVkJTIwd29vZCUyMHBhbmVsc3xlbnwxfHx8fDE3NjE5OTIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'ujval',
    name: 'Ujval',
    tagline: 'Radiant',
    category: 'Plywood',
    subcategory: 'Decorative BWR Grade | 10-Year Warranty',
    description: 'Beautiful, smooth, and easy to finish. Ujval gives interiors a premium look with dependable performance making it a top choice for feature walls and cabinetry.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    specifications: [
      '10 YEARS WARRANTY',
      'IS: 303 GRADE',
      'ANTI TERMITE & ANTI BORER',
      'QUAD CORE PRESS TECHNOLOGY',
      'VACUUM PRESSURE CHEMICAL TREATMENT',
      'ANTI FUNGAL & ANTI BACTERIAL',
      'PRECISION CALIBRATION TECHNOLOGY',
    ],
    keyFeatures: [
      'IS: 303 Grade',
      'Vacuum pressure chemical treatment',
      'Anti-termite & anti-bacterial',
      'Precision calibration technology',
      '10-year warranty',
    ],
    primaryUses: 'Feature walls, cabinetry, retail interiors',
    image: 'https://images.unsplash.com/photo-1631669394390-baf737ef47de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBseXdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYxOTkyMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  // DOORS CATEGORY
  {
    id: 'block-board',
    name: 'Block Board',
    tagline: 'BWP Grade',
    category: 'Doors',
    subcategory: 'High-Stability Panels | Lifetime Warranty',
    description: 'Lightweight, stable, and ideal for tall or large vertical structures and look great in homes and offices that require durability and strength.',
    thicknesses: ['16MM', '19MM', '25MM', '30MM' ],
    specifications: [
      'IS: 1659 BWR GRADE',
      'SOLID WOOD CORE STRIPS',
      'DIMENSIONAL STABILITY',
      'MOISTURE RESISTANT',
      'WARP RESISTANT',
      'TERMITE & BORER PROOF',
      'PRECISION CALIBRATED',
      'HEAVY-DUTY CONSTRUCTION',
    ],
    keyFeatures: [
      'BWR IS: 1659 grade',
      'Solid wood core for stability',
      'Moisture and warp resistant',
      'Available thickness: 16–25 mm',
      'Perfect for door construction',
      'Heavy-duty load-bearing',
    ],
    primaryUses: 'Doors, partitions, heavy furniture cores',
    image: 'https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2JvYXJkJTIwY29yZSUyMHBhbmVsc3xlbnwxfHx8fDE3NjE5OTIyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Core Panels',
  },
  {
    id: 'flush-doors',
    name: 'Flush Doors',
    tagline: 'BWP Grade',
    category: 'Doors',
    subcategory: 'Premium Door Shutters | Lifetime Warranty',
    description: 'Made for long-lasting strength and stability, these doors stay firm, resist warping, and look great in homes.',
    thicknesses: ['30mm', '32mm', '35mm', '38mm', '45mm'],
    specifications: [
      'IS: 2202 CERTIFIED',
      'BWP GRADE CORE',
      'TERMITE & BORER RESISTANT',
      'HIGH-DENSITY ENGINEERED CORE',
      'SMOOTH SURFACE FINISH',
      'PRECISION CALIBRATED',
      'MOISTURE RESISTANT',
      'WARP RESISTANT CONSTRUCTION',
    ],
    keyFeatures: [
      'BWP IS: 2202 certified',
      'Boiling waterproof core',
      'Termite & borer resistant',
      'Available thickness: 30–40 mm',
      'High-density engineered core',
      'Smooth surface finish',
    ],
    primaryUses: 'Residential doors, commercial entry doors, interior partitions',
    image: 'https://images.unsplash.com/photo-1695119278258-3cd6f8b7eaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmbHVzaCUyMGRvb3JzfGVufDF8fHx8MTc2MTk5MjIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Popular',
  },
  {
  id: 'plywood-premium',
  name: 'Premium Plywood',
  tagline: 'Durability Meets Design',
  category: 'Plywood',
  subcategory: 'Premium',
  description: 'High-quality premium plywood with superior strength, moisture resistance, and smooth finish, ideal for furniture, cabinets, and interior applications.',
  thicknesses: ['6MM', '9MM', '12MM', '18MM', '25MM'],
  specifications: [
    'IS: 303 CERTIFIED',
    'BWR GRADE CORE',
    'TERMITE & MOISTURE RESISTANT',
    'HIGH-DENSITY VENEER CORE',
    'SMOOTH LAMINATED SURFACE',
    'PRECISION CUT AND CALIBRATED',
    'ECO-FRIENDLY ADHESIVE',
  ],
  keyFeatures: [
    'Premium grade BWR core',
    'Waterproof and termite resistant',
    'Smooth finish for furniture & interiors',
    'High dimensional stability',
    'Eco-friendly adhesives used',
  ],
  primaryUses: 'Furniture, cabinets, interior panels, doors',
  image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBncmFkZSUyMHBseXdvb2R8ZW58MXx8fHwxNzYxOTkyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  badge: 'Best Seller',
}

];

export const categories = ['All', 'Plywood', 'Doors'];
export const plywoodSubcategories = ['All Plywood', 'Structural', 'Fire-Resistant', 'Marine', 'Premium', 'Resilient', 'Interior', 'Core Panels'];
