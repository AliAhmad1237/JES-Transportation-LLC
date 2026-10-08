import Link from "next/link";
import { COMPANY_DATA, FOOTER_LINKS } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="bg-nearBlack border-t border-white/10 text-warmWhite pt-16 pb-20 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Main Identifier */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-display font-medium text-xl md:text-2xl tracking-editorial text-warmWhite">
              {COMPANY_DATA.legalName}
            </h2>
            <div className="space-y-1 font-mono text-xs text-mutedSteel tracking-wider">
              <p>USDOT {COMPANY_DATA.usdot}</p>
              <p>{COMPANY_DATA.mcNumber}</p>
              <p>CORONA, CALIFORNIA</p>
              <p className="pt-2">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-warmWhite hover:text-burntOrange transition-colors"
                >
                  Phone: {COMPANY_DATA.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Links & Navigation */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-softGray">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="editorial-link hover:text-warmWhite transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="font-mono text-[11px] text-mutedSteel space-y-1 md:text-right">
              <p>Operating Authority: Property Except Household Goods</p>
              <p>USDOT Status: {COMPANY_DATA.usdotStatus}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-mutedSteel tracking-wider gap-4">
          <p>© {COMPANY_DATA.legalName}</p>
          <p className="text-softGray/50">
            MOTOR CARRIER REGISTRATION & OPERATIONAL SUMMARY
          </p>
        </div>
      </div>
    </footer>
  );
}
