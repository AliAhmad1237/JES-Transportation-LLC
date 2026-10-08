import type { Metadata } from "next";
import CarrierInfoClient from "./CarrierInfoClient";
import { COMPANY_DATA } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Carrier Information | ${COMPANY_DATA.legalName} (USDOT ${COMPANY_DATA.usdot})`,
  description:
    `Verified FMCSA SAFER carrier registration, USDOT ${COMPANY_DATA.usdot}, ${COMPANY_DATA.mcNumber}, operating authority, fleet count, and broker onboarding information for ${COMPANY_DATA.legalName}.`,
  openGraph: {
    title: `Carrier Information | ${COMPANY_DATA.legalName}`,
    description:
      `Verified USDOT ${COMPANY_DATA.usdot} and ${COMPANY_DATA.mcNumber} registration details for ${COMPANY_DATA.legalName} based in Corona, California.`,
  },
};

export default function CarrierInfoPage() {
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
        name: "Carrier Information",
        item: "https://jestransportation.com/carrier-info",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CarrierInfoClient />
    </>
  );
}
