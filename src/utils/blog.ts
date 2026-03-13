export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "amazon-ppc-strategy",
    title: "Amazon PPC Strategy",
    excerpt: "Master your Amazon advertising with proven PPC strategies that maximize ROAS and reduce ACOS.",
    date: "2026-02-15",
    image: "/images/blog-placeholder.svg",
  },
  {
    slug: "listing-optimization-guide",
    title: "Listing Optimization Guide",
    excerpt: "A comprehensive guide to optimize your product listings for maximum conversion and visibility.",
    date: "2026-01-28",
    image: "/images/blog-placeholder.svg",
  },
  {
    slug: "how-to-launch-product-on-amazon",
    title: "How to Launch a Product on Amazon",
    excerpt: "Step-by-step playbook for launching new products and achieving first-page rankings.",
    date: "2026-01-10",
    image: "/images/blog-placeholder.svg",
  },
];
