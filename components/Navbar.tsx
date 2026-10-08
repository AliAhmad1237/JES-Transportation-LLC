"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_DATA, NAV_LINKS } from "@/lib/company-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-nearBlack/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-display font-medium text-sm md:text-base tracking-editorial text-warmWhite hover:text-white transition-colors"
          >
            {COMPANY_DATA.shortName}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`editorial-link transition-colors ${
                    isActive
                      ? "text-burntOrange"
                      : "text-softGray/80 hover:text-warmWhite"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Direct Call Link */}
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="group text-warmWhite hover:text-burntOrange transition-colors inline-flex items-center gap-1 font-mono text-xs"
              aria-label={`Call ${COMPANY_DATA.phone}`}
            >
              <span>Call</span>
              <span className="text-burntOrange transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xs font-mono uppercase tracking-widest text-warmWhite py-1 px-2 border border-white/20 hover:border-burntOrange transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-nearBlack transition-all duration-500 flex flex-col justify-between p-8 pt-28 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-mutedSteel border-b border-white/10 pb-3">
            Navigation / Menu
          </p>
          <nav className="flex flex-col space-y-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display font-light uppercase tracking-tight transition-colors ${
                pathname === "/" ? "text-burntOrange" : "text-warmWhite"
              }`}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display font-light uppercase tracking-tight transition-colors ${
                    isActive ? "text-burntOrange" : "text-warmWhite"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Contact & Verification details */}
        <div className="border-t border-white/10 pt-6 space-y-4 font-mono text-xs text-softGray">
          <div>
            <span className="block text-[10px] text-mutedSteel uppercase tracking-wider mb-1">
              Direct Contact
            </span>
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="text-lg font-display text-warmWhite hover:text-burntOrange inline-flex items-center gap-2"
            >
              <span>{COMPANY_DATA.phone}</span>
              <span className="text-burntOrange">↗</span>
            </a>
          </div>
          <div>
            <span className="block text-[10px] text-mutedSteel uppercase tracking-wider mb-1">
              Location & USDOT
            </span>
            <p className="text-xs text-softGray/80 leading-relaxed">
              Corona, California
              <br />
              USDOT: {COMPANY_DATA.usdot} · MC: {COMPANY_DATA.mcNumber}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
