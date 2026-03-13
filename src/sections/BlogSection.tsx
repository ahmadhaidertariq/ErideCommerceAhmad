"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";
import { blogPosts } from "@/utils/blog";

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Blog & Insights
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Amazon growth strategies and eCommerce expertise
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
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
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:hidden"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
