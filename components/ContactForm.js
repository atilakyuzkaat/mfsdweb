"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function ContactForm({ lang, t, privacyHref, defaultTopic = "demo" }) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const topic = t.topics.some(([k]) => k === defaultTopic) ? defaultTopic : "demo";

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = Object.fromEntries(f.entries());
    body.kvkk = f.get("kvkk") === "on";
    body.startedAt = startedAt.current;
    body.lang = lang;
    setStatus("loading");
    setErrors({});
    setMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const j = await res.json().catch(() => ({}));
      if (res.status === 422 && j.errors) {
        setErrors(j.errors);
        setStatus("idle");
        const first = Object.keys(j.errors)[0];
        document.getElementById(first)?.focus();
        return;
      }
      if (!res.ok) throw new Error(j.error || t.genericError);
      setStatus("done");
    } catch (err) {
      setMsg(err.message);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status">
        <h2>{t.doneTitle}</h2>
        <p>{t.doneText}</p>
      </div>
    );
  }

  const err = (k) => errors[k] && <span className="field-error" id={`${k}-err`}>{errors[k]}</span>;
  const a = (k) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">{t.name}</label>
          <input id="name" name="name" required autoComplete="name" {...a("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="org">{t.org} <span className="opt">{t.optional}</span></label>
          <input id="org" name="org" autoComplete="organization" placeholder={t.orgPh} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">{t.email}</label>
          <input id="email" name="email" type="email" inputMode="email" required autoComplete="email" {...a("email")} />
          {err("email")}
        </div>
        <div className="field">
          <label htmlFor="phone">{t.phone} <span className="opt">{t.optional}</span></label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">{t.topic}</label>
        <select id="topic" name="topic" defaultValue={topic}>
          {t.topics.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">{t.message}</label>
        <textarea id="message" name="message" rows={6} required placeholder={t.messagePh} {...a("message")} />
        {err("message")}
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" id="kvkk" name="kvkk" {...a("kvkk")} />
        <span>{t.consentPre}<Link href={privacyHref} target="_blank">{t.consentLink}</Link>{t.consentPost}</span>
      </label>
      {err("kvkk")}
      <p className="form-note">{t.noPatientData}</p>
      {status === "error" && <p className="form-error" role="alert">{msg}</p>}
      <button className="btn btn-block-sm" disabled={status === "loading"}>
        {status === "loading" ? t.sending : t.submit}
      </button>
    </form>
  );
}
