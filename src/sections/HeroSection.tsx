"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center pt-20 overflow-hidden">
      {/* Background - MAIN PAGE.png 1472x704, full cover */}
      <div className="absolute inset-0 bg-slate-800">
        <Image
          src="/images/main-page.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay - darker on left for text readability, lighter on right to show image */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/50 to-slate-900/25"
          aria-hidden
        />
      </div>

      {/* Content - positioned left, avoids covering key image areas on right */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 lg:pb-24 pt-24 lg:pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            Amazon Private Label Growth Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight"
          >
            Scaling Amazon Private Label Brands with{" "}
            <span className="text-peach">Data-Driven</span>{" "}
            <span className="text-peach">Strategy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed"
          >
            Helping Amazon brands grow traffic, improve conversions, and scale profitably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-accent/30 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Get Free Audit
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 rounded-2xl font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
