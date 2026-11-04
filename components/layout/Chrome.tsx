import Link from "next/link";
import { Icon } from "@/components/Icon";
import { fullAddress, phoneHref, site } from "@/lib/site";

export function EmergencyBar() {
  return (
    <div className="emergency-bar">
      <div className="container emergency-bar__inner">
        <span>{site.emergency}</span>
        <a className="emergency-bar__phone" href={`tel:${phoneHref}`}>
          <Icon name="phone" size={16} /> {site.phone}
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="colophon" className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{site.name}</p>
          <p>{site.tagline}</p>
          <p className="site-footer__small">{site.license}</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Contact</h2>
          <ul className="plain-list">
            <li>
              <a href={`tel:${phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{fullAddress}</li>
          </ul>
          <ul className="plain-list site-footer__hours">
            {site.hours.map((h) => (
              <li key={h.days}>{`${h.days}: ${h.opens} - ${h.closes}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Service areas</h2>
          <ul className="plain-list">
            {site.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="plain-list">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. Demo site: BlueRidge is a fictional business.
          </small>
        </div>
      </div>
    </footer>
  );
}

export function MobileCall() {
  return (
    <a className="mobile-call" href={`tel:${phoneHref}`}>
      <Icon name="phone" size={20} />
      <span>Call {site.phone}</span>
    </a>
  );
}
