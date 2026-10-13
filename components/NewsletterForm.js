"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: f.get("email"),
          consent: f.get("consent") === "on",
          website: f.get("website"),
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Kayıt tamamlanamadı.");
      setState({ status: "done", msg: "Abone oldunuz. Yeni duyurularımızı e-postanıza göndereceğiz." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  if (state.status === "done") return <p className="form-success" role="status">{state.msg}</p>;

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <label htmlFor="nl-email" className="sr-only">E-posta adresiniz</label>
      <div className="newsletter-row">
        <input id="nl-email" name="email" type="email" required autoComplete="email" placeholder="ornek@hastane.com.tr" />
        <button className="btn" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Kaydediliyor…" : "Abone ol"}
        </button>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>
          MFSD'den duyuru ve bülten e-postaları almayı kabul ediyorum. Kişisel verilerim{" "}
          <Link href="/kvkk">aydınlatma metnine</Link> uygun işlenir; dilediğim an abonelikten çıkabilirim.
        </span>
      </label>
      {state.status === "error" && <p className="form-error" role="alert">{state.msg}</p>}
    </form>
  );
}
