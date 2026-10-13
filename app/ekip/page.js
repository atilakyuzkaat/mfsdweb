import Link from "next/link";
import PageHead from "@/components/PageHead";
import { resul, atil } from "@/lib/team";

export const metadata = {
  title: "Ekip",
  description: "MFSD'nin kurucuları: perinatoloji uzmanı Prof. Dr. Resul Arısoy ve teknoloji lideri M. Atıl Akyüz.",
  alternates: { canonical: "/ekip" },
};

function Portrait({ p }) {
  return (
    <div className="portrait" aria-hidden={!p.photo}>
      {p.photo ? <img src={p.photo} alt={p.name} /> : p.initials}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHead title="Ekip" crumb="Ekip" lead="Klinik deneyim ve yazılım mühendisliği aynı masada. Her ürün kararını hekim ve mühendis birlikte veriyor." />

      <section className="section" id={resul.slug}>
        <div className="wrap person">
          <Portrait p={resul} />
          <div>
            <h2>{resul.name}</h2>
            <p className="role">{resul.role}</p>
            <p className="measure">{resul.summary}</p>
            <div className="cols-2" style={{ marginTop: 36 }}>
              <div>
                <h3>Eğitim ve kariyer</h3>
                <ol className="timeline">
                  {resul.timeline.map(([y, t]) => (
                    <li key={y + t}><time>{y}</time> {t}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3>Klinik ilgi alanları</h3>
                <ul>{resul.focus.map((f) => <li key={f}>{f}</li>)}</ul>
                <h3 style={{ marginTop: 28 }}>Üyelikler</h3>
                <ul>{resul.memberships.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id={atil.slug}>
        <div className="wrap person">
          <Portrait p={atil} />
          <div className="measure">
            <h2>{atil.name}</h2>
            <p className="role">{atil.role}</p>
            <p>{atil.summary}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-2">
          <div>
            <h2>Birlikte çalışalım</h2>
            <p className="muted">Klinik danışman, araştırmacı ya da pilot kurum olarak projelerimize katılmak isterseniz bize yazın.</p>
          </div>
          <div className="actions" style={{ alignSelf: "center", marginTop: 0 }}>
            <Link href="/iletisim?konu=isbirligi" className="btn">İş birliği için yazın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
