import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InfrastructureRealAssets = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Infrastructure &amp; Real Assets
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Investing in essential infrastructure and real assets that underpin economic resilience, from energy and
              logistics to digital connectivity and social infrastructure.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We target long-term, inflation-linked cash flows across energy transition, transport, logistics, water,
              waste and digital infrastructure. Our focus is on assets that are critical to the functioning of the real
              economy and are supported by durable demand.
            </p>
            <p>
              Combining thematic research with disciplined structuring, we aim to build portfolios that deliver both
              predictable yield and long-term capital appreciation, while aligning with broader sustainability and
              climate-resilience objectives.
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

export default InfrastructureRealAssets;