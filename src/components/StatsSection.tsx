import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "R48.3B", label: "AUM & Deals Advised*" },
  { value: "12", label: "Years in Business" },
  { value: "98", label: "Clients & Investors" },
  { value: "5", label: "Private Market Strategies" },
  { value: "3", label: "Global Hubs" },
  { value: "2013", label: "Year Founded" },
];

const StatsSection = () => (
  <section className="relative py-20">
    {/* Background */}
    <div className="absolute inset-0">
      <div className="h-full w-full bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy/80" />
    </div>

    <div className="relative container mx-auto px-6 grid lg:grid-cols-[1.1fr_1.1fr] gap-12 items-center text-primary-foreground">
      {/* Left: Stats grid */}
      <div className="bg-navy-dark/40 border border-cream-dark/15 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-y divide-cream-dark/15">
          {stats.map((item) => (
            <div key={item.label} className="px-8 py-8 text-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                {item.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-cream/70">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Copy + buttons */}
      <div className="space-y-5">
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-cream/70">
          Alternative Asset Manager &nbsp;|&nbsp; Capital Provider &nbsp;|&nbsp; Balance Sheet Optimiser &nbsp;|&nbsp; Augmented Alpha
        </p>

        <p className="text-sm md:text-base text-cream/85 leading-relaxed">
          SUCA Capital Partners bridges institutional capital and high-growth opportunities in private markets,
          deploying capital across private equity, private debt, venture capital, real estate and infrastructure to
          deliver augmented alpha—superior, risk-adjusted returns powered by digitally enhanced insights.
        </p>

        <p className="text-sm text-cream/80 leading-relaxed">
          Our thesis-driven, tech-enabled approach combines rigorous fundamental analysis with AI and data analytics to
          uncover hidden value, engineer tailored capital structures, and partner with management teams as active,
          owner-operator stewards of long-term growth.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-primary-foreground text-primary text-xs font-medium tracking-wide hover:bg-cream transition-colors"
          >
            Contact Us
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            to="/investment-focus"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded border border-cream/50 text-xs font-medium tracking-wide hover:bg-cream/10 transition-colors"
          >
            Explore Strategies
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
