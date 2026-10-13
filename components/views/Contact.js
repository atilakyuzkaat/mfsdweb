import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { getDict, routes } from "@/lib/i18n";
import { company, fullAddress, mapsUrl } from "@/lib/site";

export default async function Contact({ lang, searchParams }) {
  const t = getDict(lang);
  const c = t.contact;
  const sp = await searchParams;
  const konu = typeof sp?.konu === "string" ? sp.konu : "demo";
  return (
    <>
      <PageHead lang={lang} t={t} title={c.title} crumb={c.title} lead={c.lead} />
      <section className="section">
        <div className="wrap contact-grid">
          <ContactForm lang={lang} t={c.form} privacyHref={routes.privacy[lang]} defaultTopic={konu} />
          <aside className="contact-side">
            <div>
              <h3>{c.email}</h3>
              <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            </div>
            {company.phone && (
              <div>
                <h3>{c.phone}</h3>
                <p><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></p>
              </div>
            )}
            <div>
              <h3>{c.address}</h3>
              <p>{company.legalName}<br />{fullAddress()}</p>
              <p className="mt-sm"><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{c.map}</a></p>
            </div>
            <div className="callout"><p>{c.notice}</p></div>
          </aside>
        </div>
      </section>
    </>
  );
}
