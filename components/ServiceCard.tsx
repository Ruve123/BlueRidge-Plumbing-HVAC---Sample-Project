import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="card card--service" href={`/services/${service.slug}`}>
      <span className="card__icon">
        <Icon name={service.icon} size={26} />
      </span>
      <h3 className="card__title">{service.title}</h3>
      <p className="card__text">{service.short}</p>
      <span className="card__meta">{service.price}</span>
      <span className="card__link">Learn more &rarr;</span>
    </Link>
  );
}
