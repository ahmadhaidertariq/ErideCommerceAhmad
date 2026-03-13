import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ErideCommerce - our mission to scale Amazon private label brands with data-driven strategy and expert execution.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
