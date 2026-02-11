const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Our Platform", href: "/platform" },
      { label: "Investment Focus", href: "/investment-focus" },
      { label: "Our Approach", href: "/approach" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Leadership & Governance", href: "/leadership" },
      { label: "SUCA Group", href: "/suca-group" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Institutional Enquiries", href: "mailto:info@sucacapital.com" },
      { label: "General Enquiries", href: "mailto:info@sucacapital.com" },
    ],
  },
];

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-serif text-2xl font-bold">SUCA</span>
          <p className="mt-3 text-sm text-cream-dark/70 leading-relaxed">
            Private Markets Capital.
            <br />
            Disciplined by Design.
          </p>
        </div>

        {/* Link groups */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cream-dark/60">
              {group.title}
            </h4>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-dark/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-cream-dark/15 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <p className="text-xs text-cream-dark/50">
            © {new Date().getFullYear()} SUCA Capital Partners. All rights reserved.
          </p>
          <p className="text-[11px] text-cream-dark/60">
            Developed by{" "}
            <a
              href="https://ib-innovativesolutions.com/it-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              IB Innovative Solutions
            </a>
            .
          </p>
        </div>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="text-xs text-cream-dark/50 hover:text-cream transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="text-xs text-cream-dark/50 hover:text-cream transition-colors">
            Terms of Use
          </a>
          <a href="/disclaimer" className="text-xs text-cream-dark/50 hover:text-cream transition-colors">
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
