import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Capital with Conviction",
    description:
      "We deploy capital selectively across private markets, structuring investments to align interests, manage downside risk, and support sustainable value creation.",
    details:
      "Our conviction-led approach means we invest only where we see a clear path to long-term value. We structure each investment to ensure alignment between all stakeholders, with robust downside protection mechanisms built into every transaction.",
  },
  {
    title: "Owner–Operator Mindset",
    description:
      "We take an active partnership approach, working closely with management teams to support operational discipline, strategic clarity, and long-term growth.",
    details:
      "Beyond providing capital, we embed ourselves alongside management teams. Our hands-on involvement spans strategic planning, operational improvements, talent development, and governance enhancement — ensuring our portfolio companies are positioned for sustained success.",
  },
  {
    title: "Institutional Discipline",
    description:
      "Our investment philosophy is underpinned by governance, stewardship, and a commitment to risk-adjusted returns over the full investment lifecycle.",
    details:
      "We apply institutional-grade rigour to every aspect of our operations. From due diligence through to exit, our processes are designed to deliver consistent, risk-adjusted returns while maintaining the highest standards of corporate governance and fiduciary responsibility.",
  },
];

const Platform = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Our Platform
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              A capital platform designed for complexity, longevity, and alignment. SUCA Capital Partners brings together deep market knowledge, institutional rigour, and an owner–operator mindset to deploy capital across Sub-Saharan Africa&apos;s private markets.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          {/* Pillars */}
          <div className="grid gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="border border-border rounded bg-card p-8 md:p-10"
              >
                <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.details}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/investment-focus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Investment Focus <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Platform;
