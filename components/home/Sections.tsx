import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Icon } from "@/components/Icon";
import { Illustration } from "@/components/Illustration";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import {
  faqs,
  heroBadges,
  plans,
  services,
  stats,
  steps,
  team,
  testimonials,
  trustItems,
  whyUs,
} from "@/lib/content";
import { address, phoneHref, site } from "@/lib/site";

type BtnProps = { href: string; children: React.ReactNode; tone?: "accent" | "primary" | "outline"; wide?: boolean };

/** Same markup WordPress core's Button block produces. */
function Btn({ href, children, tone = "accent" }: BtnProps) {
  const cls =
    tone === "accent"
      ? "wp-block-button__link has-ink-color has-accent-background-color has-text-color has-background wp-element-button"
      : tone === "primary"
        ? "wp-block-button__link has-white-color has-primary-background-color has-text-color has-background wp-element-button"
        : "wp-block-button__link wp-element-button";
  return (
    <div className={`wp-block-button${tone === "outline" ? " is-style-outline" : ""}`}>
      {href.startsWith("tel:") ? (
        <a className={cls} href={href}>
          {children}
        </a>
      ) : (
        <Link className={cls} href={href}>
          {children}
        </Link>
      )}
    </div>
  );
}

function Head({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="wp-block-group section__head is-layout-flow">
      <h2 className="wp-block-heading">{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <div className="wp-block-group alignfull hero tp-hero tp-inline is-layout-flow">
      <h1 className="wp-block-heading hero__title">Fast, honest plumbing &amp; HVAC for your home</h1>
      <p className="hero__sub">Same-day service, upfront pricing and technicians who treat your home like their own.</p>
      <div className="wp-block-buttons hero__actions is-layout-flex">
        <Btn href="/#contact">Get a free quote</Btn>
        <Btn href={`tel:${phoneHref}`} tone="outline">
          Call {site.phone}
        </Btn>
      </div>
      <ul className="wp-block-list hero__badges">
        {heroBadges.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Illustration name="hero" />
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="wp-block-group alignfull tp-trust tp-inline is-layout-flow">
      <ul className="wp-block-list trust-bar__list">
        {trustItems.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <div id="services" className="wp-block-group alignfull tp-section tp-inline is-layout-flow">
      <Head title="Plumbing, heating & cooling services" sub="One call covers it all, from a leaking tap to a full system replacement." />
      <div className="wp-block-tradepro-services-grid tp-dynamic">
        <div className="grid grid--3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="section__more">
          <Link className="btn btn--ghost" href="/services">
            View all services
          </Link>
        </p>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <div id="why-us" className="wp-block-group alignfull tp-section tp-inline section--tint is-layout-flow">
      <Head title="Why homeowners choose us" />
      <div className="wp-block-columns is-layout-flex">
        {whyUs.map((w) => (
          <div key={w.title} className="wp-block-column feature is-layout-flow">
            <h3 className="wp-block-heading">{w.title}</h3>
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <>
      <Illustration name="pipes" />
      <div className="wp-block-group alignfull stats tp-inline is-layout-flow">
        <div className="wp-block-columns is-layout-flex">
          {stats.map((s) => (
            <div key={s.label} className="wp-block-column is-layout-flow">
              <p className="stats__number">{s.number}</p>
              <p className="stats__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Steps() {
  return (
    <div id="process" className="wp-block-group alignfull tp-section tp-inline is-layout-flow">
      <Head title="How it works" />
      <div className="wp-block-columns is-layout-flex">
        {steps.map((s, i) => (
          <div key={s.title} className="wp-block-column is-layout-flow">
            <p className="steps__num">{i + 1}</p>
            <h3 className="wp-block-heading">{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div id="reviews" className="wp-block-group alignfull tp-section tp-inline section--tint is-layout-flow">
      <Head title="What our customers say" />
      <div className="wp-block-tradepro-testimonials tp-dynamic">
        <div className="grid grid--3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="card card--pad testimonial">
              <div className="stars" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: t.rating }, (_, i) => (
                  <Icon key={i} name="star" size={18} />
                ))}
              </div>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{`${t.location} · ${t.service}`}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <div id="pricing" className="wp-block-group alignfull tp-section tp-inline is-layout-flow">
      <Head title="Maintenance plans that pay for themselves" sub="Prevent expensive breakdowns with a yearly tune-up." />
      <div className="wp-block-columns is-layout-flex">
        {plans.map((p) => (
          <div key={p.name} className={`wp-block-column card card--pad plan${p.highlight ? " plan--highlight" : ""} is-layout-flow`}>
            {p.highlight && <p className="plan__flag">Most popular</p>}
            <p className="plan__price">
              {p.price} <small>per month</small>
            </p>
            <h3 className="wp-block-heading">{p.name}</h3>
            <ul className="wp-block-list check-list">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="wp-block-buttons is-layout-flex">
              <Btn href="/#contact" tone={p.highlight ? "accent" : "primary"}>
                Join the plan
              </Btn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Team() {
  return (
    <div id="team" className="wp-block-group alignfull tp-section tp-inline is-layout-flow">
      <Head title="Meet the team" />
      <div className="wp-block-tradepro-team tp-dynamic">
        <div className="grid grid--4">
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <span className="team-card__placeholder" aria-hidden="true">
                {m.name.charAt(0)}
              </span>
              <h3>{m.name}</h3>
              <p className="team-card__role">{m.role}</p>
              {m.credentials && <p className="team-card__cred">{m.credentials}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Areas() {
  return (
    <div id="areas" className="wp-block-group alignfull tp-section tp-inline section--tint is-layout-flow">
      <Head title="Areas we serve" sub="Not sure if we cover your suburb? Give us a call." />
      <div className="wp-block-tradepro-service-areas tp-dynamic">
        <ul className="chips">
          {site.areas.map((a) => (
            <li key={a}>
              <Icon name="map" size={16} /> {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <div id="faq" className="wp-block-group alignfull tp-section tp-inline is-layout-flow">
      <Head title="Frequently asked questions" />
      <div className="wp-block-group faq is-layout-flow">
        {faqs.map((f) => (
          <FaqItem key={f.q} question={f.q} answer={f.a} wp />
        ))}
      </div>
    </div>
  );
}

export function Cta() {
  return (
    <div className="wp-block-group alignfull cta tp-inline is-layout-flow">
      <h2 className="wp-block-heading">Need a pro today?</h2>
      <p>Call now or request a callback. We will have someone on the way fast.</p>
      <div className="wp-block-buttons is-layout-flex">
        <Btn href="/#contact">Request a callback</Btn>
        <Btn href={`tel:${phoneHref}`} tone="outline">
          Call {site.phone}
        </Btn>
      </div>
      <Illustration name="mascot" />
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact" className="wp-block-group alignfull tp-section tp-inline section--tint is-layout-flow">
      <div className="wp-block-columns is-layout-flex">
        <div className="wp-block-column is-layout-flow">
          <h2 className="wp-block-heading">Request a free quote</h2>
          <p>Tell us what you need and we will get back to you within the hour during business hours.</p>
          <ul className="wp-block-tradepro-business-info contact__list">
            <li>
              <Icon name="phone" size={20} /> <a href={`tel:${phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <Icon name="map" size={20} /> {address}
            </li>
            {site.hours.map((h) => (
              <li key={h.days}>
                <Icon name="clock" size={20} /> {`${h.days}: ${h.opens} - ${h.closes}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="wp-block-column is-layout-flow">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
