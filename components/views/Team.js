import Link from "next/link";
import PageHead from "@/components/PageHead";
import { getDict, routes } from "@/lib/i18n";
import { people } from "@/lib/team";

function Portrait({ p, lang }) {
  return (
    <div className="portrait" aria-hidden={!p.photo}>
      {p.photo ? <img src={p.photo} alt={p.name[lang]} /> : p.initials}
    </div>
  );
}

export default function Team({ lang }) {
  const t = getDict(lang);
  const tm = t.team;
  const { resul, atil } = people;
  return (
    <>
      <PageHead lang={lang} t={t} title={tm.title} crumb={tm.title} lead={tm.lead} />

      <section className="section" id={resul.slug}>
        <div className="wrap person">
          <Portrait p={resul} lang={lang} />
          <div>
            <h2>{resul.name[lang]}</h2>
            <p className="role">{tm.resul.role}</p>
            <p className="measure">{tm.resul.summary}</p>
            <div className="cols-2 person-details">
              <div>
                <h3>{tm.careerTitle}</h3>
                <ol className="timeline">
                  {tm.resul.timeline.map(([y, x]) => <li key={y + x}><time>{y}</time> {x}</li>)}
                </ol>
              </div>
              <div>
                <h3>{tm.focusTitle}</h3>
                <ul>{tm.resul.focus.map((f) => <li key={f}>{f}</li>)}</ul>
                <h3 className="mt">{tm.membershipsTitle}</h3>
                <ul>{tm.resul.memberships.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id={atil.slug}>
        <div className="wrap person">
          <Portrait p={atil} lang={lang} />
          <div className="measure">
            <h2>{atil.name[lang]}</h2>
            <p className="role">{tm.atil.role}</p>
            <p>{tm.atil.summary}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-band">
          <div>
            <h2>{tm.joinTitle}</h2>
            <p className="muted">{tm.joinText}</p>
          </div>
          <div className="actions">
            <Link href={routes.contact[lang] + "?konu=isbirligi"} className="btn">{tm.joinCta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
