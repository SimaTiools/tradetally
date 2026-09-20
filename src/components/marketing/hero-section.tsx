import Link from "next/link";
import {
  CreditCard,
  CalendarDays,
  Smartphone,
  FileX2,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import { PRODUCT } from "@/lib/product-truth";

const CHIPS = [
  { icon: CreditCard, label: "No card to start" },
  { icon: CalendarDays, label: "Free Starter after 14 days" },
  { icon: Smartphone, label: "Works in phone browser" },
  { icon: FileX2, label: "Does not file your tax return" },
] as const;

export function HeroSection() {
  return (
    <section className="section hero" aria-labelledby="hero-heading">
      <div className="landing-container hero-split">
        <div className="hero-copy">
          <h1 id="hero-heading">
            Invoice from the van.
            <br />
            Keep receipts ready for Self Assessment.
          </h1>
          <p className="lead">
            Simple invoicing, expense tracking and SA103F-ready summaries for UK
            sole traders. Built by a plasterer, for tradespeople. No
            spreadsheets. No complicated accounting jargon.
          </p>
          <div className="hero-actions">
            <Link className="lbtn lbtn-primary" href={PRODUCT.signupHref}>
              {PRODUCT.primaryCtaLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <a className="hero-secondary" href="#features">
              <PlayCircle size={20} aria-hidden />
              See how it works
            </a>
          </div>
          <p className="hero-risk">
            No card. No automatic charge. After 14 days stay on free Starter
            unless you choose Professional.
          </p>
          <ul className="objection-chips" aria-label="Why try TradeTally">
            {CHIPS.map(({ icon: Icon, label }) => (
              <li key={label} className="objection-chip">
                <Icon size={16} aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual" aria-hidden={false}>
          <div className="hero-visual-glow" aria-hidden />
          <div className="phone-frame" aria-label="Example TradeTally invoice on a phone">
            <div className="phone-screen">
              <Image
                src="/images/marketing/mobile-invoice.png"
                alt="Example TradeTally invoice screen · fictional details"
                width={960}
                height={1800}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
