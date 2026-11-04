import Link from "next/link";
import { Icon } from "@/components/Icon";
import { phoneHref, site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Need a pro today?</h2>
          <p>{site.emergency}</p>
        </div>
        <div className="cta__actions">
          <Link className="btn btn--accent btn--lg" href="/#contact">
            Request a callback
          </Link>
          <a className="btn btn--outline-light btn--lg" href={`tel:${phoneHref}`}>
            <Icon name="phone" size={20} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
