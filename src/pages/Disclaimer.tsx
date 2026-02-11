import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              Important information regarding the nature of information on this website and the limitations of any
              investment or advisory content.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12 max-w-3xl">
          <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed">
          <p className="text-sm text-muted-foreground/70">Last updated: February 2026</p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">1. General Information</h2>
          <p>
            The information provided on this website is for general informational purposes only. Nothing on this website constitutes professional financial, legal, or investment advice, nor does it constitute an offer or solicitation to purchase or sell any security or investment product.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">2. No Investment Advice</h2>
          <p>
            SUCA Capital Partners does not provide personalised investment advice through this website. Any investment decisions should be made in consultation with qualified financial advisors who can assess your individual circumstances and risk tolerance.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">3. Forward-Looking Statements</h2>
          <p>
            This website may contain forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those expressed or implied by such statements. Past performance is not indicative of future results.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">4. Accuracy of Information</h2>
          <p>
            While we endeavour to keep the information on this website current and accurate, SUCA Capital Partners makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">5. External Links</h2>
          <p>
            This website may contain links to external websites. SUCA Capital Partners is not responsible for the content, accuracy, or practices of any third-party websites.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">6. Contact</h2>
          <p>
            For any questions regarding this disclaimer, please contact{" "}
            <a href="mailto:info@sucacapital.com" className="text-primary hover:underline">
              info@sucacapital.com
            </a>
            .
          </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Disclaimer;
