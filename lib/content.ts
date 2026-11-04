export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  price: string;
  features: string[];
  emergency: boolean;
  body: string;
  faq: { question: string; answer: string }[];
};

const faq = [
  {
    question: "How quickly can you come out?",
    answer:
      "Most calls are booked same day, and emergencies get priority. Call us and we will give you an arrival window.",
  },
  {
    question: "Do you give upfront pricing?",
    answer: "Yes. You approve the price before any work starts, with no surprise fees.",
  },
];

const s = (
  slug: string,
  title: string,
  icon: string,
  short: string,
  price: string,
  features: string,
  emergency: boolean,
  body: string,
): Service => ({ slug, title, icon, short, price, features: features.split("\n"), emergency, body, faq });

export const services: Service[] = [
  s("drain-cleaning", "Drain Cleaning", "droplet", "Clogged sink, tub or main line? We clear it fast and fix the cause.", "From $89", "Camera inspection\nHydro-jetting available\nSame-day service\nNo-mess guarantee", true, "Slow drains, gurgling sounds and repeat clogs are usually a sign of a deeper blockage. We locate it with a camera, clear it, and tell you honestly if anything else needs attention."),
  s("water-heaters", "Water Heater Repair & Install", "flame", "Tank and tankless repair, replacement and maintenance.", "From $149", "Same-day replacement\nTank & tankless\nOld unit hauled away\n10-year options", true, "No hot water is never convenient. We stock the most common tank sizes so we can usually replace your unit the same day."),
  s("leak-detection", "Leak Detection & Pipe Repair", "wrench", "Find and fix hidden leaks before they become water damage.", "From $129", "Non-invasive detection\nPipe repair & repiping\nInsurance-ready report", true, "Using acoustic and thermal tools, we find leaks behind walls and under slabs with minimal digging."),
  s("ac-repair", "Air Conditioning Repair", "snowflake", "Fast diagnosis and repair for all major AC brands.", "From $99", "All major brands\nUpfront pricing\nParts warranty\nWeekend appointments", true, "When your AC quits on the hottest day, we prioritise same-day diagnosis and repair."),
  s("furnace-repair", "Furnace & Heating Repair", "thermo", "Keep your home warm with reliable heating repair and tune-ups.", "From $99", "Gas & electric\nSafety inspection\n24/7 emergency\nFilter included", true, "From pilot lights to full furnace replacement, our technicians restore heat quickly and safely."),
  s("hvac-installation", "HVAC Installation & Replacement", "home", "Right-sized, high-efficiency systems installed properly.", "Free estimate", "Free in-home estimate\nFinancing available\nRebate paperwork handled\nWorkmanship warranty", false, "A correctly sized and installed system lowers your bills and lasts longer. We handle the load calculation, permits and rebates."),
  s("maintenance-plans", "Maintenance Plans", "shield", "Annual plumbing and HVAC tune-ups with priority booking.", "From $15/mo", "Two tune-ups per year\nPriority scheduling\nDiscounts on repairs", false, "Prevent breakdowns and extend equipment life with a simple yearly plan."),
  s("bathroom-remodel-plumbing", "Fixture & Faucet Installation", "wrench", "Toilets, faucets, disposals and more, installed cleanly.", "From $79", "Supply & install\nOld fixtures removed\nLeak-tested", false, "Upgrading fixtures? Bring your own or let us source quality options and install them correctly."),
];

export const testimonials = [
  { name: "Sarah M.", location: "Springfield", service: "Water heater replacement", rating: 5, text: "Our water heater died on a Sunday. They had a new one installed by the afternoon, tidy, friendly and fairly priced." },
  { name: "David K.", location: "Chatham", service: "AC repair", rating: 5, text: "Technician arrived in the window they promised, explained the problem clearly and fixed it first visit. Highly recommend." },
  { name: "Priya N.", location: "Riverton", service: "Drain cleaning", rating: 5, text: "Had been fighting a slow drain for months. One visit, camera inspection, sorted. Great communication throughout." },
  { name: "Tom R.", location: "Oak Hills", service: "Furnace repair", rating: 5, text: "No heat in the middle of winter and they answered at 9 PM. Lifesavers. Honest quote and no upselling." },
];

export const team = [
  { name: "Alex Rivera", role: "Owner & Master Plumber", credentials: "Master Plumber Lic. #000000" },
  { name: "Jordan Lee", role: "Lead HVAC Technician", credentials: "EPA 608 Certified" },
  { name: "Sam Patel", role: "Service Technician", credentials: "Journeyman Plumber" },
  { name: "Casey Nguyen", role: "Customer Care Manager", credentials: "" },
];

export const heroBadges = ["Same-day appointments", "Upfront pricing", "1-year workmanship warranty"];

export const trustItems = [
  "Licensed & insured",
  "24/7 emergency service",
  "4.9 stars from 187 reviews",
  "Satisfaction guaranteed",
];

export const whyUs = [
  { title: "On time, every time", text: "Real arrival windows and a text when your technician is on the way." },
  { title: "Upfront pricing", text: "You approve the price before we start. No hidden fees, no pressure." },
  { title: "Work that is guaranteed", text: "Every repair is backed by our workmanship warranty." },
];

export const steps = [
  { title: "Call or request a quote", text: "Tell us what is going on. We book the earliest window that suits you." },
  { title: "We diagnose & quote", text: "Your technician inspects the problem and gives a clear, fixed price." },
  { title: "We fix it right", text: "Work is completed, tested and cleaned up, then backed by our warranty." },
];

export const stats = [
  { number: "15+", label: "Years in business" },
  { number: "8,000+", label: "Jobs completed" },
  { number: "4.9", label: "Average rating" },
  { number: "60 min", label: "Typical emergency response" },
];

export const plans = [
  { price: "$15", name: "Plumbing Care", items: ["Annual plumbing inspection", "Priority scheduling", "10% off repairs"], highlight: false },
  { price: "$25", name: "Home Comfort", items: ["Two HVAC tune-ups per year", "Priority emergency service", "15% off repairs", "Free filters"], highlight: true },
  { price: "$35", name: "Total Home", items: ["Plumbing + HVAC coverage", "Waived service fees", "20% off repairs", "Same-day guarantee"], highlight: false },
];

export const faqs = [
  { q: "Do you offer emergency service?", a: "Yes. We answer the phone 24/7 for burst pipes, gas smells, no heat and similar emergencies." },
  { q: "How much does a service call cost?", a: "Diagnostic visits start from $89 and are credited to the repair if you go ahead." },
  { q: "Are your technicians licensed and insured?", a: "Every technician is licensed, background-checked and covered by our insurance." },
  { q: "Do you offer financing on new systems?", a: "Yes, flexible financing is available on water heaters and HVAC replacements." },
];
