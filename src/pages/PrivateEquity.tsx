import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateEquity = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Private Equity
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Targeting high-potential businesses where strategic capital, operational re-engineering and digital
              modernisation can unlock hidden value and accelerate long-term growth.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              SUCA Capital Partners focuses on small-to-mid-sized enterprises where our capital can be a true catalyst
              for change. We look beyond current performance to identify businesses with strong fundamentals that
              require strategic capital, operational discipline, or digital enablement to reach their full potential.
            </p>
            <p>
              Our private equity strategy is conviction-led. We identify structural shifts at the intersection of sector
              expertise and technology, then back the companies best positioned to capture those themes. We partner
              closely with management teams to drive operational excellence, digital innovation, and targeted
              consolidation, aiming to &ldquo;buy complexity and sell simplicity&rdquo; over the investment lifecycle.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/investment-focus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Back to Investment Focus <ArrowRight size={16} />
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

export default PrivateEquity;