export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Plywood' | 'Doors';
  subcategory?: string;
  description: string;
 shortDescription?: string;
  thicknesses: string[];
  specifications: string[];
  keyFeatures: string[];
  primaryUses: string;
  image: string;
  badge?: string;
  faq?: { question: string; answer: string }[];
  applications?: string[];          // <-- New field
  downloads?: { name: string; url: string; size: string }[]; // <-- New field
   realLifeExamples?: string[]; // <-- Add this
  thicknessDetails?: {              // Optional, per thickness
    thickness: string;
    commonSize: string;
    bestApplication: string;
    
  }[];
   grade?: string;      // <-- NEW
  warranty?: string;   // <-- NEW
  standards?: string;  // <-- NEW
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
    grade: 'BWP Marine',               // <-- NEW
  warranty: 'Lifetime Guarantee',    // <-- NEW
  standards: 'IS:710 | IS:10701',    // <-- NEW
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
      'Warranty: Lifetime Guarantee on Core ',
      'Core: 100% hardwood (Gurjan-structure)',
      'Water Resistance: 100% Fully Boiling Waterproof',
      'Calibration: Multi-press calibrated for uniform thickness',
      'Protection: Termite & Borer Proof Treated',
      'Environment: Low-emission, interior-safe bonding',
      'Technology: 5-Press Manufacturing Technology',
      'Emission: E0 Grade Certified (Safe for Indoors)',
      'Structure: 15 Layers | Zero Core Gaps | Zero Pin Gaps.',
    ],
    primaryUses: 'Structural joinery, heavy furniture, load-bearing panels',
    applications: [
    "Modular Kitchens",
    "Bathroom Cabinets & Vanities",
    "Heavyduty Furniture & Wardrobes",
    "Commercial Interiors",
    "Hotels, Restaurants & Cafés",
    "High-humidity & Wet Zones"
  ],
   realLifeExamples: [
    "Used in homes where kitchens face daily steam & spills",
    "Chosen for commercial restaurants with heavy daily usage",
    "Preferred for commercial interiors needing long-term stability"
  ],
  
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
    { name: 'Certification Docs', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
    { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Heavy furniture, structural work' },
    { thickness: '16mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Cabinets, shelves' },
     { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Door panels, partitions' },
      { thickness: '9mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Decorative panels, light furniture' },
       { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Veneering, curved & light work' },
    
  ],
  
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
    name: 'AGNI – Fire-Retardant Marine Grade Plywood',
    tagline: 'The Power Built  -  Fire-Safe | Structural | High-Risk & Commercial Areas',
    category: 'Plywood',
    subcategory: 'Designed To Resist Fire, Built To Protect Lives And Spaces.',
    description: 'AGNI is a fire-retardant marine-grade plywood developed for spaces where fire safety is critical. It is engineered to slow flame spread, reduce smoke, and maintain structural stability during fire exposure.Along with fire safety, AGNI also offers marine-grade durability, strength, and moisture resistance, making it ideal for commercial, public, and high-risk interiors.When safety cannot be compromised, AGNI is the reliable choice.',
    thicknesses: ['19 mm', '16 mm', '12 mm', '9 mm', '6 mm'],
    grade: 'Fire-Retardant Marine Plywood',               // <-- NEW
  warranty: 'Lifetime Guarantee',    // <-- NEW
  standards: 'IS:5509 | IS:710', 
    specifications: [
      'Surface: Fully calibrated, smooth finish',

'	Grade: Fire-Retardant + BWP Marine Grade',

'Bonding: Phenol Formaldehyde (PF) Marine Resin',

'	Core Material: High-density hardwood core (Gurjan Face)',

'Pressing: Multi-press calibrated manufacturing',

'Structure: Multi-layer construction with zero gaps',

'Fire Performance: Flame spread resistance as per IS standards',

'Smoke: Reduced smoke emission',

'Moisture Resistance: Marine-grade waterproof performance',

'Treatment: Anti-termite & anti-borer',
'Standards: IS:5509 (Fire) | IS:710 (Marine)',

'Emission Level: E0 Grade (Low emission)',


    ],
    keyFeatures: [
      '	Fire-Retardant Marine Grade Plywood',
'Lifetime Guarantee on core & delamination',
'Fire-Guard technology slows flame spread',
'Low smoke emission during fire exposure',
'Marine-grade waterproof bonding',
'100% hardwood core with Gurjan face',
'Termite & borer proof treated',
'Multi-press calibrated thickness',
'Low-emission, indoor-safe adhesive',
'E0 grade certified',
'Zero core gaps & pin gaps',
'Stable structure even under heat stress.',

    ],
    primaryUses: 'Public interiors, commercial fit-outs, safety-sensitive installations',
    applications: [
    'Commercial buildings',
'	Hospitals & healthcare facilities',
'	Schools, colleges & institutions',
'Hotels, theatres & auditoriums',
'Office interiors & conference rooms',
'	Kitchens requiring fire-safe materials',


  ],
   realLifeExamples: [
    "Used in hospitals where fire compliance is mandatory",
    "Chosen for office interiors to meet safety regulations",
    "Preferred in hotels & theatres where public safety comes first"
  ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'Fire-Safety Certification Documents', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Heavy commercial furniture, partitions' },
    { thickness: '16mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Office cabinets, workstations' },
    { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wall panels, door shutters' },
    { thickness: '9mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'False ceilings, panelling' },
    { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Decorative & lightweight uses' },
  
  ],
    image: 'https://images.unsplash.com/photo-1720861985952-8fbd5122b34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwcmVzaXN0YW50JTIwcGx5d29vZHxlbnwxfHx8fDE3NjE5OTIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Fire Safe',
    faq: [
  {
    question: "Is AGNI really fire-retardant?",
    answer: "Yes. It is treated with fire-retardant chemicals that slow flame spread and reduce smoke."
  },
  {
    question: "Does AGNI stop fire completely?",
    answer: " No plywood can stop fire fully, but AGNI delays ignition and spread, allowing more response time."
  },
  {
    question: "Is AGNI waterproof like marine plywood?",
    answer: "Yes. It also meets BWP marine standards for moisture resistance."
  },
   {
    question: "Can AGNI be used in kitchens?",
    answer: "Yes. It is ideal for kitchens where both fire and moisture are concerns."
  },
   {
    question: "Is AGNI safe for indoor use?",
    answer: "   Yes. It is E0 grade with low emission, safe for enclosed spaces."
  },
   {
    question: "Is AGNI termite-proof?",
    answer: "Yes. It is fully treated against termites and borers."
  },
   {
    question: "Does fire-retardant treatment reduce strength?",
    answer: " No. AGNI maintains structural strength along with fire safety."
  },
   {
    question: "Is AGNI suitable for commercial projects?",
    answer: "  Absolutely. It is widely specified for regulated commercial and public spaces."
  },

]
  },
  {
    id: 'bhima',
    name: 'BHIMA – Heavy Duty Marine BWP Plywood',
    tagline: 'The Legend -  Structural Strength | Wet & Load-Intensive Use',
    category: 'Plywood',
    subcategory: 'Made for weight, water, and years of use.',
    description: 'Bhima is a heavy-duty marine plywood built for projects where strength matters as much as moisture resistance. It is designed for areas that carry load, face water exposure, and cannot afford bending, cracking, or early failure.Bhima is chosen when performance is non-negotiable and long life is expected.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    grade: 'BWP Marine',               // <-- NEW
  warranty: 'Lifetime Guarantee',    // <-- NEW
  standards: 'IS:710 | Structural Grade', 
    specifications: [
      'Grade: BWP Marine (Boiling Waterproof)',
'Bonding: Marine-grade phenolic resin',
'Core: High-density hardwood core',
'Structure: Multi-layer construction with zero gaps',
'Calibration: Uniform thickness across the sheet',
'Water Resistance: 100% boiling waterproof',
'Protection: Termite & borer treated',
'Emission: Low-emission, interior-safe bonding',


    ],
    keyFeatures: [
      '	100% BWP Marine Grade plywood',
'	Lifetime warranty on core and bonding',
'	High-density hardwood core',
'	Fully boiling waterproof',
'	Strong screw and nail holding',
'	Termite & borer treated',
'	Calibrated thickness for stable finishing',
'	Low-emission adhesive – safe for interiors',


    ],
    applications: [
    '	Modular kitchens',
'Heavy wardrobes',
'Bed bases & storage units',
'Commercial furniture',
'Retail interiors',
'Office workstations',
  ],
   realLifeExamples: [
    "	Used for wardrobes carrying full-height storage",
"	Preferred in kitchens with heavy shutters and fittings",
"	Installed in commercial furniture needing daily use strength",


  ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'Certifications', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Heavy furniture, load-bearing areas' },
    { thickness: '16mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wardrobes, cabinets, storage units' },
    { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Panels, partitions' },
    { thickness: '9mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Light furniture' },
    { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Decorative and support applications' },
  
  ],
  faq: [
  {
    question: "Is Bhima suitable for kitchens?",
    answer: "Yes. It is fully waterproof and handles heavy usage well."
  },
  {
    question: "Can Bhima support heavy wardrobes and beds?",
    answer: "  Yes. Its dense core is made for load-bearing furniture."
  },
  {
    question: "Is it safe for indoor use?",
    answer: "Yes. It uses low-emission adhesives."
  },
   {
    question: "Does Bhima swell with moisture?",
    answer: "No. It is BWP grade and boiling waterproof."
  },
   {
    question: "Is Bhima good for commercial use?",
    answer: " Yes. It is commonly used in offices, retail, and hotels."
  },
   {
    question: "Does it come termite-treated?",
    answer: " Yes. The plywood is chemically treated."
  },
  

],
    primaryUses: 'Marine interiors, exterior decking sublayers, wet areas',
    image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBncmFkZSUyMHBseXdvb2R8ZW58MXx8fHwxNzYxOTkyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Marine Grade',
  },
  {
    id: 'samrat',
    name: 'SAMRAT – Premium BWP Interior Plywood',
    tagline: 'Supreme Quality  - Premium Interiors | Long-Term Performance',
    category: 'Plywood',
    subcategory: 'Made for visible interiors, Built to stay strong for decades.',
    description: 'Samrat is a premium BWP-grade plywood developed specifically for high-end interior applications where strength, surface finish, and long life matter equally. It is widely used in wardrobes, modular kitchens, furniture, and designer interiors where exposed surfaces need to look perfect and stay stable over time. Samrat balances marine-grade strength with interior-focused performance.',
    thicknesses : ['6mm', '9mm', '12mm', '16mm', '19mm'],
    specifications: [
      '	Surface: Calibrated | Smooth & even finish',
'Grade: BWP (Boiling Waterproof)',
'Bonding: Phenol Formaldehyde (PF) resin bonding',
'Core Material: High-quality hardwood core',
'Pressing: Multi-press system for thickness uniformity',
'Structure: Stable core construction with strong bonding',
'Water Resistance: Suitable for high-moisture interiors',
'Treatment: Anti-termite and anti-borer treated',
'Standard: IS:710 compliant',
'Emission Level: E0 Grade',

    ],
    keyFeatures: [
      ' Grade: BWP Interior Plywood (IS:710)',
    'Warranty: 30 Years on Core & Delamination',
    'Core: Selected Hardwood Core',
    'Water Resistance: Boiling Water Proof (BWP)',
    'Calibration: Fully calibrated for uniform thickness',
    'Protection: Termite & Borer Proof Treated',
    'Environment: Low-emission, indoor-safe adhesives',
'Technology: Multi-press manufacturing',
'Emission: E0 Grade Certified',
'Structure: Multi-layer construction with consistent core bonding.',
    ],
    grade: 'BWP Interior (Marine Grade Bonding)',               // <-- NEW
  warranty: '30 Years Warranty.',    // <-- NEW
  standards: 'IS:710', 
        applications: [
    '	Modular kitchens',
'Wardrobes & storage units',
'Premium interior furniture',
'TV units & display cabinets',
'Office interiors',
'Residential & commercial interiors',
  ],
   realLifeExamples: [
    "	Used in modular kitchens where strength and finish are equally important",
"	Preferred for wardrobes with long doors that need stability",
"	Chosen for premium interiors where surface quality is visible",



  ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'IS Certification Documents', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wardrobes, heavy furniture' },
    { thickness: '16mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Kitchen cabinets, shelves' },
    { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Door panels, partitions' },
    { thickness: '9mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Interior panelling' },
    { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Decorative & support work' },
  
  ],
  faq: [
  {
    question: "Is Samrat suitable for kitchens?",
    answer: "Yes, it is BWP-grade and handles kitchen moisture well."
  },
  {
    question: "Is Samrat marine plywood?",
    answer: "It uses marine-grade bonding but is optimized for interior use."
  },
  {
    question: "Does Samrat have a smooth surface for laminates and veneers?",
    answer: " Yes, fully calibrated sheets ensure a smooth finishing base."
  },
   {
    question: "Is Samrat safe for indoor use?",
    answer: "Yes, it is E0 grade certified with low emissions."
  },
   {
    question: "Can it be used for wardrobes and furniture?",
    answer: " Yes, it is commonly used for wardrobes, cabinets, and furniture."
  },
   {
    question: "Is Samrat termite-proof?",
    answer: "Yes, it is chemically treated against termites and borers."
  },
  {
    question: "What makes Samrat different from regular interior plywood?",
    answer: "Stronger bonding, better calibration, longer warranty, and stable core construction."
  },
  {
    question: "Is Samrat suitable for commercial interiors?",
    answer: "Yes, it is widely used in offices, showrooms, and retail interiors."
  },
  

],
    primaryUses: 'Luxury furniture, premium cabinetry, architectural panels',
    image: 'https://images.unsplash.com/photo-1761294364419-fcbfe2059dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwdmVuZWVyfGVufDF8fHx8MTc2MTk5MjIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller',
  },
  {
    id: 'vajra',
    name: 'VAJRA – High-Density BWR Plywood',
    tagline: 'The Unbreakable - Moisture-Resistant | Long-Life Interior',
    category: 'Plywood',
    subcategory: 'Built to handle moisture, load, and daily wear — without breaking ',
    description: 'Vajra is a high-density BWR grade plywood developed for interior applications that face moisture, pressure, and long-term use. It is designed for customers who want stronger performance than regular interior ply, without stepping into full marine grade. Vajra offers stability, durability, and confidence — especially where value and reliability both matter.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
     grade: 'BWR',               // <-- NEW
  warranty: '20 Years.',    // <-- NEW
  standards: 'IS:303 / IS:1659', 
        applications: [
    'Wardrobes & bedroom furniture',
'Kitchen cabinets (non-sink areas)',
'Interior partitions & paneling',
'Office furniture & workstations',
'Study tables & storage units',
'Residential interiors with moderate moisture'

  ],
   realLifeExamples: [
    "	Used in wardrobes exposed to seasonal humidity",
"Chosen for interior kitchens away from direct water contact",
"Preferred by contractors for office furniture due to strength & stability.",




  ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Documentation', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'IS Certification Documents', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wardrobes, structural interior furniture' },
    { thickness: '16mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Cabinets, shelves' },
    { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Partitions, door panels' },
    { thickness: '9mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Interior panelling' },
    { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Decorative & support use' },
  
  ],
  faq: [
  {
    question: "Is Vajra suitable for kitchens?",
    answer: "Yes, for cabinets and storage areas not directly exposed to water."
  },
  {
    question: "Is Vajra waterproof like marine plywood?",
    answer: "No, It is moisture-resistant (BWR), not boiling waterproof."
  },
  {
    question: "Does Vajra last longer than regular interior plywood?",
    answer: "Yes, It offers better core strength and moisture handling."
  },
   {
    question: "Is it termite-protected?",
    answer: "Yes, it is treated for termite & fungal protection."
  },
   {
    question: "Can it be used for office furniture?",
    answer: "Yes. Its strength and stability make it suitable for commercial interiors."
  },
   {
    question: "Is it safe for indoor use?",
    answer: " Yes. It uses interior-safe bonding systems."
  },
  
  

],
    specifications: [
      'Grade: BWR Interior Plywood',
'Bonding: Moisture-resistant resin bonding',
'Core Material: High-density hardwood core',
'Pressing: Multi-press construction for uniform strength',
'Surface Finish: Calibrated for even thickness',
'Moisture Resistance: Handles daily humidity & mild water exposure',
'Treatment: Termite & fungal protection',
'Emission: Interior-safe adhesive system',
'Usage Type: Interior & semi-moist areas',
'Warranty: 20 Years (as specified).',
    ],
    keyFeatures: [
      '	 Grade: BWR (Boiling Water Resistant)',
'Warranty: 20 Years on manufacturing defects',
'	Core: High-density hardwood core',
'Moisture Resistance: Suitable for humidity & splash-prone interiors',
'Technology: Quad / Multi-core pressing for internal strength',
'	Protection: Anti-termite & anti-fungal treatment',
'	Surface: Calibrated finish for smooth carpentry work',
'	Stability: Low warping & better screw holding',


    ],
    primaryUses: 'Heavy-use interiors, institutional furniture, specialist installations',
    image: 'https://images.unsplash.com/photo-1638726302618-d1d33ab13266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmVkJTIwd29vZCUyMHBhbmVsc3xlbnwxfHx8fDE3NjE5OTIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'ujval',
    name: 'UJVAL – Decorative Interior BWR Plywood',
    tagline: 'Radiant - Smooth Finish | Interior Grade | Everyday Reliable',
    category: 'Plywood',
    subcategory: 'Made for clean interiors, Built for daily use.',
    description: 'Ujval is an interior-focused BWR-grade plywood created for customers who want smooth finishing, stable performance, and long life for everyday interior applications. It is widely used for wardrobes, cabinets, partitions, and furniture where looks and reliability matter. Ujval balances value, strength, and a refined finish, making it a dependable choice for homes and commercial spaces.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    grade: 'BWR (Interior)',               // <-- NEW
  warranty: '10 Years.',    // <-- NEW
  standards: 'IS:303', 
        applications: [
    '	Bedroom wardrobes',
'Drawers, cabinets & storage units',
'Interior furniture',
'TV units, wall partitions & shelving',
'Office furniture',
'Commercial interiors'

  ],
   realLifeExamples: [
    "	Used in wardrobes and cabinets for clean finishing",
'	Preferred in budget-conscious interior projects',
'	Common choice for offices and commercial partitions',
 ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'IS Certification Documents', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '19mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wardrobes, cabinets, main furniture' },
    { thickness: '16mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Shelves, modular units' },
    { thickness: '12mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Partitions, shutters' },
    { thickness: '9mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Interior panels, lightweight structures' },
    { thickness: '6mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Back panels, decorative support' },
  
  ],
  faq: [
  {
    question: "Is Ujval suitable for wardrobes and cabinets?",
    answer: " Yes, it is commonly used for wardrobe shutters, boxes, and cabinets."
  },
  {
    question: "Is Ujval waterproof?",
    answer: "No, It is BWR (moisture-resistant), not fully waterproof."
  },
  {
    question: "Does Ujval support laminates and veneers well?",
    answer: "Yes, the smooth calibrated surface makes finishing easy."
  },
   {
    question: "Can Ujval be used in kitchens?",
    answer: " Yes, but only in areas not directly exposed to water or sink zones."
  },
   {
    question: "Is Ujval termite-protected?",
    answer: "Yes, it undergoes vacuum pressure chemical treatment."
  },
   {
    question: "Is Ujval good for commercial interiors?",
    answer: "Yes, it is often used in offices, partitions, and storage units."
  },
  {
    question: "Is the surface smooth enough for visible interiors?",
    answer: "Yes, Ujval is known for its clean and even surface finish."
  },
  {
    question: "Does Ujval last long?",
    answer: "With proper use, it performs reliably for years under normal interior conditions."
  },
  
  

],
    specifications: [
      ' Surface: Smooth, calibrated finish',
'Grade: BWR (Boiling Water Resistant)',
'Bonding: Moisture-resistant bonding suitable for interiors',
'Core Material: Selected hardwood core',
'Pressing: Multi-press system for thickness consistency',
'Structure: Stable core for long-term interior strength',
'Moisture Resistance: Suitable for areas with mild humidity',
'Treatment: Termite & anti-bacterial protection',
'Standard: IS:303 compliant',
'Emission Level: Interior-safe adhesive system',

    ],
    keyFeatures: [
      ' Grade: BWR Interior Grade (IS:303)',
'Warranty: 10 Years on manufacturing defects',
'Core: Treated hardwood core',
'Water Resistance: Handles humidity and daily moisture',
'Calibration: Smooth finish for laminates & veneers',
'Protection: Anti-termite & anti-bacterial treated',
'Treatment: Vacuum pressure chemical treatment',
'Technology: Multi-press construction',
'	Surface: Clean, even finishing for visible interiors',
'Structure: Consistent layer bonding for stable performance.',

    ],
    primaryUses: 'Feature walls, cabinetry, retail interiors',
    image: 'https://images.unsplash.com/photo-1631669394390-baf737ef47de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBseXdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYxOTkyMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  // DOORS CATEGORY
  {
    id: 'block-board',
    name: 'BLOCKBOARD – Stable Core Panels (BWR Grade)',
    tagline: 'Strong Core | Warp-Resistant | Built for Doors, Partitions & Furniture',
    category: 'Doors',
    subcategory: 'Made for stability. Built to stay straight and strong.',
    description: 'Tree’s Blockboard is designed for applications where stability, straightness, and strength matter more than anything else. It is built with a solid wood core that prevents bending, makes doors sturdier, and keeps long panels straight over time. Ideal for partitions, door frames, wardrobes, and furniture that must remain firm and wobble-free.',
    thicknesses: [ '25MM', '19MM','16mm' ],
    grade: 'BWR (Boiling Water Resistant)',               // <-- NEW
  warranty: 'As per manufacturing standards.',    // <-- NEW
  standards: 'IS:1659', 
        applications: [
    "Doors (Flush, interior, panel doors)",
"Partitions & wall panels",
"Wardrobe shutters",
"Bookshelves & storage units",
"Table tops & counters",
"Furniture frames",

  ],
   realLifeExamples: [
    "Used for long doors where regular plywood tends to bend",
"Preferred by carpenters for wardrobes that require a firm structure",
"Common choice for commercial partitions and office workstations",
 ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: 'IS:1659 Certification', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '25 mm', commonSize: "	8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Doors, table tops, partitions' },
    { thickness: '19 mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Wardrobe shutters, panels, shelves' },
    { thickness: '16 mm', commonSize: "8 × 4 ft (2440 × 1220 mm)", bestApplication: 'Light partitions, furniture frames' },
      
  ],
  faq: [
  {
    question: "Is blockboard better than plywood for doors?",
    answer: " Yes, blockboard stays straighter in long doors and reduces bending."
  },
  {
    question: "Is blockboard waterproof?",
    answer: " It is BWR grade, meaning it can handle daily moisture but is not fully waterproof like BWP."
  },
  {
    question: "Can blockboard hold screws well?",
    answer: " Yes, the solid wood core gives strong screw-holding capacity."
  },
   {
    question: "Is blockboard termite-resistant?",
    answer: "Yes, it is chemically treated against termites and borers."
  },
   {
    question: "Can it be used for kitchen cabinets?",
    answer: "Only for shutters or partitions — not recommended for sink areas."
  },
   {
    question: "Is blockboard good for tabletops?",
    answer: "Yes, thicker 25 mm blockboard works well for tables and counters."
  },
  {
    question: "Is it suitable for commercial interiors?",
    answer: "Yes, commonly used for partitions and workstation panels."
  },
  {
    question: "Is the surface suitable for laminates?",
    answer: "Yes, the smooth finish is ready for laminates, veneers, or paint."
  },
  
  

],
    specifications: [
      ' Surface: Smooth, even finish',
' Core Material: High-quality solid wood battens',
' Bonding: BWR-grade moisture-resistant adhesive',
'Construction: Strong sandwich structure (face + core + back)',
'Warp-Resistance: Designed to prevent bending in long panels',
'Load Stability: Suitable for structural interior components',
'Treatment: Vacuum pressure chemical treatment for termite & borer protection',
'Standard: IS:1659 Certified',


    ],
    keyFeatures: [
      'BWR Grade Blockboard (IS:1659)',
'Solid wood core for stability',
'Moisture & warp resistant',
'Smooth calibrated surface',
'Anti-termite & anti-bacterial treatment',
'Low-emission bonding',
'Suitable for large panels & long doors',
'Even structure for screw-holding strength.',
    ],
    primaryUses: 'Doors, partitions, heavy furniture cores',
    image: 'https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2JvYXJkJTIwY29yZSUyMHBhbmVsc3xlbnwxfHx8fDE3NjE5OTIyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Core Panels',
  },
  {
    id: 'flush-doors',
    name: 'FLUSH DOORS – Engineered for Strength & Stability (BWP Grade)',
    tagline: 'Solid Core | Waterproof Strength | Long-Lasting Performance',
    category: 'Doors',
    subcategory: 'A door that stays firm, stays straight, and stays strong—.',
    description: 'Tree’s Flush Doors are engineered with a high-density solid core, strong bonding, and a smooth finish that makes them ideal for both homes and commercial spaces. They are built to handle daily use, moisture exposure, and long-term performance without bending or weakening. With BWP-grade bonding, each door is designed to deliver strength that lasts.',
    thicknesses: ['40mm', '38mm', '35mm', '32mm',],
    grade: 'BWP Door Grade',               // <-- NEW
  warranty: 'As per manufacturing quality standards',    // <-- NEW
  standards: 'IS:2202', 
        applications: [
    ' Main doors',
'	Bedroom doors',
'	Bathroom doors (BWP-grade safe)',
'	Office doors',
'	 Hotel & commercial spaces',
'	 Apartment interiors',



  ],
   realLifeExamples: [
    "	Used in apartments where long-term durability is essential",
"Preferred by contractors for hotel rooms and commercial offices",
"	Common for bathrooms due to moisture-resistant BWP grade",

 ],
  downloads: [
    { name: 'Technical Datasheet', url: '/files/ananta-datasheet.pdf', size: '2.4 MB' },
    { name: 'Warranty Guidelines', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
     { name: ' IS:2202 Certification', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
      { name: 'Installation & Storage Guide.', url: '/files/ananta-warranty.pdf', size: '1.8 MB' },
  ],
  thicknessDetails: [
    { thickness: '40 mm', commonSize: "	81 × 32 ", bestApplication: 'Main doors, high-traffic commercial use' },
    { thickness: '38 mm', commonSize: "81 × 36", bestApplication: 'Premium interiors, hotels' },
    { thickness: '35 mm', commonSize: "84 × 32", bestApplication: 'Bedroom & living room doors' },
    { thickness: '32 mm', commonSize: "81 × 32 ", bestApplication: 'Bathroom doors, partitions' },
    { thickness: '30 mm', commonSize: "81 × 32 ", bestApplication: 'Light interior doors' },
  
  ],
  faq: [
  {
    question: "Are these doors waterproof?",
    answer: " Yes, they are BWP-grade, suitable for bathroom and moisture-prone areas."
  },
  {
    question: "Do flush doors bend over time?",
    answer: " No, the solid core and hardwood stiles keep the door straight for years."
  },
  {
    question: "Can these doors be laminated or veneered?",
    answer: " Yes, the surface is smooth and ready for finishing."
  },
   {
    question: "Are they termite-resistant?",
    answer: "Yes, all doors are chemically treated against termites and borers."
  },
   {
    question: "Can they be used for main doors?",
    answer: " Yes, thicker options like 38mm–40mm are perfect for main doors."
  },
   {
    question: "Can they be used for main doors?",
    answer: "Yes, thicker options like 38mm–40mm are perfect for main doors."
  },
  {
    question: "Is the door hollow or solid?",
    answer: " Tree’s Flush Doors come with a solid, high-density core for better stability."
  },
  {
    question: "Are custom sizes available?",
    answer: "Yes, custom door sizes can be made on order."
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, backed by manufacturing quality assurance."
  },
  
  

],
    
    specifications: [
      'Surface: Smooth calibrated surface, ready for laminates, veneers & polish',
'Core: High-density solid wood core',
'	Bonding: BWP waterproof adhesive',
'Frame Strength: Hardwood stile & rail construction for stability',
'Resistance: Warp-resistant; made to stay straight over time',
'Treatment: Anti-termite & anti-borer chemical treatment',
'Durability: Withstands daily use and humidity changes',
'Standard: IS:2202 Certified',

    ],
    keyFeatures: [
      'BWP Grade Flush Door (IS:2202 Certified)',
'Solid hardwood core structure',
'Moisture & weather resistant',
'Termite & borer treated',
'	Smooth, ready-to-finish surface',
'Strong, stable & long-lasting',
'	Excellent screw-holding strength',
'Ideal for homes & commercial interiors.'

    ],
    primaryUses: 'Residential doors, commercial entry doors, interior partitions',
    image: 'https://images.unsplash.com/photo-1695119278258-3cd6f8b7eaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmbHVzaCUyMGRvb3JzfGVufDF8fHx8MTc2MTk5MjIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Popular',
  },
 
];

export const categories = ['All', 'Plywood', 'Doors'];
export const plywoodSubcategories = ['All Plywood', 'Structural', 'Fire-Resistant', 'Marine', 'Premium', 'Resilient', 'Interior', 'Core Panels'];
