"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";

const reviews = [
  {
    name: "Sarah M.",
    role: "Home & Kitchen Brand Owner",
    text: "ErideCommerce transformed our Amazon presence. Revenue doubled in 4 months and our ACOS dropped from 42% to 22%. Their data-driven approach is exactly what we needed.",
    rating: 5,
    avatar: "/images/avatars/avatar1.svg",
  },
  {
    name: "James K.",
    role: "Fitness Supplement Founder",
    text: "The launch strategy they built for us was incredible. We hit first page in 8 weeks. Couldn&apos;t have asked for a better partner to scale our brand.",
    rating: 5,
    avatar: "/images/avatars/avatar2.svg",
  },
  {
    name: "Maria L.",
    role: "Pet Accessories CEO",
    text: "They streamlined our catalog and improved our conversion rate by 59%. The team is responsive, strategic, and truly understands Amazon.",
    rating: 5,
    avatar: "/images/avatars/avatar3.svg",
  },
  {
    name: "David R.",
    role: "Beauty Tools Brand",
    text: "Finally, year-round revenue stability. Their demand forecasting and seasonal planning solved our inventory headaches. Highly recommend.",
    rating: 5,
    avatar: "/images/avatars/avatar4.svg",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Trusted by 137+ Amazon brands
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200/60"
            >
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-2xl">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed italic">
                &ldquo;{reviews[current].text}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 relative aspect-square">
                  <ImageWithFallback
                    src={reviews[current].avatar}
                    alt={reviews[current].name}
                    fill
                    className="object-cover"
                    fallbackIcon="avatar"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{reviews[current].name}</div>
                  <div className="text-sm text-slate-500">{reviews[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
