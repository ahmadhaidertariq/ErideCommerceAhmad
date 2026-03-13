import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/utils/caseStudies";
import CaseStudyBeforeAfter from "./CaseStudyBeforeAfter";
import CaseStudyHeroImage from "./CaseStudyHeroImage";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.niche} Case Study`,
    description: study.results,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8"
        >
          ← Back to Case Studies
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
          {study.niche}
        </h1>
        <p className="mt-2 text-primary font-semibold">{study.category}</p>

        <div className="mt-8 aspect-video relative rounded-2xl overflow-hidden bg-slate-100">
          <CaseStudyHeroImage src={study.image} alt={study.niche} />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Problem</h2>
            <p className="text-slate-600 leading-relaxed">{study.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Strategy</h2>
            <p className="text-slate-600 leading-relaxed">{study.strategy}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Results</h2>
            <p className="text-slate-600 leading-relaxed">{study.results}</p>
            {study.metrics && study.metrics.length > 0 && (
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <div className="text-sm font-medium text-slate-600">{metric.label}</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-slate-500">{metric.before}</span>
                      <span>→</span>
                      <span className="font-bold text-primary">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Before/After images */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Before & After</h2>
            <CaseStudyBeforeAfter
              beforeImage={study.beforeImage || "/images/placeholder-before.svg"}
              afterImage={study.afterImage || "/images/placeholder-after.svg"}
              beforeAlt={`${study.niche} - Before`}
              afterAlt={`${study.niche} - After`}
            />
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-slate-50 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Ready for similar results?</h3>
          <p className="mt-2 text-slate-600">Get a free audit and discover your growth potential.</p>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-colors"
          >
            Get Free Audit
          </Link>
        </div>
      </article>
    </div>
  );
}
