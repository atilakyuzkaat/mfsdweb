// Hiçbir rotayla eşleşmeyen adresler için (ör. /olmayan-sayfa). İki dilli, kendi html'iyle.
import "@fontsource-variable/source-serif-4";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import Logo from "@/components/Logo";

export const metadata = { title: "404 | MFSD", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body>
        <section className="section">
          <div className="wrap measure">
            <a href="/" className="brand" aria-label="MFSD"><Logo /></a>
            <h1 style={{ marginTop: 40 }}>Bu sayfa bulunamadı</h1>
            <p className="lead" lang="en">Page not found.</p>
            <div className="actions">
              <a href="/" className="btn">Ana sayfa</a>
              <a href="/en" className="btn btn-ghost" lang="en">English home</a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
