import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/utils/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Amazon growth tips, PPC strategies, listing optimization guides, and eCommerce insights from ErideCommerce.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Blog & Insights
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Amazon growth strategies and eCommerce expertise
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-slate-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-slate-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
