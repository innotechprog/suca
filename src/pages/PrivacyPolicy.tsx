import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main>
      <header className="bg-primary text-primary-foreground pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-cream-dark/80 leading-relaxed text-lg">
              How SUCA Capital Partners collects, uses and protects personal information in the course of our
              institutional relationships.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6 pt-12 max-w-3xl">
          <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed">
          <p className="text-sm text-muted-foreground/70">Last updated: February 2026</p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">1. Introduction</h2>
          <p>
            SUCA Capital Partners (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us.
          </p>
          <p>
            Personal information may include your name, email address, phone number, company affiliation, and any other information you choose to provide.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your enquiries and provide requested information</li>
            <li>Send administrative information and updates</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Protect our legal rights and prevent misuse</li>
          </ul>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">4. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">5. Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as required by law or with your explicit consent.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary mt-8">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
