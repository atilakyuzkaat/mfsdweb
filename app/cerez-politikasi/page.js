import PageHead from "@/components/PageHead";
import { company } from "@/lib/site";

export const metadata = { title: "Çerez politikası", alternates: { canonical: "/cerez-politikasi" } };

export default function Page() {
  return (
    <>
      <PageHead title="Çerez politikası" crumb="Çerez politikası" />
      <section className="section">
        <div className="wrap prose">
          <p>mfsd.com.tr, reklam veya izleme amaçlı çerez kullanmaz. Site yalnızca çalışması için teknik olarak zorunlu olan işlevleri kullanır ve bunlar için onay gerekmez.</p>
          <p>İleride ziyaretçi istatistikleri için bir analiz aracı eklenirse bu sayfa güncellenecek ve gerekli durumlarda ziyaretçilerden önceden onay alınacaktır.</p>
          <p>Sorularınız için: <a href={`mailto:${company.email}`}>{company.email}</a></p>
        </div>
      </section>
    </>
  );
}
