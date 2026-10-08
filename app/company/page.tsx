import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Company Overview | JES Transportation LLC",
  description:
    "Learn about JES Transportation LLC, an active motor carrier based in Corona, California, authorized for motor carrier of property except household goods.",
  openGraph: {
    title: "Company Overview | JES Transportation LLC",
    description:
      "JES Transportation LLC is an active motor carrier based in Corona, California, operating under USDOT 3816355 and MC-1386941.",
  },
};

export default function CompanyPage() {
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
        name: "Company",
        item: "https://jestransportation.com/company",
      },
    ],
  };

  return (
    <div className="bg-nearBlack text-warmWhite min-h-screen pt-32 pb-24 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-6">
            01 / COMPANY PROFILE
          </p>
          <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tightest leading-[0.88] text-warmWhite">
            A FOCUSED
            <br />
            CARRIER.
          </h1>
        </div>

        {/* Editorial Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-body text-xl sm:text-2xl text-warmWhite font-light leading-relaxed">
              JES Transportation LLC is based in Corona, California. Its supplied
              SAFER record lists active USDOT status and operating authority for
              motor carrier of property, except household goods.
            </p>

            <p className="font-body text-base text-softGray/85 font-light leading-relaxed">
              Operating with an active federal registration under USDOT 3816355 and
              MC-1386941, the carrier maintains a deliberate, focused scale. The
              company focuses on direct accountability, adherence to federal safety
              regulations, and transparent business operations.
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs text-softGray">
              <div>
                <span className="block text-mutedSteel text-[10px] uppercase mb-1">
                  LEGAL ENTITY
                </span>
                <span className="text-warmWhite font-medium">
                  {COMPANY_DATA.legalName}
                </span>
              </div>
              <div>
                <span className="block text-mutedSteel text-[10px] uppercase mb-1">
                  ENTITY TYPE
                </span>
                <span className="text-warmWhite font-medium">
                  {COMPANY_DATA.entityType}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/truck-front-detail.jpg"
              alt="Commercial truck front view in natural light"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-warmWhite/80 bg-nearBlack/80 px-2 py-1 tracking-widest uppercase">
              EQUIPMENT DETAIL
            </div>
          </div>
        </div>

        {/* Verified Parameters Grid */}
        <div className="bg-charcoal/40 border border-white/10 p-8 md:p-12 mb-24">
          <div className="mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-display font-medium text-xl uppercase tracking-tight text-warmWhite">
              OFFICIAL REGISTRATION CONTEXT
            </h2>
            <span className="font-mono text-xs text-burntOrange uppercase tracking-wider">
              VERIFIED RECORD
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
            <div className="border-l border-white/10 pl-6 space-y-2">
              <span className="text-mutedSteel uppercase tracking-wider">
                USDOT STATUS
              </span>
              <p className="text-xl font-display text-warmWhite uppercase font-medium">
                {COMPANY_DATA.usdotStatus}
              </p>
              <p className="text-softGray/60 text-[11px] font-body">
                Out-of-service date: {COMPANY_DATA.outOfServiceDate}
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 space-y-2">
              <span className="text-mutedSteel uppercase tracking-wider">
                FLEET & DRIVERS
              </span>
              <p className="text-xl font-display text-warmWhite font-medium">
                02 UNITS / 02 DRIVERS
              </p>
              <p className="text-softGray/60 text-[11px] font-body">
                0 Non-CMV units reported to FMCSA
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 space-y-2">
              <span className="text-mutedSteel uppercase tracking-wider">
                MCS-150 FILING
              </span>
              <p className="text-xl font-display text-warmWhite font-medium">
                {COMPANY_DATA.mcs150Mileage} MILES
              </p>
              <p className="text-softGray/60 text-[11px] font-body">
                2024 reporting year · Form date {COMPANY_DATA.mcs150Date}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Image & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/cab-interior.jpg"
              alt="Commercial vehicle interior and driver station"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-medium text-3xl uppercase tracking-tight text-warmWhite">
              HEADQUARTERS & GOVERNANCE
            </h2>
            <p className="font-body text-sm sm:text-base text-softGray/80 font-light leading-relaxed">
              JES Transportation LLC operates from Corona, California in Riverside
              County. By maintaining focused equipment and designated drivers,
              operations remain closely supervised and aligned with regulatory
              requirements.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
              <Link
                href="/carrier-info"
                className="px-6 py-3 border border-white/20 hover:border-burntOrange hover:text-burntOrange text-warmWhite transition-colors"
              >
                CARRIER REGISTRATION DATA →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-warmWhite text-charcoal hover:bg-burntOrange hover:text-warmWhite transition-colors font-medium"
              >
                CONTACT DISPATCH →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
