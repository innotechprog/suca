import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary">
        Engaging Capital for Long-Term Outcomes
      </h2>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#platform"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded text-sm font-medium text-primary hover:bg-muted transition-colors"
        >
          Our Investment Platform <ArrowRight size={16} />
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-navy-light transition-colors"
        >
          Contact Us <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
