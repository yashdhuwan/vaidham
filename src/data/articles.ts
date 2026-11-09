export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    title: string;
  };
  content: {
    sectionHeading: string;
    body: string[];
  }[];
}

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'the-root-of-joint-mobility',
    title: 'The Root of Joint Mobility: Why Ayurveda Treats Cartilage Through Vata Dosha',
    category: 'Musculoskeletal Health',
    readTime: '6 min read',
    publishDate: 'October 2024',
    excerpt:
      'In classical Ayurvedic pathology, joint degeneration is rarely treated as isolated mechanical wear. It is the systemic manifestation of dried Vata circulating through Asthi Dhatu.',
    coverImage: '/src/assets/images/hero_ayurvedic_apothecary_1794065931319.jpg',
    author: {
      name: 'Dr. Aarav Sharma',
      title: 'Senior Ayurvedic Physician & Formulation Lead',
    },
    content: [
      {
        sectionHeading: 'The Vata-Sandhi Connection',
        body: [
          'Classical texts like the Charaka Samhita define the joints (Sandhi) as primary junction sites where Vata dosha governs every flex, rotation, and cushion. When Vata becomes aggravated due to dry weather, erratic dietary habits, or aging, the unctuous protective fluid (Shleshaka Kapha) begins to dissipate.',
          'Conventional anti-inflammatory interventions often target single pathway enzymes like COX-2, which can temporarily mask discomfort but leave the underlying synovial microenvironment depleted.',
        ],
      },
      {
        sectionHeading: 'The Synergistic Power of Shallaki and Hadjod',
        body: [
          'In formulating ArthReliv, our clinical goal was dual-phase: immediate comfort followed by sustained structural nourishment. Standardized Boswellia serrata (Shallaki) delivers acetyl-11-keto-β-boswellic acid (AKBA), which specifically impedes 5-lipoxygenase (5-LOX) without irritating the gastric mucosa.',
          'Complementing this is Cissus quadrangularis (Hadjod), historically revered as "Asthisamharaka" or the bone-healer. Hadjod supplies bioflavonoids and anabolic ketosteroids that facilitate calcium assimilation into the connective matrix.',
        ],
      },
      {
        sectionHeading: 'Daily Routine (Dinacharya) for Arthritic Tendencies',
        body: [
          'Consume warm water throughout the day to prevent Ama (toxic metabolic residue) from lodging in joint capsules.',
          'Perform daily Abhyanga (warm sesame oil massage) focusing on the knees, hips, and lower back before morning bathing.',
          'Avoid excessively cold, raw, or leftover foods, especially in late autumn and winter.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'the-modern-liver-under-stress',
    title: 'The Modern Liver Under Stress: Ancient Botanicals for Hepatic Resilience',
    category: 'Hepatic & Metabolic Wellness',
    readTime: '5 min read',
    publishDate: 'November 2024',
    excerpt:
      'The human liver handles over 500 vital biochemical functions. Understanding the role of bitter herbs (Tikta Rasa) is key to shielding hepatocytes against modern environmental stress.',
    coverImage: '/src/assets/images/wellness_botanical_laboratory_1794065933054.jpg',
    author: {
      name: 'Vaidya Meera Joshi',
      title: 'Ayurvedic Phytochemist',
    },
    content: [
      {
        sectionHeading: 'Yakrit: The Seat of Biological Fire',
        body: [
          'Ayurveda views the liver (Yakrit) as the anatomical seat of Ranjaka Pitta, the subtle physiological principle responsible for converting nutrient plasma into vibrant, oxygenated blood cells.',
          'When excessive oily foods, refined alcohol, industrial microplastics, and chronic stress overheat Pitta, the liver tissues undergo sub-clinical inflammation, manifested as mid-afternoon fatigue, digestive sluggishness, and poor lipid clearance.',
        ],
      },
      {
        sectionHeading: 'Why Modern Diets Lack Bitter Principles',
        body: [
          'The modern Westernized palate has virtually eliminated Tikta Rasa (the bitter taste) in favor of sweet and salty hyper-palatability. Yet bitter taste receptors line not only the tongue but the entire biliary tract.',
          'Botanicals like Himalayan Kutki (Picrorhiza kurroa) and Bhumi Amla (Phyllanthus niruri) stimulate endogenous glutathione peroxidase and clear congested bile pathways naturally.',
        ],
      },
      {
        sectionHeading: 'Practical Guidance for Liver Vitality',
        body: [
          'Begin mornings with warm water infused with a squeeze of fresh lemon and a pinch of rock salt.',
          'Incorporate natural bitters such as bitter gourd, fenugreek greens, and dandelion tea into your weekly meal planning.',
          'Avoid late-night eating, allowing the liver to complete its nocturnal restorative cycle undisturbed between 10 PM and 2 AM.',
        ],
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'radical-transparency-heavy-metals',
    title: 'Radical Transparency: Understanding Heavy Metal and Purity Testing in Ayurvedic Extracts',
    category: 'Quality & Science',
    readTime: '7 min read',
    publishDate: 'December 2024',
    excerpt:
      'Why batch traceability and third-party NABL lab certificates are not optional marketing talking points, but the foundational moral baseline of responsible wellness.',
    coverImage: '/src/assets/images/product_livodham_luxury_1794065933873.jpg',
    author: {
      name: 'Dr. Aarav Sharma',
      title: 'Senior Ayurvedic Physician & Formulation Lead',
    },
    content: [
      {
        sectionHeading: 'The Myth vs. Reality of Ayurvedic Safety',
        body: [
          'Ayurveda is humanity’s oldest continuous medical tradition, yet in recent years consumer trust has been challenged by substandard manufacturing and unregulated raw herb sourcing.',
          'Herbs absorb trace minerals from agricultural soil. Without rigorous testing, wild-harvested herbs can carry trace levels of lead, arsenic, cadmium, and microbial spores.',
        ],
      },
      {
        sectionHeading: 'The Vaidham Traceability Protocol',
        body: [
          'At Vaidham, every single production batch undergoes strict four-tier laboratory screening at independent NABL-accredited analytical facilities.',
          'Every customer can input their bottle batch number directly on our website to inspect the exact certificate of analysis—including heavy metal readings in parts per million and active phyto-compound assay percentages.',
        ],
      },
    ],
  },
];
