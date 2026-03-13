"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* our story.png 1024x1024 - image on left, text on right to avoid overlap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-lg rounded-2xl overflow-hidden bg-slate-100"
          >
            <ImageWithFallback
              src="/images/our-story.png"
              alt="Our Story - ErideCommerce team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-900"
            >
              Mission & Growth Philosophy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-slate-600 leading-relaxed"
            >
              ErideCommerce exists to empower Amazon private label brands with the strategic
              guidance, tactical execution, and data-driven insights they need to scale profitably.
              We believe every brand has untapped potential—our job is to unlock it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-slate-600 leading-relaxed"
            >
              Our philosophy is simple: sustainable growth over short-term wins. We combine deep
              Amazon expertise with transparent partnership, ensuring our clients achieve lasting
              results that compound over time.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
