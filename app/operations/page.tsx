import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Operations | JES Transportation LLC",
  description:
    "Operational overview of JES Transportation LLC: 2 power units, 2 drivers, 18,000 miles reported for 2024, authorized for motor carrier of property except household goods.",
  openGraph: {
    title: "Operations | JES Transportation LLC",
    description:
      "Operational capacity and FMCSA filings for JES Transportation LLC based in Corona, California.",
  },
};

export default function OperationsPage() {
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
        name: "Operations",
        item: "https://jestransportation.com/operations",
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
            02 / OPERATIONS & CAPACITY
          </p>
          <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tightest leading-[0.88] text-warmWhite">
            OPERATIONAL
            <br />
            OVERVIEW.
          </h1>
        </div>

        {/* High-Impact Stat Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="border border-white/10 bg-charcoal/30 p-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-burntOrange">
              REGISTERED CAPACITY
            </span>
            <div className="font-display font-black text-6xl md:text-7xl tracking-tightest text-warmWhite">
              02
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-mutedSteel">
              POWER UNITS
            </p>
            <p className="font-body text-xs text-softGray/70 pt-2 font-light">
              Registered commercial power units in active service.
            </p>
          </div>

          <div className="border border-white/10 bg-charcoal/30 p-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-burntOrange">
              CREW ALLOCATION
            </span>
            <div className="font-display font-black text-6xl md:text-7xl tracking-tightest text-warmWhite">
              02
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-mutedSteel">
              COMMERCIAL DRIVERS
            </p>
            <p className="font-body text-xs text-softGray/70 pt-2 font-light">
              Designated drivers operating under federal compliance rules.
            </p>
          </div>

          <div className="border border-white/10 bg-charcoal/30 p-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-burntOrange">
              REPORTED MILEAGE
            </span>
            <div className="font-display font-black text-6xl md:text-7xl tracking-tightest text-warmWhite">
              18K
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-mutedSteel">
              MCS-150 (2024 YEAR)
            </p>
            <p className="font-body text-xs text-softGray/70 pt-2 font-light">
              Official reported mileage for the 2024 reporting year.
            </p>
          </div>
        </div>

        {/* Editorial Text & Wide Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-medium text-3xl uppercase tracking-tight text-warmWhite">
              SCOPE OF OPERATING AUTHORITY
            </h2>
            <p className="font-body text-base text-softGray/90 font-light leading-relaxed">
              JES Transportation LLC is authorized by the Federal Motor Carrier
              Safety Administration for the motor carriage of property, except
              household goods.
            </p>
            <p className="font-body text-sm text-softGray/75 font-light leading-relaxed">
              The company conducts operations within the framework established by
              its active operating authority. Operational management is handled
              directly from the Corona headquarters to coordinate shipments,
              equipment maintenance, and compliance documentation.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs text-mutedSteel">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>AUTHORITY TYPE:</span>
                <span className="text-warmWhite font-medium">MOTOR CARRIER OF PROPERTY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>HOUSEHOLD GOODS EXCLUSION:</span>
                <span className="text-warmWhite font-medium">EXCEPT HOUSEHOLD GOODS</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>NON-CMV VEHICLES:</span>
                <span className="text-warmWhite font-medium">0 UNITS</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>OUT OF SERVICE RECORD:</span>
                <span className="text-burntOrange font-medium">NONE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/truck-side-profile.jpg"
              alt="Commercial truck on open road in motion"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.8] contrast-[1.05]"
            />
            <div className="absolute bottom-3 right-4 font-mono text-[10px] text-warmWhite/80 bg-nearBlack/80 px-2 py-1 tracking-widest uppercase">
              REPRESENTATIVE HIGHWAY TRANSIT
            </div>
          </div>
        </div>

        {/* Terminal / Warehouse Image & Direct Dispatch Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/warehouse-freight.jpg"
              alt="Freight facility and logistics cargo environment"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-tight text-warmWhite">
              DISPATCH & COMMUNICATION
            </h2>
            <p className="font-body text-sm sm:text-base text-softGray/80 font-light leading-relaxed">
              Brokers and logistics coordinators requesting load coverage, rate
              agreements, or driver availability can communicate directly with
              dispatch via telephone or electronic inquiry.
            </p>
            <div className="pt-2 font-mono text-xs text-softGray space-y-2">
              <p>
                TELEPHONE:{" "}
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-warmWhite hover:text-burntOrange underline underline-offset-4 decoration-burntOrange/50 ml-1 font-medium"
                >
                  {COMPANY_DATA.phone}
                </a>
              </p>
              <p>OPERATING BASE: {COMPANY_DATA.physicalAddress.full}</p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
              <Link
                href="/carrier-info"
                className="px-6 py-3 bg-warmWhite text-charcoal hover:bg-burntOrange hover:text-warmWhite transition-colors font-medium"
              >
                VIEW SAFER REGISTRATION →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white/20 hover:border-burntOrange hover:text-burntOrange text-warmWhite transition-colors"
              >
                TRANSMIT INQUIRY →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
