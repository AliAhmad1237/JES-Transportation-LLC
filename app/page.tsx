import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SignatureScrollScene from "@/components/SignatureScrollScene";
import ContactForm from "@/components/ContactForm";
import { COMPANY_DATA } from "@/lib/company-data";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Company Introduction (Warm White Editorial) */}
      <section className="bg-warmWhite text-charcoal py-24 md:py-36 px-6 md:px-12 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-8">
            01 / COMPANY
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Headline and Editorial Copy */}
            <div className="lg:col-span-6 space-y-8">
              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tightest leading-[0.9] text-nearBlack">
                A FOCUSED
                <br />
                CARRIER.
              </h2>

              <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed font-light">
                JES Transportation LLC is based in Corona, California. Its
                supplied SAFER record lists active USDOT status and operating
                authority for motor carrier of property, except household goods.
              </p>

              <div className="pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row gap-6 font-mono text-xs uppercase tracking-wider text-charcoal/70">
                <div>
                  <span className="block text-mutedSteel text-[10px]">BASE LOCATION</span>
                  <span className="font-medium text-charcoal">Corona, California</span>
                </div>
                <div>
                  <span className="block text-mutedSteel text-[10px]">AUTHORITY CATEGORY</span>
                  <span className="font-medium text-charcoal">Motor Carrier of Property</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/company"
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-burntOrange transition-colors"
                >
                  <span className="editorial-link">READ FULL COMPANY OVERVIEW</span>
                  <span className="text-burntOrange transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Carefully Cropped Truck Photography */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-charcoal/5">
              <Image
                src="/images/truck-front-detail.jpg"
                alt="American commercial tractor-trailer detail with natural lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 right-4 font-mono text-[10px] text-warmWhite/90 bg-nearBlack/60 px-2 py-1 tracking-widest uppercase">
                REPRESENTATIVE TRANSPORTATION ASSET
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Facts (Clean Editorial Layout) */}
      <section className="bg-warmWhite text-charcoal py-20 md:py-28 px-6 md:px-12 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal/15">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-2">
                VERIFIED SAFER RECORD
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-nearBlack">
                COMPANY FACTS
              </h3>
            </div>
            <p className="font-mono text-xs text-mutedSteel mt-3 md:mt-0 tracking-wider">
              FEDERAL MOTOR CARRIER SAFETY ADMINISTRATION DATA
            </p>
          </div>

          <div className="divide-y divide-charcoal/15">
            {[
              { label: "USDOT status", value: COMPANY_DATA.usdotStatus, mono: true, highlight: true },
              { label: "USDOT number", value: COMPANY_DATA.usdot, mono: true },
              { label: "MC number", value: COMPANY_DATA.mcNumber, mono: true },
              { label: "Power units", value: String(COMPANY_DATA.powerUnits), mono: true },
              { label: "Drivers", value: String(COMPANY_DATA.drivers), mono: true },
              { label: "MCS-150 mileage", value: `${COMPANY_DATA.mcs150Mileage} miles`, mono: true },
              { label: "Reporting year", value: COMPANY_DATA.reportingYear, mono: true },
              { label: "Location", value: `${COMPANY_DATA.physicalAddress.city}, California`, mono: false },
            ].map((row, idx) => (
              <div
                key={idx}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline hover:bg-black/[0.02] transition-colors px-2"
              >
                <div className="sm:col-span-5 font-mono text-xs uppercase tracking-widest text-mutedSteel">
                  {row.label}
                </div>
                <div
                  className={`sm:col-span-7 text-sm md:text-base ${
                    row.mono ? "font-mono" : "font-body"
                  } ${
                    row.highlight
                      ? "text-burntOrange font-semibold tracking-wider"
                      : "text-charcoal font-medium"
                  }`}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/carrier-info"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-burntOrange transition-colors"
            >
              <span className="editorial-link">VIEW EXPANDED CARRIER RECORD</span>
              <span className="text-burntOrange transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Operational Scale (High-Impact Dark Section) */}
      <section className="bg-nearBlack text-warmWhite py-28 md:py-36 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Power Units */}
            <div className="border-l border-white/20 pl-8 md:pl-12 space-y-3">
              <div className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-tightest leading-none text-warmWhite">
                02
              </div>
              <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-burntOrange font-medium">
                POWER UNITS
              </div>
            </div>

            {/* Drivers */}
            <div className="border-l border-white/20 pl-8 md:pl-12 space-y-3">
              <div className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-tightest leading-none text-warmWhite">
                02
              </div>
              <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-burntOrange font-medium">
                DRIVERS
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-mutedSteel tracking-wider">
            <p className="text-softGray/80 font-body text-sm font-light">
              SAFER lists 2 power units and 2 drivers.
            </p>
            <p className="uppercase text-[11px]">
              FOCUSED CAPACITY · DEDICATED ATTENTION
            </p>
          </div>
        </div>
      </section>

      {/* 5. Operating Authority */}
      <section className="bg-charcoal text-warmWhite py-24 md:py-32 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <div className="font-mono text-xs uppercase tracking-widest text-mutedSteel">
              02 / AUTHORITY
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tightest leading-[0.9] text-warmWhite">
              AUTHORIZED
              <br />
              TO OPERATE.
            </h2>

            <div className="p-6 md:p-8 border border-white/15 bg-nearBlack/40 space-y-4">
              <p className="font-display text-xl sm:text-2xl font-normal text-warmWhite leading-snug">
                Authorized for Motor Carrier of Property, except household goods.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 font-mono text-xs tracking-wider text-mutedSteel">
                <div>
                  <span className="block text-[10px] uppercase text-mutedSteel/70">USDOT</span>
                  <span className="text-warmWhite font-semibold">{COMPANY_DATA.usdot}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-mutedSteel/70">MC NUMBER</span>
                  <span className="text-warmWhite font-semibold">{COMPANY_DATA.mcNumber}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-mutedSteel/70">ENTITY TYPE</span>
                  <span className="text-warmWhite font-semibold">{COMPANY_DATA.entityType}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.saferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-warmWhite hover:text-burntOrange transition-colors"
              >
                <span className="editorial-link">VERIFY CARRIER INFORMATION</span>
                <span className="text-burntOrange transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MCS-150 Mileage */}
      <section className="bg-nearBlack text-warmWhite py-28 md:py-36 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-4">
              REPORTED REGULATORY BENCHMARK
            </div>

            <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tightest leading-none text-warmWhite mb-8">
              18,000
            </div>

            <div className="space-y-1 font-mono text-xs sm:text-sm tracking-widest uppercase text-mutedSteel">
              <p className="text-softGray font-medium">MCS-150 REPORTED MILEAGE</p>
              <p>REPORTING YEAR: 2024</p>
              <p className="text-[11px] text-mutedSteel/70 pt-2 font-body font-light normal-case">
                Data recorded under official MCS-150 biennial update schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Signature Scroll Scene */}
      <SignatureScrollScene />

      {/* 8. Location Section */}
      <section className="bg-nearBlack text-warmWhite py-24 md:py-36 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-8">
            03 / LOCATION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tightest leading-[0.9] text-warmWhite">
                CORONA,
                <br />
                CALIFORNIA.
              </h2>

              <div className="space-y-3 font-mono text-sm tracking-wider text-softGray pt-4">
                <p className="text-base text-warmWhite">
                  {COMPANY_DATA.physicalAddress.street}
                  <br />
                  {COMPANY_DATA.physicalAddress.city}, {COMPANY_DATA.physicalAddress.state}{" "}
                  {COMPANY_DATA.physicalAddress.postalCode}
                </p>
                <p className="pt-2">
                  <span className="text-mutedSteel">PHONE: </span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="text-warmWhite hover:text-burntOrange transition-colors font-medium underline underline-offset-4 decoration-burntOrange/50"
                  >
                    {COMPANY_DATA.phone}
                  </a>
                </p>
              </div>

              <p className="text-xs font-mono text-mutedSteel tracking-wider leading-relaxed pt-2">
                Physical and mailing headquarters registered with the U.S.
                Department of Transportation in Riverside County, Southern California.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="border-l border-white/20 pl-6 space-y-3">
                <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel">
                  PHYSICAL & MAILING RECORD
                </p>
                <p className="font-body text-softGray/80 text-sm leading-relaxed font-light">
                  Direct headquarters address on file with FMCSA SAFER system.
                  All official freight documentation, insurance filings, and
                  operating authorities are maintained from this location.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Landscape Photograph */}
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/california-landscape.jpg"
              alt="California transportation highway corridor and topography"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.6] contrast-[1.05] transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nearBlack/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 font-mono text-[11px] text-warmWhite tracking-widest uppercase">
              CALIFORNIA HIGHWAY CORRIDORS
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section (Warm-White Background, Oversized Typography) */}
      <section
        id="contact"
        className="bg-warmWhite text-charcoal py-24 md:py-36 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: Oversized Typography & Contact Details */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-4">
                  DIRECT CONTACT & DISPATCH
                </p>
                <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tightest leading-[0.85] text-nearBlack">
                  LET&apos;S
                  <br />
                  TALK.
                </h2>
              </div>

              <div className="space-y-6 border-t border-charcoal/15 pt-8">
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-mutedSteel mb-1">
                    PRIMARY TELEPHONE
                  </span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-nearBlack hover:text-burntOrange transition-colors tracking-tight inline-flex items-center gap-2"
                  >
                    <span>{COMPANY_DATA.phone}</span>
                    <span className="text-burntOrange text-2xl">↗</span>
                  </a>
                </div>

                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-mutedSteel mb-1">
                    HEADQUARTERS ADDRESS
                  </span>
                  <p className="font-body text-base text-charcoal/80 leading-relaxed font-light">
                    {COMPANY_DATA.physicalAddress.street}
                    <br />
                    {COMPANY_DATA.physicalAddress.city},{" "}
                    {COMPANY_DATA.physicalAddress.state}{" "}
                    {COMPANY_DATA.physicalAddress.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono text-xs uppercase tracking-widest">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-nearBlack text-warmWhite hover:bg-burntOrange transition-colors"
                >
                  <span className="font-medium">CALL JES</span>
                  <span className="text-burntOrange group-hover:text-warmWhite transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#inquiry-form"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-charcoal/20 text-charcoal hover:border-burntOrange hover:text-burntOrange transition-colors"
                >
                  <span>SEND AN INQUIRY</span>
                  <span className="text-burntOrange transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Minimal Underlined Contact Form */}
            <div id="inquiry-form" className="lg:col-span-6 pt-4 lg:pt-0">
              <div className="border-b border-charcoal/15 pb-4 mb-8">
                <h3 className="font-display font-medium text-xl uppercase tracking-tight text-nearBlack">
                  TRANSMIT AN INQUIRY
                </h3>
                <p className="font-body text-xs text-charcoal/70 font-light mt-1">
                  Brokers, shippers, and commercial contacts may reach dispatch directly.
                </p>
              </div>

              <ContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
