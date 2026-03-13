"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
            >
              <ImageWithFallback
                src="/images/our-story.png"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold text-slate-900"
              >
                Our Mission
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-xl text-slate-600 leading-relaxed"
              >
                ErideCommerce exists to empower Amazon private label brands with the strategic guidance,
                tactical execution, and data-driven insights they need to scale profitably. We believe
                every brand has untapped potential—our job is to unlock it.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Stand For</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">Data-First Approach</h3>
              <p className="text-slate-600">
                Every decision we make is backed by data. From keyword research to PPC optimization,
                we let the numbers guide our strategy—not gut feelings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">Transparent Partnership</h3>
              <p className="text-slate-600">
                We believe in building long-term relationships. Clear communication, honest reporting,
                and shared goals are the foundation of every client engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">Sustainable Growth</h3>
              <p className="text-slate-600">
                We don&apos;t chase shortcuts. Our strategies are designed for sustainable,
                profitable growth that compounds over time—not spikes that fade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Scale?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your Amazon brand reach its full potential.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-2xl font-semibold transition-colors"
          >
            Get Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
