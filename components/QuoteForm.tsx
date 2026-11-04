"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/content";

const initial: QuoteState = { status: "idle", errors: {}, values: {} };
const options = [...services].sort((a, b) => a.title.localeCompare(b.title));

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={pending} aria-busy={pending || undefined}>
      {pending ? "Sending…" : "Send request"}
    </button>
  );
}

export function QuoteForm() {
  const [state, action] = useActionState(submitQuote, initial);
  const [ts, setTs] = useState("");
  const alertRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { errors, values } = state;

  useEffect(() => setTs(String(Date.now())), []);

  // Land on the result: first bad field, otherwise the status message.
  useEffect(() => {
    if (state.status === "idle") return;
    const bad = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
    if (bad) bad.focus();
    else alertRef.current?.focus();
  }, [state]);

  const bad = (k: "name" | "phone" | "email") =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `qf-${k}-err` } : {};
  const err = (k: "name" | "phone" | "email") =>
    errors[k] ? (
      <p className="field-error" id={`qf-${k}-err`}>
        {errors[k]}
      </p>
    ) : null;
  const req = <span className="form-req">(required)</span>;

  return (
    <form ref={formRef} className="wp-block-tradepro-quote-form card card--pad quote-form" action={action} noValidate>
      {state.status === "ok" && (
        <p ref={alertRef} tabIndex={-1} className="alert alert--ok" role="status">
          Thanks! We got your request and will call you back shortly. (This is a demo, so nothing was actually sent.)
        </p>
      )}
      {state.status === "invalid" && (
        <p ref={alertRef} tabIndex={-1} className="alert alert--error" role="alert">
          {Object.keys(errors).length === 1
            ? "One field needs fixing before we can send this."
            : "A few fields need fixing before we can send this."}
        </p>
      )}
      {state.status === "error" && (
        <p ref={alertRef} tabIndex={-1} className="alert alert--error" role="alert">
          We could not send your request just now. Your details are still here, so try again, or call us.
        </p>
      )}

      <input type="hidden" name="ts" value={ts} readOnly />
      <div className="hp" aria-hidden="true">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-row">
        <label htmlFor="qf-name">Name {req}</label>
        <input id="qf-name" name="name" type="text" required aria-required="true" maxLength={100} autoComplete="name" defaultValue={values.name ?? ""} {...bad("name")} />
        {err("name")}
      </div>
      <div className="form-row form-row--2">
        <div>
          <label htmlFor="qf-phone">Phone {req}</label>
          <input id="qf-phone" name="phone" type="tel" inputMode="tel" required aria-required="true" maxLength={30} autoComplete="tel" defaultValue={values.phone ?? ""} {...bad("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="qf-email">Email {req}</label>
          <input id="qf-email" name="email" type="email" required aria-required="true" maxLength={120} autoComplete="email" defaultValue={values.email ?? ""} {...bad("email")} />
          {err("email")}
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="qf-service">What do you need?</label>
        <select id="qf-service" name="service" defaultValue={values.service ?? ""}>
          <option value="">Select a service</option>
          {options.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="qf-message">Tell us a bit more</label>
        <textarea id="qf-message" name="message" rows={4} maxLength={3000} defaultValue={values.message ?? ""} />
      </div>
      <Submit />
    </form>
  );
}
