import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Origination",
    description:
      "Selective, conviction-led deal origination utilising alliance-driven access against clear investment themes.",
    details:
      "We leverage deep networks, local partnerships, and thematic research to identify opportunities that align with our investment criteria. Our origination process is disciplined — we pursue only those transactions where we see a clear path to value creation and where our involvement can be meaningfully additive.",
  },
  {
    number: "02",
    title: "Structuring",
    description:
      "Distinctive capital structures designed to protect downside, align incentives, and deliver long-term value.",
    details:
      "Each transaction is structured with care, balancing risk and return across the capital stack. We work closely with counterparties to design instruments that protect our investors while incentivising management teams and aligning all stakeholders toward shared objectives.",
  },
  {
    number: "03",
    title: "Active Ownership",
    description:
      "Ongoing engagement with boards, management teams, and governance frameworks to drive returns and stewardship.",
    details:
      "Post-investment, we take an active role in governance, strategic direction, and operational improvement. Our team works alongside portfolio company leadership to implement best practices, strengthen institutional capacity, and navigate complex operating environments.",
  },
  {
    number: "04",
    title: "Exit & Stewardship",
    description:
      "Thoughtful capital maturity platforms ensuring monetisation and enduring legacy.",
    details:
      "We plan exits from the outset, ensuring that our portfolio companies are positioned for successful transitions — whether through trade sales, secondary transactions, or public listings. Our stewardship extends beyond exit, as we seek to leave lasting, positive impact on the businesses and communities we serve.",
  },
];

const Approach = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Our Approach
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Our investment process is built on discipline, alignment, and a long-term perspective. From origination through to exit, every stage is designed to maximise value and uphold the highest standards of governance.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          {/* Steps */}
          <div className="grid gap-8">
            {steps.map((s) => (
              <div
                key={s.title}
                className="border border-border rounded bg-card p-8 md:p-10 flex gap-6"
              >
                <span className="font-serif text-3xl font-bold text-muted-foreground/30 shrink-0">
                  {s.number}
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-primary mb-3">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Leadership & Governance <ArrowRight size={16} />
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

export default Approach;
