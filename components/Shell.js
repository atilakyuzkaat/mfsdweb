import "@fontsource-variable/source-serif-4";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@/app/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { getDict } from "@/lib/i18n";
import { company, siteUrl } from "@/lib/site";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: "MFSD",
  url: siteUrl,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1} ${company.address.line2}`,
    addressLocality: company.address.district,
    addressRegion: company.address.city,
    addressCountry: "TR",
  },
};

export default function Shell({ lang, children }) {
  const t = getDict(lang);
  return (
    <html lang={lang}>
      <body>
        <a href="#main" className="skip-link">{t.header.skip}</a>
        <Header lang={lang} nav={t.nav} labels={t.header} switchTo={t.switchTo} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </body>
    </html>
  );
}
