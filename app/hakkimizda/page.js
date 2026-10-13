import Link from "next/link";
import PageHead from "@/components/PageHead";
import { company, fullAddress } from "@/lib/site";

export const metadata = {
  title: "Hakkımızda",
  description: "Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Tic. Ltd. Şti. (MFSD) hakkında: amacımız, çalışma ilkelerimiz ve şirket bilgileri.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return (
    <>
      <PageHead title="Hakkımızda" crumb="Hakkımızda" lead="MFSD, anne ve bebek sağlığına odaklanan bir sağlık ve danışmanlık şirketidir. İstanbul'da kuruldu; perinatoloji uzmanları ve yazılım mühendislerinden oluşan bir ekiple çalışır." />

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>Neden varız</h2>
          </div>
          <div className="measure">
            <p>Doğumhanelerde kritik kararlar çoğu zaman yoğun mesai altında, kâğıt formlar ve dağınık kayıtlar üzerinden verilir. Kılavuzlarda tanımlı uyarı işaretleri bu koşullarda gözden kaçabilir.</p>
            <p>MFSD'yi, perinatoloji alanındaki klinik birikimi hastanelerin her gün kullanabileceği süreçlere, eğitimlere ve yazılımlara dönüştürmek için kurduk. Amacımız sağlık ekiplerinin yerine karar vermek değil, doğru bilgiyi doğru anda önlerine koymak.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head"><h2>Çalışma ilkelerimiz</h2></div>
          <div className="rows">
            <div className="row"><h3>Kılavuza dayalı</h3><p>Her eşik, skor ve öneri yayımlanmış uluslararası kılavuzlara dayanır ve kaynağı gösterilir.</p></div>
            <div className="row"><h3>Son karar hekimin</h3><p>Ürünlerimiz karar destek sağlar; tanı koymaz. Klinik sorumluluk her zaman sağlık profesyonelindedir.</p></div>
            <div className="row"><h3>Önce doğrulama</h3><p>Hiçbir klinik özellik, uzman kararlarıyla karşılaştırılarak doğrulanmadan kullanıma açılmaz.</p></div>
            <div className="row"><h3>Veri kurumda kalır</h3><p>Hasta verisinin sahibi hastanedir. KVKK'ya uygun çalışır, mümkün olduğunda veriyi kurumun kendi sunucusunda tutarız.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>Şirket bilgileri</h2>
            <p className="muted">6102 sayılı Türk Ticaret Kanunu m.1524 uyarınca.</p>
          </div>
          <dl className="facts">
            <dt>Ticaret unvanı</dt><dd>{company.legalName}</dd>
            <dt>Kısa ad</dt><dd>MFSD</dd>
            <dt>MERSIS no</dt><dd>{company.mersis}</dd>
            <dt>Ticaret sicili</dt><dd>{company.tradeRegistry}</dd>
            {company.taxOffice && (<><dt>Vergi dairesi / no</dt><dd>{company.taxOffice}</dd></>)}
            <dt>Merkez adresi</dt><dd>{fullAddress()}</dd>
            <dt>E-posta</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
            {company.kep && (<><dt>KEP</dt><dd>{company.kep}</dd></>)}
          </dl>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <p><Link href="/ekip">Ekibimizi tanıyın</Link> veya <Link href="/iletisim">bizimle iletişime geçin</Link>.</p>
        </div>
      </section>
    </>
  );
}
