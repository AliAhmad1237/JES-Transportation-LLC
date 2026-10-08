import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { COMPANY_DATA } from "@/lib/company-data";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0B0B",
};

export const metadata: Metadata = {
  title: "JES Transportation LLC | Motor Carrier in Corona, California",
  description:
    "JES Transportation LLC is an active motor carrier based in Corona, California, authorized for motor carrier of property except household goods.",
  keywords: [
    "JES Transportation LLC",
    "Corona CA trucking",
    "motor carrier California",
    "USDOT 3816355",
    "MC-1386941",
    "property motor carrier",
    "freight transportation Corona",
  ],
  authors: [{ name: "JES Transportation LLC" }],
  openGraph: {
    title: "JES Transportation LLC | Motor Carrier in Corona, California",
    description:
      "JES Transportation LLC is an active motor carrier based in Corona, California, authorized for motor carrier of property except household goods.",
    type: "website",
    locale: "en_US",
    siteName: "JES Transportation LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "JES Transportation LLC | Motor Carrier in Corona, California",
    description:
      "JES Transportation LLC is an active motor carrier based in Corona, California, authorized for motor carrier of property except household goods.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jestransportation.com/#organization",
        name: COMPANY_DATA.legalName,
        legalName: COMPANY_DATA.legalName,
        description:
          "Active motor carrier based in Corona, California, authorized for motor carrier of property except household goods.",
        telephone: COMPANY_DATA.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_DATA.physicalAddress.street,
          addressLocality: COMPANY_DATA.physicalAddress.city,
          addressRegion: COMPANY_DATA.physicalAddress.state,
          postalCode: COMPANY_DATA.physicalAddress.postalCode,
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY_DATA.phone,
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: "en",
        },
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "USDOT",
            value: COMPANY_DATA.usdot,
          },
          {
            "@type": "PropertyValue",
            propertyID: "MC",
            value: COMPANY_DATA.mcNumber,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jestransportation.com/",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-nearBlack text-warmWhite antialiased selection:bg-burntOrange selection:text-warmWhite min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
