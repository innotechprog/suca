const pillars = [
  {
    title: "Capital with Conviction",
    description:
      "We deploy capital selectively across private markets, structuring investments to align interests, manage downside risk, and support sustainable value creation.",
  },
  {
    title: "Owner–Operator Mindset",
    description:
      "We take an active partnership approach, working closely with management teams to support operational discipline, strategic clarity, and long-term growth.",
  },
  {
    title: "Institutional Discipline",
    description:
      "Our investment philosophy is underpinned by governance, stewardship, and a commitment to risk-adjusted returns over the full investment lifecycle.",
  },
];

const PlatformSection = () => (
  <section id="platform" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary text-center">
        Our Platform
      </h2>
      <p className="mt-4 text-center text-muted-foreground italic max-w-xl mx-auto">
        A capital platform designed for complexity, longevity, and alignment.
      </p>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="border border-border rounded bg-card p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformSection;
