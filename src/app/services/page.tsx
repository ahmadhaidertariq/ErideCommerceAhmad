import type { Metadata } from "next";
import ServicesSection from "@/sections/ServicesSection";
import WholesaleSection from "@/sections/WholesaleSection";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service Amazon growth solutions: listing optimization, PPC management, brand management, wholesale, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Amazon Growth Services
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Comprehensive solutions tailored to scale your private label brand
          </p>
        </div>
      </section>
      <ServicesSection />
      <WholesaleSection />
      <ContactSection />
    </div>
  );
}
