"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    monthlyRevenue: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", brandName: "", monthlyRevenue: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Let&apos;s Scale Your Brand
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Get a free Amazon audit and discover your growth potential. Our team will analyze your listings, PPC, and strategy.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@eridecommerce.com"
                className="block text-primary hover:text-primary-dark font-medium"
              >
                info@eridecommerce.com
              </a>
              <p className="text-slate-600">
                eridecommerce.com
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="brandName" className="block text-sm font-medium text-slate-700 mb-2">
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your brand name"
                />
              </div>

              <div>
                <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Revenue
                </label>
                <select
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                >
                  <option value="">Select range</option>
                  <option value="0-10k">$0 - $10K</option>
                  <option value="10k-50k">$10K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your brand and goals..."
                />
              </div>

              {status === "success" && (
                <p className="text-green-600 font-medium">Thanks! We&apos;ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white rounded-xl font-semibold text-lg transition-all"
              >
                {status === "loading" ? "Sending..." : "Get Free Audit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
