"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

// 4 service blocks with images: Brand Management (1024x1024), listing (1344x768), PPC (1024x1024), wholesale (1472x704)
const servicesWithImages = [
  {
    title: "Brand Management",
    description: "Comprehensive brand strategy to build equity, protect your reputation, and drive long-term growth.",
    image: "/services/brand-management.png",
    aspect: "aspect-square",
  },
  {
    title: "Amazon Listing Optimization",
    description: "Craft compelling titles, bullets, and descriptions that convert browsers into buyers and rank for high-intent keywords.",
    image: "/services/listing-optimization.png",
    aspect: "aspect-video",
  },
  {
    title: "Amazon PPC Management",
    description: "Data-driven advertising strategies to maximize ROAS, reduce ACOS, and scale profitable campaigns.",
    image: "/services/ppc-management.png",
    aspect: "aspect-square",
  },
  {
    title: "Amazon FBA Wholesale",
    description: "Full-service wholesale solutions from brand approval to inventory scaling. Grow your Amazon business with confidence.",
    image: "/wholesale/wholesale.png",
    aspect: "aspect-video",
  },
];

const additionalServices = [
  { icon: "🚀", title: "Product Launch Strategy", description: "Proven launch playbooks to achieve category domination and sustainable organic rankings." },
  { icon: "🔍", title: "Keyword Research", description: "Deep competitive analysis and keyword identification to uncover untapped opportunities." },
  { icon: "🔄", title: "Conversion Rate Optimization", description: "A/B testing and optimization to improve listing conversion rates and maximize sales per visitor." },
  { icon: "📦", title: "Catalog Optimization", description: "Strategic product grouping and variation management for better discoverability and conversion." },
  { icon: "✨", title: "Amazon SEO", description: "Technical and on-page optimization to improve organic visibility and search rankings." },
  { icon: "🏪", title: "Brand Store Design", description: "Custom storefronts that showcase your brand story and drive cross-selling opportunities." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Full-Service Amazon Growth
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            End-to-end solutions to scale your private label brand on Amazon
          </p>
        </motion.div>

        {/* 4 image cards - 2x2 grid, text below each image to avoid overlap */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {servicesWithImages.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link href="/#contact" className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className={`${service.aspect} relative overflow-hidden`}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
