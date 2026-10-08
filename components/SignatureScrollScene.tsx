"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SignatureScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);
  const truckLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion or is mobile
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      return; // Use clean CSS fallback layout for mobile/reduced motion
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=180%",
        pin: pinSectionRef.current,
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
        },
      });

      // Subtle background zoom & parallax shift
      tl.to(bgImageRef.current, {
        scale: 1.08,
        yPercent: -6,
        ease: "none",
      }, 0);

      // Truck layer moves horizontally across screen
      tl.to(truckLayerRef.current, {
        xPercent: 18,
        ease: "none",
      }, 0);

      // Word 1: MOVEMENT reveals then fades
      tl.fromTo(
        word1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0.05
      );
      tl.to(word1Ref.current, { opacity: 0.25, duration: 0.2 }, 0.35);

      // Word 2: DISTANCE reveals then fades
      tl.fromTo(
        word2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0.35
      );
      tl.to(word2Ref.current, { opacity: 0.25, duration: 0.2 }, 0.65);

      // Word 3: DESTINATION reveals
      tl.fromTo(
        word3Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0.65
      );

      return () => {
        pinTrigger.kill();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-nearBlack text-warmWhite overflow-hidden min-h-[100vh] md:min-h-[200vh]"
      aria-label="Editorial Transportation Sequence"
    >
      <div
        ref={pinSectionRef}
        className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Cinematic Background Highway Image */}
        <div
          ref={bgImageRef}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="/images/scroll-truck-sequence.jpg"
            alt="Commercial semi-truck traveling on an open California highway in natural light"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nearBlack/60 via-transparent to-nearBlack/80" />
        </div>

        {/* Foreground horizontal subtle motion truck / vignette */}
        <div
          ref={truckLayerRef}
          className="absolute inset-x-[-10%] bottom-0 h-1/2 pointer-events-none opacity-20 hidden md:block will-change-transform"
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-burntOrange/10 to-transparent" />
        </div>

        {/* Words Reveal Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div
              ref={word1Ref}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase text-warmWhite transition-opacity duration-300"
            >
              MOVEMENT.
            </div>
            <div
              ref={word2Ref}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase text-softGray transition-opacity duration-300 md:pl-16"
            >
              DISTANCE.
            </div>
            <div
              ref={word3Ref}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase text-warmWhite transition-opacity duration-300 md:pl-32"
            >
              DESTINATION.
            </div>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/15 pt-6 text-xs font-mono text-mutedSteel tracking-wider">
            <span className="uppercase">
              Illustrative Brand Sequence · Representative Transportation
            </span>
            <span className="text-burntOrange mt-2 sm:mt-0 font-medium">
              SAFETY × REGULATORY DISCIPLINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
