import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    title: "Private Equity",
    description:
      "We invest in high-quality businesses with strong fundamentals, partnering with management teams to accelerate growth, improve operations, and build lasting enterprise value across Sub-Saharan Africa.",
  },
  {
    title: "Infrastructure & Real Assets",
    description:
      "We target essential infrastructure assets — energy, transport, logistics, and digital infrastructure — where patient capital and active ownership can deliver durable, inflation-protected returns.",
  },
  {
    title: "Structured Capital",
    description:
      "We provide bespoke capital solutions including mezzanine, preferred equity, and hybrid instruments, offering flexible structures tailored to the specific needs of businesses and sponsors.",
  },
  {
    title: "Special Situations",
    description:
      "We pursue opportunistic investments in complex or dislocated situations where our expertise and patient approach can unlock significant value for stakeholders.",
  },
  {
    title: "Public–Private Partnerships",
    description:
      "We engage in structured partnerships with public-sector entities, leveraging private capital and operational expertise to deliver essential services and infrastructure development.",
  },
];

const InvestmentFocusPage = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Investment Focus
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              We invest across private markets where patient capital and active ownership can drive durable outcomes. Our focus areas reflect deep conviction in Sub-Saharan Africa&apos;s long-term growth potential.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          {/* Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="border border-border rounded bg-card p-8"
              >
                <h2 className="font-serif text-xl font-semibold text-primary mb-4">
                  {area.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Our Approach <ArrowRight size={16} />
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

export default InvestmentFocusPage;
