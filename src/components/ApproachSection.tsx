import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Origination",
    description:
      "Selective, conviction-led deal origination utilising alliance-driven access against clear investment themes.",
  },
  {
    title: "Structuring",
    description:
      "Distinctive capital-inactive structures managed into owner-set return and long-term value.",
  },
  {
    title: "Active Ownership",
    description:
      "Ongoing engagement with boards, management teams, and governance frameworks to drive returns and stewardship.",
  },
  {
    title: "Exit & Stewardship",
    description:
      "Thoughtful capital maturity platforms ensuring monetisation and enduring legacy.",
  },
];

const ApproachSection = () => (
  <section id="approach" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary text-center">
        Our Approach
      </h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.title}
            className="border border-border rounded bg-background p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-semibold text-primary">
                {s.title}
              </h3>
              <ArrowRight size={16} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
