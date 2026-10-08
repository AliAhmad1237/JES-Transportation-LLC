import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact & Dispatch | JES Transportation LLC",
  description:
    "Get in touch with JES Transportation LLC. Call (951) 256-6567 or submit an inquiry for property transportation and carrier information.",
  openGraph: {
    title: "Contact & Dispatch | JES Transportation LLC",
    description:
      "Contact JES Transportation LLC in Corona, California. Direct phone (951) 256-6567 and inquiry dispatch.",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://jestransportation.com/contact",
      },
    ],
  };

  return (
    <div className="bg-warmWhite text-charcoal min-h-screen pt-32 pb-24 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="border-b border-charcoal/15 pb-12 mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-6">
            03 / CONTACT & DISPATCH
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tightest leading-[0.85] text-nearBlack">
              LET&apos;S
              <br />
              TALK.
            </h1>

            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-nearBlack text-warmWhite hover:bg-burntOrange transition-colors font-mono text-xs uppercase tracking-widest"
              >
                <span className="font-medium">CALL JES</span>
                <span className="text-burntOrange group-hover:text-warmWhite transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="block font-mono text-xs uppercase tracking-widest text-mutedSteel mb-2">
                DIRECT TELEPHONE
              </span>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-nearBlack hover:text-burntOrange transition-colors tracking-tight inline-flex items-center gap-2"
              >
                <span>{COMPANY_DATA.phone}</span>
                <span className="text-burntOrange text-2xl">↗</span>
              </a>
              <p className="font-body text-xs text-charcoal/70 font-light mt-2">
                Available for dispatch, rate inquiries, and carrier coordination.
              </p>
            </div>

            <div className="border-t border-charcoal/15 pt-8">
              <span className="block font-mono text-xs uppercase tracking-widest text-mutedSteel mb-2">
                OFFICIAL ADDRESS
              </span>
              <p className="font-body text-base text-charcoal/90 leading-relaxed font-light">
                {COMPANY_DATA.physicalAddress.street}
                <br />
                {COMPANY_DATA.physicalAddress.city},{" "}
                {COMPANY_DATA.physicalAddress.state}{" "}
                {COMPANY_DATA.physicalAddress.postalCode}
              </p>
              <p className="font-mono text-xs text-mutedSteel mt-2">
                Physical & Mailing Location (Corona, CA)
              </p>
            </div>

            <div className="border-t border-charcoal/15 pt-8 space-y-3 font-mono text-xs text-mutedSteel">
              <span className="block uppercase tracking-widest text-charcoal font-medium">
                VERIFIED REGISTRATION IDENTIFIERS
              </span>
              <div className="flex justify-between py-1 border-b border-charcoal/10">
                <span>USDOT NUMBER:</span>
                <span className="text-charcoal font-semibold">{COMPANY_DATA.usdot}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-charcoal/10">
                <span>MC NUMBER:</span>
                <span className="text-charcoal font-semibold">{COMPANY_DATA.mcNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-charcoal/10">
                <span>USDOT STATUS:</span>
                <span className="text-burntOrange font-semibold">{COMPANY_DATA.usdotStatus}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Underlined Minimal Form */}
          <div className="lg:col-span-7 bg-warmWhite">
            <div className="border-b border-charcoal/15 pb-4 mb-8">
              <h2 className="font-display font-medium text-2xl uppercase tracking-tight text-nearBlack">
                SUBMIT AN INQUIRY
              </h2>
              <p className="font-body text-xs text-charcoal/70 font-light mt-1">
                Please provide your contact details and message below.
              </p>
            </div>

            <ContactForm theme="light" />
          </div>
        </div>

        {/* Location Image Strip */}
        <div className="relative aspect-[16/6] w-full overflow-hidden bg-charcoal">
          <Image
            src="/images/corona-location.jpg"
            alt="Southern California regional roadway landscape near Corona"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nearBlack/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-xs text-warmWhite tracking-widest uppercase">
            CORONA, CA 92881 · SOUTHERN CALIFORNIA
          </div>
        </div>
      </div>
    </div>
  );
}
