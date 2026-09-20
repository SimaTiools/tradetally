import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <div className="landing-root">
      <SiteHeader />
      <main className="landing-main">
        <section className="section">
          <div className="landing-container" style={{ maxWidth: 560 }}>
            <h1>Log in</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Placeholder login route for the marketing package. Connect to
              production authentication when integrating with the live app.
            </p>
            <Link className="lbtn lbtn-secondary" href="/" style={{ marginTop: 28 }}>
              Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
