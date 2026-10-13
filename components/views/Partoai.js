import Link from "next/link";
import PageHead from "@/components/PageHead";
import { getDict, routes } from "@/lib/i18n";

export default function Partoai({ lang }) {
  const t = getDict(lang);
  const p = t.partoaiPage;
  const [b1, b2, b3] = p.blocks;
  return (
    <>
      <PageHead lang={lang} t={t} title="PartoAI" lead={p.lead}
        crumb={<><Link href={routes.projects[lang]}>{t.projectsPage.title}</Link> / PartoAI</>} />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{p.modulesTitle}</h2>
            <p>{p.modulesText}</p>
          </div>
          <div className="rows">
            {t.partoai.modules.map(([title, d]) => (
              <div className="row" key={title}><h3>{title}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>{p.journeyTitle}</h2>
            <p className="muted">{p.journeyText}</p>
          </div>
          <ol className="steps">
            {p.journey.map(([b, d]) => <li key={b}><b>{b}</b>{d}</li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h3>{b1[0]}</h3><p>{b1[1]}</p>
            <h3>{b2[0]}</h3><p>{b2[1]}</p>
          </div>
          <div>
            <h3>{b3[0]}</h3><p>{b3[1]}</p>
            <div className="callout">
              <p><b>{p.calloutTitle}</b> {p.callout}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cta-band">
          <div>
            <h2>{p.pilotTitle}</h2>
            <p className="muted">{p.pilotText}</p>
          </div>
          <div className="actions">
            <Link href={routes.contact[lang] + "?konu=demo"} className="btn btn-teal">{p.pilotCta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
