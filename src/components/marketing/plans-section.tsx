import Link from "next/link";
import { ArrowRight, Info, Shield } from "lucide-react";
import {
  HONESTY_NOTE,
  HONESTY_NOTE_SHORT,
  PRODUCT,
  PROFESSIONAL_INCLUDES,
  STARTER_EXCLUDES,
  STARTER_INCLUDES,
} from "@/lib/product-truth";

type PlansSectionProps = {
  variant?: "home" | "pricing";
  showExcludes?: boolean;
};

export function PlansSection({
  variant = "home",
  showExcludes = true,
}: PlansSectionProps) {
  const isPricing = variant === "pricing";

  return (
    <section className="section" id="pricing" aria-labelledby="plans-heading">
      <div className="landing-container">
        <div className="plans-intro">
          {isPricing ? (
            <>
              <p className="plans-eyebrow">Built for UK construction trades</p>
              <h2 id="plans-heading">
                Start on Professional. Keep Starter free if that fits.
              </h2>
              <span className="plans-underline" aria-hidden />
              <p className="lead">
                Simple invoicing, expenses and construction extras. Choose the
                plan that fits how you work.
              </p>
            </>
          ) : (
            <>
              <h2 id="plans-heading">Try it on your next job.</h2>
              <p className="lead">
                Every new account starts on Professional for 14 days — unlimited
                invoices, receipt scanning and exports included. No card and no
                automatic charge. When the trial ends you move to free Starter (2
                invoices/month) unless you choose Professional at £
                {PRODUCT.professionalMonthlyGbp}/month or £
                {PRODUCT.professionalAnnualGbp}/year. Your records stay put
                either way.
              </p>
            </>
          )}
        </div>

        <div className="tiers">
          <article className="tier" aria-labelledby="starter-name">
            <h3 className="tier-name" id="starter-name">
              Starter
            </h3>
            <div className="tier-price">
              <span className="amt">£0</span>
              <span className="per">/month forever</span>
            </div>
            <p className="tier-desc">
              {isPricing
                ? "£0 forever, when it fits — perfect for occasional work."
                : "For sole traders sending occasional invoices."}
            </p>
            <p className="tier-list-label">Includes</p>
            <ul>
              {STARTER_INCLUDES.map((item) => (
                <li key={item}>
                  <span className="mark yes" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {showExcludes ? (
              <>
                <p className="tier-list-label">Not included</p>
                <ul>
                  {STARTER_EXCLUDES.map((item) => (
                    <li key={item}>
                      <span className="mark no" aria-hidden>
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className="tier-cta">
              <Link className="lbtn lbtn-secondary" href={PRODUCT.signupHref}>
                {isPricing
                  ? "Stay on free Starter after trial"
                  : "Use Starter free"}
              </Link>
            </div>
          </article>

          <article
            className="tier tier-pop"
            aria-labelledby="professional-name"
          >
            <span className="tier-badge">★ Most popular ★</span>
            <h3 className="tier-name" id="professional-name">
              Professional
            </h3>
            <div className="tier-price">
              <span className="amt">£{PRODUCT.professionalMonthlyGbp}</span>
              <span className="per">/month</span>
              <span className="per">
                or £{PRODUCT.professionalAnnualGbp}/year
              </span>
              <span className="save-pill">
                Save £{PRODUCT.annualSaveGbp}/year
              </span>
            </div>
            <p className="tier-desc">
              Includes 14-day free trial. Everything in Starter, plus:
            </p>
            <p className="tier-list-label">Includes</p>
            <ul>
              {PROFESSIONAL_INCLUDES.map((item) => (
                <li key={item}>
                  <span className="mark yes" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="honesty-note" role="note">
              {isPricing ? (
                <Info size={18} aria-hidden />
              ) : (
                <Shield size={18} aria-hidden />
              )}
              <span>{isPricing ? HONESTY_NOTE : HONESTY_NOTE_SHORT}</span>
            </div>
            <div className="tier-cta">
              <Link className="lbtn lbtn-teal" href={PRODUCT.signupHref}>
                {PRODUCT.primaryCtaLabel}
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <p className="tier-micro">No card required · Cancel anytime</p>
          </article>
        </div>

        <p className="meta" style={{ textAlign: "center", marginTop: 28 }}>
          Professional is £{PRODUCT.professionalMonthlyGbp}/month or £
          {PRODUCT.professionalAnnualGbp}/year. The listed price is final, with
          no VAT added. TradeTally does not submit Self Assessment or MTD to
          HMRC.
        </p>
      </div>
    </section>
  );
}
