import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap measure">
        <h1>Bu sayfa bulunamadı</h1>
        <p className="lead">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <div className="actions">
          <Link href="/" className="btn">Ana sayfaya dönün</Link>
          <Link href="/iletisim" className="btn btn-ghost">Bize yazın</Link>
        </div>
      </div>
    </section>
  );
}
