import Link from "next/link";
import { routes } from "@/lib/i18n";

export default function PartoShowcase({ lang, t, full = false }) {
  const p = t.partoai;
  return (
    <section className="section parto" id="partoai">
      <div className="wrap parto-grid">
        <div>
          <p className="parto-mark"><i aria-hidden="true" />{p.status}</p>
          <h2>PartoAI</h2>
          <p className="lead">{p.lead}</p>
          <p className="muted">{p.origin}</p>
          <div className="actions">
            <Link href={routes.contact[lang] + "?konu=demo"} className="btn">{p.demo}</Link>
            {!full && <Link href={routes.partoai[lang]} className="btn btn-ghost">{p.modulesLink}</Link>}
          </div>
          <p className="disclaimer">{p.disclaimer}</p>
        </div>
        <ul className="modules">
          {p.modules.map(([title, d]) => (
            <li key={title}><b>{title}</b><span>{d}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
