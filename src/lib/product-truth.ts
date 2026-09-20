/** Shared product truth for marketing pages — keep in sync with FAQ. */
export const PRODUCT = {
  trialDays: 14,
  starterInvoiceLimit: 2,
  professionalMonthlyGbp: 12,
  professionalAnnualGbp: 120,
  annualSaveGbp: 24,
  signupHref: "/signup",
  primaryCtaLabel: "Start 14-day Pro trial",
} as const;

export const STARTER_INCLUDES = [
  "Up to 2 invoices per month",
  "Unlimited manual expense records",
  "Branded invoice PDFs",
  "Live profit dashboard",
  "Email support",
] as const;

export const STARTER_EXCLUDES = [
  "Receipt photo scanning",
  "SA103F-ready exports",
  "CIS deductions suffered",
  "Stripe payment links",
  "Accountant read-only link",
  "Unlimited invoices",
] as const;

export const PROFESSIONAL_INCLUDES = [
  "Unlimited invoices and quotes",
  "Receipt photo scanning",
  "SA103F-ready exports",
  "CIS deductions suffered",
  "Stripe payment links",
  "Accountant read-only link",
] as const;

export const HONESTY_NOTE =
  "Honesty note: TradeTally does not submit Self Assessment or MTD to HMRC.";

export const HONESTY_NOTE_SHORT =
  "Honest work: TradeTally does not file to HMRC.";

export const FAQ_ITEMS = [
  {
    q: "How much does TradeTally cost?",
    a: "Starter is £0 with up to 2 invoices per month and unlimited manual expense records. Professional is £12/month, or £120/year on annual billing. Professional adds unlimited invoices and quotes, receipt photo scanning, SA103F-ready exports, CIS deduction tracking and the accountant link.",
  },
  {
    q: "What happens after the 14-day trial?",
    a: "You move automatically to the free Starter plan unless you choose Professional. There is no automatic charge because no card is required to start. Your account and existing records stay in place, so you can upgrade later without starting again.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Every new account gets 14 days of Professional access without entering payment details.",
  },
  {
    q: "Does TradeTally submit my tax return or MTD updates to HMRC?",
    a: "No. TradeTally keeps invoices, expenses and receipts organised and produces SA103F-ready exports. It does not file a Self Assessment return or submit MTD updates to HMRC. Use the export with your accountant or HMRC-recognised MTD software.",
  },
  {
    q: "Can TradeTally replace my accountant?",
    a: "TradeTally handles day-to-day records, invoicing, expenses and exports, but it does not give tax advice. If your affairs are straightforward, the organised figures can make filing easier. If you use an accountant, the read-only link and exports give them cleaner records to work from.",
  },
  {
    q: "Does TradeTally work on a phone?",
    a: "Yes. TradeTally runs in a phone or desktop browser, so you can send an invoice, photograph a receipt or check who owes you without installing an app.",
  },
] as const;
