"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudiesData } from "@/utils/caseStudies";

export default function CaseStudiesSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="success-stories" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Real strategies, real results from brands we&apos;ve helped scale
          </p>
        </motion.div>

        {/* Carousel - 5 case study images (1-5.png), scaled/cropped to fit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="relative aspect-[21/9] sm:aspect-[3/1] rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-200/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={caseStudiesData[carouselIndex].image}
                  alt={caseStudiesData[carouselIndex].niche}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                {/* Stats overlay - bottom, doesn't cover key image content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-16">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-peach uppercase tracking-wider">
                        {caseStudiesData[carouselIndex].category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {caseStudiesData[carouselIndex].niche}
                      </h3>
                      <p className="text-slate-300 text-sm mt-2 line-clamp-2 max-w-xl">
                        {caseStudiesData[carouselIndex].results}
                      </p>
                    </div>
                    <Link
                      href={`/case-studies/${caseStudiesData[carouselIndex].slug}`}
                      className="shrink-0 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {caseStudiesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === carouselIndex ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid of 5 case study cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/case-studies/${study.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-lg hover:border-primary/20 transition-all h-full">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.niche}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {study.category}
                    </span>
                    <h3 className="mt-1 font-semibold text-slate-900 line-clamp-2">{study.niche}</h3>
                    <p className="mt-1 text-slate-600 text-xs line-clamp-2">{study.strategy}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
