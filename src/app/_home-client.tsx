import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/marketing/hero-section";
import { PlansSection } from "@/components/marketing/plans-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { PRODUCT } from "@/lib/product-truth";

export default function HomeClient() {
  return (
    <div className="landing-root conversion-home">
      <SiteHeader />
      <main id="content" tabIndex={-1} className="landing-main">
        <HeroSection />

        <section
          className="section founder-intro"
          id="about"
          aria-labelledby="founder-heading"
        >
          <div className="landing-container founder-story">
            <Image
              className="founder-portrait"
              src="/images/simon-founder.jpg"
              alt="Simon, the plasterer behind TradeTally"
              width={160}
              height={160}
            />
            <div>
              <h2 id="founder-heading">
                The job was done. The paperwork wasn’t.
              </h2>
              <p>
                I’m Simon, a plasterer and sole trader. I built TradeTally around
                the admin that follows a day on site: sending invoices, keeping
                receipts and getting the figures ready for Self Assessment.
              </p>
              <Link href="/about">
                Read my story <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section workflow-section"
          id="features"
          aria-labelledby="workflow-heading"
        >
          <div className="landing-container">
            <div className="workflow-heading">
              <h2 id="workflow-heading">See your paperwork come together.</h2>
              <p className="lead">Take a look inside TradeTally. No account needed.</p>
            </div>
            <div className="workflow-preview">
              <div className="workflow-copy">
                <h3>From the job details to an invoice.</h3>
                <p>
                  Add your customer, labour and materials. Create a branded
                  invoice and send it from your phone, with an optional card
                  payment link through Stripe.
                </p>
                <Link className="lbtn lbtn-primary" href={PRODUCT.signupHref}>
                  {PRODUCT.primaryCtaLabel}
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
              <div className="workflow-screen">
                <Image
                  src="/images/marketing/desktop-invoice.png"
                  alt="TradeTally invoice form showing a customer, line items and totals"
                  width={880}
                  height={836}
                />
              </div>
            </div>
          </div>
        </section>

        <PlansSection variant="home" showExcludes={false} />

        <FaqSection />

        <section className="section final-invitation">
          <div className="landing-container">
            <h2>Put your next invoice through TradeTally.</h2>
            <p className="lead">
              Try Professional free for 14 days. No card and no automatic charge.
              Keep free Starter if you don’t upgrade.
            </p>
            <Link className="lbtn lbtn-primary" href={PRODUCT.signupHref}>
              {PRODUCT.primaryCtaLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
