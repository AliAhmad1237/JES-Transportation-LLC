import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick contact"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-nearBlack/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between text-xs font-mono uppercase tracking-wider"
    >
      <a
        href={`tel:${COMPANY_DATA.phoneRaw}`}
        className="flex items-center gap-1.5 text-warmWhite hover:text-burntOrange py-1.5 px-3"
      >
        <span>CALL</span>
        <span className="text-burntOrange font-mono">↗</span>
      </a>
      <span className="text-white/20">|</span>
      <Link
        href="/contact"
        className="flex items-center gap-1.5 text-warmWhite hover:text-burntOrange py-1.5 px-3"
      >
        <span>CONTACT</span>
        <span className="text-burntOrange font-mono">→</span>
      </Link>
    </aside>
  );
}
