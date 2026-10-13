import Link from "next/link";
import PageHead from "@/components/PageHead";
import Portrait from "@/components/Portrait";
import { getDict, routes } from "@/lib/i18n";
import { people } from "@/lib/team";

// Bir kişinin özgeçmiş bölümü. Boş listeler (ör. henüz girilmemiş kariyer) sayfada gösterilmez.
function Person({ person, cv, tm, lang, white }) {
  const has = (a) => Array.isArray(a) && a.length > 0;
  const left = has(cv.timeline);
  const right = has(cv.focus) || has(cv.projects) || has(cv.memberships);
  return (
    <section className={white ? "section section-white" : "section"} id={person.slug}>
      <div className="wrap person">
        <Portrait person={person} lang={lang} />
        <div>
          <h2>{person.name[lang]}</h2>
          <p className="role">{cv.role}</p>
          <p className="measure">{cv.summary}</p>
          {(left || right) && (
            <div className={left && right ? "cols-2 person-details" : "person-details measure"}>
              {left && (
                <div>
                  <h3>{tm.careerTitle}</h3>
                  <ol className="timeline">
                    {cv.timeline.map(([y, x]) => <li key={y + x}><time>{y}</time><span>{x}</span></li>)}
                  </ol>
                </div>
              )}
              {right && (
                <div>
                  {has(cv.focus) && (<>
                    <h3>{cv.focusTitle || tm.focusTitle}</h3>
                    <ul>{cv.focus.map((f) => <li key={f}>{f}</li>)}</ul>
                  </>)}
                  {has(cv.projects) && (<>
                    <h3 className="mt">{tm.projectsTitle}</h3>
                    <dl className="cv-projects">
                      {cv.projects.map(([n, d]) => (<div key={n}><dt>{n}</dt><dd>{d}</dd></div>))}
                    </dl>
                  </>)}
                  {has(cv.memberships) && (<>
                    <h3 className="mt">{tm.membershipsTitle}</h3>
                    <ul>{cv.memberships.map((f) => <li key={f}>{f}</li>)}</ul>
                  </>)}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Team({ lang }) {
  const t = getDict(lang);
  const tm = t.team;
  return (
    <>
      <PageHead lang={lang} t={t} title={tm.title} crumb={tm.title} lead={tm.lead} />
      <Person person={people.resul} cv={tm.resul} tm={tm} lang={lang} />
      <Person person={people.atil} cv={tm.atil} tm={tm} lang={lang} white />
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
