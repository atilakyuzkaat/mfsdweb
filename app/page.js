import Link from "next/link";
import CtgTrace from "@/components/CtgTrace";
import PartoShowcase from "@/components/PartoShowcase";
import { services } from "@/lib/services";
import { resul } from "@/lib/team";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Doğumhanede doğru karar, doğru zamanda.</h1>
            <p className="lead">
              MFSD, perinatoloji uzmanlığını yazılımla buluşturan bir sağlık ve danışmanlık şirketidir. Hastanelere klinik danışmanlık, eğitim ve PartoAI dijital partogram sistemini sunuyoruz.
            </p>
            <div className="actions">
              <Link href="/projeler/partoai" className="btn">PartoAI'yi inceleyin</Link>
              <Link href="/iletisim" className="btn btn-ghost">Bizimle iletişime geçin</Link>
            </div>
          </div>
          <aside className="hero-aside">
            <strong>Klinik liderlik</strong>
            Çalışmalarımızın klinik içeriği, Türk Perinatoloji Derneği Yönetim Kurulu Başkanı Prof. Dr. Resul Arısoy tarafından yönetilir.
          </aside>
        </div>
        <CtgTrace />
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head">
            <h2>Ne yapıyoruz</h2>
            <p>Anne ve bebek sağlığında üç alanda çalışıyoruz. Her biri diğerini besliyor: sahada gördüğümüz sorunlar ürüne, üründen gelen veri eğitime dönüşüyor.</p>
          </div>
          <div className="rows">
            {services.map((s) => (
              <div className="row" key={s.id}>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.text}</p>
                  {s.link && <Link href={s.link.href}>{s.link.label}</Link>}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}><Link href="/hizmetler">Hizmetlerin ayrıntıları</Link></p>
        </div>
      </section>

      <PartoShowcase />

      <section className="section">
        <div className="wrap person">
          <div className="portrait" aria-hidden={!resul.photo}>
            {resul.photo ? <img src={resul.photo} alt={resul.name} /> : resul.initials}
          </div>
          <div className="measure">
            <h2>{resul.name}</h2>
            <p className="role">{resul.role}</p>
            <p>{resul.summary}</p>
            <Link href="/ekip">Ekibimizi tanıyın</Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap cols-2">
          <div>
            <h2>Kurumunuz için ne yapabileceğimizi konuşalım</h2>
            <p className="muted">Bir demo, pilot uygulama, eğitim ya da danışmanlık projesi için bize yazın. Doğum hacminizi ve mevcut sistemlerinizi paylaşırsanız ilk görüşmeyi buna göre hazırlarız.</p>
          </div>
          <div className="actions" style={{ alignSelf: "center", marginTop: 0 }}>
            <Link href="/iletisim?konu=demo" className="btn">Demo isteyin</Link>
            <Link href="/iletisim?konu=danismanlik" className="btn btn-ghost">Danışmanlık talebi</Link>
          </div>
        </div>
      </section>
    </>
  );
}
