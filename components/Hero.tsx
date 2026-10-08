import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-nearBlack text-warmWhite overflow-hidden pt-28 pb-12 px-6 md:px-12">
      {/* Background Cinematic Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-highway.jpg"
          alt="Realistic American commercial tractor-trailer on California highway in morning natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.42] contrast-[1.08] transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />
        {/* Editorial gradient overlays for high typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-nearBlack via-nearBlack/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-nearBlack/80 via-nearBlack/30 to-transparent" />
      </div>

      {/* Top Metadata in Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-mutedSteel pt-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-burntOrange animate-pulse" />
          <span>CORONA / CALIFORNIA</span>
        </div>
        <div className="flex items-center gap-6">
          <span>USDOT {COMPANY_DATA.usdot}</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">{COMPANY_DATA.mcNumber}</span>
        </div>
      </div>

      {/* Center / Lower-Center Main Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-20">
        <div className="max-w-4xl">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tightest leading-[0.88] text-warmWhite mb-8">
            <span className="block overflow-hidden">
              <span className="block transform transition-transform duration-700 ease-out">
                MOVING
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block transform transition-transform duration-700 ease-out delay-100 text-softGray">
                WITH
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block transform transition-transform duration-700 ease-out delay-200">
                PURPOSE.
              </span>
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-softGray/90 font-light max-w-2xl leading-relaxed mb-10">
            JES Transportation LLC is an active motor carrier based in Corona,
            California, authorized for motor carrier of property except household goods.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 font-mono text-xs uppercase tracking-widest">
            {/* Primary CTA */}
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-warmWhite text-charcoal hover:bg-burntOrange hover:text-warmWhite transition-all duration-300"
            >
              <span className="font-medium tracking-editorial">CALL JES</span>
              <span className="text-burntOrange group-hover:text-warmWhite transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* Secondary CTA */}
            <Link
              href="/carrier-info"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/20 text-warmWhite hover:border-burntOrange hover:text-burntOrange transition-all duration-300"
            >
              <span className="tracking-editorial">CARRIER INFORMATION</span>
              <span className="text-white/40 group-hover:text-burntOrange transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Hero Metadata Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-mutedSteel tracking-wider">
        <div className="flex items-center gap-3">
          <span className="text-warmWhite font-medium">STATUS: {COMPANY_DATA.usdotStatus}</span>
          <span className="text-white/20">/</span>
          <span>FMCSA AUTHORIZED PROPERTY CARRIER</span>
        </div>
        <div className="text-softGray/70">
          <span>DIRECT: </span>
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="text-warmWhite hover:text-burntOrange transition-colors underline underline-offset-4 decoration-burntOrange/60"
          >
            {COMPANY_DATA.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
