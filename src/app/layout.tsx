import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ErideCommerce | Amazon Private Label Growth Agency",
    template: "%s | ErideCommerce",
  },
  description: "Scaling Amazon Private Label Brands with data-driven strategy. We help Amazon brands increase rankings, improve conversions, and scale profitably.",
  keywords: ["Amazon agency", "Amazon private label", "Amazon PPC", "Amazon SEO", "Amazon growth", "eCommerce agency"],
  authors: [{ name: "ErideCommerce", url: "https://eridecommerce.com" }],
  openGraph: {
    title: "ErideCommerce | Amazon Private Label Growth Agency",
    description: "Scaling Amazon Private Label Brands with data-driven strategy.",
    url: "https://eridecommerce.com",
    siteName: "ErideCommerce",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://eridecommerce.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
