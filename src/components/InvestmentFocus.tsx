import investmentBg from "@/assets/investment-bg.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  { label: "Private Equity", to: "/investment-focus/private-equity" },
  { label: "Infrastructure & Real Assets", to: "/investment-focus/infrastructure-real-assets" },
  { label: "Structured Capital", to: "/investment-focus/structured-capital" },
  { label: "Special Situations", to: "/investment-focus/special-situations" },
  { label: "Public–Private Partnerships", to: "/investment-focus/public-private-partnerships" },
];

const InvestmentFocus = () => (
  <section id="investment-focus" className="relative py-24">
    <img
      src={investmentBg}
      alt="African landscape with city in distance"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy/60 to-navy/30" />
    <div className="relative container mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">
        Investment Focus
      </h2>
      <p className="mt-4 text-cream-dark max-w-lg">
        We invest across private markets where patient capital and active ownership can drive durable outcomes.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        {areas.map((area) => (
          <Link
            key={area.to}
            to={area.to}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cream-dark/40 rounded text-sm text-primary-foreground hover:bg-cream/10 transition-colors"
          >
            {area.label} <ArrowRight size={14} />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentFocus;
