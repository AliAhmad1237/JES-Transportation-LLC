# JES Transportation LLC

> **Premium Minimal Trucking Website**  
> *California Transportation × Automotive Editorial × Contemporary Minimalism*

Official website for **JES Transportation LLC**, an active motor carrier based in Corona, California, operating under USDOT 3816355 and MC-1386941.

---

## Design Philosophy

**Minimal interface. Rich details. Strong typography. Beautiful photography. Purposeful motion.**

* **No clutter:** Avoids generic trucking templates, bulky cards, neon gradients, or artificial statistics.
* **Palette:** Near Black (`#0B0B0B`), Charcoal (`#181818`), Warm White (`#F5F3EE`), Soft Gray (`#D8D6D0`), Muted Steel (`#898B8C`), and restrained Burnt Orange (`#C75B35`).
* **Typography:** Archivo (Display), Inter (Body), IBM Plex Mono (Technical Records).

---

## Verified SAFER / FMCSA Information

All data is strictly grounded in official Federal Motor Carrier Safety Administration filings:

* **Legal Name:** JES TRANSPORTATION LLC
* **USDOT:** 3816355 (Active)
* **Out-of-service Date:** None
* **MC Number:** MC-1386941
* **Operating Authority:** Authorized for Motor Carrier of Property, except household goods
* **Entity Type:** CARRIER/IEP
* **MCS-150 Date:** May 7, 2025
* **MCS-150 Mileage:** 18,000 miles (2024 reporting year)
* **Physical & Mailing Address:** 1828 Delancy Ln, Corona, CA 92881-4411
* **Phone:** (951) 256-6567
* **Fleet Scale:** 2 Power Units · 0 Non-CMV Units · 2 Drivers

---

## Pages & Structure

* `/` — **Home:** Full-viewport cinematic hero, editorial company introduction, company facts, operational scale, operating authority with official SAFER verification, MCS-150 benchmark, signature pinned scroll scene, Corona location overview, direct contact section, and minimal contact form.
* `/carrier-info` — **Carrier Information:** Dedicated broker and shipper onboarding portal featuring one-click copy buttons for every field, a *"Copy Complete Packet"* generator, and official FMCSA SAFER verification link.
* `/company` — **Company Profile:** In-depth editorial narrative focusing on operational precision, regulatory compliance, and California headquarters.
* `/operations` — **Operations & Capacity:** Operational breakdown of equipment, designated drivers, reported mileage, and dispatch coordination.
* `/contact` — **Contact & Dispatch:** Direct phone line `(951) 256-6567`, address, and validated inquiry form.
* `/privacy` — **Privacy Policy:** California-compliant privacy disclosures tailored to commercial motor carrier operations.
* `/terms` — **Terms of Use:** Clear operational and inquiry conditions.
* `/api/contact` — **Backend API:** Production server-side endpoint with schema validation and error feedback.

---

## Tech Stack & Performance

* **Framework:** Next.js 15 (App Router, React 19, TypeScript)
* **Styling:** Tailwind CSS with custom editorial configuration
* **Animation:** GSAP & ScrollTrigger with `prefers-reduced-motion` compliance
* **Image Optimization:** Sharp engine supporting AVIF and WebP delivery
* **SEO & Accessibility:** OpenGraph, Twitter cards, semantic HTML5, and Schema.org JSON-LD (`Organization`, `PostalAddress`, `ContactPoint`, `BreadcrumbList`)

---

## Getting Started

### Prerequisites

* Node.js 18+ (tested with Node 20 / 24)
* npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/AliAhmad1237/JES-Transportation-LLC.git
cd JES-Transportation-LLC

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```
