import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#wholesale", label: "Wholesale" },
    { href: "/#success-stories", label: "Success Stories" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

// Social media links - hidden in UI, unhide when ready
const socialLinks = [
  { href: "https://linkedin.com/company/eridecommerce", label: "LinkedIn", icon: "linkedin" },
  { href: "https://facebook.com/eridecommerce", label: "Facebook", icon: "facebook" },
  { href: "https://instagram.com/eridecommerce", label: "Instagram", icon: "instagram" },
  { href: "https://wa.me/1234567890", label: "WhatsApp", icon: "whatsapp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Eride<span className="text-accent">Commerce</span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Scaling Amazon Private Label Brands with data-driven strategy and expert execution.
            </p>
            <a
              href="mailto:info@eridecommerce.com"
              className="mt-4 inline-block text-peach hover:text-peach-light transition-colors"
            >
              info@eridecommerce.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ready to Scale?</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get a free Amazon audit and discover your growth potential.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social links - hidden, remove 'sr-only' and add flex to display */}
        <div className="mt-8 sr-only" aria-hidden="true">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} ErideCommerce. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            eridecommerce.com
          </p>
        </div>
      </div>
    </footer>
  );
}
