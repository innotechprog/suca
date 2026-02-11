import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message Sent", description: "Thank you for your enquiry. We will respond shortly." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main>
        <header className="bg-primary text-primary-foreground pt-32 pb-24">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-cream-dark/70 max-w-xl">
              For institutional enquiries and engagement opportunities, please contact SUCA Capital Partners directly.
            </p>
          </div>
        </header>

        <section className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome enquiries from institutional investors, partners, and stakeholders seeking long-term engagement across Sub-Saharan Africa's private markets.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary text-sm">Email</h3>
                    <a href="mailto:info@sucacapital.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@sucacapital.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary text-sm">Office</h3>
                    <p className="text-muted-foreground text-sm">Sub-Saharan Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Full Name</label>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="flex h-11 w-full rounded border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="flex h-11 w-full rounded border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Subject</label>
                <input
                  required
                  maxLength={200}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="flex h-11 w-full rounded border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  placeholder="Enquiry subject"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <textarea
                  required
                  maxLength={2000}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="flex w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="px-8 py-3 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
