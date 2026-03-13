"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

const wholesaleServices = [
  { icon: "✓", title: "Brand Approval", description: "Navigate the approval process with established brands and authorized distributors." },
  { icon: "🔗", title: "Supplier Sourcing", description: "Identify and vet profitable wholesale suppliers aligned with your business goals." },
  { icon: "🤝", title: "Distributor Relationships", description: "Build and maintain strong relationships with key distributors and manufacturers." },
  { icon: "📊", title: "Inventory Planning", description: "Data-driven inventory forecasting to optimize cash flow and prevent stockouts." },
  { icon: "💰", title: "Profit Analysis", description: "Comprehensive margin analysis to ensure profitable wholesale operations." },
  { icon: "⚙️", title: "Wholesale Account Setup", description: "End-to-end setup of your Amazon wholesale business infrastructure." },
  { icon: "📋", title: "Amazon Compliance", description: "Stay compliant with Amazon policies, invoicing requirements, and brand gating." },
];

const growthSteps = [
  { step: 1, title: "Product Research", description: "Identify high-potential products and brands for wholesale expansion." },
  { step: 2, title: "Brand Approval", description: "Secure approval from brands and authorized distributors." },
  { step: 3, title: "Supplier Negotiation", description: "Negotiate terms, pricing, and minimum order quantities." },
  { step: 4, title: "Scaling Inventory", description: "Scale inventory strategically based on demand and profitability." },
];

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
          >
            <ImageWithFallback
              src="/wholesale/wholesale.png"
              alt="Amazon FBA Wholesale Growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-slate-900"
            >
              Amazon FBA Wholesale Growth
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-slate-600"
            >
              Expand your Amazon business with our full-service wholesale solutions. From brand
              approval to inventory scaling, we handle the complexity so you can grow with confidence.
            </motion.p>

            {/* 4-Step Growth Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">4-Step Wholesale Growth Process</h3>
              <div className="space-y-4">
                {growthSteps.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Services List */}
            <div className="mt-12 space-y-4">
              {wholesaleServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/60 hover:border-primary/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{service.title}</h4>
                    <p className="mt-0.5 text-slate-600 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
