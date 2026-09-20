import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "./landing.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-tt-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-tt-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Invoicing & Accounting Software for UK Tradespeople | TradeTally",
    template: "%s | TradeTally",
  },
  description:
    "Invoicing and accounting software for UK tradespeople: send invoices, track expenses and prepare SA103F-ready records. 14-day free trial, no card required.",
  metadataBase: new URL("https://tradetally.co.uk"),
  openGraph: {
    title: "Invoicing & Accounting Software for UK Tradespeople | TradeTally",
    description:
      "Invoicing and accounting software for UK tradespeople: send invoices, track expenses and prepare SA103F-ready records. 14-day free trial, no card required.",
    url: "https://tradetally.co.uk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
