"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/lib/company-data";

interface CarrierRow {
  label: string;
  value: string;
  copyable?: boolean;
  highlight?: boolean;
}

const CARRIER_DETAILS: CarrierRow[] = [
  { label: "Legal name", value: COMPANY_DATA.legalName, copyable: true },
  { label: "Entity type", value: COMPANY_DATA.entityType, copyable: true },
  { label: "USDOT number", value: COMPANY_DATA.usdot, copyable: true, highlight: true },
  { label: "Status", value: COMPANY_DATA.usdotStatus, copyable: true, highlight: true },
  { label: "MC number", value: COMPANY_DATA.mcNumber, copyable: true, highlight: true },
  {
    label: "Operating authority",
    value: COMPANY_DATA.operatingAuthority,
    copyable: true,
  },
  { label: "Power units", value: String(COMPANY_DATA.powerUnits), copyable: true },
  { label: "Drivers", value: String(COMPANY_DATA.drivers), copyable: true },
  { label: "MCS-150 form date", value: COMPANY_DATA.mcs150Date, copyable: true },
  {
    label: "MCS-150 mileage",
    value: `${COMPANY_DATA.mcs150Mileage} (Reporting year: ${COMPANY_DATA.reportingYear})`,
    copyable: true,
  },
  {
    label: "Physical address",
    value: COMPANY_DATA.physicalAddress.full,
    copyable: true,
  },
  {
    label: "Mailing address",
    value: COMPANY_DATA.mailingAddress.full,
    copyable: true,
  },
  { label: "Phone", value: COMPANY_DATA.phone, copyable: true },
];

export default function CarrierInfoClient() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const copyAllDetails = () => {
    const textBlock = `JES TRANSPORTATION LLC — BROKER & SHIPPER PACKET DATA
Legal Name: ${COMPANY_DATA.legalName}
USDOT: ${COMPANY_DATA.usdot} (Status: ${COMPANY_DATA.usdotStatus})
MC Number: ${COMPANY_DATA.mcNumber}
Operating Authority: ${COMPANY_DATA.operatingAuthority}
Entity Type: ${COMPANY_DATA.entityType}
Power Units: ${COMPANY_DATA.powerUnits} | Drivers: ${COMPANY_DATA.drivers}
MCS-150 Date: ${COMPANY_DATA.mcs150Date} | Mileage: ${COMPANY_DATA.mcs150Mileage} (${COMPANY_DATA.reportingYear})
Address: ${COMPANY_DATA.physicalAddress.full}
Phone: ${COMPANY_DATA.phone}`;

    navigator.clipboard.writeText(textBlock);
    setAllCopied(true);
    setTimeout(() => {
      setAllCopied(false);
    }, 2500);
  };

  return (
    <div className="bg-nearBlack text-warmWhite min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-mutedSteel mb-6">
            CARRIER REGISTRATION & BROKER RESOURCES
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl uppercase tracking-tightest leading-[0.88] text-warmWhite">
              THE DETAILS
              <br />
              MATTER.
            </h1>

            <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest">
              <button
                type="button"
                onClick={copyAllDetails}
                className="px-5 py-3 border border-white/20 hover:border-burntOrange hover:text-burntOrange text-warmWhite transition-colors flex items-center gap-2"
              >
                <span>{allCopied ? "COPIED PACKET" : "COPY COMPLETE PACKET"}</span>
                <span className="text-burntOrange font-mono">
                  {allCopied ? "✓" : "📋"}
                </span>
              </button>

              <a
                href={COMPANY_DATA.saferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-warmWhite text-charcoal hover:bg-burntOrange hover:text-warmWhite transition-colors flex items-center gap-2 font-medium"
              >
                <span>VERIFY ON SAFER</span>
                <span className="text-burntOrange hover:text-warmWhite font-mono">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Informative Subhead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8">
            <p className="font-body text-base sm:text-lg text-softGray/90 font-light leading-relaxed">
              Official operating authority, vehicle count, driver records, and
              verified addresses for JES Transportation LLC as documented in the
              Federal Motor Carrier Safety Administration (FMCSA) Safety and Fitness
              Electronic Records (SAFER) database.
            </p>
          </div>
          <div className="lg:col-span-4 font-mono text-xs text-mutedSteel border-l border-white/10 pl-6 space-y-1">
            <p>DATA REFRESH: CURRENT</p>
            <p>MCS-150 REVISION: MAY 7, 2025</p>
            <p className="text-warmWhite">REPORTING YEAR: 2024</p>
          </div>
        </div>

        {/* Carrier Details Table */}
        <div className="border border-white/10 bg-charcoal/30 overflow-hidden mb-16">
          <div className="p-4 sm:p-6 bg-nearBlack/80 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-mutedSteel uppercase tracking-wider">
            <span>OFFICIAL FMCSA VERIFIED RECORD</span>
            <span className="text-[11px] text-mutedSteel/80 mt-1 sm:mt-0">
              CLICK ANY ROW TO COPY VALUE
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {CARRIER_DETAILS.map((row, idx) => (
              <div
                key={idx}
                onClick={() => copyToClipboard(row.value, row.label)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    copyToClipboard(row.value, row.label);
                  }
                }}
                className="py-5 px-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline hover:bg-white/[0.03] transition-colors cursor-pointer group select-none"
              >
                <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-mutedSteel flex items-center justify-between">
                  <span>{row.label}</span>
                </div>

                <div className="md:col-span-7 font-mono text-sm sm:text-base text-warmWhite group-hover:text-burntOrange transition-colors break-words">
                  <span
                    className={
                      row.highlight
                        ? "text-burntOrange font-semibold"
                        : "text-warmWhite"
                    }
                  >
                    {row.value}
                  </span>
                </div>

                <div className="md:col-span-1 text-right font-mono text-xs">
                  {copiedKey === row.label ? (
                    <span className="text-burntOrange font-semibold tracking-wider text-[11px]">
                      COPIED ✓
                    </span>
                  ) : (
                    <span className="text-mutedSteel/40 group-hover:text-mutedSteel text-[11px] uppercase tracking-wider">
                      COPY
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Editorial Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/driver-inspection.jpg"
              alt="Pre-trip inspection and freight vehicle standards"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.7] contrast-[1.05]"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-medium text-2xl sm:text-3xl uppercase tracking-tight text-warmWhite">
              ACCURATE BROKER ONBOARDING
            </h2>
            <p className="font-body text-sm text-softGray/80 leading-relaxed font-light">
              For rate confirmations, broker carrier packets, certificate of
              insurance verification, or direct dispatch coordination, please use
              the verified telephone line or submit documentation inquiries directly.
            </p>
            <div className="pt-2 font-mono text-xs text-mutedSteel space-y-2">
              <p>
                DIRECT DISPATCH:{" "}
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-warmWhite hover:text-burntOrange underline underline-offset-4 decoration-burntOrange/50 ml-1 font-medium"
                >
                  {COMPANY_DATA.phone}
                </a>
              </p>
              <p>PHYSICAL HEADQUARTERS: {COMPANY_DATA.physicalAddress.full}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
