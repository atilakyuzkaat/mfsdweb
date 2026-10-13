"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="MFSD ana sayfa">
          <Logo />
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
        <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Ana menü">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/iletisim?konu=demo" className="btn btn-small">Demo isteyin</Link>
        </nav>
      </div>
    </header>
  );
}
