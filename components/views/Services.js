import Link from "next/link";
import PageHead from "@/components/PageHead";
import { getDict, routes } from "@/lib/i18n";

export default function Services({ lang }) {
  const t = getDict(lang);
  const sp = t.servicesPage;
  return (
    <>
      <PageHead lang={lang} t={t} title={sp.title} crumb={sp.title} lead={sp.lead} />
      <section className="section">
        <div className="wrap rows">
          {t.services.map((s) => (
            <div className="row" key={s.id} id={s.id}>
              <h3>{s.title}</h3>
              <div>
                <p>{s.text}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <p className="row-link">
                  {s.link
                    ? <Link href={routes[s.link.key][lang]}>{s.link.label}</Link>
                    : <Link href={`${routes.contact[lang]}?konu=${s.id}`}>{sp.writeUs}</Link>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>{sp.processTitle}</h2>
            <p className="muted">{sp.processText}</p>
          </div>
          <ol className="steps">
            {sp.steps.map(([b, d]) => <li key={b}><b>{b}</b>{d}</li>)}
          </ol>
        </div>
      </section>
    </>
  );
}
