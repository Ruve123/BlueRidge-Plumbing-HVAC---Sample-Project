import { sceneSvg } from "@/lib/illustrations";

export function Illustration({ name }: { name: "hero" | "pipes" | "mascot" }) {
  return (
    <div
      className={`wp-block-tradepro-illustration tp-illus tp-illus--${name}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: sceneSvg[name] }}
    />
  );
}
