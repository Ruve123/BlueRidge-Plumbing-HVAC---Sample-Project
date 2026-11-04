export const site = {
  name: "BlueRidge Plumbing & HVAC",
  tagline: "Licensed. Local. On time.",
  phone: "(555) 010-2030",
  email: "hello@blueridge-demo.test",
  license: "Licensed, bonded & insured · Lic. #PL-000000",
  emergency: "24/7 emergency service. Burst pipe or no heat? Call now.",
  street: "123 Main Street",
  city: "Springfield",
  region: "IL",
  postcode: "62701",
  country: "US",
  areas: ["Springfield", "Chatham", "Riverton", "South Pointe", "Oak Hills", "Lakeview"],
  rating: { value: 4.9, count: 187 },
  hours: [
    { days: "Mon-Fri", opens: "07:00", closes: "18:00" },
    { days: "Sat", opens: "08:00", closes: "14:00" },
  ],
  brand: { primary: "#0b6bff", accent: "#ffc21a" },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const phoneHref = site.phone.replace(/[^\d+]/g, "");
export const address = `${site.street}, ${site.city} ${site.region}`;
export const fullAddress = `${site.street}, ${site.city} ${site.region} ${site.postcode}`;
