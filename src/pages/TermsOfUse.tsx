import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Terms of Use
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              The terms and conditions governing access to and use of the SUCA Capital Partners website.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12 max-w-3xl">
          <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed">
          <p className="text-sm text-muted-foreground/70">Last updated: February 2026</p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the SUCA Capital Partners website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">2. Use of Website</h2>
          <p>
            This website is provided for informational purposes only. The content on this website does not constitute an offer, solicitation, or recommendation to buy or sell any investment product or service.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of SUCA Capital Partners and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">4. Limitation of Liability</h2>
          <p>
            SUCA Capital Partners shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">5. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the applicable jurisdiction in which SUCA Capital Partners operates.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">7. Contact</h2>
          <p>
            For questions regarding these Terms of Use, please contact{" "}
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

export default TermsOfUse;
