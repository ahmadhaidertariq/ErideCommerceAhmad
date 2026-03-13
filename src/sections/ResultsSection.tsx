"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    niche: "Home & Kitchen",
    before: { sales: 42, acos: 38, traffic: 55, conversion: 8.2 },
    after: { sales: 89, acos: 22, traffic: 94, conversion: 12.4 },
    growth: "+112%",
  },
  {
    niche: "Fitness Supplements",
    before: { sales: 28, acos: 45, traffic: 40, conversion: 6.8 },
    after: { sales: 71, acos: 28, traffic: 88, conversion: 10.2 },
    growth: "+153%",
  },
  {
    niche: "Pet Accessories",
    before: { sales: 35, acos: 42, traffic: 48, conversion: 7.4 },
    after: { sales: 82, acos: 24, traffic: 95, conversion: 11.8 },
    growth: "+134%",
  },
];

function MetricBar({ label, before, after, reverse = false }: { label: string; before: number; after: number; reverse?: boolean }) {
  const improvement = ((after - before) / before) * 100;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-primary">+{improvement.toFixed(0)}%</span>
      </div>
      <div className="flex gap-2 items-end h-6">
        <div
          className="flex-1 bg-slate-200 rounded-lg overflow-hidden"
          style={{ minWidth: "40px" }}
        >
          <div
            className={`h-full bg-slate-400 rounded-lg transition-all`}
            style={{ width: `${before}%` }}
          />
        </div>
        <span className="text-xs text-slate-500 w-8">Before</span>
        <div
          className="flex-1 bg-primary/20 rounded-lg overflow-hidden"
          style={{ minWidth: "40px" }}
        >
          <div
            className="h-full bg-primary rounded-lg transition-all"
            style={{ width: `${after}%` }}
          />
        </div>
        <span className="text-xs text-slate-500 w-8">After</span>
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Proven Results That Speak
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Before and after metrics from brands we&apos;ve helped scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.niche}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-slate-900">{study.niche}</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full font-bold text-sm">
                  {study.growth}
                </span>
              </div>

              <div className="space-y-4">
                <MetricBar
                  label="Sales Growth (Index)"
                  before={study.before.sales}
                  after={study.after.sales}
                />
                <MetricBar
                  label="ACOS Reduction"
                  before={study.before.acos}
                  after={study.after.acos}
                />
                <MetricBar
                  label="Traffic Growth"
                  before={study.before.traffic}
                  after={study.after.traffic}
                />
                <MetricBar
                  label="Conversion %"
                  before={study.before.conversion}
                  after={study.after.conversion}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
