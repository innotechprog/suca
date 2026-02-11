import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const entities = [
  {
    title: "SUCA Capital Partners",
    description:
      "The investment arm of the SUCA ecosystem, focused on deploying patient capital across Sub-Saharan Africa's private markets. SUCA Capital Partners operates with institutional discipline, active ownership, and a long-term perspective on value creation.",
    tag: "Investment",
  },
  {
    title: "Advisory & Consulting",
    description:
      "Providing strategic advisory services to corporates, institutions, and governments across the continent. Our advisory practice leverages deep sector expertise and market knowledge to deliver actionable insights and structured solutions.",
    tag: "Advisory",
  },
  {
    title: "Operating Entities",
    description:
      "The SUCA Group's operating entities are engaged in building and scaling businesses across key sectors, contributing to economic development and job creation in the markets where we operate.",
    tag: "Operations",
  },
];

const SucaGroupPage = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              SUCA Group
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              SUCA Capital Partners operates as the investment arm within the broader SUCA ecosystem. The platform is distinct from advisory and operating entities within the group, each contributing to a shared vision of long-term value creation across Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          {/* Entities */}
          <div className="grid gap-6">
            {entities.map((entity) => (
              <div
                key={entity.title}
                className="border border-border rounded bg-card p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded">
                    {entity.tag}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                  {entity.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Our Platform <ArrowRight size={16} />
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

export default SucaGroupPage;
