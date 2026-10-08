export const COMPANY_DATA = {
  legalName: "JES TRANSPORTATION LLC",
  shortName: "JES TRANSPORTATION",
  usdot: "3816355",
  usdotStatus: "ACTIVE",
  outOfServiceDate: "None",
  mcNumber: "MC-1386941",
  operatingAuthority: "Authorized for Motor Carrier of Property, except household goods",
  entityType: "CARRIER/IEP",
  mcs150Date: "May 7, 2025",
  mcs150Mileage: "18,000",
  reportingYear: "2024",
  physicalAddress: {
    street: "1828 Delancy Ln",
    city: "Corona",
    state: "CA",
    postalCode: "92881-4411",
    full: "1828 Delancy Ln, Corona, CA 92881-4411",
  },
  mailingAddress: {
    street: "1828 Delancy Ln",
    city: "Corona",
    state: "CA",
    postalCode: "92881-4411",
    full: "1828 Delancy Ln, Corona, CA 92881-4411",
  },
  phone: "(951) 256-6567",
  phoneRaw: "+19512566567",
  powerUnits: 2,
  nonCmvUnits: 0,
  drivers: 2,
  saferUrl: "https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=3816355",
} as const;

export const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Operations", href: "/operations" },
  { label: "Carrier Information", href: "/carrier-info" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Operations", href: "/operations" },
  { label: "Carrier Information", href: "/carrier-info" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
