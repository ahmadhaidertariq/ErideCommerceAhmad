"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";

const stats = [
  { value: 137, suffix: "+", label: "Brands Scaled" },
  { value: 46.8, prefix: "$", suffix: "M", decimals: 1, label: "Revenue Managed" },
  { value: 372, suffix: "+", label: "Products Launched" },
  { value: 4.83, decimals: 2, label: "Average Client Rating" },
  { value: 91, suffix: "%", label: "Client Retention Rate" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <div className="mt-2 text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
