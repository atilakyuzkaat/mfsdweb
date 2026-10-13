import Link from "next/link";

export const modules = [
  ["Dijital partogram", "WHO Labour Care Guide temelli; serviks açıklığı, baş seviyesi, fetal kalp hızı ve kasılmalar otomatik grafiklenir."],
  ["Risk sınıflama ve alarm", "Hasta kabulünde risk grubu belirlenir; eşik aşımlarında kırmızı ve sarı uyarı verilir."],
  ["Maternal erken uyarı (MEWS)", "Vital bulgulardan skor ve eskalasyon süresi hesaplanır; skordan bağımsız tetikleyiciler ayrıca izlenir."],
  ["NST/CTG değerlendirme", "Kural motoru ve yapay zekâ birlikte çalışır; ikisi ayrışırsa daha riskli kategori esas alınır. Resmi yorumu hekim imzalar."],
  ["Sezaryen ve Robson analizi", "Doğumlar Robson 10 gruba otomatik ayrılır; endikasyonlar kanıt düzeyine göre katmanlanır, yazdırılabilir kalite raporu üretilir."],
  ["Entegrasyon ve güvenlik", "HBYS, HL7 ve e-Nabız katmanı; rol tabanlı erişim, hasta verisi şifreleme ve tam denetim izi."],
];

export default function PartoShowcase({ full = false }) {
  return (
    <section className="section parto" id="partoai">
      <div className="wrap parto-grid">
        <div>
          <p className="parto-mark"><i aria-hidden="true" />Klinik doğrulama ve pilot aşamasında</p>
          <h2>PartoAI</h2>
          <p className="lead" style={{ color: "#efe7f2" }}>
            Doğum eylemini kâğıt partogram yerine ekranda izleyin. PartoAI verileri tek yerde toplar, kılavuz eşiklerini sizin yerinize takip eder ve müdahale gerektiren anı ekibe bildirir.
          </p>
          <p className="muted">
            MFSD bünyesinde, Prof. Dr. Resul Arısoy'un klinik yönlendirmesiyle geliştirildi. Eşikler hastane bazında yapılandırılabilir.
          </p>
          <div className="actions">
            <Link href="/iletisim?konu=demo" className="btn">Demo isteyin</Link>
            {!full && <Link href="/projeler/partoai" className="btn btn-ghost">Modülleri görün</Link>}
          </div>
          <p className="disclaimer">
            PartoAI bir klinik karar destek yazılımıdır; tanı koymaz. Her çıktı sağlık profesyonelinin değerlendirmesine sunulur ve son karar hekime aittir.
          </p>
        </div>
        <ul className="modules">
          {modules.map(([t, d]) => (
            <li key={t}><b>{t}</b><span>{d}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
