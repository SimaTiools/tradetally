import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Lock, RefreshCw, Mail } from "lucide-react";
import { PlansSection } from "@/components/marketing/plans-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { PRODUCT } from "@/lib/product-truth";

export const metadata: Metadata = {
  title: "Pricing for UK Tradespeople",
  description:
    "Starter is free. Professional is £12/month or £120/year. Every new account starts with 14 days of Professional — no card, no automatic charge.",
};

export default function PricingPage() {
  return (
    <div className="landing-root pricing-layout">
      <div className="pricing-top">
        <div className="pricing-banner">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Gift size={18} color="var(--teal)" aria-hidden />
            Every new account starts with 14 days of Professional. No card. No
            automatic charge.
          </span>
          <Link href="/#faq">More about the trial →</Link>
        </div>
        <SiteHeader />
      </div>
      <main id="content" tabIndex={-1} className="landing-main">
        <section className="pricing-page-hero">
          <div className="landing-container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 20,
                alignItems: "flex-end",
              }}
            >
              <div>
                <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Simple pricing for UK sole traders
                </h1>
                <p className="lead" style={{ marginTop: 12 }}>
                  Starter is free. Professional is £
                  {PRODUCT.professionalMonthlyGbp}/month or £
                  {PRODUCT.professionalAnnualGbp}/year. Save £
                  {PRODUCT.annualSaveGbp} when billed yearly.
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  All plans include
                </p>
                <div className="pricing-includes-bar">
                  <span>
                    <Lock size={16} aria-hidden /> Secure cloud data
                  </span>
                  <span>
                    <RefreshCw size={16} aria-hidden /> Regular updates
                  </span>
                  <span>
                    <Mail size={16} aria-hidden /> UK-based support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlansSection variant="pricing" showExcludes />

        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
