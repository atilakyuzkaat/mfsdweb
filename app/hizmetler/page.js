import Link from "next/link";
import PageHead from "@/components/PageHead";
import { services } from "@/lib/services";

export const metadata = {
  title: "Hizmetler",
  description: "Perinatoloji ve doğumhane danışmanlığı, dijital sağlık çözümleri ve hekim, ebe, hemşire eğitim programları.",
  alternates: { canonical: "/hizmetler" },
};

export default function Page() {
  return (
    <>
      <PageHead title="Hizmetler" crumb="Hizmetler" lead="Hastanelerle doğumhane kalitesini birlikte iyileştiriyoruz: süreci değerlendiriyor, araçları kuruyor ve ekibi eğitiyoruz." />
      <section className="section">
        <div className="wrap rows">
          {services.map((s) => (
            <div className="row" key={s.id} id={s.id}>
              <h3>{s.title}</h3>
              <div>
                <p>{s.text}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <p style={{ marginTop: 16 }}>
                  {s.link ? <Link href={s.link.href}>{s.link.label}</Link> : <Link href={`/iletisim?konu=${s.id}`}>Bu hizmet için bize yazın</Link>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>Bir projeye nasıl başlıyoruz</h2>
            <p className="muted">Her kurumun doğum hacmi, ekip yapısı ve altyapısı farklıdır. Önerimizi bunları gördükten sonra hazırlarız.</p>
          </div>
          <ol className="steps">
            <li><b>Ön görüşme</b>İhtiyacı, doğum hacmini ve mevcut sistemleri konuşuruz.</li>
            <li><b>Yerinde değerlendirme</b>Doğumhane süreçlerini, kayıtları ve altyapıyı inceleriz.</li>
            <li><b>Öneri ve plan</b>Kapsam, takvim ve başarı ölçütlerini yazılı olarak sunarız.</li>
            <li><b>Uygulama ve ölçüm</b>Pilotu başlatır, sonuçları birlikte izler ve raporlarız.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
