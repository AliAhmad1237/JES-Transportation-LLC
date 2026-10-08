import type { Metadata } from "next";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Terms of Use | JES Transportation LLC",
  description:
    "Terms of Use for JES Transportation LLC website. Guidelines for website access, commercial inquiries, and carrier verification.",
};

export default function TermsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jestransportation.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Use",
        item: "https://jestransportation.com/terms",
      },
    ],
  };

  return (
    <div className="bg-nearBlack text-warmWhite min-h-screen pt-32 pb-24 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-4">
            LEGAL & OPERATIONAL CONDITIONS
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl uppercase tracking-tight text-warmWhite">
            TERMS OF USE
          </h1>
          <p className="font-mono text-xs text-mutedSteel mt-4">
            EFFECTIVE: OCTOBER 2026 · APPLICABLE TO ALL VISITORS AND BROKERS
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12 font-body text-sm sm:text-base text-softGray/85 font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be
              bound by these Terms of Use. If you do not agree with any part of
              these terms, please do not use this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              2. Carrier Information & Verification
            </h2>
            <p>
              All motor carrier information displayed on this website is derived
              from official filings with the Federal Motor Carrier Safety
              Administration (FMCSA). While we endeavor to maintain current
              records, shippers and brokers are encouraged to verify active
              authority and safety status directly through the official FMCSA
              SAFER portal (USDOT 3816355, MC-1386941).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              3. Commercial Inquiries & Non-Binding Communications
            </h2>
            <p>
              Transmission of an inquiry through the online contact form or by
              email does not constitute a binding transportation agreement, rate
              lock, or commitment of equipment. Binding transportation contracts
              are formed solely upon execution of written rate confirmations,
              broker-carrier agreements, or bills of lading executed by authorized
              representatives.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              4. Intellectual Property & Photography
            </h2>
            <p>
              The design, layout, editorial typography, and graphical elements of
              this website are the property of {COMPANY_DATA.legalName}. Pictured
              commercial vehicles and highway landscapes represent illustrative
              transportation assets and may not depict specific company vehicles.
              Unauthorized reproduction or extraction of site content is
              prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              5. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms of Use are governed by and construed in accordance with
              the laws of the State of California and applicable federal
              transportation statutes, without regard to conflict of law
              principles.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              6. Inquiries Regarding Terms
            </h2>
            <div className="font-mono text-xs text-mutedSteel space-y-1">
              <p className="text-warmWhite font-medium">{COMPANY_DATA.legalName}</p>
              <p>Address: {COMPANY_DATA.physicalAddress.full}</p>
              <p>Phone: {COMPANY_DATA.phone}</p>
              <p>USDOT: {COMPANY_DATA.usdot} · MC: {COMPANY_DATA.mcNumber}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
