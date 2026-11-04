import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Our services" };

export default function ServicesPage() {
  return (
    <main id="primary" className="site-main">
      <section className="page-hero">
        <div className="container">
          <h1>Our services</h1>
          <p>{site.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
