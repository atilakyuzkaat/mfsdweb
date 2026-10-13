import Link from "next/link";
import CtgTrace from "@/components/CtgTrace";
import PartoShowcase from "@/components/PartoShowcase";
import { getDict, routes } from "@/lib/i18n";
import { people } from "@/lib/team";
import Portrait from "@/components/Portrait";

export default function Home({ lang }) {
  const t = getDict(lang);
  const h = t.home;
  const r = people.resul;
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>{h.h1}</h1>
            <p className="lead">{h.lead}</p>
            <div className="actions">
              <Link href={routes.partoai[lang]} className="btn">{h.ctaPrimary}</Link>
              <Link href={routes.contact[lang]} className="btn btn-ghost">{h.ctaSecondary}</Link>
            </div>
          </div>
          <aside className="hero-aside">
            <strong>{h.asideTitle}</strong>
            {h.asideText}
          </aside>
        </div>
        <CtgTrace labels={t.ctg} />
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head">
            <h2>{h.whatTitle}</h2>
            <p>{h.whatText}</p>
          </div>
          <div className="rows">
            {t.services.map((s) => (
              <div className="row" key={s.id}>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.text}</p>
                  {s.link && <Link href={routes[s.link.key][lang]}>{s.link.label}</Link>}
                </div>
              </div>
            ))}
          </div>
          <p className="after-rows"><Link href={routes.services[lang]}>{h.servicesMore}</Link></p>
        </div>
      </section>

      <PartoShowcase lang={lang} t={t} />

      <section className="section">
        <div className="wrap person">
          <Portrait person={r} lang={lang} />
          <div className="measure">
            <h2>{r.name[lang]}</h2>
            <p className="role">{t.team.resul.role}</p>
            <p>{t.team.resul.summary}</p>
            <Link href={routes.team[lang]}>{h.teamLink}</Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cta-band">
          <div>
            <h2>{h.ctaTitle}</h2>
            <p className="muted">{h.ctaText}</p>
          </div>
          <div className="actions">
            <Link href={routes.contact[lang] + "?konu=demo"} className="btn">{t.partoai.demo}</Link>
            <Link href={routes.contact[lang] + "?konu=danismanlik"} className="btn btn-ghost">{h.ctaConsult}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
