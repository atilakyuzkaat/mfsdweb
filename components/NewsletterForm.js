"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm({ lang, t, privacyHref }) {
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: f.get("email"), consent: f.get("consent") === "on", website: f.get("website"), lang }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || t.genericError);
      setState({ status: "done", msg: t.done });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  if (state.status === "done") return <p className="form-success" role="status">{state.msg}</p>;

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <label htmlFor="nl-email" className="sr-only">{t.label}</label>
      <div className="newsletter-row">
        <input id="nl-email" name="email" type="email" required autoComplete="email" inputMode="email" placeholder={t.placeholder} />
        <button className="btn" disabled={state.status === "loading"}>
          {state.status === "loading" ? t.sending : t.submit}
        </button>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>{t.consentPre}<Link href={privacyHref}>{t.consentLink}</Link>{t.consentPost}</span>
      </label>
      {state.status === "error" && <p className="form-error" role="alert">{state.msg}</p>}
    </form>
  );
}
