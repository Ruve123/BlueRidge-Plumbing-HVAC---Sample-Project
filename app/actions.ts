"use server";

export type QuoteState = {
  status: "idle" | "ok" | "invalid" | "error";
  errors: Partial<Record<"name" | "phone" | "email", string>>;
  values: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null, max: number) =>
  (typeof v === "string" ? v : "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);

/**
 * Demo handler: validates, then (optionally) forwards to QUOTE_WEBHOOK_URL.
 * No email is sent and nothing is stored.
 */
export async function submitQuote(_prev: QuoteState, fd: FormData): Promise<QuoteState> {
  const values = {
    name: clean(fd.get("name"), 100),
    phone: clean(fd.get("phone"), 30),
    email: clean(fd.get("email"), 120),
    service: clean(fd.get("service"), 120),
    message: clean(fd.get("message"), 3000),
  };

  // Honeypot: pretend success so bots learn nothing.
  if (clean(fd.get("website"), 100)) return { status: "ok", errors: {}, values: {} };

  // Time trap: a human takes more than 3 seconds.
  const ts = Number(clean(fd.get("ts"), 20));
  if (ts && Date.now() - ts < 3000) return { status: "ok", errors: {}, values: {} };

  const errors: QuoteState["errors"] = {};
  if (!values.name) errors.name = "Please tell us your name.";
  if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a phone number we can call.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  const hook = process.env.QUOTE_WEBHOOK_URL;
  if (hook) {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, submitted_at: new Date().toISOString() }),
      });
      if (!res.ok) return { status: "error", errors: {}, values };
    } catch {
      return { status: "error", errors: {}, values };
    }
  }
  return { status: "ok", errors: {}, values: {} };
}
