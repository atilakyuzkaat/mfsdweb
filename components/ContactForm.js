"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const TOPICS = [
  ["demo", "PartoAI demo talebi"],
  ["danismanlik", "Klinik danışmanlık"],
  ["egitim", "Eğitim programları"],
  ["isbirligi", "İş birliği / yatırım"],
  ["diger", "Diğer"],
];

export default function ContactForm({ defaultTopic = "demo" }) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const topic = TOPICS.some(([k]) => k === defaultTopic) ? defaultTopic : "demo";

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = Object.fromEntries(f.entries());
    body.kvkk = f.get("kvkk") === "on";
    body.startedAt = startedAt.current;
    setStatus("loading");
    setErrors({});
    setMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const j = await res.json().catch(() => ({}));
      if (res.status === 422 && j.errors) {
        setErrors(j.errors);
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(j.error || "Mesaj gönderilemedi.");
      setStatus("done");
    } catch (err) {
      setMsg(err.message);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status">
        <h2>Mesajınız gönderildi</h2>
        <p>E-posta adresinize bir onay gönderdik. Ekibimiz en geç iki iş günü içinde size dönüş yapacak.</p>
      </div>
    );
  }

  const err = (k) => errors[k] && <span className="field-error" id={`${k}-err`}>{errors[k]}</span>;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Ad soyad</label>
          <input id="name" name="name" required autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="org">Kurum <span className="opt">(isteğe bağlı)</span></label>
          <input id="org" name="org" autoComplete="organization" placeholder="Hastane, klinik veya şirket" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input id="email" name="email" type="email" required autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {err("email")}
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon <span className="opt">(isteğe bağlı)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">Konu</label>
        <select id="topic" name="topic" defaultValue={topic}>
          {TOPICS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Mesajınız</label>
        <textarea id="message" name="message" rows={6} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined}
          placeholder="Kurumunuzu, doğum hacminizi ve neye ihtiyaç duyduğunuzu kısaca yazın." />
        {err("message")}
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="kvkk" aria-invalid={!!errors.kvkk} />
        <span>
          <Link href="/kvkk" target="_blank">KVKK aydınlatma metnini</Link> okudum; bilgilerimin talebime yanıt verilmesi amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      {err("kvkk")}
      <p className="form-note">Lütfen bu forma hasta bilgisi veya tıbbi kayıt yazmayın.</p>
      {status === "error" && <p className="form-error" role="alert">{msg}</p>}
      <button className="btn" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor…" : "Mesajı gönder"}
      </button>
    </form>
  );
}
