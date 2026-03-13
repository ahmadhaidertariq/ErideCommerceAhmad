import type { Metadata } from "next";
import CaseStudiesSection from "@/sections/CaseStudiesSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Success stories from Amazon private label brands we've helped scale. Home & Kitchen, Fitness, Pet, Beauty and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Real strategies, real results from brands we&apos;ve helped scale
          </p>
        </div>
      </section>
      <CaseStudiesSection />
    </div>
  );
}
