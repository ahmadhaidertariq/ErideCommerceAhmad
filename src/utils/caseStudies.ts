export interface CaseStudy {
  slug: string;
  niche: string;
  category: string;
  problem: string;
  strategy: string;
  results: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  metrics?: {
    label: string;
    before: string;
    after: string;
  }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "case-study-1",
    niche: "Home & Kitchen Brand",
    category: "Home & Kitchen",
    problem: "Stagnant sales at $45K/month with 42% ACOS. Struggling to break into top search results.",
    strategy: "Comprehensive listing overhaul, keyword migration, and aggressive PPC restructuring.",
    results: "Revenue doubled in 4 months. ACOS reduced to 22%. Achieved top 5 rankings in 12 key terms.",
    image: "/case-studies/case1.png",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    metrics: [
      { label: "Monthly Revenue", before: "$45K", after: "$92K" },
      { label: "ACOS", before: "42%", after: "22%" },
      { label: "Top 5 Keywords", before: "2", after: "12" },
    ],
  },
  {
    slug: "case-study-2",
    niche: "Fitness Supplement Brand",
    category: "Health & Fitness",
    problem: "New product launch failing to gain traction. High ACOS with minimal organic visibility.",
    strategy: "Staged launch playbook with strategic PPC seeding and review generation campaigns.",
    results: "First page rankings in 8 weeks. 153% revenue growth. Profitable from month 3.",
    image: "/case-studies/case2.png",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    metrics: [
      { label: "Revenue Growth", before: "Baseline", after: "+153%" },
      { label: "Time to Page 1", before: "N/A", after: "8 weeks" },
    ],
  },
  {
    slug: "case-study-3",
    niche: "Pet Accessories Brand",
    category: "Pet Supplies",
    problem: "Crowded category with declining conversion rates. Catalog cannibalization issues.",
    strategy: "Catalog consolidation, variation optimization, and conversion-focused A/B testing.",
    results: "134% sales increase. Conversion rate improved 59%. Streamlined from 47 to 28 SKUs.",
    image: "/case-studies/case3.png",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    metrics: [
      { label: "Sales Growth", before: "Baseline", after: "+134%" },
      { label: "Conversion Rate", before: "7.4%", after: "11.8%" },
      { label: "SKU Count", before: "47", after: "28" },
    ],
  },
  {
    slug: "case-study-4",
    niche: "Beauty Tools Brand",
    category: "Beauty & Personal Care",
    problem: "Seasonal spikes causing inventory issues. Inconsistent PPC performance.",
    strategy: "Demand forecasting, dynamic bid strategies, and seasonal campaign planning.",
    results: "Year-round revenue stability. 38% ACOS reduction. Predictable inventory cycles.",
    image: "/case-studies/case4.png",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    metrics: [
      { label: "ACOS Reduction", before: "Baseline", after: "-38%" },
      { label: "Revenue Stability", before: "Seasonal", after: "Year-round" },
    ],
  },
  {
    slug: "case-study-5",
    niche: "Electronics Accessories Brand",
    category: "Electronics",
    problem: "Low brand visibility and high return rates. Competing with established players.",
    strategy: "Brand store redesign, enhanced A+ content, and targeted PPC for high-intent keywords.",
    results: "89% sales growth. Return rate reduced by 24%. Top 10 in 8 key categories.",
    image: "/case-studies/case5.png",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    metrics: [
      { label: "Sales Growth", before: "Baseline", after: "+89%" },
      { label: "Return Rate", before: "12%", after: "9.1%" },
    ],
  },
];
