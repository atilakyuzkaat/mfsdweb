import Link from "next/link";
import PageHead from "@/components/PageHead";
import { getDict, routes } from "@/lib/i18n";
import { company, fullAddress } from "@/lib/site";

export default function About({ lang }) {
  const t = getDict(lang);
  const a = t.about;
  const f = a.facts;
  return (
    <>
      <PageHead lang={lang} t={t} title={a.title} crumb={a.title} lead={a.lead} />

      <section className="section">
        <div className="wrap cols-2">
          <div><h2>{a.whyTitle}</h2></div>
          <div className="measure">{a.why.map((x) => <p key={x}>{x}</p>)}</div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head"><h2>{a.principlesTitle}</h2></div>
          <div className="rows">
            {a.principles.map(([h, p]) => <div className="row" key={h}><h3>{h}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>{a.companyTitle}</h2>
            <p className="muted">{a.companyNote}</p>
          </div>
          <dl className="facts">
            <dt>{f.legalName}</dt><dd>{company.legalName}</dd>
            <dt>{f.shortName}</dt><dd>MFSD</dd>
            <dt>{f.mersis}</dt><dd>{company.mersis}</dd>
            <dt>{f.registry}</dt><dd>{a.registryValue(company.registryNo)}</dd>
            {company.taxOffice && (<><dt>{f.tax}</dt><dd>{company.taxOffice}</dd></>)}
            <dt>{f.address}</dt><dd>{fullAddress()}</dd>
            <dt>{f.email}</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
            {company.kep && (<><dt>{f.kep}</dt><dd>{company.kep}</dd></>)}
          </dl>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <p><Link href={routes.team[lang]}>{a.outro[0]}</Link> {a.outro[1]} <Link href={routes.contact[lang]}>{a.outro[2]}</Link>.</p>
        </div>
      </section>
    </>
  );
}
