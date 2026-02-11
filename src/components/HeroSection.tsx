import heroImage from "@/assets/hero-skyline.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-end">
    <img
      src={heroImage}
      alt="African city skyline at golden hour"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy/50 to-transparent" />
    <div className="relative container mx-auto px-6 pb-20 pt-32">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-2xl">
        Private Markets Capital.
        <br />
        Disciplined by Design.
      </h1>
      <p className="mt-4 text-lg text-cream-dark max-w-lg">
        Delivering Augmented Alpha in Private Markets
      </p>
      <a
        href="#platform"
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-navy-light transition-colors"
      >
        Our Platform <ArrowRight size={16} />
      </a>
    </div>
  </section>
);

export default HeroSection;
