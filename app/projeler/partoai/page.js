import Link from "next/link";
import PageHead from "@/components/PageHead";
import { modules } from "@/components/PartoShowcase";

export const metadata = {
  title: "PartoAI — Dijital partogram ve doğum karar destek",
  description: "WHO Labour Care Guide temelli dijital partogram, maternal erken uyarı, NST/CTG değerlendirme ve Robson kalite analizi. Kurum içi veya Türkiye'de barındırılan kurulum.",
  alternates: { canonical: "/projeler/partoai" },
};

export default function Page() {
  return (
    <>
      <PageHead
        title="PartoAI"
        crumb={<><Link href="/projeler">Projeler</Link> / PartoAI</>}
        lead="Dijital partogram ve doğum karar destek sistemi. Ebe, hemşire ve hekimin aynı ekranda çalıştığı, eşikleri sürekli izleyen bir doğumhane yazılımı."
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Modüller</h2>
            <p>Her modül tek başına ya da birlikte kullanılabilir. Eşik ve kurallar hastaneye göre yapılandırılır.</p>
          </div>
          <div className="rows">
            {modules.map(([t, d]) => (
              <div className="row" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>Bir hastanın yolculuğu</h2>
            <p className="muted">PartoAI, kabulden doğum sonrası kalite raporuna kadar tüm süreci tek kayıtta tutar.</p>
          </div>
          <ol className="steps">
            <li><b>Hasta kabul</b>Öykü ve bulgular girilir; risk grubu otomatik belirlenir.</li>
            <li><b>Travay izlemi</b>Muayeneler partograma işlenir; ilerlemeyen travay kriterleri izlenir.</li>
            <li><b>Erken uyarı</b>MEWS skoru ve NST/CTG kategorisi hesaplanır, gerekirse ekip uyarılır.</li>
            <li><b>Doğum kapanışı</b>Doğum şekli ve endikasyon kaydedilir; Robson grubu atanır.</li>
            <li><b>Kalite analizi</b>Birim ve hekim düzeyinde göstergeler raporlanır.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h3>Kurulum seçenekleri</h3>
            <p>Yazılım hastanenin kendi sunucusunda (on-prem) çalışabilir; bu durumda hasta verisi kurumdan çıkmaz. Alternatif olarak Türkiye'de barındırılan bulut kurulumu sunulur.</p>
            <h3>Entegrasyon</h3>
            <p>HBYS ile HL7 üzerinden, CTG santralleriyle cihaz çıktısı üzerinden bağlantı kurulur. e-Nabız katmanı resmi yetkilendirmeye hazırdır.</p>
          </div>
          <div>
            <h3>Veri güvenliği</h3>
            <p>Rol tabanlı erişim (yönetici, hekim, ebe, hemşire), hasta verisinin şifrelenmesi, otomatik yedekleme ve kim neyi ne zaman değiştirdi sorusunu yanıtlayan tam denetim izi.</p>
            <div className="callout">
              <p><b>Karar destek, tanı değil.</b> PartoAI'nin uyarıları sağlık profesyonelinin değerlendirmesine sunulur. Klinik karar ve sorumluluk hekimdedir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>Pilot hastane arıyoruz</h2>
            <p className="muted">Yüksek doğum hacmine sahip ve dijital dönüşüme açık doğumhanelerle pilot uygulama yapmak istiyoruz.</p>
          </div>
          <div className="actions" style={{ alignSelf: "center", marginTop: 0 }}>
            <Link href="/iletisim?konu=demo" className="btn btn-teal">Demo ve pilot talebi</Link>
          </div>
        </div>
      </section>
    </>
  );
}
