import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    title: "Experienced Leadership",
    description:
      "SUCA Capital Partners is led by professionals with deep experience across investment management, corporate finance, advisory, and operating environments in Sub-Saharan Africa and globally.",
  },
  {
    title: "Governance Framework",
    description:
      "Our governance framework ensures accountability, transparency, and alignment of interests at every level. We maintain rigorous oversight through independent advisory structures and institutional-grade reporting.",
  },
  {
    title: "Long-Term Stewardship",
    description:
      "We believe that responsible stewardship is central to sustainable value creation. Our approach integrates environmental, social, and governance considerations into investment decisions and portfolio management.",
  },
  {
    title: "Fiduciary Responsibility",
    description:
      "We hold ourselves to the highest fiduciary standards, acting in the best interests of our investors and stakeholders at all times. Our track record reflects a commitment to integrity, discipline, and prudent capital allocation.",
  },
];

const Leadership = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Leadership & Governance
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              SUCA Capital Partners is led by experienced professionals with backgrounds across investment, advisory, and operating environments. Governance, accountability, and long-term stewardship underpin our platform.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          {/* Principles */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="border border-border rounded bg-card p-8"
              >
                <h2 className="font-serif text-xl font-semibold text-primary mb-4">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/suca-group"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              SUCA Group <ArrowRight size={16} />
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

export default Leadership;
