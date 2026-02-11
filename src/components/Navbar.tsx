import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import sucaLogo from "@/assets/suca-logo.png";

const basicLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", href: "#platform" },
  { label: "Our Approach", href: "#approach" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", to: "/contact" },
];

const sectionLinks = [
  { label: "Our Platform", to: "/platform" },
  { label: "Investment Focus", to: "/investment-focus" },
  { label: "Our Approach", to: "/approach" },
  { label: "Leadership & Governance", to: "/leadership" },
  { label: "SUCA Group", to: "/suca-group" },
];

const BasicLinkItem = ({ link, onClick }: { link: (typeof basicLinks)[0]; onClick?: () => void }) => {
  const cls = "text-xs font-medium text-muted-foreground hover:text-primary transition-colors";
  if ("to" in link && link.to) {
    return <Link to={link.to} className={cls} onClick={onClick}>{link.label}</Link>;
  }
  return <a href={link.href} className={cls} onClick={onClick}>{link.label}</a>;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="container mx-auto flex px-6">
          {/* Logo column */}
          <div className="flex items-center justify-center w-40 shrink-0 border-r border-border py-2">
            <a href="/" className="flex items-center justify-center">
              <img
                src={sucaLogo}
                alt="SUCA Capital Partners"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Right column: two rows */}
          <div className="flex-1 flex flex-col">
            {/* Top row: basic links */}
            <div className="flex items-center justify-between h-10 px-6 border-b border-border">
              <ul className="flex items-center gap-6">
                {basicLinks.map((link) => (
                  <li key={link.label}>
                    <BasicLinkItem link={link} />
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Bottom row: section links */}
            <div className="flex items-center h-12 px-6">
              <ul className="flex items-center gap-8">
                {sectionLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b border-border" />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <nav className="container mx-auto flex items-center justify-between h-14 px-6 border-b border-border">
          <a href="/" className="flex items-center">
            <img
              src={sucaLogo}
              alt="SUCA Capital Partners"
              className="h-8 w-auto"
            />
          </a>
          <button
            className="text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className="bg-card border-b border-border px-6 pb-4 pt-2">
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Pages</p>
            <ul className="flex flex-col gap-2 mb-4">
              {basicLinks.map((link) => (
                <li key={link.label}>
                  <BasicLinkItem link={link} onClick={() => setOpen(false)} />
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Sections</p>
            <ul className="flex flex-col gap-2">
              {sectionLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
