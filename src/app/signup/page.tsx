import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { PRODUCT } from "@/lib/product-truth";

export const metadata: Metadata = {
  title: "Start your free trial",
  description:
    "Start your 14-day Professional trial. No card. No automatic charge.",
};

/** Placeholder signup route so marketing CTAs resolve in this marketing package. */
export default function SignupPage() {
  return (
    <div className="landing-root">
      <SiteHeader />
      <main className="landing-main">
        <section className="section">
          <div className="landing-container" style={{ maxWidth: 560 }}>
            <h1>Start your 14-day Pro trial</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              No card. No automatic charge. After 14 days you stay on free
              Starter unless you choose Professional at £
              {PRODUCT.professionalMonthlyGbp}/month or £
              {PRODUCT.professionalAnnualGbp}/year.
            </p>
            <p className="meta" style={{ marginTop: 24 }}>
              This marketing package ships a placeholder signup page. Wire{" "}
              <code>{PRODUCT.signupHref}</code> to the production auth flow when
              merging into the live TradeTally app.
            </p>
            <Link
              className="lbtn lbtn-primary"
              href="/"
              style={{ marginTop: 28 }}
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
