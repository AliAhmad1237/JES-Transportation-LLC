import type { Metadata } from "next";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Privacy Policy | JES Transportation LLC",
  description:
    "Privacy Policy for JES Transportation LLC. Information regarding data collection, usage, and privacy practices.",
};

export default function PrivacyPage() {
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
        name: "Privacy Policy",
        item: "https://jestransportation.com/privacy",
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
            LEGAL & REGULATORY NOTICES
          </p>
          <h1 className="font-display font-black text-5xl sm:text-6xl uppercase tracking-tight text-warmWhite">
            PRIVACY POLICY
          </h1>
          <p className="font-mono text-xs text-mutedSteel mt-4">
            LAST UPDATED: OCTOBER 2026 · APPLICABLE TO {COMPANY_DATA.legalName}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 font-body text-sm sm:text-base text-softGray/85 font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              1. Information We Collect
            </h2>
            <p>
              {COMPANY_DATA.legalName} (&quot;JES Transportation,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              collects only information necessary to conduct commercial motor
              carrier inquiries and business communications. This information is
              collected when you voluntarily submit an inquiry through our contact
              form or telephone our dispatch office.
            </p>
            <p>Information collected may include:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 font-mono text-xs text-mutedSteel">
              <li>Full name and job title</li>
              <li>Company or brokerage entity name</li>
              <li>Corporate email address and telephone number</li>
              <li>Details regarding freight, equipment, or service inquiries</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              2. How We Use Collected Information
            </h2>
            <p>
              Information provided to JES Transportation LLC is utilized strictly
              for legitimate transportation business purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 font-mono text-xs text-mutedSteel">
              <li>Responding to freight inquiries, rate quotes, and carrier packets</li>
              <li>Verifying broker and commercial customer onboarding</li>
              <li>Complying with regulatory obligations under the FMCSA and USDOT</li>
              <li>Maintaining operational records of dispatched communications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal or corporate contact
              information to third parties or marketing affiliates. We may share
              information solely when required by law, subpoena, or to cooperate
              with federal and state regulatory authorities having jurisdiction
              over commercial motor carriers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              4. Data Retention and Security
            </h2>
            <p>
              We implement reasonable administrative and technical safeguards to
              protect personal data collected through this website against
              unauthorized access, disclosure, or alteration. Data is retained only
              as long as required to fulfill business communications or comply with
              statutory record-keeping rules.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              5. California Privacy Rights
            </h2>
            <p>
              Under California law, California residents and commercial contacts
              may request disclosure of the personal data collected about them or
              request deletion of such information, subject to statutory retention
              exceptions. To exercise any privacy rights, contact us at the address
              or phone number below.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              6. Contact Information
            </h2>
            <div className="font-mono text-xs text-mutedSteel space-y-1">
              <p className="text-warmWhite font-medium">{COMPANY_DATA.legalName}</p>
              <p>Physical & Mailing: {COMPANY_DATA.physicalAddress.full}</p>
              <p>Telephone: {COMPANY_DATA.phone}</p>
              <p>USDOT: {COMPANY_DATA.usdot} · MC: {COMPANY_DATA.mcNumber}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
