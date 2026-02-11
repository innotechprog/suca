import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialSituations = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Special Situations
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Pursuing opportunistic, complexity-driven investments where our active involvement and structuring
              expertise can unlock meaningful value.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We focus on dislocated or transitional situations &mdash; including turnarounds, carve-outs and balance
              sheet restructurings &mdash; where patient capital, governance enhancement and hands-on support can
              restore stability and growth.
            </p>
            <p>
              Our objective is to construct downside-protected entry points into fundamentally sound businesses facing
              temporary complexity, aligning our returns with successful repositioning and long-term performance.
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

export default SpecialSituations;