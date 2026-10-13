import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { company, fullAddress, mapsUrl } from "@/lib/site";

export const metadata = {
  title: "İletişim",
  description: "PartoAI demo talebi, klinik danışmanlık, eğitim ve iş birlikleri için MFSD ile iletişime geçin.",
  alternates: { canonical: "/iletisim" },
};

export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const konu = typeof sp?.konu === "string" ? sp.konu : "demo";
  return (
    <>
      <PageHead title="İletişim" crumb="İletişim" lead="Demo, pilot, eğitim ya da danışmanlık talebiniz için formu doldurun. Mesajınız doğrudan ekibimize ulaşır." />
      <section className="section">
        <div className="wrap contact-grid">
          <ContactForm defaultTopic={konu} />
          <aside className="contact-side">
            <div>
              <h3>E-posta</h3>
              <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            </div>
            {company.phone && (
              <div>
                <h3>Telefon</h3>
                <p><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></p>
              </div>
            )}
            <div>
              <h3>Adres</h3>
              <p>{company.legalName}<br />{fullAddress()}</p>
              <p style={{ marginTop: 8 }}><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Haritada açın</a></p>
            </div>
            <div className="callout">
              <p>Hasta randevusu ve muayene talepleri için bu formu kullanmayın. MFSD hastalara doğrudan sağlık hizmeti vermez; kurumsal iş birlikleriyle çalışır.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
