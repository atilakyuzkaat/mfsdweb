"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { routes, routeKeyFor } from "@/lib/i18n";
import Logo from "./Logo";

// Aynı sayfanın diğer dildeki karşılığına götürür (ör. /ekip ↔ /en/team).
function LangSwitch({ lang, label, aria }) {
  const path = usePathname();
  const other = lang === "tr" ? "en" : "tr";
  const key = routeKeyFor(path) || "home";
  return (
    <Link href={routes[key][other]} hrefLang={other} lang={other} className="lang-switch" aria-label={aria}>
      {label}
    </Link>
  );
}

export default function Header({ lang, nav, labels, switchTo }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const active = (key) => path === routes[key][lang] || path.startsWith(routes[key][lang] + "/");

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="wrap header-inner">
        <Link href={routes.home[lang]} className="brand" aria-label={labels.home}>
          <Logo />
        </Link>
        <div className="header-tools">
          <LangSwitch lang={lang} label={switchTo.label} aria={switchTo.aria} />
          <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((v) => !v)}>
            <span className="menu-icon" aria-hidden="true"><i /><i /><i /></span>
            {open ? labels.close : labels.menu}
          </button>
        </div>
        <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label={labels.mainNav}>
          {nav.map(([key, label]) => (
            <Link key={key} href={routes[key][lang]} aria-current={active(key) ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <Link href={routes.contact[lang] + "?konu=demo"} className="btn btn-small">{labels.demo}</Link>
        </nav>
      </div>
    </header>
  );
}
