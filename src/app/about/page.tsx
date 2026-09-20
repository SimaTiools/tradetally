import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";

export const metadata: Metadata = {
  title: "About Simon",
};

export default function AboutPage() {
  return (
    <div className="landing-root">
      <SiteHeader />
      <main className="landing-main">
        <section className="section">
          <div className="landing-container founder-story">
            <Image
              className="founder-portrait"
              src="/images/simon-founder.jpg"
              alt="Simon, the plasterer behind TradeTally"
              width={160}
              height={160}
            />
            <div>
              <h1>Built by a plasterer, for tradespeople.</h1>
              <p>
                I’m Simon Holyland, a working plasterer and sole trader. I built
                TradeTally for the paperwork after a day on site — invoices,
                receipts and SA103F-ready figures — without pretending to file
                your Self Assessment or MTD updates to HMRC.
              </p>
              <Link href="/">Back to homepage</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
