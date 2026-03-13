import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/utils/blog";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8"
        >
          ← Back to Blog
        </Link>

        <time className="text-slate-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-slate-900">
          {post.title}
        </h1>

        <div className="mt-8 aspect-video relative rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12 prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>
          <p className="mt-4 text-slate-600">
            Full article content coming soon. This is a placeholder structure for the blog system.
            Replace with actual content from your CMS or markdown files.
          </p>
        </div>
      </article>
    </div>
  );
}
