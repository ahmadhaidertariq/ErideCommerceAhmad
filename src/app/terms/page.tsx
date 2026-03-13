import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for ErideCommerce.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-slate-500">Last updated: March 2026</p>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the ErideCommerce website and services, you agree to be bound by
            these Terms of Service.
          </p>

          <h2>Services</h2>
          <p>
            ErideCommerce provides Amazon private label growth agency services. Specific terms for
            engagements will be outlined in separate service agreements.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:info@eridecommerce.com" className="text-primary hover:underline">
              info@eridecommerce.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
