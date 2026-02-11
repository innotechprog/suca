import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StructuredCapital = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Structured Capital
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Providing bespoke, risk-aware capital solutions across the capital structure to support complex growth,
              transition and recapitalisation needs.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We design flexible instruments &mdash; including mezzanine, preferred equity and hybrid securities
              &mdash; that align the interests of sponsors, management teams and investors. Our structures are built to
              protect downside while preserving meaningful participation in upside.
            </p>
            <p>
              By combining deep structuring expertise with rigorous credit and equity analysis, SUCA is able to unlock
              transactions that traditional capital often cannot accommodate, particularly in situations that require
              creativity, speed and tailored solutions.
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

export default StructuredCapital;