import Link from "next/link";
import { company, fullAddress } from "@/lib/site";
import { routes } from "@/lib/i18n";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer({ lang, t }) {
  const year = new Date().getFullYear();
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-news">
          <h2>{t.newsletter.title}</h2>
          <p>{t.newsletter.text}</p>
          <NewsletterForm lang={lang} t={t.newsletter} privacyHref={routes.privacy[lang]} />
        </div>
        <div className="footer-cols">
          <div>
            <h3>{f.site}</h3>
            <ul>
              {t.nav.map(([key, label]) => (
                <li key={key}><Link href={routes[key][lang]}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{f.legal}</h3>
            <ul>
              <li><Link href={routes.privacy[lang]}>{f.privacy}</Link></li>
              <li><Link href={routes.cookies[lang]}>{f.cookies}</Link></li>
            </ul>
          </div>
          <div>
            <h3>{f.contact}</h3>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {company.phone && <li><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></li>}
              <li>{company.address.district} / {company.address.city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-legal">
        <Logo light />
        <p>
          <strong>{company.legalName}</strong><br />
          {fullAddress()}<br />
          {t.company.mersis}: {company.mersis} · {t.company.registry(company.registryNo)}
          {company.taxOffice && <> · {company.taxOffice}</>}
          {company.kep && <> · KEP: {company.kep}</>}
        </p>
        <p className="copy">© {year} MFSD. {f.rights}</p>
      </div>
    </footer>
  );
}
