import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ErideCommerce - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-500">Last updated: March 2026</p>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly, such as when you fill out our contact form,
            including your name, email address, brand name, and message content.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide our services,
            and communicate with you about ErideCommerce.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            except as necessary to provide our services or as required by law.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this Privacy Policy, contact us at{" "}
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
