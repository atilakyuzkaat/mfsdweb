import "@fontsource-variable/source-serif-4";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, siteUrl } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "MFSD — Maternal Fetal Sağlık ve Danışmanlık", template: "%s | MFSD" },
  description:
    "MFSD, perinatoloji uzmanlığını dijital sağlık teknolojisiyle buluşturur: hastanelere klinik danışmanlık, doğumhane eğitimleri ve PartoAI dijital partogram sistemi.",
  openGraph: { type: "website", locale: "tr_TR", siteName: "MFSD", url: siteUrl },
  alternates: { canonical: "/" },
};

export const viewport = { themeColor: "#2e1640" };

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

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <a href="#main" className="sr-only">İçeriğe geç</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </body>
    </html>
  );
}
