import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PublicPrivatePartnerships = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Public–Private Partnerships
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Structuring and deploying capital into partnerships between public institutions and private operators to
              deliver essential services and long-term infrastructure.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              SUCA partners with government entities, municipalities and state-owned companies to design and finance
              projects that balance commercial viability with developmental impact. Our focus is on transparent
              governance, risk allocation and long-term stewardship.
            </p>
            <p>
              By aligning public objectives with private execution capability and capital, we aim to unlock
              infrastructure and service delivery initiatives that might otherwise remain unfunded or under-resourced.
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

export default PublicPrivatePartnerships;