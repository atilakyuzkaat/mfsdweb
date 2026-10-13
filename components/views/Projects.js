import Link from "next/link";
import PageHead from "@/components/PageHead";
import PartoShowcase from "@/components/PartoShowcase";
import { getDict, routes } from "@/lib/i18n";

export default function Projects({ lang }) {
  const t = getDict(lang);
  const p = t.projectsPage;
  return (
    <>
      <PageHead lang={lang} t={t} title={p.title} crumb={p.title} lead={p.lead} />
      <PartoShowcase lang={lang} t={t} />
      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>{p.validationTitle}</h2>
            <p className="muted">{p.validationLead}</p>
          </div>
          <div>
            {p.validation.map((x) => <p key={x}>{x}</p>)}
            <p><Link href={routes.partoai[lang]}>{p.details}</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
