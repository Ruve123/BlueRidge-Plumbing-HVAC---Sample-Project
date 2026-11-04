import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqItem } from "@/components/FaqItem";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content";
import { phoneHref, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main id="primary" className="site-main">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link href="/services">All services</Link>
          </p>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-layout">
          <article className="service-layout__main entry-content">
            <p>{service.body}</p>

            <h2>Common questions</h2>
            <div className="faq">
              {service.faq.map((f) => (
                <FaqItem key={f.question} question={f.question} answer={f.answer} />
              ))}
            </div>
          </article>

          <aside className="service-layout__side">
            <div className="card card--pad">
              <p className="price-tag">{service.price}</p>
              {service.emergency && (
                <p className="pill">
                  <Icon name="clock" size={16} /> 24/7 emergency available
                </p>
              )}
              <ul className="check-list">
                {service.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link className="btn btn--primary btn--block" href="/#contact">
                Get a free quote
              </Link>
              <a className="btn btn--ghost btn--block" href={`tel:${phoneHref}`}>
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
