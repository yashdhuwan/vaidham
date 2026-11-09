export interface Ingredient {
  name: string;
  botanicalName: string;
  amount: string;
  role: string;
  ayurvedicAction: string;
}

export interface LabResult {
  parameter: string;
  measured: string;
  standard: string;
  verdict: 'PASSED' | 'COMPLIANT';
}

export interface Product {
  id: string;
  name: string;
  sanskritName: string;
  tagline: string;
  category: 'Joint & Muscle Care' | 'Liver Care' | 'Weight & Metabolism';
  price: number;
  originalPrice: number;
  inStock: boolean;
  stockCount: number;
  rating: number;
  packSize: string;
  sku: string;
  gtin: string;
  activeBatch: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullOverview: string;
  intendedUse: string[];
  ingredients: Ingredient[];
  usageInstructions: string;
  dosage: string;
  precautions: string[];
  batchDetails: {
    batchNumber: string;
    mfgDate: string;
    expDate: string;
    labName: string;
    heavyMetals: 'Passed' | 'Compliant';
    microbiological: 'Passed' | 'Compliant';
    activeStandardization: string;
  };
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'arthreliv',
    name: 'ArthReliv',
    sanskritName: 'संधि एवं वात शामक (Sandhi & Vata Shamaka)',
    tagline: 'Classical Ayurvedic Joint Flexibility & Cartilage Vitality',
    category: 'Joint & Muscle Care',
    price: 1199,
    originalPrice: 1499,
    inStock: true,
    stockCount: 142,
    rating: 4.9,
    packSize: '90 Vegetarian Capsules',
    sku: 'VDH-AR-090',
    gtin: '8906152910012',
    activeBatch: 'AR-2024-08',
    image: '/src/assets/images/product_arthreliv_luxury_1794065932156.jpg',
    gallery: [
      '/src/assets/images/product_arthreliv_luxury_1794065932156.jpg',
      '/src/assets/images/hero_ayurvedic_apothecary_1794065931319.jpg',
      '/src/assets/images/wellness_botanical_laboratory_1794065933054.jpg',
    ],
    shortDescription:
      'A potent, standardized botanical formula that supports joint lubrication, eases muscular stiffness, and fortifies connective tissue from within.',
    fullOverview:
      'ArthReliv is formulated according to classical Ayurvedic principles to address excess Vata accumulation in the joints and skeletal tissues. Unlike topical masks that offer fleeting comfort, ArthReliv works systematically at the nutritional root, delivering clinically studied levels of Boswellic acids and Curcuminoids to preserve cartilage integrity and restore fluid articulation.',
    intendedUse: [
      'Relief from morning joint stiffness and reduced range of motion',
      'Nourishment of synovial fluid and connective cartilage tissue',
      'Neutralizing deep tissue inflammation without gastric irritation',
      'Daily mobility support for active adults and elderly individuals',
    ],
    ingredients: [
      {
        name: 'Shallaki Extract',
        botanicalName: 'Boswellia serrata (65% Boswellic Acids)',
        amount: '250 mg',
        role: 'Inhibits 5-LOX enzyme pathway to protect joint cartilage',
        ayurvedicAction: 'Vata-Shamaka & Shothahara (Anti-inflammatory)',
      },
      {
        name: 'Curcumin 95%',
        botanicalName: 'Curcuma longa (95% Curcuminoids)',
        amount: '150 mg',
        role: 'Potent cellular antioxidant and tissue protector',
        ayurvedicAction: 'Rakta Shodhaka & Varnya',
      },
      {
        name: 'Hadjod Extract',
        botanicalName: 'Cissus quadrangularis',
        amount: '100 mg',
        role: 'Supports bone mineral density and connective integrity',
        ayurvedicAction: 'Asthi Sandhaniya (Bone & Joint Knitter)',
      },
      {
        name: 'Ashwagandha Extract',
        botanicalName: 'Withania somnifera (5% Withanolides)',
        amount: '100 mg',
        role: 'Adaptogenic muscle tonic and neuromuscular support',
        ayurvedicAction: 'Balya & Rasayana (Strength & Rejuvenation)',
      },
      {
        name: 'Sunthi & Maricha',
        botanicalName: 'Zingiber officinale & Piper nigrum',
        amount: '50 mg',
        role: 'Enhances bioavailability and absorption of active herbs',
        ayurvedicAction: 'Deepana & Pachana (Digestive Fire Ignition)',
      },
    ],
    usageInstructions: 'Take 1 to 2 capsules twice daily with lukewarm water after meals.',
    dosage: '1 capsule morning and evening, or as advised by an Ayurvedic physician.',
    precautions: [
      'Consult your healthcare professional prior to use if pregnant, lactating, or on anticoagulants.',
      'Store in a cool, dark, dry place below 25°C away from direct sunlight.',
      'Do not exceed the recommended daily intake.',
    ],
    batchDetails: {
      batchNumber: 'AR-2024-08',
      mfgDate: 'August 2024',
      expDate: 'July 2027',
      labName: 'NABL Accredited Alpha Analytical Lab #TC-8192',
      heavyMetals: 'Passed',
      microbiological: 'Passed',
      activeStandardization: 'Boswellic Acids 65.4% | Curcuminoids 95.2%',
    },
    faqs: [
      {
        question: 'How soon can I expect to notice mobility improvements?',
        answer:
          'Because ArthReliv works on constitutional tissue nourishment (Asthi and Majja Dhatus), most individuals notice enhanced morning ease within 14 to 21 days of continuous daily intake.',
      },
      {
        question: 'Can ArthReliv be taken alongside conventional joint supplements?',
        answer:
          'Yes, ArthReliv consists of 100% pure standardized herbal extracts with no synthetic fillers or steroids. If you are taking prescription anticoagulants, consult your physician first.',
      },
      {
        question: 'Are the capsules completely vegetarian?',
        answer:
          'Yes, Vaidham utilizes only 100% plant-derived HPMC cellulose capsules, certified non-GMO, vegan, and free from animal gelatin.',
      },
    ],
  },
  {
    id: 'livodham',
    name: 'LIVODHAM',
    sanskritName: 'यकृत शोधन एवं दीपन (Yakrit Shodhana & Deepana)',
    tagline: 'Standardized Botanical Hepatoprotection & Digestive Metabolism',
    category: 'Liver Care',
    price: 999,
    originalPrice: 1299,
    inStock: true,
    stockCount: 118,
    rating: 4.9,
    packSize: '60 Vegetarian Capsules',
    sku: 'VDH-LV-060',
    gtin: '8906152910029',
    activeBatch: 'LV-2024-09',
    image: '/src/assets/images/product_livodham_luxury_1794065933873.jpg',
    gallery: [
      '/src/assets/images/product_livodham_luxury_1794065933873.jpg',
      '/src/assets/images/wellness_botanical_laboratory_1794065933054.jpg',
      '/src/assets/images/hero_ayurvedic_apothecary_1794065931319.jpg',
    ],
    shortDescription:
      'A multi-targeted hepatoprotective formulation engineered to optimize liver enzyme balance, clear metabolic sluggishness, and support biliary flow.',
    fullOverview:
      'In classical Ayurvedic pathology, the liver (Yakrit) is the foundational seat of Pitta dosha and the primary metabolic converter of Rasa into Rakta (blood). Modern environmental toxins, ultra-processed diets, and stress accumulate metabolic residues (Ama). LIVODHAM provides high-potency Phyllanthin, Kutkin, and Punarnavine to shield hepatic membranes, accelerate healthy enzymatic detoxification, and restore digestive fire (Agni).',
    intendedUse: [
      'Maintaining balanced SGOT, SGPT, and bilirubin enzyme ranges',
      'Shielding liver parenchymal cells against dietary and environmental oxidative stress',
      'Enhancing bile secretion and promoting fat emulsification',
      'Alleviating sluggish post-meal heaviness and improving metabolic tone',
    ],
    ingredients: [
      {
        name: 'Bhumi Amla Extract',
        botanicalName: 'Phyllanthus niruri (3% Phyllanthin)',
        amount: '200 mg',
        role: 'Hepatoprotective and cellular membrane stabilizer',
        ayurvedicAction: 'Pitta-Shamaka & Yakrit-Poshaka (Liver Nourishing)',
      },
      {
        name: 'Himalayan Kutki',
        botanicalName: 'Picrorhiza kurroa (5% Kutkin)',
        amount: '150 mg',
        role: 'Stimulates endogenous glutathione synthesis and bile flow',
        ayurvedicAction: 'Bhedana & Yakriduttejaka (Hepatic Cleansing)',
      },
      {
        name: 'Punarnava Extract',
        botanicalName: 'Boerhavia diffusa',
        amount: '100 mg',
        role: 'Facilitates renal drainage and reduces hepatic fluid congestion',
        ayurvedicAction: 'Shothahara & Mutravirechaniya',
      },
      {
        name: 'Kalmegh Extract',
        botanicalName: 'Andrographis paniculata',
        amount: '100 mg',
        role: 'Intense bitter tonic for digestive fire and pathogen resistance',
        ayurvedicAction: 'Katu & Tikta Rasa, Deepana',
      },
      {
        name: 'Kasani Extract',
        botanicalName: 'Cichorium intybus',
        amount: '50 mg',
        role: 'Soothes inflammation of the hepatic biliary channels',
        ayurvedicAction: 'Yakrit Shothahara',
      },
    ],
    usageInstructions: 'Take 1 capsule twice daily 30 minutes before meals with warm water.',
    dosage: '1 capsule before breakfast and 1 capsule before dinner.',
    precautions: [
      'Individuals with acute bile duct obstruction or gallstones should consult their physician before use.',
      'Not intended for pregnant or nursing mothers without clinical supervision.',
      'Keep closed tightly in the original amber glass container.',
    ],
    batchDetails: {
      batchNumber: 'LV-2024-09',
      mfgDate: 'September 2024',
      expDate: 'August 2027',
      labName: 'NABL Accredited Alpha Analytical Lab #TC-8192',
      heavyMetals: 'Passed',
      microbiological: 'Passed',
      activeStandardization: 'Phyllanthin 3.2% | Kutkin 4.8%',
    },
    faqs: [
      {
        question: 'Can LIVODHAM help with elevated liver enzymes on routine blood tests?',
        answer:
          'LIVODHAM contains verified levels of Kutkin and Phyllanthin, which have extensive clinical documentation for supporting healthy AST and ALT ranges. However, always review your specific diagnostic results with your physician.',
      },
      {
        question: 'Should LIVODHAM be taken with or without food?',
        answer:
          'Classical Ayurvedic bitters (Tikta Rasas) act most effectively on digestive Agni and bile channels when consumed roughly 20-30 minutes prior to meals with warm water.',
      },
      {
        question: 'Is it safe for long-term daily consumption?',
        answer:
          'Yes. All batches are rigorously screened for heavy metals (lead, arsenic, mercury, cadmium) by independent NABL labs to ensure complete long-term safety.',
      },
    ],
  },
];
