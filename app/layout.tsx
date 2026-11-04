import type { Metadata, Viewport } from "next";
import { ClientEffects } from "@/components/ClientEffects";
import { EmergencyBar, Footer, MobileCall } from "@/components/layout/Chrome";
import { Header } from "@/components/layout/Header";
import { fullAddress, site } from "@/lib/site";
import "./wp-shim.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: "Fast, honest plumbing & HVAC. Same-day service, upfront pricing and 24/7 emergency help. (Demo site, fictional business.)",
};

export const viewport: Viewport = { themeColor: site.brand.primary };

const brandVars = `:root{--c-primary:${site.brand.primary};--c-accent:${site.brand.accent}}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  address: fullAddress,
  areaServed: site.areas,
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a className="skip-link screen-reader-text" href="#primary">
          Skip to content
        </a>
        <EmergencyBar />
        <Header />
        {children}
        <Footer />
        <MobileCall />
        <ClientEffects />
      </body>
    </html>
  );
}
