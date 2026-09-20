import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/lib/product-truth";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <Link className="brand" href="/">
          <Image src="/images/logo.png" alt="" width={28} height={28} />
          TradeTally
        </Link>
        <div className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#about">About</Link>
        </div>
        <div className="nav-actions">
          <Link className="nav-login" href="/login">
            Log in
          </Link>
          <Link className="lbtn lbtn-primary nav-cta" href={PRODUCT.signupHref}>
            {PRODUCT.primaryCtaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="" width={26} height={26} />
          TradeTally
        </div>
        <p className="footer-copy">
          Invoicing, expenses and SA103F-ready exports for UK sole traders who
          work on site — not behind a spreadsheet.
        </p>
        <p className="footer-legal">
          © {new Date().getFullYear()} Sima Digital. TradeTally is a service of
          Simon Holyland trading as Sima Digital. Address for service: Office
          15999, 182-184 High Street North, East Ham, London, E6 2JA, United
          Kingdom. ICO registration no. ZC167882.
        </p>
      </div>
    </footer>
  );
}
